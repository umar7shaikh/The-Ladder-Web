'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Check } from 'lucide-react';

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

          {/* Three Main Points - Alternating Left/Right */}
          
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

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative">
        {/* Speed Lines Animation */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { 
                width: `${100 - i * 15}%`,
                opacity: [0, 1, 0]
              } : {}}
              transition={{
                duration: 1.5,
                delay: 0.6 + i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="h-1 bg-[#D8F209] rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(216, 242, 9, 0.5)'
              }}
            />
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
              
              {/* Visual - Left side */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative">
                  {/* Shield layers animation */}
                  <div className="flex items-center justify-center h-48">
                    <div className="relative">
                      <Shield className="w-24 h-24 text-[#D8F209]" strokeWidth={1.5} />
                      
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 1,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                          className="absolute inset-0 border-2 border-[#D8F209] rounded-full"
                        />
                      ))}
                    </div>
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

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative">
        {/* Growth bars */}
        <div className="flex items-end justify-center gap-2 h-48">
          {[30, 45, 40, 60, 55, 75, 70, 90].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${height}%` } : {}}
              transition={{
                duration: 0.8,
                delay: 1 + i * 0.1,
                type: "spring"
              }}
              className="w-full max-w-[40px] bg-[#D8F209]/30 rounded-t-lg hover:bg-[#D8F209]/50 transition-colors cursor-pointer"
            />
          ))}
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
