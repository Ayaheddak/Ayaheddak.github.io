import { forwardRef, useRef, useImperativeHandle } from 'react';
// Legacy cartoon/raster backgrounds & draggable Totoro commented out as requested
// import Draggable from 'react-draggable';
// import BG from '../assets/backgrounds/forest_4.jpg';
// import Totoro from '../assets/gifs/totoro-blink.webp';
import BackgroundOverlay from './BackgroundOverlay';
import TiltCard from './TiltCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = forwardRef<HTMLDivElement>((props, sectionRef) => {
  const internalSectionRef = useRef<HTMLDivElement>(null);

  // Allow parent to access sectionRef
  useImperativeHandle(sectionRef, () => internalSectionRef.current!);

  const experiences: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: (string | React.ReactNode)[];
    technologies: string[];
    isCurrent?: boolean;
  }[] = [
    {
      title: "Full Stack Engineer",
      company: "Veltiston AI",
      location: "Benguerir (Hybrid)",
      period: "July 2025 – Present",
      isCurrent: true,
      description: [
        "Building Holistic Hospital Optimization, an analytics platform to optimize operating-room performance and workflows.",
        "Developing responsive dashboards and real-time operational KPIs for clinical decision-making.",
        "Implementing core backend services, RESTful APIs, database migrations, and automated end-to-end tests."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Java", "Spring Boot", "React Query", "Zustand", "MySQL", "JPA/jOOQ", "Flyway", "H2O UI"]
    },
    {
      title: "Full-Stack Developer",
      company: "Decenture",
      location: "Remote",
      period: "Nov 2024 – July 2025",
      description: [
        "Built and maintained production web applications using React and Next.js.",
        "Optimized data scraping pipelines, improving processing speed and data accuracy.",
        "Implemented backend API integrations and OAuth authentication.",
        "Collaborated with design and product teams to deliver intuitive user interfaces."
      ],
      technologies: ["React", "Next.js", "JavaScript", "MySQL", "Scrapy", "BeautifulSoup", "OAuth", "Figma"]
    },
    {
      title: "Full-Stack Development Intern",
      company: "Decenture",
      location: "Remote",
      period: "April 2024 – Nov 2024",
      description: [
        "Assisted in developing UI components and responsive pages with React.",
        "Built automated web scraping scripts using Scrapy and BeautifulSoup to extract structured data.",
        "Supported backend API integrations, bug fixes, and MySQL database management."
      ],
      technologies: ["React", "JavaScript", "MySQL", "Python", "Scrapy", "BeautifulSoup"]
    },
  ];

  return (
    <section ref={internalSectionRef} id="experience" className="section-container relative min-h-screen py-20 flex flex-col justify-center">
      {/* Legacy background image commented out */}
      {/* 
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.5
        }}
      />
      */}

      <BackgroundOverlay />

      {/* Legacy draggable Totoro gif commented out */}
      {/* 
      <Draggable bounds={bounds} position={position} onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}>
        <div className="absolute cursor-grab z-10">
          <img ref={imgRef} src={Totoro} alt="totoro" draggable={false} className="w-40 opacity-80" />
        </div>
      </Draggable>
      */}

      <div className="content-container container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Career Journey
          </span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white block">
            Engineering Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-4 md:ml-6 space-y-6 sm:space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-4 sm:pl-6 md:pl-10 group">
              {/* Timeline Indicator Node with Glow */}
              <div className={`absolute -left-[8px] sm:-left-[9px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border-2 sm:border-4 ${
                exp.isCurrent
                  ? 'bg-blue-500 border-blue-100 dark:border-slate-900 ring-4 ring-blue-500/20'
                  : 'bg-slate-400 dark:bg-slate-600 border-slate-100 dark:border-slate-900'
              }`} />

              {/* 3D Glassmorphic Experience Card */}
              <TiltCard maxTilt={5}>
                <div className="pro-card p-5 sm:p-6 md:p-8 rounded-2xl text-left">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-300/70 dark:border-white/15">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                        <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          <Briefcase size={14} /> {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-slate-400" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                      <Calendar size={13} className="text-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm md:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                        <span className="mr-2.5 text-blue-500 dark:text-blue-400 font-bold">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;