'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles } from 'lucide-react';

export default function WhatMakesUsDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#D8F209]/5 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#D8F209]/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#D8F209] rounded-full mb-4">
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">
              WHAT MAKES US DIFFERENT
            </span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(36px,6vw,56px)] leading-tight mb-4">
            Websites engineered for growth,<br />
            not just launch
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-[#FBFFDE]/60 text-xl leading-relaxed">
              Most websites fail after launch because they're built in isolation.
            </p>
            <p className="text-[#FBFFDE]/80 text-2xl leading-relaxed font-medium">
              We build websites as <span className="text-[#D8F209]">integrated systems</span> where every layer supports the others.
            </p>
          </div>
        </motion.div>

        {/* MAIN VISUAL: Comparison Timeline */}
        <div className="mb-32">
          
          {/* Desktop: Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE: Typical Approach */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
                  <span className="text-red-400 text-sm font-bold uppercase tracking-wider">
                    Typical Approach
                  </span>
                </div>
                <h3 className="text-white/40 text-3xl font-bold line-through">
                  Built in Isolation
                </h3>
              </div>

              {/* Broken Timeline */}
              <div className="relative space-y-12">
                {[
                  { label: 'Design', time: 'Week 1-2', issue: 'No dev input' },
                  { label: 'Development', time: 'Week 3-6', issue: 'Design issues found' },
                  { label: 'SEO Added', time: 'Week 7', issue: 'Requires rebuild' },
                  { label: 'Performance', time: 'After Launch', issue: 'Too slow' },
                  { label: 'Fixes & Patches', time: 'Ongoing', issue: 'Expensive' }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className="relative pl-8 border-l-2 border-dashed border-red-500/20"
                  >
                    {/* Red dot */}
                    <div className="absolute left-0 top-2 -translate-x-[9px] w-4 h-4 rounded-full bg-red-500/30 border-2 border-red-500/50" />
                    
                    <div className="pb-4">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-white/50 font-bold text-lg">{step.label}</h4>
                        <span className="text-white/30 text-xs">{step.time}</span>
                      </div>
                      <p className="text-red-400/70 text-sm italic">⚠️ {step.issue}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: Your Approach */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8F209]/10 border border-[#D8F209]/30 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-bold uppercase tracking-wider">
                    Our Approach
                  </span>
                </div>
                <h3 className="text-white text-3xl font-bold">
                  Built as a System
                </h3>
              </div>

              {/* Connected Timeline */}
              <div className="relative space-y-12">
                {/* Glowing vertical line */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D8F209]/20 via-[#D8F209]/60 to-[#D8F209]/20"
                />

                {[
                  { label: 'Discovery', benefit: 'All disciplines aligned' },
                  { label: 'Design + Dev', benefit: 'Built together' },
                  { label: 'SEO Built-in', benefit: 'From day one' },
                  { label: 'Performance', benefit: 'Baked into foundation' },
                  { label: 'Launch', benefit: 'No surprises' }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                    className="relative pl-8 border-l-2 border-[#D8F209]/30"
                  >
                    {/* Yellow glowing dot */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(216, 242, 9, 0.4)',
                          '0 0 0 8px rgba(216, 242, 9, 0)',
                          '0 0 0 0 rgba(216, 242, 9, 0)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity
                      }}
                      className="absolute left-0 top-2 -translate-x-[9px] w-4 h-4 rounded-full bg-[#D8F209] border-2 border-[#1E1E1E]"
                    />
                    
                    <div className="pb-4">
                      <h4 className="text-white font-bold text-lg mb-1">{step.label}</h4>
                      <p className="text-[#D8F209]/90 text-sm font-medium">✓ {step.benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Mobile: Stacked */}
          <div className="lg:hidden space-y-16">
            {/* Mobile version - simplified */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
                  <span className="text-red-400 text-sm font-bold">Typical</span>
                </div>
                <h3 className="text-white/40 text-2xl font-bold line-through">Built in Isolation</h3>
              </div>
              <p className="text-center text-red-400/70 text-sm">
                Design → Dev → SEO → Performance issues → Expensive fixes
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8F209]/10 border border-[#D8F209]/30 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-bold">Our Way</span>
                </div>
                <h3 className="text-white text-2xl font-bold">Built as a System</h3>
              </div>
              <p className="text-center text-[#D8F209]/90 text-sm font-medium">
                Everything working together from day one → No surprises
              </p>
            </div>
          </div>

        </div>

        {/* Four Key Benefits - Horizontal Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { icon: Zap, text: 'Built for performance from day one' },
              { icon: TrendingUp, text: 'Designed to scale with your business' },
              { icon: Shield, text: 'Optimized for discoverability and conversion' },
              { icon: Sparkles, text: 'Easy to manage, update, and evolve' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D8F209]/10 border border-[#D8F209]/20">
                    <Icon className="w-8 h-8 text-[#D8F209]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[#FBFFDE]/70 text-sm font-medium leading-snug px-2">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
