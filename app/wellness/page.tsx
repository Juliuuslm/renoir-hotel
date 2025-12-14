'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Waves, Heart, Activity } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { TreatmentItem } from '@/components/pages/wellness/TreatmentItem';
import { FacilityCard } from '@/components/pages/wellness/FacilityCard';
import { useModal } from '@/lib/modal-context';

// Galerías de imágenes por tratamiento
const treatmentGalleries = {
  massage: [
    '/images/wellness/massage-therapy.jpg',
    '/images/wellness/massage-room.jpg',
    '/images/wellness/essential-oils.jpg',
    '/images/wellness/spa-amenities.jpg',
  ],
  volcanic: [
    '/images/wellness/stones.jpg',
    '/images/wellness/steam-room.jpg',
    '/images/wellness/water-features.jpg',
    '/images/wellness/spa-plants.jpg',
  ],
  facial: [
    '/images/wellness/facial-treatment.jpg',
    '/images/wellness/facial-room.jpg',
  ],
  clay: [
    '/images/wellness/body-treatment.jpg',
    '/images/wellness/herbal-ritual.jpg',
    '/images/wellness/treatment-room-1.jpg',
    '/images/wellness/treatment-room-2.jpg',
  ],
};

export default function WellnessPage() {
  const [loaded, setLoaded] = useState(false);
  const { openTreatmentModal, openFacilityModal } = useModal();

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
      gallery: treatmentGalleries.massage,
    },
    {
      title: 'Ritual de Piedras Volcánicas',
      duration: '75 min',
      price: '$180',
      desc: 'Piedras de basalto calientes combinadas con aromaterapia mexicana.',
      gallery: treatmentGalleries.volcanic,
    },
    {
      title: 'Facial Oxigenante',
      duration: '60 min',
      price: '$150',
      desc: 'Infusión de oxígeno puro y sueros botánicos para rejuvenecer la piel.',
      gallery: treatmentGalleries.facial,
    },
    {
      title: 'Envoltura de Barro y Mezcal',
      duration: '90 min',
      price: '$240',
      desc: 'Exfoliación corporal inspirada en tradiciones locales de bienestar.',
      gallery: treatmentGalleries.clay,
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full bg-stone-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wellness/spa-entrance.jpg"
            alt="Spa Atmosphere"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-80' : 'scale-110 opacity-0'
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
            Bienestar
          </p>
          <h1
            className={`font-serif text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl text-white transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            LE SPA
          </h1>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-stone-50 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealText>
            <Waves size={32} className="mx-auto text-stone-400 mb-6" strokeWidth={1} />
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-stone-800 leading-relaxed">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <RevealText>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-0 mb-16 border-b border-black pb-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">Tratamientos</h2>
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Menú de Temporada
              </span>
            </div>
          </RevealText>
          <div className="flex flex-col">
            {treatments.map((item, idx) => (
              <RevealText key={idx} delay={idx * 100}>
                <TreatmentItem
                  {...item}
                  index={idx}
                  onOpenTreatmentModal={openTreatmentModal}
                />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Facilities Gallery */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-stone-50">
        <div className="container mx-auto px-6">
          <RevealText>
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase block mb-4">
                Espacios y Equipamiento
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-900">Nuestras Instalaciones</h2>
            </div>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <RevealText delay={100}>
              <FacilityCard
                image="/images/wellness/massage-room.jpg"
                title="Salas de Masaje"
                description="Espacios diseñados específicamente para relajación profunda con aromaterapia y música ambiental."
                onClick={() => openFacilityModal({
                  title: 'Salas de Masaje',
                  description: 'Nuestras salas de masaje son santuarios de tranquilidad, diseñadas acústicamente para maximizar la relajación. Cada espacio cuenta con sistemas de aromaterapia personalizada y música ambiental seleccionada por expertos en resonancia sonora.',
                  image: '/images/wellness/massage-room.jpg',
                  hours: 'Lunes - Domingo, 9:00 AM - 9:00 PM',
                  capacity: 'Máximo 2 personas por sesión',
                  temperature: '24°C (controlada por cliente)',
                  amenities: [
                    'Sistemas de aromaterapia personalizada',
                    'Música ambiental de relajación',
                    'Iluminación dinámica regulable',
                    'Masajes con aceites botánicos premium',
                    'Toallas climatizadas',
                    'Almohadas terapéuticas de memoria'
                  ],
                  additionalInfo: 'Se requiere reserva con mínimo 24 horas de anticipación. Disponibles sesiones de pareja con coordinación especial.'
                })}
              />
            </RevealText>
            <RevealText delay={200}>
              <FacilityCard
                image="/images/wellness/facial-room.jpg"
                title="Tratamientos Faciales"
                description="Cabinas privadas equipadas con tecnología de última generación para tratamientos especializados."
                onClick={() => openFacilityModal({
                  title: 'Tratamientos Faciales',
                  description: 'Nuestras cabinas de tratamiento facial cuentan con la tecnología más avanzada del mundo. Cada sesión es personalizada según el tipo de piel y objetivos específicos del cliente, con productos botánicos de lujo.',
                  image: '/images/wellness/facial-room.jpg',
                  hours: 'Lunes - Domingo, 9:00 AM - 8:00 PM',
                  capacity: '1 persona por sesión',
                  temperature: '22°C',
                  amenities: [
                    'Tecnología de oxigenación avanzada',
                    'Sueros y serums botánicos premium',
                    'Masaje facial drenante',
                    'Vaporizadores de ozono',
                    'Lámparas de LED terapéutica',
                    'Productos personalizados según tipo de piel'
                  ],
                  additionalInfo: 'Incluye consulta de 15 minutos previa para evaluar tipo de piel. Se recomiendan sesiones mensuales para resultados óptimos.'
                })}
              />
            </RevealText>
            <RevealText delay={300}>
              <FacilityCard
                image="/images/wellness/sauna.jpg"
                title="Sauna y Vapor"
                description="Espacios de termorregulación con vistas al jardín para la purificación total del cuerpo."
                onClick={() => openFacilityModal({
                  title: 'Sauna y Vapor',
                  description: 'Nuestros espacios de sauna y vapor son templos de purificación, diseñados con maderas exóticas y sistemas de humedad controlada. Cada sesión promueve desintoxicación profunda y renovación celular.',
                  image: '/images/wellness/sauna.jpg',
                  hours: 'Lunes - Domingo, 8:00 AM - 9:00 PM',
                  capacity: 'Máximo 8 personas por sesión',
                  temperature: 'Sauna: 85°C | Vapor: 45°C',
                  amenities: [
                    'Sauna finlandesa tradicional',
                    'Cabina de vapor con eucalipto',
                    'Control individual de temperatura',
                    'Duchas contrastantes (caliente/fría)',
                    'Toallas y batas de lino',
                    'Vistas al jardín botánico'
                  ],
                  additionalInfo: 'Se recomienda no exceder 20 minutos por sesión. Hidratación incluida con agua mineral.'
                })}
              />
            </RevealText>
            <RevealText delay={400}>
              <FacilityCard
                image="/images/wellness/yoga-space.jpg"
                title="Estudio de Yoga"
                description="Salón luminoso con pisos de madera natural, perfecto para sesiones matutinas y meditación."
                onClick={() => openFacilityModal({
                  title: 'Estudio de Yoga',
                  description: 'Nuestro estudio de yoga es un espacio sagrado diseñado con principios de feng shui y acústica natural. Las ventanas maximizan la luz natural, mientras el piso de madera crea una conexión directa con la tierra.',
                  image: '/images/wellness/yoga-space.jpg',
                  hours: 'Lunes - Domingo, 6:00 AM - 8:00 PM',
                  capacity: 'Máximo 12 personas',
                  amenities: [
                    'Pisos de madera de roble blanco',
                    'Iluminación natural controlada',
                    'Espejos de espacio completo',
                    'Sistema de sonido profesional',
                    'Yoga mats y accesorios premium',
                    'Vistas al jardín zen'
                  ],
                  additionalInfo: 'Clases diarias a las 7:00 AM y 6:00 PM. Instructores certificados disponibles para sesiones privadas.'
                })}
              />
            </RevealText>
            <RevealText delay={500}>
              <FacilityCard
                image="/images/wellness/pool.jpg"
                title="Piscina Termal"
                description="Agua climatizada a temperatura corporal con efecto flotante para máxima relajación."
                onClick={() => openFacilityModal({
                  title: 'Piscina Termal',
                  description: 'Nuestra piscina termal mantiene una temperatura constante de 37°C (temperatura corporal), creando la ilusión perfecta de flotación. El agua está enriquecida con sales minerales y cuenta con chorros de hidroterapia estratégicamente posicionados.',
                  image: '/images/wellness/pool.jpg',
                  hours: 'Lunes - Domingo, 7:00 AM - 9:00 PM',
                  capacity: 'Máximo 6 personas',
                  temperature: '37°C (temperatura corporal)',
                  amenities: [
                    'Agua termal con sales minerales',
                    'Chorros de hidroterapia',
                    'Iluminación submarina de cromoterapia',
                    'Área de descanso adyacente',
                    'Toallas climatizadas',
                    'Acceso privado'
                  ],
                  additionalInfo: 'Horarios privados disponibles. Evitar uso después de consumir alcohol. Ducha previa requerida.'
                })}
              />
            </RevealText>
            <RevealText delay={600}>
              <FacilityCard
                image="/images/wellness/relaxation-area.jpg"
                title="Área de Descanso"
                description="Lounge privado con luminoterapia para recuperación completa tras los tratamientos."
                onClick={() => openFacilityModal({
                  title: 'Área de Descanso',
                  description: 'Después de los tratamientos, nuestro área de descanso permite una recuperación completa. Cuenta con luminoterapia controlada, aromaterapia personalizada y silencio absoluto para integración profunda de los beneficios del tratamiento.',
                  image: '/images/wellness/relaxation-area.jpg',
                  hours: 'Lunes - Domingo, 9:00 AM - 9:00 PM',
                  capacity: 'Máximo 4 personas',
                  amenities: [
                    'Camas de descanso ergonómicas',
                    'Lámparas de luminoterapia (SAD)',
                    'Aromaterapia personalizada',
                    'Mantas de lino de lujo',
                    'Té y agua mineral',
                    'Aislamiento acústico completo'
                  ],
                  additionalInfo: 'Acceso incluido con cualquier tratamiento de spa. Duración máxima recomendada: 30-45 minutos.'
                })}
              />
            </RevealText>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-stone-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
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
              <a
                href="https://wa.me/525574533388?text=Hola%20aurora33,%20me%20gusta%20su%20dise%C3%B1o.%20Me%20podr%C3%ADan%20dar%20informes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-stone-900 px-12 py-4 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors text-center font-semibold"
              >
                Solicitar Info
              </a>
            </RevealText>
          </div>
        </div>
      </section>
    </div>
  );
}
