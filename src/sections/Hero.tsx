import { Play } from 'lucide-react';
import Reveal from '../components/Reveal';
import CustomButton from '../components/CustomButton';
import GroupPhoto from '../assets/groupphoto.jpeg'

const Hero = () => {
  return (
    <header className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#faf5ff]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#6B2D8C]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Group Photo Watermark Full Screen Bleed */}
      <div 
        className="absolute top-0 bottom-0 right-0 w-full lg:w-[65%] opacity-80 mix-blend-multiply bg-cover bg-left pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url(${GroupPhoto})`,
          maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
        }}
      />

      <div className="max-w-[1800px] w-full mx-auto px-6 lg:px-16 2xl:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 border border-white/60 px-4 py-2 rounded-full mb-10 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B2D8C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B2D8C]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D1B3D]">A Project of SHINE GOGLOBAL</span>
            </div>
          </Reveal>
 
          <Reveal delay={200}>
            <h1 className="text-[10vw] lg:text-[5vw] xl:text-[85px] 2xl:text-[96px] whitespace-nowrap lg:whitespace-normal font-serif leading-[0.9] tracking-tight text-[#2D1B3D] mb-8 drop-shadow-sm">
              Business C-Nergy & <br />
              <span className="text-[#6B2D8C] italic pr-4 relative inline-block">
                Growth Movement
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4AF37]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="block text-xl md:text-2xl font-serif italic text-[#6B2D8C] mb-8 leading-relaxed">
              Igniting Conscious Co-Creation & Bridging Impact Capital
            </p>
            <p className="block text-base md:text-lg font-sans font-light tracking-wide text-slate-700 mt-6 leading-relaxed max-w-3xl border-l-4 border-[#6B2D8C] pl-6 bg-white/40 backdrop-blur-sm py-4 pr-4 rounded-r-xl hover:bg-white/60 transition-all duration-300">
              Are you Ready for a <strong>New Wave Of Possibilities and Exponential Leap</strong> for your Business - Life and Impact in 2026 and Beyond from/in Malaysia Going Global!
            </p>
            <p className="block text-base md:text-lg font-sans font-light tracking-wide text-slate-700 mt-6 leading-relaxed max-w-4xl border-l-4 border-[#D4AF37] pl-6 bg-white/40 backdrop-blur-sm py-4 pr-4 rounded-r-xl hover:bg-white/60 transition-all duration-300">
              <strong className="text-[#6B2D8C]">Business C-Nergy & Growth Movement 2026</strong> - Conscious Co-Creation and Bridging to Impact Capital, a regional transformation initiative for the collective economic growth of businesses in the region – Economic Footprint Forward.
            </p>
          </Reveal>

          <Reveal delay={400} className="flex flex-col gap-4 mt-10">
            <p className="text-[#6B2D8C] font-semibold text-sm tracking-wide uppercase">
              Get Free Access and Updates to Activities & Opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <CustomButton primary href="#register">
                Join the Movement
              </CustomButton>
              <CustomButton href="https://www.linkedin.com/events/7415455404165541888/" target="_blank">
                <Play size={16} className="mr-3" fill="currentColor" /> Watch Launch
              </CustomButton>
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:flex lg:col-span-4 lg:border-l lg:border-slate-300/50 lg:pl-12 h-full flex-col justify-center relative min-h-[600px]">
          <Reveal delay={600} direction="left" className="w-full h-full relative">
            
            {/* First Card - Top Left */}
            <div className="absolute top-[5%] left-[0%] group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-48 hover:shadow-xl hover:shadow-purple-500/20 animate-float z-10">
              <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                50+
              </div>
              <div className="text-xs text-slate-800 uppercase tracking-widest transition-colors font-bold">
                Global<br/>Mentors
              </div>
            </div>
            
            {/* Second Card - Middle Right */}
            <div className="absolute top-[28%] right-[0%] group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-48 hover:shadow-xl hover:shadow-purple-500/20 animate-float-reverse z-10" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                20+
              </div>
              <div className="text-xs text-slate-800 uppercase tracking-widest transition-colors font-bold">
                Countries<br/>(Leaders)
              </div>
            </div>

            {/* Third Card - Lower Left */}
            <div className="absolute top-[55%] left-[5%] group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-48 hover:shadow-xl hover:shadow-purple-500/20 animate-float z-10" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                10+
              </div>
              <div className="text-xs text-slate-800 uppercase tracking-widest transition-colors font-bold">
                Countries<br/>(Investors)
              </div>
            </div>
            
            {/* Fourth Card - Bottom Right */}
            <div className="absolute top-[78%] right-[5%] group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-48 hover:shadow-xl hover:shadow-purple-500/20 animate-float-reverse z-10" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                10,000+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-800 uppercase tracking-widest transition-colors font-bold">
                Hours Learning<br/>Experience
              </div>
            </div>

          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-slate-800">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-800 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
