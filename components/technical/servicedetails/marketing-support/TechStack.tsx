'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Search, Target, BarChart3, ArrowUp, CheckCircle2 } from 'lucide-react';

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

              {/* Visual - Right side: SEO Rankings */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-4 overflow-hidden">
                  
                  {/* Keyword rankings */}
                  <div className="space-y-2 pb-8">
                    {[
                      { keyword: 'web development', rank: 3, prev: 15 },
                      { keyword: 'automation services', rank: 5, prev: 24 },
                      { keyword: 'data analytics', rank: 7, prev: 32 },
                      { keyword: 'AI solutions', rank: 4, prev: 18 }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        className="bg-[#1A1A1A] border border-[#D8F209]/10 rounded-lg p-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#FBFFDE]/80 text-[10px] font-mono truncate mr-2">{item.keyword}</span>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <ArrowUp className="w-2.5 h-2.5 text-green-400" />
                            <span className="text-green-400 text-xs font-bold">#{item.rank}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Traffic indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-3 left-3 right-3 pt-2 border-t border-[#D8F209]/10 flex items-center justify-center gap-2 text-[#D8F209] text-xs"
                  >
                    <TrendingUp className="w-3 h-3" />
                    <span>Traffic +315%</span>
                  </motion.div>
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
              
              {/* Visual - Left side: Content Funnel */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-4 overflow-hidden">
                  
                  {/* Content funnel stages */}
                  <div className="space-y-2 pb-12">
                    {[
                      { stage: 'Awareness', visitors: '10K', width: 100 },
                      { stage: 'Interest', visitors: '5K', width: 75 },
                      { stage: 'Consider', visitors: '2.5K', width: 55 },
                      { stage: 'Convert', visitors: '850', width: 35 }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-[#FBFFDE]/60">{item.stage}</span>
                          <span className="text-[#D8F209] font-bold">{item.visitors}</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.width}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                          className="h-6 bg-gradient-to-r from-[#D8F209]/40 to-[#D8F209] rounded"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Conversion rate */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="absolute bottom-3 left-3 right-3 pt-2 border-t border-[#D8F209]/10 text-center"
                  >
                    <div className="text-[#D8F209] text-xs font-bold">8.5% conversion</div>
                  </motion.div>
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

              {/* Visual - Right side: Analytics Dashboard */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-4 overflow-hidden">
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[
                      { label: 'Sessions', value: '47K', change: '+23%' },
                      { label: 'Bounce', value: '32%', change: '-15%' },
                      { label: 'Duration', value: '4:32', change: '+45%' },
                      { label: 'Conv.', value: '8.5%', change: '+67%' }
                    ].map((kpi, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                        className="bg-[#1A1A1A] border border-[#D8F209]/10 rounded-lg p-2"
                      >
                        <div className="text-[#FBFFDE]/40 text-[8px] mb-0.5">{kpi.label}</div>
                        <div className="text-[#D8F209] text-sm font-bold mb-0.5">{kpi.value}</div>
                        <div className={`text-[9px] font-bold ${kpi.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {kpi.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="relative h-12 mb-2">
                    <svg className="w-full h-full" viewBox="0 0 400 48" preserveAspectRatio="none">
                      <motion.path
                        d="M 0 40, L 65 35, L 130 30, L 200 20, L 265 25, L 330 10, L 400 5"
                        stroke="#D8F209"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 1.4 }}
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(216, 242, 9, 0.6))'
                        }}
                      />
                    </svg>
                  </div>

                  {/* Live indicator */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center justify-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D8F209]" />
                    <span className="text-[#D8F209] text-[9px] font-mono">LIVE</span>
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
