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
            className="relative"
          >
            <AnimatedGrowthChart />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Growth Chart Component
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
    <div className="relative">
      {/* Marketing Dashboard Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#D8F209]" />
            <span className="text-white font-semibold">Marketing Performance</span>
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

        {/* Metrics Grid */}
        <div className="p-6 grid grid-cols-2 gap-4 border-b border-[#D8F209]/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              animate={{ 
                borderColor: activeMetric === index ? 'rgba(216, 242, 9, 0.4)' : 'rgba(216, 242, 9, 0.1)',
                scale: activeMetric === index ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#FBFFDE]/60 text-xs">{metric.label}</span>
                <TrendingUp className="w-4 h-4 text-[#D8F209]" />
              </div>
              <div className="text-[#D8F209] text-xl font-bold">{metric.value}</div>
              <div className="text-[#FBFFDE]/40 text-xs mt-1">vs last month</div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart Visualization */}
        <div className="p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Growth Trend</h3>
            <BarChart3 className="w-4 h-4 text-[#D8F209]" />
          </div>

          {/* Chart */}
          <div className="relative h-48 flex items-end justify-between gap-2">
            {chartData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${(value / Math.max(...chartData)) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                className="flex-1 bg-gradient-to-t from-[#D8F209] to-[#D8F209]/60 rounded-t min-h-[20px] relative group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#FBFFDE]/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {value}%
                </div>
              </motion.div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-4 text-[#FBFFDE]/40 text-xs">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          {/* Marketing channels */}
          <div className="mt-8 space-y-3">
            <h4 className="text-white font-semibold text-sm mb-3">Top Channels</h4>
            {[
              { name: 'Organic Search', value: 45, icon: Target },
              { name: 'Social Media', value: 32, icon: Users },
              { name: 'Email Campaigns', value: 23, icon: TrendingUp },
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <channel.icon className="w-4 h-4 text-[#D8F209]" />
                    <span className="text-[#FBFFDE]/60 text-xs">{channel.name}</span>
                  </div>
                  <span className="text-[#D8F209] text-xs font-mono">{channel.value}%</span>
                </div>
                <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
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
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/0 rounded-xl blur-xl -z-10" />
    </div>
  );
}
