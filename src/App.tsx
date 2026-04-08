import useScroll from './hooks/useScroll';
import Preloader from './components/Preloader';
import BackgroundGradients from './components/BackgroundGradients';
import NavbarCustom from './components/NavbarCustom';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Impact from './sections/Impact';
import About from './sections/About';
import Events from './sections/Events';
import Mentors from './sections/Mentors';
import Gallery from './sections/Gallery';
// import FAQ from './sections/FAQ';
import Register from './sections/Register';
import VideoShowcase from './sections/VideoShowcase';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
import ScrollFeatures from './components/ScrollFeatures';
// import ComingSoon from './sections/ComingSoon';

import { Analytics } from "@vercel/analytics/react"
import './App.css';

function App() {
  const scrollY = useScroll();

  return (
    <>
      <Analytics />
      <Preloader />
      {/* <ComingSoon /> */}

      <div className="bg-[#f0f4f8] text-slate-900 font-sans selection:bg-[#6B2D8C] selection:text-white overflow-x-hidden relative">
        <ScrollFeatures />
        <BackgroundGradients />

        <NavbarCustom scrollY={scrollY} />

        <main className="relative z-10">
          <Hero />
          <Marquee />
          <Impact />
          <About />
          <Events />
          <Mentors />
          <Gallery />
          {/* <FAQ /> */}
          <Register />
          <VideoShowcase />
          <Partners />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
