'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'website',
    number: '01',
    title: 'Website Development',
    description: 'High-performance websites built for speed, scale, and reliability. From concept to deployment, we create digital experiences that deliver results.',
    image: '/Container.png',
    label: 'Website Development',
    slug: '/technical/services/website-development'
  },
  {
    id: 'automation',
    number: '02',
    title: 'Automation Solutions',
    description: 'Streamline operations and reduce manual work with intelligent automation. We build systems that work smarter, not harder.',
    image: '/AutomationVisual.png',
    label: 'Automation Solutions',
    slug: '/technical/services/automation-solutions'
  },
  {
    id: 'data-analytics',
    number: '03',
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights. Our analytics solutions help you make informed decisions and drive growth.',
    image: '/DataAnalyticsVisual.png',
    label: 'Data & Analytics',
    slug: '/technical/services/data-analytics'
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI & Intelligent Assistants',
    description: 'Leverage cutting-edge AI to automate conversations, enhance customer experience, and unlock new possibilities.',
    image: '/AIVisual.png',
    label: 'AI & Intelligent Assistants',
    slug: '/technical/services/ai-assistants'
  },
  {
    id: 'data-warehouse',
    number: '05',
    title: 'Data Warehousing & Integration',
    description: 'Consolidate and organize your data infrastructure. We build scalable warehouses that power your business intelligence.',
    image: '/DataWarehousingVisual.png',
    label: 'Data Warehousing & Integration',
    slug: '/technical/services/data-warehousing'
  },
  {
    id: 'marketing',
    number: '06',
    title: 'Free Marketing Support',
    description: 'Get expert marketing guidance to amplify your digital presence. From strategy to execution, we help you reach your audience.',
    image: '/MarketingSupportVisual.png',
    label: 'Free Marketing Support',
    slug: '/technical/services/marketing-support'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleServiceChange = (index: number) => {
    if (index === activeService) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveService(index);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    const nextIndex = activeService === services.length - 1 ? 0 : activeService + 1;
    handleServiceChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeService === 0 ? services.length - 1 : activeService - 1;
    handleServiceChange(prevIndex);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <section className="relative bg-[#1E1E1E] overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Background Glow - Desktop Only */}
      <div className="hidden md:block absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8F209]/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Huge Centered Background Number - Desktop Only */}
      <div className="hidden md:block absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D8F209]/[0.08] font-bold text-[clamp(400px,50vw,800px)] leading-none pointer-events-none select-none z-0 transition-opacity duration-300">
        {services[activeService].number}
      </div>

      {/* Container */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10">

        {/* Header - Left Aligned on Mobile, Center on Desktop */}
        <div className="text-left md:text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(9px,2.5vw,13px)]">
              SERVICES
            </span>
          </div>

          <h2 className="text-[#D8F209] font-bold text-[clamp(28px,6vw,56px)] leading-tight mb-3 md:mb-4">
            What We Offer
          </h2>

          <p className="text-[#FBFFDE]/70 text-[clamp(14px,3.5vw,18px)] max-w-3xl md:mx-auto">
            End-to-end digital solutions designed for modern businesses
          </p>
        </div>

        {/* Tab Navigation - Desktop Only */}
        <div className="hidden md:block relative mb-12 lg:mb-16">
          <div className="flex justify-between items-center gap-1 lg:gap-2 xl:gap-4 relative pb-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(index)}
                disabled={isTransitioning}
                className={`
                  relative flex-shrink-1 flex-grow-0 px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-6 py-2 font-medium text-[clamp(9px,1.2vw,14px)] transition-all duration-300 whitespace-nowrap text-center
                  ${activeService === index
                    ? 'text-[#D8F209]'
                    : 'text-[#FBFFDE]/50 hover:text-[#FBFFDE]/80'
                  }
                  ${isTransitioning ? 'pointer-events-none' : ''}
                `}
              >
                {service.label}

                {activeService === index && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-[#D8F209] rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="absolute bottom-[11px] left-0 right-0 h-px bg-[#FBFFDE]/10"></div>
        </div>

        {/* Content Area with Swipe Support on Entire Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Content - Left Aligned on Mobile */}
          <div className={`relative space-y-4 md:space-y-6 order-1 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="space-y-3 md:space-y-4 text-left">
              {/* Foreground Number */}
              <div className="text-[#D8F209]/40 font-bold text-[clamp(50px,12vw,100px)] leading-none">
                {services[activeService].number}
              </div>

              <h3 className="text-white font-bold text-[clamp(24px,5.5vw,40px)] leading-tight">
                {services[activeService].title}
              </h3>

              <p className="text-[#FBFFDE]/70 text-[clamp(13px,3.5vw,16px)] leading-relaxed max-w-xl">
                {services[activeService].description}
              </p>

              {/* View Service Link */}
              <Link
                href={services[activeService].slug}
                className="group/link inline-flex items-center gap-2 text-[#D8F209] text-[clamp(13px,3vw,15px)] font-medium hover:gap-3 transition-all duration-300 mt-2"
              >
                <span>Know More</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image with Navigation - Mobile */}
          <div className="relative order-2 flex items-center justify-center md:justify-end">
            {/* Left Arrow - Mobile Only - Moved Up */}
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="md:hidden absolute left-0 top-[40%] -translate-y-1/2 z-20 text-[#D8F209] text-4xl font-light hover:text-[#D8F209]/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              &lt;
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-square">
              {/* Loading Spinner */}
              {isTransitioning && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-3 md:border-4 border-[#D8F209]/20 border-t-[#D8F209] rounded-full animate-spin"></div>
                </div>
              )}

              {/* Image */}
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className={`object-contain transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 450px, 500px"
              />

              {/* Dots at Bottom of Image - Mobile Only */}
              <div className="md:hidden absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${activeService === index
                        ? 'w-8 bg-[#D8F209]'
                        : 'w-2 bg-[#FBFFDE]/20'
                      }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Right Arrow - Mobile Only - Moved Up */}
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="md:hidden absolute right-0 top-[40%] -translate-y-1/2 z-20 text-[#D8F209] text-4xl font-light hover:text-[#D8F209]/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              &gt;
            </button>
          </div>

        </div>

      </div>

      {/* Hide scrollbar for webkit browsers */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
