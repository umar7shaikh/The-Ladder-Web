'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface HeroProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function Hero({
  number,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative bg-[#1E1E1E] overflow-hidden min-h-screen flex items-center">
      
      {/* Subtle Single Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D8F209]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Large Background Number - Minimal */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D8F209]/[0.03] font-bold leading-none pointer-events-none select-none text-[clamp(300px,40vw,700px)]"
      >
        {number}
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 max-w-2xl">
            
            {/* Clean Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5"
            >
              <div className="w-2 h-2 bg-[#D8F209] rounded-full animate-pulse" />
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-xs">
                {subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div 
                className="text-[#D8F209]/40 font-bold leading-none text-[clamp(50px,10vw,80px)]"
              >
                {number}
              </div>
              <h1 
                className="text-white font-bold leading-tight text-[clamp(28px,5.5vw,48px)]"
              >
                {title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#FBFFDE]/70 text-lg leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Clean CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/technical/contact">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(216, 242, 9, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-[#D8F209] text-[#1E1E1E] font-semibold rounded-lg text-base transition-all duration-300 flex items-center gap-2"
                >
                  {primaryCTA}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>

              <Link href="#portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-[#D8F209]/30 text-[#D8F209] font-semibold rounded-lg text-base transition-all duration-300 hover:border-[#D8F209]/60 hover:bg-[#D8F209]/5"
                >
                  {secondaryCTA}
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Animated Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <AnimatedTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Animated Terminal Component
function AnimatedTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  
  const terminalLines = [
    '$ npm create next-app@latest',
    '✓ Project initialized successfully',
    '$ npm install framer-motion lucide-react',
    '✓ Dependencies installed',
    '$ git init && git add .',
    '$ git commit -m "Initial commit"',
    '✓ Repository created',
    '$ npm run build',
    '✓ Build completed in 12.4s',
    '$ vercel deploy --prod',
    '✓ Deployed to production',
    '> https://your-project.vercel.app',
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines((prev) => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Terminal Window */}
      <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-[#D8F209]/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[#FBFFDE]/40 text-sm font-mono">terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px]">
          {lines.map((line, index) => {
            if (!line || typeof line !== 'string') return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                {line.startsWith('$') ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[#D8F209]">$</span>
                    <span className="text-[#FBFFDE]/90">{line.substring(2)}</span>
                  </div>
                ) : line.startsWith('✓') ? (
                  <div className="flex items-center gap-2 text-[#28CA42]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{line.substring(2)}</span>
                  </div>
                ) : line.startsWith('>') ? (
                  <div className="text-[#D8F209] hover:underline cursor-pointer">
                    {line}
                  </div>
                ) : (
                  <div className="text-[#FBFFDE]/70">{line}</div>
                )}
              </motion.div>
            );
          })}
          
          {/* Blinking Cursor */}
          {lines.length === 12 && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-[#D8F209] ml-1"
            />
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/0 rounded-xl blur-xl -z-10" />
    </div>
  );
}
