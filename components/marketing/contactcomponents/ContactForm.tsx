// components/marketing/contactcomponents/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] leading-tight font-bold text-[#363A43] font-poppins mb-8">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[#363A43]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-[#FFE000] rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[#363A43] placeholder:text-[#363A43]/40"
                  required
                />
              </div>

              {/* Company Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-sm font-medium text-[#363A43]">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                  required
                />
              </div>

              {/* Email and Phone Fields - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#363A43]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#363A43]">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#363A43]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5] resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#FFE000] cursor-pointer"
                  required
                />
                <label htmlFor="acceptTerms" className="text-sm text-[#363A43]/80 cursor-pointer">
                  I accept the{' '}
                  <a href="/terms" className="text-[#363A43] underline hover:text-[#FFE000]">
                    Terms & Conditions
                  </a>{' '}
                  *
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#FFE000] text-[#363A43] rounded-lg text-base font-semibold hover:bg-[#FFE000]/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

          {/* Right Side - Map */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[500px] lg:h-full min-h-[400px] bg-[#E5E5E5] rounded-2xl overflow-hidden relative">
              {/* Placeholder Map - Replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#B0B0B0]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              
              {/* Uncomment and add your Google Maps embed URL */}
              {/* <iframe
                src="YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
