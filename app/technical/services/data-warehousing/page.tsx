'use client';

import Hero from '@/components/technical/servicedetails/data-warehousing/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/data-warehousing/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/data-warehousing/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/data-warehousing/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/data-warehousing/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/data-warehousing/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/data-warehousing/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/data-warehousing/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { Database, GitBranch, Activity, Link2 } from 'lucide-react';

export default function DataWarehousingPage() {
  const whatWeBuildCards = [
    {
      icon: Database,
      title: 'ETL Pipelines',
      description: 'Automated Extract, Transform, Load pipelines that consolidate data from multiple sources',
      highlight: 'Most Popular',
      features: [
        'Multi-source data extraction',
        'Data transformation & cleaning',
        'Automated scheduling',
        'Error handling & retries'
      ]
    },
    {
      icon: Database,
      title: 'Data Lakes',
      description: 'Scalable storage solutions for structured and unstructured data at any volume',
      highlight: 'Enterprise Scale',
      features: [
        'Petabyte-scale storage',
        'Multiple data formats',
        'Cost-effective architecture',
        'Easy data retrieval'
      ]
    },
    {
      icon: Activity,
      title: 'Real-time Sync',
      description: 'Live data synchronization that keeps your warehouse updated as changes happen',
      features: [
        'Change data capture',
        'Event-driven updates',
        'Low latency sync',
        'Conflict resolution'
      ]
    },
    {
      icon: Link2,
      title: 'API Integration',
      description: 'Seamless connections to REST APIs, webhooks, and third-party services',
      features: [
        'RESTful API integration',
        'Webhook handling',
        'OAuth authentication',
        'Rate limiting & retries'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      <Hero
        number="05"
        title="Is your data scattered across tools, teams, and platforms?"
        subtitle="DATA WAREHOUSING & INTEGRATION"
        description="When data lives everywhere, decisions slow down. We bring everything into one reliable system so your business runs on clean, connected, and accessible information."
        primaryCTA="Build Your Data Warehouse"
        secondaryCTA="View Architecture"
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
