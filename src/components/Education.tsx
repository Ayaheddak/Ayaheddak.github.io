import { forwardRef } from 'react';

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  const education = [
    {
      degree: "Bachelor of Mathematics \& Computer Science",
      institution: "Abdelmalek Essaadi University",
      description: "Comprehensive computer science education with emphasis on programming fundamentals and software development methodologies.",
      courses: ["Mathematics", "Data Structures", "Object-Oriented Programming", "Database Management", "Web Development"]
    },
    {
      degree: "Software engineering",
      institution: "Mohammed VI Polytechnic University - 1337 School",
      description: "project-based learning environment focused on software engineering principles and practices, with a strong emphasis on low-level programming and algorithmic problem solving.",
      courses: ["C/C++", "unix/linux", "docker", "network programming",
        "algorithms", "data structures", "system design", "graphics programming"]
    }
  ];

  return (
    <section ref={ref} id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="timeline mt-12">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-12">{edu.degree}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
              <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
              </div>
            </div>
            
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              {edu.description}
            </p>
            
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-4">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Education;