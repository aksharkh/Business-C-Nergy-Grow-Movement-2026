import { useRef, useState, useEffect, ReactNode } from 'react';
import type { RevealProps } from '../types/index';

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }: RevealProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: 'translate-y-16',
    down: '-translate-y-16',
    left: '-translate-x-16',
    right: 'translate-x-16',
    zoom: 'scale-95',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible
          ? 'translate-y-0 translate-x-0 opacity-100 scale-100'
          : `${transforms[direction] || transforms.up} opacity-0`
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
