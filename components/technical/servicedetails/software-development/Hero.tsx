'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle2, Zap } from 'lucide-react';
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

          {/* Right: Animated SaaS Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <AnimatedSaaSDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated SaaS Dashboard Component
function AnimatedSaaSDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Overview', 'Analytics', 'Users'];
  
  const stats = [
    { label: 'Active Users', value: '12,847', change: '+23%', trend: 'up' },
    { label: 'Revenue (MRR)', value: '$48.2K', change: '+18%', trend: 'up' },
    { label: 'Conversion', value: '3.4%', change: '+0.8%', trend: 'up' },
  ];

  const recentActivity = [
    { user: 'Sarah M.', action: 'Upgraded to Pro', time: '2m ago' },
    { user: 'John D.', action: 'Created account', time: '5m ago' },
    { user: 'Emma W.', action: 'Started trial', time: '8m ago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md">
      {/* SaaS Dashboard Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Dashboard Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#D8F209] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#1E1E1E]" />
              </div>
              <span className="text-white font-semibold text-sm">Dashboard</span>
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

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === index
                    ? 'bg-[#D8F209]/20 text-[#D8F209] border border-[#D8F209]/30'
                    : 'text-[#FBFFDE]/50 hover:text-[#FBFFDE]/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-4 grid grid-cols-1 gap-3 border-b border-[#D8F209]/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-[#1A1A1A] rounded-lg p-3 border border-[#D8F209]/10"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#FBFFDE]/60 text-xs">{stat.label}</span>
                <div className="flex items-center gap-1 text-[#D8F209] text-[10px]">
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-white text-xl font-bold">{stat.value}</div>
              
              {/* Mini sparkline */}
              <div className="mt-2 flex items-end gap-0.5 h-6">
                {[40, 55, 45, 60, 50, 70, 65, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                    className="flex-1 bg-[#D8F209]/30 rounded-sm"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Feed */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-[#D8F209]" />
            <h3 className="text-white font-semibold text-xs">Recent Activity</h3>
          </div>
          
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 bg-[#1A1A1A] rounded-lg p-2 border border-[#D8F209]/10"
              >
                {/* User Avatar */}
                <div className="w-8 h-8 rounded-full bg-[#D8F209]/20 border border-[#D8F209]/30 flex items-center justify-center">
                  <span className="text-[#D8F209] text-xs font-bold">
                    {activity.user.split(' ')[0][0]}
                  </span>
                </div>
                
                {/* Activity Details */}
                <div className="flex-1 min-w-0">
                  <div className="text-[#FBFFDE]/80 text-xs font-medium truncate">
                    {activity.user}
                  </div>
                  <div className="text-[#FBFFDE]/50 text-[10px]">
                    {activity.action}
                  </div>
                </div>
                
                {/* Time */}
                <span className="text-[#FBFFDE]/40 text-[10px] font-mono">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 pt-0 flex gap-2">
          {[
            { label: 'Export', icon: ArrowRight },
            { label: 'Settings', icon: Target }
          ].map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#D8F209]/10 border border-[#D8F209]/20 rounded-lg py-2 hover:bg-[#D8F209]/20 transition-colors"
            >
              <action.icon className="w-3 h-3 text-[#D8F209]" />
              <span className="text-[#D8F209] text-xs font-medium">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Floating Notification */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute -top-4 -right-4 bg-[#D8F209] text-[#1E1E1E] rounded-lg px-3 py-2 shadow-lg border-2 border-[#1E1E1E]"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <div>
            <div className="text-xs font-bold">New Signup!</div>
            <div className="text-[10px] opacity-80">Pro Plan</div>
          </div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#D8F209]/10 via-transparent to-[#D8F209]/5 rounded-xl blur-2xl -z-10 opacity-50" />
    </div>
  );
}
