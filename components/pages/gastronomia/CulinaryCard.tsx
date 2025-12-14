'use client';

import Image from 'next/image';

interface CulinaryCardProps {
  image: string;
  title: string;
  category?: string;
  featured?: boolean;
  onClick?: () => void;
}

export const CulinaryCard = ({ image, title, category, featured = false, onClick }: CulinaryCardProps) => {
  const height = featured ? 'h-[350px] md:h-[450px]' : 'h-[250px] md:h-[300px]';

  return (
    <div
      className={`group relative overflow-hidden bg-neutral-900 cursor-pointer tap-highlight ${height}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Imagen */}
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

      {/* Contenido de texto */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
          {category && (
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-600 block mb-2 font-semibold">
              {category}
            </span>
          )}
          <h3 className="font-serif text-2xl md:text-3xl text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};
