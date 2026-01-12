// components/marketing/contactcomponents/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'No message provided',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result);

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });

      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false,
      });

    } catch (error: any) {
      console.error('Email send failed:', error);

      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="relative h-auto bg-[#1E1E1E] overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Container */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">

          {/* Left Side - Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-[#D8F209] font-bold text-[clamp(32px,5vw,56px)] leading-tight">
              Contact Us
            </h2>

            <p className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] leading-relaxed max-w-lg">
              Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help bring your vision to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                  <Mail className="w-full h-full text-[#D8F209]" />
                </div>
                <a
                  href="mailto:contact@theladders.tech"
                  className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] hover:text-[#D8F209] transition-colors duration-300"
                >
                  contact@theladders.tech
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                  <Phone className="w-full h-full text-[#D8F209]" />
                </div>
                <a
                  href="tel:+91 9325856501"
                  className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] hover:text-[#D8F209] transition-colors duration-300"
                >
                  +91 93258 56501
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                  <MapPin className="w-full h-full text-[#D8F209]" />
                </div>
                <address className="text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)] not-italic leading-relaxed">
                  Pune, Maharashtra, India
                </address>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                    ? 'bg-[#D8F209]/10 text-[#D8F209] border border-[#D8F209]/30'
                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company Name Field */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#D8F209] text-[clamp(13px,3vw,14px)] font-medium mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300
                           placeholder:text-[#FBFFDE]/40
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your phone number"
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
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full bg-transparent border border-[#FBFFDE]/30 rounded-lg px-4 py-3
                           text-[#FBFFDE] text-[clamp(14px,3.5vw,16px)]
                           focus:outline-none focus:ring-2 focus:ring-[#D8F209]/40 focus:border-[#D8F209]
                           transition-all duration-300 resize-none
                           placeholder:text-[#FBFFDE]/40
                           disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 rounded border-[#FBFFDE]/30 
                           bg-transparent text-[#D8F209]
                           focus:ring-2 focus:ring-[#D8F209]/40 focus:ring-offset-0
                           cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-[#FBFFDE]/70 text-[clamp(13px,3vw,14px)] cursor-pointer"
                >
                  I accept the{' '}
                  <a href="/terms" className="text-[#D8F209] hover:underline">
                    Terms & Conditions
                  </a>
                  {' '}*
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D8F209] text-[#1E1E1E] px-8 py-3 rounded-lg
                         text-[clamp(14px,3.5vw,16px)] font-semibold
                         hover:bg-[#c4db08] transition-all duration-300
                         focus:outline-none focus:ring-4 focus:ring-[#D8F209]/40
                         active:scale-95 shadow-lg hover:shadow-xl
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
