// components/marketing/homecomponents/WhyChooseUs.tsx
'use client';

import { FaHandshake, FaRocket, FaStar, FaUsers } from 'react-icons/fa';

export default function WhyChooseUs() {
  const stats = [
    {
      icon: <FaHandshake className="w-full h-full" />,
      value: '15+',
      label: 'Trusted Partners'
    },
    {
      icon: <FaRocket className="w-full h-full" />,
      value: '18+',
      label: 'Projects Delivered'
    },
    {
      icon: <FaStar className="w-full h-full" />,
      value: '100%',
      label: 'Happy Customers'
    },
    {
      icon: <FaUsers className="w-full h-full" />,
      value: '50+',
      label: 'Team members'
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 2xl:px-48">
        
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#FFE000] rounded-full">
            <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-[#363A43]">Our Edge in Digital Marketing</span>
          </div>

          {/* H2 Title */}
          <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#363A43] font-poppins">
            Why Businesses Choose The Ladder
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed text-[#363A43]/80 max-w-3xl mx-auto">
            We don't just run campaigns — we build ladders for brands to rise higher, step by step.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-2xl border-2 border-[#FFE000]/30 hover:border-[#FFE000] group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(160px)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Icon Circle - Left */}
              <div className="w-[clamp(48px,10vw,56px)] h-[clamp(48px,10vw,56px)] flex-shrink-0 flex items-center justify-center bg-[#FFE000] rounded-full text-[#363A43] p-3">
                {stat.icon}
              </div>

              {/* Text Content - Right */}
              <div className="flex flex-col gap-1">
                {/* Value */}
                <h3 className="text-[clamp(28px,6vw,40px)] font-bold text-[#363A43] font-poppins leading-none">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-[clamp(13px,3vw,16px)] text-[#363A43]/80 font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
