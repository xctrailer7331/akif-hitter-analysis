# hCaptcha — Responsible Disclosure Template

**Where to send:**
- Email: `security@hcaptcha.com`

---

## Subject line

```
Threat intel: automated hCaptcha bypass technique in malicious Chrome extension
```

---

## Body

```
Hello hCaptcha Security,

I am reporting an automated hCaptcha bypass technique implemented in a
malicious Chrome extension called "Akifs Hitter V2". This is a
threat-intelligence report; the bypass technique is well-understood in
principle (synthesized pointer events), but the timing/heuristic recipe in
this specific sample may help your risk team tune detection.

Technique summary (no source code attached; I can share privately if useful):

1. The extension scopes itself to URLs matching `/(^|\.)hcaptcha\.com$/`
   (host check) and activates when it sees an iframe hosting the
   hCaptcha widget.
2. Once a checkbox element matching `#checkbox` is present and not already
   checked (`data-checked != "true"` and `aria-checked != "true"`), the
   extension dispatches a sequence of synthesized events in order:
      pointerdown, mousedown, pointerup, mouseup, click
   Events use the element's bounding-rect center for clientX/clientY and
   construct `PointerEvent` / `MouseEvent` objects with bubbles/cancelable/
   composed/view/button set to match a human interaction signature.
3. Retry ladder: attempts are fired at 30ms, 120ms, 300ms, 600ms,
   1000ms, 1500ms, 2200ms after the widget appears, then polled every
   450ms on a setInterval until either the checkbox reports checked, the
   widget disappears, or a 45-second total timeout elapses.
4. The extension also calls `element.click()` alongside the synthesized
   events as a fallback.

This combination — PointerEvent synthesis + timing ladder + element.click()
fallback — is specifically tuned to defeat common browser-level
"isTrusted" checks when paired with hCaptcha. I believe your Risk/ML
pipelines already detect some of these patterns, but the exact timing
numbers and the fallback structure may help calibrate.

Operational context: this technique is deployed in the wild as part of a
credit-card-carding tool distributed on Telegram. It is used specifically
to automate Stripe checkout flows protected by hCaptcha.

What I am providing:

- Public writeup with high-level behavioral description: <link>
- YARA rule that matches the auto-solver fingerprint inside the extension:
  <link>

What I am NOT providing publicly:

- The deobfuscated source code of the auto-solver. Happy to share privately
  with your team if useful.

My contact for follow-up: xctrailer7331@gmail.com

Regards,
<Your name / handle>
```

---

## Notes

hCaptcha are well aware of headless-browser and event-synthesis bypasses and invest heavily in ML-based behavioral detection. A threat-intel report like this is useful for calibration but unlikely to produce a public response. Do not expect a bug-bounty-style reward.
