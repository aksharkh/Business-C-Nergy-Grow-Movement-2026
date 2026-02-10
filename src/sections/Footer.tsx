import logo from '../assets/logo.jpeg'


const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#1b052a] text-slate-500 text-sm relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div
            className={" w-12 h-12 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-purple-500/30"}>
            <img
                src={logo}
                alt="Business C-Nergy Logo"
                className="w-full h-full object-cover"
            />
            </div>
          <span className="uppercase tracking-widest text-xs text-white">Business C-Nergy 2026</span>
        </div>

        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </a>
        </div>

        {/* <div className="text-right">
          <p>Organised by <strong>GOGLOBAL Business Solutions Sdn Bhd</strong></p>
          <p className="text-xs text-slate-400 mt-2">A Project of GOGLOBAL Business School - SHINE GOGLOBAL | In Partnership with Workless Earn More Academy</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
