'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-label="Hero section">
      {/* Blurred Yellow Ellipse - Responsive sizing */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{ 
          width: 'clamp(400px, 45vw, 932px)',
          height: 'clamp(350px, 40vw, 820px)',
          backgroundColor: '#FFE000',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(clamp(80px, 10vw, 150px))',
          right: '-10%',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-[120px] py-8 sm:py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-8 xl:gap-12 w-full">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col z-20">
            {/* Yellow Badge */}
            <div className="inline-flex items-center justify-center w-[clamp(140px,35vw,160px)] h-[clamp(24px,6vw,26px)] bg-[#FFE000] rounded-full">
              <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-[#363A43]">Welcome to The Ladder</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-[clamp(28px,5vw,56px)] leading-[1.1] font-bold text-[#363A43] font-poppins">
              Take the Ladder to the Top of Digital Marketing
            </h1>

            {/* Subtitle */}
            <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#363A43]/90 max-w-[600px]">
              At The Ladder, we help brands step up their online presence with creative strategies, smart marketing, and measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/marketing/contact"
                className="flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] lg:min-w-[223px] h-[clamp(44px,10vw,48px)] px-6 bg-[#FFE000] text-[#363A43] rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Contact us to start climbing today"
              >
                Start Climbing Today
              </Link>
              
              <Link
                href="/marketing/services"
                className="flex items-center justify-center w-full sm:w-auto sm:min-w-[170px] lg:min-w-[185px] h-[clamp(44px,10vw,48px)] px-6 bg-white text-[#363A43] rounded-lg border border-[#363A43] text-[clamp(14px,3.5vw,16px)] font-semibold hover:bg-[#363A43] hover:text-white transition-all duration-300"
                aria-label="View our marketing services"
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right Side - Image Showcase */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            {/* Controlled Aspect Ratio Container */}
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[728/640]">
              <Image
                src="/Mhero.webp"
                alt="Marketing team collaboration showcase"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              
              {/* Sparkles - Relative to the image container */}
              <div className="absolute bottom-[10%] right-[-5%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FFE000] animate-pulse" aria-hidden="true">
                <SparkleSVG />
              </div>
              <div className="absolute bottom-[20%] right-[5%] w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#FFE000] animate-pulse delay-300" aria-hidden="true">
                <SparkleSVG />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Sparkle Component for cleaner code
function SparkleSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/>
    </svg>
  );
}
