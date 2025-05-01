import { forwardRef, useEffect, useState } from 'react';
import BgAbout from '../assets/bg-about-bg.png';
import GirlCutout from '../assets/Girl-cutout.png';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* bg image  */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // transform: `translateX(${offset * -0.05}px)`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${GirlCutout})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          transform: `translateX(${offset * -0.1}px)`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.9
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900"
        style={{
          opacity: 0.1 * (offset * 0.001)
        }}
      />
<div 
  className="absolute top-0 left-0 right-0 h-[10%] bg-gradient-to-b from-white dark:from-slate-900 to-transparent"
  style={{
    opacity: 0.1 * (offset * 0.01)
  }}
/>

{/* <div 
  className="absolute top-0 left-0 right-0 h-[10%] backdrop-blur-sm"
  style={{
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))',
  }}
/> */}


      <div className="absolute inset-0 bg-white/40 dark:bg-black/30 z-10" />

 
      <div className="relative z-20 h-full w-full px-6 pt-20 flex flex-col">
        
        <h2 className="section-title text-left text-3xl font-bold text-black dark:text-white mb-7">
          About Me
        </h2>

        
        <div className="grid md:grid-cols-3 gap-10 flex-grow">
          <div className="md:col-span-1" /> 

          <div className="md:col-span-2 flex items-center">
            <div className="w-full text-left">
              <p className="text-lg text-black dark:text-white leading-relaxed mb-20">
                I'm a software engineer with a solid background in computer science and a passion for building modern web applications.
                I specialize in frontend development with HTML, CSS, React, and Next.js, and I also work with Python for web scraping and have experience on the backend side.
                Additionally, I have a strong foundation in C and C++, which helps me write efficient, performance-oriented code.
                I'm always eager to learn new technologies and improve my skills.
                Outside of coding, I contribute to open-source projects and stay active in the tech community.
              </p>

              <div className="flex justify-center gap-10 flex-wrap">
                <a
                  href="/resume.pdf"
                  className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                >
                  My Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 border border-black text-black rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
