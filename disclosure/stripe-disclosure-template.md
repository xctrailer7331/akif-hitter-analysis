# Stripe — Responsible Disclosure Template

Use this template to report Akifs Hitter V2 (or a variant) to Stripe's security team.

**Where to send:**
- Email: `security@stripe.com`
- HackerOne: [https://hackerone.com/stripe](https://hackerone.com/stripe) (for vulnerability-class reports; for threat-intelligence reports prefer email)

---

## Subject line

```
Threat intel: malicious Chrome extension targeting Stripe checkout ("Akifs Hitter V2")
```

---

## Body

```
Hello Stripe Security,

I am reporting a malicious Chrome extension that targets Stripe checkout pages
for credit-card fraud ("carding"). This is a threat-intelligence report, not a
vulnerability in Stripe's platform.

Name:          Akifs Hitter V2
Distribution:  Telegram (@akifshitter) and underground forums.
               Not distributed via the Chrome Web Store.
Install vector: Manual load as unpacked extension (developer mode).
First observed: <YYYY-MM-DD when you first saw it>

Extension capabilities (high level):

1. Content script injection into `checkout.stripe.com` and any URL matching
   `cs_(live|test)_[A-Za-z0-9]{8,}` (Stripe Checkout Session IDs).
2. `declarativeNetRequest` rules that strip `content-security-policy`,
   `content-security-policy-report-only`, and `x-frame-options` headers
   from Stripe checkout responses, enabling programmatic iframe embedding.
3. Bulk autofill of operator-supplied card data in `PAN|MM|YY|CVV` format
   against the Stripe checkout form, with hCaptcha auto-solve via
   synthesized pointer/mouse event sequences.
4. Harvesting of Stripe publishable keys matching `/pk_(live|test)_[a-zA-Z0-9]+/`
   from the victim's page DOM and all `<script>` contents, plus
   `[data-stripe-publishable-key]` attributes.
5. BIN enrichment via `https://lookup.binlist.net/<PAN[0:6]>`.
6. Exfiltration of card-test results to an operator-configured Telegram bot
   (`https://api.telegram.org/bot<TOKEN>/sendMessage`). Token and chat ID
   are configured by the operator at install time — not hardcoded.
7. Proxy rotation via a PAC script that targets only Stripe, Link,
   hCaptcha, and IP-check services — the operator's non-target traffic
   remains direct.

Target-domain list from the tool's PAC script:

   stripe.com, *.stripe.com
   stripe.network, *.stripe.network
   stripecdn.com, *.stripecdn.com
   link.com, *.link.com
   hcaptcha.com, *.hcaptcha.com
   api.ipify.org, ipinfo.io, ifconfig.me

Impact summary:

- Individual merchants: if their `pk_live_*` is harvested, their account
  absorbs chargebacks and Radar penalties from attacker-generated test charges.
- Stripe platform: continuous low-volume card-testing traffic from consumer
  browsers routed through residential-like proxies.
- Victim end users (cardholders): unauthorized small-amount charges and
  cards placed on fraud hold.

What I am providing:

- Full IOC list (domains, URLs, chrome.runtime message types, CSS classes,
  regex patterns, UI text strings) — attached / linked.
- YARA rule for detection: <link or attachment>
- High-level behavioral writeup: <link>
- Sample hashes: SHA-256 of the manifest.json, rules.json, and the eight
  obfuscated JavaScript files — attached.

What I am NOT providing (available on request, subject to agreed handling):

- Deobfuscated source. I can share privately with Stripe's fraud/security team
  if useful, under an NDA or equivalent. I am not publishing it publicly
  because doing so would provide uplift to less-skilled attackers.
- The extension package itself. Happy to provide it to Stripe directly for
  analysis.

Public disclosure timeline:

- I am not publicly linking to Stripe in the public writeup beyond the
  obvious fact that Stripe is the targeted platform.
- Public writeup contains IOCs and detection guidance only.
- I will coordinate any additional disclosure with you if helpful.

My contact for follow-up: xctrailer7331@gmail.com
PGP key (if used): <fingerprint or attach .asc>

Regards,
<Your name / handle>
```

---

## Attachments checklist

- `manifest.json` (the extension's manifest — textually small, safe to email)
- `rules.json` (the `declarativeNetRequest` rules — textually small)
- `iocs.json` from this repository
- SHA-256 hashes of each file in the extension (text file)
- YARA rule (`detection/akif-hitter.yar` from this repo)
- Link to this repository

**Do not attach the obfuscated JavaScript files to a public-list email.** If Stripe's team wants the full sample, provide it via their secure intake (they may give you an upload link or HackerOne attachment option).

---

## What to expect

Stripe's security team typically acknowledges receipt within 24–72 hours. For threat-intel reports (not vulnerability reports) they may not provide a detailed response — they will integrate the IOCs into Radar and other internal systems. That's OK; the goal is defender uplift, not a bug bounty.

If you have observed active exploitation (fraudulent charges on a specific merchant, suspected key harvesting from a specific site), include that in a follow-up so Stripe can reach out to the affected merchant directly.
