# IOCs — Indicators of Compromise

Machine-readable and human-readable indicators for Akifs Hitter V2. Everything in this folder is safe to ingest into a SIEM, MISP, EDR allowlist/blocklist, or YARA pipeline.

| File | Format | Purpose |
|---|---|---|
| [`iocs.json`](iocs.json) | JSON | Structured feed for SIEM / MISP import |
| [`domains.txt`](domains.txt) | Plain text | Domain list, grouped by role |
| [`urls.txt`](urls.txt) | Plain text | Full URLs / endpoints |
| [`message-types.txt`](message-types.txt) | Plain text | `chrome.runtime` message type strings |
| [`regex-patterns.txt`](regex-patterns.txt) | Plain text | Distinctive regexes the tool uses |

## Quick filter recipes

**Block in DNS / web proxy:**
- Alert (not block) on `api.telegram.org` from browser-process traffic — legitimate users may use Telegram Web, so investigate rather than block.
- Alert on `lookup.binlist.net` from browser process combined with Stripe checkout traffic.
- Alert on outbound connections to `api.ipify.org`, `ipinfo.io`, `ifconfig.me` from a browser that also has a Stripe checkout tab open.

**SIEM queries (pseudocode):**
```
source = chrome_extension_telemetry
AND (dest_host in (api.telegram.org, lookup.binlist.net)
  OR message_type in (AKIF_HIT_SEND, TELEGRAM_SEND, AKIF_PROXY_TEST))
```

**Endpoint YARA** — use [`../detection/akif-hitter.yar`](../detection/akif-hitter.yar) against Chrome's `User Data/Default/Extensions/` folder and any downloaded `.zip` / `.crx` files.

## Important caveats

- The Telegram bot **token** and **chat ID** are per-install — different for every operator. Do not hardcode a specific token to alert on; the pattern `api.telegram.org/bot*/sendMessage` from a browser process is the signal.
- Domains like `stripe.com`, `api.ipify.org`, `ipinfo.io` are legitimate services; the IOC is their **combination** and **context** (called from a Chrome extension background script that also carries the other fingerprints).
- Variants: this tool has been iterated ("V1", "V2", likely "V3" at some point). New variants may rename the namespace (e.g. `__AKIFPRO_*`). The YARA `AkifHitter_Packed` rule is tuned to catch mild rename/repack.

Contributions of additional confirmed IOCs from independent observation are welcome via PR. **Do not** submit IOCs obtained by running the tool yourself — run it only in an isolated, network-limited environment, and only if you have legal authorization to do so.
