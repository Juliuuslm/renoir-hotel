'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Palette, Camera, Wine, Coffee, ArrowRight } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { EventCard } from '@/components/pages/experiencias/EventCard';
import { useModal } from '@/lib/modal-context';

export default function ExperienciasPage() {
  const [loaded, setLoaded] = useState(false);
  const { openWorkshopModal, openLocationDetailModal } = useModal();

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
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
                  <RevealText key={i} delay={i * 100}>
                    <button
                      onClick={() => {
                        if (i === 0) {
                          // Mercado de Antigüedades
                          openLocationDetailModal({
                            title: 'El Mercado de Antigüedades',
                            description: 'Un laberinto de tesoros ocultos en pleno centro histórico de la ciudad. Este mercado de fin de semana es un ritual obligatorio para coleccionistas, anticuarios y curiosos que buscan piezas únicas. Desde muebles de época hasta arte decorativo, cada puesto cuenta una historia diferente.',
                            image: '/images/experiencias/antiques-market.jpg',
                            address: 'Calle Claudio Bernardo 1, Centro Histórico, CDMX',
                            hours: 'Sábados 9:00 AM - 3:00 PM',
                            distance: '8 minutos en auto / 20 minutos en taxi',
                            contactInfo: 'Sr. Aurelio - Puesto 45 | Tel: +52 (55) 5510-8473',
                            howToGetThere: [
                              'Nuestro concierge puede coordinar transporte privado. Partida desde el hotel a las 8:45 AM',
                              'Conducir hacia el sur hasta la calle Claudio Bernardo',
                              'El estacionamiento oficial está disponible a una cuadra del mercado',
                              'Busque el puesto 45 donde Sr. Aurelio reserva piezas exclusivas para huéspedes del hotel'
                            ],
                            tips: [
                              'Lleve efectivo en pesos mexicanos - muchos vendedores no aceptan tarjetas',
                              'Llegue antes de las 11:00 AM para las mejores selecciones',
                              'Negocie precios de forma amable - es parte de la tradición del mercado',
                              'Sr. Aurelio tiene acceso a un área privada con piezas de coleccionista. Mencione que es huésped de Renoir',
                              'El mercado cierra al mediodía en días lluviosos'
                            ],
                            conciergeNote: 'Aurelio es un personaje pintoresco con 30 años en el mercado. Tiene una conexión especial con Renoir y suele guardar piezas exclusivas para nuestros huéspedes. Si busca algo específico (por ejemplo, arte deco de los 20s), avíseme con tiempo y él lo buscará para usted. También ofrece envío internacional.'
                          });
                        } else if (i === 1) {
                          // Librería Porrúa
                          openLocationDetailModal({
                            title: 'Librería Porrúa',
                            description: 'Una joya literaria en el corazón del caos capitalino. Fundada en 1928, esta librería es más que una tienda de libros - es un refugio de silencio y conocimiento. Con más de 100,000 títulos en español, es una peregrinación obligatoria para lectores, escritores y curiosos.',
                            image: '/images/experiencias/libreria-porrua.jpg',
                            address: 'Avenida Madero 4, Centro Histórico, CDMX',
                            hours: 'Lunes - Sábado 10:00 AM - 8:00 PM | Domingo 11:00 AM - 7:00 PM',
                            distance: '5 minutos en auto / 15 minutos caminando',
                            contactInfo: 'Tel: +52 (55) 5521-4670 | info@porrua.mx',
                            howToGetThere: [
                              'La librería está a solo 4 cuadras del hotel - es un paseo perfecto por el Centro',
                              'Salga por la puerta sur hacia Avenida Madero',
                              'Camine hacia el oriente (hacia el Zócalo)',
                              'La entrada principal está en el piso de planta baja - busque el letrero clásico de Porrúa',
                              'El café en el tercer piso es accesible solo a clientes de la librería'
                            ],
                            tips: [
                              'Visite el café en el tercer piso - sirven excelente café de especialidad y pan de pastelería mexicana',
                              'Los empleados son muy conocedores - no dude en pedir recomendaciones de lectura',
                              'La sección de literatura latinoamericana es una de las más completas de América',
                              'Lleve efectivo si compra libros antiguos o de coleccionista',
                              'Ideal para visitar por la mañana cuando está menos concurrido'
                            ],
                            conciergeNote: 'Porrúa es nuestro lugar favorito para enviar a huéspedes que buscan desconexión. El ambiente es contemplativo, los empleados son eruditos, y el café es sublime. Si busca un libro específico sobre arte, arquitectura mexicana o literatura latinoamericana, ellos pueden buscarlo en toda América. También organizan presentaciones de libros regularmente.'
                          });
                        } else {
                          // Jardín Botánico Secreto
                          openLocationDetailModal({
                            title: 'Jardín Botánico Secreto',
                            description: 'Un santuario botánico escondido del caos de la ciudad. Accessible solo para iniciados, este jardín privado es una experiencia de pura naturaleza. Con más de 3,000 especies de plantas, incluyendo orquídeas raras y suculentas endémicas de México, es un paraíso para botánicos y amantes de la naturaleza.',
                            image: '/images/experiencias/botanical-garden.jpg',
                            address: 'Calle Avenida Paseo de la Reforma 505 (Acceso Privado)',
                            hours: 'Martes - Domingo 10:00 AM - 5:00 PM | Cerrado lunes',
                            distance: '12 minutos en auto | Acceso solo con llave privada',
                            contactInfo: 'Contactar directamente con nuestro concierge para acceso',
                            howToGetThere: [
                              'Nuestro concierge proporciona una llave de acceso privado exclusiva para huéspedes',
                              'Transporte privado recomendado - el jardín está en una zona residencial tranquila',
                              'La entrada privada está oculta tras una puerta verde discreta',
                              'Se requiere mostrar la llave de acceso y identificación para entrar',
                              'Estacionamiento privado disponible dentro del jardín'
                            ],
                            tips: [
                              'Lleve una cámara - es uno de los espacios más fotogénicos de la ciudad',
                              'Visite al atardecer para ver la iluminación natural en toda su gloria',
                              'Use zapatos cómodos - el jardín es grande y hay mucho que explorar',
                              'El florista residente puede ayudar con identificación de plantas',
                              'Hay un área de picnic privada con vista al dosel de árboles'
                            ],
                            conciergeNote: 'Este es nuestro regalo secreto para huéspedes especiales. El jardín fue diseñado por un botánico alemán a principios del siglo XX y mantiene su carácter histórico. El florista residente, Maestro Rafael, es un experto en orquídeas mexicanas. Si tienen interés especial en horticultura, coordinaremos una charla privada con él. El jardín es perfecto para meditación, fotografía o un picnic tranquilo.'
                          });
                        }
                      }}
                      className="group w-full flex space-x-4 cursor-pointer tap-highlight hover:opacity-80 transition-opacity"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          // Trigger the same logic as onClick
                        }
                      }}
                    >
                      <div className="mt-1 text-yellow-600 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-xl mb-1 group-hover:text-yellow-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                      </div>
                    </button>
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
              <RevealText key={i} delay={i * 100}>
                <div
                  className="group p-8 md:p-12 border border-neutral-100 hover:shadow-lg hover:bg-neutral-50 transition-all duration-300 cursor-pointer flex flex-col"
                  role="button"
                  tabIndex={0}
                  onClick={() => openWorkshopModal({ title: ws.title, description: ws.desc })}
                >
                  <div className="text-neutral-900 mb-6 flex justify-center group-hover:text-yellow-600 transition-colors">
                    {ws.icon}
                  </div>
                  <h4 className="font-serif text-lg mb-2 flex-grow">{ws.title}</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">{ws.desc}</p>
                  <div className="flex items-center text-yellow-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Detalles <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
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
