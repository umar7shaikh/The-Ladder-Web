// components/marketing/contactcomponents/ContactInfo.tsx
'use client';

export default function ContactInfo() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-[clamp(2rem,4vw+0.5rem,3rem)] leading-tight font-bold text-[#363A43] font-poppins">
            Get In Touch With Our Experts
          </h2>
          <p className="text-base text-[#363A43]/70 max-w-2xl">
            We're here to answer your questions, understand your challenges, and help you find the right solution.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* EMAIL Card */}
          <div className="flex flex-col items-center text-center gap-4">
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-[#FFE000] rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#363A43] font-poppins">EMAIL</h3>

            {/* Description */}
            <p className="text-sm text-[#363A43]/70 leading-relaxed max-w-xs">
              For general inquiries, partnerships, and customer support, reach out to us at our official email.
            </p>

            {/* Email Box */}
            <div className="w-full bg-[#FFF9CE] rounded-lg py-3 px-4">
              <a href="mailto:info@theladder.com" className="text-sm font-medium text-[#363A43] hover:underline">
                info@theladder.com
              </a>
            </div>
          </div>

          {/* PHONE Card */}
          <div className="flex flex-col items-center text-center gap-4">
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-[#FFE000] rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#363A43] font-poppins">PHONE</h3>

            {/* Description */}
            <p className="text-sm text-[#363A43]/70 leading-relaxed max-w-xs">
              Prefer to speak with someone directly? Give us a call for quick answers and personalized support.
            </p>

            {/* Phone Box */}
            <div className="w-full bg-[#FFF9CE] rounded-lg py-3 px-4">
              <a href="tel:+917709818" className="text-sm font-medium text-[#363A43] hover:underline">
                +91_709818
              </a>
            </div>
          </div>

          {/* OFFICE Card */}
          <div className="flex flex-col items-center text-center gap-4">
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-[#FFE000] rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#363A43]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#363A43] font-poppins">OFFICE</h3>

            {/* Description */}
            <p className="text-sm text-[#363A43]/70 leading-relaxed max-w-xs">
              Visit us at our headquarters. We're open from Monday to Friday, 10 AM to 6 PM.
            </p>

            {/* Office Box */}
            <div className="w-full bg-[#FFF9CE] rounded-lg py-3 px-4">
              <span className="text-sm font-medium text-[#363A43]">
                The Ladder
              </span>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#363A43]/10 mt-16"></div>

      </div>
    </section>
  );
}
