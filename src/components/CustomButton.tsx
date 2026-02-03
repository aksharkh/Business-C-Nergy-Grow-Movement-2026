import type { ButtonProps } from '../types/index';

const CustomButton = ({ children, primary = false, href = '#' }: ButtonProps) => (
  <a
    href={href}
    className={`
      group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 shadow-lg hover:shadow-purple-500/40 rounded-sm
      ${
        primary
          ? 'bg-[#6B2D8C] text-white hover:text-white'
          : 'bg-white/10 backdrop-blur-md text-current border border-current/20 hover:border-current'
      }
    `}
  >
    {/* Hover Fill Effect */}
    <span
      className={`absolute inset-0 w-full h-full transform transition-transform duration-500 ease-out origin-left -translate-x-full group-hover:translate-x-0 ${
        primary ? 'bg-[#5A2475]' : 'bg-[#6B2D8C]'
      }`}
    ></span>

    {/* Button Text */}
    <span className={`relative z-10 transition-colors duration-300 ${primary ? 'group-hover:text-white' : 'group-hover:text-white'}`}>
      {children}
    </span>
  </a>
);

export default CustomButton;
