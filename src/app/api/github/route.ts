import { NextResponse } from "next/server";
import { getGitHubUser, getGitHubRepos, categorizeRepos, getFeaturedRepos } from "@/lib/github";

export async function GET() {
  try {
    // Buscar dados do GitHub
    const [user, repos] = await Promise.all([
      getGitHubUser(),
      getGitHubRepos(),
    ]);

    if (!user && repos.length === 0) {
      return NextResponse.json(
        { error: "Não foi possível buscar dados do GitHub" },
        { status: 500 }
      );
    }

    const categorized = categorizeRepos(repos);
    const featured = getFeaturedRepos(repos, 6);

    return NextResponse.json({
      user,
      repos: {
        all: repos,
        ...categorized,
        featured,
      },
    });
  } catch (error) {
    console.error("Error in GitHub API route:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar dados do GitHub" },
      { status: 500 }
    );
  }
}