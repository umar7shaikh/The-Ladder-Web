// app/technical/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { 
  Callout, 
  CodeTitle, 
  StatsBox, 
  FeatureBox, 
  Quote, 
  ComparisonTable,
  Steps,
  Step 
} from '@/components/technical/blogcomponents/MDXComponents';

// Custom components for MDX
const components = {
  Callout,
  CodeTitle,
  StatsBox,
  FeatureBox,
  Quote,
  ComparisonTable,
  Steps,
  Step,
};

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      {/* Back Button */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 pt-8">
        <Link 
          href="/technical/blog"
          className="inline-flex items-center gap-2 text-[#D8F209] hover:gap-3 transition-all duration-300 text-[clamp(14px,3vw,15px)] font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#D8F209]/10 text-[#D8F209] text-[clamp(11px,2.5vw,13px)] font-medium rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[#D8F209] font-bold text-[clamp(32px,6vw,56px)] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#333333]">
            <div className="w-12 h-12 rounded-full bg-[#D8F209]/20 flex items-center justify-center">
              <span className="text-[#D8F209] font-bold text-lg">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-white text-[clamp(14px,3vw,16px)] font-medium">
                {post.author}
              </p>
              <p className="text-[#FBFFDE]/60 text-[clamp(12px,2.5vw,14px)]">
                {post.date} • {post.readTime}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && !post.image.includes('placeholder') ? (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-[#252525]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-[#252525] to-[#1E1E1E] flex items-center justify-center border border-[#333333]">
              <span className="text-[#D8F209] font-bold text-[clamp(48px,8vw,96px)]">
                {post.category}
              </span>
            </div>
          )}

          {/* MDX Content */}
          <article className="prose prose-invert prose-lg max-w-none
            prose-headings:text-[#D8F209] prose-headings:font-bold
            prose-h1:text-[clamp(32px,5vw,48px)] prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-[clamp(24px,4vw,36px)] prose-h2:mb-4 prose-h2:mt-10
            prose-h3:text-[clamp(20px,3.5vw,28px)] prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-[#FBFFDE]/80 prose-p:leading-relaxed prose-p:text-[clamp(15px,3.5vw,18px)] prose-p:mb-6
            prose-a:text-[#D8F209] prose-a:no-underline hover:prose-a:underline prose-a:transition-all
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-[#D8F209] prose-code:bg-[#252525] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-[#333333] prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:my-6
            prose-ul:text-[#FBFFDE]/80 prose-ul:my-6 prose-ul:space-y-2
            prose-ol:text-[#FBFFDE]/80 prose-ol:my-6 prose-ol:space-y-2
            prose-li:marker:text-[#D8F209] prose-li:text-[clamp(15px,3.5vw,17px)] prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-l-[#D8F209] prose-blockquote:text-[#FBFFDE]/70 prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:py-2
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-hr:border-[#333333] prose-hr:my-12
            prose-table:border-collapse prose-table:w-full prose-table:my-8
            prose-th:bg-[#252525] prose-th:text-[#D8F209] prose-th:font-bold prose-th:p-4 prose-th:border prose-th:border-[#333333]
            prose-td:p-4 prose-td:border prose-td:border-[#333333] prose-td:text-[#FBFFDE]/80
          ">
            <MDXRemote source={post.content} components={components} />
          </article>
        </div>
      </section>
    </main>
  );
}
