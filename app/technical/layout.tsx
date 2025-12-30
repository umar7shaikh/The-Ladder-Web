import Navbar from '@/components/common/Navbar';

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
