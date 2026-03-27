import React from 'react';
import Reveal from '../components/Reveal';
import logo from '../assets/companyLogos/logo.jpeg';
import ggsolution from '../assets/companyLogos/ggsolution.png';
import borneo from '../assets/companyLogos/borneo.png';
import workless from '../assets/companyLogos/workless.png';
import whq from '../assets/companyLogos/whq.png';
import dewi from '../assets/companyLogos/dewi.png';
import birth from '../assets/companyLogos/birth.png';
import reach from '../assets/companyLogos/reach.png';
import globe from '../assets/companyLogos/globe.png';
import quest from '../assets/companyLogos/quest.png';
import innovate from '../assets/companyLogos/innovate.png';
import purpose from '../assets/companyLogos/purpose.png';
import incubaker from '../assets/companyLogos/incubaker.png';
import auriga from '../assets/companyLogos/auriga.png';
import belivin from '../assets/companyLogos/belivin.png';
import beez from '../assets/companyLogos/beez.png';
import doctors from '../assets/companyLogos/doctors.png';
import nivahs from '../assets/companyLogos/nivahs.png';
import insan from '../assets/companyLogos/insan.png';
import creative from '../assets/companyLogos/creative.png';
import sj from '../assets/companyLogos/sj.png';
import navaties from '../assets/companyLogos/navaties.png';
import cosmo from '../assets/companyLogos/cosmo.png';
import lash from '../assets/companyLogos/lash.png';
import icib from '../assets/companyLogos/icib.png';
import asianchamber from '../assets/companyLogos/asianchamber.png';
import sabah from '../assets/companyLogos/sabah.png';
import institute from '../assets/companyLogos/institute.png';
import globalsparks from '../assets/companyLogos/globalsparks.png';
import kon from '../assets/companyLogos/kon.png';
import ssacci from '../assets/companyLogos/ssacci.png';
// import shine from '../assets/companyLogos/shine.png';
// import companyofgood from '../assets/companyLogos/companyofgood.png';




const logos = [borneo, workless, whq, dewi, birth, reach, globe,quest,innovate,purpose,incubaker,auriga,belivin,beez,doctors,nivahs,insan,creative,sj,navaties,cosmo,lash,icib,asianchamber,sabah,institute,globalsparks,kon,ssacci];

const partnersLists = {
  jointlyPresented: logos.slice(0, 2),
  coCreating: logos.slice(2, 22),
  strategic: logos.slice(22, 29)
};

const HexagonCard = ({ children, isDark = false, isLarge = false }: { children: React.ReactNode, isDark?: boolean, isLarge?: boolean }) => {
  const sizeClasses = isLarge 
    ? "w-[240px] h-[208px] lg:w-[280px] lg:h-[242px] xl:w-[360px] xl:h-[312px]" 
    : "w-[80px] h-[69px] lg:w-[100px] lg:h-[86px] xl:w-[130px] xl:h-[112px]";

  const isImage = typeof children === 'string' && (children.includes('/') || children.includes('data:image'));

  return (
    <div className={`relative group ${sizeClasses} p-1 md:p-2 drop-shadow-md hover:drop-shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer z-10 hover:z-50`}>
      <div 
        className={`w-full h-full flex items-center justify-center p-1 md:p-2 text-center transition-colors duration-500 ${isDark ? 'bg-[#11052C]' : 'bg-[#f7f7f7]'}`}
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      >
        {isDark ? (
           <div className={`absolute inset-0 bg-gradient-to-br from-[#6B2D8C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        ) : (
           <div className="absolute inset-0 bg-[#f7f7f7] opacity-100 transition-opacity duration-500"></div>
        )}
        <span className={`relative z-10 w-full h-full flex flex-col items-center justify-center ${isLarge ? 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic tracking-widest' : 'text-[5px] lg:text-[7px] xl:text-[9px] font-sans font-bold uppercase'} ${isDark ? 'text-[#D4AF37]' : 'text-slate-500 group-hover:text-[#6B2D8C]'} transition-colors duration-300 leading-[1.2]`}>
          {isImage ? (
            <img src={children as string} alt="Partner Logo" className={`object-contain w-[85%] h-[85%] filter group-hover:scale-110 transition-transform duration-500`} />
          ) : (
            children
          )}
        </span>
      </div>
    </div>
  );
};

const SectionLabel = ({ title }: { title: string }) => (
  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-purple-100 shadow-sm relative z-20 mb-6 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
    <h3 className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-[#6B2D8C]">{title}</h3>
  </div>
);

// Dynamic Auto-Wrappable Honeycomb generator for ANY array size!
const renderHoneycomb = (items: string[], pattern: number[]) => {
  const rows: { items: string[]; forceShift: boolean }[] = [];
  let itemIdx = 0;
  let patternIdx = 0;
  while (itemIdx < items.length) {
    const rowSize = pattern[patternIdx % pattern.length];
    let take = rowSize;
    if (items.length - itemIdx < rowSize) {
       take = items.length - itemIdx;
    }
    
    // Safety lock: if a row matches the expected length of the row above it, it will geometrically overlap vertically.
    // We add a translate-x offset manually to force it to interlock like a true honeycomb.
    let forceShift = false;
    if (rows.length > 0 && take === rows[rows.length - 1].items.length) {
       forceShift = true;
    }

    rows.push({ items: items.slice(itemIdx, itemIdx + take), forceShift });
    itemIdx += take;
    patternIdx++;
  }
  
  return (
    <div className="flex flex-col items-center w-full">
      {rows.map((row, idx) => (
        <Reveal key={`row-${idx}`} delay={100 + (idx % 4) * 100} className="w-full flex justify-center">
          <div className={`flex justify-center items-center gap-[40px] lg:gap-[50px] xl:gap-[65px] ${idx > 0 ? '-mt-[34.5px] lg:-mt-[43px] xl:-mt-[56px]' : ''} ${row.forceShift ? 'translate-x-[60px] lg:translate-x-[75px] xl:translate-x-[97.5px]' : ''}`}>
            {row.items.map((p, itemIdx) => <HexagonCard key={`logo-${idx}-${itemIdx}`}>{p}</HexagonCard>)}
          </div>
        </Reveal>
      ))}
    </div>
  );
};

const Partners = () => {
  return (
    <section id="partners" className="py-24 md:py-32 bg-[#faf5ff] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[#6B2D8C]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1600px] mx-auto px-1 md:px-4 relative z-10 text-center">
        <Reveal>
          <p className="text-[#6B2D8C] font-bold tracking-[0.2em] uppercase mb-4">OUR NETWORK</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-[#11052C] lg:mb-12">
            Organisers & Partners with <br className="hidden md:block"/>
            <span className="text-[#D4AF37] italic">Business C-Nergy</span>
          </h2>
        </Reveal>

        {/* --- DESKTOP RADIAL LAYOUT (Visible >= lg) --- */}
        <div className="hidden lg:grid grid-cols-12 relative w-full items-start mt-20 pb-32">

          {/* LEFT CLUSTER: Co-Creating Partners (Infinitely expanding downwards) */}
          <div className="col-span-4 flex flex-col items-center relative z-10 w-full pt-16">
            <SectionLabel title="Co-Creating Partners" />
            
            {/* Limit maxRow=3 to prevent horizontal overlap into the center column! */}
            {renderHoneycomb(partnersLists.coCreating, [3, 2])}

          </div>

          {/* CENTER CLUSTER: Floating sticky center! */}
          <div className="col-span-4 flex justify-center relative z-20 w-full h-full pointer-events-none">
            {/* The sticky wrapper */}
            <div className="sticky top-[20vh] mt-16 xl:mt-24 flex flex-col items-center pointer-events-auto w-full">
              
              {/* Top Nodes spaced out horizontally and shifted LEFT as requested */}
              <div className="absolute top-0 translate-x-1/3 -ml-[170px] lg:-ml-[230px] xl:-ml-[300px] flex flex-col items-center">
                <SectionLabel title="A Project Of" />
                <Reveal delay={100}><HexagonCard >{logo}</HexagonCard></Reveal>
              </div>

              <div className="absolute top-0 left-1/5 translate-x-1/4 ml-[90px] lg:ml-[110px] xl:ml-[140px] flex flex-col items-center">
                <SectionLabel title="Organised By" />
                <Reveal delay={200}><HexagonCard >{ggsolution}</HexagonCard></Reveal>
              </div>

              {/* MAIN CENTRAL NODE pushed completely down and shifted LEFT as requested */}
              <div className="relative z-30 mt-40 lg:mt-48 xl:mt-56 translate-x-6">
                <Reveal delay={300} direction="up" className="drop-shadow-2xl">
                  <HexagonCard isLarge isDark>
                    <span className="text-[#D4AF37] block mb-2 font-serif">Business</span>
                    <span className="text-white block   px-8 font-serif">C-Nergy</span>
                  </HexagonCard>
                </Reveal>
              </div>

            </div>
          </div>

          {/* RIGHT CLUSTER: Strategic Partners */}
          <div className="col-span-4 flex flex-col items-center relative z-10 w-full pt-16">
            <SectionLabel title="Strategic Partners" />
            {renderHoneycomb(partnersLists.strategic, [2, 3])}

            {/* Moved Jointly Presented By from the Center column to the bottom of this Right column! */}
            <div className="mt-24 flex flex-col items-center w-full">
              <SectionLabel title="Jointly Presented By" />
              <Reveal delay={400} className="w-full">
                <div className="flex justify-center gap-[40px] lg:gap-[50px] xl:gap-[65px]">
                   <HexagonCard>{partnersLists.jointlyPresented[0]}</HexagonCard>
                   <HexagonCard>{partnersLists.jointlyPresented[1]}</HexagonCard>
                </div>
              </Reveal>
            </div>
          </div>

        </div>

        {/* --- MOBILE STACK LAYOUT (Visible < lg) --- */}
        <div className="lg:hidden flex flex-col items-center gap-16 mt-16 pb-12 w-full">
          
          <Reveal direction="up" delay={100} className="relative z-30 drop-shadow-2xl pt-2">
            <SectionLabel title="Main Project" />
            <HexagonCard isLarge isDark>
              <span className="text-[#D4AF37] block mb-2 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold">Business</span>
              <span className="text-white block leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">C-Nergy</span>
            </HexagonCard>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 justify-center w-full">
            <Reveal direction="up" delay={200} className="flex flex-col items-center">
              <SectionLabel title="A Project Of" />
              <HexagonCard isDark>{ggsolution}</HexagonCard>
            </Reveal>
            <Reveal direction="up" delay={300} className="flex flex-col items-center">
              <SectionLabel title="Organised By" />
              <HexagonCard isDark>{ggsolution}</HexagonCard>
            </Reveal>
          </div>

          <Reveal direction="up" delay={500} className="flex flex-col items-center w-full">
            <SectionLabel title="Strategic Partners" />
            {renderHoneycomb(partnersLists.strategic, [2, 3])}
          </Reveal>
          
          {/* Shifted this block under Strategic for mobile as well to match Desktop flow */}
          <Reveal direction="up" delay={400} className="flex flex-col items-center w-full">
            <SectionLabel title="Jointly Presented By" />
            <div className="flex justify-center items-center gap-[40px] w-full"><HexagonCard>{partnersLists.jointlyPresented[0]}</HexagonCard><HexagonCard>{partnersLists.jointlyPresented[1]}</HexagonCard></div>
          </Reveal>

          <Reveal direction="up" delay={600} className="flex flex-col items-center w-full">
            <SectionLabel title="Co-Creating Partners" />
            {renderHoneycomb(partnersLists.coCreating, [3, 2])}
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Partners;
