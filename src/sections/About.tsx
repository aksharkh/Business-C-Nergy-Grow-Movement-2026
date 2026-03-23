import Reveal from '../components/Reveal';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <Reveal>
            <p className="text-[#6B2D8C] font-bold tracking-[0.2em] uppercase mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-[1.1] text-[#2D1B3D]">
              With 100+ Collective Years of Experience in Transforming Businesses & Impacting lives Globally
            </h2>
            <p className="text-2xl italic text-[#D4AF37] font-serif mb-10">
              Conscious Business. Global Impact. Collective Growth.
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="space-y-6 text-base text-slate-700 leading-relaxed font-light">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-serif text-[#2D1B3D] mb-3">Our Mission</h3>
                <p>
                  <strong>Mission Possible:</strong> An United Community of Asia’s leading transformation professionals nurtured in a Collaborative Framework — Raising industry standards and amplifying business, leadership, and wellness impact in the region for generational legacy creation. Transforming the way people do business - Travel and Impact lives globally, through GOGLOBAL Conscious Capitalism Framework.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-serif text-[#2D1B3D] mb-3">For You, Business Leaders In:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hotels, resorts, Travel and Tourism operators.</li>
                  <li>Beauty and Wellness Centers, Eco-tourism, and conscious retreats.</li>
                  <li>Hospitality suppliers, food, retail, logistics, training, manufactures and technology firms.</li>
                  <li>Professional Trainers, Coaches & Consultants supporting the above industries.</li>
                  <li>Anyone ready to scale their team through conscious leadership, wellness, and innovation.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#6B2D8C]/10 p-6 rounded-2xl border border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-serif text-[#6B2D8C] font-bold mb-2">OUR GIFT FOR YOU</h3>
                <p className="text-slate-800 font-medium">WE COME TO YOUR BOARDROOM TO MEET YOU & YOUR BUSINESS TEAM - FREE OF COST (Worth thousands of dollars)</p>
                <div className="mt-4 text-sm pt-3 border-t border-[#D4AF37]/30">
                  <strong>Topic Coverage:</strong> Business Growth, Investment, AI Technology, Team Development, Going Global Culture, Business Innovation, Wellness & Tourism Eco-systems.
                </div>
              </div>

              <div className="bg-[#6B2D8C]/10 border-l-4 border-[#6B2D8C] p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <a href="#register" className="block text-[#2D1B3D] font-medium hover:text-[#6B2D8C] transition-colors duration-300">
                  <strong>JOIN THE BUSINESS C-NERGY GROWTH MOVEMENT</strong> - Together we are transforming the way people do business, travel and impact lives globally.
                </a>
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
