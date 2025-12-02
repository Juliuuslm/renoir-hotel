export const HotelStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Renoir Hotel',
    description:
      'Un santuario de calma y sofisticación donde el diseño se encuentra con la hospitalidad de lujo.',
    image: 'https://renoirhotel.com/images/hotel-exterior.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de la Paz 45',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '06000',
      addressCountry: 'MX',
    },
    telephone: '+52 55 1234 5678',
    email: 'concierge@renoirhotel.com',
    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
    priceRange: '$$$',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Spa' },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
      { '@type': 'LocationFeatureSpecification', name: 'Bar' },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center' },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
