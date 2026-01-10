'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Package } from 'lucide-react';

export default function WhatYouGet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const deliverables = [
    {
      title: 'Custom-built website',
      description: 'No templates, no shortcuts—built specifically for your business'
    },
    {
      title: 'Responsive design for all devices',
      description: 'Perfect experience on mobile, tablet, and desktop'
    },
    {
      title: 'Clean, maintainable codebase',
      description: 'Easy for any developer to understand and work with'
    },
    {
      title: 'Performance-optimized build',
      description: 'Fast load times and smooth interactions baked in'
    },
    {
      title: 'SEO-ready structure',
      description: 'Built to be discovered by search engines from day one'
    },
    {
      title: 'Post-launch support & guidance',
      description: 'We don\'t disappear after deployment'
    }
  ];

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Subtle gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8F209]/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#D8F209] rounded-full mb-3">
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">
              WHAT YOU GET
            </span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(36px,6vw,56px)] leading-tight mb-3">
            What You Get
          </h2>
          
          <p className="text-[#FBFFDE]/60 text-lg max-w-2xl mx-auto">
            Everything you need for a production-ready website
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-2xl p-8 border border-[#D8F209]/10 hover:border-[#D8F209]/30 transition-all duration-500 h-full">
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8F209]/0 to-[#D8F209]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="relative z-10 flex gap-4">
                  
                  {/* Checkmark */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#D8F209] flex items-center justify-center mt-1"
                  >
                    <Check className="w-5 h-5 text-[#1E1E1E]" strokeWidth={3} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#D8F209] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#FBFFDE]/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 text-[#D8F209]/10 text-4xl font-bold leading-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16 pt-12 border-t border-[#D8F209]/10"
        >
          <p className="text-[#FBFFDE]/50 text-base max-w-2xl mx-auto">
            Every deliverable is documented, explained, and handed over with complete transparency.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
