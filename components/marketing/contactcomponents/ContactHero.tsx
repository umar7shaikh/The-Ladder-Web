// components/marketing/contactcomponents/ContactHero.tsx
'use client';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      
      {/* Blurred Yellow Ellipse - Right side */}
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
      />

      <div className="relative z-10 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4 sm:gap-6 lg:gap-8 z-20">
            
            {/* Badge */}
            <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
              <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-[#363A43]">Contact Us</span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#363A43] font-poppins">
              Let's Connect and<br />Grow Together
            </h1>

            {/* Description */}
            <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#363A43]/80 max-w-xl">
              We're here to listen, support, and collaborate with you. Whether you have questions, project ideas, or simply want to explore how digital solutions can boost your business, our team is just a message away. Reach out today and let's start building something impactful together.
            </p>
          </div>

          {/* Right Side - Icons in Square Formation */}
          <div className="hidden lg:flex relative w-full lg:w-[45%] h-[350px] xl:h-[400px] items-center justify-center z-20">
            
            {/* Center Icon - User (Largest) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 xl:w-28 xl:h-28 bg-[#FFE000] bg-opacity-70 rounded-full flex items-center justify-center z-10">
              <svg className="w-9 h-9 xl:w-11 xl:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            {/* Top Left - Email */}
            <div className="absolute top-[15%] left-[20%] w-20 h-20 xl:w-24 xl:h-24 bg-[#FFE000] bg-opacity-50 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 xl:w-9 xl:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>

            {/* Top Right - Phone */}
            <div className="absolute top-[10%] right-[15%] w-24 h-24 xl:w-28 xl:h-28 bg-[#FFE000] bg-opacity-60 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>

            {/* Bottom Left - Location */}
            <div className="absolute bottom-[15%] left-[18%] w-22 h-22 xl:w-26 xl:h-26 bg-[#FFE000] bg-opacity-55 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 xl:w-[38px] xl:h-[38px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>

            {/* Bottom Right - Chat */}
            <div className="absolute bottom-[18%] right-[12%] w-24 h-24 xl:w-28 xl:h-28 bg-[#FFE000] bg-opacity-65 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>

            {/* Decorative dots connecting to center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              {/* Lines from center to corners */}
              <line x1="200" y1="200" x2="100" y2="80" stroke="#363A43" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
              <line x1="200" y1="200" x2="320" y2="70" stroke="#363A43" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
              <line x1="200" y1="200" x2="95" y2="310" stroke="#363A43" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
              <line x1="200" y1="200" x2="315" y2="315" stroke="#363A43" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
}
