import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { mentorsData } from '../utils/constants';
import { useState } from 'react';

const Mentors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="mentors" className="py-32 relative bg-[#eff6ff]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <Reveal className="mb-4">
          <h2 className="text-5xl font-serif text-[#2D1B3D]">Advisors & Mentors</h2>
        </Reveal>
        <Reveal delay={50} className="mb-20">
          <p className="text-slate-600 text-lg max-w-2xl">
            Learn from global thought leaders committed to conscious capitalism and sustainable growth
          </p>
        </Reveal>

        <div className="border-t border-[#2D1B3D]/10 relative">
          {mentorsData.map((mentor, i) => (
            <Reveal key={i} delay={i * 50} direction="left">
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-10 border-b border-[#2D1B3D]/10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer hover:px-8 hover:rounded-xl"
              >
                {/* Photo Overlay on Hover */}
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className={`hidden md:block absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-56 h-56 object-cover rounded-xl z-20 pointer-events-none transition-all duration-500 ease-out border-2 border-[#6B2D8C] shadow-2xl shadow-purple-500/40 ${
                    hoveredIndex === i ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-75 blur-md'
                  }`}
                />

                <div className="flex items-center gap-8 relative z-10">
                  <span className="text-xs font-bold text-[#6B2D8C] w-8 transition-transform duration-300 group-hover:scale-150">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-serif text-slate-400 group-hover:text-[#2D1B3D] transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 max-w-xs md:max-w-2xl group-hover:text-[#6B2D8C] transition-colors duration-300 opacity-0 group-hover:opacity-100 duration-500">
                      {mentor.bio}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 pl-16 md:pl-0 flex items-center gap-4 relative z-10">
                  <span className="text-sm text-slate-500 group-hover:text-[#6B2D8C] transition-colors uppercase tracking-widest text-right">
                    {mentor.role}
                  </span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#6B2D8C]" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
