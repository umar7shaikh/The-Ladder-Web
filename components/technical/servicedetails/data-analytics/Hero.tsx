'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';
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

              <Link href="#insights">
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

          {/* Right: Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <AnimatedDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Dashboard Component
function AnimatedDashboard() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: 'Revenue Growth', value: '+32%', trend: 'up' },
    { label: 'Conversion Rate', value: '4.8%', trend: 'up' },
    { label: 'Active Users', value: '24.5K', trend: 'up' },
    { label: 'Avg. Session', value: '3m 42s', trend: 'down' },
  ];

  const chartData = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 72 },
    { label: 'Wed', value: 68 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 85 },
    { label: 'Sat', value: 78 },
    { label: 'Sun', value: 82 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Dashboard Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Dashboard Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-[#D8F209]" />
            <span className="text-white font-semibold">Analytics Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D8F209] animate-pulse" />
            <span className="text-[#FBFFDE]/40 text-xs font-mono">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 p-6 border-b border-[#D8F209]/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              animate={{ 
                scale: activeMetric === index ? 1.05 : 1,
                borderColor: activeMetric === index ? 'rgba(216, 242, 9, 0.4)' : 'rgba(216, 242, 9, 0.1)'
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#FBFFDE]/50 text-xs">{metric.label}</span>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-[#28CA42]" />
                ) : (
                  <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />
                )}
              </div>
              <div className="text-[#D8F209] text-2xl font-bold">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="p-6 space-y-4 min-h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Performance Overview</h3>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#D8F209]" />
              <span className="text-[#FBFFDE]/40 text-xs">Last 7 days</span>
            </div>
          </div>

          {/* Chart Bars */}
          <div className="flex items-end justify-between gap-2 h-40">
            {chartData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${data.value}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="flex-1 bg-gradient-to-t from-[#D8F209]/40 to-[#D8F209]/80 rounded-t-lg relative group cursor-pointer"
              >
                {/* Tooltip on hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A1A1A] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {data.value}%
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart Labels */}
          <div className="flex items-center justify-between text-[#FBFFDE]/40 text-xs">
            {chartData.map((data, index) => (
              <span key={index}>{data.label}</span>
            ))}
          </div>

          {/* Pie Chart Placeholder */}
          <div className="mt-6 flex items-center justify-center">
            <div className="relative w-32 h-32">
              <PieChart className="w-full h-full text-[#D8F209]/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#D8F209] text-xl font-bold">68%</div>
                  <div className="text-[#FBFFDE]/40 text-xs">Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/0 rounded-xl blur-xl -z-10" />
    </div>
  );
}
