import logo from '../assets/companyLogos/logo.jpeg';
import { Linkedin, Facebook, Phone, Mail } from 'lucide-react';
import BlueSantosLogo from '../assets/companyLogos/Blue_Santos.png';


const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#1b052a] text-slate-500 text-sm relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 group cursor-pointer">
          <div
            className={" w-12 h-12 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-purple-500/30 group-hover:scale-110"}>
            <img
                src={logo}
                alt="Business C-Nergy Logo"
                className="w-full h-full object-cover"
            />
            </div>
          <span className="uppercase tracking-widest text-xs text-white group-hover:text-[#D4AF37] transition-colors">Business C-Nergy 2026</span>
        </button>

        {/* <div className="flex gap-8 text-xs font-bold uppercase tracking-widest mt-6 md:mt-0 items-center justify-center border-t md:border-t-0 border-white/10 pt-6 md:pt-0 w-full md:w-auto">
          <a className="hover:text-[#D4AF37] transition-colors cursor-pointer">
            Privacy
          </a>
          <a className="hover:text-[#D4AF37] transition-colors cursor-pointer">
            Terms
          </a>
        </div> */}

        {/* Contact Info & Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-slate-400 mt-6 md:mt-0">
          <div className="flex items-center justify-center gap-6">
            <a href="https://www.linkedin.com/company/shinegoglobalimpactinvesting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-[#6B2D8C]">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/GoGLOBALAccelerator" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-[#6B2D8C]">
              <Facebook size={18} />
            </a>
          </div>
          <a href="tel:+6589347277" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors" style={{ color: '#94a3b8' }}>
             <Phone size={14} /> <span className="hover:text-[#D4AF37] transition-colors" style={{ color: '#94a3b8' }}>+65 8934 7277 / +60 16341 7511</span>
          </a>
          <a href="mailto:bizcnergy@shinegoglobal.world" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors" style={{ color: '#94a3b8' }}>
             <Mail size={14} /> <span className="hover:text-[#D4AF37] transition-colors" style={{ color: '#94a3b8' }}>bizcnergy@shinegoglobal.world</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-center md:text-left" style={{ color: '#64748b' }}>
          Copyright and terms are for Shinegoglobal. © 2026
        </p>
        <a href="https://blue-santos.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#D4AF37' }}>Designed & Developed by</span>
          <img
            src={BlueSantosLogo}
            alt="Blue Santos Technologies"
            className="h-6 md:h-8 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
