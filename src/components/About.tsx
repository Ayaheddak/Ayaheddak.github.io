import { forwardRef } from 'react';
import pdpImage from '@/assets/pdp_.png';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="section-container">
      <h2 className="section-title text-center">About Me</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* Image section (unchanged) */}
        <div className="md:col-span-1 h-full">
          <div className="sticky top-24">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
              <img
                src={pdpImage}
                alt="Aya Heddak"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 20%, rgba(79, 70, 229, 0.5) 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Text section centered vertically */}
        <div className="md:col-span-2 flex items-center">
          <div className="w-full text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              I'm a software engineer with a solid background in computer science and a passion for building modern web applications.
              I specialize in frontend development with HTML, CSS, React, and Next.js, and I also work with Python for web scraping and have experience on the backend side.
              Additionally, I have a strong foundation in C and C++, which helps me write efficient, performance-oriented code.
              I'm always eager to learn new technologies and improve my skills.
              Outside of coding, I contribute to open-source projects and stay active in the tech community.
            </p>

            <div className="flex justify-center gap-4">
              <a 
                href="/resume.pdf"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition"
              >
                My Resume
              </a>
              <a 
                href="#contact"
                className="px-6 py-2 border border-black dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
