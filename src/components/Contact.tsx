import { forwardRef, useState } from 'react';
import { Send, Mail, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
// Legacy background image commented out as requested
// import BgAbout from '../assets/bg-03.jpg';
import BackgroundOverlay from './BackgroundOverlay';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate async form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus(null);
      }, 10000);
    }, 800);
  };

  return (
    <section ref={ref} id="contact" className="section-container relative min-h-screen py-20 flex flex-col justify-center">
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
            Let's Connect
          </span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white block">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start text-left">
          {/* Left: Contact Info Card */}
          <div className="pro-card lg:col-span-5 p-5 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-3">
              <Sparkles size={16} /> Open for Collaboration
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Have a project or question?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
              Whether you're exploring high-performance full-stack architectures, hospital analytics platforms, or just want to discuss software engineering — I'd love to connect.
            </p>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg bg-blue-600 text-white shrink-0">
                <Mail size={18} />
              </div>
              <div className="truncate">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Direct Email</span>
                <a
                  href="mailto:heddak.aya@gmail.com"
                  className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                >
                  heddak.aya@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="pro-card lg:col-span-7 p-5 sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry / Full-stack discussion"
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Share a few details about what you'd like to build or discuss..."
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-white resize-none transition-all"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm"
                >
                  <Send size={16} /> Send Message
                </button>

                {formStatus === 'success' && (
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} /> Message sent successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
