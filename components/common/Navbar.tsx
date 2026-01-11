'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine current department
  const isMarketing = pathname.startsWith('/marketing');
  const isTechnical = pathname.startsWith('/technical');
  const currentDept = isMarketing ? 'marketing' : isTechnical ? 'technical' : 'marketing';

  // Color schemes based on department
  const colors = currentDept === 'marketing' 
    ? {
        bg: '#363A43',
        primary: '#FFE000',
        text: '#FFF9CE',
        textHover: '#FFE000',
        buttonBg: '#FFE000',
        buttonText: '#363A43',
        border: '#FFE000',
      }
    : {
        bg: '#1E1E1E',
        primary: '#D8F209',
        text: '#FBFFDE',
        textHover: '#D8F209',
        buttonBg: '#D8F209',
        buttonText: '#1E1E1E',
        border: '#D8F209',
      };

  const toggleDept = () => {
    const newDept = currentDept === 'marketing' ? 'technical' : 'marketing';
    router.push(`/${newDept}`);
    setIsMobileMenuOpen(false);
  };

  // Dynamic logo based on department
  const logoSrc = currentDept === 'marketing' ? '/logo.png' : '/techlogo.png';

  // Navigation links based on department (without Portfolio)
  const navLinks = currentDept === 'marketing' 
    ? [
        { label: 'Home', href: '/marketing' },
        { label: 'Services', href: '/marketing/services' },
        { label: 'About', href: '/marketing/about' },
        { label: 'Contact', href: '/marketing/contact' },
      ]
    : [
        { label: 'Home', href: '/technical' },
        { label: 'Services', href: '/technical/services' },
        { label: 'Blogs', href: '/technical/blog' },
        { label: 'About Us', href: '/technical/about' },
      ];

  return (
    <nav 
      className="sticky top-0 z-50 h-[72px] flex items-center transition-colors duration-300"
      style={{ 
        backgroundColor: colors.bg,
        borderBottom: `1px solid ${colors.primary}33`
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-[64px] py-0 flex items-center justify-between">
        {/* Logo Only */}
        <div className="flex-shrink-0">
          <Link href={`/${currentDept}`}>
            <Image 
              src={logoSrc}
              alt="The Ladder Logo" 
              width={90} 
              height={90}
              className="rounded-full hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Navigation Links - Centered (Desktop) */}
        <div className="flex-1 hidden md:flex justify-center px-16">
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium leading-[22px] transition-all duration-200 ${
                  pathname === link.href 
                    ? 'font-bold' 
                    : ''
                }`}
                style={{
                  color: pathname === link.href ? colors.primary : colors.text,
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.textHover}
                onMouseLeave={(e) => e.currentTarget.style.color = pathname === link.href ? colors.primary : colors.text}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Vertical Divider */}
            <div 
              className="h-6 w-px"
              style={{ backgroundColor: colors.primary, opacity: 0.4 }}
            ></div>
            
            {/* Clean Portfolio CTA Button */}
            <button
              onClick={() => router.push(`/${currentDept}/portfolio`)}
              className="px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              View Portfolio →
            </button>
          </div>
        </div>

        {/* Department Toggle Slider (Desktop) */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <span 
            className={`text-sm font-medium transition-all duration-200 ${
              currentDept === 'marketing' ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ color: colors.text }}
          >
            Marketing
          </span>
          
          <button
            onClick={toggleDept}
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: colors.primary,
              focusRingColor: colors.primary 
            }}
            aria-label="Toggle department"
          >
            <span
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out"
              style={{
                transform: currentDept === 'technical' ? 'translateX(28px)' : 'translateX(0)',
              }}
            />
          </button>
          
          <span 
            className={`text-sm font-medium transition-all duration-200 ${
              currentDept === 'technical' ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ color: colors.text }}
          >
            Technical
          </span>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ backgroundColor: colors.primary }}
          ></span>
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            style={{ backgroundColor: colors.primary }}
          ></span>
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ backgroundColor: colors.primary }}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[72px] z-50 transition-colors duration-300"
          style={{ backgroundColor: colors.bg }}
        >
          <div className="flex flex-col items-center pt-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-all duration-200 ${
                  pathname === link.href ? 'font-bold' : ''
                }`}
                style={{
                  color: pathname === link.href ? colors.primary : colors.text,
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Divider */}
            <div 
              className="w-32 h-px my-2"
              style={{ backgroundColor: colors.primary, opacity: 0.4 }}
            ></div>
            
            {/* Mobile Portfolio Button */}
            <button
              onClick={() => {
                router.push(`/${currentDept}/portfolio`);
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              View Portfolio →
            </button>
            
            {/* Mobile Toggle Slider */}
            <div className="flex items-center gap-3 mt-4">
              <span 
                className={`text-sm font-medium ${
                  currentDept === 'marketing' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ color: colors.text }}
              >
                Marketing
              </span>
              
              <button
                onClick={toggleDept}
                className="relative w-14 h-7 rounded-full transition-all duration-300"
                style={{ backgroundColor: colors.primary }}
                aria-label="Toggle department"
              >
                <span
                  className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out"
                  style={{
                    transform: currentDept === 'technical' ? 'translateX(28px)' : 'translateX(0)',
                  }}
                />
              </button>
              
              <span 
                className={`text-sm font-medium ${
                  currentDept === 'technical' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ color: colors.text }}
              >
                Technical
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
