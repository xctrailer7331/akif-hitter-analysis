# Blocking Akifs Hitter V2 via Chrome Enterprise Policy

This guide is for IT administrators, managed Chrome deployments, and security-aware home users who want to prevent this and similar tools from being loaded.

---

## The problem with ID-based blocklists

The normal approach — "just add the Extension ID to `ExtensionInstallBlocklist`" — does **not** work well for Akifs Hitter V2, because:

- The tool is **not published on the Chrome Web Store**.
- It is loaded as an **unpacked extension** (developer mode).
- Every time a user loads it unpacked, Chrome assigns a **different Extension ID** based on the folder path (hashed).
- There is no single stable ID to blocklist.

So the practical strategy is:

1. **Disallow developer-mode extension loading** in managed environments.
2. **Allowlist** the extensions you trust; block everything else.
3. **Endpoint scanning** with YARA against Chrome profile folders to detect existing installs.

---

## Recommended policy (managed Chrome)

Deploy via Group Policy on Windows or the equivalent on macOS / ChromeOS. Reference: [Chrome Enterprise policy list](https://chromeenterprise.google/policies/).

### Policy 1 — Block developer-mode extensions

```
Policy name:    DeveloperToolsAvailability
Value:          2 (DeveloperToolsDisallowed)
```

```
Policy name:    ExtensionDeveloperModeSettings
Value:          1 (BlockDeveloperMode)
```

Rationale: unpacked extensions require developer mode. Blocking developer mode closes the installation vector for this and all similar manually-loaded tools.

### Policy 2 — Enforce an extension allowlist

```
Policy name:    ExtensionInstallBlocklist
Value:          ["*"]

Policy name:    ExtensionInstallAllowlist
Value:          ["<your-trusted-extension-ids>"]
```

Setting the blocklist to `["*"]` denies all extensions by default. Only IDs in the allowlist load. This is the most defensible configuration for a managed environment.

### Policy 3 — Restrict who can change proxy settings

```
Policy name:    ProxySettings -> ProxyMode
Value:          direct         (or a managed proxy)
```

The extension's core evasion mechanism is runtime proxy rotation via the `proxy` permission. Extensions cannot override a policy-enforced proxy mode — this neutralizes the proxy-rotation feature even if the extension somehow loads.

### Policy 4 — Disable individual risky APIs (belt & suspenders)

```
Policy name:    ExtensionSettings
Value (example JSON):
  {
    "*": {
      "installation_mode": "blocked",
      "blocked_permissions": [
        "proxy",
        "webRequest",
        "webRequestAuthProvider",
        "declarativeNetRequestWithHostAccess"
      ]
    }
  }
```

---

## Non-managed (home-user) mitigation

Home users don't have Group Policy, but these manual steps help:

1. **Don't enable Developer mode in `chrome://extensions/`** unless you are actively developing an extension. Keep it off the rest of the time.
2. **Don't install extensions from Telegram / Discord / random websites.** Use the Chrome Web Store or your organization's managed store.
3. **Periodically audit `chrome://extensions/`**. Click "Details" on every extension — pay special attention to ones that:
   - Request "Read and change all your data on websites you visit"
   - Show "Inspect views" → `background page` (Manifest V2) or `service worker` (Manifest V3) — these run continuously
4. **Check Chrome profiles for leftover folders** at:
   - Windows: `C:\Users\<you>\AppData\Local\Google\Chrome\User Data\Default\Extensions\`
   - macOS: `~/Library/Application Support/Google/Chrome/Default/Extensions/`
   - Linux: `~/.config/google-chrome/Default/Extensions/`
   Each sub-folder is an extension. If any directory contains files matching the YARA rule in this repo, you have a hit.

Full removal instructions: [`docs/removal-guide.md`](../docs/removal-guide.md)

---

## EDR / SIEM detection

For environments with endpoint agents, flag any of:

- Process `chrome.exe` (or `msedge.exe`) writing to a file path matching `*/Extensions/*/manifest.json` where the manifest carries the strings from our YARA `AkifHitter_Manifest` rule.
- Outbound HTTPS connection from `chrome.exe` to `api.telegram.org/bot<anything>/sendMessage` — this endpoint should not normally be contacted by browser extension code in a corporate environment.
- Outbound connections from `chrome.exe` to `lookup.binlist.net` combined with Stripe checkout traffic from the same browser process.
- Chrome `chrome.declarativeNetRequest` runtime rules that strip `content-security-policy` from `stripe.com` — visible in Chrome's extension internals page (`chrome://extensions-internals/`) or via enterprise telemetry reporting.
- Presence of the CSS classes from the YARA rule (`akif-toast-v5`, `akif-cyber-toast`, `akif-filter-chip`, `akif-clear-chip`) in page DOM if you have DOM-level telemetry on endpoints.

---

## If you find a hit

1. Take a snapshot of the extension folder and the Chrome profile (for forensics).
2. Remove the extension via `chrome://extensions/` (Remove button).
3. Clear the Chrome profile's `Extensions` folder for the removed ID.
4. Clear browser storage for all sites — the tool writes to `chrome.storage.local` which persists across sessions.
5. Rotate any credentials the user entered in this browser since installation (passwords, payment details).
6. File an incident report if applicable in your environment.

Full step-by-step guide: [`docs/removal-guide.md`](../docs/removal-guide.md)

---

## References

- [Chrome Enterprise policy documentation](https://chromeenterprise.google/policies/)
- [Chromium extension security architecture](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/common/extensions/docs/)
- [Manifest V3 permission reference](https://developer.chrome.com/docs/extensions/reference/)
