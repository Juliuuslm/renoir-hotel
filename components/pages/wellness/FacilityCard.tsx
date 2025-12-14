'use client';

import Image from 'next/image';

interface FacilityCardProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export const FacilityCard = ({ image, title, description, onClick }: FacilityCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left overflow-hidden bg-white border border-stone-200 hover:shadow-lg transition-all duration-300 cursor-pointer tap-highlight"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image Container */}
      <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-stone-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-stone-600 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </button>
  );
};
