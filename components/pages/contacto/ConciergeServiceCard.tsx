'use client';

import Image from 'next/image';

interface ConciergeServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export const ConciergeServiceCard = ({
  image,
  title,
  description,
}: ConciergeServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-neutral-900 cursor-pointer tap-highlight h-[300px] md:h-[350px]">
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-active:scale-105 opacity-70 group-hover:opacity-50"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Text content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-300 font-light leading-relaxed max-h-16 overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
