import { Play } from 'lucide-react';
import Reveal from '../components/Reveal';
import CustomButton from '../components/CustomButton';

const Hero = () => {
  return (
    <header className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 border border-white/60 px-4 py-2 rounded-full mb-10 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F52BA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F52BA]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#020617]">Visit Malaysia 2026 Partner</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-[12vw] lg:text-[7vw] font-serif leading-[0.85] tracking-tight text-[#020617] mb-8 drop-shadow-sm">
              Conscious <br />
              <span className="text-[#0F52BA] italic pr-4 relative inline-block">
                Capital
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#0F52BA]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="block text-sm md:text-lg font-sans font-light tracking-wide text-slate-600 mt-8 leading-relaxed max-w-2xl border-l-2 border-[#0F52BA] pl-6 bg-white/20 backdrop-blur-sm py-4 pr-4 rounded-r-xl">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <p className="block text-sm md:text-lg font-sans font-light tracking-wide text-slate-600 mt-8 leading-relaxed max-w-2xl border-l-2 border-[#0F52BA] pl-6 bg-white/20 backdrop-blur-sm py-4 pr-4 rounded-r-xl">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            {/* <p className="block text-sm md:text-lg font-sans font-light tracking-wide text-slate-600 mt-8 leading-relaxed max-w-2xl border-l-2 border-[#0F52BA] pl-6 bg-white/20 backdrop-blur-sm py-4 pr-4 rounded-r-xl">
              Igniting a new wave of possibilities. Bridging impact capital from Malaysia to Asia, and Asia to the World.
            </p> */}
          </Reveal>

          <Reveal delay={400} className="flex flex-col sm:flex-row gap-6 mt-12">
            <CustomButton primary href="#register">
              Secure Spot
            </CustomButton>
            <CustomButton href="https://www.linkedin.com/events/7415455404165541888/">
              <Play size={16} className="mr-3" fill="currentColor" /> Watch Launch
            </CustomButton>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:border-l lg:border-slate-300/50 lg:pl-12 lg:h-full flex flex-col justify-end pb-4">
          <Reveal delay={600} direction="left">
            <div className="space-y-10">
              <div className="group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all">
                <div className="text-4xl font-serif text-[#020617] mb-2 group-hover:text-[#0F52BA] transition-colors duration-300">
                  30+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Global Mentors
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all">
                <div className="text-4xl font-serif text-[#020617] mb-2 group-hover:text-[#0F52BA] transition-colors duration-300">
                  5000+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Leaders Impacted
                </div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all">
                <div className="text-4xl font-serif text-[#020617] mb-2 group-hover:text-[#0F52BA] transition-colors duration-300">
                  5000+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Leaders Impacted
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-slate-800">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-800 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
