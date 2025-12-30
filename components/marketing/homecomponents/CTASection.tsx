"use client";

import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full bg-white py-8 md:py-12 lg:py-14 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Content Container */}
        <div className="flex flex-col items-center justify-center text-center gap-3 lg:gap-4">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full">
            <span className="text-xs font-bold uppercase tracking-wider text-[#363A43]">
              READY TO CLIMB?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#363A43] max-w-4xl font-poppins leading-tight">
            Let's Take the <br className="hidden sm:block" />
            First Step Together
          </h2>

          {/* Subtitle - Single Line */}
          <p className="text-base md:text-lg text-gray-500 max-w-5xl leading-relaxed">
            Your journey to digital success starts here. Whether you&apos;re looking to grow your brand, boost engagement, or drive real results — we&apos;re the ladder that helps you reach higher.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
            <Link
              href="/marketing/contact"
              className="flex items-center justify-center w-full sm:w-auto px-8 h-12 bg-[#FFE000] text-[#363A43] rounded-lg text-base font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[#FFE000]/90 transition-all duration-300"
            >
              Start Your Climb
            </Link>
            
            <Link
              href="/marketing/services"
              className="flex items-center justify-center w-full sm:w-auto px-8 h-12 bg-white text-[#363A43] rounded-lg border border-[#363A43] text-base font-semibold hover:bg-[#363A43] hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
