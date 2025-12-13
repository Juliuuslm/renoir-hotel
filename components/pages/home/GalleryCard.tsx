'use client';

import Image from 'next/image';

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  tall?: boolean;
}

export const GalleryCard = ({ image, title, category, tall = false }: GalleryCardProps) => {
  const heightClass = tall
    ? 'h-[400px] md:h-[600px]'
    : 'h-[300px] md:h-[400px]';

  return (
    <div
      className={`group relative overflow-hidden bg-neutral-800 cursor-pointer tap-highlight ${heightClass}`}
      role="button"
      tabIndex={0}
    >
      {/* Imagen con hover effects */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-active:scale-105 opacity-50 group-hover:opacity-30"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Contenido de texto */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 block mb-2">
            {category}
          </span>
          <h3 className="font-serif text-3xl text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};
