import { forwardRef, useEffect, useState } from 'react';
import BgAbout from '../assets/bg-about-bg.png';
import GirlCutout from '../assets/Girl-cutout.png';
import BackgroundOverlay from './BackgroundOverlay';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  // const [offset, setOffset] = useState(0);
  const [rootOffset, setRootOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRootOffset(window.pageYOffset);
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* bg image  */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // transform: `translateX(${offset * -0.05}px)`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      />
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${GirlCutout})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          transform: `translateX(${rootOffset * -0.15}px)`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.9
        }}
      />

      <BackgroundOverlay />



      <div className="relative z-20  w-full px-6 pt-20 flex flex-col ">

        {/* <h2 className="section-title text-left text-3xl font-bold text-black dark:text-white mb-7">
          About Me
        </h2> */}


        <div className="grid md:grid-cols-3 m-6 gap-10 flex-grow">
          <div className="md:col-span-1" />

          <div className="md:col-span-2 flex items-center">
            <div className="w-full text-left p-6 rounded-xl 
              bg-opacity-0  hover:dark:bg-opacity-60 hover:bg-opacity-60
              transition delay-100 duration-300 ease-in-out
              hover:dark:bg-slate-700 
              hover:bg-indigo-200 ">
              <p className="text-6 sm text-black dark:text-white leading-relaxed mb-20">
                I'm a software engineer with a solid background in computer science and a passion for building modern web applications.
                I specialize in frontend development with HTML, CSS, React, and Next.js, and I also work with Python for web scraping and have experience on the backend side.
                Additionally, I have a strong foundation in C and C++, which helps me write efficient, performance-oriented code.
                I'm always eager to learn new technologies and improve my skills.
                Outside of coding, I contribute to open-source projects and stay active in the tech community.
              </p>

              <div className="flex text-md justify-center gap-10 flex-wrap">
                <a
                  href="/resume.pdf"
                  className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
                >
                  My Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 border border-black text-black dark:text:white dark:bg-indigo-400 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-100 transition"
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
