// components/marketing/homecomponents/WhyLadder.tsx
'use client';

import { TrendingUp, Palette, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Growth-Driven Strategies',
    description: 'We focus on data-driven strategies to maximize your business growth and ROI.',
    position: 'left',
    topPct: 7
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: 'Creative Solutions',
    description: "Our creative team develops innovative solutions tailored to your brand's unique identity.",
    position: 'right',
    topPct: 30.0
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Personalized Campaigns',
    description: 'We create hyper-personalized campaigns to reach and engage your target audience.',
    position: 'left',
    topPct: 50
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Building Trust',
    description: 'We build lasting relationships with our clients based on unwavering trust and transparency.',
    position: 'right',
    topPct: 71
  }
];

export default function WhyLadder() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full">
            <span className="text-[clamp(10px,2.5vw,12px)] uppercase tracking-wider font-bold text-[#363A43]">
              Why Choose The Ladder
            </span>
          </div>
          <h2 className="text-[clamp(28px,5vw,56px)] font-bold text-[#363A43]">
            Your Shortcut to the Top
          </h2>
          <p className="text-[clamp(14px,3.5vw,18px)] text-[#363A43]/80 max-w-2xl mx-auto leading-relaxed">
            We're not just another agency — we're the ladder you climb to reach digital success, one step at a time.
          </p>
        </div>

        {/* DESKTOP: Ladder + Icons + Side Text */}
        <div className="hidden md:block relative mx-auto max-w-2xl" style={{ aspectRatio: '527/730' }}>
          {/* LADDER SVG - DESKTOP ONLY */}
          <svg 
            viewBox="0 0 527 730" 
            className="w-full h-full absolute inset-0" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M334 4C334 1.8 335.8 0 338 0H362C364.2 0 366 1.8 366 4V702H334V4Z" fill="#363A43"/>
            <rect x="186" width="32" height="147" rx="4" fill="#363A43"/>
            <rect x="186" y="155" width="32" height="147" rx="4" fill="#363A43"/>
            <rect x="186" y="311" width="32" height="147" rx="4" fill="#363A43"/>
            <path d="M186 436C186 433.8 187.8 432 190 432H214C216.2 432 218 433.8 218 436V702H186V436Z" fill="#363A43"/>
            <rect x="326" y="113" width="33" height="140" rx="4" transform="rotate(90 326 113)" fill="#363A43"/>
            <rect x="326" y="268" width="33" height="140" rx="4" transform="rotate(90 326 268)" fill="#363A43"/>
            <rect x="326" y="424" width="33" height="140" rx="4" transform="rotate(90 326 424)" fill="#363A43"/>
            <path d="M322 579C324.2 579 326 581.5 326 583.7V613H186V583.7C186 581.5 187.8 579 190 579H322Z" fill="#363A43"/>
            <path d="M527 729.7C517 728.6 411.4 701.3 265 701.3C118.6 701.3 5 729.2 0 729.7C0 718.4 118.6 663 265 663C411.4 663 527 718.4 527 729.7Z" fill="#363A43"/>
          </svg>

          {/* DESKTOP ICONS */}
          {features.map((feature, index) => (
            <div
              key={`icon-${index}`}
              className="absolute left-[45%] z-20"
              style={{
                top: `${feature.topPct}%`,
                transform: 'translateY(-50%)'
              }}
            >
              <div className="w-16 md:w-[clamp(64px,5vw,80px)] lg:w-[clamp(80px,6vw,96px)] h-16 md:h-[clamp(64px,5vw,80px)] lg:h-[clamp(80px,6vw,96px)] rounded-full bg-[#FFF9CE] flex items-center justify-center 
                              shadow-2xl border-4 border-white">
                <div className="text-[#363A43]">
                  {feature.icon}
                </div>
              </div>
            </div>
          ))}

          {/* DESKTOP LEFT TEXT - 1st & 3rd */}
          {features.map((feature, index) => 
            feature.position === 'left' && (
              <div
                key={`text-left-${index}`}
                className="absolute -left-34 w-80 lg:w-[clamp(320px,25vw,416px)] text-right pr-12 lg:pr-16 z-10"
                style={{
                  top: `${feature.topPct}%`,
                  transform: 'translateY(-50%)'
                }}
              >
                <h3 className="text-[clamp(16px,1.5vw,20px)] font-bold text-[#363A43] mb-1 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[clamp(13px,1.2vw,16px)] text-[#363A43]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          )}

          {/* DESKTOP RIGHT TEXT - 2nd & 4th */}
          {features.map((feature, index) => 
            feature.position === 'right' && (
              <div
                key={`text-right-${index}`}
                className="absolute -right-44 w-80 lg:w-[clamp(320px,25vw,416px)] text-left pl-12 lg:pl-16 z-10"
                style={{
                  top: `${feature.topPct}%`,
                  transform: 'translateY(-50%)'
                }}
              >
                <h3 className="text-[clamp(16px,1.5vw,20px)] font-bold text-[#363A43] mb-1 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[clamp(13px,1.2vw,16px)] text-[#363A43]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          )}
        </div>

        {/* MOBILE - CLEAN CARD LAYOUT (NO LADDER) */}
        <div className="md:hidden space-y-6 sm:space-y-8 px-2 sm:px-4 pt-8 sm:pt-12">
          {features.map((feature, index) => (
            <div key={index} className="max-w-md mx-auto p-6 sm:p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="w-[clamp(72px,18vw,80px)] h-[clamp(72px,18vw,80px)] mx-auto mb-5 sm:mb-6 rounded-full bg-[#FFF9CE] flex items-center justify-center shadow-2xl border-4 border-white">
                <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#363A43]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-[clamp(18px,4.5vw,24px)] font-bold text-[#363A43] mb-3 sm:mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[clamp(14px,3.5vw,16px)] text-[#363A43]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
