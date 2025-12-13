'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RevealText } from '@/components/ui/RevealText';
import { VenueSection } from '@/components/pages/gastronomia/VenueSection';
import { CulinaryCard } from '@/components/pages/gastronomia/CulinaryCard';
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
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gastronomia/restaurant-main.jpg"
            alt="Dining"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Culinaria
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            LA PALETA <br /> DE SABORES
          </h1>
          <button
            onClick={openMenuModal}
            className={`mt-8 border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white active:bg-neutral-100 hover:text-neutral-900 active:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-colors duration-300 ${
              loaded ? 'opacity-100 translate-y-0 delay-0' : 'opacity-0 translate-y-4 delay-700 transition-all duration-700'
            }`}
          >
            Reservar Mesa
          </button>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <RevealText>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-neutral-900 leading-tight">
              &ldquo;La cocina no es química. Es un arte. Requiere instinto y gusto, no medidas
              exactas.&rdquo;
            </h3>
          </RevealText>
        </div>
      </section>

      {/* La Naranjería */}
      <VenueSection
        name="La Naranjería"
        description="Un espacio inundado de luz natural, rodeado de cítricos. Desayunos artesanales y almuerzos mediterráneos en un ambiente de serenidad botánica."
        hours="Desayuno: 7:00 AM - 12:00 PM"
        type="light"
        image="/images/gastronomia/restaurant-ambiance.jpg"
        onOpenMenu={openMenuModal}
      />

      {/* El Negro */}
      <VenueSection
        name="El Negro"
        description="Cuando cae la noche, El Negro abre sus puertas. Un speakeasy de alta cocina donde la mixología se encuentra con sabores audaces bajo una atmósfera de terciopelo."
        hours="Cena: 7:00 PM - 1:00 AM"
        type="dark"
        reverse={true}
        image="/images/gastronomia/bar-area.jpg"
        onOpenMenu={openMenuModal}
      />

      {/* Especialidades Culinarias */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-6">
          <RevealText>
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Nuestras Creaciones
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">
                Especialidades Culinarias
              </h2>
            </div>
          </RevealText>

          {/* Platillos Principales */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Platillos Principales
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-1.jpg"
                  title="Creación Emblema"
                  category="Platillo Insignia"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-2.jpg"
                  title="Inspiración Chef"
                  category="Especialidad del Chef"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-3.jpg"
                  title="Propuesta Premium"
                  category="Edición Limitada"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={300}>
                <CulinaryCard
                  image="/images/gastronomia/chef-special.jpg"
                  title="Especial del Chef"
                  category="Selección Diaria"
                />
              </RevealText>
              <RevealText delay={350}>
                <CulinaryCard
                  image="/images/gastronomia/chef-at-work.jpg"
                  title="Arte en Acción"
                  category="Pasión Culinaria"
                />
              </RevealText>
            </div>
          </div>

          {/* Aperitivos y Entradas */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Aperitivos y Entradas
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/appetizer.jpg"
                  title="Tapas Gourmet"
                  category="Aperitivos"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/ingredients.jpg"
                  title="Ingredientes Premium"
                  category="Materia Prima"
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/plating-detail.jpg"
                  title="Arte de la Presentación"
                  category="Detalles Exquisitos"
                />
              </RevealText>
            </div>
          </div>

          {/* Postres */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Postres y Dulces
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/dessert-1.jpg"
                  title="Tentación de Chocolate"
                  category="Postres Clásicos"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/dessert-2.jpg"
                  title="Creación Artesanal"
                  category="Repostería Fina"
                  featured={true}
                />
              </RevealText>
            </div>
          </div>

          {/* Bebidas y Vinos */}
          <div>
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Bebidas y Selección de Vinos
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/beverages.jpg"
                  title="Bebidas Exclusivas"
                  category="Coctelería"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/cocktai.jpg"
                  title="Mixología Artesanal"
                  category="Cócteles Clásicos"
                  featured={true}
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/wine-selection.jpg"
                  title="Bodega Selecta"
                  category="Vinos Internacionales"
                />
              </RevealText>
              <RevealText delay={300}>
                <CulinaryCard
                  image="/images/gastronomia/wine-cellar.jpg"
                  title="La Bodega"
                  category="Colección Única"
                />
              </RevealText>
              <RevealText delay={350}>
                <CulinaryCard
                  image="/images/gastronomia/private-dining.jpg"
                  title="Experiencia Privada"
                  category="Reservas Especiales"
                />
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
