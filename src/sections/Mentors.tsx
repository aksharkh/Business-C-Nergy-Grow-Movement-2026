import Reveal from '../components/Reveal';
import { mentorsData } from '../utils/constants';
import { useRef, useState, forwardRef } from 'react';

const reversedMentors = [...mentorsData].reverse();

const MentorCard = ({ mentor }: { mentor: any }) => (
  <a 
    href={mentor.linkedin} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex flex-col relative w-[220px] md:w-[280px] shrink-0"
  >
    <div className="absolute left-[30px] md:left-[40px] top-[140px] md:top-[180px] w-[2px] h-[100px] md:h-[130px] bg-[#6B2D8C]/20 group-hover:bg-[#6B2D8C] transition-colors duration-500 z-0 pointer-events-none"></div>

    <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-slate-200 relative z-10 transition-transform duration-500 group-hover:-translate-y-3">
      <img 
        src={mentor.photo} 
        alt={mentor.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B2D8C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>

    <div className="absolute top-[10px] right-[25px] w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 z-20 flex items-center justify-center text-xl md:text-2xl overflow-hidden border border-slate-100 pointer-events-none">
      {mentor.flag}
    </div>

    <div className="mt-8 ml-[30px] md:ml-[40px] pl-6 relative z-10 pointer-events-none">                  
      <h3 className="text-lg md:text-xl font-bold font-sans text-[#2D1B3D] group-hover:text-[#6B2D8C] tracking-widest uppercase mb-2 transition-colors duration-300">
        {mentor.name}
      </h3>
      <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-slate-500 group-hover:text-[#D4AF37] uppercase transition-colors duration-300">
        {mentor.role}
      </p>
    </div>
  </a>
);

// One unified block containing exactly both rows so they scroll flawlessly together
const MentorsBlock = forwardRef<HTMLDivElement, {}>((_, ref) => (
  <div ref={ref} className="flex flex-col gap-12 w-max shrink-0">
    <div className="flex gap-12">
      {mentorsData.map((m, i) => <MentorCard key={`r1-${i}`} mentor={m} />)}
    </div>
    <div className="flex gap-12">
      {reversedMentors.map((m, i) => <MentorCard key={`r2-${i}`} mentor={m} />)}
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
        className="w-full flex gap-12 overflow-x-auto hide-scrollbar pb-8 pl-6 md:pl-12 pr-12 relative z-20 select-none"
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
