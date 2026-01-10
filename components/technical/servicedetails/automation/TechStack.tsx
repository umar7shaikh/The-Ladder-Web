'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Check, RefreshCw, AlertCircle, Activity } from 'lucide-react';

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Minimal dots background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #D8F209 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#D8F209] rounded-full mb-3">
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">AUTOMATION STACK</span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(40px,7vw,72px)] leading-[1.1] mb-3">
            Smart Automation.<br />
            Zero Maintenance.
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg max-w-2xl mx-auto">
            Every automation built to run reliably 24/7 without supervision
          </p>
        </motion.div>

        {/* MAIN VISUAL: Split Timeline/Flow */}
        <div className="relative">
          
          {/* Vertical connecting line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D8F209]/30 to-transparent"
          />

          {/* Three Main Points - Alternating Left/Right */}
          
          {/* 1. RELIABILITY - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content - Left side */}
              <div className="lg:text-right space-y-6">
                <div className="lg:flex lg:justify-end">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
                    <Zap className="w-4 h-4 text-[#D8F209]" />
                    <span className="text-[#D8F209] text-sm font-medium">Reliability</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Always Running
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Self-healing automation that detects and recovers from failures automatically.
                </p>

                {/* Stats inline */}
                <div className="flex lg:justify-end gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">99.9%</div>
                    <div className="text-[#FBFFDE]/40 text-sm">uptime</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">24/7</div>
                    <div className="text-[#FBFFDE]/40 text-sm">monitoring</div>
                  </div>
                </div>
              </div>

              {/* Visual - Right side: Heartbeat Monitor */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-8 h-48 flex items-center justify-center overflow-hidden">
                  {/* Animated heartbeat/activity line */}
                  <svg className="w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
                    <motion.path
                      d="M 0 40 L 80 40 L 90 20 L 100 60 L 110 40 L 320 40"
                      stroke="#D8F209"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { 
                        pathLength: 1, 
                        opacity: [0.3, 1, 0.3],
                        x: [0, 400, 0]
                      } : {}}
                      transition={{
                        pathLength: { duration: 2, delay: 0.5 },
                        opacity: { duration: 2, repeat: Infinity },
                        x: { duration: 3, repeat: Infinity, ease: "linear" }
                      }}
                      style={{ filter: 'drop-shadow(0 0 8px rgba(216, 242, 9, 0.6))' }}
                    />
                  </svg>
                  
                  {/* Status indicator */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D8F209]" />
                    <span className="text-[#D8F209] text-xs font-mono">ACTIVE</span>
                  </motion.div>
                </div>
              </div>

            </div>
            
            {/* Dot on timeline */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

          {/* 2. ERROR HANDLING - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Visual - Left side: Error Recovery Flow */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
                  {/* Error → Retry → Success flow */}
                  <div className="space-y-4">
                    {/* Error detected */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <div className="flex-1">
                        <div className="text-red-400 text-xs font-mono">ERROR DETECTED</div>
                        <div className="text-[#FBFFDE]/40 text-[10px]">Connection timeout</div>
                      </div>
                    </motion.div>

                    {/* Retry attempts */}
                    {[1, 2, 3].map((attempt) => (
                      <motion.div
                        key={attempt}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 + attempt * 0.2 }}
                        className="flex items-center gap-3 p-3 bg-[#D8F209]/5 border border-[#D8F209]/20 rounded-lg ml-6"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <RefreshCw className="w-4 h-4 text-[#D8F209]" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-[#D8F209] text-xs font-mono">RETRY #{attempt}</div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Success */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      <div className="flex-1">
                        <div className="text-green-400 text-xs font-mono">RESOLVED</div>
                        <div className="text-[#FBFFDE]/40 text-[10px]">Automation resumed</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content - Right side */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
                  <Shield className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-medium">Error Handling</span>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Bulletproof Logic
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Smart retry mechanisms and fallback strategies. Errors get handled, not ignored.
                </p>

                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">3x</div>
                    <div className="text-[#FBFFDE]/40 text-sm">auto retry</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">100%</div>
                    <div className="text-[#FBFFDE]/40 text-sm">logged</div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

          {/* 3. SCALABILITY - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content - Left side */}
              <div className="lg:text-right space-y-6">
                <div className="lg:flex lg:justify-end">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
                    <TrendingUp className="w-4 h-4 text-[#D8F209]" />
                    <span className="text-[#D8F209] text-sm font-medium">Scalability</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Infinite Scale
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Process 10 tasks or 10,000—same speed, same reliability. No bottlenecks.
                </p>

                <div className="flex lg:justify-end gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">10K+</div>
                    <div className="text-[#FBFFDE]/40 text-sm">tasks/hour</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">∞</div>
                    <div className="text-[#FBFFDE]/40 text-sm">parallel</div>
                  </div>
                </div>
              </div>

              {/* Visual - Right side: Task Queue */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
                  {/* Parallel task execution visualization */}
                  <div className="space-y-3">
                    {[
                      { label: 'Email Queue', count: 847, width: 85 },
                      { label: 'Data Processing', count: 1243, width: 95 },
                      { label: 'Report Generation', count: 562, width: 70 },
                      { label: 'File Sync', count: 2156, width: 100 },
                    ].map((task, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                        className="space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#FBFFDE]/60 font-mono">{task.label}</span>
                          <span className="text-[#D8F209] font-mono">{task.count}</span>
                        </div>
                        <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${task.width}%` } : {}}
                            transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
                            className="h-full bg-[#D8F209] rounded-full"
                            style={{ boxShadow: '0 0 10px rgba(216, 242, 9, 0.5)' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Real-time indicator */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-4 flex items-center justify-center gap-2 text-[#D8F209] text-[10px] font-mono"
                  >
                    <Activity className="w-3 h-3" />
                    <span>PROCESSING IN REAL-TIME</span>
                  </motion.div>
                </div>
              </div>

            </div>
            
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
              "Automation should be invisible—<br className="hidden lg:block" />
              <span className="text-[#D8F209]">you only notice it when it saves you hours</span>."
            </p>
            
            <div className="h-px w-24 bg-[#D8F209] mx-auto mb-8" />
            
            <p className="text-[#FBFFDE]/40 text-sm">
              Every automation designed with one goal:<br />
              <span className="text-[#FBFFDE]/60">Run perfectly without human intervention</span>
            </p>
          </div>
        </motion.div>

        {/* Subtle tech mentions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-[#FBFFDE]/30 text-xs uppercase tracking-widest mb-4">
            Powered By
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#FBFFDE]/20 text-sm">
            {['Python', 'Node.js', 'Selenium', 'Pandas', 'AWS Lambda'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
