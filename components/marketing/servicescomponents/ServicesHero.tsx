'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Blurred Yellow Ellipse */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{ 
          width: 'clamp(500px, 50vw, 932px)',
          height: 'clamp(400px, 45vw, 820px)',
          backgroundColor: '#FFE000',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(150px)',
          right: '-10%',
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-[120px] py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 flex flex-col z-20">
            {/* Yellow Badge */}
            <div className="inline-flex items-center justify-center w-[160px] h-[26px] bg-[#FFE000] rounded-full">
              <span className="text-[12px] font-semibold text-[#363A43]">OUR SERVICES</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-[#363A43] font-poppins">
              Climb Every Step with the Right Strategy
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] leading-relaxed font-normal text-[#363A43]/90 max-w-[600px]">
              At The Ladder, we don&apos;t just offer services — we guide your business from visibility to conversions. Explore how we help brands climb to digital success and see what sets us apart.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/marketing/services"
                className="flex items-center justify-center w-full sm:w-[223px] h-[48px] bg-[#FFE000] text-[#363A43] rounded-lg text-[16px] font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Our Services
              </Link>
              
              <Link
                href="/marketing/contact"
                className="flex items-center justify-center w-full sm:w-[185px] h-[48px] bg-white text-[#363A43] rounded-lg border border-[#363A43] text-[16px] font-semibold hover:bg-[#363A43] hover:text-white transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side - Image with Floating Cards */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            {/* Controlled Aspect Ratio Container */}
            <div className="relative w-full max-w-[600px] aspect-[728/640]">
              <Image
                src="/ServicesHero.webp"
                alt="Team collaboration at The Ladder"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating Card 1 - Graphic Designing (Top Right) */}
              <div 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl shadow-2xl p-3 md:p-4 flex items-center gap-2 md:gap-3 max-w-[180px] md:max-w-[220px] animate-float"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFE000] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#363A43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.25M15.54 15.54l4.24 4.25M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-bold text-[#363A43] truncate">Graphic Designing</p>
                  <p className="text-[10px] md:text-xs text-[#363A43]/70">Brand Logos</p>
                </div>
              </div>

              {/* Floating Card 2 - Paid Ads Campaigns (Bottom Left) */}
              <div 
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-2xl p-3 md:p-4 flex items-center gap-2 md:gap-3 max-w-[180px] md:max-w-[220px] animate-float-delayed"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFE000] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#363A43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-bold text-[#363A43] truncate">Paid Ads Campaigns</p>
                  <p className="text-[10px] md:text-xs text-[#363A43]/70">Higher ROI</p>
                </div>
              </div>

              {/* Floating Card 3 - SEO (Right Side) */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 bg-[#FFE000] rounded-2xl shadow-2xl p-2 md:p-3 flex flex-col items-center gap-1 w-[80px] md:w-[100px] animate-float-mid"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#363A43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <p className="text-[10px] md:text-xs font-bold text-[#363A43] text-center">SEO</p>
                <p className="text-[9px] md:text-[10px] text-[#363A43]/70 text-center">Backlinking</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-mid {
          0%, 100% {
            transform: translateY(-50%) translateX(0px);
          }
          50% {
            transform: translateY(-50%) translateX(0px) translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }

        .animate-float-mid {
          animation: float-mid 3s ease-in-out infinite 0.75s;
        }
      `}</style>
    </section>
  );
}
