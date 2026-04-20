(function () {
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
    }(),
    v_3 = v_2(this, function () {
      return v_3.toString().search("(((.+)+)+)+$").toString().constructor(v_3).search("(((.+)+)+)+$");
    });
  v_3();
  const v_4 = function () {
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
  (function () {
    v_4(this, function () {
      const v_1_1 = new RegExp("function *\\( *\\)"),
        v_2_1 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i'),
        v_3_1 = fn_1("init");
      if (!v_1_1.test(v_3_1 + "chain") || !v_2_1.test(v_3_1 + "input")) {
        v_3_1('0');
      } else fn_1();
    })();
  })();
  'use strict';
  window.__AKIF_AUTOFILL_LOADED = true, window.AkifAutofill = window.AkifAutofill || {}, AkifAutofill.CARD_FIELD_SELECTORS = ["#cardNumber", "[name=\"cardNumber\"]", "[autocomplete=\"cc-number\"]", "[data-elements-stable-field-name=\"cardNumber\"]", "input[placeholder*=\"Card number\"]", "input[placeholder*=\"card number\"]", "input[aria-label*=\"Card number\"]", "[class*=\"CardNumberInput\"] input", "[class*=\"cardNumber\"] input", "input[name=\"number\"]", "input[id*=\"card-number\"]", "input[name*=\"card_number\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]"], AkifAutofill.EXPIRY_FIELD_SELECTORS = ["#cardExpiry", "[name=\"cardExpiry\"]", "[autocomplete=\"cc-exp\"]", "[data-elements-stable-field-name=\"cardExpiry\"]", "input[placeholder*=\"MM / YY\"]", "input[placeholder*=\"MM/YY\"]", "input[placeholder*=\"MM\"]", "input[aria-label*=\"expir\"]", "[class*=\"CardExpiry\"] input", "[class*=\"expiry\"] input", "input[name=\"expiry\"]", "input[name=\"exp\"]"], AkifAutofill.CVC_FIELD_SELECTORS = ["#cardCvc", "[name=\"cardCvc\"]", "[autocomplete=\"cc-csc\"]", "[data-elements-stable-field-name=\"cardCvc\"]", "input[placeholder*=\"CVC\"]", "input[placeholder*=\"CVV\"]", "input[aria-label*=\"CVC\"]", "input[aria-label*=\"CVV\"]", "input[aria-label*=\"security code\"]", "input[aria-label*=\"Security code\"]", "[class*=\"CardCvc\"] input", "[class*=\"cvc\"] input", "input[name=\"cvc\"]", "input[name=\"cvv\"]"], AkifAutofill.NAME_FIELD_SELECTORS = ["#billingName", "[name=\"billingName\"]", "[autocomplete=\"cc-name\"]", "[autocomplete=\"name\"]", "input[placeholder*=\"Name on card\"]", "input[placeholder*=\"name on card\"]", "input[aria-label*=\"Name\"]", "[class*=\"billingName\"] input", "input[name=\"name\"]"], AkifAutofill.EMAIL_FIELD_SELECTORS = ["input[type=\"email\"]", "input[name*=\"email\"]", "input[autocomplete=\"email\"]", "input[id*=\"email\"]", "input[placeholder*=\"email\"]", "input[placeholder*=\"Email\"]", "[class*=\"email\"] input", "input[aria-label*=\"email\"]"], AkifAutofill.ADDRESS_FIELD_SELECTORS = ["#billingAddressLine1", "[name=\"billingAddressLine1\"]", "[autocomplete=\"address-line1\"]"], AkifAutofill.CITY_FIELD_SELECTORS = ["#billingLocality", "[name=\"billingLocality\"]", "[autocomplete=\"address-level2\"]"], AkifAutofill.POSTAL_FIELD_SELECTORS = ["#billingPostalCode", "[name=\"billingPostalCode\"]", "[autocomplete=\"postal-code\"]"], AkifAutofill.COUNTRY_FIELD_SELECTORS = ["#billingCountry", "[name=\"billingCountry\"]", "[autocomplete=\"country\"]"], AkifAutofill.SUBMIT_BUTTON_SELECTORS = [".SubmitButton", "[class*=\"SubmitButton\"]", "button[type=\"submit\"]", "[data-testid*=\"submit\"]", "[data-testid*=\"pay\"]"];
  AkifAutofill.wait = function (p_1) {
    return new Promise(p_1_1 => setTimeout(p_1_1, p_1));
  }, AkifAutofill.hasCardFields = function () {
    for (const v_1_1 of AkifAutofill.CARD_FIELD_SELECTORS) {
      if (document.querySelector(v_1_1)) return true;
    }
    if (document.querySelector("[class*=\"StripeElement\"], [class*=\"CardElement\"]")) return true;
    return false;
  }, AkifAutofill.hasSubmitButton = function () {
    for (const v_1_1 of AkifAutofill.SUBMIT_BUTTON_SELECTORS) {
      try {
        if (document.querySelector(v_1_1)) return true;
      } catch (v_1_2) {}
    }
    return false;
  }, AkifAutofill.findField = function (p_1) {
    for (const v_1_1 of p_1) {
      try {
        const v_1_2 = document.querySelector(v_1_1);
        if (v_1_2) return v_1_2;
      } catch (v_1_2) {}
    }
    return null;
  }, AkifAutofill.findAndClickField = async function (p_1, p_2) {
    for (const v_1_1 of p_1) {
      try {
        const v_1_2 = document.querySelectorAll(v_1_1);
        for (const v_1_3 of v_1_2) {
          const v_1_4 = v_1_3.getBoundingClientRect();
          if (v_1_4.width > 0 && v_1_4.height > 0) return v_1_3.click(), v_1_3.focus?.(), await AkifAutofill.wait(50), true;
        }
      } catch (v_1_2) {}
    }
    return false;
  };
  AkifAutofill.simulateInput = function (p_1, p_2) {
    if (!p_1) {
      return;
    }
    const v_1_1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.["set"],
      v_2_1 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.["set"];
    if (p_1.tagName === "INPUT" && v_1_1) v_1_1.call(p_1, p_2);else p_1.tagName === "TEXTAREA" && v_2_1 ? v_2_1.call(p_1, p_2) : p_1.value = p_2;
    const v_3_1 = {};
    v_3_1.bubbles = true;
    p_1.dispatchEvent(new Event("input", v_3_1));
    const v_4_1 = {};
    v_4_1.bubbles = true, p_1.dispatchEvent(new Event("change", v_4_1));
    const v_5 = {};
    v_5.bubbles = true, p_1.dispatchEvent(new Event("blur", v_5));
  };
  AkifAutofill.simulateSelectChange = function (p_1, p_2) {
    if (!p_1) return;
    p_1.value = p_2;
    const v_1_1 = {};
    v_1_1.bubbles = true;
    p_1.dispatchEvent(new Event("change", v_1_1));
    const v_2_1 = {};
    v_2_1.bubbles = true, p_1.dispatchEvent(new Event("input", v_2_1));
  }, AkifAutofill.typeText = async function (p_1, p_2 = 10) {
    for (const v_1_1 of p_1) {
      const v_1_2 = new KeyboardEvent("keydown", {
          'key': v_1_1,
          'code': "Key" + v_1_1.toUpperCase(),
          'charCode': v_1_1.charCodeAt(0),
          'keyCode': v_1_1.charCodeAt(0),
          'which': v_1_1.charCodeAt(0),
          'bubbles': true,
          'cancelable': true
        }),
        v_2_1 = new KeyboardEvent("keypress", {
          'key': v_1_1,
          'code': "Key" + v_1_1.toUpperCase(),
          'charCode': v_1_1.charCodeAt(0),
          'keyCode': v_1_1.charCodeAt(0),
          'which': v_1_1.charCodeAt(0),
          'bubbles': true,
          'cancelable': true
        }),
        v_3_1 = {
          'data': v_1_1,
          'inputType': "insertText",
          'bubbles': true,
          'cancelable': true
        },
        v_4_1 = new InputEvent("input", v_3_1),
        v_5 = new KeyboardEvent("keyup", {
          'key': v_1_1,
          'code': "Key" + v_1_1.toUpperCase(),
          'charCode': v_1_1.charCodeAt(0),
          'keyCode': v_1_1.charCodeAt(0),
          'which': v_1_1.charCodeAt(0),
          'bubbles': true,
          'cancelable': true
        });
      document.activeElement?.["dispatchEvent"](v_1_2), document.activeElement?.["dispatchEvent"](v_2_1), document.activeElement?.["dispatchEvent"](v_4_1), document.activeElement?.["dispatchEvent"](v_5), await AkifAutofill.wait(p_2);
    }
  };
  AkifAutofill.pressTab = async function () {
    const v_1_1 = new KeyboardEvent("keydown", {
        'key': "Tab",
        'code': "Tab",
        'keyCode': 0x9,
        'which': 0x9,
        'bubbles': true
      }),
      v_2_1 = new KeyboardEvent("keyup", {
        'key': "Tab",
        'code': "Tab",
        'keyCode': 0x9,
        'which': 0x9,
        'bubbles': true
      });
    document.activeElement?.["dispatchEvent"](v_1_1), document.activeElement?.["dispatchEvent"](v_2_1), await AkifAutofill.wait(50);
  }, AkifAutofill.isInvoiceStripePage = function () {
    const v_1_1 = window.location.href;
    return v_1_1.includes("invoice.stripe.com") || v_1_1.includes("/invoice/");
  }, AkifAutofill.isCheckoutStripePage = function () {
    const v_1_1 = window.location.href;
    return v_1_1.includes("checkout.stripe.com");
  }, AkifAutofill.isPaymentPage = function () {
    const v_1_1 = window.location.href;
    if (v_1_1.includes("checkout.stripe.com") || v_1_1.includes("invoice.stripe.com")) return true;
    if (AkifAutofill.hasCardFields()) return true;
    if (document.querySelector("[class*=\"StripeElement\"], [class*=\"PaymentElement\"]")) return true;
    return false;
  }, AkifAutofill.simulateStripeElementsInput = async function (p_1, p_2, p_3, p_4) {
    const v_1_1 = ["[class*=\"CardNumberElement\"]", "[class*=\"cardNumber\"]", "[data-field=\"number\"]", "iframe[title*=\"card number\" i]", "iframe[name*=\"cardNumber\"]", "input[placeholder*=\"0000\"]", "input[placeholder*=\"1234\"]", "input[autocomplete=\"cc-number\"]", "[class*=\"CardNumber\"] input", "[class*=\"card-number\"] input"];
    let v_2_1 = await AkifAutofill.findAndClickField(v_1_1, "card number");
    if (!v_2_1) {
      const v_1_2 = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
      for (const v_1_3 of v_1_2) {
        const v_1_4 = v_1_3.getBoundingClientRect();
        if (v_1_4.width > 100 && v_1_4.height > 20) {
          v_1_3.click(), await AkifAutofill.wait(80), v_2_1 = true;
          break;
        }
      }
    }
    if (!v_2_1) {
      const v_1_2 = document.querySelector("[class*=\"payment\"], [class*=\"Payment\"], [class*=\"card\"], [class*=\"Card\"], form");
      if (v_1_2) {
        const v_1_3 = v_1_2.querySelector("input[type=\"text\"], input:not([type]), [contenteditable]");
        if (v_1_3) {
          v_1_3.click(), v_1_3.focus?.(), await AkifAutofill.wait(50), v_2_1 = true;
        }
      }
    }
    if (v_2_1) {
      const v_1_2 = "3|2|0|6|1|7|5|4".split('|');
      let v_2_2 = 0;
      while (true) {
        switch (v_1_2[v_2_2++]) {
          case '0':
            await AkifAutofill.pressTab();
            continue;
          case '1':
            await AkifAutofill.wait(80);
            continue;
          case '2':
            await AkifAutofill.wait(80);
            continue;
          case '3':
            await AkifAutofill.typeText(p_1, 8);
            continue;
          case '4':
            await AkifAutofill.wait(80);
            continue;
          case '5':
            await AkifAutofill.typeText(p_4, 8);
            continue;
          case '6':
            await AkifAutofill.typeText(p_2 + p_3, 8);
            continue;
          case '7':
            await AkifAutofill.pressTab();
            continue;
        }
        break;
      }
    }
  }, AkifAutofill.fillStripeElementsIframes = async function (p_1, p_2, p_3, p_4) {
    const v_1_1 = document.querySelectorAll("iframe[name*=\"__privateStripeFrame\"], iframe[title*=\"Secure\"], iframe[src*=\"stripe\"]");
    for (const v_1_2 of v_1_1) {
      try {
        const v_1_3 = v_1_2.getBoundingClientRect();
        v_1_3.width > 0 && v_1_3.height > 0 && (v_1_2.click(), await AkifAutofill.wait(30));
      } catch (v_1_3) {}
    }
    const v_2_1 = document.querySelectorAll("[class*=\"StripeElement\"], [class*=\"CardElement\"], [class*=\"PaymentElement\"]");
    for (const v_1_2 of v_2_1) {
      const v_1_3 = v_1_2.getBoundingClientRect();
      v_1_3.width > 0 && v_1_3.height > 0 && (v_1_2.click(), await AkifAutofill.wait(30));
    }
    AkifAutofill.isInvoiceStripePage() && (await AkifAutofill.simulateStripeElementsInput(p_1, p_2, p_3, p_4));
  }, AkifAutofill.randomHumanNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna", "Michelle", "Alex", "Chris", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn", "Avery", "Cameron"], AkifAutofill.getRandomName = function () {
    return AkifAutofill.randomHumanNames[Math.floor(Math.random() * AkifAutofill.randomHumanNames.length)];
  }, AkifAutofill.getRandomEmail = function () {
    const v_1_1 = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];
    const v_2_1 = AkifAutofill.randomHumanNames[Math.floor(Math.random() * AkifAutofill.randomHumanNames.length)].toLowerCase(),
      v_3_1 = Math.floor(Math.random() * 9999),
      v_4_1 = v_1_1[Math.floor(Math.random() * v_1_1.length)];
    return v_2_1 + v_3_1 + '@' + v_4_1;
  }, AkifAutofill.getRandomStreet = function () {
    const v_1_1 = ["Main Street", "Oak Road", "Park Avenue", "Maple Drive", "Cedar Lane", "Pine Street", "Lake Drive", "Forest Avenue"];
    const v_2_1 = Math.floor(Math.random() * 999) + 1;
    return v_2_1 + '\x20' + v_1_1[Math.floor(Math.random() * v_1_1.length)];
  };
})(), function () {
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
}();
function fn_1(p_1) {
  function fn_1_1(p_1_1) {
    if (typeof p_1_1 === "string") {
      return function (p_1_2) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + p_1_1 / p_1_1).length !== 1 || p_1_1 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debu" + "gger").call("action");
      } else (function () {
        return false;
      }).constructor("debu" + "gger").apply("stateObject");
    }
    fn_1_1(++p_1_1);
  }
  try {
    if (p_1) return fn_1_1;else fn_1_1(0);
  } catch (v_1) {}
}