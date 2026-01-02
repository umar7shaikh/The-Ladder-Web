"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const STEPS = [
  { title: "Step 1: Discover", description: "We start by understanding your business, goals, and challenges to map out the right ladder for you." },
  { title: "Step 2: Strategy", description: "We build a custom foundation tailored to your specific market needs and growth targets." },
  { title: "Step 3: Execution", description: "Our team moves into action, implementing data-driven strategies that drive real-world results." },
  { title: "Step 4: Scale", description: "Once the foundation is solid, we help you scale your operations and reach new heights." }
];

const AnimatedCard = ({ step, index, progress }: { step: any; index: number; progress: any }) => {
  const total = STEPS.length;
  const start = index / total;
  const end = (index + 1) / total;

  const rotations = [0, 3, 6, 9];
  const baseRotation = rotations[index] || 0;
  
  const y = useTransform(progress, [start, end], [0, -900]);
  const rotateExit = useTransform(progress, [start, end], [baseRotation, baseRotation - 12]);
  const opacityExit = useTransform(progress, [start, end], [1, 0]);

  return (
    <motion.div
      style={{
        zIndex: total - index,
        y: index === total - 1 ? 0 : y,
        rotate: index === total - 1 ? baseRotation : rotateExit,
        opacity: index === total - 1 ? 1 : opacityExit,
      }}
      className="absolute w-full h-full bg-[#FFE000] p-8 md:p-10 rounded-[24px] border border-black shadow-2xl flex flex-col justify-center gap-4 text-[#363A43]"
    >
      <div className="mb-2">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl md:text-4xl font-bold font-poppins tracking-tight">{step.title}</h3>
        <p className="text-[#363A43]/90 text-base md:text-lg leading-relaxed max-w-sm font-medium">{step.description}</p>
      </div>
    </motion.div>
  );
};

const StaticCard = ({ step }: { step: any }) => {
  return (
    <div className="w-full bg-[#FFE000] p-6 rounded-[24px] border border-black shadow-2xl flex flex-col justify-center gap-4 text-[#363A43]">
      <div className="mb-2">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl md:text-4xl font-bold font-poppins tracking-tight">{step.title}</h3>
        <p className="text-[#363A43]/90 text-base md:text-lg leading-relaxed max-w-sm font-medium">{step.description}</p>
      </div>
    </div>
  );
};

export default function HowWeWork() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } 
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isHovered || !isVisible) return;

      const current = rawProgress.get();
      
      if (current <= 0 && e.deltaY < 0) return;
      if (current >= 1 && e.deltaY > 0) return;

      const delta = e.deltaY > 0 ? 0.05 : -0.05; 
      
      if (e.cancelable) e.preventDefault();
      
      const nextProgress = Math.min(Math.max(current + delta, 0), 1);
      rawProgress.set(nextProgress);
    };

    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isVisible) return;
      const touchEnd = e.touches[0].clientY;
      const delta = touchStart - touchEnd;
      
      const current = rawProgress.get();
      if (current <= 0 && delta < 0) return;
      if (current >= 1 && delta > 0) return;

      if (e.cancelable) e.preventDefault();
      
      const sensitivity = 0.005;
      rawProgress.set(Math.min(Math.max(current + delta * sensitivity, 0), 1));
      touchStart = touchEnd;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isHovered, isVisible, rawProgress, isMobile]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#363A43] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 xl:gap-16 2xl:gap-20">
          
          <div className="w-full lg:w-[48%] flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <div className="inline-flex items-center justify-center w-fit px-4 py-2 bg-[#FFE000] rounded-full">
              <span className="text-[clamp(11px,2.5vw,12px)] font-semibold text-[#363A43]">How We Work</span>
            </div>
            
            <h2 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#FFE000] font-poppins">
              Step-by-Step, <br /> Up the Ladder
            </h2>
            
            <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#FFF9CE]">
              At The Ladder, we believe success isn&apos;t about rushing to the top — it&apos;s about climbing with confidence. 
              That&apos;s why our process is designed to be clear, collaborative, and results-driven. 
            </p>
          </div>

          <div 
            className="w-full lg:w-[48%] flex-shrink-0 flex justify-center lg:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isMobile ? (
              <div className="w-full flex flex-col gap-6">
                {STEPS.map((step, index) => (
                  <StaticCard key={index} step={step} />
                ))}
              </div>
            ) : (
              <div className="relative w-full max-w-[580px] aspect-[580/320] md:aspect-[580/292]">
                {STEPS.map((step, index) => (
                  <AnimatedCard 
                    key={index} 
                    step={step} 
                    index={index} 
                    progress={progress} 
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
