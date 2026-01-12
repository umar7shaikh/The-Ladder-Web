'use client';

import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What services does The Ladders Tech offer?',
    answer: 'We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, branding, and custom software solutions. Our team specializes in creating modern, responsive websites using cutting-edge technologies like React, Next.js, and Node.js, tailored to meet your business objectives.',
  },
  {
    id: 2,
    question: 'How long does it take to complete a web development project?',
    answer: 'Project timelines vary based on complexity and scope. A standard business website typically takes 4-6 weeks, while more complex web applications can take 8-12 weeks or longer. We provide a detailed timeline during our initial consultation after understanding your specific requirements and goals.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing support and maintenance after project completion?',
    answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance optimization, bug fixes, and technical assistance. We believe in building long-term partnerships with our clients to ensure your digital presence continues to perform optimally.',
  },
  {
    id: 4,
    question: 'What technologies and platforms do you work with?',
    answer: 'We work with modern, industry-standard technologies including React, Next.js, Node.js, MongoDB, TypeScript, and Tailwind CSS for web development. We also specialize in responsive design, API integrations, real-time features, and cloud deployment platforms like Vercel and Render. Our technology stack is chosen to ensure scalability, performance, and maintainability.',
  },
  {
    id: 5,
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary depending on scope, complexity, features, and timeline. We offer flexible pricing models tailored to your budget and requirements. After our initial consultation where we understand your needs, we provide a detailed proposal with transparent pricing. Contact us for a free consultation and custom quote for your specific project.',
  },
  {
    id: 6,
    question: 'Will I be able to update the website myself after it\'s built?',
    answer: 'Absolutely! We build websites with user-friendly content management systems that allow you to easily update content, images, and other elements without technical knowledge. We also provide training and documentation to ensure you\'re comfortable managing your website. For more complex updates, our support team is always available to assist.',
  },
  {
    id: 7,
    question: 'Do you work with startups and small businesses?',
    answer: 'Yes, we work with businesses of all sizes, from startups and small businesses to established enterprises. We understand the unique challenges and budget constraints of growing businesses and offer scalable solutions that can evolve with your company. Our goal is to help you establish a strong digital presence regardless of your company size.',
  },
  {
    id: 8,
    question: 'What is your development process like?',
    answer: 'Our process begins with a discovery phase to understand your goals and requirements, followed by planning and wireframing. We then move to design, development, testing, and deployment. Throughout the project, we maintain transparent communication, provide regular updates, and involve you in key decisions. We follow agile methodologies to ensure flexibility and timely delivery.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative h-auto bg-[#1E1E1E] overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Container - Same as ImpactStats */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#D8F209] font-bold text-[clamp(32px,5vw,48px)] leading-tight mb-3 sm:mb-4">
            FAQs
          </h2>
          <p className="text-[#FBFFDE]/70 text-[clamp(14px,3.5vw,16px)]">
            Everything You Need to Know About The Ladders Tech
          </p>
        </div>

        {/* FAQ Accordion - FULL WIDTH */}
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-[#FBFFDE]/20 pb-4 sm:pb-6"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-start justify-between gap-4 text-left 
                         focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 rounded-lg p-2 -m-2
                         hover:bg-[#FBFFDE]/5 transition-colors duration-300"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-[#D8F209] text-[clamp(16px,4vw,20px)] font-semibold flex-1">
                  {faq.question}
                </span>
                <ChevronUp
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#D8F209] flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#FBFFDE]/80 text-[clamp(14px,3.5vw,16px)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
