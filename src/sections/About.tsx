import Reveal from '../components/Reveal';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9] text-[#020617]">
              The <br />
              <span className="italic text-[#0F52BA] inline-block hover:skew-x-6 transition-transform duration-500 cursor-default">
                Future
              </span>{' '}
              <br />
              Is Conscious.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-light bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
              <p className="hover:text-black transition-colors duration-300">
                <strong className="text-[#0F52BA] font-semibold">Business C-Nergy & Growth Movement 2026</strong> is a national
                initiative uniting corporate leaders, entrepreneurs, and investors.
              </p>
              <p className="hover:text-black transition-colors duration-300">
                Aligned with the Visit Malaysia 2026 vision, we position Malaysia as Asia's Conscious Business Capital.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={300} direction="zoom">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-slate-200 group">
              <div className="absolute inset-0 bg-[#0F52BA]/10 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Leadership"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-white/90 backdrop-blur-xl max-w-md z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg rounded-xl border border-white/60">
                <p className="font-serif italic text-2xl text-[#020617] leading-tight">
                  "From Malaysia to Asia, and Asia to the World."
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
