'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceDetails() {
  const services = [
    {
      id: 1,
      badge: 'Designing',
      title: 'Graphic Designing',
      description: 'We help businesses build a strong digital foundation through creative visual storytelling that brings brands to life. From logos to marketing collateral, our designs ensure your brand communicates clearly and memorably.',
      image: '/e1.webp',
      imageAlt: 'Graphic design tools and laptop mockup'
    },
    {
      id: 2,
      badge: 'Our Expertise',
      title: 'Web Development Services',
      description: 'We help businesses build a strong digital foundation through customized website solutions that blend design, functionality, and performance. From corporate sites to eCommerce platforms, our web development services ensure your brand makes a lasting impact online.',
      image: '/e2.webp',
      imageAlt: 'Web development project dashboard'
    },
    {
      id: 3,
      badge: 'Marketing',
      title: 'Social Media Marketing',
      description: 'We help businesses build a strong digital foundation through strategic social media campaigns that connect brands with their audience. By crafting engaging content and leveraging the right platforms, we turn followers into loyal customers.',
      image: '/e3.webp',
      imageAlt: 'Social media marketing platforms'
    },
    {
      id: 4,
      badge: 'SEO & Backlinking',
      title: 'Boost Rankings with SEO',
      description: 'Climb higher in search rankings with data-driven SEO and strong backlink strategies that put your brand in front of the right audience.',
      image: '/e4.webp',
      imageAlt: 'SEO dashboard with analytics'
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 space-y-20 lg:space-y-32">
        
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={service.id}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 xl:gap-16`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#363A43]">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363A43] font-poppins leading-tight">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-[#363A43]/80 leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full aspect-[4/3]">

                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
