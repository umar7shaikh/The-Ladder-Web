'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface CardData {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  highlight?: string;
}

interface WhatWeBuildProps {
  cards: CardData[];
}

export default function WhatWeBuild({ cards }: WhatWeBuildProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#D8F209 1px, transparent 1px), linear-gradient(90deg, #D8F209 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-[#D8F209]/5 rounded-full blur-[80px]"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-[#D8F209]/5 rounded-full blur-[100px]"
      />

      <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#D8F209] rounded-full mb-4">
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">MARKETING CAPABILITIES</span>
          </div>
          
          <h2 className="text-white font-bold mb-3 text-[clamp(36px,6vw,56px)] leading-tight">
            What We Build
          </h2>
          <p className="text-[#FBFFDE]/60 text-base leading-relaxed">
            Comprehensive marketing strategies that drive traffic, engage audiences, and generate results
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-2xl p-8 border border-[#D8F209]/10 hover:border-[#D8F209]/30 transition-all duration-500 h-full overflow-hidden"
                >
                  {/* Animated Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-[#D8F209]/5 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />

                  {/* Card Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#D8F209]/10 flex items-center justify-center">
                    <span className="text-[#D8F209] text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 relative"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#D8F209]/10 flex items-center justify-center relative group-hover:bg-[#D8F209]/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#D8F209]" strokeWidth={2} />
                      
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-[#D8F209]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Title with Arrow */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white font-bold text-2xl group-hover:text-[#D8F209] transition-colors duration-300 flex-1">
                      {card.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#D8F209]" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-[#FBFFDE]/60 text-base leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Features List */}
                  {card.features && card.features.length > 0 && (
                    <ul className="space-y-3">
                      {card.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                          className="flex items-start gap-3 text-[#FBFFDE]/50 text-sm group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            className="w-1.5 h-1.5 rounded-full bg-[#D8F209] mt-1.5 flex-shrink-0 group-hover/item:bg-[#D8F209] transition-colors"
                          />
                          <span className="group-hover/item:text-[#FBFFDE]/70 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Highlight Badge (if exists) */}
                  {card.highlight && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D8F209]/10 border border-[#D8F209]/20"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D8F209] animate-pulse" />
                      <span className="text-[#D8F209] text-xs font-medium">
                        {card.highlight}
                      </span>
                    </motion.div>
                  )}

                  {/* Bottom Shine Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8F209]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D8F209]/0 via-[#D8F209]/0 to-[#D8F209]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </motion.div>

                {/* Card Shadow/Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D8F209]/0 via-[#D8F209]/10 to-[#D8F209]/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#FBFFDE]/40 text-sm">
            Need custom marketing support for your business?{' '}
            <a href="/technical/contact" className="text-[#D8F209] hover:underline font-medium">
              Let's discuss →
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
