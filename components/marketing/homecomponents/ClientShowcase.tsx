"use client";

import React from 'react';
import Image from 'next/image';

const CLIENT_LOGOS = [
  { id: 1, src: '/p1.webp', alt: 'Client 1' },
  { id: 2, src: '/p2.webp', alt: 'Client 2' },
  { id: 3, src: '/p3.webp', alt: 'Client 3' },
  { id: 4, src: '/p4.webp', alt: 'Client 4' },
  { id: 5, src: '/p5.webp', alt: 'Client 5' },
  { id: 6, src: '/p6.webp', alt: 'Client 6' },
  { id: 7, src: '/p7.webp', alt: 'Client 7' },
  { id: 8, src: '/p8.webp', alt: 'Client 8' },
  { id: 9, src: '/p9.webp', alt: 'Client 9' },
  { id: 10, src: '/p10.webp', alt: 'Client 10' },
];

const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function ClientShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-[#FFE000] rounded-full">
          <span className="text-xs font-bold uppercase tracking-wider text-[#363A43]">
            Our Clients
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#363A43] mb-4 font-poppins">
          Our Esteemed Clients
        </h2>
        
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Partnerships Built on Results & Reliability
        </p>
      </div>

      <div className="slider h-20 md:h-24">
        <div className="slide-track">
          {marqueeLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="slide transition-all duration-500 hover:scale-90 cursor-pointer flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-12 md:h-16 w-auto object-contain block"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .slider {
          height: 80px;
          position: relative;
          width: 100%;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .slider::before,
        .slider::after {
          position: absolute;
          background-image: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
          content: '';
          height: 100%;
          width: 25%;
          z-index: 2;
          pointer-events: none;
        }
        .slider::before { left: 0; top: 0; }
        .slider::after { right: 0; top: 0; transform: rotateZ(180deg); }

        /* FIXED: MORE SPACING - 250px per slide */
        .slide-track {
          width: calc(250px * 20);
          display: flex;
          animation: scroll 25s linear infinite;
          justify-content: space-between;
        }

        .slide {
          width: 250px;
          height: 80px;
          display: grid;
          place-items: center;
          transition: 0.5s;
          cursor: pointer;
        }
        .slide:hover {
          transform: scale(0.9);
        }

        @keyframes scroll {
          0% { transform: translateX(0px); }
          100% { transform: translateX(calc(-250px * 10)); }
        }

        @media screen and (max-width: 768px) {
          .slide-track {
            width: calc(150px * 20);
          }
          .slide {
            width: 150px;
          }
          @keyframes scroll {
            0% { transform: translateX(0px); }
            100% { transform: translateX(calc(-150px * 10)); }
          }
        }
      `}</style>
    </section>
  );
}
