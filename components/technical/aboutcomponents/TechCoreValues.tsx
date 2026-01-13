'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  Lightbulb,
  Shield,
  Target,
  Users,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function TechCoreValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const values = [
    { title: "Excellence", description: "We deliver nothing but our best in every project, code, and interaction.", icon: Award },
    { title: "Innovation", description: "Constantly pushing boundaries to find better, smarter solutions.", icon: Lightbulb },
    { title: "Integrity", description: "Transparent, honest partnerships built on trust and accountability.", icon: Shield },
    { title: "Impact", description: "Focused on delivering measurable business results that matter.", icon: Target },
    { title: "Collaboration", description: "Working closely with clients to achieve shared vision and success.", icon: Users },
    { title: "Growth", description: "Continuous learning and development for ourselves and our clients.", icon: TrendingUp }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden bg-[#1E1E1E]">
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #D8F209 1px, transparent 1px), linear-gradient(to bottom, #D8F209 1px, transparent 1px)`,
          backgroundSize: 'clamp(40px, 10vw, 80px) clamp(40px, 10vw, 80px)'
        }}
      />

      <div className="relative z-10 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D8F209]" />
            <span className="text-[#D8F209] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-[clamp(10px,2.5vw,12px)]">
              Core Values
            </span>
          </div>
          <h2 className="text-[clamp(28px,7vw,64px)] leading-[1.15] font-black text-white max-w-4xl">
            Principles That Guide
            <span className="block text-[#D8F209] mt-1 sm:mt-2">Everything We Do</span>
          </h2>
        </motion.div>

        {/* Vertical Timeline Layout */}
        <div className="relative">
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-0 sm:left-0 top-0 bottom-0 w-[2px] bg-[#D8F209]/20"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              transformOrigin: 'top'
            }}
          />
          <div className="absolute left-0 sm:left-0 top-0 bottom-0 w-[2px] bg-[#D8F209]" 
            style={{
              background: 'linear-gradient(to bottom, #D8F209, transparent)'
            }}
          />

          {/* Values */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative pl-8 sm:pl-12 lg:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-0 top-0 -translate-x-[7px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D8F209] shadow-[0_0_15px_rgba(216,242,9,0.6)] sm:shadow-[0_0_20px_rgba(216,242,9,0.6)]"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
                    
                    {/* Icon + Number */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="lg:col-span-3 flex items-center gap-3 sm:gap-4 lg:gap-6"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D8F209]/20 to-transparent blur-lg sm:blur-xl"
                        />
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#252525] border-2 border-[#D8F209]/30 flex items-center justify-center group hover:border-[#D8F209] transition-colors">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#D8F209]" />
                        </div>
                      </div>
                      <span className="text-[clamp(40px,8vw,72px)] font-black text-[#D8F209]/10 hidden sm:block lg:text-7xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-2 sm:space-y-3 lg:space-y-4">
                      <h3 className="text-[clamp(22px,5.5vw,42px)] font-black text-white leading-none">
                        {value.title}
                      </h3>
                      
                      <p className="text-[clamp(14px,3.8vw,20px)] text-[#FBFFDE]/70 leading-relaxed max-w-2xl">
                        {value.description}
                      </p>

                      {/* Interactive Underline */}
                      <motion.div
                        initial={{ width: 40 }}
                        whileHover={{ width: 100 }}
                        className="h-[3px] sm:h-1 bg-gradient-to-r from-[#D8F209] to-transparent rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
