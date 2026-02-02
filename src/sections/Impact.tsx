import { Users, Briefcase, Globe, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import StatCard from '../components/StatCard';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Leaders Impacted',
      subtext: 'Empowering a new generation of conscious leaders across the ASEAN region to drive sustainable economic growth.',
      span: 'lg:col-span-2',
    },
    {
      icon: Briefcase,
      number: '400+',
      label: 'Projects Matched',
      subtext: 'Connecting visionary projects with the capital needed to scale globally.',
      span: '',
    },
    {
      icon: Globe,
      number: '80+',
      label: 'Global Expansions',
      subtext: 'Facilitating international market entry for Malaysian businesses.',
      span: '',
    },
    {
      icon: Heart,
      number: '100+',
      label: 'Children Funded',
      subtext: 'Direct education funding for rural and special needs children.',
      span: '',
    },
  ];

  return (
    <section id="impact" className="py-32 relative z-10 bg-[#020617] text-white">
      {/* Background Overlay to match theme */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/10">
          <Reveal direction="right">
            <h2 className="text-5xl md:text-7xl font-serif text-white">
              Our <span className="italic text-[#0F52BA]">Legacy</span>
            </h2>
          </Reveal>
          <Reveal delay={100} direction="left" className="md:text-right max-w-md mt-8 md:mt-0">
            <p className="text-slate-400 text-sm leading-relaxed">
              Shaping Asia's Conscious Transformation Hub through measurable impact and sustainable growth.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100} className={stat.span ? `lg:col-span-2 h-full` : 'h-full'}>
              <StatCard
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                subtext={stat.subtext}
                className="h-full bg-white/5 border-white/10"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
