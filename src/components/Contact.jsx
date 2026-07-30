import React, { useRef, useState } from 'react';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Validate inputs
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Check if EmailJS is configured
    const isConfigured = 
      emailjsConfig.serviceId && 
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId && 
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey && 
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // EmailJS not configured — fallback to prefilled mailto
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // EmailJS integration
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] w-full pt-24 pb-32 relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Top paper divider transition */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Centered Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Reach Me
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight uppercase">
            Let's Build Something Great
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto font-medium leading-relaxed">
            Have an opportunity, project, or question in mind? Drop me a message below or email me directly at <a href={`mailto:${personalInfo.emails.primary}`} className="text-white underline font-semibold hover:text-red-400 transition-colors">{personalInfo.emails.primary}</a>.
          </p>
        </div>

        {/* Form Card */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[#ff2a2a] rounded-3xl p-8 md:p-14 text-white shadow-[0_25px_60px_rgba(255,42,42,0.25)] border border-red-500/40 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 pb-8 border-b border-white/20">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">Send a Message</h3>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-1">Direct Communication Channel</p>
            </div>
            {/* Quick Instagram Link */}
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white hover:text-red-600 border border-white/20 px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              DM on Instagram
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column Inputs */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column Message */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here..." 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col md:flex-row gap-8 pt-4 border-t border-white/20 items-start md:items-center justify-between">
              <div className="flex items-start gap-3 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded border-white/40 bg-transparent text-white focus:ring-white cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[300px] text-xs leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`px-8 py-3.5 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap ${
                  status === 'sending' 
                    ? 'opacity-50 cursor-not-allowed bg-white/10' 
                    : status === 'success'
                    ? 'bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]'
                    : status === 'error'
                    ? 'bg-red-800 border-red-700 text-white'
                    : 'hover:bg-white hover:text-[#ff2a2a]'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    Sent Successfully ✓
                  </span>
                ) : status === 'error' ? (
                  <span className="flex items-center gap-2">
                    Failed — Try Again
                  </span>
                ) : 'Send Message'}
                
                {status === 'idle' && (
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
