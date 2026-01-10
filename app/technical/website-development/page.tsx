'use client';

import Hero from '@/components/technical/servicedetails/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { ShoppingCart, Building2, Rocket, Zap } from 'lucide-react';

export default function WebsiteDevelopmentPage() {
  const whatWeBuildCards = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Full-featured online stores built for scale and performance',
      highlight: 'Most Popular',
      features: [
        'Secure payment integration',
        'Real-time inventory management',
        'Advanced analytics dashboard',
        'Mobile-responsive checkout'
      ]
    },
    {
      icon: Building2,
      title: 'Corporate Websites',
      description: 'Professional business sites that convert visitors into customers',
      highlight: 'SEO Optimized',
      features: [
        'SEO-optimized from day one',
        'CMS integration for easy updates',
        'Mobile-first responsive design',
        'Lead generation forms'
      ]
    },
    {
      icon: Rocket,
      title: 'Landing Pages',
      description: 'High-converting pages engineered for performance',
      features: [
        'A/B testing ready',
        'Form & CRM integration',
        'Lightning-fast load times',
        'Conversion tracking'
      ]
    },
    {
      icon: Zap,
      title: 'Web Applications',
      description: 'Custom applications built for your unique workflow',
      highlight: 'Enterprise Ready',
      features: [
        'Real-time data synchronization',
        'Role-based authentication',
        'Cloud-native architecture',
        'API integrations'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      {/* 1. Hero Section */}
      <Hero
        number="01"
        title="Website Development"
        subtitle="SERVICES"
        description="High-performance websites built for speed, scale, and reliability. From concept to deployment, we create digital experiences that deliver results."
        primaryCTA="Start Your Project"
        secondaryCTA="View Our Work"
      />
      
      {/* 2. What Makes Us Different */}
      <WhatMakesUsDifferent />
      
      {/* 3. What We Build (Core Capabilities) */}
      <WhatWeBuild cards={whatWeBuildCards} />
      
      {/* 4. Tech Stack / How We Build */}
      <TechStack />
      
      {/* 5. Development Process */}
      <DevelopmentProcess />
      
      {/* 6. Who This Is For */}
      <WhoThisIsFor />
      
      {/* 7. What You Get (Deliverables) */}
      <WhatYouGet />
      
      {/* 8. Final CTA */}
      <FinalCTA />

      {/* 9. Footer */}
      <TechFooter />
    </main>
  );
}
