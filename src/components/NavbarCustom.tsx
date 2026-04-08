import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../utils/constants';
import logo from '../assets/companyLogos/logo.jpeg'

interface NavbarProps {
  scrollY?: number;
}

const NavbarCustom = ({ scrollY = 0 }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- Floating Island Navigation --- */}
      <nav
        className={`
          fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none
          ${scrollY > 50 ? 'pt-4 md:pt-6' : 'pt-0'}
        `}
      >
        <div
          className={`
            pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-between items-center
            ${
              scrollY > 50
                ? 'w-[90%] md:w-[85%] max-w-[1000px] rounded-full bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2 md:py-3 px-4 md:px-6'
                : 'w-full max-w-[1400px] rounded-none bg-transparent border-transparent py-3 md:py-4 px-6 md:px-12'
            }
          `}
        >
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo */}
            
            <div
            className={`
                flex items-center justify-center rounded-full overflow-hidden transition-all duration-500 shadow-xl 
                ${scrollY > 50 ? 'w-12 h-12' : 'w-16 h-16'}
            `}
            >
            <img
                src={logo}
                alt="Business C-Nergy Logo"
                className="w-full h-full object-cover"
            />
            </div>

            <div className="hidden md:block leading-tight">
              <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#2D1B3D] group-hover:text-[#6B2D8C] transition-colors">
                Business C-Nergy
              </div>
              {scrollY < 50 && (
                <div className="text-[10px] text-[#6B2D8C] tracking-widest uppercase group-hover:text-[#2D1B3D] transition-colors">
                  Movement 2026
                </div>
              )}
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <div className={`flex items-center gap-8 ${scrollY > 50 ? 'hidden md:flex' : ''}`}>
                {navLinks.map((item, i) => (
                <a
                    key={item.label}
                    href={item.href}
                    className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group py-2 ${scrollY > 50 ? 'text-[#2D1B3D]' : 'text-[#2D1B3D] hover:text-[#6B2D8C]'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B2D8C] transition-all duration-300 group-hover:w-full"></span>
                </a>
                ))}
            </div>

            <a
              href="#register"
              className={`
              group relative flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg hover:shadow-purple-500/40 rounded-full
              ${scrollY > 50 ? 'px-6 py-2.5 bg-[#2D1B3D] text-white text-[10px]' : 'px-8 py-3 bg-[#2D1B3D] text-white text-xs'}
              font-bold uppercase tracking-[0.2em]
            `}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Join Now</span>
              <span className="absolute inset-0 bg-[#6B2D8C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left border border-[#6B2D8C]"></span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#2D1B3D] hover:text-[#6B2D8C] transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex items-center justify-center animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-8">
            {[...navLinks, { label: 'Register', href: '#register' }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif text-[#2D1B3D] hover:text-[#6B2D8C] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarCustom;
