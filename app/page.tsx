'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Palette, Volume, Sparkles } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { GalleryCard } from '@/components/pages/home/GalleryCard';
import { useModal } from '@/lib/modal-context';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const { openBookingModal, openGalleryLightboxModal, openPillarDetailModal } = useModal();

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Galería de imágenes para sección Momentos
  const galleryMoments = [
    {
      image: '/images/hero/lobby.jpg',
      title: 'El Lobby',
      category: 'Espacios',
      tall: true,
    },
    {
      image: '/images/wellness/spa-entrance.jpg',
      title: 'Luz de Mañana',
      category: 'Atmósfera',
      tall: false,
    },
    {
      image: '/images/hero/garden.jpg',
      title: 'Terraza del Jardín',
      category: 'Exteriores',
      tall: false,
    },
    {
      image: '/images/wellness/relaxation-area.jpg',
      title: 'El Spa',
      category: 'Bienestar',
      tall: true,
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-neutral-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/lobby.jpg"
            alt="Hotel Renoir Lobby"
            fill
            className={`object-cover transition-transform duration-[3s] ease-out ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-neutral-200">
              Est. 1924 &mdash; Paris &middot; Mexico City
            </p>
          </div>
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-8 transition-all duration-1000 delay-500 transform ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            El Silencio del Lujo
          </h1>
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={openBookingModal}
              className="group relative bg-white text-neutral-900 px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-neutral-100 active:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 animate-ctaPulse overflow-hidden"
            >
              {/* Efecto de brillo */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />

              <span className="relative flex items-center justify-center gap-2">
                Reservar Estancia
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-neutral-50 text-neutral-900">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <RevealText>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-12">
                El arte no es algo que se mira,{' '}
                <br />
                <span className="text-neutral-400 italic">es algo que se vive.</span>
              </h2>
            </RevealText>
            <RevealText delay={200}>
              <div className="space-y-6 text-neutral-600 text-lg font-light leading-relaxed max-w-2xl">
                <p>
                  En Renoir, creemos que la hospitalidad es la forma más elevada de expresión
                  artística. Cada rincón ha sido curado no solo para ser visto, sino para ser
                  sentido.
                </p>
              </div>
            </RevealText>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <ParallaxImage
              src="/images/hero/entrance.jpg"
              alt="Interior detail"
              className="h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* La Esencia Section - Quiénes somos */}
      <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 text-neutral-900">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <RevealText>
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">La Esencia</h2>
            </RevealText>
          </div>

          {/* Grid 2 columnas: Historia + Filosofía */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-24">
            <RevealText delay={100}>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-3xl mb-6">Desde 1924</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-lg">
                  Fundado en París por el coleccionista Auguste Villiers, Renoir nació como un
                  refugio para artistas e intelectuales de la Belle Époque. En 1952, nuestra
                  segunda casa abrió en el corazón de Ciudad de México, fusionando la elegancia
                  francesa con la riqueza cultural mexicana.
                </p>
              </div>
            </RevealText>

            <RevealText delay={200}>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-3xl mb-6">Nuestra Filosofía</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-lg">
                  Creemos que el verdadero lujo reside en los detalles imperceptibles: la textura
                  de una sábana italiana, el silencio arquitectónico de nuestros espacios, el
                  aroma sutil de jazmín mexicano. Cada elemento es una pincelada en la obra maestra
                  de su estancia.
                </p>
              </div>
            </RevealText>
          </div>

          {/* Grid 3 pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <RevealText delay={300}>
              <button
                onClick={() => openPillarDetailModal({
                  pillar: 'arte',
                  title: 'Arte',
                  subtitle: 'Expresión Curada',
                  description: 'En Renoir, el arte no es una decoración, es una narrativa viva. Colaboramos con galerías locales emergentes para traer colecciones rotativas que cambien cada temporada. Cada pieza ha sido seleccionada para resonar con la filosofía de nuestro espacio: autenticidad, innovación y belleza intencional.',
                  details: [
                    {
                      title: 'Colecciones Rotativas',
                      description: 'Trabajamos con galerías emergentes de CDMX para traer nuevas perspectivas cada 3 meses. Las colecciones exploran desde pintura contemporánea hasta instalaciones multimedia.'
                    },
                    {
                      title: 'Artistas Residentes',
                      description: 'Ofrecemos espacios de residencia para artistas mexicanos en colaboración con instituciones como el MUAC. Nuestros huéspedes tienen acceso a charlas y privados con los creadores.'
                    }
                  ],
                  highlights: [
                    'Exposiciones trimestrales con artistas emergentes mexicanos',
                    'Catálogo de arte disponible para compra exclusiva',
                    'Eventos privados de inauguración para huéspedes',
                    'Colecciones en las suites que rotan con nuevas obras',
                    'Colaboraciones con coleccionistas privados y marchantes'
                  ]
                })}
                className="group text-center cursor-pointer tap-highlight transition-transform duration-300 hover:scale-105"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openPillarDetailModal({
                      pillar: 'arte',
                      title: 'Arte',
                      subtitle: 'Expresión Curada',
                      description: 'En Renoir, el arte no es una decoración, es una narrativa viva. Colaboramos con galerías locales emergentes para traer colecciones rotativas que cambien cada temporada. Cada pieza ha sido seleccionada para resonar con la filosofía de nuestro espacio: autenticidad, innovación y belleza intencional.',
                      details: [
                        {
                          title: 'Colecciones Rotativas',
                          description: 'Trabajamos con galerías emergentes de CDMX para traer nuevas perspectivas cada 3 meses. Las colecciones exploran desde pintura contemporánea hasta instalaciones multimedia.'
                        },
                        {
                          title: 'Artistas Residentes',
                          description: 'Ofrecemos espacios de residencia para artistas mexicanos en colaboración con instituciones como el MUAC. Nuestros huéspedes tienen acceso a charlas y privados con los creadores.'
                        }
                      ],
                      highlights: [
                        'Exposiciones trimestrales con artistas emergentes mexicanos',
                        'Catálogo de arte disponible para compra exclusiva',
                        'Eventos privados de inauguración para huéspedes',
                        'Colecciones en las suites que rotan con nuevas obras',
                        'Colaboraciones con coleccionistas privados y marchantes'
                      ]
                    });
                  }
                }}
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  <Palette size={48} className="text-neutral-900" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl mb-3">Arte</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Colecciones rotativas de artistas emergentes en colaboración con galerías locales
                </p>
              </button>
            </RevealText>

            <RevealText delay={400}>
              <button
                onClick={() => openPillarDetailModal({
                  pillar: 'silencio',
                  title: 'Silencio',
                  subtitle: 'Santuario Acústico',
                  description: 'El silencio verdadero es un lujo en la ciudad. Cada rincón de Renoir ha sido diseñado arquitectónicamente para ser un santuario de calma. Desde pisos de maderas especiales que absorben sonido hasta paredes con aislamiento acústico de vanguardia, el silencio no es accidental—es intencional.',
                  details: [
                    {
                      title: 'Arquitectura Acústica',
                      description: 'Nuestras suites utilizan sistemas de aislamiento acústico de clase A, capas de vidrio laminado y materiales de absorción seleccionados específicamente. El resultado: un ambiente donde el sonido externo disminuye a 30 decibeles.'
                    },
                    {
                      title: 'Espacios de Meditación',
                      description: 'Contamos con salas diseñadas para meditación, yoga y retiro personal. Cada espacio sigue principios de acústica sagrada inspirada en templos antiguos, con ratios de reflexión de sonido perfectamente calibrados.'
                    }
                  ],
                  highlights: [
                    'Cristales laminados de 8mm para máximo aislamiento',
                    'Sistemas de cancelación activa de ruido en áreas seleccionadas',
                    'Pisos flotantes que minimizan transmisión de vibración',
                    'Espacios de meditación con acústica natural optimizada',
                    'Iluminación sin zumbido (eliminación de luz de frecuencia 50/60Hz)',
                    'Protocolo de silencio en pasillos (señalización sutil sin alarmas audibles)'
                  ]
                })}
                className="group text-center cursor-pointer tap-highlight transition-transform duration-300 hover:scale-105"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openPillarDetailModal({
                      pillar: 'silencio',
                      title: 'Silencio',
                      subtitle: 'Santuario Acústico',
                      description: 'El silencio verdadero es un lujo en la ciudad. Cada rincón de Renoir ha sido diseñado arquitectónicamente para ser un santuario de calma. Desde pisos de maderas especiales que absorben sonido hasta paredes con aislamiento acústico de vanguardia, el silencio no es accidental—es intencional.',
                      details: [
                        {
                          title: 'Arquitectura Acústica',
                          description: 'Nuestras suites utilizan sistemas de aislamiento acústico de clase A, capas de vidrio laminado y materiales de absorción seleccionados específicamente. El resultado: un ambiente donde el sonido externo disminuye a 30 decibeles.'
                        },
                        {
                          title: 'Espacios de Meditación',
                          description: 'Contamos con salas diseñadas para meditación, yoga y retiro personal. Cada espacio sigue principios de acústica sagrada inspirada en templos antiguos, con ratios de reflexión de sonido perfectamente calibrados.'
                        }
                      ],
                      highlights: [
                        'Cristales laminados de 8mm para máximo aislamiento',
                        'Sistemas de cancelación activa de ruido en áreas seleccionadas',
                        'Pisos flotantes que minimizan transmisión de vibración',
                        'Espacios de meditación con acústica natural optimizada',
                        'Iluminación sin zumbido (eliminación de luz de frecuencia 50/60Hz)',
                        'Protocolo de silencio en pasillos (señalización sutil sin alarmas audibles)'
                      ]
                    });
                  }
                }}
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  <Volume size={48} className="text-neutral-900" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl mb-3">Silencio</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Arquitectura acústica diseñada para crear santuarios urbanos de calma
                </p>
              </button>
            </RevealText>

            <RevealText delay={500}>
              <button
                onClick={() => openPillarDetailModal({
                  pillar: 'detalle',
                  title: 'Detalle',
                  subtitle: 'Lujo Imperceptible',
                  description: 'El verdadero lujo reside en aquello que casi no se nota pero absolutamente se siente. Cada detalle de Renoir—desde la textura de nuestras sábanas italianas hasta la formula del perfume ambiental—ha sido seleccionado para una experiencia sensorial completa. El detalle es donde la excelencia se convierte en arte.',
                  details: [
                    {
                      title: 'Textiles Artesanales',
                      description: 'Nuestras sábanas son 100% lino belga Damasco de 400+ hilos, tejidas en talleres artesanales de Bélgica. Pillows rellenos de plumas de ganso de Baviera y almohadas de espuma de memoria con grafeno.'
                    },
                    {
                      title: 'Perfumería Bespoke',
                      description: 'Trabajamos con perfumistas artesanales de Grasse para crear fragancias únicas para Renoir. Cada aroma ha sido diseñado para evocar emociones específicas en diferentes espacios del hotel.'
                    }
                  ],
                  highlights: [
                    'Sábanas de lino belga Damasco 400+ hilos',
                    'Amenities de perfumistas artesanales de Grasse (Francia)',
                    'Toiletries de marca suiza Susanne Kaufmann',
                    'Agua destilada de manantial en cada suite',
                    'Productos de baño con ingredientes botánicos raros',
                    'Texturas curadas: telas, tapetes, cortinas seleccionadas por sommeliers de textura',
                    'Temperatura del agua por preferencia guardada en sistema de IA',
                    'Aromadifusores que cambian según hora del día'
                  ]
                })}
                className="group text-center cursor-pointer tap-highlight transition-transform duration-300 hover:scale-105"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openPillarDetailModal({
                      pillar: 'detalle',
                      title: 'Detalle',
                      subtitle: 'Lujo Imperceptible',
                      description: 'El verdadero lujo reside en aquello que casi no se nota pero absolutamente se siente. Cada detalle de Renoir—desde la textura de nuestras sábanas italianas hasta la formula del perfume ambiental—ha sido seleccionado para una experiencia sensorial completa. El detalle es donde la excelencia se convierte en arte.',
                      details: [
                        {
                          title: 'Textiles Artesanales',
                          description: 'Nuestras sábanas son 100% lino belga Damasco de 400+ hilos, tejidas en talleres artesanales de Bélgica. Pillows rellenos de plumas de ganso de Baviera y almohadas de espuma de memoria con grafeno.'
                        },
                        {
                          title: 'Perfumería Bespoke',
                          description: 'Trabajamos con perfumistas artesanales de Grasse para crear fragancias únicas para Renoir. Cada aroma ha sido diseñado para evocar emociones específicas en diferentes espacios del hotel.'
                        }
                      ],
                      highlights: [
                        'Sábanas de lino belga Damasco 400+ hilos',
                        'Amenities de perfumistas artesanales de Grasse (Francia)',
                        'Toiletries de marca suiza Susanne Kaufmann',
                        'Agua destilada de manantial en cada suite',
                        'Productos de baño con ingredientes botánicos raros',
                        'Texturas curadas: telas, tapetes, cortinas seleccionadas por sommeliers de textura',
                        'Temperatura del agua por preferencia guardada en sistema de IA',
                        'Aromadifusores que cambian según hora del día'
                      ]
                    });
                  }
                }}
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  <Sparkles size={48} className="text-neutral-900" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl mb-3">Detalle</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Amenidades exclusivas: sábanas de lino belga, amenities de perfumistas artesanales
                </p>
              </button>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Momentos Section - Galería */}
      <section className="bg-neutral-900 text-white py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <RevealText>
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Vida en Renoir
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Momentos</h2>
            </RevealText>
          </div>

          {/* Grid 2x2 asimétrico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {galleryMoments.map((moment, index) => (
              <RevealText key={index} delay={index * 100}>
                <GalleryCard
                  image={moment.image}
                  title={moment.title}
                  category={moment.category}
                  tall={moment.tall}
                  onClick={() => openGalleryLightboxModal({
                    images: galleryMoments,
                    initialIndex: index
                  })}
                />
              </RevealText>
            ))}
          </div>

          {/* CTA para ver más momentos */}
          <div className="flex justify-center mt-16">
            <RevealText delay={400}>
              <button
                onClick={openBookingModal}
                className="border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white active:bg-neutral-100 hover:text-neutral-900 active:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300"
              >
                Ver Más Momentos
              </button>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Santuarios Section - Preview Rediseñado */}
      <section className="bg-neutral-50 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 text-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Columna Izquierda - Texto */}
            <div className="md:col-span-5">
              <RevealText>
                <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                  Alojamiento
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12">
                  Nuestros{' '}
                  <span className="italic text-neutral-500">Santuarios</span>
                </h2>
              </RevealText>
              <RevealText delay={100}>
                <p className="text-neutral-600 text-lg font-light leading-relaxed mb-10">
                  24 estudios de calma meticulosamente diseñados. Cada suite es un lienzo en blanco
                  donde la luz, el espacio y el arte convergen para crear experiencias inolvidables.
                </p>
              </RevealText>
              <RevealText delay={200}>
                <Link
                  href="/suites"
                  className="inline-flex items-center text-xs tracking-[0.2em] uppercase border border-neutral-900 px-12 py-4 hover:bg-neutral-900 active:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300"
                >
                  Explorar Suites <ArrowRight size={14} className="ml-2" />
                </Link>
              </RevealText>
            </div>

            {/* Columna Derecha - Imágenes */}
            <div className="md:col-span-7 grid grid-cols-2 gap-6">
              <ParallaxImage
                src="/images/suites/atelier-suite-main.jpg"
                alt="The Atelier Suite"
                className="h-[300px]"
              />
              <ParallaxImage
                src="/images/suites/impressionist-suite-main.jpg"
                alt="Impressionist Suite"
                className="h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
