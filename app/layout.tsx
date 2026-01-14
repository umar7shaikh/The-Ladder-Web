import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "The Ladder | Digital Marketing & Technical Solutions",
  description: "The Ladder offers premium digital marketing and technical solutions to help brands climb to success. Expert strategies, measurable results, and proven growth.",
  keywords: ["digital marketing", "technical solutions", "web development", "business growth"],
  authors: [{ name: "The Ladder" }],
  creator: "The Ladder",
  publisher: "The Ladder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theladder.com",
    siteName: "The Ladder",
    title: "The Ladder | Digital Marketing & Technical Solutions",
    description: "Premium digital marketing and technical solutions for business growth",
    images: [
      {
        url: "https://theladder.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Ladder - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ladder | Digital Marketing & Technical Solutions",
    description: "Premium digital marketing and technical solutions for business growth",
    creator: "@theladder",
    images: ["https://theladder.com/twitter-image.png"],
  },
  alternates: {
    canonical: "https://theladder.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "The Ladder",
                  "url": "https://theladder.com",
                  "logo": "https://theladder.com/icon.svg",
                  "sameAs": [
                    "https://twitter.com/theladder"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "",
                    "contactType": "customer service"
                  }
                },
                {
                  "@type": "WebSite",
                  "name": "The Ladder",
                  "url": "https://theladder.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://theladder.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [];
}
