'use client';

import React from 'react';
import { Target, TrendingUp, DollarSign, Share2 } from 'lucide-react';

export default function TargetedAds() {
  const features = [
    {
      icon: <Target className="w-full h-full" />,
      title: 'Audience Targeting',
      description: 'Identify and target high-value customer segments with advanced audience filters, ensuring every ad reaches people most likely to convert.'
    },
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: 'Performance Tracking',
      description: 'Track ad engagement and conversions in real time with detailed analytics dashboards that highlight what\'s working and what needs improvement.'
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      title: 'Budget Optimization',
      description: 'Allocate budget intelligently across campaigns to minimize waste and maximize ROI with continuous adjustments driven by performance insights.'
    },
    {
      icon: <Share2 className="w-full h-full" />,
      title: 'Cross-Platform Reach',
      description: 'Run seamless ad campaigns across Google, Meta, and other platforms to expand visibility and reach customers wherever they are most active.'
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Side - Header */}
          <div className="w-full lg:w-2/5 space-y-3 sm:space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full">
              <span className="text-[clamp(10px,2.5vw,12px)] font-bold uppercase tracking-wider text-[#363A43]">
                Paid Ad Campaigns
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[#363A43] font-poppins leading-tight">
              Maximize ROI with Targeted Ads
            </h2>

            {/* Description */}
            <p className="text-[clamp(14px,3.5vw,18px)] text-[#363A43]/70 leading-relaxed">
              Drive measurable results across platforms with precision-focused ad strategies.
            </p>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="w-full lg:w-3/5 space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#FFE000] rounded-2xl p-5 sm:p-6 md:p-8 space-y-2 sm:space-y-3 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-[clamp(44px,10vw,56px)] h-[clamp(44px,10vw,56px)] bg-[#363A43] rounded-full flex items-center justify-center text-[#FFE000] p-3">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[clamp(18px,4vw,24px)] font-bold text-[#363A43] font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[clamp(13px,3vw,16px)] text-[#363A43]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
