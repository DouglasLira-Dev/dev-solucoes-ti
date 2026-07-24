import { getGitHubRepos, categorizeRepos } from "@/lib/github";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

export const revalidate = 300; // Revalidar a cada 5 minutos

export default async function ProjetosPage() {
  // Buscar dados do GitHub no servidor
  const repos = await getGitHubRepos();
  const categorized = categorizeRepos(repos);

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
          {new Date(repo.pushed_at).toLocaleDateString("pt-BR")}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Projetos</h1>
            <p className="text-gray-300">
              Conheça meus projetos no GitHub
            </p>
          </div>
          <a
            href="https://github.com/DouglasLira-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-dark-card border border-dark-border px-4 py-2 rounded-lg hover:border-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Ver todos</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categorized.featured?.length > 0 ? (
            categorized.featured.map(renderRepoCard)
          ) : (
            <div className="col-span-2 text-center py-12 text-gray-400">
              <Github className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Nenhum projeto encontrado no GitHub</p>
              <p className="text-sm">Adicione projetos com topics como "cybersecurity" ou "java"</p>
            </div>
          )}
        </div>

        {categorized.cybersecurity.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-cyber-green mb-6">
              🔒 Cybersegurança
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorized.cybersecurity.slice(0, 4).map(renderRepoCard)}
            </div>
          </div>
        )}

        {categorized.desenvolvimento.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              💻 Desenvolvimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorized.desenvolvimento.slice(0, 4).map(renderRepoCard)}
            </div>
          </div>
        )}

        <div className="mt-12 bg-dark-card border border-dark-border rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm">
            ⚠️ Projetos de cybersegurança são realizados em ambientes controlados e autorizados
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Dados atualizados automaticamente via API do GitHub
          </p>
        </div>
      </div>
    </div>
  );
}