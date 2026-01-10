'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Database, GitBranch, Activity } from 'lucide-react';
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
            className="relative"
          >
            <AnimatedDataFlow />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Data Flow Component
function AnimatedDataFlow() {
  const [activeSource, setActiveSource] = useState(0);

  const dataSources = [
    { name: 'CRM', status: 'syncing', records: 12547 },
    { name: 'Database', status: 'active', records: 89321 },
    { name: 'API', status: 'syncing', records: 3456 },
    { name: 'Files', status: 'queued', records: 2189 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % dataSources.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Data Flow Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-[#D8F209]" />
            <span className="text-white font-semibold">Data Integration Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#D8F209]"
            />
            <span className="text-[#FBFFDE]/40 text-xs font-mono">Live</span>
          </div>
        </div>

        {/* Data Sources */}
        <div className="p-6 space-y-4 border-b border-[#D8F209]/10">
          <h3 className="text-white font-semibold text-sm mb-4">Data Sources</h3>
          {dataSources.map((source, index) => (
            <motion.div
              key={index}
              animate={{ 
                borderColor: activeSource === index ? 'rgba(216, 242, 9, 0.4)' : 'rgba(216, 242, 9, 0.1)',
                scale: activeSource === index ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-white text-sm font-medium">{source.name}</span>
                </div>
                <span className={`text-xs font-mono ${
                  source.status === 'active' ? 'text-[#28CA42]' : 
                  source.status === 'syncing' ? 'text-[#D8F209]' : 
                  'text-[#FBFFDE]/40'
                }`}>
                  {source.status.toUpperCase()}
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="h-1 bg-[#0D0D0D] rounded-full overflow-hidden">
                <motion.div
                  animate={{ 
                    width: source.status === 'active' ? '100%' : 
                           source.status === 'syncing' ? ['0%', '100%', '0%'] : '0%'
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: source.status === 'syncing' ? Infinity : 0,
                    ease: "linear"
                  }}
                  className="h-full bg-[#D8F209] rounded-full"
                />
              </div>
              
              <div className="mt-2 text-[#FBFFDE]/40 text-xs">
                {source.records.toLocaleString()} records processed
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <div className="p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Integration Pipeline</h3>
            <Activity className="w-4 h-4 text-[#D8F209]" />
          </div>

          {/* Flow diagram */}
          <div className="space-y-4">
            {[
              { label: 'Extract', icon: GitBranch, progress: 100 },
              { label: 'Transform', icon: Database, progress: 85 },
              { label: 'Load', icon: Activity, progress: 70 },
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {React.createElement(stage.icon, { className: "w-4 h-4 text-[#D8F209]" })}
                    <span className="text-[#FBFFDE]/60 text-xs font-mono">{stage.label}</span>
                  </div>
                  <span className="text-[#D8F209] text-xs font-mono">{stage.progress}%</span>
                </div>
                <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.progress}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                    className="h-full bg-[#D8F209] rounded-full"
                  />
                </div>
                
                {/* Arrow to next */}
                {index < 2 && (
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center py-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#D8F209]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Central warehouse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/20 text-center"
          >
            <Database className="w-8 h-8 text-[#D8F209] mx-auto mb-2" />
            <div className="text-white text-sm font-semibold">Data Warehouse</div>
            <div className="text-[#FBFFDE]/40 text-xs mt-1">Ready for analytics</div>
          </motion.div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/0 rounded-xl blur-xl -z-10" />
    </div>
  );
}
