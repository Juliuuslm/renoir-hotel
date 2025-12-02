'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { RevealText } from '@/components/ui/RevealText';
import { RoomCard } from '@/components/pages/suites/RoomCard';
import { useModal } from '@/lib/modal-context';

export default function SuitesPage() {
  const [loaded, setLoaded] = useState(false);
  const { openBookingModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  const rooms = [
    {
      title: 'The Atelier',
      price: '$450 USD',
      description: 'Un espacio bañado en luz natural, diseñado para la creatividad y el descanso.',
      image:
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
      features: ['45m² de Espacio', 'Vista a la Ciudad', 'Baño de Mármol', 'Escritorio Ejecutivo'],
    },
    {
      title: 'Impressionist Suite',
      price: '$680 USD',
      description: 'Inspirada en los jardines de Giverny con terraza privada.',
      image:
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
      features: ['65m² + Terraza', 'Jardín Privado', 'Tina de Inmersión', 'Sala de Estar'],
    },
    {
      title: 'Renoir Penthouse',
      price: '$1,200 USD',
      description: 'La joya de la corona con vistas panorámicas.',
      image:
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop',
      features: ['120m² Panorámicos', 'Mayordomo 24/7', 'Cocina Completa', 'Terraza 360°'],
    },
  ];

  return (
    <div className="animate-fadeIn pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
            alt="Bed detail"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-50' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 mt-12">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Alojamiento
          </p>
          <h1
            className={`font-serif text-5xl md:text-8xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            SANTUARIOS
          </h1>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 bg-neutral-50 flex justify-center">
        <div className="max-w-3xl px-6 text-center">
          <RevealText>
            <h3 className="font-serif text-3xl mb-8 text-neutral-800 italic">
              &ldquo;El sueño es la obra de arte más privada.&rdquo;
            </h3>
            <p className="text-neutral-500 font-light text-lg leading-relaxed">
              Nuestras 24 suites han sido concebidas no como habitaciones de hotel, sino como
              estudios de calma. Hemos eliminado el ruido visual para que tus sentidos puedan
              descansar verdaderamente.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Room Cards */}
      <section className="flex flex-col">
        {rooms.map((room, idx) => (
          <RoomCard
            key={idx}
            {...room}
            reverse={idx % 2 !== 0}
            index={idx}
            onOpenBooking={openBookingModal}
          />
        ))}
      </section>
    </div>
  );
}
