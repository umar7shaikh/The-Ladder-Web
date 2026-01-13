'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ContactSection from '@/components/technical/techhomecomponents/TContactSection';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';

export default function ContactPage() {
  return (
    <>
      {/* Small Hero Section */}
      <section className="relative bg-[#1E1E1E] py-16 lg:py-24 overflow-hidden">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(#D8F209 1px, transparent 1px), linear-gradient(90deg, #D8F209 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-[#D8F209]/5 rounded-full blur-[80px]"
        />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-[#D8F209]/5 rounded-full blur-[100px]"
        />

        <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10">
          
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D8F209] rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#1E1E1E]" />
              <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">
                Get in Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-bold mb-6 text-[clamp(40px,7vw,72px)] leading-[1.1]"
            >
              Let's Build
              <br />
              <span className="text-[#D8F209]">Something Great</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#FBFFDE]/60 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. 
              Drop us a message and let's start creating intelligent 
              solutions tailored for your business.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <TechFooter />
    </>
  );
}
