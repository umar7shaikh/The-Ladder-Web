// components/marketing/aboutcomponents/CoreValues.tsx
'use client';

import React from 'react';

export default function CoreValues() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="inline-flex items-center justify-center px-4 sm:px-5 py-2 bg-[#FFE000] rounded-full shadow-sm">
            <span className="text-[clamp(11px,2.5vw,14px)] font-bold tracking-wide text-[#363A43]">OUR CORE VALUES</span>
          </div>
          <h2 className="text-[clamp(28px,5vw,56px)] font-bold text-[#363A43] font-poppins leading-tight">
            The Principles That<br className="hidden md:block" /> Guide Every Step
          </h2>
        </div>

        {/* Main Layout Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 md:gap-y-20 lg:gap-y-24 gap-x-8 sm:gap-x-12 lg:gap-x-48 xl:gap-x-64 relative z-10">
            
            {/* Top Left - Integrity */}
            <ValueCard 
              icon={<ShieldIcon />}
              title="Integrity First"
              description="We believe in honest, transparent communication and building trust with every client."
            />

            {/* Top Right - Innovation */}
            <ValueCard 
              icon={<BulbIcon />}
              title="Innovation at Every Step"
              description="Creative thinking and fresh ideas drive us to craft solutions that stand out."
            />

            {/* Bottom Left - Collaboration */}
            <ValueCard 
              icon={<HandshakeIcon />} 
              title="Collaboration Wins"
              description="We work closely with our clients as partners, not just service providers."
            />

            {/* Bottom Right - Growth */}
            <ValueCard 
              icon={<ChartIcon />}
              title="Growth Together"
              description="Your success is our success — we climb the ladder side by side with our clients."
            />

          </div>

          {/* Central Ladder Element & L-Shaped Connectors */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0">
            
            {/* The Connecting Lines SVG Layer */}
            <svg className="absolute w-full h-full" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top Left L-Shape */}
              <path d="M 250 280 L 250 180 Q 250 150 220 150 L 40 150" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 6" />
              <rect x="35" y="146" width="8" height="8" fill="#9CA3AF" transform="rotate(45 39 150)" />

              {/* Top Right L-Shape */}
              <path d="M 350 280 L 350 180 Q 350 150 380 150 L 560 150" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 6" />
              <rect x="556" y="146" width="8" height="8" fill="#9CA3AF" transform="rotate(45 560 150)" />

              {/* Bottom Left L-Shape */}
              <path d="M 250 320 L 250 420 Q 250 450 220 450 L 40 450" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 6" />
              <rect x="35" y="446" width="8" height="8" fill="#9CA3AF" transform="rotate(45 39 450)" />

              {/* Bottom Right L-Shape */}
              <path d="M 350 320 L 350 420 Q 350 450 380 450 L 560 450" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 6" />
              <rect x="556" y="446" width="8" height="8" fill="#9CA3AF" transform="rotate(45 560 450)" />
            </svg>

            {/* Concentric Circles (Ripples) */}
            <div className="absolute w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full bg-[#FFE000] opacity-5"></div>
            <div className="absolute w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-[#FFE000] opacity-10"></div>
            <div className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#FFE000] opacity-20"></div>

            {/* Center Circle */}
            <div className="relative w-14 h-14 lg:w-16 lg:h-16 bg-[#FFE000] rounded-full flex items-center justify-center shadow-sm z-20">
              {/* NEW LADDER SVG */}
              <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4219 1.4573C30.4219 0.652456 31.0743 0 31.8792 0C32.684 0 33.3365 0.652458 33.3365 1.45731V46.1791H30.4219V1.4573Z" fill="#363A43"/>
                <rect x="16.9404" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                <rect x="16.9404" y="10.2234" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                <rect x="16.9404" y="20.4485" width="2.91461" height="9.67145" rx="1.45731" fill="#363A43"/>
                <path d="M16.9404 29.8758C16.9404 29.0709 17.5929 28.4185 18.3977 28.4185C19.2026 28.4185 19.855 29.0709 19.855 29.8758V46.1796H16.9404V29.8758Z" fill="#363A43"/>
                <rect x="29.6924" y="7.46021" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 7.46021)" fill="#363A43"/>
                <rect x="29.6924" y="17.6858" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 17.6858)" fill="#363A43"/>
                <rect x="29.6924" y="27.9094" width="2.21062" height="12.7514" rx="1.10531" transform="rotate(90 29.6924 27.9094)" fill="#363A43"/>
                <path d="M27.4818 38.1331C28.7027 38.1331 29.6924 39.1228 29.6924 40.3437H16.941C16.941 39.1228 17.9307 38.1331 19.1516 38.1331H27.4818Z" fill="#363A43"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// -- Sub Components & Icons --

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className={`w-full bg-[#FFE000] rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10`}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-[#363A43] flex-shrink-0">
        {icon}
      </div>
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-[clamp(18px,4vw,24px)] font-bold text-[#363A43] font-poppins">{title}</h3>
        <p className="text-[#363A43]/80 leading-relaxed font-medium text-[clamp(13px,3vw,16px)]">
          {description}
        </p>
      </div>
    </div>
  );
}

// Standard Icons
const ShieldIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const BulbIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"></path><path d="M12 17v4"></path><path d="M12 1a6 6 0 0 0-6 6c0 3.866 6 12 6 12s6-8.134 6-12a6 6 0 0 0-6-6Z"></path></svg>
);

const HandshakeIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 12-7 7-7-7"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
