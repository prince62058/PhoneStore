import { useEffect } from 'react';
import { initScrollAnimations, initHoverAnimations, refreshScrollTrigger } from '@/lib/animations';

export const useGSAP = () => {
  useEffect(() => {
    // Initialize animations after component mount
    const timer = setTimeout(() => {
      initScrollAnimations();
      initHoverAnimations();
      refreshScrollTrigger();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};
