const Marquee = () => {
  return (
    <div className="border-y border-white/40 py-6 overflow-hidden bg-[#0F52BA]/5 backdrop-blur-md relative z-20 shadow-sm">
      <div className="flex animate-[marquee_40s_linear_infinite] w-max gap-12 items-center hover:[animation-play-state:paused] cursor-default">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-2xl font-serif text-slate-600 hover:text-[#0F52BA] transition-colors duration-300">
              Business C-Nergy 2026
            </span>
            <div className="w-3 h-3 bg-[#0F52BA] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Conscious Leadership</span>
            <div className="w-3 h-3 bg-[#0F52BA] rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
