'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

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
                className="text-white font-bold leading-tight text-[clamp(28px,5.5vw,48px)]"
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

              <Link href="#services">
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

          {/* Right: Animated Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <AnimatedGrowthChart />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Growth Chart Component - SMALLER
function AnimatedGrowthChart() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: 'Traffic', value: '+247%', trend: 'up' },
    { label: 'Leads', value: '+183%', trend: 'up' },
    { label: 'Conversions', value: '+156%', trend: 'up' },
    { label: 'Revenue', value: '+312%', trend: 'up' },
  ];

  const chartData = [20, 35, 50, 45, 70, 85, 100, 120, 145, 160, 185, 210];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md">
      {/* Marketing Dashboard Window - COMPACT */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Header - Smaller */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#D8F209]" />
            <span className="text-white font-semibold text-sm">Performance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#D8F209]"
            />
            <span className="text-[#FBFFDE]/40 text-[10px] font-mono">LIVE</span>
          </div>
        </div>

        {/* Metrics Grid - Compact */}
        <div className="p-4 grid grid-cols-2 gap-2 border-b border-[#D8F209]/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              animate={{ 
                borderColor: activeMetric === index ? 'rgba(216, 242, 9, 0.4)' : 'rgba(216, 242, 9, 0.1)',
                scale: activeMetric === index ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] rounded-lg p-2.5 border border-[#D8F209]/10"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#FBFFDE]/60 text-[10px]">{metric.label}</span>
                <TrendingUp className="w-3 h-3 text-[#D8F209]" />
              </div>
              <div className="text-[#D8F209] text-base font-bold">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart Visualization - Smaller */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold text-xs">Growth Trend</h3>
            <BarChart3 className="w-3 h-3 text-[#D8F209]" />
          </div>

          {/* Chart - Reduced Height */}
          <div className="relative h-32 flex items-end justify-between gap-1">
            {chartData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${(value / Math.max(...chartData)) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                className="flex-1 bg-gradient-to-t from-[#D8F209] to-[#D8F209]/60 rounded-t min-h-[10px] relative group"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#FBFFDE]/40 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {value}%
                </div>
              </motion.div>
            ))}
          </div>

          {/* X-axis labels - Smaller */}
          <div className="flex justify-between mt-2 text-[#FBFFDE]/40 text-[9px]">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>

          {/* Marketing channels - Compact */}
          <div className="mt-5 space-y-2">
            <h4 className="text-white font-semibold text-xs mb-2">Top Channels</h4>
            {[
              { name: 'Organic', value: 45, icon: Target },
              { name: 'Social', value: 32, icon: Users },
              { name: 'Email', value: 23, icon: TrendingUp },
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <channel.icon className="w-3 h-3 text-[#D8F209]" />
                    <span className="text-[#FBFFDE]/60 text-[10px]">{channel.name}</span>
                  </div>
                  <span className="text-[#D8F209] text-[10px] font-mono">{channel.value}%</span>
                </div>
                <div className="h-1.5 bg-[#1E1E1E] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${channel.value}%` }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                    className="h-full bg-[#D8F209] rounded-full"
                  />
                </div>
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
