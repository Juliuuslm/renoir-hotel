'use client';

import { ArrowRight } from 'lucide-react';

interface TreatmentItemProps {
  title: string;
  duration: string;
  price: string;
  desc: string;
  index: number;
  gallery?: string[];
  onOpenTreatmentModal?: (data: any) => void;
}

export const TreatmentItem = ({ title, duration, price, desc, index, gallery = [], onOpenTreatmentModal }: TreatmentItemProps) => {
  const handleViewDetails = () => {
    if (onOpenTreatmentModal) {
      onOpenTreatmentModal({
        title,
        duration,
        price,
        desc,
        gallery,
      });
    }
  };
  return (
    <div className="group border-b border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-6 md:px-8 md:py-8">
        <div className="mb-6 md:mb-0 max-w-xl w-full">
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2 block">
            Ritual 0{index + 1}
          </span>
          <h4 className="font-serif text-2xl text-neutral-800 mb-2 group-hover:pl-4 transition-all duration-300">
            {title}
          </h4>
          <p className="text-sm text-neutral-500 font-light">{desc}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 text-sm font-medium text-neutral-600 w-full md:w-auto gap-4 md:gap-0">
          <div className="flex items-center space-x-4 md:space-x-0">
            <span>{duration}</span>
            <span className="hidden md:block w-px h-4 bg-neutral-300"></span>
            <span className="md:hidden text-neutral-400">•</span>
          </div>
          <span>{price}</span>
          <button
            onClick={handleViewDetails}
            className="bg-transparent border border-neutral-300 rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-neutral-900 active:bg-neutral-800 hover:border-neutral-900 hover:text-white active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all self-start md:self-auto"
            aria-label="Ver detalles del tratamiento"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
