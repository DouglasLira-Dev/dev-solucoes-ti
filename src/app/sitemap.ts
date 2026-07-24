import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://assistenciatecnicasolucao.dev";

// Páginas estáticas
const pages = [
  "",
  "/sobre",
  "/servicos",
  "/projetos",
  "/ferramentas",
  "/blog",
  "/contato",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Páginas em português
  const ptPages = pages.map((page) => ({
    url: `${baseUrl}/pt${page}`,
    lastModified: currentDate,
    changeFrequency: page === "" ? "daily" : "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Páginas em inglês
  const enPages = pages.map((page) => ({
    url: `${baseUrl}/en${page}`,
    lastModified: currentDate,
    changeFrequency: page === "" ? "daily" : "weekly" as const,
    priority: page === "" ? 0.9 : 0.7,
  }));

  return [...ptPages, ...enPages];
}