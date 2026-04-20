(function () {
  var v_1;
  try {
    var v_2 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
    v_1 = v_2();
  } catch (v_1_1) {
    v_1 = window;
  }
  v_1.setInterval(fn_1, 4000);
})();
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
    v_2 = function () {
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
    }();
  'use strict';
  const v_3 = "local_user";
  const v_4 = "LocalUser";
  function fn_1_1() {
    var v_1_1 = v_1(this, function () {
      return v_1_1.toStramK().search("(((.+)+)+)+$").toString().constructor(v_1_1).search("(((.+)+)+)+$");
    });
    v_1_1(), function () {
      v_2(this, function () {
        var v_1_2 = new RegExp("function *\\( *\\)"),
          v_2_2 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i'),
          v_3_2 = fn_1("init");
        if (!v_1_2.test(v_3_2 + "chain") || !v_2_2.test(v_3_2 + "input")) {
          v_3_2('0');
        } else fn_1();
      })();
    }();
    if (localStorage.getItem("akif_logged_in") !== "true") {
      var v_2_1 = "6|1|0|2|4|5|3".split('|'),
        v_3_1 = 0;
      while (true) {
        switch (v_2_1[v_3_1++]) {
          case '0':
            localStorage.setItem("akif_username", v_4);
            continue;
          case '1':
            localStorage.setItem("akif_user_id", v_3);
            continue;
          case '2':
            localStorage.setItem("akif_first_name", v_4);
            continue;
          case '3':
            localStorage.setItem("akif_login_time", Date.now().toString());
            continue;
          case '4':
            localStorage.setItem("akif_last_name", '');
            continue;
          case '5':
            localStorage.setItem("akif_raw_username", v_4);
            continue;
          case '6':
            localStorage.setItem("akif_logged_in", "true");
            continue;
        }
        break;
      }
    }
  }
  fn_1_1(), window.AkifLogin = {
    'isLoggedIn': () => true,
    'getUserId': () => localStorage.getItem("akif_user_id") || v_3,
    'getUsername': () => localStorage.getItem("akif_username") || v_4,
    'showLogin': p_1 => {
      fn_1_1(), typeof p_1 === "function" && p_1(localStorage.getItem("akif_user_id") || v_3);
    },
    'logout': () => {
      fn_1_1();
    },
    'getSessionTimeRemaining': () => 86400000
  };
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
    if (p_1) return fn_1_1;else fn_1_1(0);
  } catch (v_1) {}
}