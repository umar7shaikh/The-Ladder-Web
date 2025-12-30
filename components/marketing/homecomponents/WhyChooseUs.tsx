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
    <section className="relative w-full bg-white py-16 lg:py-20">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-48">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10 lg:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#FFE000] rounded-full">
            <span className="text-xs font-semibold text-[#363A43]">Our Edge in Digital Marketing</span>
          </div>

          {/* H2 Title */}
          <h2 className="text-[clamp(2rem,4vw+0.5rem,3.5rem)] leading-tight font-bold text-[#363A43] font-poppins">
            Why Businesses Choose The Ladder
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(1rem,1vw+0.5rem,1.125rem)] leading-relaxed text-[#363A43]/80 max-w-3xl mx-auto">
            We don't just run campaigns — we build ladders for brands to rise higher, step by step.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative flex items-center gap-4 p-6 rounded-2xl border-2 border-[#FFE000]/30 hover:border-[#FFE000] group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(160px)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Icon Circle - Left */}
             <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center bg-[#FFE000] rounded-full text-[#363A43] p-3">
                {stat.icon}
              </div>

              {/* Text Content - Right */}
              <div className="flex flex-col gap-1">
                {/* Value */}
                <h3 className="text-3xl lg:text-4xl font-bold text-[#363A43] font-poppins leading-none">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-sm lg:text-base text-[#363A43]/80 font-medium leading-tight">
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
