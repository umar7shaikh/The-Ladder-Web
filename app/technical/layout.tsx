import type { Metadata } from "next";
import Navbar from '@/components/common/Navbar';

export const metadata: Metadata = {
  title: "Technical Solutions | The Ladder",
  description: "Unlock technical excellence with The Ladder. AI, automation, data analytics, and web development for enterprise growth.",
};

export default function TechnicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-gray-100">
        {children}
      </main>
    </>
  );
}
