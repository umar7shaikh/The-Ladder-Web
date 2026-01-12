'use client';

import Hero from '@/components/technical/servicedetails/ai-assistants/Hero';
import WhatMakesUsDifferent from '@/components/technical/servicedetails/ai-assistants/WhatMakesUsDifferent';
import WhatWeBuild from '@/components/technical/servicedetails/ai-assistants/WhatWeBuild';
import TechStack from '@/components/technical/servicedetails/ai-assistants/TechStack';
import DevelopmentProcess from '@/components/technical/servicedetails/ai-assistants/DevelopmentProcess';
import WhoThisIsFor from '@/components/technical/servicedetails/ai-assistants/WhoThisIsFor';
import WhatYouGet from '@/components/technical/servicedetails/ai-assistants/WhatYouGet';
import FinalCTA from '@/components/technical/servicedetails/ai-assistants/FinalCTA';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import { Bot, MessageSquare, Mic, Sparkles } from 'lucide-react';

export default function AIAssistantsPage() {
  const whatWeBuildCards = [
    {
      icon: Bot,
      title: 'Customer Support Bots',
      description: 'Intelligent chatbots that handle customer inquiries 24/7 with natural language understanding',
      highlight: 'Most Popular',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Context-aware responses',
        'Seamless human handoff'
      ]
    },
    {
      icon: Sparkles,
      title: 'AI Assistants',
      description: 'Virtual assistants that automate tasks, answer questions, and streamline workflows',
      highlight: 'Enterprise Ready',
      features: [
        'Task automation',
        'Document processing',
        'Calendar management',
        'API integrations'
      ]
    },
    {
      icon: Mic,
      title: 'Voice Agents',
      description: 'Voice-enabled AI assistants for phone systems and voice interfaces',
      features: [
        'Speech recognition',
        'Natural conversation flow',
        'Multi-language support',
        'Voice authentication'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Smart Recommendations',
      description: 'AI-powered recommendation engines that personalize experiences and increase engagement',
      features: [
        'Personalization algorithms',
        'Behavioral analysis',
        'Real-time recommendations',
        'A/B testing support'
      ]
    }
  ];

  return (
    <main className="bg-[#1E1E1E]">
      <Hero
        number="04"
        title="What if your systems could think, respond, and assist like a real teammate?"
        subtitle="AI & INTELLIGENT ASSISTANTS"
        description="From smart chatbots to internal AI tools, we build intelligent assistants that understand context, learn from interactions, and genuinely make work easier for your team and customers."
        primaryCTA="Build Your AI"
        secondaryCTA="See Examples"
      />
      
      <WhatMakesUsDifferent />
      <WhatWeBuild cards={whatWeBuildCards} />
      <TechStack />
      <DevelopmentProcess />
      <WhoThisIsFor />
      <WhatYouGet />
      <FinalCTA />
      <TechFooter />
    </main>
  );
}
