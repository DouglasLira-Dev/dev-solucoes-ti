import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import MDXComponents from '@/components/mdx/MDXComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// Gerar metadata dinâmica
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return seoMetadata({
    title: post.title,
    description: post.description,
    keywords: [post.category, ...post.tags],
    url: `/blog/${params.slug}`,
  });
}

// Gerar rotas estáticas
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const categoryColors = {
    desenvolvimento: 'text-primary bg-primary/10',
    cyberseguranca: 'text-cyber-green bg-cyber-green/10',
    geral: 'text-cyber-purple bg-cyber-purple/10',
  };

  const categoryLabels = {
    desenvolvimento: '💻 Desenvolvimento',
    cyberseguranca: '🔒 Cybersegurança',
    geral: '📚 Geral',
  };

  // Conteúdo MDX
  const mdxSource = post.content;

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Voltar */}
        <Link
          href={`/${params.locale}/blog`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

        {/* Header do Post */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime} min de leitura
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-gray-400 mb-4">{post.description}</p>
          )}

          <div className="flex items-center gap-3 text-gray-400">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-dark-surface text-gray-400 px-2 py-1 rounded-full border border-dark-border"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Conteúdo do Post */}
        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={mdxSource} components={MDXComponents} />
        </div>

        {/* Footer do Post */}
        <footer className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>
            <div className="text-sm text-gray-500">
              Publicado em {new Date(post.date).toLocaleDateString('pt-BR')}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}