'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Bot, Brain, MessageSquare } from 'lucide-react';

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
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">AI STACK</span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(40px,7vw,72px)] leading-[1.1] mb-3">
            Intelligent Conversations.<br />
            Human-Like Understanding.
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg max-w-2xl mx-auto">
            Every AI assistant built for natural understanding, contextual awareness, and continuous learning
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

{/* 1. NLP - Left */}
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
          <Brain className="w-4 h-4 text-[#D8F209]" />
          <span className="text-[#D8F209] text-sm font-medium">NLP</span>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-4xl lg:text-5xl">
        Natural Understanding
      </h3>
      
      <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
        Advanced NLP that understands intent, context, and nuance. Not just keyword matching—actual comprehension.
      </p>

      {/* Stats inline */}
      <div className="flex lg:justify-end gap-8 pt-4">
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">99%</div>
          <div className="text-[#FBFFDE]/40 text-sm">accuracy</div>
        </div>
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">24/7</div>
          <div className="text-[#FBFFDE]/40 text-sm">available</div>
        </div>
      </div>
    </div>

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* NLP processing visualization */}
        <div className="space-y-3">
          {['User Intent', 'Context Analysis', 'Response Generation'].map((label, i) => (
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
              <div className="text-[#FBFFDE]/50 text-xs">{label}</div>
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
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">AI processing pipeline</div>
      </div>
    </div>

  </div>
  
  {/* Dot on timeline */}
  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
</motion.div>


          {/* 2. LEARNING - Right */}
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
                  {/* Learning curve visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FBFFDE]/60 text-xs">AI Intelligence</span>
                      <span className="text-[#D8F209] text-xs font-bold">Increasing</span>
                    </div>
                    <div className="h-16 bg-[#1E1E1E] rounded-lg overflow-hidden relative">
                      <motion.svg
                        className="w-full h-full"
                        viewBox="0 0 200 60"
                      >
                        <motion.path
                          d="M 10 50 Q 50 40, 90 30 T 170 10"
                          stroke="#D8F209"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : {}}
                          transition={{ duration: 2, delay: 0.8 }}
                        />
                      </motion.svg>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[#FBFFDE]/60 text-xs">Learning Rate</span>
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
                  <Zap className="w-4 h-4 text-[#D8F209]" />
                  <span className="text-[#D8F209] text-sm font-medium">Learning</span>
                </div>
                
                <h3 className="text-white font-bold text-4xl lg:text-5xl">
                  Gets Smarter
                </h3>
                
                <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
                  Machine learning that improves with every interaction. Your AI assistant learns your business language.
                </p>

                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">Auto</div>
                    <div className="text-[#FBFFDE]/40 text-sm">learning</div>
                  </div>
                  <div>
                    <div className="text-[#D8F209] text-3xl font-bold">24/7</div>
                    <div className="text-[#FBFFDE]/40 text-sm">improving</div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D8F209] border-4 border-[#1E1E1E]" />
          </motion.div>

{/* 3. INTEGRATION - Left */}
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
          <MessageSquare className="w-4 h-4 text-[#D8F209]" />
          <span className="text-[#D8F209] text-sm font-medium">Integration</span>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-4xl lg:text-5xl">
        Works Everywhere
      </h3>
      
      <p className="text-[#FBFFDE]/60 text-lg leading-relaxed">
        Seamlessly integrates with your CRM, email, website, and any system. One AI, infinite touchpoints.
      </p>

      <div className="flex lg:justify-end gap-8 pt-4">
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">100+</div>
          <div className="text-[#FBFFDE]/40 text-sm">integrations</div>
        </div>
        <div>
          <div className="text-[#D8F209] text-3xl font-bold">API</div>
          <div className="text-[#FBFFDE]/40 text-sm">ready</div>
        </div>
      </div>
    </div>

    {/* Visual - Right side */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6">
        {/* Integration network visualization */}
        <div className="grid grid-cols-3 gap-3">
          {['CRM', 'Email', 'Website', 'Slack', 'API', 'DB'].map((sys, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="aspect-square bg-[#1E1E1A] border border-[#D8F209]/20 rounded-lg flex items-center justify-center"
            >
              <span className="text-[#D8F209] text-xs font-mono">{sys}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center text-[#FBFFDE]/40 text-xs">Connected systems</div>
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
              "AI should feel natural, not robotic—<br className="hidden lg:block" />
              <span className="text-[#D8F209]">that's the difference between chatbots and intelligent assistants</span>."
            </p>
            
            <div className="h-px w-24 bg-[#D8F209] mx-auto mb-8" />
            
            <p className="text-[#FBFFDE]/40 text-sm">
              Every AI built with one goal:<br />
              <span className="text-[#FBFFDE]/60">Conversations that feel human, intelligence that's superhuman</span>
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
            {['OpenAI', 'LangChain', 'Python', 'Node.js', 'TensorFlow'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
