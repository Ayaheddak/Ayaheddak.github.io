import { useState, useEffect, useRef } from 'react';
import { Menu, Moon, Sun, Github as GitHub, Linkedin, Mail, Phone, ChevronDown, ExternalLink, Download } from 'lucide-react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxHero from './components/ParallaxHero';
import Logo from './assets/logo-t.png';


function App() {
  const [darkMode, setDarkMode] = useState(false);
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
      
      const scrollPosition = window.scrollY + 100;
      
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
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="relative text-xl font-bold text-slate-800 dark:text-white" onClick={() => scrollToSection('home')}>
          <img 
                src={Logo} 
                alt='logo' 
                className="w-10 h-10 object-fill rounded-full"
          />
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
                  className={`text-sm font-medium capitalize transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 ${activeSection === section ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  {section}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {Object.keys(sectionRefs).map(section => section !== 'home' && (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="text-sm font-medium capitalize py-2 text-slate-600 dark:text-slate-300"
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <section ref={sectionRefs.home} id="home" className="relative h-screen">
          <ParallaxHero />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
                <span className="block">Hello, I'm</span>
                <span className="text-indigo-600 dark:text-indigo-400">Aya Heddak</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-300">
                Software Engineer
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <a 
                  href="mailto:heddak.aya@gmail.com" 
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com/Ayaheddak" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/aya-heddak" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="inline-flex items-center justify-center mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                Discover More <ChevronDown className="ml-1" size={20} />
              </a>
            </div>
          </div>
        </section>
        <section className='h-screen'>

          <About ref={sectionRefs.about} />
        </section>

        <div className="container mx-auto px-6 py-20">
          <Experience ref={sectionRefs.experience} />
          <Education ref={sectionRefs.education} />
        
          <Projects ref={sectionRefs.projects} />
          <Contact ref={sectionRefs.contact} />
        </div>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-800 py-2">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="mailto:heddak.aya@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/Ayaheddak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/aya-heddak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Aya Heddak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;