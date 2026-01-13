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
    <div className={`my-6 p-3 sm:p-6 border-l-4 rounded-r-lg ${styles[type]} overflow-x-hidden`}>
      <div className="flex items-start gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl flex-shrink-0">{icons[type]}</span>
        <div className="flex-1 prose-p:my-2 break-words">{children}</div>
      </div>
    </div>
  );
}

// Code Title
export function CodeTitle({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#1a1a1a] text-[#D8F209] px-3 sm:px-4 py-2 rounded-t-lg text-[clamp(11px,2.5vw,13px)] font-mono border-b border-[#333333] mt-8 break-words">
      {children}
    </div>
  );
}

// Stats Box Component
export function StatsBox({ title, stats }: { title: string; stats: { label: string; value: string }[] }) {
  return (
    <div className="my-8 bg-[#252525] border border-[#333333] rounded-2xl p-4 sm:p-6 overflow-x-hidden">
      <h3 className="text-[#D8F209] font-bold text-[clamp(18px,4vw,24px)] mb-6 break-words">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-[#D8F209] font-bold text-[clamp(24px,5vw,32px)] mb-2 break-words">{stat.value}</div>
            <div className="text-[#FBFFDE]/60 text-[clamp(11px,2.5vw,13px)] break-words">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature Box Component
export function FeatureBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 bg-gradient-to-br from-[#252525] to-[#1E1E1E] border border-[#333333] rounded-xl p-4 sm:p-6 hover:border-[#D8F209]/30 transition-all duration-300 overflow-x-hidden">
      <h4 className="text-[#D8F209] font-bold text-[clamp(16px,3.5vw,20px)] mb-3 break-words">{title}</h4>
      <div className="text-[#FBFFDE]/70 text-[clamp(14px,3.5vw,16px)] break-words">{children}</div>
    </div>
  );
}

// Quote Component
export function Quote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <div className="my-8 relative overflow-x-hidden">
      <div className="absolute -left-2 sm:-left-4 top-0 text-4xl sm:text-6xl text-[#D8F209]/20 font-serif">"</div>
      <blockquote className="pl-4 sm:pl-8 pr-2 sm:pr-4 py-4 border-l-4 border-[#D8F209] bg-[#252525]/50 rounded-r-lg italic text-[#FBFFDE]/80 text-[clamp(14px,3.5vw,18px)] break-words">
        {children}
        {author && (
          <footer className="mt-3 text-[#D8F209] not-italic text-[clamp(12px,2.5vw,14px)] font-medium break-words">
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
    <div className="my-8 overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full px-4 sm:px-0">
        <table className="w-full border-collapse text-[clamp(12px,2.5vw,14px)]">
          <thead>
            <tr className="bg-[#252525]">
              <th className="text-left p-2 sm:p-4 text-[#D8F209] font-bold border border-[#333333]">Feature</th>
              <th className="text-left p-2 sm:p-4 text-[#FBFFDE]/60 font-bold border border-[#333333]">Before</th>
              <th className="text-left p-2 sm:p-4 text-[#D8F209] font-bold border border-[#333333]">After</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-[#252525]/50 transition-colors">
                <td className="p-2 sm:p-4 text-white border border-[#333333] break-words">{item.feature}</td>
                <td className="p-2 sm:p-4 text-[#FBFFDE]/60 border border-[#333333] break-words">{item.before}</td>
                <td className="p-2 sm:p-4 text-[#D8F209] border border-[#333333] break-words">{item.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Step Component
export function Steps({ children }: { children: ReactNode }) {
  return <div className="my-8 space-y-4 overflow-x-hidden">{children}</div>;
}

export function Step({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 sm:gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#D8F209] text-[#1E1E1E] rounded-full flex items-center justify-center font-bold text-[clamp(12px,2.5vw,16px)]">
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-bold text-[clamp(16px,3.5vw,18px)] mb-2 break-words">{title}</h4>
        <div className="text-[#FBFFDE]/70 text-[clamp(14px,3.5vw,16px)] break-words">{children}</div>
      </div>
    </div>
  );
}
