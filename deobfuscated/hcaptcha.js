(function () {
  'use strict';

  if (window.__AKIF_HCAPTCHA_LOADED) return;
  window.__AKIF_HCAPTCHA_LOADED = true;
  const v_1 = /(^|\.)hcaptcha\.com$/.test(location.hostname) || location.href.includes("hcaptcha");
  if (!v_1) return;
  const v_2 = "#checkbox",
    v_3 = 45000,
    v_4 = Date.now() + v_3;
  let v_5 = null,
    v_6 = null,
    v_7 = false;
  function fn_1(p_1) {
    if (!p_1) return false;
    if (p_1.getAttribute("data-checked") === "true") return true;
    if (p_1.getAttribute("aria-checked") === "true") return true;
    return false;
  }
  function fn_2(p_1) {
    try {
      p_1.click();
    } catch (v_1_1) {}
    try {
      const v_1_1 = p_1.getBoundingClientRect(),
        v_2_1 = v_1_1.left + v_1_1.width / 2,
        v_3_1 = v_1_1.top + v_1_1.height / 2;
      ["pointerdown", "mousedown", "pointerup", "mouseup", "click"].forEach(p_1_1 => {
        const v_1_2 = p_1_1.startsWith("pointer") ? window.PointerEvent || window.MouseEvent : window.MouseEvent;
        try {
          var v_2_2 = {};
          v_2_2.bubbles = true, v_2_2.cancelable = true, v_2_2.composed = true, v_2_2.view = window, v_2_2.clientX = v_2_1, v_2_2.clientY = v_3_1, v_2_2.button = 0x0;
          const v_1_3 = new v_1_2(p_1_1, v_2_2);
          p_1.dispatchEvent(v_1_3);
        } catch (v_1_3) {}
      });
    } catch (v_1_1) {}
  }
  function fn_3() {
    v_7 = true;
    v_5 && (clearInterval(v_5), v_5 = null);
    if (v_6) {
      try {
        v_6.disconnect();
      } catch (v_1_1) {}
      v_6 = null;
    }
  }
  function fn_4() {
    if (v_7) return;
    if (Date.now() > v_4) {
      fn_3();
      return;
    }
    const v_1_1 = document.querySelector(v_2);
    if (!v_1_1) return;
    if (fn_1(v_1_1)) {
      fn_3();
      return;
    }
    fn_2(v_1_1);
  }
  [30, 120, 300, 600, 1000, 1500, 2200].forEach(p_1 => setTimeout(fn_4, p_1)), v_5 = setInterval(fn_4, 450);
  try {
    v_6 = new MutationObserver(() => fn_4()), v_6.observe(document.documentElement, {
      'childList': true,
      'subtree': true,
      'attributes': true,
      'attributeFilter': ["data-checked", "aria-checked"]
    });
  } catch (v_1_1) {}
  setTimeout(fn_3, v_3 + 500);
})();