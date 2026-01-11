// components/technical/blogcomponents/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
}: BlogCardProps) {
  const hasValidImage = image && !image.includes('placeholder');

  return (
    <Link href={`/technical/blog/${slug}`}>
      <div className="group relative bg-[#252525] rounded-2xl overflow-hidden hover:bg-[#2a2a2a] transition-all duration-300 h-full flex flex-col">
        {/* Image or Category Placeholder */}
        <div className="relative w-full h-48 bg-[#333333] overflow-hidden flex items-center justify-center">
          {hasValidImage ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#252525] to-[#1E1E1E]">
              <span className="text-[#D8F209] font-bold text-[clamp(24px,5vw,36px)] text-center px-6">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category Badge */}
          <div className="inline-block mb-3">
            <span className="px-3 py-1 bg-[#D8F209]/10 text-[#D8F209] text-[clamp(11px,2.5vw,12px)] font-medium rounded-full uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-[clamp(18px,4vw,20px)] leading-tight mb-3 group-hover:text-[#D8F209] transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#FBFFDE]/60 text-[clamp(13px,3vw,14px)] leading-relaxed mb-4 flex-1">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#D8F209]/20 flex items-center justify-center">
                <span className="text-[#D8F209] font-bold text-sm">
                  {author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white text-[clamp(12px,2.5vw,13px)] font-medium">
                  {author}
                </p>
                <p className="text-[#FBFFDE]/40 text-[clamp(11px,2vw,12px)]">
                  {date} • {readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
