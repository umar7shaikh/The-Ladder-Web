'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Database, BarChart3, Activity } from 'lucide-react';

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

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* Real-time data flow */}
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { 
                x: [0, 300, 0],
                opacity: [0, 1, 0]
              } : {}}
              transition={{
                duration: 2,
                delay: 0.6 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#D8F209]" />
              <div className="h-1 flex-1 bg-[#D8F209]/30 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="h-full bg-[#D8F209] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">Streaming data pipeline</div>
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
              
              {/* Visual - Left side */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
                  {/* Data validation visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FBFFDE]/60 text-xs">Data Quality</span>
                      <span className="text-[#D8F209] text-xs font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '99.9%' } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-[#D8F209] rounded-full"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[#FBFFDE]/60 text-xs">Validation Checks</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                            className="w-2 h-2 rounded-full bg-[#D8F209]"
                          />
                        ))}
                      </div>
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

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* Scalable architecture visualization */}
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <motion.div
              key={level}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${20 + level * 15}%` } : {}}
              transition={{ duration: 0.8, delay: 1 + level * 0.1 }}
              className="h-4 bg-gradient-to-r from-[#D8F209]/40 to-[#D8F209] rounded"
            />
          ))}
        </div>
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">Horizontal scaling</div>
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
