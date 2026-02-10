import { Play, Calendar, Video } from 'lucide-react';
import Reveal from '../components/Reveal';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#6B2D8C]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2D1B3D] mb-6">
            Live <span className="italic text-[#6B2D8C]">Sessions</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Join our Power Break sessions and catch up on the latest movement updates.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LinkedIn Live Recording */}
          <Reveal delay={100} className="h-full">
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
              <div className="bg-[#2D1B3D] p-6 flex items-center gap-4 text-white">
                <Video size={24} />
                <span className="font-bold tracking-wider uppercase text-sm">Launch Event</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-[#2D1B3D] mb-4 group-hover:text-[#6B2D8C] transition-colors">
                  Soft Launch Recording
                </h3>
                <p className="text-slate-600 mb-8 flex-1">
                  Watch the official soft launch of the Business C-Nergy & Growth Movement 2026 on LinkedIn Live.
                </p>
                <a 
                  href="https://www.linkedin.com/events/7415455404165541888/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2D1B3D] font-bold hover:gap-4 transition-all"
                >
                  Watch Replay <Play size={16} fill="currentColor" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Power Break Session */}
          <Reveal delay={200} className="h-full">
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
              <div className="bg-[#6B2D8C] p-6 flex items-center gap-4 text-white">
                <Calendar size={24} />
                <span className="font-bold tracking-wider uppercase text-sm">Power⚡️Break Series</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-[#2D1B3D] mb-4 group-hover:text-[#6B2D8C] transition-colors">
                  Session #01: The Hidden Advantage
                </h3>
                <p className="text-slate-600 mb-8 flex-1">
                  Discover the "Why, What, How" of the movement and why Asia's business communities are gathering in Malaysia.
                </p>
                <a 
                  href="https://lnkd.in/gJ-ZDfEV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#6B2D8C] font-bold hover:gap-4 transition-all"
                >
                  Watch Session <Play size={16} fill="currentColor" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Events;
