// app/technical/blog/page.tsx
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogGrid from '@/components/technical/blogcomponents/BlogGrid';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();

  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24">
        <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
                Blog
              </span>
            </div>
            
            <h1 className="text-[#D8F209] font-bold text-[clamp(32px,6vw,64px)] leading-tight mb-4">
              Insights, ideas, and practical<br />thinking
            </h1>
            
            <p className="text-[#FBFFDE]/70 text-[clamp(15px,3.5vw,18px)] max-w-2xl mx-auto">
              Articles on design, technology, automation, and building digital systems that actually scale.
            </p>
          </div>

          {/* Blog Grid with Filtering - Client Component */}
          <BlogGrid allPosts={allPosts} allCategories={allCategories} />
        </div>
      </section>
    </main>
  );
}
