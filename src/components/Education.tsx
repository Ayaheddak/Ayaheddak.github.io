import { forwardRef } from 'react';
// Legacy background image commented out as requested
// import BgAbout from '../assets/bg-02.jpg';
import BackgroundOverlay from './BackgroundOverlay';
import TiltCard from './TiltCard';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  const education = [
    {
      degree: "Software Engineering & Computer Science",
      institution: "Mohammed VI Polytechnic University — 1337 Coding School",
      description: "Rigorous peer-to-peer, project-driven software engineering curriculum focused on systems architecture, low-level C/C++ programming, algorithms, networks, and distributed systems.",
      courses: ["C/C++", "Unix/Linux", "Docker", "Network Programming", "Algorithms & Data Structures", "System Design", "Graphics Programming"]
    },
    {
      degree: "Bachelor of Mathematics & Computer Science",
      institution: "Abdelmalek Essaadi University",
      description: "Fundamental mathematics and theoretical computer science education emphasizing algorithmic problem solving, object-oriented principles, and relational databases.",
      courses: ["Mathematics", "Data Structures", "Object-Oriented Programming", "Database Management", "Web Development"]
    }
  ];

  return (
    <section ref={ref} id="education" className="section-container relative min-h-screen py-20 flex flex-col justify-center">
      {/* Legacy background image commented out */}
      {/* 
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.5
        }}
      />
      */}

      <BackgroundOverlay />

      <div className="content-container container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Academic Background
          </span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white block">
            Education & Core Foundations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {education.map((edu, index) => (
            <TiltCard key={index} maxTilt={5} className="h-full">
              <div className="pro-card p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    <BookOpen size={14} className="text-blue-500" /> Key Disciplines
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="tech-pill"
                      >
                        {course}
                      </span>
                    ))}
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

export default Education;