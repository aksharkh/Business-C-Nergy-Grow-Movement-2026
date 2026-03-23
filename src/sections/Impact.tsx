import { Users, Briefcase, Globe, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import StatCard from '../components/StatCard';

const Impact = () => {
  const stats = [
    {
      icon: Globe,
      number: '10+',
      label: 'Countries',
      subtext: 'Expanding economic footprints actively.',
      span: '',
    },
    {
      icon: Briefcase,
      number: '400+',
      label: 'Business Matched',
      subtext: 'Elevated through mentorship and investment.',
      span: '',
    },
    {
      icon: Users,
      number: '5000+',
      label: 'Businesses Inspired',
      subtext: 'Conscious transformation driving ecosystem growth.',
      span: '',
    },
    {
      icon: Heart,
      number: '100+',
      label: 'Children Impacted',
      subtext: 'Funding rural/special needs education resources.',
      span: '',
    },
  ];

  return (
    <section id="impact" className="py-32 relative z-10 bg-[#F5A623] text-black">
      {/* Background Overlay to match theme */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-black/10">
          <Reveal direction="right">
            <h2 className="text-5xl md:text-7xl font-serif text-black">
              Our <span className="italic text-white">Movement Milestones</span>
            </h2>
          </Reveal>
          <Reveal delay={100} direction="left" className="md:text-right max-w-md mt-8 md:mt-0">
            <p className="text-black/70 text-sm leading-relaxed font-medium">
              Shaping the Business Community in Asia through measurable co-creation for generational impact
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
                className="h-full bg-white/20 border-white/30 text-black shadow-lg shadow-black/5"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
