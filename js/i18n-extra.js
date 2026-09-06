/* ============================================================
   REFLEX IA : traductions complementaires
   Bloc "Qui est derriere" et formulations sans chiffres de decompte.
   Charge par js/main.js, apres js/i18n.js, dont il complete
   ou remplace certaines cles.
   ============================================================ */
(function () {
  var D = window.REFLEX_I18N = window.REFLEX_I18N || {};
  var T = {
    en: {
      "who.kicker": "Who is behind this",
      "who.title": "You talk directly to the person who builds",
      "who.lead": "My name is Didier Belin. I run ReflexPrinting and Reflex IA.",
      "who.p1": "The websites you have just opened and the platforms of the group are ours. We built them, we keep them running, we fix them when something breaks. The same team will take on your project.",
      "who.p2": "When you send your idea, it reaches us directly, not a form that disappears somewhere. You get a person to talk to, not a ticket number.",
      "who.cta2": "Write to me directly",
      "work.title": "Our websites live today. Open them.",
      "resto.c2": "Every country has its habits",
      "price.sub": "No opaque quotes, no surprises: clear plans, a controlled monthly subscription, including one dedicated to restaurants."
    },
    es: {
      "who.kicker": "Quien esta detras",
      "who.title": "Hablas directamente con quien construye",
      "who.lead": "Me llamo Didier Belin. Dirijo ReflexPrinting y Reflex IA.",
      "who.p1": "Las webs que acabas de abrir y las plataformas del grupo son nuestras. Las hemos construido, las mantenemos en marcha y las corregimos cuando algo falla. El mismo equipo se ocupara de tu proyecto.",
      "who.p2": "Cuando envias tu idea, llega directamente a nosotros, no a un formulario que se pierde. Tienes un interlocutor, no un numero de ticket.",
      "who.cta2": "Escribirme directamente",
      "work.title": "Nuestras webs en linea hoy. Abrelas.",
      "resto.c2": "Cada pais tiene sus costumbres",
      "price.sub": "Sin presupuestos opacos ni sorpresas: planes claros, una cuota mensual controlada, con una oferta dedicada a los restaurantes."
    },
    de: {
      "who.kicker": "Wer dahintersteht",
      "who.title": "Sie sprechen direkt mit dem, der baut",
      "who.lead": "Ich heisse Didier Belin. Ich leite ReflexPrinting und Reflex IA.",
      "who.p1": "Die Websites, die Sie gerade geoeffnet haben, und die Plattformen der Gruppe sind unsere. Wir haben sie gebaut, wir halten sie am Laufen, wir reparieren sie, wenn etwas kaputtgeht. Dasselbe Team uebernimmt Ihr Projekt.",
      "who.p2": "Wenn Sie Ihre Idee senden, kommt sie direkt bei uns an, nicht in einem Formular, das irgendwo verschwindet. Sie haben einen Ansprechpartner, keine Ticketnummer.",
      "who.cta2": "Mir direkt schreiben",
      "work.title": "Unsere Websites, heute online. Oeffnen Sie sie.",
      "resto.c2": "Jedes Land hat seine Gewohnheiten",
      "price.sub": "Keine undurchsichtigen Angebote, keine Ueberraschungen: klare Pakete, ein kontrolliertes Monatsabo, darunter eines fuer Restaurants."
    },
    it: {
      "who.kicker": "Chi c'e dietro",
      "who.title": "Parli direttamente con chi costruisce",
      "who.lead": "Mi chiamo Didier Belin. Dirigo ReflexPrinting e Reflex IA.",
      "who.p1": "I siti che hai appena aperto e le piattaforme del gruppo sono nostri. Li abbiamo costruiti, li teniamo in funzione, li correggiamo quando qualcosa si rompe. Lo stesso team si occupera del tuo progetto.",
      "who.p2": "Quando invii la tua idea, arriva direttamente a noi, non in un modulo che si perde. Hai un interlocutore, non un numero di ticket.",
      "who.cta2": "Scrivimi direttamente",
      "work.title": "I nostri siti online oggi. Aprili.",
      "resto.c2": "Ogni paese ha le sue abitudini",
      "price.sub": "Nessun preventivo opaco, nessuna sorpresa: formule chiare, un abbonamento mensile controllato, con un offerta dedicata ai ristoranti."
    },
    pt: {
      "who.kicker": "Quem esta por tras",
      "who.title": "Fala diretamente com quem constroi",
      "who.lead": "Chamo-me Didier Belin. Dirijo a ReflexPrinting e a Reflex IA.",
      "who.p1": "Os sites que acabou de abrir e as plataformas do grupo sao nossos. Construimo-los, mantemo-los a funcionar e corrigimo-los quando algo falha. E a mesma equipa que vai tratar do seu projeto.",
      "who.p2": "Quando envia a sua ideia, ela chega diretamente ate nos, nao a um formulario que se perde. Tem um interlocutor, nao um numero de bilhete.",
      "who.cta2": "Escrever-me diretamente",
      "work.title": "Os nossos sites online hoje. Abra-os.",
      "resto.c2": "Cada pais tem os seus habitos",
      "price.sub": "Sem orcamentos opacos nem surpresas: formulas claras, uma mensalidade controlada, com uma oferta dedicada aos restaurantes."
    }
  };
  Object.keys(T).forEach(function (l) {
    D[l] = D[l] || {};
    Object.keys(T[l]).forEach(function (k) { D[l][k] = T[l][k]; });
  });
})();
