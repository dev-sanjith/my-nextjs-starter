// components/FeaturedGames.js
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const FeaturedGamesDesktop = dynamic(() => import('./FeaturedGamesDesktop'), { ssr: false });
const FeaturedGamesMobile = dynamic(() => import('./FeaturedGamesMobile'), { ssr: false });

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

export default function FeaturedGames() {
  const isMobile = useIsMobile();
  return isMobile ? <FeaturedGamesMobile /> : <FeaturedGamesDesktop />;
}
