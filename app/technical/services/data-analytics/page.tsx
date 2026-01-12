'use client';

import Hero from '@/components/technical/servicedetails/data-analytics/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/data-analytics/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/data-analytics/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/data-analytics/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/data-analytics/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/data-analytics/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/data-analytics/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/data-analytics/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { BarChart3, TrendingUp, FileText, Database } from 'lucide-react';

export default function DataAnalyticsPage() {
  const whatWeBuildCards = [
    {
      icon: BarChart3,
      title: 'BI Dashboards',
      description: 'Interactive business intelligence dashboards that visualize KPIs and metrics in real-time',
      highlight: 'Most Popular',
      features: [
        'Real-time data visualization',
        'Custom KPI tracking',
        'Drill-down capabilities',
        'Mobile-responsive design'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast trends and predict future performance',
      highlight: 'AI-Powered',
      features: [
        'Demand forecasting',
        'Revenue predictions',
        'Customer behavior analysis',
        'Risk assessment models'
      ]
    },
    {
      icon: FileText,
      title: 'Custom Reports',
      description: 'Automated reports that deliver insights directly to stakeholders on schedule',
      features: [
        'Automated report generation',
        'Custom formatting & branding',
        'Email & PDF delivery',
        'Scheduled distribution'
      ]
    },
    {
      icon: Database,
      title: 'Data Pipelines',
      description: 'ETL pipelines that collect, clean, and transform data from multiple sources',
      features: [
        'Multi-source integration',
        'Data validation & cleaning',
        'Automated transformations',
        'Error handling & monitoring'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      {/* 1. Hero Section */}
      <Hero
        number="03"
        title="You have data. But do you really know what it's telling you?"
        subtitle="DATA & ANALYTICS"
        description="Spreadsheets and dashboards mean nothing without clarity. We turn raw data into simple insights that help you make confident decisions, track growth, and spot opportunities early."
        primaryCTA="Get Data Insights"
        secondaryCTA="View Examples"
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
