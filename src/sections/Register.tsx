import { Calendar } from 'lucide-react';
import Reveal from '../components/Reveal';

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="register" className="py-32 relative overflow-hidden bg-[#1b052a]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#6B2D8C]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <Reveal direction="zoom">
          <div className="w-20 h-20 mx-auto bg-[#6B2D8C] rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-purple-500/30 animate-float transform rotate-3 hover:rotate-6 transition-transform">
            <Calendar size={32} />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">RSVP For 2026</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </Reveal>

        <Reveal delay={200} direction="up">
          <form className="text-left space-y-4" onSubmit={handleSubmit}>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                    test
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-lg focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 outline-none transition-all placeholder-white/20"
                    placeholder="Enter name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                    test
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-lg focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 outline-none transition-all placeholder-white/20"
                    placeholder="Enter name"
                  />
                </div>
              </div>

              <div className="mb-4 group">
                <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                  test
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-lg focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 outline-none transition-all placeholder-white/20"
                  placeholder="Enter name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                    test
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-lg focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 outline-none transition-all placeholder-white/20"
                    placeholder="Enter name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                    test
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-lg focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 outline-none transition-all placeholder-white/20"
                    placeholder="Enter name"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-[#6B2D8C] text-white font-bold uppercase tracking-[0.2em] py-5 overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 rounded-xl"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Submit Registration</span>
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-[#6B2D8C]">
                  Submit Registration
                </span>
              </button>
              <p className="text-center text-white/40 text-xs mt-4">By clicking submit, you agree to our data processing policies.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Register;
