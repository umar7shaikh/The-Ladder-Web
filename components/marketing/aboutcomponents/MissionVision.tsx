// components/marketing/aboutcomponents/MissionVision.tsx
'use client';


export default function MissionVision() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#4A5058]"></div>
        <div className="hidden lg:block w-1/2 bg-white"></div>
      </div>


      <div className="relative z-10 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-14 lg:gap-16 min-h-[500px]">
          
          {/* Left Side - Content (Vertically Centered) */}
          <div className="w-full lg:w-[38%] flex items-center">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-[536px]">
              
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
                <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-[#363A43]">Our Mission and Vision</span>
              </div>


              {/* Heading */}
              <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#FFE000] font-poppins">
                Digital Excellence for Growth
              </h2>


              {/* Description */}
              <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#FFF9CE]">
                Our mission is to provide businesses with creative, data-driven, and impactful digital marketing strategies. We aim to simplify growth, build strong online presence, and deliver measurable results that truly matter.
              </p>
            </div>
          </div>


          {/* Center - Bullseye Target (Absolute Center) - 5 circles */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
              {/* Outer Ring - Yellow (draw first, biggest) */}
              <div className="absolute inset-0 rounded-full bg-[#FFE000]"></div>
              {/* Fourth Ring - Dark Grey */}
              <div className="absolute inset-[10%] rounded-full bg-[#4A5058]"></div>
              {/* Third Ring - Yellow */}
              <div className="absolute inset-[20%] rounded-full bg-[#FFE000]"></div>
              {/* Second Ring - Dark Grey */}
              <div className="absolute inset-[30%] rounded-full bg-[#4A5058]"></div>
              {/* Center Circle - Yellow (draw last, smallest) */}
              <div className="absolute inset-[40%] rounded-full bg-[#FFE000]"></div>
            </div>
          </div>


          {/* Right Side - Value Cards (Moved more to the right) */}
          <div className="w-full lg:w-[52%] lg:pl-8 xl:pl-12 2xl:pl-16 flex flex-col gap-8 sm:gap-10 lg:gap-12 z-10">
            
            {/* Card 1 - Client Success First (No shadow/border) */}
            <div className="bg-white rounded-xl flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] pr-4 sm:pr-8 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE000] rounded-full flex items-center justify-center absolute left-4 sm:left-8">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-[#363A43] font-poppins">Client Success First</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#363A43]/70 leading-relaxed">We put our clients' goals at the heart of every campaign we create.</p>
              </div>
            </div>


            {/* Card 2 - Data-Driven Growth (Icon and content shifted more right) */}
            <div className="bg-[#FFE000] rounded-xl shadow-lg flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] lg:pl-[220px] pr-4 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center absolute left-4 sm:left-8 lg:left-36 z-30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-[#363A43] font-poppins">Data-Driven Growth</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#363A43]/70 leading-relaxed">Using insights and analytics to drive smarter decisions and better results.</p>
              </div>
            </div>


            {/* Card 3 - Trusted Partnerships (No shadow/border) */}
            <div className="bg-white rounded-xl flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] pr-4 sm:pr-8 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE000] rounded-full flex items-center justify-center absolute left-4 sm:left-8">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-[#363A43] font-poppins">Trusted Partnerships</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#363A43]/70 leading-relaxed">Building lasting relationships based on transparency, trust, and results.</p>
              </div>
            </div>


          </div>


        </div>
      </div>
    </section>
  );
}
