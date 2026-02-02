import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { mentorsData } from '../utils/constants';

const Mentors = () => {
  return (
    <section id="mentors" className="py-32 relative bg-[#eff6ff]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <Reveal className="mb-20">
          <h2 className="text-5xl font-serif text-[#020617]">Advisors & Mentors</h2>
        </Reveal>

        <div className="border-t border-[#020617]/10">
          {mentorsData.map((mentor, i) => (
            <Reveal key={i} delay={i * 50} direction="left">
              <div className="group py-10 border-b border-[#020617]/10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer hover:px-8 hover:rounded-xl">
                <div className="flex items-center gap-8">
                  <span className="text-xs font-bold text-[#0F52BA] w-8 transition-transform duration-300 group-hover:scale-150">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif text-slate-400 group-hover:text-[#020617] transition-colors duration-300">
                    {mentor.name}
                  </h3>
                </div>
                <div className="mt-4 md:mt-0 pl-16 md:pl-0 flex items-center gap-4">
                  <span className="text-sm text-slate-500 group-hover:text-[#0F52BA] transition-colors uppercase tracking-widest text-right">
                    {mentor.role}
                  </span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#0F52BA]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
