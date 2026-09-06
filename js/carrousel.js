/* ============================================================
   REFLEX IA : carrousel des realisations
   Transforme la grille .site-grid en carrousel a defilement,
   sans toucher au HTML. Fleches, points, clavier, glissement tactile.
   Si le JavaScript ne s execute pas, la grille reste lisible telle quelle.
   ============================================================ */
(function () {
  "use strict";

  var grille = document.querySelector(".site-grid");
  if (!grille || grille.children.length < 2) return;

  var cartes = Array.prototype.slice.call(grille.children);

  // Enveloppe
  var enveloppe = document.createElement("div");
  enveloppe.className = "carrousel";
  grille.parentNode.insertBefore(enveloppe, grille);
  enveloppe.appendChild(grille);
  grille.classList.add("carrousel-piste");
  grille.setAttribute("role", "region");
  grille.setAttribute("aria-label", "Nos realisations");
  grille.setAttribute("tabindex", "0");

  // Commandes
  var barre = document.createElement("div");
  barre.className = "carrousel-barre";
  barre.innerHTML =
    '<button class="carrousel-fleche" type="button" data-sens="-1" aria-label="Realisation precedente">&#8592;</button>' +
    '<div class="carrousel-points" role="tablist"></div>' +
    '<button class="carrousel-fleche" type="button" data-sens="1" aria-label="Realisation suivante">&#8594;</button>';
  enveloppe.parentNode.insertBefore(barre, enveloppe.nextSibling);

  var points = barre.querySelector(".carrousel-points");
  var fleches = barre.querySelectorAll(".carrousel-fleche");

  cartes.forEach(function (carte, i) {
    var p = document.createElement("button");
    p.type = "button";
    p.className = "carrousel-point";
    var titre = carte.querySelector("h3");
    p.setAttribute("aria-label", "Aller a " + (titre ? titre.textContent : "la realisation " + (i + 1)));
    p.addEventListener("click", function () { versCarte(i); });
    points.appendChild(p);
  });

  function pas() {
    if (cartes.length < 2) return grille.clientWidth;
    return cartes[1].offsetLeft - cartes[0].offsetLeft;
  }

  function indexActuel() {
    var p = pas();
    return p ? Math.round(grille.scrollLeft / p) : 0;
  }

  function versCarte(i) {
    var max = cartes.length - 1;
    i = Math.max(0, Math.min(max, i));
    grille.scrollTo({ left: i * pas(), behavior: "smooth" });
  }

  fleches.forEach(function (f) {
    f.addEventListener("click", function () {
      versCarte(indexActuel() + parseInt(f.getAttribute("data-sens"), 10));
    });
  });

  grille.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); versCarte(indexActuel() + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); versCarte(indexActuel() - 1); }
  });

  function rafraichir() {
    var i = indexActuel();
    var visibles = Math.max(1, Math.round(grille.clientWidth / (pas() || 1)));
    var dernier = Math.max(0, cartes.length - visibles);
    Array.prototype.forEach.call(points.children, function (p, j) {
      var actif = j >= i && j < i + visibles;
      p.classList.toggle("actif", actif);
      p.setAttribute("aria-selected", actif ? "true" : "false");
    });
    fleches[0].disabled = i <= 0;
    fleches[1].disabled = i >= dernier;
  }

  var minuteur;
  grille.addEventListener("scroll", function () {
    clearTimeout(minuteur);
    minuteur = setTimeout(rafraichir, 90);
  });
  window.addEventListener("resize", rafraichir);
  rafraichir();

  // Glissement a la souris, en plus du tactile natif
  var presse = false, departX = 0, departScroll = 0;
  grille.addEventListener("mousedown", function (e) {
    presse = true; departX = e.pageX; departScroll = grille.scrollLeft;
    grille.classList.add("saisi");
  });
  ["mouseup", "mouseleave"].forEach(function (ev) {
    grille.addEventListener(ev, function () { presse = false; grille.classList.remove("saisi"); });
  });
  grille.addEventListener("mousemove", function (e) {
    if (!presse) return;
    var d = e.pageX - departX;
    if (Math.abs(d) > 4) e.preventDefault();
    grille.scrollLeft = departScroll - d;
  });
})();
