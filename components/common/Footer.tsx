'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const currentDept = pathname.startsWith('/technical') ? 'technical' : 'marketing';
  
  const colors = currentDept === 'marketing' 
    ? {
        bg: '#363A43',
        text: '#FFF9CE',
        border: '#FFE000',
        primary: '#FFE000',
      }
    : {
        bg: '#1E1E1E',
        text: '#FBFFDE',
        border: '#D8F209',
        primary: '#D8F209',
      };

  return (
    <footer 
      className="border-t py-12 px-4 md:px-8 transition-colors duration-300"
      style={{ 
        backgroundColor: colors.bg,
        color: colors.text,
        borderTopColor: colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: colors.primary }}>The Ladder</h3>
            <p className="text-sm opacity-90">Climbing digital excellence, one step at a time.</p>
          </div>

          {/* Marketing Links */}
          <nav aria-label="Marketing pages">
            <h4 className="font-semibold mb-4" style={{ color: colors.primary }}>Marketing</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/marketing" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/services" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/about" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketing/contact" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Technical Links */}
          <nav aria-label="Technical pages">
            <h4 className="font-semibold mb-4" style={{ color: colors.primary }}>Technical</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/technical" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/technical/services" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/technical/blog" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/technical/about" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h4 className="font-semibold mb-4" style={{ color: colors.primary }}>Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/sitemap" 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  prefetch={true}
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t pt-8 text-center text-sm opacity-75"
          style={{ borderTopColor: colors.border }}
        >
          <p>&copy; {new Date().getFullYear()} The Ladder. All rights reserved. | Climbing to success together.</p>
        </div>
      </div>
    </footer>
  );
}
