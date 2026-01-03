import React from 'react';
import { Mail, Target, Clock, BarChart3 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white backdrop-blur-md border border-gray-200/30 rounded-[2.5rem] shadow-sm text-center w-full aspect-square max-w-[280px] sm:max-w-[320px] transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
    {/* Circuit-like pattern overlay */}
    <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal lines */}
        <line x1="40" y1="80" x2="120" y2="80" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="200" y1="80" x2="280" y2="80" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="40" y1="160" x2="100" y2="160" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="220" y1="160" x2="280" y2="160" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="60" y1="240" x2="130" y2="240" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="190" y1="240" x2="260" y2="240" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        
        {/* Vertical lines */}
        <line x1="80" y1="40" x2="80" y2="100" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="240" y1="40" x2="240" y2="100" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="80" y1="220" x2="80" y2="280" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="240" y1="220" x2="240" y2="280" stroke="#363A43" strokeWidth="1" strokeDasharray="2 4" />
        
        {/* Small circuit nodes */}
        <circle cx="80" cy="80" r="3" fill="#363A43" />
        <circle cx="240" cy="80" r="3" fill="#363A43" />
        <circle cx="80" cy="240" r="3" fill="#363A43" />
        <circle cx="240" cy="240" r="3" fill="#363A43" />
        <circle cx="160" cy="60" r="2" fill="#363A43" />
        <circle cx="160" cy="260" r="2" fill="#363A43" />
      </svg>
    </div>

    {/* Decorative corner accents from original design */}
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-l border-gray-300 z-10" />
    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-1.5 h-1.5 bg-[#363A43] rounded-full z-10" />
    <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-1 h-1 bg-gray-400 rounded-full opacity-50 z-10" />

    {/* Icon Container */}
    <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center relative z-10">
      {icon}
    </div>

    <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-[#363A43] mb-2 relative z-10">{title}</h3>
    <p className="text-[#363A43]/70 text-[clamp(12px,3vw,14px)] leading-relaxed max-w-[180px] relative z-10">
      {description}
    </p>
  </div>
);

// Empty Grid Cell with gradient and fading grid lines
const EmptyGridCell = ({ gradientPosition }: { gradientPosition: string }) => {
  const gradientStyles = {
    'bottom-right': 'radial-gradient(circle at bottom right, rgba(255, 224, 0, 0.3), transparent 70%)',
    'bottom-left': 'radial-gradient(circle at bottom left, rgba(255, 224, 0, 0.3), transparent 70%)',
    'top-right': 'radial-gradient(circle at top right, rgba(255, 224, 0, 0.3), transparent 70%)',
    'top-left': 'radial-gradient(circle at top left, rgba(255, 224, 0, 0.3), transparent 70%)',
  };

  const maskStyles = {
    'bottom-right': 'radial-gradient(circle at bottom right, black, transparent 50%)',
    'bottom-left': 'radial-gradient(circle at bottom left, black, transparent 50%)',
    'top-right': 'radial-gradient(circle at top right, black, transparent 50%)',
    'top-left': 'radial-gradient(circle at top left, black, transparent 50%)',
  };

  return (
    <div className="hidden md:block w-full aspect-square max-w-[280px] lg:max-w-[320px] rounded-[2.5rem] overflow-hidden relative">
      {/* Yellow Gradient Background */}
      <div 
        className="w-full h-full absolute inset-0"
        style={{
          background: gradientStyles[gradientPosition as keyof typeof gradientStyles]
        }}
      />
      
      {/* Grid Lines with Mask */}
      <div 
        className="w-full h-full absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(100, 100, 100, 0.4) 39px, rgba(100, 100, 100, 0.4) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(100, 100, 100, 0.4) 39px, rgba(100, 100, 100, 0.4) 40px)
          `,
          WebkitMaskImage: maskStyles[gradientPosition as keyof typeof maskStyles],
          maskImage: maskStyles[gradientPosition as keyof typeof maskStyles]
        }}
      />
    </div>
  );
};

// The Specific Center Ladder Component using your SVG
const CenterLadder = () => (
  <div className="relative hidden md:flex items-center justify-center w-full aspect-square max-w-[280px] lg:max-w-[320px]">
    {/* Yellow blob gradient in center */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 224, 0, 0.6), rgba(255, 224, 0, 0.2) 50%, transparent 70%)'
        }}
      />
    </div>
    
    {/* The SVG Ladder */}
    <svg 
      width="180" 
      height="180" 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl relative z-10 w-[clamp(140px,35vw,180px)] h-[clamp(140px,35vw,180px)]"
    >
      <g style={{ backdropFilter: 'blur(20px)' }}>
        <rect width="180" height="180" rx="90" fill="white" fillOpacity="0.02"/>
        <rect x="0.5" y="0.5" width="179" height="179" rx="89.5" stroke="black" strokeOpacity="0.1"/>
        <path d="M104.716 38.3396C104.716 36.4952 106.211 35 108.055 35C109.9 35 111.395 36.4952 111.395 38.3396V140.827H104.716V38.3396Z" fill="#363A43"/>
        <rect x="73.8232" y="35" width="6.67927" height="22.1637" rx="3.33964" fill="#363A43"/>
        <rect x="73.8232" y="58.4287" width="6.67927" height="22.1637" rx="3.33964" fill="#363A43"/>
        <rect x="73.8232" y="81.8608" width="6.67927" height="22.1637" rx="3.33964" fill="#363A43"/>
        <path d="M73.8232 103.465C73.8232 101.621 75.3184 100.125 77.1629 100.125C79.0073 100.125 80.5025 101.621 80.5025 103.465V140.828H73.8232V103.465Z" fill="#363A43"/>
        <rect x="103.045" y="52.0962" width="5.06598" height="29.2218" rx="2.53299" transform="rotate(90 103.045 52.0962)" fill="#363A43"/>
        <rect x="103.045" y="75.5298" width="5.06598" height="29.2218" rx="2.53299" transform="rotate(90 103.045 75.5298)" fill="#363A43"/>
        <rect x="103.045" y="98.959" width="5.06598" height="29.2218" rx="2.53299" transform="rotate(90 103.045 98.959)" fill="#363A43"/>
        <path d="M99.0449 122.388C101.254 122.388 103.045 124.179 103.045 126.388V127.454H73.8231V126.388C73.8231 124.179 75.614 122.388 77.8231 122.388H99.0449Z" fill="#363A43"/>
        <path d="M145 145C142.912 144.841 120.862 140.725 90.3131 140.725C59.7648 140.725 36.0441 144.92 35.0005 145C35.0005 143.295 59.7648 134.947 90.3131 134.947C120.862 134.947 145 143.295 145 145Z" fill="#363A43"/>
      </g>
    </svg>
  </div>
);

export default function FeatureGrid() {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 bg-white flex items-center justify-center min-h-screen overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-8 sm:top-10 md:top-12 left-1/2 -translate-x-1/2 text-center space-y-2 px-4 w-full max-w-4xl">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FFE000] rounded-full mb-2">
          <span className="text-[clamp(10px,2.5vw,12px)] font-bold uppercase tracking-wider text-[#363A43]">
            Email Marketing
          </span>
        </div>
        <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[#363A43] font-poppins leading-tight">
          Convert Leads into Customers
        </h2>
        <p className="text-[clamp(14px,3.5vw,18px)] text-[#363A43]/70">
          Deliver the right message to the right audience at the right time.
        </p>
      </div>

      {/* 3x3 Layout Grid */}
      <div className="container max-w-6xl mx-auto px-4 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-y-10 lg:gap-y-12 items-center justify-items-center">
          
          {/* Row 1 */}
          <EmptyGridCell gradientPosition="bottom-right" />
          
          <FeatureCard 
            icon={<Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#363A43]" strokeWidth={1.5} />}
            title="Personalized Campaigns"
            description="Tailored emails that connect with your audience."
          />
          
          <EmptyGridCell gradientPosition="bottom-left" />

          {/* Row 2 */}
          <FeatureCard 
            icon={<Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#363A43]" strokeWidth={1.5} />}
            title="Audience Segmentation"
            description="Reach the right people with targeted content."
          />
          
          <CenterLadder />

          <FeatureCard 
            icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#363A43]" strokeWidth={1.5} />}
            title="Automated Workflows"
            description="Save time with scheduled and triggered emails."
          />

          {/* Row 3 */}
          <EmptyGridCell gradientPosition="top-right" />
          
          <FeatureCard 
            icon={<BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#363A43]" strokeWidth={1.5} />}
            title="Performance Tracking"
            description="Optimize with open rates, clicks and conversions."
          />
          
          <EmptyGridCell gradientPosition="top-left" />
          
        </div>
      </div>
    </section>
  );
}
