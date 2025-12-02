'use client';

import { Clock } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';

interface VenueSectionProps {
  name: string;
  description: string;
  hours: string;
  type: 'light' | 'dark';
  image: string;
  reverse?: boolean;
  onOpenMenu: () => void;
}

export const VenueSection = ({
  name,
  description,
  hours,
  type,
  image,
  reverse = false,
  onOpenMenu,
}: VenueSectionProps) => {
  return (
    <section
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} min-h-[80vh]`}
    >
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <ParallaxImage src={image} alt={name} className="h-full w-full absolute inset-0" />
      </div>
      <div
        className={`w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center ${
          type === 'dark' ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-900'
        }`}
      >
        <RevealText>
          <span
            className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block ${
              type === 'dark' ? 'text-yellow-600' : 'text-neutral-400'
            }`}
          >
            Restaurante & Bar
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8">{name}</h2>
        </RevealText>
        <RevealText delay={200}>
          <p
            className={`text-lg font-light leading-relaxed mb-10 ${
              type === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            {description}
          </p>
        </RevealText>
        <RevealText delay={300}>
          <div
            className={`border-t pt-8 ${type === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Clock
                size={16}
                className={type === 'dark' ? 'text-yellow-600' : 'text-neutral-400'}
              />
              <span className="text-sm tracking-widest uppercase">{hours}</span>
            </div>
            <button
              onClick={onOpenMenu}
              className={`mt-8 text-xs tracking-[0.2em] uppercase border-b pb-1 transition-all ${
                type === 'dark'
                  ? 'border-white hover:text-yellow-500 hover:border-yellow-500'
                  : 'border-black hover:text-neutral-500 hover:border-neutral-500'
              }`}
            >
              Ver Menú & Reservar
            </button>
          </div>
        </RevealText>
      </div>
    </section>
  );
};
