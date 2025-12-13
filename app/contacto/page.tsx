'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ContactForm } from '@/components/pages/contacto/ContactForm';
import { PropertyCard } from '@/components/pages/contacto/PropertyCard';
import { ConciergeServiceCard } from '@/components/pages/contacto/ConciergeServiceCard';

export default function ContactoPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  const faqs = [
    { q: '¿Valet Parking?', a: 'Sí, disponible 24/7 en la entrada principal.' },
    { q: '¿Mascotas?', a: 'Somos Pet Friendly bajo petición previa (se aplican cargos).' },
    {
      q: '¿Aeropuerto?',
      a: 'Ofrecemos servicio de transporte privado en Cadillac Escalade.',
    },
  ];

  return (
    <div className="animate-fadeIn bg-neutral-50 min-h-screen">
      {/* Hero Contact Minimal */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 px-6 text-center">
        <RevealText>
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4 block">
            Conecte
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral-900 mb-8">ENCUÉNTRENOS</h1>
          <p className="text-neutral-500 max-w-xl mx-auto text-lg font-light">
            Estamos a su disposición para diseñar su estancia perfecta o responder cualquier
            inquietud.
          </p>
        </RevealText>
      </section>

      {/* Nuestras Propiedades */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-6">
          <RevealText>
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Ubicaciones
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">
                Nuestras Propiedades
              </h2>
            </div>
          </RevealText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <RevealText delay={100}>
              <PropertyCard
                image="/images/contact/mexico-city-property.jpg"
                name="México City"
                address="Calle de la Paz 45, Centro Histórico, 06000 Ciudad de México"
                phone="+52 55 1234 5678"
                hours="Abierto 24/7"
                description="Nuestra propiedad insignia en el corazón histórico de la Ciudad de México, donde la arquitectura colonial se encuentra con el lujo contemporáneo."
              />
            </RevealText>
            <RevealText delay={200}>
              <PropertyCard
                image="/images/contact/paris-property.jpg"
                name="París"
                address="Rue de la Paix 15, 75009 París, Francia"
                phone="+33 1 4242 4242"
                hours="Abierto 24/7"
                description="Nuestro boutique hotel en París combina la elegancia francesa con la filosofía Renoir de bienestar y diseño reflexivo."
              />
            </RevealText>
          </div>
        </div>
      </section>

      {/* Servicios Concierge */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-neutral-50">
        <div className="container mx-auto px-6">
          <RevealText>
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Asistencia Personalizada
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">
                Servicios Concierge
              </h2>
            </div>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <RevealText delay={100}>
              <ConciergeServiceCard
                image="/images/contact/concierge-service.jpg"
                title="Reservas & Experiencias"
                description="Diseñamos itinerarios personalizados, reservamos restaurantes exclusivos y coordinamos experiencias bespoke adaptadas a sus preferencias."
              />
            </RevealText>
            <RevealText delay={200}>
              <ConciergeServiceCard
                image="/images/contact/reception-desk.jpg"
                title="Asistencia 24/7"
                description="Nuestro equipo está disponible constantemente para asegurar que cada detalle de su estancia sea perfecto y sin inconvenientes."
              />
            </RevealText>
            <RevealText delay={300}>
              <ConciergeServiceCard
                image="/images/contact/phone-service.jpg"
                title="Coordinación VIP"
                description="Desde transporte privado hasta gestoría de negocios, gestionamos todos los aspectos logísticos de su viaje."
              />
            </RevealText>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48">
        <div className="bg-white shadow-xl flex flex-col lg:flex-row overflow-hidden">
          {/* Lado Izquierdo: Info + Mapa Visual */}
          <div className="lg:w-1/2 relative bg-neutral-900 text-white p-12 lg:p-20 flex flex-col justify-between">
            {/* Mapa visual de fondo (Abstracto) */}
            <div className="absolute inset-0 opacity-40 grayscale">
              <Image
                src="/images/contact/map-location.jpg"
                alt="Map Texture"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-4xl mb-12">Renoir Hotel</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <MapPin className="text-yellow-600 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
                      Dirección
                    </p>
                    <p className="font-serif text-xl leading-relaxed">
                      Calle de la Paz 45,
                      <br />
                      Centro Histórico, 06000
                      <br />
                      Ciudad de México
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <Phone className="text-yellow-600 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
                      Teléfono
                    </p>
                    <p className="font-serif text-xl">
                      <a href="tel:+525512345678" className="hover:text-yellow-600 transition-colors">
                        +52 55 1234 5678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <Mail className="text-yellow-600 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
                      Concierge
                    </p>
                    <p className="font-serif text-xl">
                      <a
                        href="mailto:concierge@renoirhotel.com"
                        className="hover:text-yellow-600 transition-colors"
                      >
                        concierge@renoirhotel.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex space-x-6">
              <a href="#" aria-label="Instagram">
                <Instagram className="hover:text-yellow-600 cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="hover:text-yellow-600 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-4xl text-neutral-900 mb-8">Envíenos un Mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="bg-neutral-100 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 border-t border-neutral-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h4 className="font-serif text-xl mb-3">{faq.q}</h4>
                <p className="text-neutral-500 font-light text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
