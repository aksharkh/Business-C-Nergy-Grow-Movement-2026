import { Users, Briefcase, Globe, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import StatCard from '../components/StatCard';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Business Leaders Impacted',
      subtext: 'Professional standards raised, impacting Malaysia - Asian business ecosystem.',
      span: 'lg:col-span-2',
    },
    {
      icon: Briefcase,
      number: '400+',
      label: 'Business Projects Matched',
      subtext: 'Business projects matched and elevated through mentorship and investment.',
      span: '',
    },
    {
      icon: Globe,
      number: '80+',
      label: 'Organisations Scaled',
      subtext: 'Business organisations scaled for going global and investment readiness.',
      span: '',
    },
    {
      icon: Globe, // Reusing Globe for countries
      number: '10+',
      label: 'Countries Expanded',
      subtext: 'Expanding their Economic Footprint across the region.',
      span: '',
    },
    {
      icon: Heart,
      number: '100+',
      label: 'Children Funded',
      subtext: 'Education fund and resources supporting rural and special needs children.',
      span: 'lg:col-span-2',
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
              Our <span className="italic text-[#D4AF37]">Legacy</span>
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
