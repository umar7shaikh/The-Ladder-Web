'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function WhoThisIsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const text = "This service is ideal for businesses with data scattered across multiple systems, struggling with data inconsistencies and duplicates, needing a single source of truth for analytics, and ready to build a foundation for data-driven decision making.";

  const words = text.split(' ');

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Giant floating "WHO?" text in background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[#D8F209]/[0.03] font-bold text-[clamp(200px,30vw,500px)] leading-none">
          WHO?
        </span>
      </motion.div>

      {/* Container with side margins */}
      <div className="relative w-full px-6 lg:px-12">
        
        {/* Warning header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <AlertTriangle className="w-8 h-8 text-[#D8F209]" strokeWidth={2} />
          </motion.div>
          
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-[#D8F209]"
            />
            <span className="text-[#D8F209] text-sm uppercase tracking-[0.3em] font-bold">
              Important Notice
            </span>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-[#D8F209]"
            />
          </div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <AlertTriangle className="w-8 h-8 text-[#D8F209]" strokeWidth={2} />
          </motion.div>
        </motion.div>

        {/* Main content box */}
        <div className="relative w-full">
          
          {/* Content box with borders */}
          <div className="relative w-full bg-gradient-to-br from-[#D8F209]/10 via-[#D8F209]/5 to-transparent border-2 border-[#D8F209]/30 rounded-2xl py-16 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            
            {/* Warning stripes INSIDE main box */}
            <div className="absolute inset-0 opacity-[0.03] rounded-2xl">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #D8F209,
                    #D8F209 20px,
                    transparent 20px,
                    transparent 40px
                  )`
                }}
              />
            </div>

            {/* Animated scan line */}
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8F209]/50 to-transparent"
            />

            {/* Corner brackets */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#D8F209] rounded-tl-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#D8F209] rounded-tr-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#D8F209] rounded-bl-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#D8F209] rounded-br-2xl"
            />

            {/* Animated word-by-word text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="relative z-10 text-center"
            >
              <h2 className="text-white font-bold leading-[1.4] text-[clamp(24px,3.5vw,48px)]">
                {words.map((word, i) => {
                  const isHighlight = [
                    'ideal',
                    'scattered',
                    'multiple',
                    'systems',
                    'struggling',
                    'inconsistencies',
                    'duplicates',
                    'needing',
                    'single',
                    'source',
                    'truth',
                    'analytics',
                    'foundation',
                    'data-driven',
                    'decision',
                    'making'
                  ].includes(word.toLowerCase().replace(/[.,]/g, ''));

                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + i * 0.03,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className={`inline-block mr-[0.35em] ${
                        isHighlight 
                          ? 'text-[#D8F209] font-black' 
                          : 'text-white'
                      }`}
                      style={{
                        textShadow: isHighlight ? '0 0 30px rgba(216, 242, 9, 0.4)' : 'none'
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h2>
            </motion.div>

            {/* Blinking cursor */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.7 + words.length * 0.03
              }}
              className="relative z-10 text-center mt-4"
            >
              <span className="text-[#D8F209] text-6xl font-bold">|</span>
            </motion.div>

            {/* Bottom warning label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + words.length * 0.03 + 0.5 }}
              className="relative z-10 flex items-center justify-center gap-3 mt-12 pt-8 border-t border-[#D8F209]/20"
            >
              <div className="h-px w-12 bg-[#D8F209]" />
              <span className="text-[#D8F209]/70 text-xs uppercase tracking-[0.2em] font-medium">
                Self-Assessment Required
              </span>
              <div className="h-px w-12 bg-[#D8F209]" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
