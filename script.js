(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-language";

  var translations = {
    it: {
      skipLink: "Vai al contenuto principale",
      navAbout: "Chi sono",
      navEducation: "Formazione",
      navContact: "Contatti",
      navAria: "Navigazione principale",
      languageAria: "Seleziona la lingua",
      portraitAlt: "Ritratto di Domenico Avino",
      profileRole: "Studente di Informatica",
      profileUniversity: "Università degli Studi di Salerno",
      profileLocation: "Provincia di Napoli, Italia",
      profileFocus: "Alla scoperta del backend",
      heroKicker: "Ciao, sono Domenico Avino",
      heroTitle: "La curiosità è il mio punto di partenza.",
      bio1: "Studio Informatica all’Università degli Studi di Salerno e vivo in provincia di Napoli. Mi interessa capire come funzionano i sistemi che rendono possibili le esperienze digitali.",
      bio2: "Amo la tecnologia, l’astronomia e la musica. Sono sempre aperto a provare cose nuove e a imparare lungo il percorso.",
      githubCta: "Visita il mio GitHub",
      contactCta: "Contattami",
      interestsTitle: "I miei interessi",
      interestAstronomy: "Astronomia",
      interestMusic: "Musica",
      interestTech: "Tecnologia",
      educationKicker: "Il mio percorso",
      educationTitle: "Formazione",
      educationIntro: "Un percorso costruito tra studio, curiosità e voglia di mettermi alla prova.",
      universityDegree: "Laurea triennale in Informatica",
      universityInstitution: "Università degli Studi di Salerno",
      universityDate: "2024–oggi",
      schoolDegree: "Informatica e Telecomunicazioni",
      schoolInstitution: "I.S.I.S. Einaudi-Giordano",
      schoolDate: "2019–2024",
      certificationsTitle: "Certificazioni e percorsi",
      ciscoTitle: "Cisco Cybersecurity Scholarship",
      ciscoDetail: "Partecipante al programma",
      googleTitle: "Certificazioni Google AI",
      googleDetail: "Intelligenza artificiale",
      englishTitle: "English for IT",
      englishDetail: "Livello B2",
      geseTitle: "GESE Grade 7",
      geseDetail: "Livello B2.1",
      githubKicker: "Curiosità in pratica",
      githubTitle: "Il mio spazio su GitHub",
      githubDescription: "Segui quello che sto imparando e i prossimi passi del mio percorso nello sviluppo.",
      githubLink: "Vai al profilo GitHub",
      contactKicker: "Restiamo in contatto",
      contactTitle: "Parliamone.",
      contactDescription: "Se vuoi conoscermi meglio o scambiare idee su tecnologia e opportunità, scrivimi.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      imageCredits: "Crediti immagini",
      assetCredits: "Asset e licenze",
      footerLine: "Un piccolo spazio per raccontare il mio percorso.",
      backTop: "Torna su",
      backTopAria: "Torna all’inizio della pagina"
    },
    en: {
      skipLink: "Skip to main content",
      navAbout: "About",
      navEducation: "Education",
      navContact: "Contact",
      navAria: "Main navigation",
      languageAria: "Select language",
      portraitAlt: "Portrait of Domenico Avino",
      profileRole: "Computer Science student",
      profileUniversity: "University of Salerno",
      profileLocation: "Province of Naples, Italy",
      profileFocus: "Exploring backend development",
      heroKicker: "Hi, I’m Domenico Avino",
      heroTitle: "Curiosity is where I begin.",
      bio1: "I study Computer Science at the University of Salerno and live in the province of Naples. I’m interested in understanding the systems that make digital experiences possible.",
      bio2: "I enjoy technology, astronomy, and music. I’m always open to trying new things and learning along the way.",
      githubCta: "Visit my GitHub",
      contactCta: "Get in touch",
      interestsTitle: "My interests",
      interestAstronomy: "Astronomy",
      interestMusic: "Music",
      interestTech: "Technology",
      educationKicker: "My journey",
      educationTitle: "Education",
      educationIntro: "A path shaped by study, curiosity, and the drive to challenge myself.",
      universityDegree: "BSc in Computer Science",
      universityInstitution: "University of Salerno",
      universityDate: "2024–present",
      schoolDegree: "IT and Telecommunications",
      schoolInstitution: "I.S.I.S. Einaudi-Giordano",
      schoolDate: "2019–2024",
      certificationsTitle: "Certifications and programs",
      ciscoTitle: "Cisco Cybersecurity Scholarship",
      ciscoDetail: "Program participant",
      googleTitle: "Google AI certifications",
      googleDetail: "Artificial intelligence",
      englishTitle: "English for IT",
      englishDetail: "B2 level",
      geseTitle: "GESE Grade 7",
      geseDetail: "B2.1 level",
      githubKicker: "Curiosity in practice",
      githubTitle: "My space on GitHub",
      githubDescription: "Follow what I’m learning and the next steps in my development journey.",
      githubLink: "Go to my GitHub profile",
      contactKicker: "Let’s connect",
      contactTitle: "Let’s talk.",
      contactDescription: "If you’d like to know more about me or exchange ideas about technology and opportunities, feel free to reach out.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      imageCredits: "Image credits",
      assetCredits: "Assets and licenses",
      footerLine: "A small space to share my journey.",
      backTop: "Back to top",
      backTopAria: "Back to the top of the page"
    }
  };

  var pageMetadata = {
    it: {
      title: "Domenico Avino | Studente di Informatica",
      description: "Portfolio di Domenico Avino, studente di Informatica all’Università degli Studi di Salerno con interesse per il backend.",
      ogTitle: "Domenico Avino | Studente di Informatica",
      ogDescription: "Portfolio di Domenico Avino, studente di Informatica all’Università degli Studi di Salerno con interesse per il backend.",
      ogLocale: "it_IT"
    },
    en: {
      title: "Domenico Avino | Computer Science Student",
      description: "Portfolio of Domenico Avino, a Computer Science student at the University of Salerno exploring backend development.",
      ogTitle: "Domenico Avino | Computer Science Student",
      ogDescription: "Portfolio of Domenico Avino, a Computer Science student at the University of Salerno exploring backend development.",
      ogLocale: "en_US"
    }
  };

  function readSavedLanguage() {
    try {
      var savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      return savedLanguage === "en" || savedLanguage === "it" ? savedLanguage : null;
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // The language switch remains usable when storage is blocked.
    }
  }

  function getUrlLanguage() {
    var language = new URLSearchParams(window.location.search).get("lang");
    return language === "en" || language === "it" ? language : null;
  }

  function translateText(language) {
    var dictionary = translations[language];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-alt");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("alt", dictionary[key]);
      }
    });
  }

  function setLanguage(language, persistPreference) {
    if (!translations[language]) {
      return;
    }

    translateText(language);
    document.documentElement.lang = language;
    document.title = pageMetadata[language].title;

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", pageMetadata[language].description);
    }

    var openGraphMetadata = {
      'meta[property="og:title"]': pageMetadata[language].ogTitle,
      'meta[property="og:description"]': pageMetadata[language].ogDescription,
      'meta[property="og:locale"]': pageMetadata[language].ogLocale
    };

    Object.keys(openGraphMetadata).forEach(function (selector) {
      var element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", openGraphMetadata[selector]);
      }
    });

    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        button.getAttribute("data-language") === language ? "true" : "false"
      );
    });

    if (persistPreference) {
      saveLanguage(language);
    }
  }

  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"), true);
    });
  });

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  setLanguage(getUrlLanguage() || readSavedLanguage() || "it", false);
})();
