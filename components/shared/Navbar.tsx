'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '@/lib/modal-context';

export const Navbar = () => {
  const pathname = usePathname();
  const { openBookingModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/suites', label: 'Suites' },
    { href: '/gastronomia', label: 'Gastronomía' },
    { href: '/wellness', label: 'Wellness' },
    { href: '/experiencias', label: 'Experiencias' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isHome = pathname === '/';

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md py-4 text-neutral-900 border-b border-neutral-100 shadow-sm'
            : 'bg-white/5 backdrop-blur-md py-8 text-white border-b border-white/10'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-bold z-50 relative hover:opacity-70 transition-opacity"
            onClick={handleNavClick}
          >
            RENOIR
          </Link>

          <div className="hidden md:flex space-x-8 lg:space-x-12 text-xs tracking-[0.15em] uppercase font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:opacity-60 active:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-opacity relative group py-3 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={openBookingModal}
              className="hidden md:block text-xs uppercase tracking-widest border border-current px-4 md:px-6 py-3 lg:px-8 lg:py-4 hover:bg-neutral-900 active:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-colors min-h-[44px]"
            >
              Reservar
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-transform duration-300"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-neutral-900 z-40 transform transition-all duration-400 ease-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center text-center text-white transform transition-transform duration-400 ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-6 text-center text-white">
          <Link
            href="/"
            className="font-serif text-3xl sm:text-4xl hover:text-neutral-400 active:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-600 transition-all duration-500 py-2 opacity-0"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: isMenuOpen ? '100ms' : '0ms',
            }}
            onClick={handleNavClick}
          >
            Inicio
          </Link>
          {navLinks.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-3xl sm:text-4xl hover:text-neutral-400 active:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-600 transition-all duration-500 py-2 opacity-0"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: isMenuOpen ? `${(idx + 2) * 100}ms` : '0ms',
              }}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openBookingModal();
            }}
            className="mt-8 border border-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-white active:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-500 min-h-[44px] opacity-0"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: isMenuOpen ? `${(navLinks.length + 2) * 100}ms` : '0ms',
            }}
          >
            Reservar Ahora
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
