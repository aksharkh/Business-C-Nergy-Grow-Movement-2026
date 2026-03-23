import useScroll from './hooks/useScroll';
import BackgroundGradients from './components/BackgroundGradients';
import NavbarCustom from './components/NavbarCustom';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Impact from './sections/Impact';
import About from './sections/About';
import Events from './sections/Events';
import Mentors from './sections/Mentors';
import FAQ from './sections/FAQ';
import Register from './sections/Register';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
// import ComingSoon from './sections/ComingSoon';
import './App.css';

function App() {
  const scrollY = useScroll();

  return (
    <>
      {/* <ComingSoon /> */}

      <div className="bg-[#f0f4f8] text-slate-900 font-sans selection:bg-[#6B2D8C] selection:text-white overflow-x-hidden relative">
        <BackgroundGradients />

        <NavbarCustom scrollY={scrollY} />

        <main className="relative z-10">
          <Hero />
          <Marquee />
          <Impact />
          <About />
          <Events />
          <Mentors />
          <FAQ />
          <Register />
          <Partners />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
