import { forwardRef, useState, useEffect } from 'react';
import BgAbout from '../assets/bg-02.jpg';
import BackgroundOverlay from './BackgroundOverlay';

const Education = forwardRef<HTMLDivElement>((props, ref) => {


  const education = [
    
    {
      degree: "Software engineering",
      institution: "Mohammed VI Polytechnic University - 1337 School",
      description: "project-based learning environment focused on software engineering principles and practices, with a strong emphasis on low-level programming and algorithmic problem solving.",
      courses: ["C/C++", "unix/linux", "docker", "network programming",
        "algorithms", "data structures", "system design", "graphics programming"]
    },
    {
      degree: "Bachelor of Mathematics \& Computer Science",
      institution: "Abdelmalek Essaadi University",
      description: "Comprehensive computer science education with emphasis on programming fundamentals and software development methodologies.",
      courses: ["Mathematics", "Data Structures", "Object-Oriented Programming", "Database Management", "Web Development"]
    }
  ];

  return (
    <section ref={ref} id="education"  className="section-container relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // transform: `translateX(${offset * -0.05}px)`,
          backgroundRepeat: 'repeat',
          opacity: 0.5
        }}
      />


    <BackgroundOverlay/>

    
      <div className="content-container">
        <h2 className="section-title">Education</h2>

        <div className="timeline ">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-title">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl  text-slate-800 dark:text-white ">{edu.degree}</h3>
                <span className="text-xl sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 font-medium m-1">{edu.institution}</span>
              </div>
              <span className="mx-1 text-xs sm:text-base text-indigo-600 dark:text-indigo-400">•</span>
              <span className="ml-1 mt-3 text-xs text-slate-700 dark:text-slate-300">
                {edu.description}
              </span>

              <div className="mt-3">
                {/* <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-4">Key Courses:</h4> */}
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
      </div>
    </section>
  );
});

export default Education;