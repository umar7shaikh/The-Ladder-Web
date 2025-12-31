'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Blurred Yellow Ellipse - Moved to relative to the image or screen edge */}
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
              <span className="text-[12px] font-semibold text-[#363A43]">Welcome to The Ladder</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-[#363A43] font-poppins">
              Take the Ladder to the Top of Digital Marketing
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] leading-relaxed font-normal text-[#363A43]/90 max-w-[600px]">
              At The Ladder, we help brands step up their online presence with creative strategies, smart marketing, and measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/marketing/contact"
                className="flex items-center justify-center w-full sm:w-[223px] h-[48px] bg-[#FFE000] text-[#363A43] rounded-lg text-[16px] font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Climbing Today
              </Link>
              
              <Link
                href="/marketing/services"
                className="flex items-center justify-center w-full sm:w-[185px] h-[48px] bg-white text-[#363A43] rounded-lg border border-[#363A43] text-[16px] font-semibold hover:bg-[#363A43] hover:text-white transition-all duration-300"
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right Side - Image Showcase */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            {/* Controlled Aspect Ratio Container */}
            <div className="relative w-full max-w-[600px] aspect-[728/640]">
              <Image
                src="/Mhero.webp"
                alt="Marketing team collaboration showcase"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Sparkles - Relative to the image container */}
              <div className="absolute bottom-[10%] right-[-5%] w-10 h-10 md:w-12 md:h-12 text-[#FFE000] animate-pulse">
                <SparkleSVG />
              </div>
              <div className="absolute bottom-[20%] right-[5%] w-14 h-14 md:w-16 md:h-16 text-[#FFE000] animate-pulse delay-300">
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
