"use client";

import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    avatar: "/avatar1.webp"
  },
  {
    id: 2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    avatar: "/avatar2.webp"
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    avatar: "/avatar3.webp"
  },
  {
    id: 4,
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    avatar: "/avatar4.webp"
  },
  {
    id: 5,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    avatar: "/avatar5.webp"
  }
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-[#363A43] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-[#FFE000] rounded-full">
            <span className="text-xs font-bold uppercase tracking-wider text-[#363A43]">
              TESTIMONIALS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFE000] mb-4 font-poppins">
            Customer Testimonials
          </h2>
          
          <p className="text-[#FFF9CE] text-lg max-w-2xl mx-auto">
            Hear What Our Clients Say
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow - Hidden on small mobile */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 lg:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#FFE000] rounded-full items-center justify-center hover:bg-[#FFF9CE] transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#363A43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Cards Container with Gradient Mask */}
          <div className="relative overflow-hidden touch-pan-y">
            {/* Gradient Fade on Right Edge */}
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-[#363A43] via-[#363A43]/80 to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable Cards Track */}
            <div 
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3.5)}%)`,
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#4A4F5A] rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-shrink-0 carousel-card"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={i < testimonial.rating ? "#FFE000" : "#6B7280"}
                        className="transition-colors"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#FFF9CE] text-sm md:text-base leading-relaxed flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 rounded-full bg-[#FFE000]/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#FFE000]/40 flex items-center justify-center text-[#363A43] font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[#FFE000] font-semibold text-sm md:text-base truncate">
                        {testimonial.name}
                      </span>
                      <span className="text-[#FFF9CE]/70 text-xs md:text-sm truncate">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Hidden on small mobile */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#FFE000] rounded-full items-center justify-center hover:bg-[#FFF9CE] transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#363A43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 lg:mt-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-[#FFE000]'
                  : 'w-2 h-2 bg-[#FFE000]/40 hover:bg-[#FFE000]/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Responsive Card Width Styles */}
      <style jsx>{`
        .carousel-card {
          width: calc((100% - 72px) / 3.5);
        }
        
        @media (max-width: 1023px) {
          .carousel-card {
            width: calc((100% - 48px) / 2.5);
          }
        }
        
        @media (max-width: 767px) {
          .carousel-card {
            width: calc((100% - 32px) / 1.4);
          }
        }
        
        @media (max-width: 480px) {
          .carousel-card {
            width: calc((100% - 16px) / 1.2);
          }
        }
      `}</style>
    </section>
  );
}
