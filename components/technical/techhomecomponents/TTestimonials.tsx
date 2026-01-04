'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  videoThumbnail?: string;
  hasVideo: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'The Ladders Tech built more than a website for Meet My Pets — they delivered a system that actually helped us grow.',
    hasVideo: true,
  },
  {
    id: 2,
    text: 'The Ladders Tech built more than a website for Meet My Pets — they delivered a system that actually helped us grow.',
    hasVideo: true,
  },
  {
    id: 3,
    text: 'The Ladders Tech built more than a website for Meet My Pets — they delivered a system that actually helped us grow.',
    hasVideo: true,
  },
  {
    id: 4,
    text: 'The Ladders Tech built more than a website for Meet My Pets — they delivered a system that actually helped us grow.',
    hasVideo: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="bg-[#1E1E1E] py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-[#D8F209] uppercase tracking-wider text-[clamp(11px,2.5vw,12px)] font-medium mb-3 sm:mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-[#D8F209] font-bold text-[clamp(28px,5vw,56px)] leading-tight px-4">
            Trusted By Teams Building For The Long Term
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-0 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-10 
                     w-[clamp(44px,10vw,56px)] h-[clamp(44px,10vw,56px)] 
                     bg-[#D8F209] rounded-full items-center justify-center
                     hover:bg-[#c4db08] transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#D8F209] focus:ring-offset-2 focus:ring-offset-[#1E1E1E]
                     active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E1E1E]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-0 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-10 
                     w-[clamp(44px,10vw,56px)] h-[clamp(44px,10vw,56px)] 
                     bg-[#D8F209] rounded-full items-center justify-center
                     hover:bg-[#c4db08] transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#D8F209] focus:ring-offset-2 focus:ring-offset-[#1E1E1E]
                     active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E1E1E]" />
          </button>

          {/* Testimonial Cards - Touch enabled */}
          <div 
            className="overflow-hidden md:px-8 lg:px-16 xl:px-20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6 lg:gap-12"
              style={{
                transform: isMobile 
                  ? `translateX(calc(-${currentIndex} * (100% + 1rem)))`
                  : `translateX(calc(-${currentIndex} * (50% + 1.5rem)))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="bg-[#b0b0b0a1] backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 
                           flex flex-col justify-between gap-6 sm:gap-8
                           transition-colors duration-300
                           flex-shrink-0 
                           w-full md:w-[calc(50%-1.5rem)]"
                >
                  {/* Badge */}
                  <div className="flex items-start justify-between">
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#FBFFDE] rounded-full 
                                   text-[clamp(10px,2.5vw,12px)] font-medium text-[#FBFFDE] uppercase tracking-wider">
                      SUCCESS STORY
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#FBFFDE] text-[clamp(15px,3.5vw,18px)] leading-relaxed flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Video Thumbnail Placeholder */}
                  <div className="bg-[#808080] rounded-lg h-40 sm:h-48 md:h-56 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#606060] rounded-lg flex items-center justify-center">
                      <div className="w-full h-full opacity-30 flex items-center justify-center">
                        <svg 
                          className="w-8 h-8 sm:w-10 sm:h-10 text-[#FBFFDE]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Play Video Link */}
                  {testimonial.hasVideo && (
                    <button
                      className="flex items-center gap-2 text-[#FBFFDE] text-[clamp(13px,3vw,15px)] 
                               font-medium hover:gap-3 transition-all duration-300 group
                               focus:outline-none focus:ring-2 focus:ring-[#FBFFDE] focus:ring-offset-2 
                               focus:ring-offset-[#b0b0b0a1] rounded-md px-2 py-1 self-start"
                      aria-label="Play video testimonial"
                    >
                      <span>Play Video</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 
                       focus:ring-[#D8F209] focus:ring-offset-2 focus:ring-offset-[#1E1E1E]
                       ${
                         index === currentIndex
                           ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#D8F209]'
                           : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#B0B0B0] hover:bg-[#D8F209]/60'
                       }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
