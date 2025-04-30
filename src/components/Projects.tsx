import { forwardRef } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import TrnsImage from '../assets/Trandandan.png';
import WebsrvImage from '../assets/webserv.png';
import WebScarping from '../assets/Scraping.png';

interface Project {
  title: string;
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
      description: "A competitive multiplayer web app where users play real-time ping pong matches, connect through live chat, manage friend lists, and climb the global leaderboard",
      image: TrnsImage,
      technologies: ["React", "Tailwind CSS", "Figma"],
      liveDemo: "https://www.figma.com/design/fVgeUBs3W0urzY9C4DAzuW/Trandandan?node-id=0-1&p=f&t=ouq0jQOs1CkClmGv-0",
      github: "https://github.com/Ayaheddak/ft_transcendence",
    },
    {
      title: "Mini-HTTP",
      description: "Developed a lightweight HTTP server in C++98, handling multiple requests with non-blocking sockets and CGI support for dynamic content",
      image: WebsrvImage,
      technologies: [ "C++98", "Postman"],
      github: "https://github.com/Ayaheddak/webserv",
      liveDemo: "#"
    },

    {
      title: "JobSync – Automated Job Scraper",
      description: "Built a powerful scraping tool using Python to collect job listings from platforms like Indeed, GulfTalent, Anapec, and Glassdoor. Implemented pagination, proxy rotation, and headless browsing with Selenium to ensure data accuracy and storage into a structured database for future analytics or visualization.",
      image: WebScarping,
      technologies: ["Python", "Scrapy", "BeautifulSoup", "Selenium"],
      github: "NULL"
    },

  ];

  return (
    <section ref={ref} id="projects" className="section-container">

      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <GitHub className="h-4 w-4 mr-1" />
                    Code
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                )}
                {!project.github && !project.liveDemo && (
                  <span className="text-slate-500 dark:text-slate-400 text-sm italic">Coming soon</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;