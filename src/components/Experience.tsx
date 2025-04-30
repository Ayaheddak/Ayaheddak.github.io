import { forwardRef } from 'react';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
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
    <section ref={ref} id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline mt-12">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item mt-22">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-12">{exp.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
              <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                <span>{exp.location}</span>
                <span className="mx-2">•</span>
                <span>{exp.period}</span>
              </div>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 mr-2"></span>
                  <span className="text-slate-700 dark:text-slate-300">{desc}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 flex flex-wrap gap-2 ">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs ">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;