'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, CheckCircle2, Lock } from 'lucide-react';

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">TECH STACK</span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(40px,7vw,72px)] leading-[1.1] mb-3">
            Built Right.<br />
            Built to Last.
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg max-w-2xl mx-auto">
            Every technical decision made with your business in mind
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

          {/* 1. PERFORMANCE - Left */}
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
                    <span className="text-[#D8F209] text-sm font-medium">Performance</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Lightning Fast
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Sub-second page loads. Your customers won't wait—and they won't have to.
                </p>

                {/* Stats inline */}
                <div className="flex lg:justify-end gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">&lt;1s</div>
                    <div className="text-[#FBFFDE]/40 text-sm">load time</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">100</div>
                    <div className="text-[#FBFFDE]/40 text-sm">PageSpeed</div>
                  </div>
                </div>
              </div>

              {/* Visual - Right side: Speed Metrics */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 overflow-hidden">
                  
                  {/* Speed waves animation */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Initial Load', time: '0.3s', width: 90, delay: 0.6 },
                      { label: 'First Paint', time: '0.4s', width: 75, delay: 0.7 },
                      { label: 'Interactive', time: '0.7s', width: 85, delay: 0.8 },
                      { label: 'Fully Loaded', time: '0.9s', width: 95, delay: 0.9 }
                    ].map((metric, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[#FBFFDE]/60 text-xs">{metric.label}</span>
                          <span className="text-[#D8F209] text-xs font-mono font-bold">{metric.time}</span>
                        </div>
                        <div className="relative h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${metric.width}%` } : {}}
                            transition={{ duration: 1, delay: metric.delay, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D8F209] to-[#D8F209]/60 rounded-full"
                            style={{
                              boxShadow: '0 0 10px rgba(216, 242, 9, 0.5)'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Score display */}
                  <div className="mt-6 pt-6 border-t border-[#D8F209]/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-5 h-5 text-[#D8F209]" />
                        </motion.div>
                        <span className="text-[#FBFFDE]/60 text-sm">Performance Score</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                        className="text-[#D8F209] text-3xl font-bold"
                      >
                        100
                      </motion.div>
                    </div>
                  </div>

                  {/* Status badges */}
                  <div className="mt-4 flex gap-2">
                    {['Optimized', 'Cached', 'CDN'].map((status, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                        className="flex items-center gap-1 bg-[#D8F209]/5 border border-[#D8F209]/20 rounded px-2 py-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#D8F209]" />
                        <span className="text-[9px] text-[#D8F209]/80">{status}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            
            {/* Dot on timeline */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

          {/* 2. SECURITY - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Visual - Left side: Security Layers */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-8">
                  
                  {/* Security layers */}
                  <div className="relative flex items-center justify-center" style={{ height: '240px' }}>
                    
                    {/* Outer pulsing circles */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.8],
                          opacity: [0.3, 0]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 1,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute w-32 h-32 border-2 border-[#D8F209] rounded-full"
                      />
                    ))}

                    {/* Main shield container */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="relative"
                    >
                      {/* Shield background glow */}
                      <div className="absolute inset-0 bg-[#D8F209]/10 blur-xl rounded-full" />
                      
                      {/* Shield icon */}
                      <div className="relative">
                        <Shield className="w-28 h-28 text-[#D8F209]" strokeWidth={1.5} />
                        
                        {/* Lock in center */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 1.2 }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                          <div className="bg-[#1E1E1E] rounded-full p-2">
                            <Lock className="w-8 h-8 text-[#D8F209]" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Security badges around shield */}
                    {[
                      { icon: '256', angle: 0, delay: 1.4 },
                      { icon: 'SSL', angle: 120, delay: 1.5 },
                      { icon: 'SOC', angle: 240, delay: 1.6 }
                    ].map((badge, i) => {
                      const radius = 80;
                      const x = Math.cos((badge.angle * Math.PI) / 180) * radius;
                      const y = Math.sin((badge.angle * Math.PI) / 180) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: badge.delay }}
                          className="absolute bg-[#D8F209] text-[#1E1E1E] w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[#1E1E1E]"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                        >
                          {badge.icon}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Content - Right side */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
                  <Shield className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-medium">Security</span>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Bank-Level Protection
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Enterprise-grade encryption. Your data—and your customers'—stays protected.
                </p>

                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">256-bit</div>
                    <div className="text-[#FBFFDE]/40 text-sm">encryption</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">SOC 2</div>
                    <div className="text-[#FBFFDE]/40 text-sm">compliant</div>
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
                  Grows With You
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Built for 10 users today, ready for 10,000 tomorrow. No expensive rewrites.
                </p>

                <div className="flex lg:justify-end gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">99.9%</div>
                    <div className="text-[#FBFFDE]/40 text-sm">uptime</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">∞</div>
                    <div className="text-[#FBFFDE]/40 text-sm">scalable</div>
                  </div>
                </div>
              </div>

              {/* Visual - Right side: Growth Chart */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
                  
                  {/* Growth visualization */}
                  <div className="relative" style={{ height: '240px' }}>
                    
                    {/* Grid background */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute w-full border-t border-[#D8F209]/5"
                          style={{ top: `${i * 25}%` }}
                        />
                      ))}
                    </div>

                    {/* Growth bars */}
                    <div className="absolute inset-0 flex items-end justify-around px-2">
                      {[
                        { height: 25, month: 'Jan' },
                        { height: 35, month: 'Feb' },
                        { height: 32, month: 'Mar' },
                        { height: 50, month: 'Apr' },
                        { height: 48, month: 'May' },
                        { height: 68, month: 'Jun' },
                        { height: 65, month: 'Jul' },
                        { height: 88, month: 'Aug' }
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-full relative group cursor-pointer">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={isInView ? { height: `${bar.height}%` } : {}}
                              transition={{
                                duration: 0.8,
                                delay: 1 + i * 0.1,
                                ease: "easeOut"
                              }}
                              className="w-full bg-gradient-to-t from-[#D8F209] to-[#D8F209]/40 rounded-t transition-all group-hover:from-[#D8F209] group-hover:to-[#D8F209]/60"
                              style={{ 
                                minHeight: '20px',
                                boxShadow: '0 0 20px rgba(216, 242, 9, 0.3)'
                              }}
                            />
                            
                            {/* Tooltip */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#D8F209] text-[#1E1E1E] text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                              {bar.height * 100} users
                            </div>
                          </div>
                          
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                            className="text-[10px] text-[#FBFFDE]/40 font-mono"
                          >
                            {bar.month}
                          </motion.span>
                        </div>
                      ))}
                    </div>

                    {/* Growth indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      className="absolute top-4 right-4 flex items-center gap-2 bg-[#D8F209] text-[#1E1E1E] rounded-full px-3 py-1.5"
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-bold">+352%</span>
                    </motion.div>
                  </div>
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
              "Our technical decisions are boring on purpose—<br className="hidden lg:block" />
              <span className="text-[#D8F209]">reliability isn't exciting, but it's profitable</span>."
            </p>
            
            <div className="h-px w-24 bg-[#D8F209] mx-auto mb-8" />
            
            <p className="text-[#FBFFDE]/40 text-sm">
              Every line of code written with one question:<br />
              <span className="text-[#FBFFDE]/60">Will this still work perfectly in 3 years?</span>
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
            {['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
