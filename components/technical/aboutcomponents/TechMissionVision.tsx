'use client';

export default function TechMissionVision() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#1E1E1E]"></div>
        <div className="hidden lg:block w-1/2 bg-[#0F0F0F]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-14 lg:gap-16 min-h-[500px]">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-[38%] flex items-center">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-[536px]">
              
              {/* Badge */}
              <div className="inline-block w-fit">
                <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
                  Our Mission & Vision
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#D8F209]">
                Transforming Business Through Technology
              </h2>

              {/* Description */}
              <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#FBFFDE]/80">
                We believe technology should empower, not complicate. Our mission is to deliver intelligent, scalable solutions that turn complex challenges into competitive advantages. We envision a future where every organization has access to enterprise-grade technical innovation.
              </p>
            </div>
          </div>

          {/* Center - Visual Element */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80">
              {/* Outer Ring - Yellow */}
              <div className="absolute inset-0 rounded-full bg-[#D8F209]"></div>
              {/* Fourth Ring - Dark */}
              <div className="absolute inset-[10%] rounded-full bg-[#0F0F0F]"></div>
              {/* Third Ring - Yellow */}
              <div className="absolute inset-[20%] rounded-full bg-[#D8F209]"></div>
              {/* Second Ring - Dark */}
              <div className="absolute inset-[30%] rounded-full bg-[#0F0F0F]"></div>
              {/* Center Circle - Yellow */}
              <div className="absolute inset-[40%] rounded-full bg-[#D8F209]"></div>
            </div>
          </div>

          {/* Right Side - Value Cards */}
          <div className="w-full lg:w-[52%] lg:pl-8 xl:pl-12 2xl:pl-16 flex flex-col gap-8 sm:gap-10 lg:gap-12 z-10">
            
            {/* Card 1 - Innovation First */}
            <div className="bg-[#252525] border border-[#333333] rounded-xl flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] pr-4 sm:pr-8 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#D8F209] rounded-full flex items-center justify-center absolute left-4 sm:left-8">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E1E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-white">Innovation First</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#FBFFDE]/70 leading-relaxed">Staying ahead of technological curves to deliver next-generation solutions.</p>
              </div>
            </div>

            {/* Card 2 - Scale & Performance */}
            <div className="bg-[#D8F209] rounded-xl flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] lg:pl-[220px] pr-4 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center absolute left-4 sm:left-8 lg:left-36 z-30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#D8F209]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-[#1E1E1E]">Scale & Performance</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#1E1E1E]/80 leading-relaxed">Building systems that grow with your business without compromising reliability.</p>
              </div>
            </div>

            {/* Card 3 - Partnership Approach */}
            <div className="bg-[#252525] border border-[#333333] rounded-xl flex items-center gap-3 relative min-h-[120px] sm:min-h-[138px] pl-[80px] sm:pl-[100px] pr-4 sm:pr-8 py-5 sm:py-[22px]">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#D8F209] rounded-full flex items-center justify-center absolute left-4 sm:left-8">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E1E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-white">True Partnership</h3>
                <p className="text-[clamp(12px,3vw,14px)] text-[#FBFFDE]/70 leading-relaxed">We're invested in your success, acting as an extension of your team.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
