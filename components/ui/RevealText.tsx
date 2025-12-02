'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const RevealText = ({ children, delay = 0, className = '' }: RevealTextProps) => {
  const ref = useScrollAnimation({
    delay: delay / 1000, // Convert ms to seconds
    yOffset: 48,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
