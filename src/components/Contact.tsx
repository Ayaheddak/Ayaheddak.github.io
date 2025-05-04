import { forwardRef, useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import BgAbout from '../assets/bg-03.jpg';
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
      }, 60000);
    }, 1000);
  };



  return (
    <section ref={ref} id="contact" className="section-container relative">
      {/* bg image  */}
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
        <h2 className="section-title">Contact Me</h2>

        <div className="timeline bg-transparent grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Left: Get In Touch text centered */}
          <div className="flex justify-center ">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm always excited to meet new people and explore opportunities.<br />
                Whether you have a project, a question about my work, <br />
                or just want to say hello — feel free to reach out below. <br />
                I’ll get back to you as soon as I can!
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {/* <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
      Send Me a Message
    </h3> */}
            <form onSubmit={handleSubmit} className="py-3 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-slate-800 text-slate-800 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className=" px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2 px-6 py-3 bg-gray-100 dark:bg-indigo-500 rounded-md">
                  Message sent! You can also contact me directly at <br />
                  <a href="mailto:heddak.aya@gmail.com" className="font-semibold text-indigo-600 dark:text-white hover:underline">
                    heddak.aya@gmail.com
                  </a>
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  There was an error sending your message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
