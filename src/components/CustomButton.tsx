import type { ButtonProps } from '../types/index';

interface CustomButtonProps extends ButtonProps {
  target?: string;
  rel?: string;
}

const CustomButton = ({ children, primary = false, href = '#', target, rel, className = '' }: CustomButtonProps & { className?: string }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`
      group relative flex items-center justify-center px-4 md:px-8 py-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 shadow-lg hover:shadow-purple-500/40 rounded-sm w-full
      ${
        primary
          ? 'bg-[#6B2D8C] text-white hover:text-white'
          : 'bg-white/10 backdrop-blur-md text-current border border-current/20 hover:border-current'
      }
      ${className}
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
