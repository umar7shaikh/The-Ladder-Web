'use client';

import Link from 'next/link';
import { TrendingUp, Instagram, DollarSign, Palette } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: 'SEO Optimization',
      description: "Boost your website's visibility on search engines with on-page, off-page, and technical SEO strategies, driving more organic traffic and quality leads."
    },
    {
      icon: <Instagram className="w-full h-full" />,
      title: 'Social Media Marketing',
      description: 'Design and manage engaging social media campaigns that increase brand awareness, foster community, and drive meaningful customer interactions.'
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      title: 'Paid Advertising',
      description: 'Execute targeted paid campaigns across platforms like Google Ads and social media to reach the right audience efficiently, maximizing ROI.'
    },
    {
      icon: <Palette className="w-full h-full" />,
      title: 'Branding & Design',
      description: "Craft a consistent brand identity with creative visuals, logos, and brand guidelines that communicate your business's values effectively."
    }
  ];

  return (
    <section className="relative w-full bg-[#363A43] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        {/* Header Container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          {/* Left - Title Section */}
          <div className="space-y-3 sm:space-y-4 flex-1">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full">
              <span className="text-[clamp(10px,2.5vw,12px)] font-bold uppercase tracking-wider text-[#363A43]">Step Up Your Marketing Game</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#FFE000] font-poppins">
              Services to Help You Climb Higher
            </h2>

            {/* Subtitle */}
            <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed text-[#FFF9CE]">
              From strategy to execution, we provide every step you need to grow your online presence.
            </p>
          </div>

          {/* Right - CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 lg:self-start lg:pt-8">
            <Link
              href="/marketing/services"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 h-[clamp(44px,10vw,48px)] bg-[#FFE000] text-[#363A43] rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold hover:bg-[#E6CA00] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              View All Services
            </Link>
            <Link
              href="/marketing/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 h-[clamp(44px,10vw,48px)] bg-transparent border-2 border-[#FFE000] text-[#FFE000] rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold hover:bg-[#FFE000] hover:text-[#363A43] transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-start text-left p-5 sm:p-6 md:p-8 rounded-2xl bg-[#4A4F5A] hover:bg-[#525861] transition-all duration-300 group space-y-3 sm:space-y-4"
            >
              {/* Icon Circle - Yellow Background */}
              <div className="w-[clamp(52px,11vw,64px)] h-[clamp(52px,11vw,64px)] flex items-center justify-center bg-[#FFE000] rounded-full text-[#363A43] p-3.5 md:p-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[clamp(16px,4vw,20px)] font-bold text-[#FFE000] font-poppins">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[clamp(13px,3vw,16px)] leading-relaxed text-[#FFF9CE]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
