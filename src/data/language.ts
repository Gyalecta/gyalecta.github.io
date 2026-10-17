export type Language = 'it' | 'en';

export function getInitialLanguage(): Language {
  const query = new URLSearchParams(window.location.search).get('lang');
  if (query === 'it' || query === 'en') return query;
  try {
    return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'it';
  } catch {
    return 'it';
  }
}

export function saveLanguage(language: Language): void {
  try {
    window.localStorage.setItem('portfolio-language', language);
  } catch {
    // Switching languages remains available when storage is blocked.
  }
}

export const desktopLabels = {
  it: {
    about: 'Chi sono',
    experience: 'Formazione e certificazioni',
    projects: 'I miei progetti',
    contact: 'Contatti',
    aboutSubtitle: 'Informazioni personali',
    experienceMenu: 'Percorso',
    experienceSubtitle: 'Studi e certificazioni',
    projectsSubtitle: 'Il mio GitHub',
    contactSubtitle: 'Scrivimi',
    documents: 'Documenti',
    pictures: 'Immagini',
    music: 'Musica',
    controlPanel: 'Pannello di controllo',
    logOff: 'Disconnetti',
    turnOff: 'Spegni computer',
    close: 'Chiudi',
    switchLanguage: 'Passa all’inglese',
    title: 'Domenico Avino | Portfolio XP',
    description:
      'Il portfolio di Domenico Avino, studente di Informatica all’Università degli Studi di Salerno, in un desktop ispirato a Windows XP.',
  },
  en: {
    about: 'About Me',
    experience: 'Education & Certifications',
    projects: 'My Projects',
    contact: 'Contact',
    aboutSubtitle: 'Personal Info',
    experienceMenu: 'Education',
    experienceSubtitle: 'Study & Certifications',
    projectsSubtitle: 'My GitHub',
    contactSubtitle: 'Get in touch',
    documents: 'My Documents',
    pictures: 'My Pictures',
    music: 'My Music',
    controlPanel: 'Control Panel',
    logOff: 'Log Off',
    turnOff: 'Turn Off Computer',
    close: 'Close',
    switchLanguage: 'Passa all’italiano',
    title: 'Domenico Avino | XP Portfolio',
    description:
      'Domenico Avino’s portfolio: Computer Science student at the University of Salerno, presented as a Windows XP-inspired desktop.',
  },
};
