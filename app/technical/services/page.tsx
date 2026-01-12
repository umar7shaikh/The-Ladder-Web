// components/technical/techhomecomponents/OurServices.tsx
'use client';

import { Code, Sparkles, BarChart3, Database, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import CTAHero from '@/components/technical/techhomecomponents/CTAHero';
import ContactSection from '@/components/technical/techhomecomponents/TContactSection';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string; // ← Added slug for routing
}

const services: Service[] = [
  {
    id: 1,
    icon: <Code className="w-6 h-6" />,
    title: 'Website Development',
    description: 'Custom, high-performance websites built with scalability, speed, and long-term maintainability in mind.',
    slug: '/technical/services/website-development',
  },
  {
    id: 2,
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Automation Solutions',
    description: 'Workflow automation that reduces manual effort, improves accuracy, and streamlines operations.',
    slug: '/technical/services/automation-solutions',
  },
  {
    id: 3,
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Analytics & Visualization',
    description: 'Clear, actionable insights through structured data pipelines and reporting systems.',
    slug: '/technical/services/data-analytics',
  },
  {
    id: 4,
    icon: <Database className="w-6 h-6" />,
    title: 'Data Warehousing & Integration',
    description: 'Centralized data infrastructure that connects tools, platforms, and data sources.',
    slug: '/technical/services/data-warehousing',
  },
  {
    id: 5,
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Intelligent Assistants',
    description: 'Practical AI solutions designed to add to user experience, decision-making, and efficiency.',
    slug: '/technical/services/ai-assistants',
  },
  {
    id: 6,
    icon: <Code className="w-6 h-6" />,
    title: 'Software Development',
    description: 'Custom software solutions built with clean architecture, scalability, and performance in mind.',
    slug: '/technical/services/software-development',
  },
];

export default function OurServices() {
  return (
    <>
      {/* Services Section */}
      <section className="relative bg-[#1E1E1E] overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="relative w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
                SERVICES
              </span>
            </div>
            
            <h2 className="text-[#D8F209] font-bold text-[clamp(32px,5.5vw,56px)] leading-tight mb-4">
              Our Services
            </h2>
            
            <p className="text-[#FBFFDE]/70 text-[clamp(15px,3.5vw,18px)] max-w-2xl mx-auto">
              End-to-end digital services designed to help teams build, automate, and scale.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAHero />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */} 
      <TechFooter />
    </>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group relative">
      <div className="flex gap-4 pb-8 lg:pb-12">
        {/* Icon - Fixed width on left */}
        <div className="shrink-0 text-[#D8F209] pt-1">
          {service.icon}
        </div>

        {/* Content - Title, Description, and Link */}
        <div className="flex-1 space-y-4">
          {/* Title */}
          <h3 className="text-white font-bold text-[clamp(20px,4.5vw,28px)] leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[#FBFFDE]/60 text-[clamp(14px,3.5vw,16px)] leading-relaxed">
            {service.description}
          </p>

          {/* View Service Link */}
          <Link 
            href={service.slug}
            className="group/link inline-flex items-center gap-2 text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium hover:gap-3 transition-all duration-300"
          >
            <span>View service</span>
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Horizontal Divider Line - Each card has its own */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#333333]"></div>
    </div>
  );
}
