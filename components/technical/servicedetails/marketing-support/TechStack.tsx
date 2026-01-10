'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Search, Target, BarChart3 } from 'lucide-react';

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
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">MARKETING STACK</span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(40px,7vw,72px)] leading-[1.1] mb-3">
            Data-Driven Marketing.<br />
            Measurable Results.
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg max-w-2xl mx-auto">
            Every marketing strategy built for performance, optimization, and real business growth
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

{/* 1. SEO - Left */}
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
          <Search className="w-4 h-4 text-[#D8F209]" />
          <span className="text-[#D8F209] text-sm font-medium">SEO</span>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-4xl lg:text-5xl">
        Organic Growth
      </h3>
      
      <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
        Technical SEO, content optimization, and link building that drives sustainable organic traffic.
      </p>

      {/* Stats inline */}
      <div className="flex lg:justify-end gap-8 pt-4">
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">300%+</div>
          <div className="text-[#FBFFDE]/40 text-sm">traffic growth</div>
        </div>
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">Top 10</div>
          <div className="text-[#FBFFDE]/40 text-sm">rankings</div>
        </div>
      </div>
    </div>

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* SEO ranking visualization */}
        <div className="space-y-3">
          {['Page Speed', 'Keywords', 'Backlinks', 'Content'].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { 
                opacity: 1,
                x: 0
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="space-y-2"
            >
              <div className="text-[#FBFFDE]/50 text-xs">{metric}</div>
              <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="h-full bg-[#D8F209] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">SEO performance</div>
      </div>
    </div>

  </div>
  
  {/* Dot on timeline */}
  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
</motion.div>


          {/* 2. CONTENT - Right */}
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
                  {/* Content performance visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FBFFDE]/60 text-xs">Engagement Rate</span>
                      <span className="text-[#D8F209] text-xs font-bold">85%</span>
                    </div>
                    <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '85%' } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-[#D8F209] rounded-full"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[#FBFFDE]/60 text-xs">Content Quality</span>
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
                  <Target className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-medium">Content</span>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Strategic Content
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Content strategies that resonate with your audience and drive conversions. Every piece has a purpose.
                </p>

                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">5x</div>
                    <div className="text-[#FBFFDE]/40 text-sm">engagement</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">200%</div>
                    <div className="text-[#FBFFDE]/40 text-sm">conversions</div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

{/* 3. ANALYTICS - Left */}
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
          <BarChart3 className="w-4 h-4 text-[#D8F209]" />
          <span className="text-[#D8F209] text-sm font-medium">Analytics</span>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-4xl lg:text-5xl">
        Measure Everything
      </h3>
      
      <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
        Track performance, optimize campaigns, and make data-driven decisions. Every metric matters.
      </p>

      <div className="flex lg:justify-end gap-8 pt-4">
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">Real-time</div>
          <div className="text-[#FBFFDE]/40 text-sm">tracking</div>
        </div>
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">ROI</div>
          <div className="text-[#FBFFDE]/40 text-sm">focused</div>
        </div>
      </div>
    </div>

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* Analytics dashboard visualization */}
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
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">Performance metrics</div>
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
              "Marketing should drive revenue, not just awareness—<br className="hidden lg:block" />
              <span className="text-[#D8F209]">that's the difference between activity and results</span>."
            </p>
            
            <div className="h-px w-24 bg-[#D8F209] mx-auto mb-8" />
            
            <p className="text-[#FBFFDE]/40 text-sm">
              Every strategy built with one goal:<br />
              <span className="text-[#FBFFDE]/60">Measurable growth that impacts your bottom line</span>
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
            {['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hootsuite'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
