import { useState, useEffect, useRef } from 'react';
import { Menu, Moon, Sun, Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxHero from './components/ParallaxHero';
import ThreeCanvas from './components/ThreeCanvas';
import Logo from './assets/logo-t.png';

// Legacy background import commented out
// import BgAbout from '/src/assets/bg-about-bg.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const handleScroll = () => {

      setScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY;
      
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          if (
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop, //- 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="fixed w-full select-none z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-3.5 flex justify-between items-center">
          <a href="#" className="relative text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" onClick={() => scrollToSection('home')}>
            <img 
              src={Logo} 
              alt='logo' 
              className="w-9 h-9 object-fill rounded-full ring-2 ring-blue-500/30"
            />
            <span className="text-sm font-mono font-bold tracking-tight text-slate-800 dark:text-slate-100 hidden sm:inline">
              Aya Heddak
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {Object.keys(sectionRefs).map(section => section !== 'home' && (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`text-sm font-medium capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === section ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  {section}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {Object.keys(sectionRefs).map(section => section !== 'home' && (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="text-sm font-medium capitalize py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 relative">
        {/* Global Persistent 3D WebGL Canvas Journey Across All Sections */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <ThreeCanvas className="w-full h-full opacity-80 dark:opacity-90" />
        </div>
        <section ref={sectionRefs.home} id="home" className="relative h-screen select-none flex items-center justify-center">
          <ParallaxHero />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pointer-events-auto">
            <div className="max-w-3xl mx-auto">
              {/* Pro Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200/80 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-medium backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Full Stack Engineer @ Veltiston AI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-5 tracking-tight text-slate-900 dark:text-white">
                <span>Hello, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 dark:from-blue-400 dark:via-sky-300 dark:to-slate-100 bg-clip-text text-transparent">
                  Aya Heddak
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl mb-7 sm:mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal px-2">
                Crafting robust full-stack architectures, real-time analytics dashboards, and scalable web platforms.
              </p>

              {/* CTAs */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-7 sm:mb-8">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-none dark:shadow-lg dark:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  Explore Work
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="px-6 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400/50 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center space-x-3 mb-6">
                <a
                  href="mailto:heddak.aya@gmail.com"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://github.com/Ayaheddak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/aya-heddak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-2"
              >
                Scroll to learn more <ChevronDown className="ml-1 animate-bounce" size={16} />
              </a>
            </div>
          </div>
        </section>

        <About ref={sectionRefs.about} />
        <Experience ref={sectionRefs.experience} />
        <Education ref={sectionRefs.education} />
        <Projects ref={sectionRefs.projects} />
        <Contact ref={sectionRefs.contact} />
      </main>

      <footer className="bg-slate-50/90 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800/80 py-4">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4 mb-1">
            <a 
              href="mailto:heddak.aya@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <a 
              href="https://github.com/Ayaheddak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={15} />
            </a>
            <a 
              href="https://linkedin.com/in/aya-heddak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Aya Heddak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;