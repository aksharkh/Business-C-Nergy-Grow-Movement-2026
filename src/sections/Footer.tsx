import logo from '../assets/logo.jpeg';
import { Linkedin, Facebook, Phone, Mail } from 'lucide-react';


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

        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest mt-6 md:mt-0 items-center justify-center border-t md:border-t-0 border-white/10 pt-6 md:pt-0 w-full md:w-auto">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Terms
          </a>
        </div>

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
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
             <Phone size={14} /> +65 89347277 / +6016341 7511
          </div>
          <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
             <Mail size={14} /> Bizcnergy@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
