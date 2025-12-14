import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl mb-8">RENOIR</h2>
            <p className="text-neutral-400 max-w-sm font-light">
              Un santuario de calma y sofisticación donde el diseño se encuentra con la
              hospitalidad de lujo.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-6">
              Explorar
            </h3>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li>
                <Link href="/suites" className="hover:text-white transition-colors">
                  Suites
                </Link>
              </li>
              <li>
                <Link href="/gastronomia" className="hover:text-white transition-colors">
                  Gastronomía
                </Link>
              </li>
              <li>
                <Link href="/wellness" className="hover:text-white transition-colors">
                  Wellness
                </Link>
              </li>
              <li>
                <Link href="/experiencias" className="hover:text-white transition-colors">
                  Experiencias
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-6">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li>Calle de la Paz 45, CDMX</li>
              <li>
                <a href="mailto:contacto@aurora33.org" className="hover:text-white transition-colors">
                  contacto@aurora33.org
                </a>
              </li>
              <li>
                <a href="tel:+525574533388" className="hover:text-white transition-colors">
                  +52 55 7453 3388
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 tracking-wider uppercase">
          <p>&copy; 2025 Renoir Hotel. Todos los derechos reservados.</p>
          <p>
            Built with love and AI by{' '}
            <a
              href="https://wa.me/525574533388?text=Hola%20aurora33,%20me%20gusta%20su%20dise%C3%B1o.%20Me%20podr%C3%ADan%20dar%20informes."
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Aurora33
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
