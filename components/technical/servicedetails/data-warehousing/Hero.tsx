'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Database, GitBranch, Activity, Layers } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import React from 'react';

interface HeroProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function Hero({
  number,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative bg-[#1E1E1E] overflow-hidden min-h-screen flex items-center">
      
      {/* Subtle Single Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D8F209]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Large Background Number - Minimal */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D8F209]/[0.03] font-bold leading-none pointer-events-none select-none text-[clamp(300px,40vw,700px)]"
      >
        {number}
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 max-w-2xl">
            
            {/* Clean Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5"
            >
              <div className="w-2 h-2 bg-[#D8F209] rounded-full animate-pulse" />
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-xs">
                {subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div 
                className="text-[#D8F209]/40 font-bold leading-none text-[clamp(50px,10vw,80px)]"
              >
                {number}
              </div>
              <h1 
                className="text-white font-bold leading-tight text-[clamp(40px,7vw,64px)]"
              >
                {title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#FBFFDE]/70 text-lg leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Clean CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/technical/contact">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(216, 242, 9, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-[#D8F209] text-[#1E1E1E] font-semibold rounded-lg text-base transition-all duration-300 flex items-center gap-2"
                >
                  {primaryCTA}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>

              <Link href="#architecture">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-[#D8F209]/30 text-[#D8F209] font-semibold rounded-lg text-base transition-all duration-300 hover:border-[#D8F209]/60 hover:bg-[#D8F209]/5"
                >
                  {secondaryCTA}
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Animated Data Flow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <AnimatedDataFlow />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Improved Animated Data Flow Component
function AnimatedDataFlow() {
  return (
    <div className="relative w-full max-w-md">
      {/* Data Flow Window - Compact */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#D8F209]" />
            <span className="text-white font-semibold text-sm">ETL Pipeline</span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#D8F209]"
            />
            <span className="text-[#FBFFDE]/40 text-[10px] font-mono">ACTIVE</span>
          </div>
        </div>

        {/* Compact Pipeline Visualization */}
        <div className="p-5 space-y-4">
          
          {/* Sources Row */}
          <div className="space-y-2">
            <div className="text-[#FBFFDE]/50 text-xs font-mono">Sources</div>
            <div className="flex gap-2">
              {['DB', 'API', 'CSV', 'Cloud'].map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="flex-1 bg-[#1A1A1A] border border-[#D8F209]/20 rounded-lg py-2 text-center"
                >
                  <span className="text-[#D8F209] text-xs font-mono">{source}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flowing arrows */}
          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="text-[#D8F209] text-sm"
              >
                ↓
              </motion.div>
            ))}
          </div>

          {/* ETL Stages */}
          <div className="space-y-2">
            {[
              { label: 'Extract', progress: 100, icon: GitBranch },
              { label: 'Transform', progress: 75, icon: Activity },
              { label: 'Load', progress: 60, icon: Database }
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                className="space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {React.createElement(stage.icon, { className: "w-3 h-3 text-[#D8F209]" })}
                    <span className="text-[#FBFFDE]/70 text-xs">{stage.label}</span>
                  </div>
                  <span className="text-[#D8F209] text-xs font-mono">{stage.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.progress}%` }}
                    transition={{ duration: 1, delay: 1 + i * 0.15 }}
                    className="h-full bg-gradient-to-r from-[#D8F209]/60 to-[#D8F209] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow down */}
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="flex justify-center text-[#D8F209] text-lg"
          >
            ↓
          </motion.div>

          {/* Warehouse Destination */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="bg-[#D8F209]/10 border-2 border-[#D8F209]/30 rounded-lg p-4 text-center relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: [-100, 300] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-[#D8F209]/20 to-transparent skew-x-12"
            />
            
            <Database className="w-6 h-6 text-[#D8F209] mx-auto mb-2" />
            <div className="text-white text-sm font-bold">Data Warehouse</div>
            <div className="text-[#D8F209] text-xs mt-1 font-mono">107.3K records</div>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[
              { label: 'Latency', value: '<5min' },
              { label: 'Uptime', value: '99.9%' },
              { label: 'Speed', value: '10TB/h' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                className="bg-[#1A1A1A] rounded-lg p-2 text-center"
              >
                <div className="text-[#D8F209] text-xs font-bold">{stat.value}</div>
                <div className="text-[#FBFFDE]/40 text-[9px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#D8F209]/10 via-transparent to-[#D8F209]/5 rounded-xl blur-2xl -z-10 opacity-50" />
    </div>
  );
}
