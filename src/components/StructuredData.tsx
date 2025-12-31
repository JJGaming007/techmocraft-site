export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Techmocraft Engineering',
    url: 'https://techmocraft-site-11ud.vercel.app',
    logo: 'https://techmocraft-site-11ud.vercel.app/logo.png',
    description: 'Leading precision engineering company specializing in die making, CNC milling, plastic molding, and custom fabrication.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Techmocraft Industrial Zone',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'techmocraft7@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://techmocraft-site-11ud.vercel.app',
    name: 'Techmocraft Engineering',
    image: 'https://techmocraft-site-11ud.vercel.app/banner.jpg',
    description: 'Precision engineering services including die making, die repairing, CNC milling, plastic molding, tool maintenance, and custom fabrication.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Techmocraft Industrial Zone',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '72.8777',
    },
    url: 'https://techmocraft-site-11ud.vercel.app',
    telephone: '+91-XXX-XXX-XXXX',
    email: 'techmocraft7@gmail.com',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Precision Manufacturing',
    provider: {
      '@type': 'Organization',
      name: 'Techmocraft Engineering',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Manufacturing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Die Making',
            description: 'Precision die manufacturing with advanced CNC technology',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Die Repairing',
            description: 'Expert die repair services to extend tool life',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CNC Milling',
            description: 'State-of-the-art CNC milling solutions for complex parts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plastic Molding',
            description: 'High-quality plastic molding services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tool Maintenance',
            description: 'Comprehensive tool maintenance programs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Fabrication',
            description: 'Tailored fabrication solutions',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
