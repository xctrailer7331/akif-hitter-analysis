/*
 * YARA rule for the "Akifs Hitter V2" malicious Chrome extension.
 *
 * Usage:
 *   yara akif-hitter.yar <path-to-extension-folder-or-zip>
 *
 * Recommended deployment:
 *   - Endpoint EDR that scans Chrome user-profile extension folders
 *   - Incident-response triage of suspicious browser directories
 *   - Build-server / artifact scanners (prevents accidental packaging)
 *
 * Rule design notes:
 *   - AkifHitter_Manifest fires on the manifest alone (strongest signal,
 *     effectively zero false positives because the strings are verbatim).
 *   - AkifHitter_Behavioral fires on any individual JS file that carries
 *     multiple distinctive runtime fingerprints.
 *   - AkifHitter_Packed is a fallback for obfuscated copies where the
 *     JS is still encoded but manifest fingerprints are stripped.
 */

rule AkifHitter_Manifest
{
    meta:
        description = "Akifs Hitter V2 manifest.json and welcome/rules fingerprints"
        author      = "akif-hitter-analysis repo"
        date        = "2026-04-20"
        severity    = "critical"
        category    = "malicious-browser-extension/credit-card-fraud"
        reference   = "https://github.com/<owner>/akif-hitter-analysis"

    strings:
        $manifest_name        = "\"name\": \"Akifs Hitter\""
        $manifest_name_alt    = "\"name\":\"Akifs Hitter\""
        $manifest_desc        = "Akif's System - Special For Stripe Checkouts"
        $welcome_tg           = "https://t.me/akifshitter"
        $rules_cs_regex       = "cs_(live|test)_[A-Za-z0-9]{8,}"
        $rules_strip_csp      = "\"header\": \"content-security-policy\""
        $rules_target_stripe  = "||checkout.stripe.com/"

    condition:
        ($manifest_name or $manifest_name_alt or $manifest_desc) or
        ($welcome_tg and $rules_cs_regex) or
        (2 of ($rules_*))
}

rule AkifHitter_Behavioral
{
    meta:
        description = "Akifs Hitter V2 runtime fingerprints in a single JS file"
        author      = "akif-hitter-analysis repo"
        date        = "2026-04-20"
        severity    = "critical"
        category    = "malicious-browser-extension/credit-card-fraud"

    strings:
        $msg_akif_hit         = "AKIF_HIT_SEND"
        $msg_akif_ip          = "AKIF_GET_CURRENT_IP"
        $msg_akif_proxy       = "AKIF_PROXY_TEST"
        $msg_tg_send          = "TELEGRAM_SEND"
        $msg_tg_send_direct   = "TELEGRAM_SEND_DIRECT"
        $msg_set_proxy        = "SET_ACTIVE_PROXY"
        $msg_update_proxies   = "UPDATE_GLOBAL_PROXY_LIST"
        $msg_play_success     = "PLAY_SUCCESS_SOUND"
        $msg_play_bg          = "PLAY_BACKGROUND_MUSIC"

        $ui_toast_v5          = "akif-toast-v5"
        $ui_cyber_toast       = "akif-cyber-toast"
        $ui_filter_chip       = "akif-filter-chip"
        $ui_clear_chip        = "akif-clear-chip"
        $ui_card_toast        = "card-toast"
        $ui_title             = "AKIF HITTER V2"
        $ui_paid              = "Paid Successfully"

        $global_loaded        = "__AKIF_HCAPTCHA_LOADED"
        $akif_prefix          = "__AKIF_"
        $akifvm_prefix        = "__akifVM_"

        $tg_endpoint          = "api.telegram.org/bot"
        $binlist              = "lookup.binlist.net"

        $pac_stripe           = "stripe.com\" || dnsDomainIs(host, \".stripe.com\")"
        $pac_stripecdn        = "stripecdn.com"
        $pac_link_dotcom      = "link.com\" || dnsDomainIs(host, \".link.com\")"

    condition:
        3 of ($msg_*) or
        4 of ($ui_*) or
        ($global_loaded and $akif_prefix) or
        ($akifvm_prefix and $tg_endpoint) or
        ($akifvm_prefix and $binlist) or
        (2 of ($pac_*))
}

rule AkifHitter_Packed
{
    meta:
        description = "Packed/obfuscated Akifs Hitter V2 copy — fallback when behavioral strings are encoded"
        author      = "akif-hitter-analysis repo"
        date        = "2026-04-20"
        severity    = "high"
        category    = "malicious-browser-extension/credit-card-fraud"

    strings:
        // The custom layer-2 wrapper variable name is unique and
        // survives most minification.
        $akifvm              = /var __akifVM_[0-9a-f]{4,10}\s*=/
        // The author's welcome screen URL often survives even in
        // stripped copies because it's stored as a link attribute.
        $tg_handle           = "akifshitter"
        // Extension's declarative_net_request rule for Stripe checkout
        // session IDs — the regex is load-bearing and stays intact.
        $dnr_cs              = "cs_(live|test)"
        // A typical manifest permission fingerprint. False-positive
        // risk with other legit proxy tools, so we combine in the
        // condition.
        $perm_proxy          = "\"proxy\""
        $perm_webRequest     = "\"webRequest\""
        $perm_webRequestAuth = "\"webRequestAuthProvider\""
        $perm_dnr            = "\"declarativeNetRequest\""
        $host_all_urls       = "\"<all_urls>\""

    condition:
        $akifvm or
        ($tg_handle and $dnr_cs) or
        (filesize < 20KB and
         all of ($perm_proxy, $perm_webRequest, $perm_webRequestAuth, $perm_dnr, $host_all_urls))
}
