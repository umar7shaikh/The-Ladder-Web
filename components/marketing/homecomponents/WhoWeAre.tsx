// components/marketing/homecomponents/WhoWeAre.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-[#363A43] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20">
          
          {/* Left Side - Image (728x640 → relative) */}
          <div className="w-full lg:w-[48%] flex-shrink-0">
            <div className="relative w-full aspect-[728/640] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/who-we-are.webp"
                alt="Team collaboration at The Ladder"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content (728x404 → relative) */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
              <span className="text-xs font-semibold text-[#363A43]">Who We Are</span>
            </div>

            {/* H2 Title - Fluid typography */}
            <h2 className="text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-tight font-bold text-[#FFE000] font-poppins">
              Climbing Together Towards Digital Success
            </h2>

            {/* Description - Fluid typography */}
            <p className="text-[clamp(1rem,1vw+0.5rem,1.125rem)] leading-relaxed font-normal text-[#FFF9CE]">
              At The Ladder, we believe every brand deserves a clear path to growth. With creativity, data-driven strategies, and proven expertise, we help businesses reach new digital heights. From boosting online visibility to building lasting customer connections, our team is dedicated to turning challenges into opportunities. Together, we don't just market — we climb towards success.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/marketing/about"
                className="inline-flex items-center justify-center px-8 py-3 h-12 bg-[#FFE000] text-[#363A43] rounded-lg text-base font-semibold hover:bg-[#FFF9CE] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
