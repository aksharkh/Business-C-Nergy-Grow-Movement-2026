import { ArrowUpRight } from 'lucide-react';
import type { StatCardProps } from '../types/index';

const StatCard = ({ icon: Icon, number, label, subtext, className = '' }: StatCardProps) => (
  <div
    className={`
    relative p-10 border border-white/10 bg-white/5 backdrop-blur-xl
    flex flex-col justify-between group overflow-hidden shadow-2xl
    transition-all duration-500 hover:-translate-y-2 rounded-2xl
    ${className}
  `}
  >
    {/* Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0F52BA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10 flex justify-between items-start">
      <div className="p-3 bg-white/10 rounded-xl text-[#60a5fa] group-hover:bg-[#0F52BA] group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-inner border border-white/10">
        <Icon size={24} />
      </div>
      <ArrowUpRight className="text-white/30 group-hover:text-[#60a5fa] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={24} />
    </div>
    <div className="relative z-10 mt-12">
      <h3 className="text-5xl md:text-6xl font-serif text-white mb-2 tracking-tight group-hover:text-[#60a5fa] transition-colors duration-300">
        {number}
      </h3>
      <p className="text-[#60a5fa] text-xs font-bold tracking-[0.2em] uppercase mb-4">{label}</p>
      <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-[#0F52BA]/50 transition-colors duration-500">
        {subtext}
      </p>
    </div>
  </div>
);

export default StatCard;
