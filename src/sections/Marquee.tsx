const Marquee = () => {
  const messages = [
    'Business C-Nergy 2026',
    'Conscious Leadership',
    'Impact Capital',
    'Sustainable Growth',
    'Partnership Opportunities',
    'Malaysia to Asia',
    'Global Network',
    'Purpose-Driven Business'
  ];

  return (
    <div className="border-y border-white/40 py-8 overflow-hidden bg-gradient-to-r from-[#6B2D8C]/10 to-[#8B4BA8]/10 backdrop-blur-lg relative z-20 shadow-sm">
      <div className="flex animate-[marquee_60s_linear_infinite] w-max gap-16 items-center hover:[animation-play-state:paused] cursor-default">
        {[...Array(3)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center gap-16">
            {messages.map((message, idx) => (
              <div key={`${setIdx}-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
                <span className="text-xl font-serif text-slate-700 hover:text-[#6B2D8C] transition-colors duration-300 font-semibold">
                  {message}
                </span>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
