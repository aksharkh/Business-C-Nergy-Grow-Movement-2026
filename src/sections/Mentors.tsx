import Reveal from '../components/Reveal';
import { mentorsData } from '../utils/constants';
import { useRef, useState, forwardRef } from 'react';

const MentorCard = ({ mentor }: { mentor: any }) => (
  <a 
    href={mentor.linkedin} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex flex-col relative w-[130px] md:w-[280px] shrink-0 transition-all duration-500 md:hover:-translate-y-2 md:hover:rotate-1 md:hover:scale-[1.02] z-10 hover:z-30"
  >
    <div className="absolute left-[30px] md:left-[40px] top-[90px] md:top-[180px] w-[2px] h-[60px] md:h-[130px] bg-[#D4AF37]/60 group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_15px_#D4AF37] transition-all duration-500 z-0 pointer-events-none"></div>

    <div className="w-[100px] h-[100px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border-[3px] md:border-[6px] border-white group-hover:border-[#f9f5ff] shadow-xl group-hover:shadow-[0_20px_40px_-5px_rgba(107,45,140,0.3)] bg-slate-200 relative z-10 transition-all duration-500">
      <img 
        src={mentor.photo} 
        alt={mentor.name} 
        className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B2D8C]/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>

    <div className="absolute top-[0px] md:top-[10px] right-[30px] md:right-[25px] w-6 h-6 md:w-10 md:h-10 rounded-full bg-gray-200 shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-y-2 md:group-hover:translate-x-2 md:group-hover:rotate-12 transition-all duration-500 z-20 flex items-center justify-center overflow-hidden border border-slate-100 pointer-events-none p-1">
      <img 
        src={`https://flagcdn.com/w40/${mentor.flag.toLowerCase()}.png`} 
        alt={`${mentor.flag} flag`}
        className="w-full h-full object-contain rounded-sm"
      />
    </div>

    <div className="mt-4 md:mt-8 ml-[25px] md:ml-[40px] pl-3 md:pl-6 relative z-10 pointer-events-none">                  
      <h3 className="text-[11px] md:text-xl font-bold font-sans text-[#2D1B3D] group-hover:text-[#6B2D8C] tracking-widest uppercase mb-1 md:mb-2 transition-colors duration-300">
        {mentor.name}
      </h3>
      <p className="text-[8px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#D4AF37] uppercase transition-colors duration-300 whitespace-pre-line leading-tight">
        {mentor.role}
      </p>
    </div>
  </a>
);

const firstRow = mentorsData.slice(0, 11);
const secondRow = mentorsData.slice(11);

// One unified block containing exactly both rows so they scroll flawlessly together
const MentorsBlock = forwardRef<HTMLDivElement, {}>((_, ref) => (
  <div ref={ref} className="flex flex-col gap-6 md:gap-12 w-max shrink-0">
    <div className="flex gap-4 md:gap-12">
      {firstRow.map((m, i) => <MentorCard key={`r1-${i}`} mentor={m} />)}
    </div>
    <div className="flex gap-4 md:gap-12 ml-[30px] md:ml-[140px]">
      {secondRow.map((m, i) => <MentorCard key={`r2-${i}`} mentor={m} />)}
    </div>
  </div>
));

const Mentors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="mentors" className="py-24 md:py-32 relative bg-[#faf5ff] overflow-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mb-20 md:mb-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-[#2D1B3D] shrink-0 tracking-wide">
              Advisors &<br className="hidden md:block"/> Mentors
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600 text-base md:text-lg max-w-xl border-l-[3px] border-[#D4AF37] pl-6 md:pl-8 py-1 md:py-2">
              With <strong>100+</strong> Collective Years of Experience in Transforming Businesses & Impacting lives Globally.
            </p>
          </Reveal>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="w-full flex gap-12 overflow-x-auto hide-scrollbar pt-12 pb-8 pl-6 md:pl-12 pr-12 relative z-20 select-none"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
      >
        <MentorsBlock />
      </div>
      
      {/* Subtle Drag Hint */}
      <div className="absolute bottom-8 right-12 text-[#6B2D8C]/50 text-xs tracking-[0.3em] uppercase hidden md:flex items-center gap-4 pointer-events-none animate-pulse">
        <span className="w-12 h-[1px] bg-[#6B2D8C]/50"></span>
        Drag or Scroll to explore
        <span className="w-12 h-[1px] bg-[#6B2D8C]/50"></span>
      </div>

    </section>
  );
};

export default Mentors;
