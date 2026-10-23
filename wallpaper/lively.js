// Lively Wallpaper (Windows, free) adapter. Lively calls this once per property:
// sliders → number, checkboxes → bool, colours → "#rrggbb", dropdowns → 0-based index.
(function () {
  var COMBOS = { preset: 1, giant: 1, style: 1 };
  window.livelyPropertyListener = function (name, val) {
    var api = window.__sharks;
    if (!api || !(name in api.S)) return;
    var cur = api.S[name], v;
    if (Array.isArray(cur)) {
      var h = String(val).replace("#", "");
      v = [0, 2, 4].map(function (i) { return parseInt(h.slice(i, i + 2), 16) / 255; });
    } else if (typeof cur === "boolean") v = !!val;
    else if (COMBOS[name]) v = Number(val) + 1;
    else v = Number(val);
    var o = {}; o[name] = v;
    api.set(o);
  };
})();
