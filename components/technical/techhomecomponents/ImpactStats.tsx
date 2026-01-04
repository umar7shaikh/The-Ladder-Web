// components\technical\techhomecomponents\ImpactStats.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-auto bg-[#1E1E1E] overflow-hidden flex items-center py-16 md:py-20 lg:py-24">
      {/* Container */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8 xl:pr-12">
            <div className="inline-block">
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
                OUR IMPACT
              </span>
            </div>

            <h2 className="space-y-2">
              <span className="block text-[#D8F209] font-bold leading-tight text-[clamp(32px,5vw,56px)]">
                Results That Create
              </span>
              <span className="block text-[#D8F209] font-bold leading-tight text-[clamp(32px,5vw,56px)]">
                A Measurable Edge
              </span>
            </h2>

            <p className="text-[#FBFFDE]/70 text-[clamp(15px,3.5vw,18px)] leading-relaxed max-w-lg">
              We&apos;ve partnered with ambitious teams to deliver digital solutions that scale. From startups to established businesses, our track record speaks to the quality and reliability of our work.
            </p>
          </div>

          {/* Vertical Divider Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-px bg-gradient-to-b from-transparent via-[#D8F209]/20 to-transparent"></div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:pl-8 xl:pl-12">
            
            {/* Stat Card 1 */}
            <StatCard
              value={300}
              suffix="+"
              label="Projects Delivered"
              isVisible={isVisible}
              duration={2000}
            />

            {/* Stat Card 2 */}
            <StatCard
              value={98}
              suffix="%"
              label="Client Selection"
              isVisible={isVisible}
              duration={2000}
            />

            {/* Stat Card 3 */}
            <StatCard
              value={6}
              suffix="+"
              label="Years of Experience"
              isVisible={isVisible}
              duration={1500}
            />

            {/* Stat Card 4 */}
            <StatCard
              value={120}
              suffix="+"
              label="Clients Served"
              isVisible={isVisible}
              duration={2000}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

// Stat Card Component with Count Animation
function StatCard({ 
  value, 
  suffix, 
  label, 
  isVisible, 
  duration 
}: { 
  value: number; 
  suffix: string; 
  label: string; 
  isVisible: boolean; 
  duration: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div className="relative group bg-[#252525] border border-[#333333] rounded-2xl p-6 sm:p-8 hover:border-[#D8F209]/30 transition-all duration-300 overflow-hidden">
      {/* Yellow Gradient Overlay - Top Right */}
      <div className="absolute -top-[50%] -right-[30%] w-[120%] h-[120%] opacity-10 pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-[60px]"
          style={{
            background: 'radial-gradient(circle at top right, #D8F209 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Dot Indicator */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-[#D8F209] rounded-full z-10"></div>
      
      <div className="space-y-3 relative z-10">
        <h3 className="text-white font-bold text-[clamp(40px,8vw,72px)] leading-none">
          {count}{suffix}
        </h3>
        <p className="text-[#FBFFDE]/60 text-[clamp(13px,3vw,16px)] font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}
