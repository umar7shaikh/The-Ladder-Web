'use client';

import Hero from '@/components/technical/servicedetails/software-development/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/software-development/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/software-development/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/software-development/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/software-development/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/software-development/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/software-development/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/software-development/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { Code, GitBranch, Zap, Package } from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  const whatWeBuildCards = [
    {
      icon: Code,
      title: 'Web & Mobile Applications',
      description: 'Full-stack applications built with modern frameworks and best practices',
      highlight: 'Most Popular',
      features: [
        'Frontend development',
        'Backend APIs',
        'Database design',
        'Mobile apps'
      ]
    },
    {
      icon: Package,
      title: 'SaaS Platforms',
      description: 'Multi-tenant software platforms designed for scalability and reliability',
      highlight: 'Enterprise Ready',
      features: [
        'Multi-tenant architecture',
        'User authentication',
        'Billing integration',
        'Analytics dashboard'
      ]
    },
    {
      icon: GitBranch,
      title: 'System Integration',
      description: 'Connect and integrate multiple systems with robust APIs and middleware',
      features: [
        'API development',
        'Third-party integrations',
        'Data migration',
        'Legacy system modernization'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize existing applications for speed, efficiency, and reliability',
      features: [
        'Code refactoring',
        'Database optimization',
        'Caching strategies',
        'Load testing'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      <Hero
        number="06"
        title="How do you build software that actually scales and evolves with your business?"
        subtitle="SOFTWARE DEVELOPMENT"
        description="We build custom software solutions that are fast, reliable, and built to last. From architecture to deployment, we focus on clean code, scalability, and long-term maintainability."
        primaryCTA="Build Your Software"
        secondaryCTA="View Projects"
      />
      
      <WhatMakesUsDifferent />
      <WhatWeBuild cards={whatWeBuildCards} />
      <TechStack />
      <DevelopmentProcess />
      <WhoThisIsFor />
      <WhatYouGet />
      <FinalCTA />
      <TechFooter />
    </main>
  );
}
