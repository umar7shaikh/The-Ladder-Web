'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative h-auto bg-[#1E1E1E] overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Container */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-[#D8F209] font-bold text-[clamp(32px,5vw,56px)] leading-tight">
              Contact Us
            </h2>

            <p className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                  <Mail className="w-full h-full text-[#D8F209]" />
                </div>
                <a 
                  href="mailto:hello@relume.io" 
                  className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] hover:text-[#D8F209] transition-colors duration-300"
                >
                  hello@relume.io
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                  <Phone className="w-full h-full text-[#D8F209]" />
                </div>
                <a 
                  href="tel:+13551000000" 
                  className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] hover:text-[#D8F209] transition-colors duration-300"
                >
                  +1 (355) 000-0000
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                  <MapPin className="w-full h-full text-[#D8F209]" />
                </div>
                <address className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] not-italic leading-relaxed">
                  123 Sample St, Sydney NSW 2000 AU
                </address>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40"
                  placeholder=""
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40"
                  placeholder=""
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300 resize-none
                           placeholder:text-[#FBFFDE]/40"
                  placeholder="Type your message..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-[#FBFFDE]/30 
                           bg-transparent text-[#D8F209]
                           focus:ring-2 focus:ring-[#D8F209]/40 focus:ring-offset-0
                           cursor-pointer"
                />
                <label 
                  htmlFor="acceptTerms" 
                  className="text-[#FBFFDE]/70 text-[clamp(13px,3vw,14px)] cursor-pointer"
                >
                  I accept the Terms
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#D8F209] text-[#1E1E1E] px-8 py-3 rounded-lg
                         text-[clamp(14px,3.5vw,16px)] font-semibold
                         hover:bg-[#c4db08] transition-all duration-300
                         focus:outline-none focus:ring-4 focus:ring-[#D8F209]/40
                         active:scale-95 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
