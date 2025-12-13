'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Palette, Camera, Wine, Coffee } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { EventCard } from '@/components/pages/experiencias/EventCard';

export default function ExperienciasPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  const events = [
    {
      month: 'OCT',
      day: '14',
      title: 'Jazz & Vinilos',
      category: 'Música',
      image: '/images/experiencias/music-evening.jpg',
    },
    {
      month: 'OCT',
      day: '18',
      title: 'Vernissage: Luz',
      category: 'Arte',
      image: '/images/experiencias/art-exhibition.JPG',
    },
    {
      month: 'OCT',
      day: '22',
      title: 'Cata de Agaves',
      category: 'Gastronomía',
      image: '/images/experiencias/wine-tasting.jpg',
    },
  ];

  const picks = [
    {
      title: 'El Mercado de Antigüedades',
      desc: 'Sábados por la mañana. Pregunte por Sr. Aurelio en el puesto 45.',
    },
    {
      title: 'Librería Porrúa',
      desc: 'Un rincón de silencio en el caos del centro. Café excelente en el tercer piso.',
    },
    {
      title: 'Jardín Botánico Secreto',
      desc: 'Acceso exclusivo para huéspedes de Renoir mediante llave privada.',
    },
  ];

  const workshops = [
    { icon: <Palette />, title: 'Pintura al Óleo', desc: 'Clases en la terraza' },
    { icon: <Camera />, title: 'Fotografía Urbana', desc: 'Tour al amanecer' },
    { icon: <Wine />, title: 'Mixología', desc: 'Masterclass de Gin' },
    { icon: <Coffee />, title: 'Barista Skills', desc: 'Arte latte y tostado' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:h-[70vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/experiencias/art-workshop.jpg"
            alt="Art Gallery"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Lifestyle
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            MOMENTOS
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealText>
            <Compass size={32} className="mx-auto text-neutral-400 mb-6" strokeWidth={1} />
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-neutral-900">
              &ldquo;No somos solo un hotel, somos curadores de cultura.&rdquo;
            </h3>
            <p className="text-neutral-500 font-light text-lg">
              Desde exposiciones de arte privadas hasta rutas gastronómicas secretas. Nuestro
              equipo de conserjería ha diseñado una agenda para conectar a nuestros huéspedes con
              el alma vibrante de la ciudad.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Agenda Cultural */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <RevealText>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">Agenda Cultural</h2>
            </RevealText>
            <RevealText delay={200}>
              <a
                href="#"
                className="text-xs uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 transition-colors"
              >
                Ver Calendario Completo
              </a>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <RevealText key={idx} delay={idx * 150}>
                <EventCard {...event} />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Picks */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealText>
                <span className="text-xs font-bold tracking-[0.2em] text-yellow-600 uppercase mb-4 block">
                  Guía Local
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Gemas Ocultas</h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-12">
                  Olvídese de las trampas para turistas. Esta es la ciudad que amamos, la ciudad
                  que vivimos.
                </p>
              </RevealText>
              <div className="space-y-12">
                {picks.map((item, i) => (
                  <RevealText key={i} delay={i * 100} className="flex space-x-4">
                    <div className="mt-1 text-yellow-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </RevealText>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 w-2/3 h-2/3 z-10">
                <ParallaxImage
                  src="/images/experiencias/garden-tour.jpg"
                  alt="Local spot 1"
                  className="w-full h-full shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-20 transform translate-x-8 -translate-y-8">
                <ParallaxImage
                  src="/images/experiencias/cooking-class.jpg"
                  alt="Local spot 2"
                  className="w-full h-full shadow-2xl border-4 border-neutral-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talleres Creativos */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-6 text-center">
          <RevealText>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12">Talleres Creativos</h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-8">
            {workshops.map((ws, i) => (
              <RevealText
                key={i}
                delay={i * 100}
                className="p-8 md:p-12 border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-neutral-900 mb-6 flex justify-center">{ws.icon}</div>
                <h4 className="font-serif text-lg mb-2">{ws.title}</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-400">{ws.desc}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <RevealText>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Su Historia Comienza Aquí</h2>
            <p className="text-neutral-400 text-lg mb-12">
              Descubra el arte de vivir en Hotel Renoir. Una experiencia inmersiva en el corazón
              de la ciudad.
            </p>
            <button className="bg-white text-neutral-900 px-12 py-5 text-sm tracking-[0.2em] uppercase hover:bg-yellow-500 hover:text-white transition-all duration-300">
              Reservar Estancia Completa
            </button>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
