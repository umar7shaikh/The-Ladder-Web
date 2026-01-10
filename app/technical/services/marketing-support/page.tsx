'use client';

import Hero from '@/components/technical/servicedetails/marketing-support/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/marketing-support/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/marketing-support/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/marketing-support/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/marketing-support/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/marketing-support/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/marketing-support/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/marketing-support/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { Search, FileText, Instagram, Mail } from 'lucide-react';

export default function MarketingSupportPage() {
  const whatWeBuildCards = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies that improve search rankings and drive organic traffic to your website',
      highlight: 'Most Popular',
      features: [
        'Keyword research & optimization',
        'Technical SEO audits',
        'On-page & off-page SEO',
        'Link building strategies'
      ]
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Strategic content planning and creation that engages your audience and drives conversions',
      highlight: 'High Impact',
      features: [
        'Content calendar planning',
        'Blog posts & articles',
        'SEO-optimized content',
        'Content performance tracking'
      ]
    },
    {
      icon: Instagram,
      title: 'Social Media',
      description: 'Platform-specific social media strategies that grow your audience and boost engagement',
      features: [
        'Multi-platform management',
        'Content scheduling',
        'Community engagement',
        'Growth tactics & campaigns'
      ]
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Automated email marketing campaigns that nurture leads and drive conversions',
      features: [
        'Email automation',
        'Newsletter campaigns',
        'Segmented audiences',
        'Conversion tracking'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      <Hero
        number="06"
        title="Free Marketing Support"
        subtitle="GROWTH MARKETING"
        description="Get expert marketing guidance to amplify your digital presence. From SEO to social media, we help you reach your audience and drive growth."
        primaryCTA="Get Marketing Help"
        secondaryCTA="View Services"
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
