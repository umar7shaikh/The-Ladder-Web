// components/marketing/aboutcomponents/CoreValues.tsx
'use client';

export default function CoreValues() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
            <span className="text-xs font-semibold text-[#363A43]">Our Core Values</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-tight font-bold text-[#363A43] font-poppins">
            The Principles That Guide Every Step
          </h2>
        </div>

        {/* Cards Grid with Center Element */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 max-w-7xl mx-auto">
          
          {/* Card 1 - Integrity First (Top Left) */}
          <div className="bg-[#FFE000] rounded-2xl p-8 shadow-lg flex flex-col gap-4 relative z-10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#363A43] font-poppins">Integrity First</h3>
              <p className="text-sm md:text-base text-[#363A43]/80 leading-relaxed">
                We believe in honest, transparent communication and building trust with every client.
              </p>
            </div>
          </div>

          {/* Card 2 - Innovation at Every Step (Top Right) */}
          <div className="bg-[#FFE000] rounded-2xl p-8 shadow-lg flex flex-col gap-4 relative z-10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#363A43] font-poppins">Innovation at Every Step</h3>
              <p className="text-sm md:text-base text-[#363A43]/80 leading-relaxed">
                Creative thinking and fresh ideas drive us to craft solutions that stand out.
              </p>
            </div>
          </div>

          {/* Card 3 - Collaboration Wins (Bottom Left) */}
          <div className="bg-[#FFE000] rounded-2xl p-8 shadow-lg flex flex-col gap-4 relative z-10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#363A43] font-poppins">Collaboration Wins</h3>
              <p className="text-sm md:text-base text-[#363A43]/80 leading-relaxed">
                We work closely with our clients as partners, not just service providers.
              </p>
            </div>
          </div>

          {/* Card 4 - Growth Together (Bottom Right) */}
          <div className="bg-[#FFE000] rounded-2xl p-8 shadow-lg flex flex-col gap-4 relative z-10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-[#363A43] font-poppins">Growth Together</h3>
              <p className="text-sm md:text-base text-[#363A43]/80 leading-relaxed">
                Your success is our success — we climb the ladder side by side with our clients.
              </p>
            </div>
          </div>

          {/* Center Element - Smaller Yellow Gradient Circles with Ladder and Arrows */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            {/* Smaller Yellow Gradient Concentric Circles */}
            <div className="relative w-40 h-40">
              {/* Outer Ring - Yellow */}
              <div className="absolute inset-0 rounded-full bg-[#FFE000] opacity-20"></div>
              {/* Middle Ring - Yellow */}
              <div className="absolute inset-[15%] rounded-full bg-[#FFE000] opacity-40"></div>
              {/* Inner Ring - Yellow */}
              <div className="absolute inset-[30%] rounded-full bg-[#FFE000] opacity-60"></div>
              {/* Center Circle - Yellow */}
              <div className="absolute inset-[45%] rounded-full bg-[#FFE000]"></div>
              
              {/* Ladder Icon in Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.4219 1.4573C30.4219 0.652456 31.0743 0 31.8792 0C32.684 0 33.3365 0.652458 33.3365 1.45731V46.1791H30.4219V1.4573Z" fill="#363A43"/>
                  <rect x="16.9404" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                  <rect x="16.9404" y="10.2234" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                  <rect x="16.9404" y="20.4485" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                  <path d="M16.9404 29.8758C16.9404 29.0709 17.5929 28.4185 18.3977 28.4185C19.2026 28.4185 19.855 29.0709 19.855 29.8758V46.1796H16.9404V29.8758Z" fill="#363A43"/>
                  <rect x="29.6924" y="7.46021" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 7.46021)" fill="#363A43"/>
                  <rect x="29.6924" y="17.6858" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 17.6858)" fill="#363A43"/>
                  <rect x="29.6924" y="27.9094" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 27.9094)" fill="#363A43"/>
                  <path d="M27.4818 38.1331C28.7027 38.1331 29.6924 39.1228 29.6924 40.3437H16.941C16.941 39.1228 17.9307 38.1331 19.1516 38.1331H27.4818Z" fill="#363A43"/>
                  <path d="M48 48C47.0892 47.9309 37.4669 46.1348 24.1366 46.1348C10.8063 46.1348 0.455408 47.9654 0 48C0 47.256 10.8063 43.6133 24.1366 43.6133C37.4669 43.6133 48 47.256 48 48Z" fill="#363A43"/>
                </svg>
              </div>
            </div>

            {/* Arrows from center pointing outward to cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Arrow to top-left card */}
              <div className="absolute -top-32 -left-32">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 60 L10 10" stroke="#363A43" strokeWidth="2" strokeDasharray="4 4" opacity="0.4"/>
                  <polygon points="5,15 10,10 15,5" fill="#363A43" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Arrow to top-right card */}
              <div className="absolute -top-32 -right-32">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 60 L110 10" stroke="#363A43" strokeWidth="2" strokeDasharray="4 4" opacity="0.4"/>
                  <polygon points="105,5 110,10 115,15" fill="#363A43" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Arrow to bottom-left card */}
              <div className="absolute -bottom-32 -left-32">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 60 L10 110" stroke="#363A43" strokeWidth="2" strokeDasharray="4 4" opacity="0.4"/>
                  <polygon points="5,105 10,110 15,115" fill="#363A43" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Arrow to bottom-right card */}
              <div className="absolute -bottom-32 -right-32">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 60 L110 110" stroke="#363A43" strokeWidth="2" strokeDasharray="4 4" opacity="0.4"/>
                  <polygon points="115,105 110,110 105,115" fill="#363A43" opacity="0.4"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
