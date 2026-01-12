'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTAHero() {
  return (
    <section className="bg-[#1E1E1E] py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Blurred Yellow Ellipse - Centered around text - SMALLER */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(300px, 40vw, 800px)',
          height: 'clamp(150px, 25vw, 200px)',
          backgroundColor: '#D8F209',
          opacity: 0.15,
          borderRadius: '50%',
          filter: 'blur(clamp(60px, 8vw, 100px))',
          zIndex: 1,
        }}
      />

      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="relative">

          {/* Main Content */}
          <div className="relative z-20 text-center py-4 sm:py-6 lg:py-8">
            <h1 className="text-[#D8F209] font-bold text-[clamp(32px,6vw,64px)] leading-tight mb-4 sm:mb-6">
              Let&apos;s Build Something<br />
              That Scales With You.
            </h1>

            <p className="text-[#FBFFDE] text-[clamp(15px,3.5vw,18px)] max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
              We help teams design, build, and scale systems that grow with their business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                className="group bg-[#D8F209] text-[#1E1E1E] px-6 sm:px-8 py-3 sm:py-4 
                         rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold
                         hover:bg-[#c4db08] transition-all duration-300
                         focus:outline-none focus:ring-4 focus:ring-[#D8F209]/40
                         active:scale-95 flex items-center gap-2
                         min-w-[200px] justify-center
                         shadow-lg hover:shadow-xl"
              >
                <span>Start a project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                className="border-2 border-[#D8F209] text-[#D8F209] px-6 sm:px-8 py-3 sm:py-4 
                         rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold
                         hover:bg-[#D8F209]/10 transition-all duration-300
                         focus:outline-none focus:ring-4 focus:ring-[#D8F209]/40
                         active:scale-95
                         min-w-[200px]"
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
