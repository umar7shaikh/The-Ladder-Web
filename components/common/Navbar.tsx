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


  const toggleDept = () => {
    const newDept = currentDept === 'marketing' ? 'technical' : 'marketing';
    router.push(`/${newDept}`);
    setIsMobileMenuOpen(false);
  };


  // Navigation links based on department
  const navLinks = currentDept === 'marketing' 
    ? [
        { label: 'Home', href: '/marketing' },
        { label: 'Services', href: '/marketing/services' },
        { label: 'About', href: '/marketing/about' },
        { label: 'Contact', href: '/marketing/contact' },
      ]
    : [
        { label: 'Home', href: '/technical' },
        { label: 'Products', href: '/technical/products' },
        { label: 'Solutions', href: '/technical/solutions' },
        { label: 'Careers', href: '/technical/careers' },
      ];


  return (
    <nav className="sticky top-0 z-50 bg-[#363A43] border-b border-[#FFE000]/20 h-[72px] flex items-center">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-[64px] py-0 flex items-center justify-between">
        {/* Logo Only */}
        <div className="flex-shrink-0">
          <Link href={`/${currentDept}`}>
            <Image 
              src="/logo.png" 
              alt="The Ladder Logo" 
              width={90} 
              height={90}
              className="rounded-full hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>


        {/* Navigation Links - Centered (Desktop) */}
        <div className="flex-1 hidden md:flex justify-center px-16">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium leading-[22px] text-[#FFF9CE] transition-all duration-200 hover:text-[#FFE000] ${
                  pathname === link.href ? 'font-bold text-[#FFE000]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>


        {/* Department Toggle Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <button
            onClick={toggleDept}
            className="px-6 py-2.5 border-2 border-[#FFE000] bg-[#FFE000] text-[#363A43] rounded-full text-sm font-semibold leading-[22px] hover:bg-transparent hover:text-[#FFE000] hover:border-[#FFE000] transition-all duration-200 h-[38px] flex items-center"
          >
            Switch to {currentDept === 'marketing' ? 'Technical' : 'Marketing'}
          </button>
        </div>


        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#FFE000] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#FFE000] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#FFE000] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>


      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#363A43] z-50">
          <div className="flex flex-col items-center pt-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium text-[#FFF9CE] transition-all duration-200 hover:text-[#FFE000] ${
                  pathname === link.href ? 'font-bold text-[#FFE000]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDept}
              className="mt-4 px-6 py-2.5 border-2 border-[#FFE000] bg-[#FFE000] text-[#363A43] rounded-full text-sm font-semibold hover:bg-transparent hover:text-[#FFE000] transition-all duration-200"
            >
              Switch to {currentDept === 'marketing' ? 'Technical' : 'Marketing'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
