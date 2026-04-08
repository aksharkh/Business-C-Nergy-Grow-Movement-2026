import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollFeatures = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      
      // Show/hide scroll to top button
      if (totalScroll > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at the absolute top */}
      <div className="fixed top-0 left-0 w-full h-[6px] md:h-[8px] bg-transparent z-[100] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#6B2D8C] to-[#D4AF37] transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 bg-[#6B2D8C]/90 backdrop-blur-md text-white rounded-full 
          shadow-[0_0_20px_rgba(107,45,140,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]
          hover:bg-[#5A2475] transition-all duration-500 hover:-translate-y-1 group
          ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:text-[#D4AF37] transition-colors" />
      </button>
    </>
  );
};

export default ScrollFeatures;
