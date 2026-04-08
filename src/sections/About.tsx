import Reveal from '../components/Reveal';
import GroupPhoto from '../assets/goglobal.png'

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-20 relative z-10">
        
        {/* Mobile Title (Hidden on Desktop) */}
        <Reveal className="block lg:hidden mb-2 text-center">
          <p className="text-[#6B2D8C] font-bold tracking-[0.2em] uppercase mb-2">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.15]">
            <span className="text-[#11052C] font-bold">Conscious Business.</span><br/>
            <span className="text-[#6B2D8C] font-bold">Global Impact.</span><br/>
            <span className="text-[#D4AF37] italic">Collective Growth.</span>
          </h2>
        </Reveal>

        {/* Left Column (Will be order-2 on mobile so it comes AFTER mission/photo) */}
        <div className="order-2 lg:order-1 flex flex-col justify-start h-full pb-16 lg:pb-0">
          
          {/* Desktop Title */}
          <Reveal className="hidden lg:block mb-12">
            <p className="text-[#6B2D8C] font-bold tracking-[0.2em] uppercase mb-4 text-left">ABOUT US</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-10 leading-[1.15] text-left">
              <span className="text-[#11052C] font-bold">Conscious Business.</span><br/>
              <span className="text-[#6B2D8C] font-bold">Global Impact.</span><br/>
              <span className="text-[#D4AF37] italic">Collective Growth.</span>
            </h2>
          </Reveal>

          <Reveal delay={200} className="mt-auto">
            <div className="space-y-6">
              {/* GIFT SECTION */}
              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#6B2D8C]/10 p-8 rounded-2xl border border-[#D4AF37]/30 shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-serif text-[#6B2D8C] font-bold mb-4 flex items-center gap-3">
                  <span className="bg-[#D4AF37] text-white text-[10px] px-2 py-1 rounded uppercase tracking-[0.2em]">Exclusive</span>
                  OUR GIFT FOR YOU
                </h3>
                
                <div className="mb-6">
                  <p className="text-[#11052C] text-xl md:text-2xl font-bold leading-snug mb-2">
                    WE COME TO YOUR BOARDROOM TO MEET YOU & YOUR BUSINESS TEAM - <span className="text-[#6B2D8C] ">FREE OF COST</span>
                  </p>
                  <p className="text-[#6B2D8C] font-serif italic text-lg">(Worth thousands of dollars)</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50">
                  <p className="text-[#D4AF37] font-bold text-lg md:text-xl tracking-wide mb-3">
                    Learnings - Business Opportunities - Investors
                  </p>
                  <p className="text-slate-800 font-medium text-sm leading-relaxed">
                    On Business Growth, Investment, AI Technology, Team Development & Going Global Culture, Business Innovation, Wellness & Tourism Eco-system & Value chain Project opportunities showcase, etc.
                  </p>
                </div>
              </div>

              {/* POP-UP CTA */}
              <a href="#register" className="block relative group mt-8">
                {/* Lavender/Gold glowing pulse */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-white to-[#E6E6FA] rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Bright, clean button interior */}
                <div className="relative bg-white/95 backdrop-blur-xl border border-[#D4AF37]/40 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 text-center">
                  <span className="block text-[#6B2D8C] font-bold text-lg md:text-xl uppercase tracking-widest mb-3">JOIN THE BUSINESS C-NERGY GROWTH MOVEMENT</span>
                  <span className="block text-slate-600 text-sm md:text-base font-light">Together we are transforming the way people do business, travel and impact lives globally.</span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column (Will be order-1 on mobile so it comes right after mobile title) */}
        <div className="order-1 lg:order-2 relative flex flex-col h-full mt-4 lg:mt-0">
          <Reveal delay={100} className="mb-12">
            <div className="space-y-6 text-base text-slate-700 leading-relaxed font-light mt-8 lg:mt-0">
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-serif text-[#6B2D8C] font-bold mb-4">Mission Possible</h3>
                <p>
                  A <strong>United Community</strong> of Asia’s leading <strong>transformation professionals</strong> nurtured in a <strong>Collaborative Framework</strong> — Raising industry standards and amplifying <strong>business, leadership, and wellness impact</strong> in the region for <strong>generational legacy creation</strong>. Transforming the way people do business - Travel and Impact lives globally, through the <strong>GOGLOBAL Conscious Capitalism Framework</strong>.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-serif text-[#6B2D8C] font-bold mb-4">For You, Business Leaders In:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hotels, resorts, Travel</strong> and Tourism operators.</li>
                  <li><strong>Beauty and Wellness Centers</strong>, Eco-tourism, and conscious retreats.</li>
                  <li><strong>Hospitality suppliers</strong>, food, retail, logistics, training, manufactures and <strong>technology firms</strong>.</li>
                  <li><strong>Professional Trainers, Coaches & Consultants</strong> supporting the above industries.</li>
                  <li>Anyone ready to scale their team through <strong>conscious leadership, wellness, and innovation</strong>.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} direction="zoom" className="mt-auto">
            <div className="relative aspect-[4/5] max-h-[550px] overflow-hidden rounded-2xl shadow-2xl border border-slate-200 group mx-auto w-full">
              <div className="absolute inset-0 bg-[#6B2D8C]/10 mix-blend-overlay z-10"></div>
              <img
                src={GroupPhoto}
                alt="Leadership & Collaboration"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 bg-white/95 backdrop-blur-xl max-w-md z-20 translate-y-0 lg:translate-y-4 opacity-100 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg rounded-xl border border-white/60">
                <p className="font-serif italic text-xl md:text-2xl text-[#6B2D8C] leading-tight mb-2">
                  "From Malaysia to Asia, and Asia to the World."
                </p>
                <p className="text-xs md:text-sm text-slate-600">
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
