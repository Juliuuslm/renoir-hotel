'use client';

import { RevealText } from '@/components/ui/RevealText';
import { ParallaxImage } from '@/components/ui/ParallaxImage';

interface RoomCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  reverse?: boolean;
  index: number;
  onOpenBooking: () => void;
}

export const RoomCard = ({
  title,
  description,
  features,
  price,
  image,
  reverse = false,
  index,
  onOpenBooking,
}: RoomCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } min-h-screen md:min-h-[80vh] bg-white`}
    >
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
        <ParallaxImage src={image} alt={title} className="h-full w-full" />
      </div>
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center bg-white">
        <RevealText delay={100}>
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4 block">
            Colección {2024 + index}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-neutral-900 mb-8 leading-tight">
            {title}
          </h2>
        </RevealText>
        <RevealText delay={200}>
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-10 max-w-md">
            {description}
          </p>
        </RevealText>
        <RevealText delay={300}>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-12 border-t border-neutral-100 pt-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center text-neutral-500 text-sm">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>
        </RevealText>
        <RevealText delay={400}>
          <div className="flex items-center justify-between border-t border-neutral-100 pt-8">
            <div>
              <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-1">
                Desde
              </span>
              <span className="font-serif text-2xl text-neutral-900">{price}</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-neutral-900 text-white px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg min-h-[44px]"
            >
              Reservar
            </button>
          </div>
        </RevealText>
      </div>
    </div>
  );
};
