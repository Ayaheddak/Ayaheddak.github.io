import { forwardRef } from 'react';
// Legacy cartoon/raster backgrounds commented out as requested
// import BgAbout from '../assets/bg-about-bg.png';
// import GirlCutout from '../assets/Girl-cutout.png';
import BackgroundOverlay from './BackgroundOverlay';
import TiltCard from './TiltCard';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  Layers,
  GraduationCap,
  CheckCircle2,
  FileText,
  Send,
} from 'lucide-react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-14 sm:py-20"
    >
      <BackgroundOverlay />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center">
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            About Me
          </span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white block">
            Architecting Scalable Full-Stack Solutions
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left: Modern 3D Tech Card / Terminal */}
          <div className="lg:col-span-5">
            <TiltCard maxTilt={7}>
              <div className="pro-card relative p-5 sm:p-6 rounded-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
                </div>
                <div className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal size={13} className="mr-1 text-blue-500" /> fullstack_profile.ts
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <Code2 className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 block text-[11px] font-medium">Frontend Engineering</span>
                    <span className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">Next.js • React • TypeScript • Tailwind</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <Server className="text-sky-600 dark:text-sky-400 shrink-0" size={18} />
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 block text-[11px] font-medium">Backend & Systems</span>
                    <span className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">Java • Spring Boot • Node.js • C/C++</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <Database className="text-sky-600 dark:text-sky-400 shrink-0" size={18} />
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 block text-[11px] font-medium">Data & Pipelines</span>
                    <span className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">MySQL • JPA/jOOQ • Scrapy • Flyway</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <Sparkles className="text-amber-500 dark:text-amber-400 shrink-0" size={18} />
                  <div>
                    <span className="text-slate-600 dark:text-slate-300 block text-[11px] font-medium">Core Domain</span>
                    <span className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">Hospital Operations & OR Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            </TiltCard>
          </div>

          {/* Right: Modern Structured Highlights & Call-to-Actions */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4}>
              <div className="pro-card p-5 sm:p-7 rounded-2xl text-left">
                {/* Executive 1-line bio */}
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal mb-5">
                  I am a <strong className="text-slate-950 dark:text-white font-semibold">Full Stack Software Engineer</strong> dedicated to building high-reliability platforms, real-time analytics dashboards, and scalable architectures that deliver measurable real-world impact.
                </p>

                {/* 3 Structured Highlight Pillars */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/80 transition-colors">
                    <Activity size={18} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        Healthcare & OR Analytics
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-normal">
                        Engineering operating-room optimization platforms and clinical decision-making dashboards at <strong className="text-blue-600 dark:text-blue-400 font-semibold">Veltiston AI</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/80 transition-colors">
                    <Cpu size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        Systems & Performance Mindset
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-normal">
                        Rigorous algorithmic foundation from <strong className="text-slate-900 dark:text-white font-medium">1337 Coding School</strong> (42 Network), focused on memory efficiency and clean code.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/80 transition-colors">
                    <Layers size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        End-to-End Delivery
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-normal">
                        Connecting robust Java / Spring Boot services and automated ETL data pipelines with high-speed React & Next.js user interfaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Key Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                    <GraduationCap size={13} className="text-blue-500" /> 1337 / 42 Alum
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                    <CheckCircle2 size={13} className="text-emerald-500" /> Production Systems
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                    <Activity size={13} className="text-sky-500" /> Real-time Analytics
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex text-sm sm:text-base justify-start gap-3 flex-wrap">
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-medium shadow-sm hover:shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 text-center w-full sm:w-auto"
                  >
                    <FileText size={15} />
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400/50 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 text-center w-full sm:w-auto"
                  >
                    <Send size={14} />
                    Get in Touch
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
