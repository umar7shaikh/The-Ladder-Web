'use client';

import Hero from '@/components/technical/servicedetails/automation/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/automation/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/automation/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/automation/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/automation/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/automation/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/automation/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/automation/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { Workflow, Database, Mail, FileText, Bot, Calendar } from 'lucide-react';

export default function AutomationSolutionsPage() {
  const whatWeBuildCards = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline complex business processes with intelligent automation',
      highlight: 'Most Popular',
      features: [
        'Multi-step process automation',
        'Conditional logic & branching',
        'Real-time notifications & alerts',
        'Integration with existing tools'
      ]
    },
    {
      icon: Database,
      title: 'Data Processing & ETL',
      description: 'Automated data extraction, transformation, and loading pipelines',
      highlight: 'High Performance',
      features: [
        'Automated data extraction',
        'Data validation & cleaning',
        'Schedule-based processing',
        'Error handling & logging'
      ]
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Intelligent email workflows that respond to triggers and events',
      features: [
        'Personalized email campaigns',
        'Trigger-based responses',
        'Attachment processing',
        'CRM synchronization'
      ]
    },
    {
      icon: FileText,
      title: 'Document Automation',
      description: 'Generate, process, and manage documents automatically',
      highlight: 'Time Saver',
      features: [
        'PDF generation & processing',
        'Template-based documents',
        'Invoice & report automation',
        'Digital signature integration'
      ]
    },
    {
      icon: Bot,
      title: 'Web Scraping & Monitoring',
      description: 'Extract and monitor data from websites automatically',
      features: [
        'Scheduled data collection',
        'Price monitoring & alerts',
        'Competitor analysis',
        'API-less data extraction'
      ]
    },
    {
      icon: Calendar,
      title: 'Task Scheduling',
      description: 'Automated task execution based on time or events',
      features: [
        'Cron-based scheduling',
        'Event-triggered automation',
        'Dependency management',
        'Failure recovery & retries'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      {/* 1. Hero Section */}
      <Hero
        number="03"
        title="Automation Solutions"
        subtitle="INTELLIGENT AUTOMATION"
        description="Transform repetitive tasks into automated workflows. From data processing to business operations, we build intelligent automation systems that save time, reduce errors, and scale your business effortlessly."
        primaryCTA="Automate Your Workflow"
        secondaryCTA="View Case Studies"
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
