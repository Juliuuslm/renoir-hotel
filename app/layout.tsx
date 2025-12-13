import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { ModalProvider } from '@/lib/modal-context';
import { BookingModal } from '@/components/shared/BookingModal';
import { MenuModal } from '@/components/shared/MenuModal';
import { HotelStructuredData } from '@/components/shared/StructuredData';
import { SmoothScrollProvider } from '@/components/shared/SmoothScrollProvider';
import { WelcomeScreen } from '@/components/shared/WelcomeScreen';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://renoirhotel.com'),
  title: {
    default: 'Renoir Hotel - Arte de Hospitalidad en CDMX',
    template: '%s | Renoir Hotel'
  },
  description: 'Un santuario de calma y sofisticación donde el diseño se encuentra con la hospitalidad de lujo. Hotel boutique de 24 suites en el corazón de Ciudad de México.',
  keywords: ['hotel de lujo', 'hotel boutique CDMX', 'hotel Ciudad de México', 'spa', 'gastronomía', 'hotel diseño'],
  authors: [{ name: 'Renoir Hotel' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://renoirhotel.com',
    siteName: 'Renoir Hotel',
    title: 'Renoir Hotel - Arte de Hospitalidad en CDMX',
    description: 'Un santuario de calma y sofisticación donde el diseño se encuentra con la hospitalidad de lujo.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Renoir Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renoir Hotel - Arte de Hospitalidad en CDMX',
    description: 'Un santuario de calma y sofisticación donde el diseño se encuentra con la hospitalidad de lujo.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <HotelStructuredData />
      </head>
      <body className="font-sans text-neutral-900 bg-neutral-50 selection:bg-neutral-900 selection:text-white min-h-screen flex flex-col">
        <WelcomeScreen />
        <SmoothScrollProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BookingModal />
            <MenuModal />
          </ModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
