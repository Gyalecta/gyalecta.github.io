import { useState, useEffect } from 'react';
import { Window } from './components/Window';
import { Taskbar } from './components/Taskbar';
import { DesktopIcon } from './components/DesktopIcon';
import { AboutWindow } from './components/windows/AboutWindow';
import { ProjectsWindow } from './components/windows/ProjectsWindow';
import { ExperienceWindow } from './components/windows/ExperienceWindow';
import { ContactWindow } from './components/windows/ContactWindow';
import italianData from './data/portfolio.json';
import englishData from './data/portfolio.en.json';
import { desktopLabels, getInitialLanguage, saveLanguage, type Language } from './data/language';
import LoadingScreen from './components/LoadingScreen';

type WindowId = 'about' | 'experience' | 'projects' | 'contact';

function App() {
  const [openWindows, setOpenWindows] = useState<WindowId[]>([]);
  const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const data = language === 'it' ? italianData : englishData;
  const labels = desktopLabels[language];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = labels.title;
    const metaValues: Record<string, string> = {
      'meta[name="description"]': labels.description,
      'meta[property="og:title"]': labels.title,
      'meta[property="og:description"]': labels.description,
      'meta[property="og:locale"]': language === 'it' ? 'it_IT' : 'en_US',
    };
    for (const [selector, content] of Object.entries(metaValues)) {
      document.querySelector(selector)?.setAttribute('content', content);
    }
  }, [language, labels]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    saveLanguage(nextLanguage);
  };

  const windowConfigs = {
    about: {
      title: labels.about,
      icon: <img src="images/mypc.ico" alt="" className="w-4 h-4" />,
      component: <AboutWindow data={data} language={language} />,
      position: { x: 100, y: 5 },
    },
    experience: {
      title: labels.experience,
      icon: <img src="images/world.ico" alt="" className="w-4 h-4" />,
      component: (
        <ExperienceWindow
          experience={data.experience}
          education={data.education}
          certifications={data.certifications}
          language={language}
        />
      ),
      position: { x: 200, y: 20 },
    },
    projects: {
      title: labels.projects,
      icon: <img src="images/folder.ico" alt="" className="w-4 h-4" />,
      component: (
        <ProjectsWindow projects={data.projects} github={data.social.github} language={language} />
      ),
      position: { x: 300, y: 35 },
    },
    contact: {
      title: labels.contact,
      icon: <img src="images/phone.ico" alt="" className="w-4 h-4" />,
      component: <ContactWindow data={data.personal} social={data.social} language={language} />,
      position: { x: 400, y: 55 },
    },
  };

  const openWindow = (id: string) => {
    if (!(id in windowConfigs)) return;
    const windowId = id as WindowId;
    setOpenWindows((current) => (current.includes(windowId) ? current : [...current, windowId]));
    setActiveWindow(windowId);
  };

  const closeWindow = (id: WindowId) => {
    const remaining = openWindows.filter((windowId) => windowId !== id);
    setOpenWindows(remaining);
    if (activeWindow === id) setActiveWindow(remaining[remaining.length - 1] ?? null);
  };

  if (loading) return <LoadingScreen language={language} />;

  const desktopIcons: Array<{ id: WindowId; image: string }> = [
    { id: 'about', image: 'mypc.ico' },
    { id: 'experience', image: 'world.ico' },
    { id: 'projects', image: 'folder.ico' },
    { id: 'contact', image: 'phone.ico' },
  ];

  return (
    <div className="min-h-screen xp-desktop relative overflow-hidden font-tahoma selection:bg-[#0b61ff] selection:text-white">
      <div className="absolute inset-0 pb-[30px] pointer-events-none">
        <img src="images/wallpaper.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <nav
        aria-label="Desktop"
        className="relative z-10 p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 w-fit content-start h-[calc(100vh-40px)]"
      >
        {desktopIcons.map(({ id, image }) => (
          <DesktopIcon
            key={id}
            icon={<img src={`images/${image}`} alt="" className="w-10 h-10" />}
            label={windowConfigs[id].title}
            onClick={() => openWindow(id)}
          />
        ))}
      </nav>

      <div className="absolute inset-0 z-20 pointer-events-none">
        {openWindows.map((id) => (
          <div
            key={id}
            onMouseDown={() => setActiveWindow(id)}
            onClick={() => setActiveWindow(id)}
            style={{ zIndex: activeWindow === id ? 30 : 20 }}
            className="absolute inset-0 pointer-events-none"
          >
            <Window
              title={windowConfigs[id].title}
              icon={windowConfigs[id].icon}
              onClose={() => closeWindow(id)}
              initialPosition={windowConfigs[id].position}
              closeLabel={labels.close}
            >
              {windowConfigs[id].component}
            </Window>
          </div>
        ))}
      </div>

      <Taskbar
        data={data.personal}
        openWindows={openWindows.map((id) => ({
          id,
          title: windowConfigs[id].title,
          icon: windowConfigs[id].icon,
        }))}
        activeWindow={activeWindow}
        onWindowClick={openWindow}
        onStartMenuClick={openWindow}
        language={language}
        onLanguageChange={changeLanguage}
      />
    </div>
  );
}

export default App;
