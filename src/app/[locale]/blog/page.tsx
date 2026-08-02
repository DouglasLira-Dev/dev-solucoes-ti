import Link from 'next/link';
import { getAllPosts, getPostTags } from '@/lib/blog';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.blog.title,
    description: t.blog.subtitle,
    url: '/blog',
  });
}

export default function BlogPage({ params }: BlogPageProps) {
  const t = getDictionary(params.locale);
  const posts = getAllPosts();
  const tags = getPostTags();
  const dateLocale = params.locale === 'pt' ? 'pt-BR' : 'en-US';

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

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.blog.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t.blog.subtitle}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              <span className="text-gray-500 text-sm mr-2">{t.blog.tags}:</span>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-dark-surface text-gray-400 px-3 py-1 rounded-full border border-dark-border hover:border-primary transition-colors cursor-pointer"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <div className="bg-dark-card border border-dark-border rounded-lg p-12 text-center">
              <p className="text-gray-400 text-lg">
                {t.blog.nenhum}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {t.blog.em_breve}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString(dateLocale, {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} {t.blog.min_leitura}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2 hover:text-primary transition-colors">
                    <Link href={`/${params.locale}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-dark-surface text-gray-500 px-2 py-1 rounded-full border border-dark-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/${params.locale}/blog/${post.slug}`}
                      className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      {t.blog.ler_mais}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}