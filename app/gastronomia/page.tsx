'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RevealText } from '@/components/ui/RevealText';
import { VenueSection } from '@/components/pages/gastronomia/VenueSection';
import { CulinaryCard } from '@/components/pages/gastronomia/CulinaryCard';
import { useModal } from '@/lib/modal-context';

export default function GastronomiaPage() {
  const [loaded, setLoaded] = useState(false);
  const { openMenuModal, openDishDetailModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gastronomia/restaurant-main.jpg"
            alt="Dining"
            fill
            className={`object-cover transition-transform duration-[3s] ${
              loaded ? 'scale-100 opacity-60' : 'scale-110 opacity-0'
            }`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p
            className={`text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Culinaria
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            LA PALETA <br /> DE SABORES
          </h1>
          <button
            onClick={openMenuModal}
            className={`mt-8 border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white active:bg-neutral-100 hover:text-neutral-900 active:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-colors duration-300 ${
              loaded ? 'opacity-100 translate-y-0 delay-0' : 'opacity-0 translate-y-4 delay-700 transition-all duration-700'
            }`}
          >
            Reservar Mesa
          </button>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <RevealText>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-neutral-900 leading-tight">
              &ldquo;La cocina no es química. Es un arte. Requiere instinto y gusto, no medidas
              exactas.&rdquo;
            </h3>
          </RevealText>
        </div>
      </section>

      {/* La Naranjería */}
      <VenueSection
        name="La Naranjería"
        description="Un espacio inundado de luz natural, rodeado de cítricos. Desayunos artesanales y almuerzos mediterráneos en un ambiente de serenidad botánica."
        hours="Desayuno: 7:00 AM - 12:00 PM"
        type="light"
        image="/images/gastronomia/restaurant-ambiance.jpg"
        onOpenMenu={openMenuModal}
      />

      {/* El Negro */}
      <VenueSection
        name="El Negro"
        description="Cuando cae la noche, El Negro abre sus puertas. Un speakeasy de alta cocina donde la mixología se encuentra con sabores audaces bajo una atmósfera de terciopelo."
        hours="Cena: 7:00 PM - 1:00 AM"
        type="dark"
        reverse={true}
        image="/images/gastronomia/bar-area.jpg"
        onOpenMenu={openMenuModal}
      />

      {/* Especialidades Culinarias */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-6">
          <RevealText>
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4">
                Nuestras Creaciones
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-900">
                Especialidades Culinarias
              </h2>
            </div>
          </RevealText>

          {/* Platillos Principales */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Platillos Principales
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-1.jpg"
                  title="Creación Emblema"
                  category="Platillo Insignia"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Creación Emblema",
                    image: "/images/gastronomia/signature-dish-1.jpg",
                    category: "Platillo Insignia",
                    description: "Nuestro platillo insignia que combina técnicas francesas con ingredientes mexicanos de temporada. Una sinfonía de sabores que celebra lo mejor de dos tradiciones culinarias.",
                    price: "$65 USD",
                    prepTime: "35-40 min",
                    ingredients: [
                      "Foie gras artesanal",
                      "Trufa negra mexicana",
                      "Mole de temporada",
                      "Verduras orgánicas del huerto local"
                    ],
                    pairing: "Vino tinto Reserva Cabernet Sauvignon",
                    chefNote: "Este platillo representa nuestra filosofía: honrar las raíces mientras innovamos sin miedo."
                  })}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-2.jpg"
                  title="Inspiración Chef"
                  category="Especialidad del Chef"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Inspiración Chef",
                    image: "/images/gastronomia/signature-dish-2.jpg",
                    category: "Especialidad del Chef",
                    description: "La creación más personal del Chef. Un platillo que evoluciona con las estaciones y refleja su estado emocional en la cocina. Hoy, una celebración del contraste entre texturas.",
                    price: "$72 USD",
                    prepTime: "40-45 min",
                    ingredients: [
                      "Pez espada a la sal",
                      "Espuma de yema de huevo",
                      "Encurtidos de Oaxaca",
                      "Aceite infusionado en ajo negro"
                    ],
                    pairing: "Vino blanco Grüner Veltliner Austriaco",
                    chefNote: "Cada noche es una oportunidad de sorprender. Este es mi favorito."
                  })}
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/signature-dish-3.jpg"
                  title="Propuesta Premium"
                  category="Edición Limitada"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Propuesta Premium",
                    image: "/images/gastronomia/signature-dish-3.jpg",
                    category: "Edición Limitada",
                    description: "Solo disponible bajo pedido especial. Un platillo que experimenta con técnicas ahumadas y cocciones bajo temperatura controlada.",
                    price: "$85 USD",
                    prepTime: "50-60 min",
                    ingredients: [
                      "Costilla de res de 45 días de maduración",
                      "Humo de mezquite artesanal",
                      "Salsa de ciruela y ancho",
                      "Cebollas dulces caramelizadas"
                    ],
                    pairing: "Vino tinto Valpolicella Ripasso Italiano",
                    chefNote: "Reserva con 48 horas de anticipación. Vale cada minuto de espera."
                  })}
                />
              </RevealText>
              <RevealText delay={300}>
                <CulinaryCard
                  image="/images/gastronomia/chef-special.jpg"
                  title="Especial del Chef"
                  category="Selección Diaria"
                  onClick={() => openDishDetailModal({
                    title: "Especial del Chef",
                    image: "/images/gastronomia/chef-special.jpg",
                    category: "Selección Diaria",
                    description: "Cambia diariamente según los ingredientes más frescos disponibles. Nuestro Chef crea sobre la marcha, respondiendo a la inspiración del momento.",
                    price: "$45-$60 USD",
                    prepTime: "30-35 min",
                    ingredients: ["Ingredientes de la cosecha del día"],
                    pairing: "Consulte al sommelier para recomendación",
                    chefNote: "Llame con anticipación para saber qué estamos cocinando hoy."
                  })}
                />
              </RevealText>
              <RevealText delay={350}>
                <CulinaryCard
                  image="/images/gastronomia/chef-at-work.jpg"
                  title="Arte en Acción"
                  category="Pasión Culinaria"
                  onClick={() => openDishDetailModal({
                    title: "Arte en Acción",
                    image: "/images/gastronomia/chef-at-work.jpg",
                    category: "Pasión Culinaria",
                    description: "Nuestro Chef prepara este platillo frente a usted. Una experiencia multisensorial donde verá, huelerá y saborearáel proceso de creación en vivo.",
                    price: "$95 USD por persona",
                    prepTime: "45-60 min",
                    ingredients: ["Ingredientes selectos según creación del Chef"],
                    pairing: "Degustación de 3 vinos maridaje perfecto",
                    chefNote: "Máximo 4 personas por sesión. Una experiencia verdaderamente única."
                  })}
                />
              </RevealText>
            </div>
          </div>

          {/* Aperitivos y Entradas */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Aperitivos y Entradas
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/appetizer.jpg"
                  title="Tapas Gourmet"
                  category="Aperitivos"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Tapas Gourmet",
                    image: "/images/gastronomia/appetizer.jpg",
                    category: "Aperitivos",
                    description: "Selección de 6 tapas diseñadas para abrir el apetito y el paladar. Cada tapaes una expresión diferente de sabor, textura y temperatura.",
                    price: "$28 USD",
                    prepTime: "15-20 min",
                    ingredients: [
                      "Jamón ibérico de bellota",
                      "Quesos artesanales españoles",
                      "Croquetas caseras",
                      "Camarones al ajillo",
                      "Pan tostado con tomate",
                      "Aceitunas marinadas"
                    ],
                    pairing: "Vermouth español o Prosecco",
                    chefNote: "Perfectas para compartir. Ordene dos para un verdadero festín."
                  })}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/ingredients.jpg"
                  title="Ingredientes Premium"
                  category="Materia Prima"
                  onClick={() => openDishDetailModal({
                    title: "Ingredientes Premium",
                    image: "/images/gastronomia/ingredients.jpg",
                    category: "Materia Prima",
                    description: "Una tabla curada de nuestros ingredientes más selectos. Perfecta para conocer la calidad de las materias primas que usamos en cada platillo.",
                    price: "$42 USD",
                    prepTime: "10 min",
                    ingredients: [
                      "Jamón ibérico 36 meses",
                      "Queso de cabra Valenciano",
                      "Conservas de mariscos gallegos",
                      "Pimentón de la Vera",
                      "Aceite extra virgen Arbequina",
                      "Pan artesanal tostado"
                    ],
                    pairing: "Vino blanco Albariño",
                    chefNote: "Diseñado para apreciar la belleza de ingredientes sin complicaciones."
                  })}
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/plating-detail.jpg"
                  title="Arte de la Presentación"
                  category="Detalles Exquisitos"
                  onClick={() => openDishDetailModal({
                    title: "Arte de la Presentación",
                    image: "/images/gastronomia/plating-detail.jpg",
                    category: "Detalles Exquisitos",
                    description: "Una entrada que es arte visual. Cada elemento está colocado con precisión para crear una composición que es tan hermosa para los ojos como deliciosa para el paladar.",
                    price: "$38 USD",
                    prepTime: "20-25 min",
                    ingredients: [
                      "Camarón fresco de Veracruz",
                      "Verduras de color brillante",
                      "Microgreens decorativas",
                      "Glaseado de cítricos",
                      "Flores comestibles"
                    ],
                    pairing: "Sauvignon Blanc de Nueva Zelanda",
                    chefNote: "La plata es nuestra lienzo. Cada plato es una obra maestra única."
                  })}
                />
              </RevealText>
            </div>
          </div>

          {/* Postres */}
          <div className="mb-20">
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Postres y Dulces
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/dessert-1.jpg"
                  title="Tentación de Chocolate"
                  category="Postres Clásicos"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Tentación de Chocolate",
                    image: "/images/gastronomia/dessert-1.jpg",
                    category: "Postres Clásicos",
                    description: "Un postre clásico reinventado. Chocolate belga oscuro con cremosidad de ganache y contraste de frambuesa agria. Un equilibrio perfecto de indulgencia.",
                    price: "$16 USD",
                    prepTime: "10 min",
                    ingredients: [
                      "Chocolate belga 70% cacao",
                      "Ganache de crema de leche",
                      "Frambuesa fresca",
                      "Coulis de fruta roja",
                      "Helado de vainilla artesanal"
                    ],
                    pairing: "Café espresso o Tawny Port",
                    chefNote: "Para los amantes del chocolate verdadero. Sin excesos, solo perfección."
                  })}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/dessert-2.jpg"
                  title="Creación Artesanal"
                  category="Repostería Fina"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Creación Artesanal",
                    image: "/images/gastronomia/dessert-2.jpg",
                    category: "Repostería Fina",
                    description: "Nuestro pastelero crea este postre único, cambiando sabores y técnicas cada semana. Una exploración constante de texturas y sabores dulces.",
                    price: "$14 USD",
                    prepTime: "15 min",
                    ingredients: ["Ingredientes selectos según creación semanal del pastelero"],
                    pairing: "Moscato d'Asti o vino dulce de cosecha tardía",
                    chefNote: "Pregunte a su servidor cuál es la creación de esta semana. Siempre sorprende."
                  })}
                />
              </RevealText>
            </div>
          </div>

          {/* Bebidas y Vinos */}
          <div>
            <RevealText delay={100}>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                Bebidas y Selección de Vinos
              </h3>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <RevealText delay={150}>
                <CulinaryCard
                  image="/images/gastronomia/beverages.jpg"
                  title="Bebidas Exclusivas"
                  category="Coctelería"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Bebidas Exclusivas",
                    image: "/images/gastronomia/beverages.jpg",
                    category: "Coctelería",
                    description: "Cócteles creados por nuestro mixólogo maestro. Cada bebida es una obra de arte de sabores balanceados, colores vibrantes y presentación impeccable.",
                    price: "$14 USD",
                    prepTime: "8-10 min",
                    ingredients: ["Ingredientes seleccionados según cocktail"],
                    pairing: "Acompañante perfecto para nuestros platillos",
                    chefNote: "Pregunte por nuestro cocktail de la casa, cambia frecuentemente según inspiración."
                  })}
                />
              </RevealText>
              <RevealText delay={200}>
                <CulinaryCard
                  image="/images/gastronomia/cocktai.jpg"
                  title="Mixología Artesanal"
                  category="Cócteles Clásicos"
                  featured={true}
                  onClick={() => openDishDetailModal({
                    title: "Mixología Artesanal",
                    image: "/images/gastronomia/cocktai.jpg",
                    category: "Cócteles Clásicos",
                    description: "Los clásicos reinterpretados. Martini, Margarita, Old Fashioned... pero nunca igual dos veces. Nuestro bartender agrega su toque personal a cada bebida.",
                    price: "$13 USD",
                    prepTime: "8 min",
                    ingredients: ["Espíritus premium y licores artesanales"],
                    pairing: "Aperitivo o digestivo",
                    chefNote: "Díganos su sabor favorito y crearemos un cóctel personalizado para usted."
                  })}
                />
              </RevealText>
              <RevealText delay={250}>
                <CulinaryCard
                  image="/images/gastronomia/wine-selection.jpg"
                  title="Bodega Selecta"
                  category="Vinos Internacionales"
                  onClick={() => openDishDetailModal({
                    title: "Bodega Selecta",
                    image: "/images/gastronomia/wine-selection.jpg",
                    category: "Vinos Internacionales",
                    description: "Selección cuidadosa de vinos de todo el mundo. Desde pequeños productores boutique hasta viñedos reconocidos internacionalmente.",
                    price: "$30-$150 USD",
                    prepTime: "5 min",
                    ingredients: ["Vinos de Francia, Italia, España, Argentina, Chile, Nueva Zelanda"],
                    pairing: "Consulte a nuestro sommelier para recomendación",
                    chefNote: "Nuestro sommelier tiene pasión por encontrar el maridaje perfecto para su comida."
                  })}
                />
              </RevealText>
              <RevealText delay={300}>
                <CulinaryCard
                  image="/images/gastronomia/wine-cellar.jpg"
                  title="La Bodega"
                  category="Colección Única"
                  onClick={() => openDishDetailModal({
                    title: "La Bodega",
                    image: "/images/gastronomia/wine-cellar.jpg",
                    category: "Colección Única",
                    description: "Acceso a nuestra bodega privada de vinos raros y añejos. Botellas que cuentan historias de décadas, regiones y tradiciones vinícolas.",
                    price: "$200+ USD",
                    prepTime: "5 min",
                    ingredients: ["Vinos antiguos y colecciones privadas"],
                    pairing: "Una experiencia de cata completa disponible",
                    chefNote: "Por cita previa. Una verdadera inmersión en el arte del vino."
                  })}
                />
              </RevealText>
              <RevealText delay={350}>
                <CulinaryCard
                  image="/images/gastronomia/private-dining.jpg"
                  title="Experiencia Privada"
                  category="Reservas Especiales"
                  onClick={() => openDishDetailModal({
                    title: "Experiencia Privada",
                    image: "/images/gastronomia/private-dining.jpg",
                    category: "Reservas Especiales",
                    description: "Cena privada diseñada a medida para su grupo. Menú personalizado, maridaje elegido, y una experiencia gastronómica completamente personalizada.",
                    price: "$120-$200 USD por persona",
                    prepTime: "A conveniencia de ustedes",
                    ingredients: ["Seleccionados según preferencias del grupo"],
                    pairing: "Vinos elegidos para complementar el menú personalizado",
                    chefNote: "Mínimo 8 personas. El límite es su imaginación. Hagamos magia juntos."
                  })}
                />
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
