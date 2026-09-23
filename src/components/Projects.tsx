import { forwardRef } from 'react';
import { ExternalLink, Github as GitHub, Layers } from 'lucide-react';
// Legacy background image commented out as requested
// import BgAbout from '../assets/bg-01.jpg';
import TrnsImage from '../assets/Trandandan.png';
import WebsrvImage from '../assets/webserv.png';
import WebScarping from '../assets/Scraping.png';
import BackgroundOverlay from './BackgroundOverlay';
import TiltCard from './TiltCard';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects: Project[] = [
    {
      title: "PingPlay Arena",
      category: "Full-Stack Web Application",
      description: "Competitive multiplayer web platform featuring real-time ping pong physics, live chat channels, friend management, user matchmaking, and a global leaderboard.",
      image: TrnsImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "WebSocket", "Figma"],
      liveDemo: "https://www.figma.com/design/fVgeUBs3W0urzY9C4DAzuW/Trandandan?node-id=0-1&p=f&t=ouq0jQOs1CkClmGv-0",
      github: "https://github.com/Ayaheddak/ft_transcendence",
    },
    {
      title: "JobSync — Automated Data Scraper",
      category: "Data Engineering & Automation",
      description: "Robust automated scraping pipeline collecting job listings across Indeed, GulfTalent, Anapec, and Glassdoor. Engineered with proxy rotation, pagination, and headless browser automation to structure clean datasets.",
      image: WebScarping,
      technologies: ["Python", "Scrapy", "BeautifulSoup", "Selenium", "MySQL"],
    },
    {
      title: "Mini-HTTP Server",
      category: "Systems & Network Architecture",
      description: "High-performance non-blocking HTTP/1.1 server implemented in C++98 using select/epoll multiplexing, CGI dynamic script execution, and multipart upload handling.",
      image: WebsrvImage,
      technologies: ["C++98", "Sockets API", "Network Protocol", "Postman"],
      github: "https://github.com/Ayaheddak/webserv",
    },
  ];

  return (
    <section ref={ref} id="projects" className="section-container relative min-h-screen py-14 sm:py-20 flex flex-col justify-center">
      <BackgroundOverlay />

      <div className="content-container container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Featured Work
          </span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white block">
            Engineering Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4 sm:mt-6">
          {projects.map((project, index) => (
            <TiltCard key={index} maxTilt={7} className="h-full">
              <div className="pro-card group relative flex flex-col rounded-2xl overflow-hidden text-left h-full justify-between">
                <div>
                  {/* Image Header with Gradient Overlay */}
                  <div className="aspect-video w-full overflow-hidden relative bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <span className="absolute top-3 left-3 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-900/80 text-white backdrop-blur-md border border-white/10 flex items-center gap-1">
                      <Layers size={11} className="text-sky-400" />
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-pill font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm font-medium">
                    {project.github && project.github !== 'NULL' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <GitHub size={16} /> View Code
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Internal Architecture</span>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Demo <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;