const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-[#020617] text-slate-500 text-sm relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#0F52BA] text-white flex items-center justify-center font-serif rounded-lg shadow-lg">
            C
          </div>
          <span className="uppercase tracking-widest text-xs text-white">Business C-Nergy 2026</span>
        </div>

        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-[#0F52BA] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#0F52BA] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#0F52BA] transition-colors">
            Contact
          </a>
        </div>

        <div className="text-right">
          <p>Organized by GOGLOBAL Business Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
