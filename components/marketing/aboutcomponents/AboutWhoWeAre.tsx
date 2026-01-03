// components/marketing/aboutcomponents/AboutWhoWeAre.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutWhoWeAre() {
  return (
    <section className="relative w-full bg-[#FFE000] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 xl:gap-16 2xl:gap-20">
         
          {/* Left Side - Image */}
          <div className="w-full lg:w-[48%] flex-shrink-0">
            <div className="relative w-full aspect-[728/640] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about-who-we-are.webp"
                alt="Team collaboration at The Ladder"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[48%] flex flex-col gap-4 sm:gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#363A43] rounded-full">
              <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-white">Who We Are</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#363A43] font-poppins">
              Climbing Together Towards Digital Success
            </h2>

            {/* Description */}
            <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#363A43]/90">
              At The Ladder, we believe every brand deserves a clear path to growth. With creativity, data-driven strategies, and proven expertise, we help businesses reach new digital heights. From boosting online visibility to building lasting customer connections, our team is dedicated to turning challenges into opportunities. Together, we don't just market — we climb towards success.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/marketing/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 h-[clamp(44px,10vw,48px)] bg-white text-[#363A43] rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
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
