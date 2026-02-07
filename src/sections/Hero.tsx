import { Play } from 'lucide-react';
import Reveal from '../components/Reveal';
import CustomButton from '../components/CustomButton';

const Hero = () => {
  return (
    <header className="relative min-h-screen pt-22 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 border border-white/60 px-4 py-2 rounded-full mb-10 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B2D8C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B2D8C]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D1B3D]">🇲🇾 Visit Malaysia 2026 Partner</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-[12vw] lg:text-[7vw] font-serif leading-[0.85] tracking-tight text-[#2D1B3D] mb-8 drop-shadow-sm">
              Conscious <br />
              <span className="text-[#6B2D8C] italic pr-4 relative inline-block">
                Capital
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4AF37]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="block text-base md:text-lg font-sans font-light tracking-wide text-slate-700 mt-8 leading-relaxed max-w-3xl border-l-4 border-[#6B2D8C] pl-6 bg-white/40 backdrop-blur-sm py-4 pr-4 rounded-r-xl hover:bg-white/60 transition-all duration-300">
              <strong>Business C-Nergy & Growth Movement 2026</strong> unites corporate leaders, entrepreneurs, and investors in a national initiative to build a new era of conscious capitalism—where purpose and profit coexist, and business becomes a force for good.
            </p>
            <p className="block text-base md:text-lg font-sans font-light tracking-wide text-slate-700 mt-6 leading-relaxed max-w-2xl border-l-4 border-[#D4AF37] pl-6 bg-white/40 backdrop-blur-sm py-4 pr-4 rounded-r-xl hover:bg-white/60 transition-all duration-300">
              Aligned with Visit Malaysia 2026, we position Malaysia as <strong className="text-[#6B2D8C]">Asia's Conscious Business Capital</strong>—bridging impact capital from Malaysia to Asia, and Asia to the World. We're not just doing business. We're building legacy.
            </p>
          </Reveal>

          <Reveal delay={400} className="flex flex-col sm:flex-row gap-6 mt-12">
            <CustomButton primary href="#register">
              Secure Your Spot
            </CustomButton>
            <CustomButton href="https://www.linkedin.com/events/7415455404165541888/" target="_blank">
              <Play size={16} className="mr-3" fill="currentColor" /> Watch Launch
            </CustomButton>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:border-l lg:border-slate-300/50 lg:pl-12 lg:h-full flex flex-col justify-center pb-4">
          <Reveal delay={600} direction="left">
            <div className="relative h-96">
              

              {/* First Card - Left */}
              <div className="absolute -top-10 left-0 group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-40 hover:shadow-xl hover:shadow-purple-500/20 animate-float">
                <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                  30+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Global Mentors
                </div>
              </div>
              
              {/* Second Card - Right */}
              <div className="absolute top-50 right-0 group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-40 hover:shadow-xl hover:shadow-purple-500/20 animate-float-reverse" style={{ animationDelay: '1s' }}>
                <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                  5000+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Leaders Impacted
                </div>
              </div>

              {/* Third Card - Left */}
              <div className="absolute -bottom-30 left-6 group p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all w-40 hover:shadow-xl hover:shadow-purple-500/20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-4xl font-serif text-[#2D1B3D] mb-2 group-hover:text-[#6B2D8C] transition-colors duration-300">
                  400+
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-widest group-hover:text-black transition-colors">
                  Projects Matched
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
