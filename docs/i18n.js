/* global window, module */
"use strict";
(function () {
  var parts = 3;
  var chunks = [];
  var left = parts;
  if (window.I18N && window.I18N.fr) {
    window.I18N_LANGS = Object.keys(window.I18N).map(function (id) { return { id: id, name: id.toUpperCase(), dir: "ltr" }; });
    document.dispatchEvent(new Event("gb-i18n-ready"));
    return;
  }
  function fail() {
    console.error("i18n payload load failed");
    window.I18N_LANGS = [];
    window.I18N = {};
    document.dispatchEvent(new Event("gb-i18n-ready"));
  }
  function tryDecode() {
    if (typeof DecompressionStream === "undefined") return fail();
    var decoded = chunks.map(function (chunk) {
      var bin = atob(chunk);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return bytes;
    });
    var total = decoded.reduce(function (sum, part) { return sum + part.length; }, 0);
    var bytes = new Uint8Array(total), offset = 0;
    decoded.forEach(function (part) { bytes.set(part, offset); offset += part.length; });
    var stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    new Response(stream).arrayBuffer().then(function (buf) {
      var data = JSON.parse(new TextDecoder().decode(new Uint8Array(buf)));
      window.I18N_LANGS = data.LANGS;
      window.I18N = data.I18N;
      if (typeof module !== "undefined" && module.exports) {
        module.exports = { I18N: window.I18N, LANGS: window.I18N_LANGS };
      }
      document.dispatchEvent(new Event("gb-i18n-ready"));
    }).catch(fail);
  }
  for (var i = 0; i < parts; i++) {
    (function (idx) {
      fetch("docs/i18n/payload." + idx + ".b64").then(function (r) { return r.text(); }).then(function (t) {
        chunks[idx] = t.trim();
        left--;
        if (left === 0) tryDecode();
      }).catch(fail);
    })(i);
  }
})();
