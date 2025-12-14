'use client';

import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, Clock, DollarSign, Wine, ChefHat } from 'lucide-react';

export const DishDetailModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'dish-detail' || !modalData) return null;

  const {
    title,
    image,
    category,
    description = 'Platillo exquisitamente preparado con los mejores ingredientes de temporada.',
    price = '$45 USD',
    prepTime = '25-30 min',
    ingredients = [
      'Ingredientes frescos de mercado',
      'Especias seleccionadas',
      'Aceite de oliva extra virgen'
    ],
    pairing = 'Vino tinto de la casa',
    chefNote = 'Recomendación especial del Chef'
  } = modalData;

  return (
    <div
      className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        data-lenis-prevent
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full bg-neutral-900">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-600 block mb-3 font-semibold">
              {category}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
          </div>

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-12 md:py-12">
          {/* Description */}
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
            {description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 p-6 bg-neutral-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <DollarSign className="text-yellow-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Precio</p>
                <p className="font-serif text-xl text-neutral-900">{price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-neutral-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Tiempo</p>
                <p className="font-serif text-xl text-neutral-900">{prepTime}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Wine className="text-yellow-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Maridaje</p>
                <p className="font-serif text-xl text-neutral-900">{pairing}</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-10">
            <h3 className="font-serif text-2xl text-neutral-900 mb-4 flex items-center">
              <ChefHat size={24} className="mr-3 text-neutral-600" />
              Ingredientes Principales
            </h3>
            <ul className="space-y-2">
              {ingredients.map((ingredient: string, idx: number) => (
                <li key={idx} className="flex items-center text-neutral-600">
                  <span className="text-yellow-600 mr-3">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Chef's Note */}
          {chefNote && (
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-10">
              <p className="text-xs uppercase tracking-widest text-yellow-800 mb-2 font-semibold">
                Nota del Chef
              </p>
              <p className="text-neutral-700 font-light italic">{chefNote}</p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => {
              openBookingModal();
              closeModal();
            }}
            className="w-full bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </div>
  );
};
