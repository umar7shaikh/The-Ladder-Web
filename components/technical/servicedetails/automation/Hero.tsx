'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Pause, CheckCircle2, Clock, Zap, BarChart3 } from 'lucide-react';
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

              <Link href="#case-studies">
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

          {/* Right: Animated Workflow Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <AnimatedWorkflowDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Workflow Dashboard Component
function AnimatedWorkflowDashboard() {
  const [activeWorkflows, setActiveWorkflows] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const workflows = [
    { name: 'Data Extraction', status: 'running', progress: 75, time: '2m 15s' },
    { name: 'Email Automation', status: 'completed', progress: 100, time: 'Completed' },
    { name: 'Report Generation', status: 'running', progress: 45, time: '5m 30s' },
    { name: 'Invoice Processing', status: 'queued', progress: 0, time: 'Queued' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setActiveWorkflows((prev) => (prev + 1) % 4);
        setTasksCompleted((prev) => prev + 12);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="relative">
      {/* Dashboard Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Dashboard Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#D8F209]" />
            <span className="text-white font-semibold">Automation Dashboard</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRunning(!isRunning)}
            className="p-2 rounded-lg bg-[#D8F209]/10 hover:bg-[#D8F209]/20 transition-colors"
          >
            {isRunning ? (
              <Pause className="w-4 h-4 text-[#D8F209]" />
            ) : (
              <Play className="w-4 h-4 text-[#D8F209]" />
            )}
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 p-6 border-b border-[#D8F209]/10">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#D8F209]" />
              <span className="text-[#FBFFDE]/50 text-xs">Active</span>
            </div>
            <div className="text-[#D8F209] text-2xl font-bold">{activeWorkflows}</div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#28CA42]" />
              <span className="text-[#FBFFDE]/50 text-xs">Completed</span>
            </div>
            <div className="text-[#28CA42] text-2xl font-bold">{tasksCompleted}</div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
            className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-[#FFBD2E]" />
              <span className="text-[#FBFFDE]/50 text-xs">Efficiency</span>
            </div>
            <div className="text-[#FFBD2E] text-2xl font-bold">98%</div>
          </motion.div>
        </div>

        {/* Workflow List */}
        <div className="p-6 space-y-4 min-h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Active Workflows</h3>
            <span className="text-[#FBFFDE]/40 text-xs">Real-time updates</span>
          </div>

          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-lg p-4 border border-[#D8F209]/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {workflow.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#28CA42]" />
                  ) : workflow.status === 'running' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5 text-[#D8F209]" />
                    </motion.div>
                  ) : (
                    <Clock className="w-5 h-5 text-[#FBFFDE]/30" />
                  )}
                  <span className="text-white text-sm font-medium">{workflow.name}</span>
                </div>
                <span className="text-[#FBFFDE]/50 text-xs">{workflow.time}</span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${workflow.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full rounded-full ${
                    workflow.status === 'completed' 
                      ? 'bg-[#28CA42]' 
                      : workflow.status === 'running'
                      ? 'bg-[#D8F209]'
                      : 'bg-[#FBFFDE]/20'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/0 rounded-xl blur-xl -z-10" />
    </div>
  );
}
