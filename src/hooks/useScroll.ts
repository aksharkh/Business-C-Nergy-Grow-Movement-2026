import { useEffect, useState } from "react";


export default function useScroll(): number {

    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handler = () => setScrollY(window.scrollY);
        handler();
        window.addEventListener('scroll', handler, { passive: true});
        return () => window.removeEventListener('scroll', handler);
    },[]);

    return scrollY;
}