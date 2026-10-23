// RU/EN switch. Translates the rendered page in place (text, aria labels, optgroups)
// and keeps up with everything app.js re-renders, so app.js itself stays untouched.
(function () {
  var KEY = "ascii-sharks-studio:lang";

  var RU = {
    // top bar
    "Wallpaper studio": "Студия обоев",
    "Engine": "Движок",
    "Preview": "Превью",
    "Output": "Размер",
    "after": "по мотивам",
    // bar + stage
    "Pause": "Пауза",
    "Play": "Пуск",
    "New scene": "Новая сцена",
    "Reset all": "Сбросить всё",
    "Preview ·": "Превью ·",
    "· move the cursor over the water, click to splash": "· водите курсором по воде, клик — всплеск",
    // aria
    "Export": "Экспорт",
    "Live preview of the shark wallpaper": "Живое превью обоев с акулами",
    "Needs WebGL2": "Нужен WebGL2",
    "Preview and export": "Превью и экспорт",
    "Screen to design for": "Экран для обоев",
    "Settings": "Настройки",
    // device groups + names
    "Windows / desktop": "Windows / ПК",
    "Phone / tablet": "Телефон / планшет",
    "Other": "Другое",
    "1080p monitor": "Монитор 1080p",
    "1440p monitor": "Монитор 1440p",
    "4K monitor": "Монитор 4K",
    "Ultrawide 3440": "Ультраширокий 3440",
    "Telegram sticker": "Стикер Telegram",
    // export tabs
    "Live wallpaper": "Живые обои",
    "Video loop": "Видео",
    "Still image": "Картинка",
    "Plash (Mac) / browser": "Plash (Mac) / браузер",
    "Unzip into Steam\\steamapps\\common\\wallpaper_engine\\projects\\myprojects\\":
      "Распакуйте в Steam\\steamapps\\common\\wallpaper_engine\\projects\\myprojects\\",
    "Restart Wallpaper Engine. ASCII Sharks appears under Installed with every setting on the right.":
      "Перезапустите Wallpaper Engine. ASCII Sharks появится в «Установленных» со всеми настройками справа.",
    "Your current settings are the defaults.": "Текущие настройки станут настройками по умолчанию.",
    "In Lively, choose Add Wallpaper and pick this zip.": "В Lively нажмите «Добавить обои» и выберите этот zip.",
    "Settings show up under Customise.": "Настройки появятся в разделе «Настроить».",
    "Lively is free on the Microsoft Store.": "Lively бесплатно есть в Microsoft Store.",
    "Unzip somewhere permanent, e.g. Pictures/ascii-sharks.": "Распакуйте туда, где папка останется насовсем, например в Pictures/ascii-sharks.",
    "In Plash: Add Website → Local Website → pick the folder.": "В Plash: Add Website → Local Website → выберите папку.",
    "Your settings are baked in. Any browser can open index.html too.": "Ваши настройки уже внутри. index.html откроется и в любом браузере.",
    "Copy": "Копировать",
    "Copied": "Скопировано",
    "Length": "Длина",
    "Frame rate": "Частота кадров",
    "Codec": "Кодек",
    "(falls back to VP9 WebM)": "(иначе VP9 WebM)",
    "Seamless loop": "Бесшовный цикл",
    "On": "Вкл",
    "Off": "Выкл",
    "Render MP4": "Сделать MP4",
    "Format": "Формат",
    "Save image": "Сохранить картинку",
    "Animated GIF": "Анимированный GIF",
    "Width": "Ширина",
    "Render GIF": "Сделать GIF",
    "Render sticker": "Сделать стикер",
    "512×512 VP9 WebM, 30 fps, seamless, under Telegram's 256 KB limit (it re-encodes smaller if needed). Send it to @Stickers with /newvideo. Few sharks and the Lone giant line-up look best at this size.":
      "512×512 VP9 WebM, 30 fps, бесшовно, в пределах лимита Telegram в 256 КБ (если нужно, пережимается). Отправьте его @Stickers командой /newvideo. На таком размере лучше всего смотрятся пара акул или состав «Одиночный гигант».",
    "Windows: drop the MP4 into Wallpaper Engine or Lively as a video wallpaper (lightest on CPU).":
      "Windows: перетащите MP4 в Wallpaper Engine или Lively как видеообои (меньше всего грузит процессор).",
    "Mac: add the MP4 to Muro (free) for a desktop and Lock Screen video wallpaper.":
      "Mac: добавьте MP4 в Muro (бесплатно) — видеообои для рабочего стола и экрана блокировки.",
    "iPhone: save to Photos, then use intoLive to turn a ~3 s stretch into a Live Photo wallpaper.":
      "iPhone: сохраните в Фото, затем через intoLive превратите отрезок ~3 с в обои Live Photo.",
    "Android: set it with a video-wallpaper app (most launchers and Samsung's gallery can).":
      "Android: поставьте через приложение для видеообоев (умеют большинство лаунчеров и галерея Samsung).",
    "Pick a screen, shape the sharks on the right, then export.": "Выберите экран, настройте акул справа и экспортируйте.",
    "Cancel": "Отмена",
    "Save video": "Сохранить видео",
    // rack tabs + sections
    "Sharks": "Акулы",
    "Look": "Вид",
    "Ocean": "Океан",
    "Experiments": "Эксперименты",
    "Performance": "Производительность",
    "Looks": "Пресеты",
    // sharks
    "Line-up": "Состав",
    "Mixed species": "Разные виды",
    "Great whites": "Белые акулы",
    "Hammerheads": "Молоты",
    "Thresher & mako": "Лисьи и мако",
    "Tiger, zebra & nurse": "Тигровые, зебровые и няньки",
    "Lone giant": "Одиночный гигант",
    "Original (4 classic)": "Оригинал (4 классические)",
    "Custom mix": "Выбрать самому",
    "Number of sharks": "Число акул",
    "Giant species": "Вид гиганта",
    "Great white": "Белая акула",
    "Hammerhead": "Молот",
    "Great hammerhead": "Большой молот",
    "Mako": "Мако",
    "Thresher": "Лисья акула",
    "Tiger": "Тигровая",
    "Zebra": "Зебровая",
    "Nurse": "Нянька",
    "Shark size": "Размер акул",
    "Size variety": "Разброс размеров",
    "Swim speed": "Скорость",
    // look
    "Colour style": "Цветовая схема",
    "Natural": "Естественный",
    "Monochrome": "Монохром",
    "Terminal green": "Зелёный терминал",
    "Amber CRT": "Янтарный ЭЛТ",
    "Ice blue": "Ледяной синий",
    "Synthwave pink": "Синтвейв-розовый",
    "Blood moon": "Кровавая луна",
    "Custom colour": "Свой цвет",
    "Shark colour": "Цвет акул",
    "Glitter glyphs": "Мерцающие символы",
    "Water colour": "Цвет воды",
    "Grid lines": "Сетка",
    "Glyph size": "Размер символов",
    "Brightness": "Яркость",
    // ocean
    "Fish amount": "Количество рыб",
    "Fish flee the cursor, click to splash": "Рыбы убегают от курсора, клик — всплеск",
    "Keep the centre clear": "Не заплывать в центр",
    "Wake trails": "Кильватерный след",
    "Feeding sparks": "Искры охоты",
    "Max frame rate": "Макс. частота кадров",
    // experiments
    "Terminal": "Терминал",
    "Vaporwave": "Вейпорвейв",
    "Sonar room": "Эффект сонара",
    "Deep sea": "Глубина",
    "CRT": "ЭЛТ",
    "Glyph set": "Набор символов",
    "Swap the ASCII ramp for blocks, braille, katakana or binary.": "Заменяет ASCII на блоки, Брайль, катакану или двоичный код.",
    "Classic ASCII": "Классический ASCII",
    "Blocks ░▒▓": "Блоки ░▒▓",
    "Braille ⣿": "Брайль ⣿",
    "Katakana ｱｲｳ": "Катакана ｱｲｳ",
    "Binary 01": "Двоичный 01",
    "Retro palette": "Ретро-палитра",
    "Quantise the whole picture to a classic hardware palette.": "Сводит всю картинку к палитре классического железа.",
    "Amber mono": "Янтарный моно",
    "1-bit dither": "1-битный дизеринг",
    "Bloom": "Свечение",
    "Bright glyphs glow into the water.": "Яркие символы светятся в воде.",
    "Phosphor trails": "Шлейф люминофора",
    "Moving glyphs leave a fading afterimage.": "Движущиеся символы оставляют гаснущий след.",
    "Scanlines, a shadow mask and curved glass.": "Строки развёртки, теневая маска и выпуклое стекло.",
    "Chromatic aberration": "Хроматическая аберрация",
    "RGB fringes toward the edges.": "Цветная RGB-кайма к краям.",
    "Glitch": "Глитч",
    "Slices of the screen jump sideways now and then.": "Полосы экрана время от времени дёргаются вбок.",
    "Film grain": "Зерно плёнки",
    "Animated noise over everything.": "Живой шум поверх всего.",
    "Vignette": "Виньетка",
    "Darkens the corners.": "Затемняет углы.",
    "Hue drift": "Дрейф оттенка",
    "Slowly cycles every colour round the wheel.": "Медленно прокручивает все цвета по кругу.",
    "Caustics": "Каустика",
    "Rippling sunlight on the seabed.": "Солнечные блики на дне.",
    "Ripple": "Рябь",
    "The whole picture wobbles like seen through water.": "Вся картинка колышется, как сквозь воду.",
    "Matrix rain": "Дождь из Матрицы",
    "Falling glyph columns behind the sharks.": "Падающие столбцы символов за акулами.",
    "Bubbles": "Пузыри",
    "Bubbles rising from the bottom.": "Пузыри поднимаются со дна.",
    "Sonar ping": "Сонар",
    "Rings pulse out from a shark every few seconds.": "Каждые несколько секунд от акулы расходятся кольца.",
    "Turn all experiments off": "Выключить все эксперименты",
    // status
    "Packing the wallpaper…": "Упаковываю обои…",
    "Rendering the still…": "Рендерю кадр…",
    "Download cancelled.": "Сохранение отменено.",
    "Couldn't save the file.": "Не удалось сохранить файл.",
    "Render cancelled.": "Рендер отменён.",
    "This browser can't encode video. Use Chrome, Edge or Safari 17+.": "Этот браузер не умеет кодировать видео. Откройте в Chrome, Edge или Safari 17+.",
    "This browser has no WebGL2, so effects marked GL are off here. Glyph sets, rain, bubbles and sonar still work.":
      "В этом браузере нет WebGL2, поэтому эффекты с пометкой GL выключены. Наборы символов, дождь, пузыри и сонар работают."
  };

  function frames(n) {
    var a = n % 10, b = n % 100;
    if (a === 1 && b !== 11) return n + " кадр";
    if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return n + " кадра";
    return n + " кадров";
  }

  var PATTERNS = [
    [/^(.+) · (\d+×\d+)$/, function (m) { return (RU[m[1]] || m[1]) + " · " + m[2]; }],
    [/^(\d+)s$/, function (m) { return m[1] + " с"; }],
    [/^(\d+×\d+) still of exactly what the preview shows right now\. Pause the preview to pick a moment\.$/,
      function (m) { return m[1] + " — кадр ровно того, что сейчас в превью. Поставьте превью на паузу, чтобы поймать момент."; }],
    [/^(\d+×\d+), (\d+) frames\. Starts from the scene in the preview\. (.+)$/,
      function (m) { return m[1] + ", " + frames(+m[2]) + ". Начинается со сцены из превью. " + (RU[m[3]] || m[3]); }],
    [/^(\d+×\d+) seamless loop, (\d+) frames\. For chats, sites and old phones\. Effects and colours come along, but GIF only has 256 colours per frame, so fine glows band a little\.$/,
      function (m) { return m[1] + ", бесшовный цикл, " + frames(+m[2]) + ". Для чатов, сайтов и старых телефонов. Эффекты и цвета сохраняются, но в GIF всего 256 цветов на кадр, поэтому тонкое свечение слегка полосит."; }],
    [/^Download (.+)$/, function (m) { return "Скачать " + m[1]; }],
    [/^Save (.+)$/, function (m) { return "Сохранить " + m[1]; }],
    [/^Saved (.+) \(([\d.]+) MB\)\.$/, function (m) { return "Сохранено: " + m[1] + " (" + m[2] + " МБ)."; }],
    [/^Done: ([\d.]+) MB GIF\.$/, function (m) { return "Готово: " + m[1] + " МБ GIF."; }],
    [/^Done: ([\d.]+) MB \((\S+) WebM: this browser has no (\S+) encoder\)\.$/,
      function (m) { return "Готово: " + m[1] + " МБ (" + m[2] + " WebM: в этом браузере нет кодировщика " + m[3] + ")."; }],
    [/^Done: ([\d.]+) MB\.$/, function (m) { return "Готово: " + m[1] + " МБ."; }],
    [/^Done: (\d+) KB \(still over 256 KB: try fewer sharks or 2 s\)\.$/,
      function (m) { return "Готово: " + m[1] + " КБ (всё ещё больше 256 КБ: меньше акул или 2 с)."; }],
    [/^Done: (\d+) KB, ready for @Stickers\.$/, function (m) { return "Готово: " + m[1] + " КБ, можно отправлять в @Stickers."; }],
    [/^(\d+) KB is over Telegram's 256 KB limit, re-encoding smaller…$/,
      function (m) { return m[1] + " КБ — больше лимита Telegram в 256 КБ, пережимаю…"; }],
    [/^Preparing the loop… (\d+)%$/, function (m) { return "Готовлю цикл… " + m[1] + "%"; }],
    [/^Rendering frame (\d+) of (\d+) · (\d+) fps · about (\d+) s left$/,
      function (m) { return "Кадр " + m[1] + " из " + m[2] + " · " + m[3] + " fps · осталось около " + m[4] + " с"; }],
    [/^Couldn't pack the wallpaper: (.*)$/, function (m) { return "Не удалось упаковать обои: " + m[1]; }],
    [/^Couldn't render the image: (.*)$/, function (m) { return "Не удалось отрендерить картинку: " + m[1]; }],
    [/^Video render failed: (.*)$/, function (m) { return "Видео не отрендерилось: " + m[1]; }],
    [/^Sticker render failed: (.*)$/, function (m) { return "Стикер не отрендерился: " + m[1]; }]
  ];

  function tr(s) {
    if (Object.prototype.hasOwnProperty.call(RU, s)) return RU[s];
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = s.match(PATTERNS[i][0]);
      if (m) return PATTERNS[i][1](m);
    }
    return null;
  }

  var lang = "en";
  try { lang = localStorage.getItem(KEY) || ""; } catch (e) {}
  if (lang !== "ru" && lang !== "en") lang = /^ru\b/i.test(navigator.language || "") ? "ru" : "en";

  var origText = new WeakMap(), setText = new WeakMap();
  var origAttr = new WeakMap(), setAttr = new WeakMap();
  var ATTRS = ["aria-label", "title", "placeholder"];

  function render(orig) {
    if (lang !== "ru") return orig;
    var t = orig.trim();
    if (!t) return orig;
    var r = tr(t);
    if (r == null) return orig;
    var lead = orig.match(/^\s*/)[0], tail = orig.match(/\s*$/)[0];
    return lead + r + tail;
  }

  function doText(n) {
    var p = n.parentElement;
    if (!p || p.closest("script,style,code,#lang")) return;
    var cur = n.nodeValue;
    if (!origText.has(n) || cur !== setText.get(n)) origText.set(n, cur);
    var next = render(origText.get(n));
    setText.set(n, next);
    if (next !== cur) n.nodeValue = next;
  }

  function doAttrs(el) {
    var names = el.tagName === "OPTGROUP" ? ATTRS.concat("label") : ATTRS;
    for (var i = 0; i < names.length; i++) {
      var a = names[i];
      if (!el.hasAttribute(a)) continue;
      var o = origAttr.get(el) || {}, s = setAttr.get(el) || {};
      var cur = el.getAttribute(a);
      if (!(a in o) || cur !== s[a]) o[a] = cur;
      var next = render(o[a]);
      s[a] = next;
      origAttr.set(el, o); setAttr.set(el, s);
      if (next !== cur) el.setAttribute(a, next);
    }
  }

  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    doAttrs(root);
    var els = root.querySelectorAll("*");
    for (var i = 0; i < els.length; i++) doAttrs(els[i]);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) doText(n);
  }

  var obs = new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      if (m.type === "characterData") doText(m.target);
      else if (m.type === "attributes") doAttrs(m.target);
      else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
    }
  });

  var btn = document.getElementById("lang");
  function apply() {
    document.documentElement.lang = lang;
    if (btn) {
      btn.textContent = lang === "ru" ? "EN" : "RU";
      btn.setAttribute("aria-label", lang === "ru" ? "Switch to English" : "Переключить на русский");
    }
    walk(document.body);
  }

  if (btn) btn.addEventListener("click", function () {
    lang = lang === "ru" ? "en" : "ru";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
  });

  apply();
  obs.observe(document.body, {
    subtree: true, childList: true, characterData: true,
    attributes: true, attributeFilter: ATTRS.concat("label")
  });
})();
