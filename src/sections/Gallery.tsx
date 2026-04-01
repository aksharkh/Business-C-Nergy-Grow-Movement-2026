import Reveal from '../components/Reveal';
import { galleryData } from '../utils/constants';

const Gallery = () => {
  // We quadruple the data so the translate -50% doesn't abruptly end if screen is large
  // We need the scroll width to be AT LEAST 2x the viewport width. 20 items is more than enough
  const loopData = [...galleryData, ...galleryData, ...galleryData, ...galleryData];

  return (
    <section id="gallery" className="py-24 bg-[#1b052a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 mb-16 md:mb-24 text-center">
        <Reveal>
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">Capturing the Movement</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white">Event Highlights</h2>
        </Reveal>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-6 md:gap-8 relative z-10 w-full overflow-hidden">
        
        {/* Row 1: Scrolling Left */}
        {/* By adding hover:animation-play-state:paused on the parent, we stop the marquee! */}
        <div className="flex w-max group hover:[animation-play-state:paused] animate-marquee-left">
          {loopData.map((item, i) => (
            <div key={i} className="relative w-[280px] lg:w-[400px] h-[200px] lg:h-[280px] shrink-0 mx-3 overflow-hidden rounded-xl cursor-pointer">
              {/* Image */}
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11052C] via-[#6B2D8C]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 border border-transparent hover:border-white/20 rounded-xl">
                <span className="text-[#D4AF37] text-xs lg:text-sm tracking-widest uppercase font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.year}</span>
                <h3 className="text-white text-lg lg:text-2xl font-serif leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        {/* Notice animate-marquee-right uses a backward keyframe */}
        <div className="flex w-max group hover:[animation-play-state:paused] animate-marquee-right">
          {loopData.map((item, i) => (
            <div key={i} className="relative w-[280px] lg:w-[400px] h-[200px] lg:h-[280px] shrink-0 mx-3 overflow-hidden rounded-xl cursor-pointer">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#11052C] via-[#6B2D8C]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 border border-transparent hover:border-white/20 rounded-xl">
                <span className="text-[#D4AF37] text-xs lg:text-sm tracking-widest uppercase font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.year}</span>
                <h3 className="text-white text-lg lg:text-2xl font-serif leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 60s linear infinite;
        }
      `}} />

    </section>
  );
};

export default Gallery;
