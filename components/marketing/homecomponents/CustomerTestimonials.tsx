"use client";

import React, { useState, useRef, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "I never felt the need to hire an in-house marketing team because The Ladders Media handles everything I need. From social media management to detailed documentation like white papers and case studies, they understand the requirements and deliver exactly what we expect.",
    name: "Moiz. J",
    position: "CEO, CloudSharks",
    avatar: "/avatar1.webp"
  },
  {
    id: 2,
    rating: 5,
    text: "In the pet grooming industry, turning your work into a steady business is tough. The Ladders Media helped me build a clear strategy with ads, social media setup and proper guidelines that pushed my brand in the right direction.",
    name: "Umer. K",
    position: "Founder, Meet My Pets",
    avatar: "/avatar2.webp"
  },
  {
    id: 3,
    rating: 5,
    text: "The Ladders Media supported us with a complete marketing setup and helped identify the gaps we were missing in our business. Their guidance made a real difference in how we operate today.",
    name: "Saber. S",
    position: "Founder, Skytech Technologies",
    avatar: "/avatar3.webp"
  },
  {
    id: 4,
    rating: 5,
    text: "When you're starting a company from scratch, you need the right digital marketing support. The Ladders Media helped me with logo design, brand identity, documentation and more. They stand out in every area.",
    name: "Farhan. K",
    position: "Founder, FranzCo & Farhan Films",
    avatar: "/avatar4.webp"
  },
  {
    id: 5,
    rating: 5,
    text: "I was searching for a logo that could truly represent my brand. The Ladders Media delivered exactly what I had in mind because they take the time to understand you and your business.",
    name: "Sidhesh. H",
    position: "Founder, Cake Layers",
    avatar: "/avatar5.webp"
  },
  {
    id: 6,
    rating: 5,
    text: "Sometimes you have a design in your mind, but can't explain it clearly. The Ladders Media stepped in, asked the right questions and turned my ideas into exactly what I imagined.",
    name: "Atik. S",
    position: "Founder, VMIT Consulting",
    avatar: "/avatar6.webp"
  }
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const options = {
      root: scrollContainerRef.current,
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  const handlePrev = () => {
    if (isMobile && scrollContainerRef.current) {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      cardRefs.current[newIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (isMobile && scrollContainerRef.current) {
      const newIndex = currentIndex < TESTIMONIALS.length - 1 ? currentIndex + 1 : TESTIMONIALS.length - 1;
      cardRefs.current[newIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }
  };

  const handleDotClick = (index: number) => {
    if (isMobile && scrollContainerRef.current) {
      cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="relative w-full bg-[#363A43] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 sm:mb-4 bg-[#FFE000] rounded-full">
            <span className="text-[clamp(10px,2.5vw,12px)] font-bold uppercase tracking-wider text-[#363A43]">
              TESTIMONIALS
            </span>
          </div>
          
          <h2 className="text-[clamp(28px,5vw,48px)] font-bold text-[#FFE000] mb-3 sm:mb-4 font-poppins">
            Customer Testimonials
          </h2>
          
          <p className="text-[#FFF9CE] text-[clamp(14px,3.5vw,18px)] leading-relaxed max-w-2xl mx-auto">
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
          <div className="relative overflow-hidden">
            {/* Gradient Fade on Right Edge - Hidden on Mobile */}
            {!isMobile && (
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-linear-to-l from-[#363A43] via-[#363A43]/80 to-transparent z-10 pointer-events-none" />
            )}
            
            {/* Desktop: Transform-based | Mobile: Scroll-based */}
            {isMobile ? (
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                <div className="flex gap-4 sm:gap-6 pb-4">
                  {TESTIMONIALS.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      ref={(el) => { cardRefs.current[index] = el; }}
                      className="bg-[#4A4F5A] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 shadow-xl transition-all duration-300 hover:shadow-2xl shrink-0 carousel-card snap-start"
                    >
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "#FFE000" : "#6B7280"}
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[#FFF9CE] text-[clamp(13px,3vw,16px)] leading-relaxed grow">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFE000]/20 flex items-center justify-center overflow-hidden shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFE000]/40 flex items-center justify-center text-[#363A43] font-bold text-base sm:text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[#FFE000] font-semibold text-[clamp(13px,3vw,16px)] truncate">
                            {testimonial.name}
                          </span>
                          <span className="text-[#FFF9CE]/70 text-[clamp(11px,2.5vw,14px)] truncate">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div 
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3.5)}%)`,
                }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-[#4A4F5A] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shrink-0 carousel-card"
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "#FFE000" : "#6B7280"}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#FFF9CE] text-[clamp(13px,3vw,16px)] leading-relaxed grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFE000]/20 flex items-center justify-center overflow-hidden shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFE000]/40 flex items-center justify-center text-[#363A43] font-bold text-base sm:text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#FFE000] font-semibold text-[clamp(13px,3vw,16px)] truncate">
                          {testimonial.name}
                        </span>
                        <span className="text-[#FFF9CE]/70 text-[clamp(11px,2.5vw,14px)] truncate">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 lg:mt-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
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
        
        @media (max-width: 639px) {
          .carousel-card {
            width: calc(100vw - 80px);
            min-width: calc(100vw - 80px);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
