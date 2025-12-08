'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Waves, Heart, Activity } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { TreatmentItem } from '@/components/pages/wellness/TreatmentItem';

export default function WellnessPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  const treatments = [
    {
      title: 'Renoir Signature Massage',
      duration: '90 min',
      price: '$220',
      desc: 'Masaje de tejido profundo con aceites esenciales de lavanda y bergamota.',
    },
    {
      title: 'Ritual de Piedras Volcánicas',
      duration: '75 min',
      price: '$180',
      desc: 'Piedras de basalto calientes combinadas con aromaterapia mexicana.',
    },
    {
      title: 'Facial Oxigenante',
      duration: '60 min',
      price: '$150',
      desc: 'Infusión de oxígeno puro y sueros botánicos para rejuvenecer la piel.',
    },
    {
      title: 'Envoltura de Barro y Mezcal',
      duration: '90 min',
      price: '$240',
      desc: 'Exfoliación corporal inspirada en tradiciones locales de bienestar.',
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full bg-stone-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
            alt="Spa Atmosphere"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-80' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-100/30 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center text-stone-900 px-6">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Bienestar
          </p>
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-stone-800 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            LE SPA
          </h1>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-10 sm:py-12 md:py-20 lg:py-28 xl:py-32 bg-stone-50 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealText>
            <Waves size={32} className="mx-auto text-stone-400 mb-6" strokeWidth={1} />
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 text-stone-800 leading-relaxed">
              &ldquo;El silencio es el lujo más escaso de la vida moderna. Aquí, lo
              cultivamos.&rdquo;
            </h3>
            <p className="text-stone-500 font-light text-lg">
              Le Spa en Renoir no es solo un lugar para masajes; es un templo de restauración.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-10 sm:py-12 md:py-20 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <RevealText>
            <div className="flex justify-between items-end mb-16 border-b border-black pb-4">
              <h2 className="font-serif text-5xl text-neutral-900">Tratamientos</h2>
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Menú de Temporada
              </span>
            </div>
          </RevealText>
          <div className="flex flex-col">
            {treatments.map((item, idx) => (
              <RevealText key={idx} delay={idx * 100}>
                <TreatmentItem {...item} index={idx} />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-10 sm:py-12 md:py-20 lg:py-28 xl:py-32 bg-stone-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1 p-8 md:p-12 bg-white shadow-sm border border-stone-200">
            <RevealText>
              <Heart size={24} className="text-stone-400 mb-6" />
              <h4 className="font-serif text-2xl mb-4">Mindfulness</h4>
              <p className="text-sm text-stone-500 mb-6 font-light">
                Sesiones de meditación guiada al amanecer en nuestra terraza zen.
              </p>
              <span className="text-xs uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1">
                Horario: 7:00 AM
              </span>
            </RevealText>
          </div>
          <div className="md:col-span-1 p-8 md:p-12 bg-white shadow-sm border border-stone-200">
            <RevealText delay={100}>
              <Activity size={24} className="text-stone-400 mb-6" />
              <h4 className="font-serif text-2xl mb-4">Fitness Studio</h4>
              <p className="text-sm text-stone-500 mb-6 font-light">
                Equipamiento Technogym de última generación y entrenadores personales.
              </p>
              <span className="text-xs uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1">
                Horario: 24 Horas
              </span>
            </RevealText>
          </div>
          <div className="md:col-span-1 p-8 md:p-12 bg-stone-800 text-stone-100 flex flex-col justify-center text-center">
            <RevealText delay={200}>
              <h4 className="font-serif text-3xl mb-4">Membresía</h4>
              <p className="text-sm text-stone-400 mb-8 font-light">
                Acceso exclusivo a todas las instalaciones del spa.
              </p>
              <button className="bg-white text-stone-900 px-12 py-4 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors w-full">
                Solicitar Info
              </button>
            </RevealText>
          </div>
        </div>
      </section>
    </div>
  );
}
