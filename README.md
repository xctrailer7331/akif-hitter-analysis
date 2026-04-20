# Akif's Hitter V2 — Threat Analysis and Defense Guide

> **Defensive documentation of a malicious Chrome extension I found in the wild.**
> "Akifs Hitter V2" is a Stripe carding (credit-card checker) tool distributed through Telegram and underground forums. This repository documents the threat so that the ecosystem can **block** it, users can **remove** it from their browsers, and Stripe / browser vendors can take action.

---

## Scope and intent

This repository:

- ✅ Describes the threat **at a high level** (what it does, who it targets)
- ✅ Publishes **detection assets**: YARA rule, IOC lists, Chrome block policy
- ✅ Provides a **removal guide** for affected users
- ✅ Provides **responsible-disclosure templates** for Stripe / hCaptcha / Chrome
- ✅ Provides publish deobfuscated source code
- ❌ Is **not** a function-by-function walkthrough
- ❌ Is **not** a "how to build your own" tutorial

My goal is to help defenders and victims, not to provide uplift to attackers.

---

## Table of contents

1. [What is the threat](#what-is-the-threat)
2. [How it spreads](#how-it-spreads)
3. [What it does (high level)](#what-it-does-high-level)
4. [Who it hurts](#who-it-hurts)
5. [Technical summary](#technical-summary)
6. [How I found and analyzed it](#how-i-found-and-analyzed-it)
7. [Full deobfuscation walkthrough](docs/how-i-deobfuscated.md)
8. [IOCs and detection](#iocs-and-detection)
8. [Blocking (enterprise policy)](#blocking-enterprise-policy)
9. [Removal guide for victims](docs/removal-guide.md)
10. [Responsible disclosure](disclosure/)
11. [Contributing](#contributing)

---

## What is the threat

**Akifs Hitter V2** is a malicious Chrome extension I encountered being shared in Telegram channels. It is not distributed through the Chrome Web Store — users load it manually via `chrome://extensions/` in developer mode. Once loaded, it:

- Injects into **Stripe checkout** pages (`checkout.stripe.com` and `cs_(live|test)_*` session URLs)
- Bypasses **hCaptcha** challenges via synthesized pointer/mouse event sequences
- **Autofills and submits** stolen card data at scale
- Exfiltrates results to an operator-controlled **Telegram bot**
- Routes card-test traffic through a **rotating proxy pool** to evade rate limits / geo-fencing

Tools of this class are called "checkers" or "hitters" in underground communities. They test whether stolen credit card numbers are still live by attempting real (small-amount) charges against a payment processor — in this case, Stripe.

**Naming fingerprints found in the extension itself:**
- `manifest.json` → `"name": "Akifs Hitter"`, `"description": "Akif's System - Special For Stripe Checkouts"`
- `welcome.html` → Telegram invite link `https://t.me/akifshitter`
- UI text → "AKIF HITTER V2", "Paid Successfully ✓"
- Runtime namespace → `window.__AKIF_HCAPTCHA_LOADED`, CSS classes prefixed `akif-*`

---

## How it spreads

Distribution channels I directly observed:

- **Telegram** groups and channels (invite `@akifshitter` is hardcoded in the extension's welcome screen)
- **Underground forums** — sometimes paired with tutorial videos
- **Not on the Chrome Web Store** — its manifest and permission profile clearly violate store policy

Installation requires the user to enable "Developer mode" at `chrome://extensions/` and load the unpacked extension. So the user is usually either the operator themselves, or a phishing victim tricked with promises like "free premium subscriptions" / "auto-claim tool."

---

## What it does (high level)

Described by **observable effects** rather than source code:

### 1) Hijacks the Stripe checkout DOM
The extension registers content scripts that match `checkout.stripe.com` and Stripe checkout session URLs. It uses `declarativeNetRequest` rules to strip `Content-Security-Policy` and `X-Frame-Options` headers from Stripe pages, allowing the checkout to be embedded and programmatically driven from within the extension's own UI.

### 2) Batch-tests stolen cards
The operator pastes a list of cards in `card|mm|yy|cvv` format. For each card, the extension:
- Fills the Stripe payment form
- Solves hCaptcha if present
- Submits the payment
- Labels the result as success / fail / 3DS-required

### 3) Exfiltrates results
Successful hits are sent to `api.telegram.org/bot<TOKEN>/sendMessage` with HTML-formatted messages. The bot token and chat ID are **supplied by the operator** during setup — they are not hardcoded, so each copy of the extension reports to a different operator.

### 4) Rotates proxies to hide source IP
A PAC (Proxy Auto-Config) script is generated dynamically. **Only** traffic to the target domains (Stripe, hCaptcha, IP-check services) is routed through the proxy — everything else goes direct. This is both for efficiency and to keep operator's normal browsing uncontaminated.

### 5) Harvests merchant publishable keys
Any page the victim visits is scanned for Stripe publishable keys (`pk_live_*` / `pk_test_*`). These can be used to attempt charges against *someone else's* Stripe merchant account, meaning the chargebacks, fraud flags, and account reviews hit a third-party merchant — not the operator.

### 6) BIN enrichment
The first 6 digits of each card (BIN) are queried against `lookup.binlist.net` to retrieve issuer, card type, and country. This information is included in the Telegram exfil message so the operator can triage results.

### 7) On-screen UI
For every attempt, a toast notification appears in the victim's browser. Distinctive CSS classes: `akif-toast-v5`, `akif-cyber-toast`, `akif-filter-chip`, `akif-clear-chip`, `card-toast`. Headlines include "AKIF HITTER V2" and "Paid Successfully ✓".

---

## Who it hurts

| Party | Impact |
|---|---|
| **Cardholders** | Unauthorized charge attempts against their cards; accounts placed on fraud hold |
| **Stripe merchants** | If their `pk_live_*` is harvested from their own site, their account absorbs the chargebacks, Radar penalties, and account review |
| **Stripe** | Platform-wide fraud noise, erosion of merchant trust, resource drain on fraud/risk teams |
| **hCaptcha and sites using it** | Automation technique propagates to other abuse scenarios |
| **The person who installs it** | Often exploited too — the Telegram credentials are controlled by the tool's **operator**, not the installer, so "hits" generated on the installer's machine are exfiltrated to the operator. The installer gets used for their IP address and is left holding the legal bag if they're caught. |

---

## Technical summary

**Extension layout:**
- Manifest V3
- Permissions requested: `storage, activeTab, scripting, declarativeNetRequest, declarativeNetRequestWithHostAccess, offscreen, downloads, clipboardWrite, tabs, webNavigation, alarms, proxy, webRequest, webRequestAuthProvider`
- Host permission: `<all_urls>` — can read and modify every website the user visits
- 8 JavaScript files, ~7.5 MB total before deobfuscation

**Obfuscation (four layers):**
1. [obfuscator.io](https://obfuscator.io/) string-array + alias decoders
2. Author-added VM wrapper (`__akifVM_<hex>`): reverse + base64 + XOR with rotating per-index key, plus anti-tamper (bogus method name, deliberately invalid base64 chunks)
3. Control-flow-flattening forwarder objects
4. Hex-mangled identifiers (`_0x1a2b3c` everywhere)
5. Self-defending `while(!![])` rotator loops

For a general overview of these techniques see [`docs/obfuscation-overview.md`](docs/obfuscation-overview.md). That document describes the **class** of obfuscation, not a step-by-step walkthrough of this specific sample.

---

## How I found and analyzed it

The extension showed up in someone's browser in my circle via a Telegram share. I pulled the folder and looked at `manifest.json` first:

- The permission list reads like a checklist for browser-based fraud (`proxy`, `webRequest`, `webRequestAuthProvider`, `declarativeNetRequest`, `<all_urls>`)
- `rules.json` explicitly strips CSP and X-Frame-Options from Stripe checkout — no legitimate extension needs this
- The hardcoded Telegram handle `@akifshitter` and the word "hitter" in the name are underground-tool tells
- `inject.js` alone is 5.9 MB — no ordinary extension is that size

I analyzed it in an isolated environment (throwaway VM, restricted network, logging only). My process at a high level:

1. Documented manifest, permissions, rules
2. Identified the four obfuscation layers
3. Wrote AST-based deobfuscation tooling locally (the `obfuscator.io` alias-decoder variant trips off-the-shelf tools like `webcrack` and `synchrony`)
4. For the author's custom VM wrapper: executed it in a Node `vm` sandbox deliberately missing `TextDecoder` to avoid the anti-tamper bogus-method trap
5. Discovered two base64 chunks containing bytes outside the standard alphabet — anti-analysis poisoning that `atob` (strict) rejects but `Buffer.from(s, 'base64')` (lenient) silently accepts, at the cost of corrupting the bytes around the injected character
6. Flattened control-flow forwarders to fixed point, scope-aware renamed the hex identifiers
7. Extracted IOCs and behavioral patterns

**Full walkthrough of the process** — including the dead ends, the anti-tamper traps, and the lessons learned — is in [`docs/how-i-deobfuscated.md`](docs/how-i-deobfuscated.md). Surface-level and educational, not a step-by-step recipe.

**I am not publishing the deobfuscation tooling.** It was tuned to this specific sample's patterns, and publishing it would give less-skilled attackers a working "unlock" toolchain. General-purpose deobfuscators (webcrack, synchrony) already exist for the classes of obfuscation involved.

**I am not publishing the deobfuscated source.** Same reasoning: the deobfuscated code is usable as a working copy by anyone who can `git clone`. Defensive value for the community is in the IOCs and detection rules, which I'm providing in full.

---

## IOCs and detection

### Full lists

- [`iocs/domains.txt`](iocs/domains.txt) — All domains referenced or targeted
- [`iocs/urls.txt`](iocs/urls.txt) — Full URLs (endpoints)
- [`iocs/message-types.txt`](iocs/message-types.txt) — `chrome.runtime.sendMessage` type strings
- [`iocs/regex-patterns.txt`](iocs/regex-patterns.txt) — Characteristic regexes the tool uses
- [`iocs/iocs.json`](iocs/iocs.json) — Structured JSON for SIEM / MISP import
- [`detection/akif-hitter.yar`](detection/akif-hitter.yar) — YARA rule for scanning extension folders / archives

### Highlights

**Domains (hardcoded in the tool's PAC target list):**
```
stripe.com, *.stripe.com
stripe.network, *.stripe.network
stripecdn.com, *.stripecdn.com
link.com, *.link.com
hcaptcha.com, *.hcaptcha.com
api.ipify.org
ipinfo.io
ifconfig.me
lookup.binlist.net
api.telegram.org         (exfil endpoint)
t.me/akifshitter         (community/distribution link)
```

**chrome.runtime message types (unique to this extension):**
```
AKIF_HIT_SEND
AKIF_GET_CURRENT_IP
AKIF_PROXY_TEST
TELEGRAM_SEND
TELEGRAM_SEND_DIRECT
PROXY_FETCH
BACKGROUND_FETCH
CAPTURE_SCREENSHOT
SET_ACTIVE_PROXY
CLEAR_ACTIVE_PROXY
UPDATE_GLOBAL_PROXY_LIST
PLAY_SUCCESS_SOUND
PLAY_BACKGROUND_MUSIC
```

**Visible UI footprint (on an infected browser tab):**
```
CSS classes:  akif-toast-v5, akif-cyber-toast, akif-filter-chip,
              akif-clear-chip, akif-progress-bar-v5, card-toast,
              logout-square-btn, header-controls
data attrs:   data-f="all|success|error"
              data-clear="history"
window prop:  window.__AKIF_HCAPTCHA_LOADED
text:         "AKIF HITTER V2", "Paid Successfully ✓",
              "Clear logs", "akifshitter"
```

**File-level fingerprints:**
- `manifest.json`: `"name": "Akifs Hitter"` and `"description": "Akif's System - Special For Stripe Checkouts"`
- `welcome.html`: Telegram invite `https://t.me/akifshitter`
- `rules.json`: three `declarative_net_request` rules that strip CSP and X-Frame-Options from Stripe checkout

---

## Blocking (enterprise policy)

**Chrome Enterprise / managed environments:** see [`detection/chrome-policy-block.md`](detection/chrome-policy-block.md). Because each copy of the extension gets a fresh Extension ID when loaded unpacked, ID-based blocklisting is weak. Block by (a) forbidding developer-mode extension loading, (b) deploying YARA scanning on endpoint agents, and (c) alerting on the `chrome.runtime` message types or CSS classes above.

**Home users:** check `chrome://extensions/` for anything named "Akifs Hitter", "Akif's System", or any loaded-unpacked extension that requests `proxy` + `webRequest` + `declarativeNetRequest` + `<all_urls>` together. Remove immediately. Full removal guide: [`docs/removal-guide.md`](docs/removal-guide.md)

---

## Responsible disclosure

**Stripe** was notified via `security@stripe.com` and Stripe's HackerOne program:
- Initial report date: 2026-04-20
- Contents: manifest, IOC list, high-level behavior summary, PAC target list
- Source code was not shared; Stripe's fraud team has its own sample collection

Template: [`disclosure/stripe-disclosure-template.md`](disclosure/stripe-disclosure-template.md)

**hCaptcha** (for the automated click-solver): `security@hcaptcha.com`
**Google Chrome Web Store team**: `chromewebstore-developer-support@google.com` (even though this sample is not on the store, the team tracks lookalikes)

See [`disclosure/`](disclosure/) for templates.

---

## Contributing

Useful contributions:
- New variants (different domains, different message types, renamed namespaces)
- YARA / Sigma rule improvements
- Additional IOCs from independent observation
- Translations of the removal guide

**Not accepted:**
- Pull requests containing deobfuscated source
- Pull requests that make the extension more functional or easier to repurpose
- "Here's how to make your own" contributions

Open an issue or PR. For sensitive reports, email me directly at `xctrailer7331@gmail.com`.

---

## Contact

- **Public issues / PRs**: use the GitHub issue tracker on this repository.
- **Sensitive reports, variant intel, direct questions**: `xctrailer7331@gmail.com`

Please do **not** send deobfuscated source or working copies of the extension. If you have a new variant, describe what you saw (domains, file hashes, distribution channel) — not the sample itself.

---

## License

[MIT License](LICENSE) for documentation and detection rules. Attribution appreciated.

---

## Acknowledgements

Thanks to the maintainers of [obfuscator.io](https://obfuscator.io/), [webcrack](https://github.com/j4k0xb/webcrack), and [synchrony / deobfuscator](https://github.com/relative/synchrony) — understanding how mainstream deobfuscators approach these patterns was foundational for recognizing the variant used here.
