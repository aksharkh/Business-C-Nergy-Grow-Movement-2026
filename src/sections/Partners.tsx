import Reveal from '../components/Reveal';

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            {/* Organizer */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-[#6B2D8C] font-bold">Organized By</p>
              <h3 className="text-xl font-serif text-[#2D1B3D]">GOGLOBAL Business Solutions</h3>
            </div>

            {/* Project Of */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-[#6B2D8C] font-bold">A Project Of</p>
              <h3 className="text-xl font-serif text-[#2D1B3D]">GOGLOBAL Business School</h3>
              <span className="text-sm text-slate-500">SHINE GOGLOBAL</span>
            </div>

            {/* In Partnership With */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-[#6B2D8C] font-bold">In Partnership With</p>
              <h3 className="text-xl font-serif text-[#2D1B3D]">Work Less Earn More Academy</h3>
            </div>

            {/* Partner */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-[#6B2D8C] font-bold">Strategic Partner</p>
              <h3 className="text-xl font-serif text-[#2D1B3D]">Borneo Referral Group</h3>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Partners;
