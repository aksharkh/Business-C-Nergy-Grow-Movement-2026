import useScroll from './hooks/useScroll';
import BackgroundGradients from './components/BackgroundGradients';
import NavbarCustom from './components/NavbarCustom';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Impact from './sections/Impact';
import About from './sections/About';
import Mentors from './sections/Mentors';
import Register from './sections/Register';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const scrollY = useScroll();

  return (
    <div className="bg-[#f0f4f8] text-slate-900 font-sans selection:bg-[#0F52BA] selection:text-white overflow-x-hidden relative">
      {/* Global Background Gradient Mesh */}
      <BackgroundGradients />

      {/* Navigation */}
      <NavbarCustom scrollY={scrollY} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Impact />
        <About />
        <Mentors /> 
        <Register />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
