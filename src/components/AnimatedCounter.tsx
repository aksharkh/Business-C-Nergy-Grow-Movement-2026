import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  delay = 0 
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string,
  delay?: number
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Small buffer or explicit delay
      const timeout = setTimeout(() => {
        let startTime: number;
        // Use dynamic duration based on value size for smoothness
        const duration = value < 100 ? 1.5 : value < 1000 ? 2 : 2.5;
        
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * value));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [value, isInView, delay]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default AnimatedCounter;
