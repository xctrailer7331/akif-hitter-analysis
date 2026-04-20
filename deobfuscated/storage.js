(function () {
  var v_1 = function () {
      var v_1_1 = true;
      return function (p_1, p_2) {
        var v_1_2 = v_1_1 ? function () {
          if (p_2) {
            var v_1_3 = p_2.apply(p_1, arguments);
            return p_2 = null, v_1_3;
          }
        } : function () {};
        return v_1_1 = false, v_1_2;
      };
    }(),
    v_2 = v_1(this, function () {
      return v_2.toString().search("(((.+)+)+)+$").toString().constructor(v_2).search("(((.+)+)+)+$");
    });
  v_2();
  'use strict';
  window.__AKIF_STORAGE_LOADED = true;
  var v_3 = {
      'SAVED_BINS': "akif_saved_bins",
      'SAVED_ID': "akif_saved_id",
      'CUSTOM_NAME': "akif_custom_name",
      'CUSTOM_EMAIL': "akif_custom_email",
      'BG_COLOR': "akif_bg_color",
      'HAS_CUSTOM_COLOR': "akif_has_custom_color",
      'BG_ENABLED': "akif_bg_enabled",
      'PAGE_BG_COLOR': "akif_page_bg_color",
      'PAGE_HAS_CUSTOM': "akif_page_has_custom_color",
      'TOGGLE_HIT_SOUND': "akif_toggle_hit_sound",
      'TOGGLE_AUTO_SS': "akif_toggle_auto_ss",
      'LOGS': "akif_logs",
      'LOGS_CLEARED_AT': "akif_logs_cleared_at",
      'MUSIC_NAME': "akif_music_name",
      'MUSIC_DATA': "akif_music_data",
      'CARD_HISTORY': "akif_card_history"
    },
    v_4 = v_3;
  window.AkifKeys = v_4, window.AkifStorage = window.AkifStorage || {};
  var v_5 = window.AkifStorage,
    v_6 = 0,
    v_7 = new Map();
  function fn_1_1(p_1, p_2) {
    p_2 = p_2 || {};
    return new Promise(function (p_1_1) {
      var v_1_1 = "storage_" + ++v_6 + '_' + Date.now();
      function fn_1_2(p_1_2) {
        p_1_2.data && p_1_2.data.type === "AKIF_STORAGE_RESPONSE" && p_1_2.data.requestId === v_1_1 && (window.removeEventListener("message", fn_1_2), v_7.delete(v_1_1), p_1_1(p_1_2.data.result));
      }
      v_7.set(v_1_1, fn_1_2), window.addEventListener("message", fn_1_2);
      var v_2_1 = {
        'type': "AKIF_STORAGE_REQUEST",
        'requestId': v_1_1,
        'action': p_1,
        'data': p_2
      };
      window.postMessage(v_2_1, '*'), setTimeout(function () {
        if (v_7.has(v_1_1)) {
          window.removeEventListener("message", fn_1_2), v_7.delete(v_1_1), p_1_1(null);
        }
      }, 3000);
    });
  }
  var v_8 = ["#1a1a2e", "#16213e", "#0f3460", "#1b262c", "#2c3e50", "#1f1f38", "#2d2d44", "#1e3a5f", "#2b2b52", "#1c1c3c"];
  v_5.getRandomBgColor = function () {
    return v_8[Math.floor(Math.random() * v_8.length)];
  };
  v_5.loadBackgroundColor = function (p_1) {
    var v_1_1 = {};
    v_1_1.keys = [v_4.BG_COLOR, v_4.HAS_CUSTOM_COLOR];
    var v_2_1 = v_1_1;
    fn_1_1("GET", v_2_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {};
      var v_1_2 = p_1_1[v_4.BG_COLOR] || v_5.getRandomBgColor(),
        v_2_2 = p_1_1[v_4.HAS_CUSTOM_COLOR] || false;
      p_1(v_1_2, v_2_2);
    });
  }, v_5.saveBackgroundColor = function (p_1, p_2) {
    var v_1_1 = {
      [v_4.BG_COLOR]: p_1,
      [v_4.HAS_CUSTOM_COLOR]: p_2 !== false
    };
    fn_1_1("SET", v_1_1);
  }, v_5.loadCustomNameEmail = function (p_1) {
    var v_1_1 = {};
    v_1_1.keys = [v_4.CUSTOM_NAME, v_4.CUSTOM_EMAIL];
    var v_2_1 = v_1_1;
    fn_1_1("GET", v_2_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {}, p_1(p_1_1[v_4.CUSTOM_NAME] || '', p_1_1[v_4.CUSTOM_EMAIL] || '');
    });
  }, v_5.saveCustomName = function (p_1) {
    var v_1_1 = {
      [v_4.CUSTOM_NAME]: p_1
    };
    var v_2_1 = v_1_1;
    fn_1_1("SET", v_2_1);
  }, v_5.saveCustomEmail = function (p_1) {
    var v_1_1 = {
        [v_4.CUSTOM_EMAIL]: p_1
      },
      v_2_1 = v_1_1;
    fn_1_1("SET", v_2_1);
  }, v_5.loadCardHistory = function (p_1) {
    var v_1_1 = {};
    v_1_1.keys = [v_4.CARD_HISTORY];
    var v_2_1 = v_1_1;
    fn_1_1("GET", v_2_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {};
      var v_1_2 = p_1_1[v_4.CARD_HISTORY] || [];
      p_1(Array.isArray(v_1_2) ? v_1_2 : []);
    });
  }, v_5.saveCardHistory = function (p_1) {
    var v_1_1 = {};
    v_1_1[v_4.CARD_HISTORY] = p_1.slice(-100);
    fn_1_1("SET", v_1_1);
  };
  v_5.addToCardHistory = function (p_1, p_2) {
    v_5.loadCardHistory(function (p_1_1) {
      p_1_1.push(p_1), v_5.saveCardHistory(p_1_1), p_2 && p_2(p_1_1);
    });
  }, v_5.loadSavedBINs = function (p_1) {
    var v_1_1 = {};
    v_1_1.keys = [v_4.SAVED_BINS];
    var v_2_1 = v_1_1;
    fn_1_1("GET", v_2_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {};
      var v_1_2 = p_1_1[v_4.SAVED_BINS] || [];
      p_1(Array.isArray(v_1_2) ? v_1_2 : []);
    });
  };
  v_5.saveBINs = function (p_1) {
    var v_1_1 = {
      [v_4.SAVED_BINS]: p_1
    };
    var v_2_1 = v_1_1;
    fn_1_1("SET", v_2_1);
  }, v_5.loadToggleState = function (p_1, p_2) {
    var v_1_1 = {};
    v_1_1.jGyLi = "while (true) {}";
    v_1_1.mGvMU = "counter";
    var v_2_1 = v_1_1;
    var v_3_1 = "4|1|2|3|0".split('|'),
      v_4_1 = 0;
    while (true) {
      switch (v_3_1[v_4_1++]) {
        case '0':
          fn_1_1("GET", v_8_1).then(function (p_1_1) {
            p_1_1 = p_1_1 || {};
            p_2(p_1_1[v_6_1] !== undefined ? p_1_1[v_6_1] : true);
          });
          continue;
        case '1':
          var v_5_1 = v_10;
          continue;
        case '2':
          var v_6_1 = v_5_1[p_1] || "akif_toggle_" + p_1;
          continue;
        case '3':
          var v_7_1 = {};
          v_7_1.keys = [v_6_1];
          var v_8_1 = v_7_1;
          continue;
        case '4':
          var v_9 = {};
          v_9.hitSound = v_4.TOGGLE_HIT_SOUND, v_9.autoSS = v_4.TOGGLE_AUTO_SS;
          var v_10 = v_9;
          continue;
      }
      break;
    }
  }, v_5.saveToggleState = function (p_1, p_2) {
    var v_1_1 = "4|1|0|3|2".split('|'),
      v_2_1 = 0;
    while (true) {
      switch (v_1_1[v_2_1++]) {
        case '0':
          var v_3_1 = v_4_1[p_1] || "akif_toggle_" + p_1;
          continue;
        case '1':
          var v_4_1 = v_8_1;
          continue;
        case '2':
          fn_1_1("SET", v_6_1);
          continue;
        case '3':
          var v_5_1 = {};
          v_5_1[v_3_1] = p_2;
          var v_6_1 = v_5_1;
          continue;
        case '4':
          var v_7_1 = {};
          v_7_1.hitSound = v_4.TOGGLE_HIT_SOUND, v_7_1.autoSS = v_4.TOGGLE_AUTO_SS;
          var v_8_1 = v_7_1;
          continue;
      }
      break;
    }
  };
  v_5.loadSavedId = function (p_1) {
    var v_1_1 = {};
    v_1_1.keys = [v_4.SAVED_ID];
    var v_2_1 = v_1_1;
    fn_1_1("GET", v_2_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {};
      p_1(p_1_1[v_4.SAVED_ID] || '');
    });
  }, v_5.saveId = function (p_1) {
    var v_1_1 = {
        [v_4.SAVED_ID]: p_1
      },
      v_2_1 = v_1_1;
    fn_1_1("SET", v_2_1);
  }, v_5.loadAllData = function (p_1) {
    var v_1_1 = [];
    var v_2_1 = Object.keys(v_4);
    for (var v_3_1 = 0; v_3_1 < v_2_1.length; v_3_1++) {
      v_1_1.push(v_4[v_2_1[v_3_1]]);
    }
    var v_4_1 = {};
    v_4_1.keys = v_1_1;
    var v_5_1 = v_4_1;
    fn_1_1("GET", v_5_1).then(function (p_1_1) {
      p_1_1 = p_1_1 || {};
      p_1(p_1_1);
    });
  };
})(), function () {
  var fn_1_1 = function () {
      var v_1_1;
      try {
        v_1_1 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');')();
      } catch (v_1_2) {
        v_1_1 = window;
      }
      return v_1_1;
    },
    v_1 = fn_1_1();
  v_1.setInterval(fn_1, 4000);
}();
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
    if (p_1) return fn_1_1;else fn_1_1(0);
  } catch (v_1) {}
}