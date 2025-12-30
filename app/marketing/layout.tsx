import Navbar from '@/components/common/Navbar';

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
