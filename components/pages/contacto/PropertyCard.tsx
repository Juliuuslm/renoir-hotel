'use client';

import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
}

export const PropertyCard = ({
  image,
  name,
  address,
  phone,
  hours,
  description,
}: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <h3 className="font-serif text-3xl text-neutral-900 mb-2">{name}</h3>
        <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Info Grid */}
        <div className="space-y-5 border-t border-neutral-200 pt-8">
          <div className="flex items-start space-x-4">
            <MapPin className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                Dirección
              </p>
              <p className="text-neutral-700 font-light">{address}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                Teléfono
              </p>
              <a
                href={`tel:${phone}`}
                className="text-neutral-700 font-light hover:text-yellow-600 transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                Horario
              </p>
              <p className="text-neutral-700 font-light">{hours}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full mt-8 bg-neutral-900 text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg">
          Más Información
        </button>
      </div>
    </div>
  );
};
