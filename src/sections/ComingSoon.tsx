import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import companyLogo from '../assets/logo.jpeg';
import BackgroundGradients from '../components/BackgroundGradients';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!scriptUrl) {
        throw new Error('Google Apps Script URL not configured.');
      }

      const sheetName = 'Notify mails from coming soon page';
      const encodedSheet = encodeURIComponent(sheetName);
      const targetUrl = `${scriptUrl}?sheetName=${encodedSheet}&sheet=${encodedSheet}`;

      // Sending sheetName along with the email payload
      await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ email, sheetName: sheetName, sheet: sheetName }),
      });

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 60,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden font-sans text-slate-900 selection:bg-[#D4AF37] selection:text-white">
      {/* Background Component */}
      <BackgroundGradients />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        className="relative z-20 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <img 
            src={companyLogo} 
            alt="Business C-Nergy Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply rounded-md shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#11052C]">Business C-Nergy</span>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#D4AF37]">2026</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#6B2D8C]">The Movement</span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </motion.header>

      {/* Central Content */}
      <main className="relative z-10 flex-1 w-full max-w-7xl px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-8 overflow-hidden">
            <span className="inline-block text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
              A New Era of Excellence
            </span>
          </motion.div>

          {/* Typography Masterpiece */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12 relative w-full max-w-full">
            <h1 
              className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[11.5rem] leading-none font-medium tracking-tighter text-[#11052C] flex flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8 whitespace-nowrap" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {/* Left Gold Line */}
              <div className="hidden lg:block w-16 md:w-32 lg:w-40 xl:w-64 h-[2px] bg-gradient-to-l from-[#D4AF37] to-transparent mix-blend-multiply translate-y-1 md:translate-y-2"></div>
              
              <span className="block">Coming</span>
              
              <span className="italic text-[#6B2D8C] font-normal block leading-none ">Soon</span>
              
              {/* Right Gold Line */}
              <div className="hidden lg:block w-16 md:w-32 lg:w-40 xl:w-64 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mix-blend-multiply translate-y-1 md:translate-y-2"></div>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-sm border-l border-[#D4AF37] pl-4 md:text-lg text-slate-700 max-w-xl mx-auto mb-12 md:mb-16 font-light leading-relaxed tracking-wide text-left">
            We are curating an experience that transcends the ordinary. 
            The most anticipated business event of the year is launching shortly. 
            <strong className="font-medium text-[#11052C] block mt-2">Prepare for the extraordinary.</strong>
          </motion.p>

          {/* Minimalist Input Form */}
          <motion.div variants={itemVariants} className="w-full max-w-lg relative group">
            {/* Elegant Outer Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6B2D8C]/20 via-[#D4AF37]/50 to-[#6B2D8C]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>
            
            <form onSubmit={handleSubmit} className="relative flex items-center bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(107,45,140,0.1)] rounded-full p-1.5 overflow-hidden transition-all hover:bg-white/80">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                placeholder="Enter email for exclusive access" 
                className="w-full bg-transparent border-none text-[#11052C] px-6 py-3 focus:outline-none focus:ring-0 placeholder:text-slate-400 font-light text-sm md:text-base disabled:opacity-50"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="bg-[#11052C] hover:bg-[#D4AF37] disabled:bg-[#11052C]/50 text-white p-3 md:px-8 md:py-3.5 rounded-full text-xs font-semibold tracking-[0.15em] transition-all duration-500 flex items-center justify-center gap-3 uppercase group/btn shadow-lg disabled:cursor-not-allowed min-w-[120px]"
              >
                <span className="hidden sm:block">
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Saved' : 'Notify'}
                </span>
                {status !== 'loading' && status !== 'success' && (
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" />
                )}
              </button>
            </form>

            {/* Notification Messages */}
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="absolute -bottom-8 left-0 w-full text-center text-xs font-semibold tracking-wider text-[#6B2D8C]"
              >
                Thank you! We have noted your email down.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="absolute -bottom-8 left-0 w-full text-center text-xs font-semibold tracking-wider text-red-500"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
        className="relative z-20 w-full px-6 py-6 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase gap-6"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <span>© 2026 Copyright and terms are for BlueSantos</span>
          <span className="text-[#D4AF37]/80">Designed and developed by BlueSantos</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#6B2D8C] transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-[#6B2D8C] transition-colors duration-300">Terms</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default ComingSoon;
