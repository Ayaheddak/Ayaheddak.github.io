import {forwardRef,  useRef, useState, useEffect, useImperativeHandle } from 'react';
import Draggable from 'react-draggable';
import BG from '../assets/backgrounds/forest_4.jpg';
import Totoro from '../assets/gifs/totoro-blink.webp';
import BackgroundOverlay from './BackgroundOverlay';


const Experience = forwardRef<HTMLDivElement>((props, sectionRef) => {
  const internalSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [bounds, setBounds] = useState({ top: 0, left: 0, right: 0, bottom: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });




  // Allow parent to access sectionRef
  useImperativeHandle(sectionRef, () => internalSectionRef.current!);

  useEffect(() => {
   


    const updateBounds = () => {
      if (internalSectionRef.current && imgRef.current) {
        const sectionRect = internalSectionRef.current.getBoundingClientRect();
        const imgRect = imgRef.current.getBoundingClientRect();

        setBounds({
          top: 0,
          left: 0,
          right: sectionRect.width - imgRect.width,
          bottom: sectionRect.height - imgRect.height,
        });
      
        // Position image at bottom of section
      setPosition({
        x: sectionRect.width / 2 - imgRect.width / 2, // adjust if you want it centered horizontally
        y: sectionRect.height - (imgRect.height),
      });
      }
    };
    

    // Initial bounds setup
    updateBounds();

    // imgRef.current?.x = 10

    // Update bounds on window resize
    window.addEventListener('resize', updateBounds);
    return () => {
      window.removeEventListener('resize', updateBounds)};

  }, []);


  

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Decenture",
      location: "Remote",
      period: "Nov 2024 – present",
      description: [
        "Continue developing and maintaining React and Next.js applications.",
        "Support backend integration and optimize API performance.",
        "Optimized data scraping efficiency by 40%, reducing processing time and increasing accuracy.",
        "Collaborate with cross-functional teams to build scalable and user-centric applications."
      ],
      technologies: ["HTML/CSS", "JavaScript", "MySQL", "Scrapy", "BeautifulSoup", "OAuth", "Figma"]
    },
    {
      title: "Full-Stack Development Intern",
      company: "Decenture",
      location: "Remote",
      period: "avril 2024 - Nov 2024",
      description: [
        "Developed and maintained web applications using React and Next.js",
        "Provided backend support, assisting in API integrations and optimizing performance.",
        "Developed an automated web scraping pipeline, extracting 10,000+ job listings weekly, reducing manual data collection.",
        "Collaborated with teams to enhance application scalability and user experience."
      ],
      technologies: ["HTML/CSS", "JavaScript", "MySQL", "Scrapy", "BeautifulSoup"]
    },
    // 
  ];

  return (
    <section ref={internalSectionRef} id="experience" className="section-container">
      {/* bg image  */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // transform: `translateX(${offset * -0.05}px)`,
          backgroundRepeat: 'repeat',
          opacity: 0.5
        }}
      />


<BackgroundOverlay/>


      <Draggable bounds={bounds}
       position={position}
       onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
      //  onStop={handleDragStop}
       >
        <div className="absolute cursor-grab z-10 ">
          <img ref={imgRef} src={Totoro} 
            alt="totoro" 
            draggable={false}
            onDragStart={(e) => e.preventDefault()} 
            className="w-40 opacity-80 hover:opacity-100 hover:scale-150 transition-transform duration-300 " />
        </div>
      </Draggable>

      <div className="content-container">

        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-title">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl  text-slate-800 dark:text-white">{exp.title}</h3> 
                <span className="text-xl sm:text-sm font-medium text-indigo-600 dark:text-indigo-400  m-1">{exp.company}</span>
                <span className="text-sm sm:text-base"> - {exp.location}</span>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span className="ml-3 mr-1">•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="mt-2 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mx-1 text-xs sm:text-base text-indigo-600 dark:text-indigo-400">•</span>
                    <span className="text-xs sm:text-base text-slate-700 dark:text-slate-300">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 ">
                {exp.technologies.map((tech, i) => (
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 rounded">
                  {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
});

export default Experience;