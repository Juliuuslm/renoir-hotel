'use client';

import { useEffect, useState } from 'react';

export const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('renoir-visited');

    if (!hasVisited) {
      setIsVisible(true);

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const displayDuration = prefersReducedMotion ? 1500 : 3500;
      const exitDuration = prefersReducedMotion ? 400 : 800;

      // Auto-close timer
      const timer = setTimeout(() => {
        setIsAnimatingOut(true);

        // Wait for exit animation, then mark as visited
        setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem('renoir-visited', 'true');
        }, exitDuration);
      }, displayDuration);

      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll while visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-neutral-900 flex items-center justify-center ${
        isAnimatingOut ? 'animate-splashFadeOut' : 'animate-splashFadeIn'
      }`}
    >
      <div className="text-center px-6">
        {/* RENOIR Text */}
        <h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.3em] mb-6 animate-splashTextReveal"
          style={{ animationDelay: '300ms' }}
        >
          RENOIR
        </h1>

        {/* Tagline */}
        <p
          className="text-xs md:text-sm text-neutral-300 uppercase tracking-[0.3em] animate-splashTextReveal"
          style={{ animationDelay: '600ms' }}
        >
          Est. 1924 &mdash; Paris &middot; Mexico City
        </p>
      </div>
    </div>
  );
};
