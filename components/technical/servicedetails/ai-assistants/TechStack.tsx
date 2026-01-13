'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, TrendingUp, Bot, Brain, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

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

              {/* Visual - Right side: Chat Interface */}
              <div className="relative lg:pl-12">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-4 h-64 overflow-hidden">
                  
                  {/* Chat messages */}
                  <div className="space-y-3">
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#D8F209]/10 border border-[#D8F209]/20 rounded-lg px-3 py-2 max-w-[80%]">
                        <p className="text-[#FBFFDE]/80 text-xs">What's my total revenue this month?</p>
                      </div>
                    </motion.div>

                    {/* AI typing indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#1A1A1A] border border-[#D8F209]/10 rounded-lg px-3 py-2">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#D8F209]"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* AI response */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#1A1A1A] border border-[#D8F209]/10 rounded-lg px-3 py-2 max-w-[85%]">
                        <p className="text-[#FBFFDE]/80 text-xs mb-2">Your total revenue this month is <span className="text-[#D8F209] font-bold">$47,892</span></p>
                        <p className="text-[#FBFFDE]/50 text-[10px]">↑ 23% from last month</p>
                      </div>
                    </motion.div>

                    {/* Processing indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="flex gap-2 pt-2"
                    >
                      {['Intent Detected', 'Context Applied', 'Data Retrieved'].map((label, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.6 + i * 0.1 }}
                          className="flex items-center gap-1 bg-[#D8F209]/5 border border-[#D8F209]/20 rounded px-2 py-1"
                        >
                          <CheckCircle2 className="w-2 h-2 text-[#D8F209]" />
                          <span className="text-[9px] text-[#D8F209]/80">{label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Typing indicator at bottom */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-3 left-4 text-[10px] text-[#D8F209]/60 font-mono"
                  >
                    AI is typing...
                  </motion.div>
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
              
              {/* Visual - Left side: Learning Curve */}
              <div className="relative lg:pr-12 order-2 lg:order-1">
                <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 h-52">
                  
                  {/* Learning curve graph */}
                  <div className="relative h-32 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 400 128" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 25, 50, 75, 100].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={128 - (y * 1.28)}
                          x2="400"
                          y2={128 - (y * 1.28)}
                          stroke="rgba(216, 242, 9, 0.05)"
                          strokeWidth="1"
                        />
                      ))}
                      
                      {/* Learning curve */}
                      <motion.path
                        d="M 0 120, Q 100 100, 200 60, T 400 20"
                        stroke="#D8F209"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(216, 242, 9, 0.6))'
                        }}
                      />
                      
                      {/* Data points */}
                      {[
                        { x: 0, y: 120 },
                        { x: 100, y: 100 },
                        { x: 200, y: 60 },
                        { x: 300, y: 40 },
                        { x: 400, y: 20 }
                      ].map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="#D8F209"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
                          style={{
                            filter: 'drop-shadow(0 0 4px rgba(216, 242, 9, 0.8))'
                          }}
                        />
                      ))}
                    </svg>
                    
                    {/* Axis labels */}
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-[#FBFFDE]/40">
                      <span>Day 1</span>
                      <span>Week 1</span>
                      <span>Month 1</span>
                      <span>Month 3</span>
                      <span>Month 6</span>
                    </div>
                  </div>
                  
                  {/* Performance metrics */}
                  {/* <div className="mt-8 pt-4 border-t border-[#D8F209]/10 flex justify-around">
                    <div className="text-center">
                      <div className="text-[#D8F209] text-xl font-bold">+215%</div>
                      <div className="text-[#FBFFDE]/40 text-[10px]">Accuracy gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#D8F209] text-xl font-bold">∞</div>
                      <div className="text-[#FBFFDE]/40 text-[10px]">Learning</div>
                    </div>
                  </div> */}
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

    {/* Visual - Right side: Data Flow */}
    <div className="relative lg:pl-12">
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-4 overflow-hidden">
        
        {/* Vertical flow with connections */}
        <div className="space-y-3 py-2">
          
          {/* Input sources */}
          <div className="flex items-center justify-between gap-2">
            {['Website', 'Email', 'Chat'].map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="flex-1 bg-[#1A1A1A] border border-[#D8F209]/20 rounded-lg py-2 px-1 text-center"
              >
                <span className="text-[#D8F209] text-[10px] font-mono">{source}</span>
              </motion.div>
            ))}
          </div>

          {/* Animated arrows flowing down */}
          <div className="flex justify-center gap-8 h-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="text-[#D8F209] text-sm"
              >
                ↓
              </motion.div>
            ))}
          </div>

          {/* Central AI processor */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-[#D8F209] rounded-lg p-2 flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <Bot className="w-4 h-4 text-[#1E1E1E]" />
            <span className="text-[#1E1E1E] text-xs font-bold">AI Engine</span>
            
            {/* Processing animation */}
            <motion.div
              animate={{ x: [-100, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.div>

          {/* Animated arrows flowing down */}
          <div className="flex justify-center gap-8 h-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 + i * 0.3 }}
                className="text-[#D8F209] text-sm"
              >
                ↓
              </motion.div>
            ))}
          </div>

          {/* Output destinations */}
          <div className="flex items-center justify-between gap-2">
            {['CRM', 'Database', 'Dashboard'].map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                className="flex-1 bg-[#1A1A1A] border border-[#D8F209]/20 rounded-lg py-2 px-1 text-center"
              >
                <span className="text-[#D8F209] text-[10px] font-mono">{dest}</span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="mt-3 pt-3 border-t border-[#D8F209]/10 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#D8F209]"
          />
          <span className="text-[#FBFFDE]/40 text-[10px] font-mono">Data flowing</span>
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
