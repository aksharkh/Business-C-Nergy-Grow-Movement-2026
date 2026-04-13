import { useState, useEffect } from 'react';
import GroupPhoto from '../assets/groupphoto.jpeg';
import GoGlobal from '../assets/goglobal.png';
import Logo from '../assets/companyLogos/logo.jpeg';
import BlueSantosLogo from '../assets/companyLogos/Blue_Santos.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We want the preloader to show for at least 1.5 seconds so the premium animation is visible
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 1500));
    
    // Also preload specific heavy assets explicitly
    const criticalAssets = [GroupPhoto, GoGlobal, Logo];
    
    const assetPromises = criticalAssets.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block the site if an image fails
      });
    });

    // Simulate progress smoothly jumping around up to 90%
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15;
        return next > 90 ? 90 : next;
      });
    }, 200);

    // Resolve when both images and min-time are done
    Promise.all([...assetPromises, minTimePromise]).then(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 600); // Wait for the CSS fade-out animation to finish
    });

    // Fallback safeguard: If images take too long to load (e.g. slow network), skip the preloader after 5s
    const fallbackTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 600);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#11052C] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out pointer-events-none ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center justify-center pointer-events-auto">
        
        {/* Glowing floating orbs in background - Performant Radial Gradients */}
        <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] pointer-events-none z-0 animate-pulse" style={{ background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1), transparent 70%)' }}></div>
        <div className="absolute w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] pointer-events-none z-0 animate-pulse" style={{ background: 'radial-gradient(circle at center, rgba(107, 45, 140, 0.15), transparent 70%)', animationDelay: '1s' }}></div>
        
        {/* Title Elements */}
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-white font-serif text-3xl md:text-5xl lg:text-6xl mb-8 italic tracking-widest text-center filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            Business C-Nergy & <br/> <span className="text-[#D4AF37]">Growth Movement</span>
          </p>
          
          {/* Glowing thin progress bar container */}
          <div className="w-64 md:w-96 h-[2px] bg-white/10 rounded-full overflow-hidden mt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-pulse"></div>
            <div 
              className="h-full bg-gradient-to-r from-[#6B2D8C] via-[#D4AF37] to-white rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_#D4AF37] relative z-10"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-[#D4AF37] font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mt-6 font-bold flex items-center gap-6">
            <span className="w-12 h-[1px] bg-[#D4AF37]/40 hidden md:block"></span>
            Initializing Experience {Math.floor(progress)}%
            <span className="w-12 h-[1px] bg-[#D4AF37]/40 hidden md:block"></span>
          </p>
        </div>

        {/* Developer Attribution */}
        <div className="absolute -bottom-24 md:-bottom-32 text-center w-full flex flex-col items-center gap-2">
          <p className="text-white/30 font-sans text-[10px] uppercase tracking-[0.3em]">
            Designed and developed by
          </p>
          <a href="https://blue-santos.vercel.app/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-80 transition-opacity">
            <img 
              src={BlueSantosLogo} 
              alt="Blue Santos Technologies" 
              className="h-6 md:h-10 w-auto" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
