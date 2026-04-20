# Removal Guide — Akifs Hitter V2

If you suspect Akifs Hitter V2 is installed in your browser — whether you installed it yourself thinking it was something else, or you're cleaning someone else's machine — follow this guide. It is written for non-technical users; technical details are in callout boxes.

**Applies to:** Google Chrome, Microsoft Edge, Brave, Opera, Vivaldi, and other Chromium-based browsers.

> **⚠️ Important context**
> This extension accesses every page you visit, handles payment data, and can intercept or send network requests. If it has been running in your browser, assume:
> - Any credit card data you entered in this browser may have been captured.
> - Saved passwords may have been read (if you logged into sites while it was active).
> - Browser session cookies may have been sent to the operator.
>
> After removal, **rotate passwords, revoke active sessions, and monitor payment accounts for unauthorized activity**.

---

## Step 1 — Identify whether you're infected

1. Open your browser.
2. Type in the address bar:
   ```
   chrome://extensions/
   ```
   (For Edge: `edge://extensions/`, for Brave: `brave://extensions/`.)
3. Look through the list. You are infected if you see **any** of the following:
   - Name contains **"Akifs Hitter"**, **"Akif's System"**, **"Hitter"**, or **"AKIF"**
   - Description mentions **"Stripe Checkouts"** in a way that is not an official Stripe tool
   - An extension you don't recognize that requests permission to **"Read and change all your data on all websites"** AND was loaded in Developer mode (badge: "Loaded as unpacked" or an orange/yellow dev-mode indicator)

You should also check for secondary indicators by visiting any website and pressing **F12** to open Developer Tools, then in the **Console** tab typing:
```js
window.__AKIF_HCAPTCHA_LOADED
```
If it prints `true`, the extension is active on that page. If it prints `undefined`, the extension is not running there (but may still be installed — continue the removal steps anyway).

> **Note for advanced users**
> Also check `chrome://extensions-internals/` (Chrome-specific) for extensions whose manifest contains a `declarativeNetRequest` rule that removes `content-security-policy` from `stripe.com`. That is a very strong indicator.

---

## Step 2 — Remove the extension

1. In `chrome://extensions/`, find the suspicious extension.
2. Click **"Remove"**.
3. Confirm the removal in the popup dialog.

If the **Remove** button is greyed out (this can happen if the extension was installed by a group policy or enterprise policy):
- Skip to **Step 3b** below.

---

## Step 3 — Verify the extension folder is gone

Even after removal, Chrome sometimes leaves extension files on disk.

### On Windows

1. Close all Chrome windows.
2. Open File Explorer and navigate to:
   ```
   C:\Users\<your-username>\AppData\Local\Google\Chrome\User Data\Default\Extensions\
   ```
   (Substitute your profile name for `Default` if you use multiple Chrome profiles. For Edge: `C:\Users\<you>\AppData\Local\Microsoft\Edge\User Data\Default\Extensions\`.)
3. Delete any folder that was associated with the removed extension. If unsure, check each folder's `manifest.json` for the name `"Akifs Hitter"` before deleting.

### On macOS

1. Close all browser windows.
2. In Finder, press `Cmd+Shift+G` and go to:
   ```
   ~/Library/Application Support/Google/Chrome/Default/Extensions/
   ```
3. Delete the matching folder.

### On Linux

1. Close the browser.
2. Navigate to:
   ```
   ~/.config/google-chrome/Default/Extensions/
   ```
3. Delete the matching folder.

### Step 3b — If Remove was greyed out (enterprise policy)

You likely have a forced extension install. On Windows, open `regedit` and check:
```
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist
HKEY_CURRENT_USER\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist
```
Remove any forced entries (you need administrator access). If you are on a corporate device, contact your IT team — do not try to remove it yourself without authorization.

---

## Step 4 — Clear browser storage the extension touched

The extension writes to `chrome.storage.local`, which survives extension removal in some configurations. Clear browser site data for all sites:

1. Open `chrome://settings/clearBrowserData`
2. Choose **"All time"** in the time range dropdown
3. Check:
   - Browsing history
   - Cookies and other site data
   - Cached images and files
4. Click **"Clear data"**

> **Technical note**
> `chrome.storage.local` is distinct from site cookies — it's per-extension. Once the extension itself is deleted, its `chrome.storage.local` becomes inaccessible to the extension but may still exist on disk in Chrome's `Default/Local Extension Settings/<extension-id>/` folder. Delete that folder if you want to fully sanitize.

---

## Step 5 — Check for persistence (scheduled tasks, startup entries)

Malicious extensions sometimes come bundled with persistence mechanisms outside Chrome. On Windows:

1. Open **Task Manager** → **Startup apps** tab. Disable anything suspicious.
2. Open **Task Scheduler** → **Task Scheduler Library**. Look for tasks that launch browsers with unusual arguments (e.g. `--load-extension=...`).
3. Check `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\` for shortcut files that launch Chrome with command-line flags.

On macOS:

1. System Settings → General → Login Items. Remove anything you didn't knowingly add.
2. Check `~/Library/LaunchAgents/` and `/Library/LaunchAgents/` for unfamiliar `.plist` files.

---

## Step 6 — Rotate credentials and check payment accounts

This is the most important step. Because the extension had `<all_urls>` host permission, assume anything typed or displayed in the browser during its time installed was readable by it.

**Action list:**

1. **Change passwords** for any account you logged into during the suspected infection window. Prioritize:
   - Email accounts (password reset vector for everything else)
   - Banking / payment accounts (Stripe dashboard, PayPal, bank online banking)
   - Work / SSO accounts
2. **Revoke active sessions** in those accounts (most have a "log out all other devices" button in security settings).
3. **Check payment accounts** for unauthorized:
   - Card charges (even small "test" amounts like $0.50–$5)
   - New payment methods added
   - New shipping addresses
4. If you have **cards saved** in the browser's autofill, remove them at `chrome://settings/payments` and consider asking your bank to reissue the card.
5. Enable **2-factor authentication** anywhere it wasn't already enabled.

---

## Step 7 — Scan for other malware

A browser can usually be cleaned without reinstalling the OS, but if this extension was installed by a bundler, there may be other malware. Run:

- **Windows**: Microsoft Defender full scan, plus [Malwarebytes Free](https://www.malwarebytes.com/) for a second opinion.
- **macOS**: built-in XProtect (automatic), plus [Malwarebytes for Mac](https://www.malwarebytes.com/mac) for a second opinion.
- **All platforms**: upload any suspicious files to [VirusTotal](https://www.virustotal.com/) before deleting.

If you find additional malware, consider a clean OS reinstall — this is the only 100% reliable way to ensure nothing is hiding.

---

## Step 8 — If you are a merchant affected by publishable-key harvesting

If your **Stripe publishable key** (`pk_live_*`) was scraped by this extension from your site while an infected user visited, attackers may be using it to attempt charges that look like they're coming from your merchant account. Action:

1. Log into your Stripe dashboard → **Developers** → **API keys**.
2. Note your current publishable key.
3. Enable **Stripe Radar** if you haven't (it is on by default for most accounts) and review any fraudulent charge patterns.
4. Contact Stripe support (`https://support.stripe.com/`) and report:
   - Unusual charge attempts
   - Suspected publishable-key harvesting
   - Reference this repository if helpful

Stripe's Radar team can flag suspicious patterns and, in serious cases, help you rotate or restrict keys.

---

## Step 9 — Report

- **Google**: if the extension was loaded from anywhere masquerading as a Web Store extension, report at [chromewebstore.google.com/report](https://chromewebstore.google.com/report).
- **Stripe**: `security@stripe.com` or via HackerOne. See [`../disclosure/stripe-disclosure-template.md`](../disclosure/stripe-disclosure-template.md).
- **Local law enforcement**: in most jurisdictions, unauthorized use of stolen credit card data is a criminal offense. If you have evidence you are a victim (unauthorized charges, stolen data), file a report.

---

## Frequently asked questions

**Q: I installed this thinking it was a legitimate "auto-claim" / "free premium" tool. Am I in legal trouble?**
Generally you are a victim, not a perpetrator. However, laws vary — in some jurisdictions merely possessing or running a tool of this class is a criminal offense. Consult a lawyer if you are concerned. At minimum: stop using it, remove it, and do not distribute it further.

**Q: The extension is not visible in `chrome://extensions/` but my browser still shows the "AKIF HITTER V2" toast.**
The extension may be in a different Chrome profile. Check all profiles (click your avatar icon in the top right). Also close the browser completely (including background processes — on Windows, end `chrome.exe` in Task Manager if needed) before reopening, to force Chrome to reload its extension list.

**Q: I removed it but I'm still seeing Telegram requests from Chrome.**
Run the YARA scanner in this repo against your Chrome profile folder. Possibly a second, similar extension is still installed. If you're technical: check `chrome://net-export/` to capture outgoing connections and look for `api.telegram.org` calls.

**Q: My system was used by a family member / roommate who may have installed this. Who is legally responsible?**
Consult a lawyer in your jurisdiction. Technically, you want to collect evidence (screenshots of `chrome://extensions/`, file timestamps, Chrome history) before removing anything, in case you need it later.

---

## Contact

If you discovered this tool in an environment I should know about (a new distribution channel, a variant with different IOCs, a managed service where it's being delivered at scale), please open an issue in this repository. **Do not send me the extension package** — describe what you saw and where.
