// components/technical/blogcomponents/MDXComponents.tsx
import { ReactNode } from 'react';

// Custom Callout Component
export function Callout({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'success' | 'tip' }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/50 text-blue-200',
    warning: 'bg-yellow-500/10 border-yellow-500/50 text-yellow-200',
    success: 'bg-green-500/10 border-green-500/50 text-green-200',
    tip: 'bg-[#D8F209]/10 border-[#D8F209]/50 text-[#D8F209]',
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    tip: '💫',
  };

  return (
    <div className={`my-6 p-6 border-l-4 rounded-r-lg ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icons[type]}</span>
        <div className="flex-1 prose-p:my-2">{children}</div>
      </div>
    </div>
  );
}

// Custom Code Block Title
export function CodeTitle({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#1a1a1a] text-[#D8F209] px-4 py-2 rounded-t-lg text-sm font-mono border-b border-[#333333] mt-8">
      {children}
    </div>
  );
}

// Stats Box Component
export function StatsBox({ title, stats }: { title: string; stats: { label: string; value: string }[] }) {
  return (
    <div className="my-8 bg-[#252525] border border-[#333333] rounded-2xl p-6">
      <h3 className="text-[#D8F209] font-bold text-xl mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-[#D8F209] font-bold text-3xl mb-2">{stat.value}</div>
            <div className="text-[#FBFFDE]/60 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature Box Component
export function FeatureBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 bg-gradient-to-br from-[#252525] to-[#1E1E1E] border border-[#333333] rounded-xl p-6 hover:border-[#D8F209]/30 transition-all duration-300">
      <h4 className="text-[#D8F209] font-bold text-lg mb-3">{title}</h4>
      <div className="text-[#FBFFDE]/70">{children}</div>
    </div>
  );
}

// Quote Component
export function Quote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <div className="my-8 relative">
      <div className="absolute -left-4 top-0 text-6xl text-[#D8F209]/20 font-serif">"</div>
      <blockquote className="pl-8 pr-4 py-4 border-l-4 border-[#D8F209] bg-[#252525]/50 rounded-r-lg italic text-[#FBFFDE]/80 text-lg">
        {children}
        {author && (
          <footer className="mt-3 text-[#D8F209] not-italic text-sm font-medium">
            — {author}
          </footer>
        )}
      </blockquote>
    </div>
  );
}

// Comparison Table Component
export function ComparisonTable({ items }: { items: { feature: string; before: string; after: string }[] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#252525]">
            <th className="text-left p-4 text-[#D8F209] font-bold border border-[#333333]">Feature</th>
            <th className="text-left p-4 text-[#FBFFDE]/60 font-bold border border-[#333333]">Before</th>
            <th className="text-left p-4 text-[#D8F209] font-bold border border-[#333333]">After</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-[#252525]/50 transition-colors">
              <td className="p-4 text-white border border-[#333333]">{item.feature}</td>
              <td className="p-4 text-[#FBFFDE]/60 border border-[#333333]">{item.before}</td>
              <td className="p-4 text-[#D8F209] border border-[#333333]">{item.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Step Component
export function Steps({ children }: { children: ReactNode }) {
  return <div className="my-8 space-y-4">{children}</div>;
}

export function Step({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-[#D8F209] text-[#1E1E1E] rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
        <div className="text-[#FBFFDE]/70">{children}</div>
      </div>
    </div>
  );
}
