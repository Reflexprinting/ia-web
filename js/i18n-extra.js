/* ============================================================
   REFLEX IA : traductions du bloc "Qui est derriere"
   Charge par js/main.js, apres js/i18n.js
   ============================================================ */
(function () {
  var D = window.REFLEX_I18N = window.REFLEX_I18N || {};
  var T = {
    en: {
      "who.kicker": "Who is behind this",
      "who.title": "You talk directly to the person who builds",
      "who.lead": "My name is Didier Belin. I run ReflexPrinting and Reflex IA.",
      "who.p1": "The seven websites you have just opened and the four platforms of the group are ours. We built them, we keep them running, we fix them when something breaks. The same team will take on your project.",
      "who.p2": "When you send your idea, it reaches us directly, not a form that disappears somewhere. You get a person to talk to, not a ticket number.",
      "who.cta2": "Write to me directly"
    },
    es: {
      "who.kicker": "Quien esta detras",
      "who.title": "Hablas directamente con quien construye",
      "who.lead": "Me llamo Didier Belin. Dirijo ReflexPrinting y Reflex IA.",
      "who.p1": "Las siete webs que acabas de abrir y las cuatro plataformas del grupo son nuestras. Las hemos construido, las mantenemos en marcha y las corregimos cuando algo falla. El mismo equipo se ocupara de tu proyecto.",
      "who.p2": "Cuando envias tu idea, llega directamente a nosotros, no a un formulario que se pierde. Tienes un interlocutor, no un numero de ticket.",
      "who.cta2": "Escribirme directamente"
    },
    de: {
      "who.kicker": "Wer dahintersteht",
      "who.title": "Sie sprechen direkt mit dem, der baut",
      "who.lead": "Ich heisse Didier Belin. Ich leite ReflexPrinting und Reflex IA.",
      "who.p1": "Die sieben Websites, die Sie gerade geoeffnet haben, und die vier Plattformen der Gruppe sind unsere. Wir haben sie gebaut, wir halten sie am Laufen, wir reparieren sie, wenn etwas kaputtgeht. Dasselbe Team uebernimmt Ihr Projekt.",
      "who.p2": "Wenn Sie Ihre Idee senden, kommt sie direkt bei uns an, nicht in einem Formular, das irgendwo verschwindet. Sie haben einen Ansprechpartner, keine Ticketnummer.",
      "who.cta2": "Mir direkt schreiben"
    },
    it: {
      "who.kicker": "Chi c'e dietro",
      "who.title": "Parli direttamente con chi costruisce",
      "who.lead": "Mi chiamo Didier Belin. Dirigo ReflexPrinting e Reflex IA.",
      "who.p1": "I sette siti che hai appena aperto e le quattro piattaforme del gruppo sono nostri. Li abbiamo costruiti, li teniamo in funzione, li correggiamo quando qualcosa si rompe. Lo stesso team si occupera del tuo progetto.",
      "who.p2": "Quando invii la tua idea, arriva direttamente a noi, non in un modulo che si perde. Hai un interlocutore, non un numero di ticket.",
      "who.cta2": "Scrivimi direttamente"
    },
    pt: {
      "who.kicker": "Quem esta por tras",
      "who.title": "Fala diretamente com quem constroi",
      "who.lead": "Chamo-me Didier Belin. Dirijo a ReflexPrinting e a Reflex IA.",
      "who.p1": "Os sete sites que acabou de abrir e as quatro plataformas do grupo sao nossos. Construimo-los, mantemo-los a funcionar e corrigimo-los quando algo falha. E a mesma equipa que vai tratar do seu projeto.",
      "who.p2": "Quando envia a sua ideia, ela chega diretamente ate nos, nao a um formulario que se perde. Tem um interlocutor, nao um numero de bilhete.",
      "who.cta2": "Escrever-me diretamente"
    }
  };
  Object.keys(T).forEach(function (l) {
    D[l] = D[l] || {};
    Object.keys(T[l]).forEach(function (k) { D[l][k] = T[l][k]; });
  });
})();
