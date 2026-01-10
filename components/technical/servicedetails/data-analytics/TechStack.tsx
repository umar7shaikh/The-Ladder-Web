'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Database, BarChart3, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

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
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">ANALYTICS STACK</span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(40px,7vw,72px)] leading-[1.1] mb-3">
            Real-Time Insights.<br />
            Enterprise Scale.
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg max-w-2xl mx-auto">
            Every analytics solution built for speed, accuracy, and actionable intelligence
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

          {/* 1. REAL-TIME - Left */}
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
                    <span className="text-[#D8F209] text-sm font-medium">Real-Time</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Instant Insights
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Process millions of data points in seconds. Decisions don't wait for batch jobs.
                </p>

                {/* Stats inline */}
                <div className="flex lg:justify-end gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">&lt;1s</div>
                    <div className="text-[#FBFFDE]/40 text-sm">query time</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">1M+</div>
                    <div className="text-[#FBFFDE]/40 text-sm">events/sec</div>
                  </div>
                </div>
              </div>

              {/* Visual - Right side: Live Dashboard */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 h-48">
                  
                  {/* Live metrics cards */}
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {[
                      { label: 'Active Users', value: '2,847' },
                      { label: 'Revenue', value: '$12.5K' },
                      { label: 'Conversion', value: '3.8%' },
                      { label: 'Page Views', value: '45.2K' }
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        className="bg-[#1A1A1A] rounded-lg p-3 border border-[#D8F209]/10"
                      >
                        <div className="text-[#FBFFDE]/40 text-[10px] mb-1">{metric.label}</div>
                        <motion.div 
                          className="text-[#D8F209] text-xl font-bold"
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {metric.value}
                        </motion.div>
                        {/* Sparkline */}
                        <div className="flex items-end gap-[2px] mt-2 h-4">
                          {[...Array(8)].map((_, j) => (
                            <motion.div
                              key={j}
                              initial={{ height: 0 }}
                              animate={isInView ? { 
                                height: `${Math.random() * 100}%` 
                              } : {}}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.7 + i * 0.1 + j * 0.05,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                              className="flex-1 bg-[#D8F209]/30 rounded-sm"
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live indicator */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-3 right-3 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D8F209]" />
                    <span className="text-[#D8F209] text-[10px] font-mono">LIVE</span>
                  </motion.div>
                </div>
              </div>

            </div>
            
            {/* Dot on timeline */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

          {/* 2. ACCURACY - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Visual - Left side: Data Quality Pipeline */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
                  {/* Data pipeline stages */}
                  <div className="space-y-3">
                    {[
                      { stage: 'Data Collection', status: 'complete' },
                      { stage: 'Validation', status: 'complete' },
                      { stage: 'Cleaning', status: 'complete' },
                      { stage: 'Transformation', status: 'processing' },
                      { stage: 'Storage', status: 'queued' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        {item.status === 'complete' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        ) : item.status === 'processing' ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Activity className="w-4 h-4 text-[#D8F209]" />
                          </motion.div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-[#FBFFDE]/20 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className={`text-xs font-mono ${
                            item.status === 'complete' ? 'text-green-400' :
                            item.status === 'processing' ? 'text-[#D8F209]' :
                            'text-[#FBFFDE]/40'
                          }`}>
                            {item.stage}
                          </div>
                        </div>
                        {item.status === 'complete' && (
                          <div className="text-[10px] text-green-400/60">✓ Verified</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quality score */}
                  <div className="mt-4 pt-4 border-t border-[#D8F209]/10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#FBFFDE]/60">Data Quality Score</span>
                      <span className="text-[#D8F209] font-bold">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right side */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
                  <Database className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-medium">Accuracy</span>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Trusted Data
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Automated validation, cleaning, and quality checks. Every number is verified.
                </p>

                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">99.9%</div>
                    <div className="text-[#FBFFDE]/40 text-sm">accuracy</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">5x</div>
                    <div className="text-[#FBFFDE]/40 text-sm">validation</div>
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
        Handle terabytes today, petabytes tomorrow. Your analytics grows with your business.
      </p>

      <div className="flex lg:justify-end gap-8 pt-4">
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">TB+</div>
          <div className="text-[#FBFFDE]/40 text-sm">data volume</div>
        </div>
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">∞</div>
          <div className="text-[#FBFFDE]/40 text-sm">scalable</div>
        </div>
      </div>
    </div>

    {/* Visual - Right side: Growth Line Chart */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 h-52">
        
        {/* Chart area with bars AND line */}
        <div className="relative h-40 mb-4">
          
          {/* Background bars */}
          <div className="absolute inset-0 flex items-end justify-between gap-2">
            {[
              { label: 'Jan', value: 30 },
              { label: 'Feb', value: 45 },
              { label: 'Mar', value: 38 },
              { label: 'Apr', value: 65 },
              { label: 'May', value: 55 },
              { label: 'Jun', value: 80 },
              { label: 'Jul', value: 75 },
              { label: 'Aug', value: 95 }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${bar.value}%` } : {}}
                  transition={{ duration: 0.8, delay: 1 + i * 0.1, type: "spring" }}
                  className="w-full bg-[#D8F209]/20 rounded-t-sm"
                  style={{ minHeight: '8px' }}
                />
              </div>
            ))}
          </div>

          {/* Animated growth line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 160" preserveAspectRatio="none">
            <motion.path
              d="M 25 112, L 75 88, L 125 99.2, L 175 56, L 225 72, L 275 32, L 325 40, L 375 8"
              stroke="#D8F209"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(216, 242, 9, 0.6))'
              }}
            />
            
            {/* Data points */}
            {[
              { x: 25, y: 112 },
              { x: 75, y: 88 },
              { x: 125, y: 99.2 },
              { x: 175, y: 56 },
              { x: 225, y: 72 },
              { x: 275, y: 32 },
              { x: 325, y: 40 },
              { x: 375, y: 8 }
            ].map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#D8F209"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(216, 242, 9, 0.8))'
                }}
              />
            ))}
          </svg>

          {/* Month labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((label, i) => (
              <span key={i} className="text-[10px] text-[#FBFFDE]/40">{label}</span>
            ))}
          </div>
        </div>
        
        {/* Growth indicator */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[#D8F209] text-xs font-medium pt-3 border-t border-[#D8F209]/10">
          <TrendingUp className="w-3 h-3" />
          <span>216% growth YoY</span>
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
              "Analytics should answer questions you didn't know to ask—<br className="hidden lg:block" />
              <span className="text-[#D8F209]">that's the difference between data and intelligence</span>."
            </p>
            
            <div className="h-px w-24 bg-[#D8F209] mx-auto mb-8" />
            
            <p className="text-[#FBFFDE]/40 text-sm">
              Every dashboard built with one question:<br />
              <span className="text-[#FBFFDE]/60">What decision does this enable?</span>
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
            {['Python', 'SQL', 'Tableau', 'Power BI', 'AWS Redshift'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
