import type { Metadata } from "next";
import Navbar from '@/components/common/Navbar';

export const metadata: Metadata = {
  title: "Marketing Solutions | The Ladder",
  description: "Elevate your brand with The Ladder's marketing solutions. Creative strategies, targeted campaigns, and measurable results.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        {children}
      </main>
    </>
  );
}
