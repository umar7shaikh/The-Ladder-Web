'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Settings, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';

export default function DevelopmentProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Use Case',
      subtitle: 'Defining the Vision',
      description: 'We identify where AI can have the biggest impact. We map conversation flows, user intents, and success metrics.',
      deliverables: [
        'Use case analysis',
        'Conversation flow mapping',
        'AI strategy document',
        'ROI projections'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      icon: Settings,
      title: 'Design',
      subtitle: 'Crafting the Experience',
      description: 'We design the AI personality, conversation patterns, and integration architecture. Every interaction is intentional.',
      deliverables: [
        'AI personality & tone',
        'Conversation design',
        'Integration architecture',
        'Prototype demos'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '03',
      icon: Code2,
      title: 'Training',
      subtitle: 'Teaching Your AI',
      description: 'We train your AI with your data, business context, and conversation examples. You see it learn in real-time.',
      deliverables: [
        'Trained AI models',
        'Knowledge base integration',
        'Testing & refinement',
        'Performance metrics'
      ],
      duration: '2-4 weeks'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deployment',
      subtitle: 'Going Live & Learning',
      description: 'We deploy to production, monitor conversations, and continuously improve. Your AI gets smarter with every interaction.',
      deliverables: [
        'Production deployment',
        'Monitoring dashboard',
        '30-day optimization',
        'Ongoing learning system'
      ],
      duration: '1 week'
    }
  ];

  return (
    <section ref={ref} className="relative bg-[#1E1E1E] py-12 lg:py-16 overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#D8F209 1px, transparent 1px), linear-gradient(90deg, #D8F209 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#D8F209] rounded-full mb-3">
            <span className="text-[#1E1E1E] text-xs font-bold uppercase tracking-wider">
              AI DEVELOPMENT PROCESS
            </span>
          </div>
          
          <h2 className="text-white font-bold text-[clamp(36px,6vw,56px)] leading-tight mb-3">
            From Concept to Conversation
          </h2>
          
          <p className="text-[#FBFFDE]/50 text-lg">
            A proven process that transforms ideas into intelligent AI assistants
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block mb-20">
          
          {/* Progress bar container */}
          <div className="relative mb-16">
            {/* Background line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#D8F209]/10" />
            
            {/* Active progress line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(activeStep / (steps.length - 1)) * 100}%` } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-8 left-0 h-0.5 bg-[#D8F209]"
            />

            {/* Step indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index <= activeStep;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setActiveStep(index)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    {/* Circle */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        backgroundColor: isActive ? '#D8F209' : '#252525'
                      }}
                      className="relative w-16 h-16 rounded-full border-2 border-[#D8F209]/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#D8F209] z-10"
                    >
                      <Icon 
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isActive ? 'text-[#1E1E1E]' : 'text-[#D8F209]'
                        } group-hover:text-[#1E1E1E]`}
                        strokeWidth={2}
                      />
                      
                      {/* Pulse effect when active */}
                      {isActive && (
                        <motion.div
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                          className="absolute inset-0 border-2 border-[#D8F209] rounded-full"
                        />
                      )}
                    </motion.div>

                    {/* Label */}
                    <div className="text-center">
                      <div className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                        isActive ? 'text-[#D8F209]' : 'text-[#FBFFDE]/40'
                      } group-hover:text-[#D8F209]`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-[#FBFFDE]/30">
                        {step.duration}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active step details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-2xl p-10 border border-[#D8F209]/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left: Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-[#D8F209] text-sm font-medium mb-2">
                    Step {steps[activeStep].number}
                  </div>
                  <h3 className="text-white font-bold text-3xl mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-[#D8F209]/70 text-lg">
                    {steps[activeStep].subtitle}
                  </p>
                </div>

                <p className="text-[#FBFFDE]/60 text-base leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="pt-4">
                  <div className="text-[#FBFFDE]/40 text-xs uppercase tracking-wider mb-3">
                    What You Get
                  </div>
                  <div className="space-y-2">
                    {steps[activeStep].deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center gap-2 text-[#FBFFDE]/70 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D8F209] flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Visual representation */}
              <div className="flex items-center justify-center">
                <motion.div
                  key={activeStep}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64"
                >
                  {/* Large number background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#D8F209]/10 font-bold text-[200px] leading-none">
                      {steps[activeStep].number}
                    </span>
                  </div>

                  {/* Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {React.createElement(steps[activeStep].icon, {
                      className: "w-24 h-24 text-[#D8F209]",
                      strokeWidth: 1.5
                    })}
                  </div>

                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-dashed border-[#D8F209]/20 rounded-full"
                  />
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-2xl p-6 border border-[#D8F209]/20"
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 text-[#D8F209]/20 font-bold text-5xl">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D8F209]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#D8F209]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{step.title}</h3>
                      <p className="text-[#FBFFDE]/40 text-sm">{step.duration}</p>
                    </div>
                  </div>

                  <p className="text-[#FBFFDE]/60 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#FBFFDE]/50 text-xs">
                        <div className="w-1 h-1 rounded-full bg-[#D8F209]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting line to next step */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#D8F209]/20" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-[#FBFFDE]/50 text-base mb-6">
            Typical timeline: 5-9 weeks from use case to deployment
          </p>
          <motion.a
            href="/technical/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D8F209] text-[#1E1E1E] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D8F209]/30"
          >
            Start Building Your AI
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
