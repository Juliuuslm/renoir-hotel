'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useSmoothScroll = () => {
  useEffect(() => {
    // Deshabilitar Lenis en mobile para mejor performance
    // Solo activar en desktop (>= 768px)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      console.log('[Performance] Lenis smooth scroll deshabilitado en mobile');
      return; // No inicializar Lenis en mobile
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Guardar la instancia de Lenis en window para acceder desde otros hooks
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integración con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      (window as any).lenis = null;
    };
  }, []);
};
