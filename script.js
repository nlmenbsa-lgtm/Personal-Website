(function () {
  var SITE = window.SITE || {};
  var MEDIA = window.MEDIA || {};

  // ---------- Site text ----------
  document.title = (SITE.name || "Portfolio") + " | Portfolio";
  document.querySelectorAll("[data-name]").forEach(function (el) { el.textContent = SITE.name || ""; });
  document.querySelectorAll("[data-subtitle]").forEach(function (el) { el.textContent = SITE.subtitle || ""; });

  var contact = document.querySelector("[data-contact]");
  if (contact) {
    if (SITE.email) contact.appendChild(btn("mailto:" + SITE.email, "Email", false));
    if (SITE.resumeUrl) contact.appendChild(btn(SITE.resumeUrl, "Activities résumé", true));
  }

  function btn(href, label, newTab) {
    var a = document.createElement("a");
    a.className = "button";
    a.href = href;
    a.textContent = label;
    if (newTab) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  // ---------- Tabs (hash routing so each tab has a shareable link) ----------
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
  var links = Array.prototype.slice.call(document.querySelectorAll(".tabs a"));
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".menu-toggle");

  function show() {
    var id = location.hash.replace("#", "") || "overview";
    if (!document.getElementById(id) || !document.getElementById(id).classList.contains("panel")) id = "overview";
    panels.forEach(function (p) { p.hidden = p.id !== id; });
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", show);
  show();

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // ---------- Galleries ----------
  function youtubeId(url) {
    var m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
    return m ? m[1] : null;
  }
  function vimeoId(url) {
    var m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return m ? m[1] : null;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function renderItem(item) {
    var source = item.url || item.src || "";
    var card = el("figure", "media");
    var frame = el("div", "media-frame");
    var wide = false;

    if (!source) {
      card.classList.add("placeholder");
      frame.appendChild(el("span", "placeholder-label", "Add " + item.type + " in content.js"));
    } else if (item.type === "youtube" && youtubeId(source)) {
      frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + youtubeId(source) +
        '" title="" loading="lazy" allowfullscreen allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>';
      frame.querySelector("iframe").title = item.title || "Video";
      wide = true;
    } else if (item.type === "vimeo" && vimeoId(source)) {
      frame.innerHTML = '<iframe src="https://player.vimeo.com/video/' + vimeoId(source) +
        '" title="" loading="lazy" allowfullscreen allow="fullscreen; picture-in-picture"></iframe>';
      frame.querySelector("iframe").title = item.title || "Video";
      wide = true;
    } else if (item.type === "video") {
      var v = el("video");
      v.src = source; v.controls = true; v.preload = "metadata";
      frame.appendChild(v);
      wide = true;
    } else if (item.type === "image") {
      var img = el("img");
      img.src = source; img.alt = item.title || ""; img.loading = "lazy";
      img.addEventListener("click", function () { openLightbox(source, item.title, item.caption); });
      frame.appendChild(img);
      frame.classList.add("zoomable");
    } else {
      // link, pdf, or an unrecognised video URL: show as a link card
      card.classList.add("link-card");
      var a = el("a", "link-frame");
      a.href = source; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(el("span", "link-icon", item.type === "pdf" ? "PDF" : "↗"));
      a.appendChild(el("span", "link-host", hostOf(source)));
      frame.appendChild(a);
    }

    if (wide) card.classList.add("wide");
    card.appendChild(frame);
    var cap = el("figcaption");
    if (item.title) cap.appendChild(el("strong", null, item.title));
    if (item.caption) cap.appendChild(el("span", null, item.caption));
    card.appendChild(cap);
    return card;
  }

  function hostOf(url) {
    try { return new URL(url, location.href).hostname.replace(/^www\./, "") || "Open document"; }
    catch (e) { return "Open link"; }
  }

  document.querySelectorAll("[data-gallery]").forEach(function (g) {
    var items = (MEDIA[g.dataset.gallery] || []).filter(function (it) {
      return (it.url || it.src) || SITE.showPlaceholders;
    });
    if (!items.length) {
      // Hide the gallery and its heading when there's nothing to show
      g.hidden = true;
      var h = g.previousElementSibling;
      if (h && h.tagName === "H2") h.hidden = true;
      return;
    }
    items.forEach(function (it) { g.appendChild(renderItem(it)); });
  });

  // ---------- Lightbox ----------
  var lb = document.querySelector(".lightbox");
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector(".lightbox-caption");
  function openLightbox(src, title, caption) {
    lbImg.src = src; lbImg.alt = title || "";
    lbCap.textContent = [title, caption].filter(Boolean).join(": ");
    lb.hidden = false;
  }
  function closeLightbox() { lb.hidden = true; lbImg.src = ""; }
  lb.addEventListener("click", function (e) { if (e.target !== lbImg) closeLightbox(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });
})();
