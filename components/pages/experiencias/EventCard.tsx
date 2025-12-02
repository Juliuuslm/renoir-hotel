'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  category: string;
  image: string;
}

export const EventCard = ({ day, month, title, category, image }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-neutral-900 h-96 w-full cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start text-white">
          <div className="flex flex-col items-center border border-white/20 p-2 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest">{month}</span>
            <span className="font-serif text-2xl font-bold">{day}</span>
          </div>
          <span className="text-xs uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div>
          <h3 className="font-serif text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-white/80 text-sm space-x-2">
            <span>Reservar lugar</span> <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};
