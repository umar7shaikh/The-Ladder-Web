// components/marketing/aboutcomponents/AboutHero.tsx
'use client';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center text-center gap-6 lg:gap-8">
          
          {/* Yellow Badge */}
          <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
            <span className="text-xs font-semibold text-[#363A43]">About The Ladder</span>
          </div>

          {/* H1 Title - Narrower */}
          <h1 className="text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-tight font-bold text-[#363A43] font-poppins max-w-5xl">
            Climbing Together Towards Success
          </h1>

          {/* Description - Wider */}
          <p className="text-[clamp(1rem,1vw+0.5rem,1.125rem)] leading-relaxed font-normal text-[#363A43]/90 max-w-8xl">
            At The Ladder, we're more than just a digital agency — we're your partners in growth. Our mission is to help brands rise step by step, combining creativity, strategy, and technology to build lasting impact.
          </p>

        </div>
      </div>
    </section>
  );
}
