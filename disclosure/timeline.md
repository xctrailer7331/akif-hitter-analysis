# Disclosure Timeline

A public log of my communication with affected parties. I update this file as things happen.

---

## 2026-04-20

- **Analysis complete.** Finished reverse engineering the four-layer obfuscation stack. Extracted IOCs, wrote YARA rule, drafted this repository's documentation.
- **Stripe notified.** Sent the `disclosure/stripe-disclosure-template.md` report to `security@stripe.com`. Subject: "Threat intel: malicious Chrome extension targeting Stripe checkout (Akifs Hitter V2)".
- **hCaptcha notified.** Sent the `disclosure/hcaptcha-disclosure-template.md` report to `security@hcaptcha.com`. Subject: "Threat intel: automated hCaptcha bypass in malicious Chrome extension".
- **Chrome Web Store abuse team notified.** Submitted the `disclosure/google-chrome-disclosure-template.md` via the abuse channel, flagging lookalike search and developer-mode UX considerations.
- **Public repository created.** This repository goes public with detection assets only — no deobfuscated source, no function-level walkthrough.

---

## Future updates

I will append to this file when:
- I receive acknowledgement from any of the notified parties.
- A new variant of the tool is observed and I update the IOC list.
- A defender using the YARA rule reports a hit (with the hit-reporter's consent).
- Any party requests changes to the public writeup.

---

## My principles for this disclosure

1. **Defender-first.** The IOCs and detection rule ship immediately and publicly. Defenders don't have to wait for vendor coordination.
2. **No attacker uplift.** Deobfuscated source and reverse-engineering tooling stay private. Sharing them publicly helps less-skilled operators more than it helps defenders.
3. **Vendor-respectful.** I notify Stripe, hCaptcha, and Google at the same time I go public, but I do not sit on the IOCs waiting for vendor action — the threat is already live and defenders need to see it.
4. **Honest about limits.** I did not discover a vulnerability in Stripe or hCaptcha. I documented a tool that abuses their normal interfaces. No bug bounty is appropriate here; a thank-you is enough.
