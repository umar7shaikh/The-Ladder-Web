// components/technical/blogcomponents/BlogGrid.tsx
'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

interface BlogGridProps {
  allPosts: BlogPost[];
  allCategories: string[];
}

export default function BlogGrid({ allPosts, allCategories }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('View all');

  const filteredPosts = selectedCategory === 'View all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory('View all')}
          className={`px-4 py-2 rounded-lg text-[clamp(13px,3vw,14px)] font-medium transition-all duration-300 ${
            selectedCategory === 'View all'
              ? 'bg-[#D8F209] text-[#1E1E1E]'
              : 'bg-[#252525] text-[#FBFFDE]/70 hover:bg-[#2a2a2a] border border-[#333333]'
          }`}
        >
          View all
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-[clamp(13px,3vw,14px)] font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-[#D8F209] text-[#1E1E1E]'
                : 'bg-[#252525] text-[#FBFFDE]/70 hover:bg-[#2a2a2a] border border-[#333333]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
}
