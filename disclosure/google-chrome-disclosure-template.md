# Google / Chrome — Responsible Disclosure Template

**Where to send:**
- Chrome Web Store abuse reports (for lookalikes that do end up on the store):
  [https://chromewebstore.google.com/report](https://chromewebstore.google.com/report)
- Chrome security team (for broader platform issues):
  [https://g.co/vulnz](https://g.co/vulnz) (Chrome Vulnerability Reward Program)
- General abuse reports: `chromewebstore-developer-support@google.com`

Note: Akifs Hitter V2 itself is **not** on the Chrome Web Store — it is distributed as an unpacked extension. Google's action on this particular sample is limited to lookalike enforcement and improvements to developer-mode warnings. Report anyway.

---

## Subject line

```
Threat intel: malicious unpacked Chrome extension ("Akifs Hitter V2") —
lookalike search and developer-mode UX feedback
```

---

## Body

```
Hello Chrome Security / Web Store team,

I am reporting a malicious Chrome extension that is distributed outside
the Chrome Web Store and installed via "Load unpacked" in developer mode.
Name: "Akifs Hitter V2". It is a credit-card carding tool targeting
Stripe checkout pages.

Because the extension is not on the Web Store, it has no official
Extension ID — each user installation gets a folder-path-hash ID.
Standard Web Store takedown does not apply.

Things I am asking the team to consider:

1. Search for lookalikes. Any Chrome Web Store extension whose manifest
   declares `declarativeNetRequest` rules targeting `checkout.stripe.com`
   with `header: content-security-policy` and `operation: remove` is
   highly suspicious. There are very few legitimate reasons to strip
   CSP from Stripe's checkout domain.

2. Developer-mode UX. Currently, users can load an unpacked extension
   with zero friction once they flip the Developer mode toggle. Consider:
     - Requiring a secondary confirmation dialog when an unpacked
       extension requests the combination:
         proxy + webRequestAuthProvider + declarativeNetRequest + <all_urls>
     - Surfacing a persistent warning badge on Chrome's toolbar when any
       unpacked extension is loaded.

3. Enterprise hardening. Add a first-class policy that blocks unpacked
   extensions from modifying response headers on financial/payment domains
   (Stripe, PayPal, Adyen, etc.) regardless of the permission model.

Full behavioral description, IOCs, and YARA rule are at: <repo link>

I am not sharing deobfuscated source code publicly. If your abuse team
needs the full sample, I can share it privately.

My contact: xctrailer7331@gmail.com

Regards,
<Your name / handle>
```

---

## Chrome Web Store abuse form specifics

If you are reporting an on-store lookalike (not this sample — a similar one that made it onto the store), the abuse form at [https://chromewebstore.google.com/report](https://chromewebstore.google.com/report) asks for:

- **Extension URL**: the direct link to the store listing
- **Category of issue**: choose "Malware" for tools of this class
- **Description**: paste a shortened version of the body above

Attach the IOC list and YARA rule if the form allows attachments (some abuse forms do not). Otherwise link to this repository.
