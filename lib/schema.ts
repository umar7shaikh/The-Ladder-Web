// lib/schema.ts - JSON-LD Structured Data Generators

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Ladder',
  url: 'https://theladder.com',
  logo: 'https://theladder.com/logo.png',
  description: 'The Ladder offers digital marketing and technical solutions for business growth',
  sameAs: [
    'https://www.facebook.com/theladder',
    'https://www.linkedin.com/company/theladder',
    'https://twitter.com/theladder',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Customer Service',
    email: 'contact@theladder.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: 'ZIP',
    addressCountry: 'US',
  },
};

export const marketingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Ladder Marketing',
  url: 'https://theladder.com/marketing',
  image: 'https://theladder.com/marketing-hero.png',
  description: 'Digital marketing solutions including SEO, content strategy, and campaign management',
  areaServed: 'Worldwide',
  priceRange: '$$',
  serviceType: ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media Marketing'],
};

export const technicalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Ladder Technical',
  url: 'https://theladder.com/technical',
  image: 'https://theladder.com/technical-hero.png',
  description: 'Technical solutions including AI, automation, data analytics, and web development',
  areaServed: 'Worldwide',
  priceRange: '$$$',
  serviceType: ['AI Solutions', 'Automation', 'Data Analytics', 'Web Development'],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
