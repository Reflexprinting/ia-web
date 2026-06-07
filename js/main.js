/* ============================================================
   REFLEX IA — main.js
   Menu mobile · i18n · FAQ accordéon · Reveal · Formulaire
   Aucune dépendance externe.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- i18n ---------- */
  var DICT = window.REFLEX_I18N || {};
  var originals = {}; // sauvegarde du FR (contenu HTML d'origine)

  function snapshotFR() {
    document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-ph]").forEach(function (el, idx) {
      el.setAttribute("data-i18n-id", idx);
      originals[idx] = {
        html: el.innerHTML,
        ph: el.getAttribute("placeholder")
      };
    });
  }

  function setLang(lang) {
    var dict = DICT[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-ph]").forEach(function (el) {
      var id = el.getAttribute("data-i18n-id");
      if (lang === "fr" || !dict) {
        if (originals[id]) {
          if (el.hasAttribute("data-i18n-ph") && originals[id].ph !== null) el.setAttribute("placeholder", originals[id].ph);
          else el.innerHTML = originals[id].html;
        }
        return;
      }
      var keyText = el.getAttribute("data-i18n");
      var keyHtml = el.getAttribute("data-i18n-html");
      var keyPh = el.getAttribute("data-i18n-ph");
      if (keyPh && dict[keyPh]) el.setAttribute("placeholder", dict[keyPh]);
      if (keyHtml && dict[keyHtml]) el.innerHTML = dict[keyHtml];
      else if (keyText && dict[keyText]) el.textContent = dict[keyText];
    });
    try { localStorage.setItem("reflex_lang", lang); } catch (e) {}
    var url = new URL(window.location.href);
    if (lang === "fr") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url.toString());
  }

  snapshotFR();
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  // Langue initiale : ?lang= > localStorage > navigateur > fr
  var initial = "fr";
  var qs = new URLSearchParams(window.location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("reflex_lang"); } catch (e) {}
  var nav2 = (navigator.language || "fr").slice(0, 2).toLowerCase();
  if (qs && DICT[qs]) initial = qs;
  else if (qs === "fr") initial = "fr";
  else if (saved && (saved === "fr" || DICT[saved])) initial = saved;
  else if (DICT[nav2]) initial = nav2;
  if (initial !== "fr") setLang(initial);

  /* ---------- FAQ accordéon ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Reveal au scroll ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Formulaire "Déposez votre idée" ----------
     Prêt à connecter : remplacer ENDPOINT par votre backend,
     Formspree, ou un mailto de secours est utilisé par défaut. */
  var ENDPOINT = ""; // ex. "https://formspree.io/f/xxxx" ou votre API
  var form = document.getElementById("ideaForm");
  var success = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);

      if (ENDPOINT) {
        fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) { if (r.ok) showSuccess(); else fallbackMail(data); })
          .catch(function () { fallbackMail(data); });
      } else {
        fallbackMail(data);
      }
    });
  }

  function showSuccess() {
    form.reset();
    success.classList.add("visible");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function fallbackMail(data) {
    // Solution de secours sans backend : ouvre le client mail prérempli.
    var lines = [];
    data.forEach(function (v, k) { if (k !== "fichier" && v) lines.push(k + ": " + v); });
    var body = encodeURIComponent(lines.join("\n"));
    window.location.href = "mailto:contact@reflexprinting.fr?subject=" +
      encodeURIComponent("Nouvelle idée — Reflex IA") + "&body=" + body;
    showSuccess();
  }

  /* ---------- Année footer ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
