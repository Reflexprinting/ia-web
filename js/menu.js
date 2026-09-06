/* ============================================================
   REFLEX IA : menu du catalogue
   Construit la navigation sur toutes les pages, accueil comprise.
   Source unique : les deux tableaux ci-dessous.
   ============================================================ */
(function () {
  "use strict";

  var METIERS = [
    ["restaurant", "Restaurant", "🍴"],
    ["boucherie-commerce-de-bouche", "Boucherie et commerce de bouche", "🥩"],
    ["commerce", "Commerce et boutique", "🛍️"],
    ["artisan", "Artisan", "🔨"],
    ["coiffeur-esthetique", "Coiffeur et esthétique", "💇"],
    ["immobilier", "Immobilier", "🏡"]
  ];
  var MODULES = [
    ["facturation-electronique", "Facturation électronique", "🧾"],
    ["reservation-en-ligne", "Réservation en ligne", "🗓️"],
    ["carte-menu-digital", "Carte et menu digital", "📖"]
  ];

  var nav = document.getElementById("nav");
  if (!nav) return;

  // Sur la page d accueil le menu existe deja : on insere seulement le catalogue.
  var surAccueil = nav.children.length > 0;

  function liste(titre, items) {
    var h = '<div><h4>' + titre + '</h4>';
    items.forEach(function (it) {
      h += '<a href="' + it[0] + '.html"><i>' + it[2] + '</i>' + it[1] + '</a>';
    });
    return h + '</div>';
  }

  var drop = document.createElement("div");
  drop.className = "nav-drop";
  drop.innerHTML =
    '<button type="button" aria-expanded="false">Solutions métier</button>' +
    '<div class="mega">' +
      liste("Par métier", METIERS) +
      liste("Par module", MODULES) +
      '<a class="mega-tout" href="solutions.html">Voir toutes les solutions →</a>' +
    '</div>';

  var bouton = drop.querySelector("button");
  bouton.addEventListener("click", function (e) {
    e.stopPropagation();
    var ouvert = drop.classList.toggle("open");
    bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (!drop.contains(e.target)) {
      drop.classList.remove("open");
      bouton.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      drop.classList.remove("open");
      bouton.setAttribute("aria-expanded", "false");
    }
  });

  if (surAccueil) {
    // Juste apres "Votre idee"
    var apres = nav.querySelector('a[href="#idee"]');
    if (apres && apres.nextSibling) nav.insertBefore(drop, apres.nextSibling);
    else nav.appendChild(drop);
  } else {
    // Pages du catalogue : menu complet
    var liens = [
      ["index.html#realisations", "Réalisations"],
      ["index.html#tarifs", "Tarifs"],
      ["index.html#qui", "Qui est derrière"],
      ["index.html#contact", "Contact"]
    ];
    nav.appendChild(drop);
    liens.forEach(function (l) {
      var a = document.createElement("a");
      a.href = l[0];
      a.textContent = l[1];
      nav.appendChild(a);
    });

    // Menu mobile : le burger existe mais main.js n est pas charge ici.
    var burger = document.getElementById("burger");
    if (burger) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });
    }
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }
})();
