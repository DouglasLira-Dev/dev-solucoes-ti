interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "DouglasLira-Dev";

// Cache para evitar muitas requisições
let cache: {
  repos: GitHubRepo[] | null;
  user: GitHubUser | null;
  timestamp: number;
} = {
  repos: null,
  user: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

async function fetchFromGitHub<T>(endpoint: string): Promise<T | null> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    // Token opcional para aumentar limite de requisições
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, { headers });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching from GitHub:", error);
    return null;
  }
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  // Verificar cache
  if (cache.user && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.user;
  }

  const user = await fetchFromGitHub<GitHubUser>(`/users/${GITHUB_USERNAME}`);
  if (user) {
    cache.user = user;
    cache.timestamp = Date.now();
  }
  return user;
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  // Verificar cache
  if (cache.repos && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.repos;
  }

  const repos = await fetchFromGitHub<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );

  if (repos) {
    cache.repos = repos;
    cache.timestamp = Date.now();
    return repos;
  }

  return [];
}

export function categorizeRepos(repos: GitHubRepo[]) {
  const desenvolvimento = repos.filter((repo) =>
    repo.topics.some((topic) =>
      ["java", "spring-boot", "python", "javascript", "typescript", "react", "nextjs", "nodejs"].includes(topic.toLowerCase())
    )
  );

  const cybersecurity = repos.filter((repo) =>
    repo.topics.some((topic) =>
      ["cybersecurity", "security", "ctf", "hacking", "pentest", "vulnerability"].includes(topic.toLowerCase())
    )
  );

  const outros = repos.filter(
    (repo) =>
      !desenvolvimento.includes(repo) && !cybersecurity.includes(repo)
  );

  return {
    desenvolvimento,
    cybersecurity,
    outros,
    total: repos.length,
  };
}

export function getFeaturedRepos(repos: GitHubRepo[], limit: number = 6): GitHubRepo[] {
  // Ordenar por stars e depois por atualização
  return repos
    .sort((a, b) => {
      const starDiff = b.stargazers_count - a.stargazers_count;
      if (starDiff !== 0) return starDiff;
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    })
    .slice(0, limit);
}