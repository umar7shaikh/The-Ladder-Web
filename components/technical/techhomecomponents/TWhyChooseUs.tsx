// components/WhyChooseUs.tsx
'use client';

import { useState } from 'react';

interface Reason {
  id: number;
  number: string;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  };
}

const reasons: Reason[] = [
  {
    id: 1,
    number: '01',
    title: 'System-first approach',
    description: 'We build with systems thinking, creating scalable solutions that grow with your business needs.',
    stats: {
      value: '100%',
      label: 'Scalable Architecture'
    }
  },
  {
    id: 2,
    number: '02',
    title: 'Built for scale, not demos',
    description: 'Production-ready code from day one. No prototypes, no shortcuts, just robust systems.',
    stats: {
      value: '0',
      label: 'Shortcuts Taken'
    }
  },
  {
    id: 3,
    number: '03',
    title: 'Speed without shortcuts',
    description: 'Fast delivery without compromising quality. Efficient processes that maintain excellence.',
    stats: {
      value: '2x',
      label: 'Faster Delivery'
    }
  },
  {
    id: 4,
    number: '04',
    title: 'Long-term partnership mindset',
    description: "We're in it for the long haul. Your success is our success, today and tomorrow.",
    stats: {
      value: '∞',
      label: 'Long-term Support'
    }
  }
];

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState<number>(0);

  return (
    <section className="relative bg-[#1E1E1E] overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Small Title */}
            <div>
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(9px,2.2vw,12px)]">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[#FBFFDE] font-bold text-[clamp(32px,5.5vw,56px)] leading-tight">
              Designed For Clarity.<br />
              Built For Growth.
            </h2>

            {/* Reasons List */}
            <div className="space-y-4 md:space-y-6 pt-4">
              {reasons.map((reason: Reason, index: number) => {
                const isActive = activeReason === index;
                return (
                  <button
                    key={reason.id}
                    onClick={() => setActiveReason(index)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number with Underline */}
                      <div className="flex-shrink-0">
                        <div className={`font-bold leading-none transition-all duration-300 ${
                          isActive 
                            ? 'text-[#D8F209] text-[clamp(40px,6vw,60px)]' 
                            : 'text-[#555555] text-[clamp(32px,5vw,48px)]'
                        }`}>
                          {reason.number}
                        </div>
                        {isActive && (
                          <div className="w-12 h-1 bg-[#D8F209] mt-2"></div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 pt-1 transition-all duration-300">
                        <h3 className={`font-bold transition-all duration-300 ${
                          isActive 
                            ? 'text-white text-[clamp(20px,4vw,28px)]' 
                            : 'text-[#888888] text-[clamp(16px,3.5vw,20px)]'
                        }`}>
                          {reason.title}
                        </h3>
                        
                        {/* Show description on mobile only */}
                        {isActive && (
                          <p className="lg:hidden text-[#FBFFDE]/70 text-[clamp(13px,3vw,15px)] leading-relaxed mt-2 animate-fadeIn">
                            {reason.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Stats Display */}
          <div className="hidden lg:flex relative items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8F209" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Main Content Area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative text-center space-y-8 p-12">
                  
                  {/* Glowing Circle Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-[#D8F209]/5 rounded-full blur-3xl"></div>
                  </div>

                  {/* Large Stat Value */}
                  <div className="relative z-10 space-y-4">
                    <div className="text-[#D8F209] font-bold text-[clamp(80px,15vw,140px)] leading-none animate-scaleIn">
                      {reasons[activeReason].stats.value}
                    </div>
                    
                    {/* Stat Label */}
                    <div className="text-[#FBFFDE] font-semibold text-[clamp(18px,3vw,24px)] tracking-wide animate-fadeIn">
                      {reasons[activeReason].stats.label}
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="relative z-10 max-w-md mx-auto">
                    <p className="text-[#FBFFDE]/70 text-[clamp(14px,2.5vw,16px)] leading-relaxed animate-fadeIn">
                      {reasons[activeReason].description}
                    </p>
                  </div>

                  {/* Progress Bar Indicator */}
                  <div className="relative z-10 w-full max-w-xs mx-auto h-1.5 bg-[#333333] rounded-full overflow-hidden animate-fadeIn">
                    <div 
                      className="h-full bg-[#D8F209] transition-all duration-700 rounded-full"
                      style={{ width: `${((activeReason + 1) / reasons.length) * 100}%` }}
                    ></div>
                  </div>

                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#D8F209]/40 transition-all duration-500"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#D8F209]/40 transition-all duration-500"></div>

              {/* Navigation Dots
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {reasons.map((_: Reason, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveReason(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeReason === index 
                        ? 'w-10 bg-[#D8F209]' 
                        : 'w-2.5 bg-[#FBFFDE]/20 hover:bg-[#FBFFDE]/40'
                    }`}
                  />
                ))}
              </div> */}

            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
