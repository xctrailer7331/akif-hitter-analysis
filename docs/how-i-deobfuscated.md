# How I Deobfuscated It — A Walkthrough

A surface-level narrative of my reverse-engineering process. This is meant to be **educational** — what the workflow looks like when you encounter a four-layer obfuscated Chrome extension in the wild — without turning into a tutorial that someone could copy to build their own version of the tool.

I keep it practical and honest. The details of the sample-specific tooling stay out of this document; I talk about the **class** of approach at each stage and what went wrong / right.

---

## TL;DR

- **Time spent**: roughly one evening, maybe 4–5 hours end-to-end, including debugging the dead ends.
- **Tools**: off-the-shelf AST parsers (Babel), Node's built-in `vm` sandbox, a few dozen lines of custom glue code. No exotic reverse-engineering frameworks.
- **Hardest part**: not the obfuscation itself — recognizing the *variant* of each layer and finding the right countermeasure. The first three dead ends cost me more time than the actual decoding.
- **Total size reduction**: ~7.5 MB → ~300 KB (4% of original) across 8 files.

---

## Step 0 — Set up an isolated environment

Before looking at the code at all:

- Fresh throwaway VM (I use Hyper-V / VirtualBox, whatever is fast).
- Network limited to only the hosts I needed (`npm registry` and nothing else).
- No sensitive accounts, no real credit cards, no logged-in browser sessions.
- File system snapshot so I can roll back if something does execute that I didn't expect.

This is baseline hygiene, not anything specific to this sample. **Do not analyze a carding tool on your daily driver.** Even "just reading the source" can trigger execution paths if you accidentally run a file or load it into an extension context.

---

## Step 1 — Read the manifest first, always

Before running any tool, I opened `manifest.json` and `rules.json`. Eight out of ten times, a malicious extension tells you what it does through its permissions and declarative rules. Here are the tells that stood out:

- **`declarativeNetRequest` rules removing CSP from Stripe checkout.** There is no legitimate reason to strip Content-Security-Policy headers from a payment processor's domain.
- **`proxy` + `webRequest` + `webRequestAuthProvider` together.** This combo is the signature of an extension that wants to route traffic through an attacker-controlled proxy with authentication. Legitimate extensions that do one of these rarely do all three.
- **Host permission `<all_urls>`** combined with **content scripts on Stripe checkout**. The scope is suspicious before you even look at the code.

At this point I already knew I was looking at a carding tool. Everything from here was about confirming and documenting specifics, not about deciding whether the sample was malicious.

---

## Step 2 — Look at the code's shape, not its content

Each JS file was one very long line, full of `_0xabcdef` identifiers and hex numbers like `0xc9*0x4 + 0x5*-0x2f1`. This is the visual signature of [obfuscator.io](https://obfuscator.io/), specifically its "high obfuscation" preset.

What I looked for:

- A large array of strings at the top (the **string array**).
- An IIFE (immediately-invoked function expression) that starts with `(function(a, b){ ... while(!![]){ try{ ... parseInt(...) === b ...`. That's the **rotator** — it shuffles the string array until a checksum matches.
- A function named like `_0x4e57(index, key)` that takes two arguments and returns a decoded string (the **main decoder**).
- Inside other functions, small wrapper functions that call the main decoder with rearranged arguments (the **alias decoders**).

All four were present. That meant I was looking at the standard obfuscator.io string-array scheme — just with an unusually heavy alias layer.

---

## Step 3 — Try the off-the-shelf tools first

The honest part: I started with public tools.

### Attempt 1: `webcrack`

[webcrack](https://github.com/j4k0xb/webcrack) is the current leader for obfuscator.io output. I installed it, pointed it at the smallest file (`hcaptcha.js`), and waited.

It **recognized the string array** (I could see "String Array: _0xabcd, length 178" in debug output) but failed at the decoder step:

```
String Array Decoders:
```

Empty. webcrack's heuristic looks for a decoder function with a particular signature; this sample's aliases confused the detector. Without a decoder, webcrack couldn't substitute strings.

Interesting secondary issue: on my install, `webcrack` tried to use `isolated-vm` (a native Node module) and failed to build. I wrote a small shim that replaced `isolated-vm` with Node's built-in `vm` module. Even with that working, the core problem remained: no decoder, no progress.

### Attempt 2: `synchrony`

[synchrony](https://github.com/relative/synchrony) is a second popular JavaScript deobfuscator. I tried it next. It crashed:

```
Running StringDecoder transformer
Found string array at _0x8815 # 149
Caught an error while attempting to run AST visitor!
  node = { type: 'CallExpression', ... callee: Identifier 'parseInt' ... }
```

The crash came from synchrony's handling of `parseInt(aliasDecoder(...))` — the nested call inside the rotator tripped a visitor that assumed simpler structure.

I now had two dead ends. At this point I could have spent more time configuring workarounds for the existing tools, but the root problem was clear: **this sample's alias decoders are outside the happy path of both major public deobfuscators.** It was faster to write custom glue than to shoehorn either tool into it.

### Attempt 3: write the minimum needed

I wrote a small script (kept private for reasons discussed elsewhere in this repo) whose job was to:

1. Parse the file into an AST.
2. Extract just the three top-level pieces — string array function, rotator IIFE, main decoder — into a self-contained snippet.
3. Execute that snippet inside Node's `vm` module to initialize the decoder in memory.
4. Walk the AST and replace every call to the decoder (or any alias that wraps it) with the string value you get from calling it in the sandbox.

There's a trap in step 3: the rotator uses self-defending checksums. If the extracted snippet is even slightly reformatted (whitespace, comments) before being sent to `vm.eval`, the checksum diverges and the rotator hangs in an infinite loop. The fix is to pass the **exact original source slice** to `vm`, not a regenerated copy from the AST.

The trap in step 4: the alias decoders are per-scope (almost every function in the file has its own copy), and they sometimes reference each other. I iterated over them recursively: find aliases at the current scope, register them in the vm, then walk inward and repeat.

After one evening of debugging, the output was readable JavaScript with literal strings everywhere — a ~10× size reduction just from layer 1.

---

## Step 4 — Discover layer 2

I expected to be done, but opening the output I saw calls like:

```js
location.href.includes( __akifVM_68636170(0) )
```

`__akifVM_<hex>` — that's not obfuscator.io. That's the author's own thing.

Searching for the declaration, I found a second IIFE at the top of each file. It was cleaner than layer 1: a visibly handwritten function that took an index, looked up a ciphertext in a `|`-delimited string, reversed it, base64-decoded it, XOR'd it against a 16-byte key that cycled with the byte index, and returned a string.

The decoder itself is about thirty lines of straightforward code. If you're used to reading JS, you can understand it in a minute or two. That suggested the author wrote this layer by hand to add a second decoding step that public tools wouldn't automatically handle.

### Trap 1: the bogus TextDecoder method

The UTF-8 conversion inside the VM looks like:

```js
if (typeof TextDecoder !== "undefined")
  return new TextDecoder("utf-8")["\xC9\xAB\x18\xF3\x1De"]( new Uint8Array(bytes) );
// fallback below uses decodeURIComponent(escape(...))
```

`"\xC9\xAB\x18\xF3\x1De"` is a string that is **not** a real method of `TextDecoder`. In Node.js and all modern browsers, `TextDecoder` is always defined, so the top branch is always taken, and it always throws `TypeError: ... is not a function`.

The **working** decoder only runs if `typeof TextDecoder === "undefined"`. The first time I ran the IIFE in my sandbox, every call threw. I spent maybe fifteen minutes assuming my extraction was broken before I re-read the code and realized I had to **stub TextDecoder out of my sandbox globals**.

Once I did that, the fallback `decodeURIComponent(escape(…))` path ran and strings came out cleanly. This is a minor but clever anti-tamper: analysts who run code in a permissive sandbox see immediate exceptions, and if they don't think about why, they give up.

### Trap 2: two poisoned base64 chunks

After resolving most indices successfully, I had two indices (one in `background.js`, one in `inject.js`) where `atob` threw with `InvalidCharacterError`. Looking at the ciphertext:

```
...OON+9Wit>CKgIMMQJYy+...
         ^
```

The character `>` is not part of the standard base64 alphabet (`A-Za-z0-9+/=`). A strict `atob` refuses. A lenient `Buffer.from(s, 'base64')` in Node silently **drops the invalid character**, but that shifts the remaining 6-bit alignment and corrupts the bytes around the injection point.

Either way, you can't cleanly decode those two chunks. But context helps: the index in `background.js` is used in a string-concat chain that builds a PAC script, sandwiched between lines targeting `stripe.com` and `stripecdn.com`. From the pattern, the chunk is another PAC domain rule — in this sample, reconstructing it by continuing the pattern gave `host === "stripe.network" || dnsDomainIs(host, ".stripe.network") ||`.

The other poisoned chunk turned out to be an HTML filter-button fragment. Same reconstruction approach — surrounding context was enough.

My read: this is a deliberate trap for analysts. The author picked two indices that **aren't actually reached at runtime** in normal operation (they build PAC/HTML strings that work even without them), poisoned them with one non-base64 character each, and counted on analysts to either (a) crash and give up, or (b) accept lenient decode and get misleading plaintext that they'd report as "broken."

A defender only needs to know this trap exists, not bypass it. I documented it and moved on.

---

## Step 5 — Flatten the CFF wrappers

After layers 1 and 2, the code was readable but noisy. Functions looked like:

```js
function doWork(a, b, c) {
  const ops = {
    xF1: (x, y) => x + y,
    xF2: (x, y) => x === y,
    xF3: (x, y, z) => x ? y : z
  };
  const alias = ops;
  return alias.xF1(alias.xF3(alias.xF2(a, c), a, c), b);
}
```

This is control-flow flattening through **forwarder objects**. The recipe is trivial (`xF1` is just `+`, `xF2` is just `===`, etc.) but the author sprinkled them across every function, and sometimes added an alias (`const alias = ops`) to defeat naive inliners.

The fix: AST walk, for every local variable whose initializer is an object (inline or empty-then-assign) where every property is a one-expression forwarder function, replace every reference `obj.prop(args…)` with the inlined expression. Iterate to fixed point because inlining one layer sometimes exposes another.

The dead wrapper objects that remained (ones whose properties had non-ASCII anti-tamper names that nothing live referenced) I left alone after pruning unreachable props — they're dead at runtime anyway.

---

## Step 6 — Rename the hex identifiers

Now everything was in place, but every variable was still `_0xabcdef`. You can read code like that, but slowly. For the final pass I used Babel's `scope.rename()` to replace every binding matching `/^_0x[a-f0-9]+$/` with a placeholder name based on what kind of binding it was:

- Variables → `v_<counter>`
- Function declarations → `fn_<counter>`
- Parameters → `p_<counter>`
- `catch` parameters → `err`

Per-scope counters, respecting scope boundaries so two unrelated `_0xabc` variables in different scopes get different new names.

**I did not attempt semantic renaming** (guessing that a function is "sendToTelegram" from its usage). That's slow, error-prone, and unnecessary for defensive work — the IOCs don't care what the function is called.

---

## Step 7 — Verify

After all four passes:

- Run `node --check` on every output file to confirm the syntax is valid.
- Grep for the old obfuscation fingerprints: `__akifVM_`, `_0x[a-f]+`, `!![]`, `v_N.XXXX(`, etc. All should be zero or close to zero.
- Spot-check readability: open a few functions and check that string literals are visible, control flow is clear, and the code looks like something a human might write (even if verbose).

All eight files passed. Total final size ~300 KB from ~7.5 MB original.

---

## What I got wrong and learned

**Underestimating layer 2 discovery.** I was ready to call it done after layer 1 and almost missed that `__akifVM_*` was a separate thing. Habit: after every deobfuscation pass, open the output and search for anything that looks like a function call with an opaque name. Don't trust the tool's report that says "done."

**Overtrusting lenient decoders.** When `atob` fails, the instinct is to try `Buffer.from(..., 'base64')` which is more permissive. For analysis this is tempting but risky — in this sample, lenient mode produced garbage bytes that looked like successful decoding. Always check that the plaintext makes sense in context before trusting a decode.

**Spending too long on the first tool.** I burned maybe forty minutes trying to coax webcrack and synchrony into handling the alias-decoder variant before realizing a custom script would take less time. Rule of thumb: if a public tool hasn't worked in 20 minutes and you know the root cause, write the minimum needed yourself. Debugging someone else's tool internals is almost always slower than writing the 50 lines you actually need.

**Assuming anti-tamper means attack.** The bogus `TextDecoder` method and poisoned base64 chunks looked like they might be active anti-analysis — e.g., the code could have been designed to detect them and execute a different, aggressive branch. In reality they're passive traps: they just crash or mislead, they don't fight back. That's reassuring but I only confirmed it by carefully tracing every code path.

---

## What I did **not** do

- I did not modify and run the extension to observe its network behavior. The IOCs in this repo come from static analysis of the source — domain strings, URL templates, message-type constants. Dynamic analysis would add traffic captures, but the static IOCs are enough for defenders and I wanted to minimize risk of accidentally sending test requests to the operator's Telegram bot.
- I did not try to identify the operator. The Telegram handle `@akifshitter` is obviously the distribution channel; I did not interact with it, follow links, or attempt OSINT on the person behind it. That's for law enforcement to do with proper authority.
- I did not publish the deobfuscated source or the tooling. Reasons covered in the main README and the LICENSE.

---

## If you're learning reverse engineering

This sample is a realistic example of a "moderate" level of obfuscation — not trivial, not truly hard. Here's what I'd suggest as the takeaway for someone getting into JavaScript malware analysis:

1. **Start with the manifest**, every time. It tells you the threat model before you touch code.
2. **Learn AST-based deobfuscation**. Regex-based deobfuscation stops working past trivial obfuscation. Babel (or Acorn + a walker) lets you do real transformations.
3. **Understand the standard obfuscators**. obfuscator.io's patterns are public, documented, and survive in most samples with only small variations.
4. **Sandbox things you don't understand yet**. Node's `vm` module is enough for 95% of what you'll encounter. Only reach for `isolated-vm` when you need real memory/CPU isolation against hostile code.
5. **Don't publish your deobfuscation of active malware.** Share IOCs, detection rules, and technique overviews. Leave the weaponizable artifacts private.

That last point is the one most junior researchers get wrong. Don't be that researcher. The ecosystem is small and people notice.
