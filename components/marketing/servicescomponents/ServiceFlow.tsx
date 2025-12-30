'use client';

import React from 'react';
import { Monitor, Instagram, Palette, Link2, Mail, Target } from 'lucide-react';

export default function ServiceFlow() {
  const services = [
    {
      icon: <Monitor className="w-full h-full" />,
      title: 'Web Development',
      description: 'Responsive websites designed to attract and convert.'
    },
    {
      icon: <Instagram className="w-full h-full" />,
      title: 'Social Media Marketing',
      description: 'Grow your audience and boost online engagement.'
    },
    {
      icon: <Palette className="w-full h-full" />,
      title: 'Graphic Designing',
      description: 'Creative visuals that reflect your unique identity.'
    },
    {
      icon: <Link2 className="w-full h-full" />,
      title: 'SEO & Backlinking',
      description: 'Boost visibility and drive strong organic growth.'
    },
    {
      icon: <Mail className="w-full h-full" />,
      title: 'Email Marketing',
      description: 'Boost visibility and drive strong organic growth.'
    },
    {
      icon: <Target className="w-full h-full" />,
      title: 'Paid Ads Campaigns',
      description: 'Grow your audience and boost online engagement.'
    }
  ];

  return (
    <section className="relative w-full bg-[#363A43] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-[#FFE000] rounded-full">
            <span className="text-xs font-bold uppercase tracking-wider text-[#363A43]">
              OUR SERVICES AT A GLANCE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFE000] mb-4 font-poppins">
            Step Into Growth with Our Services
          </h2>
          
          <p className="text-[#FFF9CE] text-base md:text-lg max-w-4xl mx-auto">
            From boosting visibility to driving conversions, The Ladder covers every step of your digital growth journey. Here's a quick look at what we do best.
          </p>
        </div>

        {/* 3x2 Grid with Gradient Borders */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Intersection Badges - Positioned at the junctions of the 3-column grid */}
          <div className="hidden lg:block">
            {/* Left Intersection */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20">
               <LadderBadge />
            </div>
            {/* Right Intersection */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-20">
               <LadderBadge />
            </div>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            
            {/* Box 1 - Top Left - Web Development */}
            <div 
              className="h-64 relative gradient-border-rb flex flex-col items-center justify-center text-center p-6 space-y-4"
              style={{
                background: 'linear-gradient(to right, rgba(255, 224, 0, 0.05), rgba(255, 224, 0, 0.2))'
              }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[0].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[0].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[0].description}</p>
            </div>
            
            {/* Box 2 - Top Center - Social Media Marketing */}
            <div className="h-64 bg-transparent relative gradient-border-lb flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[1].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[1].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[1].description}</p>
            </div>
            
            {/* Box 3 - Top Right - Graphic Designing */}
            <div 
              className="h-64 flex flex-col items-center justify-center text-center p-6 space-y-4"
              style={{
                background: 'linear-gradient(to left, rgba(255, 224, 0, 0.05), rgba(255, 224, 0, 0.2))'
              }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[2].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[2].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[2].description}</p>
            </div>
            
            {/* Box 4 - Bottom Left - SEO & Backlinking */}
            <div className="h-64 bg-transparent relative gradient-border-tr flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[3].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[3].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[3].description}</p>
            </div>
            
            {/* Box 5 - Bottom Center - Email Marketing */}
            <div 
              className="h-64 relative gradient-border-tlr flex flex-col items-center justify-center text-center p-6 space-y-4"
              style={{
                background: 'linear-gradient(to right, rgba(255, 224, 0, 0.05), rgba(255, 224, 0, 0.2))'
              }}
            >
              <div className="right-border"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[4].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[4].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[4].description}</p>
            </div>
            
            {/* Box 6 - Bottom Right - Paid Ads Campaigns */}
            <div className="h-64 bg-transparent relative gradient-border-l flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFE000] rounded-lg flex items-center justify-center text-[#363A43] p-3">
                {services[5].icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFE000] font-poppins">{services[5].title}</h3>
              <p className="text-sm text-[#FFF9CE] max-w-[200px]">{services[5].description}</p>
            </div>
            
          </div>
        </div>

      </div>

      {/* Gradient Border Styles */}
      <style jsx>{`
        .gradient-border-rb::after,
        .gradient-border-rb::before {
          content: '';
          position: absolute;
        }
        .gradient-border-rb::after {
          right: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
        .gradient-border-rb::before {
          bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }

        .gradient-border-lb::after,
        .gradient-border-lb::before {
          content: '';
          position: absolute;
        }
        .gradient-border-lb::after {
          left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
        .gradient-border-lb::before {
          bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }

        .gradient-border-tr::after,
        .gradient-border-tr::before {
          content: '';
          position: absolute;
        }
        .gradient-border-tr::after {
          right: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
        .gradient-border-tr::before {
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }

        .gradient-border-tlr::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
        .gradient-border-tlr::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
        .gradient-border-tlr .right-border {
          position: absolute;
          right: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }

        .gradient-border-l::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 1), rgba(255, 224, 0, 0.3));
        }
      `}</style>
    </section>
  );
}

{/* Badge Sub-component */}
function LadderBadge() {
  return (
    <div className="relative flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#363A43] border border-[#FFE000]/30 shadow-xl">
      {/* Yellow dots on the ring */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FFE000] rounded-full shadow-[0_0_6px_#FFE000]"></div>
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FFE000] rounded-full shadow-[0_0_6px_#FFE000]"></div>
      
      {/* Inner solid circle with Ladder */}
      <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFE000] shadow-[0_0_20px_rgba(255,224,0,0.3)]">
        {/* Your Custom Ladder SVG */}
        <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto lg:w-3.5">
          <path d="M8.42529 0.910817C8.42529 0.407787 8.83308 0 9.33611 0C9.83914 0 10.2469 0.407786 10.2469 0.910816V28.8618H8.42529V0.910817Z" fill="#363A43"/>
          <rect width="1.82163" height="6.04463" rx="0.910816" fill="#363A43"/>
          <rect y="6.39001" width="1.82163" height="6.04463" rx="0.910816" fill="#363A43"/>
          <rect y="12.7802" width="1.82163" height="6.04463" rx="0.910816" fill="#363A43"/>
          <path d="M0 18.6719C0 18.1689 0.407786 17.7611 0.910816 17.7611C1.41385 17.7611 1.82163 18.1689 1.82163 18.6719V28.8618H0V18.6719Z" fill="#363A43"/>
          <rect x="7.96973" y="4.66309" width="1.38163" height="7.96964" rx="0.690815" transform="rotate(90 7.96973 4.66309)" fill="#363A43"/>
          <rect x="7.96973" y="11.053" width="1.38163" height="7.96964" rx="0.690815" transform="rotate(90 7.96973 11.053)" fill="#363A43"/>
          <rect x="7.96973" y="17.443" width="1.38163" height="7.96964" rx="0.690815" transform="rotate(90 7.96973 17.443)" fill="#363A43"/>
          <path d="M6.5881 23.8331C7.35115 23.8331 7.96973 24.4517 7.96973 25.2148H8.72612e-05C8.72612e-05 24.4517 0.618664 23.8331 1.38172 23.8331H6.5881Z" fill="#363A43"/>
        </svg>
      </div>
    </div>
  );
}
