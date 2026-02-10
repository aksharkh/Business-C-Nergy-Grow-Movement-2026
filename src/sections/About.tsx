import Reveal from '../components/Reveal';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9] text-[#2D1B3D]">
              The <br />
              <span className="italic text-[#6B2D8C] inline-block hover:skew-x-6 transition-transform duration-500 cursor-default">
                Future
              </span>{' '}
              <br />
              Is Conscious.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-light">
              <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-serif text-[#2D1B3D] mb-4">Our Purpose</h3>
                <p className="hover:text-black transition-colors duration-300">
                  <strong className="text-[#6B2D8C] font-semibold">Business C-Nergy & Growth Movement (BCG) 2026</strong> is a national and regional initiative to unite corporate leaders, entrepreneurs, and trainers in a transformative ecosystem. We integrate <strong>Conscious Living, Conscious Leadership, and Conscious Profits</strong> to reshape business, leadership, and community well-being.
                </p>
              </div>
              <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-serif text-[#2D1B3D] mb-4">Wholistic Pillars</h3>
                <p className="hover:text-black transition-colors duration-300">
                  We integrate <strong>Business Team Alignment, Conscious Collaboration, and Investability Dynamics</strong> with the SHINE GOGLOBAL Conscious Capitalism Framework to create lasting positive change for business leaders across Malaysia and Asia – World.
                </p>
              </div>
              <div className="bg-[#6B2D8C]/10 border-l-4 border-[#6B2D8C] p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <p className="text-[#2D1B3D] font-semibold hover:text-[#6B2D8C] transition-colors duration-300">
                  The movement aligns with the <strong>Visit Malaysia 2026</strong>, we position Malaysia as <strong>Asia's Conscious Business Capital</strong>—where corporate growth, wellness, and sustainability coexist through conscious leadership, powered by Digital AI Platforms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={300} direction="zoom">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-slate-200 group">
              <div className="absolute inset-0 bg-[#6B2D8C]/10 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Leadership & Collaboration"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-white/95 backdrop-blur-xl max-w-md z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg rounded-xl border border-white/60">
                <p className="font-serif italic text-2xl text-[#6B2D8C] leading-tight mb-2">
                  "From Malaysia to Asia, and Asia to the World."
                </p>
                <p className="text-sm text-slate-600">
                  Building a global network of conscious leaders committed to sustainable, purpose-driven business.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
