// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
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

// Get all blog post slugs
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });
}

// Get all blog posts with metadata
export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      date: data.date,
      readTime: data.readTime,
      image: data.image,
      content,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get single blog post by slug
export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    author: data.author,
    date: data.date,
    readTime: data.readTime,
    image: data.image,
    content,
  };
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
