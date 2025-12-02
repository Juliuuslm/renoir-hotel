'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { useModal } from '@/lib/modal-context';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const { openBookingModal } = useModal();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-neutral-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            alt="Hotel Renoir Lobby"
            fill
            className={`object-cover transition-transform duration-[3s] ease-out ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
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
            className={`font-serif text-6xl md:text-9xl tracking-tight mb-8 transition-all duration-1000 delay-500 transform ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            RENOIR
          </h1>
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={openBookingModal}
              className="border border-white/30 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Reservar Estancia
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 md:py-48 bg-neutral-50 text-neutral-900">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <RevealText>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-12">
                El arte no es algo que se mira,{' '}
                <br />
                <span className="text-neutral-400 italic">es algo que se vive.</span>
              </h2>
            </RevealText>
            <RevealText delay={200}>
              <div className="space-y-6 text-neutral-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
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
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop"
              alt="Interior detail"
              className="h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <RevealText>
            <h2 className="font-serif text-4xl mb-8">Nuestras Piezas Maestras</h2>
            <Link
              href="/suites"
              className="inline-flex items-center text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-neutral-500 transition-colors"
            >
              Explorar Habitaciones <ArrowRight size={14} className="ml-2" />
            </Link>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
