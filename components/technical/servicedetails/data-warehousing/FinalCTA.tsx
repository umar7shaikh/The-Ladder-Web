'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Subtle background - minimal */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #D8F209 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Full width container */}
      <div className="relative w-full px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              
              {/* Small line accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '80px' } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-1 bg-[#D8F209] rounded-full"
              />

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white font-bold text-[clamp(32px,5vw,56px)] leading-tight"
              >
                Unify your data and unlock its true potential
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#FBFFDE]/60 text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                Whether your data is scattered across systems or you need a foundation for analytics, we'll build a warehouse that centralizes everything and enables true data-driven decisions.
              </motion.p>

            </div>

            {/* Right: CTA */}
            <div className="flex flex-col gap-8 lg:items-end">
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full lg:w-auto"
              >
                <motion.a
                  href="/technical/contact"
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center lg:justify-start gap-3 px-10 py-5 bg-[#D8F209] text-[#1E1E1E] font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(216,242,9,0.4)]"
                >
                  Get your free data assessment
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3 lg:text-right"
              >
                {[
                  'No commitment required',
                  'Free infrastructure audit',
                  'See what\'s possible'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="flex items-center justify-center lg:justify-end gap-3 text-[#FBFFDE]/50 text-sm"
                  >
                    <span>{item}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D8F209]" />
                  </motion.div>
                ))}
              </motion.div>

            </div>

          </div>

          {/* Bottom divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-[#D8F209]/30 to-transparent mt-20 origin-center"
          />

        </motion.div>

      </div>
    </section>
  );
}
