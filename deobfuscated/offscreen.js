window.__AKIF_OFFSCREEN_LOADED = true;
let customPreviewAudio = null,
  backgroundMusicAudio = null;
function playSuccessSound() {
  try {
    const v_1 = document.getElementById("hitSound");
    if (v_1) {
      v_1.currentTime = 0, v_1.volume = 0.5, v_1.play().catch(p_1 => {
        playFallbackSound();
      });
    } else playFallbackSound();
  } catch (v_1) {
    playFallbackSound();
  }
}
function playBackgroundMusic(p_1, p_2) {
  if (!p_1) return;
  try {
    var v_1 = "4|1|0|2|3".split('|'),
      v_2 = 0;
    while (true) {
      switch (v_1[v_2++]) {
        case '0':
          backgroundMusicAudio.loop = true;
          continue;
        case '1':
          backgroundMusicAudio = new Audio(p_1);
          continue;
        case '2':
          backgroundMusicAudio.volume = p_2 || 0.5;
          continue;
        case '3':
          backgroundMusicAudio.play().catch(p_1_1 => {});
          continue;
        case '4':
          stopBackgroundMusic();
          continue;
      }
      break;
    }
  } catch (v_1_1) {}
}
function stopBackgroundMusic() {
  try {
    backgroundMusicAudio && (backgroundMusicAudio.pause(), backgroundMusicAudio.currentTime = 0, backgroundMusicAudio = null);
  } catch (v_1) {}
}
function playCustomPreview(p_1) {
  if (!p_1) return;
  try {
    customPreviewAudio && (customPreviewAudio.pause(), customPreviewAudio = null), customPreviewAudio = new Audio(p_1), customPreviewAudio.volume = 0.5, customPreviewAudio.play().catch(p_1_1 => {});
  } catch (v_1) {}
}
function stopCustomPreview() {
  try {
    customPreviewAudio && (customPreviewAudio.pause(), customPreviewAudio.currentTime = 0, customPreviewAudio = null);
  } catch (v_1) {}
}
(function () {
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
})();
function playFallbackSound() {
  try {
    const v_1 = new (window.AudioContext || window.webkitAudioContext)(),
      fn_1_1 = (p_1, p_2, p_3) => {
        const v_1_1 = v_1.createOscillator(),
          v_2_1 = v_1.createGain();
        v_1_1.connect(v_2_1);
        v_2_1.connect(v_1.destination), v_1_1.frequency.value = p_1, v_1_1.type = "sine", v_2_1.gain.setValueAtTime(0.3, p_2), v_2_1.gain.exponentialRampToValueAtTime(0.01, p_2 + p_3), v_1_1.start(p_2);
        v_1_1.stop(p_2 + p_3);
      },
      v_2 = v_1.currentTime;
    fn_1_1(523.25, v_2, 0.15), fn_1_1(659.25, v_2 + 0.12, 0.15), fn_1_1(783.99, v_2 + 0.24, 0.15), fn_1_1(1046.5, v_2 + 0.36, 0.3);
  } catch (v_1) {}
}
async function copyToClipboard(p_1) {
  try {
    const v_1 = document.getElementById("imageCanvas"),
      v_2 = v_1.getContext('2d'),
      v_3 = new Image();
    v_3.crossOrigin = "anonymous", v_3.onload = async () => {
      v_1.width = v_3.width;
      v_1.height = v_3.height;
      v_2.drawImage(v_3, 0, 0);
      v_1.toBlob(async p_1_1 => {
        try {
          var v_1_1 = {};
          v_1_1["image/png"] = p_1_1, await navigator.clipboard.write([new ClipboardItem(v_1_1)]);
        } catch (v_1_2) {}
      }, "image/png");
    }, v_3.src = p_1;
  } catch (v_1) {}
}
chrome.runtime.onMessage.addListener((p_1, p_2, p_3) => {
  var v_1 = {};
  if (p_1.type === "PLAY_SUCCESS_SOUND") {
    playSuccessSound();
    var v_2 = {};
    v_2.success = true, p_3(v_2);
  } else {
    if (v_1["]\xD79T\xAE"](p_1.type, "PLAY_BACKGROUND_MUSIC")) {
      playBackgroundMusic(p_1.audioData, p_1.volume);
      var v_3 = {};
      v_3.success = true, p_3(v_3);
    } else {
      if (p_1.type === "STOP_BACKGROUND_MUSIC") {
        stopBackgroundMusic();
        var v_4 = {};
        v_4.success = true, p_3(v_4);
      } else {
        if (p_1.type === "PLAY_CUSTOM_PREVIEW") {
          playCustomPreview(p_1.audioData);
          var v_5 = {};
          v_5.success = true, p_3(v_5);
        } else {
          if (p_1.type === "STOP_CUSTOM_PREVIEW") {
            stopCustomPreview();
            var v_6 = {};
            v_6.success = true, p_3(v_6);
          } else {
            if (p_1.type === "COPY_TO_CLIPBOARD") {
              copyToClipboard(p_1.dataUrl);
              var v_7 = {};
              v_7.success = true, p_3(v_7);
            }
          }
        }
      }
    }
  }
  return true;
}), document.addEventListener("DOMContentLoaded", () => {
  const v_1 = document.getElementById("hitSound");
  if (v_1) {
    v_1.load();
  }
});
function fn_1(p_1) {
  function fn_1_1(p_1_1) {
    if (typeof p_1_1 === "string") return function (p_1_2) {}.constructor("while (true) {}").apply("counter");else {
      ('' + p_1_1 / p_1_1).length !== 1 || p_1_1 % 20 === 0 ? function () {
        return true;
      }.constructor("debu" + "gger").call("action") : function () {
        return false;
      }.constructor("debu" + "gger").apply("stateObject");
    }
    fn_1_1(++p_1_1);
  }
  try {
    if (p_1) return fn_1_1;else fn_1_1(0);
  } catch (v_1) {}
}