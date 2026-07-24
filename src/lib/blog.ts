import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: 'desenvolvimento' | 'cyberseguranca' | 'geral';
  tags: string[];
  readingTime: number;
  content: string;
}

export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files.filter((file) => file.endsWith('.mdx'));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calcular tempo de leitura (aprox. 200 palavras por minuto)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'DEV Soluções',
      category: data.category || 'geral',
      tags: data.tags || [],
      readingTime,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, '')))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

export function getPostTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}