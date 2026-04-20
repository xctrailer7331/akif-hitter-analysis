# Obfuscation Overview

A general description of the obfuscation techniques used in this sample. This document focuses on the **classes** of obfuscation used — it does not walk through the sample's specific source. If you are a defender or a security student, this page is a primer on what you are looking at when you open one of the files.

I am not publishing the tooling I wrote to reverse these layers. General-purpose deobfuscators exist for every class described below, and pointing to those is enough.

---

## Layer 1 — `obfuscator.io` string-array scheme

The outermost and most common layer. [obfuscator.io](https://obfuscator.io/) is a free online JavaScript obfuscator widely used by both legitimate developers (DRM, license checks) and malware authors. The scheme has been around for years and is well-studied.

### Pattern

A large array of base64-encoded / XOR-masked strings is placed at the top of the file. All string literals in the rest of the file are replaced with calls to a decoder function that looks up strings by index:

```js
// Illustrative — not from the sample
function _0xabcd() {
  var arr = ['encoded1', 'encoded2', ...];
  _0xabcd = function () { return arr; };
  return _0xabcd();
}

(function (src, target) {
  while (true) {
    try {
      // parseInt-based math over decoded strings, shuffling
      // array until a checksum matches `target`
      if (mathResult === target) break;
      src.push(src.shift());
    } catch { src.push(src.shift()); }
  }
})(_0xabcd, 0x12345);

function decode(idx, key) {
  // takes an index, un-shuffles, XOR/base64 decodes
  return arr[idx - CONSTANT];
}

console.log(decode(0x3b, 'ab12'));   // => "some string"
```

### Key properties

- **Self-defending**: the rotator `while(true)` loop uses a checksum derived from string lookups. If the code is beautified, reformatted, or has globals replaced (e.g. `console.log` instrumented), the checksum diverges and the loop infinite-loops. This is why naive decoders stall.
- **Integer obfuscation**: decimal constants are broken into hex arithmetic like `0xc9*0x4 + 0x5*-0x2f1 + -0x443*-0x3` — easy to constant-fold but noisy in source view.
- **Alias decoders**: newer variants (including this one) wrap the main decoder behind a pyramid of trivial forwarder functions — `f1(a,b,c,d,e) => decode(a + K1, c)`, `f2(a,b,c,d,e) => decode(e + K2, a)`, etc. Every call site uses an alias with reordered arguments, defeating naive pattern-match deobfuscators that look for a single decoder signature.

### Standard countermeasure

- [webcrack](https://github.com/j4k0xb/webcrack) handles classic obfuscator.io output well.
- [synchrony](https://github.com/relative/synchrony) is a well-maintained alternative.
- For alias-decoder variants that defeat those tools, authors typically fall back to executing the string-array + rotator + decoder in a Node `vm` sandbox and then AST-replacing every decoder call with the resolved literal. This is a well-known technique and not unique to this sample.

---

## Layer 2 — Custom author-added VM (`__akifVM_*`)

Sitting inside layer 1, the author placed a second, simpler string container of their own design. Once layer 1 is removed, each file still has an IIFE like:

```js
var __akifVM_XXXXXXXX = (function () {
  var keyHex   = "<32 hex chars>";            // 16-byte XOR key
  var chunks   = "<base64>|<base64>|...";     // pipe-delimited
  var cache    = {};
  var key      = [/* bytes derived from keyHex */];

  function reverseStr(s) { return s.split('').reverse().join(''); }
  function b64ToBytes(s) { /* base64 decode */ }
  function bytesToStr(b) {
    // Tries TextDecoder first (but calls a bogus method on it),
    // falls back to decodeURIComponent(escape(...))
    ...
  }

  return function (idx) {
    if (cache[idx] !== undefined) return cache[idx];
    var bytes = b64ToBytes(reverseStr(chunks.split('|')[idx]));
    for (var i = 0; i < bytes.length; i++)
      bytes[i] = (bytes[i] ^ key[i % key.length] ^ (i & 255)) & 255;
    return cache[idx] = bytesToStr(bytes);
  };
})();

// Usage throughout the rest of the file:
window.location.href.includes( __akifVM_XXXXXXXX(12) );
```

### Why this layer exists

Layer 1 (`obfuscator.io`) is mass-decodable — any serious reverse engineer can run it through a public tool. Adding a custom second layer means that even after the public-tool step, the most interesting strings (URLs, regex patterns, message types) remain opaque. It buys the author time against low-effort analysis.

### Anti-tamper trick inside this layer

The fallback from `TextDecoder` to `decodeURIComponent(escape(...))` is real, but the `TextDecoder` branch calls a **bogus method** whose name is a binary-escape string that is not a real method of `TextDecoder`:

```js
return new TextDecoder("utf-8")["\xC9\xAB\x18\xF3\x1De"](new Uint8Array(bytes));
// -> TypeError: ... is not a function
```

The reason: in Node.js and modern browsers, `TextDecoder` is always defined, so the decoder always takes this branch and always throws. The working fallback path runs **only if `typeof TextDecoder === "undefined"`**. So analysts who run the code in a stock VM see nothing but exceptions until they realize `TextDecoder` must be undefined.

### Poisoned base64 chunks

Two of the hundreds of ciphertext chunks contain a character outside the standard base64 alphabet (`A-Za-z0-9+/=`). Strict `atob` throws `InvalidCharacterError`; lenient `Buffer.from(s, 'base64')` silently drops the invalid character, which shifts 6-bit alignment and **corrupts the tail of the decoded plaintext**. Either way, that index cannot be decoded cleanly.

The trick:
- If the analyst uses `atob`, decoding crashes — they assume the sample is broken.
- If they use `Buffer.from`, decoding "succeeds" but the plaintext is garbage — they get a misleading result.

In this sample those two indices are never called in a runtime-reachable path (they sit in string-concat chains whose result is a PAC script or innerHTML — the operator can generate working output without them). So this is a pure defensive trap for analysts, not a runtime feature.

Workaround if you need to analyze those specific chunks: read them as pre-substituted base64 (replace the invalid char with `A` before decoding) and accept that a 1–3 byte window near the substitution is garbage. Context is usually enough to recover the intent.

### General countermeasure

This type of "data + pure function" VM is trivial to resolve once identified. Extract the IIFE with a parser, run it in a sandbox where you've stubbed out only the APIs needed, call the returned resolver for every index, and AST-replace every call to the VM identifier with the resulting string literal. Nothing clever needed on the analyst's side — just don't fall for the anti-tamper.

---

## Layer 3 — Control-flow-flattening forwarders

Scattered through almost every function in the sample are "forwarder object" declarations that route operations through property access:

```js
// Illustrative
function doThing(a, b, c) {
  const ops = {
    KqSRs: function (x, y) { return x + y; },
    iIErT: function (x, y) { return x === y; },
    PhwNp: function (x, y) { return x * y; },
    sfMrj: function (x, y, z) { return x ? y : z; }
  };
  return ops.KqSRs(ops.PhwNp(a, b), ops.sfMrj(ops.iIErT(a, c), a, c));
}
// Equivalent to:
// return (a * b) + ((a === c) ? a : c);
```

### Key properties

- Every function in the file declares its own local `ops`-like object; the member names are random.
- Some uses alias the object first: `const aliasOps = ops; aliasOps.KqSRs(...)` — defeating naive inliners that look for the original name.
- Some use "empty-then-assign" form: `const ops = {}; ops.KqSRs = function(...){...};` rather than an inline object literal.
- The "recipes" are always pure functions (no side effects) of a single expression: binary op, unary op, ternary, or function call forwarding.

### General countermeasure

AST walk: for every local variable whose initializer is an object (or an empty object followed by member assignments) and every property is a one-expression forwarder function, replace every reference `var.prop(args...)` with the inlined expression. Iterate to fixed point, track aliases, be careful not to rewrite objects that have stateful mutation.

---

## Layer 4 — Hex-mangled identifiers

Every variable, parameter, function name, and local property is renamed to `_0x<random hex>`:

```js
function _0x1a2b3c(_0x4d5e6f, _0x7a8b9c) {
  var _0xdef012 = _0x4d5e6f[_0x7a8b9c];
  return _0xdef012 + 1;
}
```

### Key properties

- No information: names are generated at obfuscation time and carry no trace of the original names the author chose.
- Scope-aware: the same `_0x4d5e6f` in two different functions refers to two different variables. Any renamer has to respect scope.
- Collision noise: some collisions are intentional — different scopes use the same hex name, so a naive "replace `_0x4d5e6f` with `foo`" breaks the program.

### General countermeasure

Use the AST library's `scope.rename()` (e.g. Babel's) to rename bindings systematically within their scope. Replace with `v_N`, `fn_N`, `p_N` placeholders if you don't want to guess semantic names, or use an LLM-assisted pass to suggest names based on usage context.

---

## Layer 5 — Self-defending runtime (briefly)

Several of the obfuscated files contain standard "self-defending" boilerplate: tight regex-based checks on function source text (`toString()`), catastrophic-backtracking regexes that hang if the function has been beautified, infinite loops that activate if a breakpoint is detected. These are stock obfuscator.io features and well-documented elsewhere.

Countermeasure: run extracted chunks in an isolated `vm` context with the `String.prototype.search` / `match` prototype replaced by a no-op so the backtracking never fires.

---

## Putting it together

A typical full-stack analysis of a sample of this class follows these steps (pipeline common across many tools, not unique to this sample):

1. **Pre-pass**: inline trivial object-property references (`obj.prop` where `obj` is a single-assignment literal) — reduces noise and exposes patterns underneath.
2. **Layer 1**: extract string array + rotator + decoder + alias decoders, execute in a controlled `vm`, AST-replace decoder calls with literals.
3. **Layer 2**: if the sample has a custom secondary wrapper, identify it, stub anti-tamper APIs, execute the IIFE, replace wrapper calls with literals.
4. **Layer 3**: AST walk to flatten CFF forwarders to fixed point.
5. **Layer 4**: scope-aware rename hex identifiers to readable placeholders.
6. **Finalize**: `node --check` the output; spot-check that strings are readable and no decoder-call remnants remain.

Expected result: 85–97% size reduction versus the obfuscated input, with all string literals visible and control flow readable.

---

## Recommended reading for defenders and students

- [obfuscator.io documentation](https://obfuscator.io/docs) — read the options; each one you see enabled tells you how the author expected the code to be analyzed.
- [webcrack docs](https://webcrack.netlify.app/) — a thorough, well-tested implementation of the countermeasures described here for the layer-1 class.
- [synchrony](https://github.com/relative/synchrony) — alternative, also actively maintained.
- Talks from OffensiveCon, Virus Bulletin, and OBTS on JavaScript malware analysis routinely cover this territory; searching those archives is far more useful than any one blog post.

---

## Note on responsible publication

The descriptions above are intentionally at the "class" level. I do not walk through specific function names, line numbers, or source slices from this sample, because that material provides uplift to people who want to build their own version of the tool. Defenders do not need any of that detail — the IOCs and the YARA rule in this repo are sufficient for detection and blocking.
