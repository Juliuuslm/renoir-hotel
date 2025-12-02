'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RevealText } from '@/components/ui/RevealText';
import { VenueSection } from '@/components/pages/gastronomia/VenueSection';
import { useModal } from '@/lib/modal-context';

export default function GastronomiaPage() {
  const [loaded, setLoaded] = useState(false);
  const { openMenuModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
            alt="Dining"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-6 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Culinaria
          </p>
          <h1
            className={`font-serif text-6xl md:text-8xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            LA PALETA <br /> DE SABORES
          </h1>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <RevealText>
            <h3 className="font-serif text-3xl md:text-5xl mb-8 text-neutral-900 leading-tight">
              &ldquo;La cocina no es química. Es un arte. Requiere instinto y gusto, no medidas
              exactas.&rdquo;
            </h3>
          </RevealText>
        </div>
      </section>

      {/* L'Orangerie */}
      <VenueSection
        name="L'Orangerie"
        description="Un espacio inundado de luz natural, rodeado de cítricos. Desayunos artesanales y almuerzos mediterráneos en un ambiente de serenidad botánica."
        hours="Desayuno: 7:00 AM - 12:00 PM"
        type="light"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
        onOpenMenu={openMenuModal}
      />

      {/* Le Noir */}
      <VenueSection
        name="Le Noir"
        description="Cuando cae la noche, Le Noir abre sus puertas. Un speakeasy de alta cocina donde la mixología se encuentra con sabores audaces bajo una atmósfera de terciopelo."
        hours="Cena: 7:00 PM - 1:00 AM"
        type="dark"
        reverse={true}
        image="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop"
        onOpenMenu={openMenuModal}
      />
    </div>
  );
}
