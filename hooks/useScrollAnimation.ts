'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Respetar preferencia de usuario para animaciones reducidas
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Solo fade in, sin movimiento, animación más corta
      console.log('[Accessibility] Respetando prefers-reduced-motion');
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
      return;
    }

    // Animación normal con movimiento
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.yOffset || 48,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [options.delay, options.duration, options.yOffset]);

  return ref;
};
