import { getGitHubRepos, categorizeRepos, getFeaturedRepos } from "@/lib/github";
import { generateMetadata as seoMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

export const revalidate = 300; // Revalidar a cada 5 minutos

interface ProjetosPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: ProjetosPageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.projetos.title,
    description: t.projetos.subtitle,
    url: "/projetos",
  });
}

export default async function ProjetosPage({ params }: ProjetosPageProps) {
  const t = getDictionary(params.locale);
  const dateLocale = params.locale === 'pt' ? 'pt-BR' : 'en-US';

  const repos = await getGitHubRepos();
  const categorized = categorizeRepos(repos);
  const featured = getFeaturedRepos(repos, 4);

  const renderRepoCard = (repo: any) => (
    <div
      key={repo.id}
      className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white hover:text-primary transition-colors">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {repo.description && (
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.topics.slice(0, 5).map((topic: string) => (
          <span
            key={topic}
            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {topic}
          </span>
        ))}
        {repo.topics.length > 5 && (
          <span className="text-xs text-gray-500">+{repo.topics.length - 5}</span>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-400">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          {repo.forks_count}
        </span>
        <span className="text-xs">
          {new Date(repo.pushed_at).toLocaleDateString(dateLocale)}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">{t.projetos.title}</h1>
            <p className="text-gray-300">
              {t.projetos.subtitle}
            </p>
          </div>
          <a
            href="https://github.com/DouglasLira-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-dark-card border border-dark-border px-4 py-2 rounded-lg hover:border-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>{t.projetos.ver_todos}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured?.length > 0 ? (
            featured.map(renderRepoCard)
          ) : (
            <div className="col-span-2 text-center py-12 text-gray-400">
              <Github className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>{t.projetos.nenhum}</p>
              <p className="text-sm">{t.projetos.dica}</p>
            </div>
          )}
        </div>

        {categorized.cybersecurity.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-cyber-green mb-6">
              {t.projetos.cyberseguranca}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorized.cybersecurity.slice(0, 4).map(renderRepoCard)}
            </div>
          </div>
        )}

        {categorized.desenvolvimento.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              {t.projetos.desenvolvimento}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorized.desenvolvimento.slice(0, 4).map(renderRepoCard)}
            </div>
          </div>
        )}

        <div className="mt-12 bg-dark-card border border-dark-border rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm">
            {t.projetos.aviso}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {t.projetos.atualizacao}
          </p>
        </div>
      </div>
    </div>
  );
}