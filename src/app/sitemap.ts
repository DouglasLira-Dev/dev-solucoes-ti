import { MetadataRoute } from "next";
import { getAllServicos } from "@/lib/data";
import { getPostSlugs } from "@/lib/blog";


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
  "/termos",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const servicos = getAllServicos();
  const servicoPages = servicos.map((s) => `/servicos/${s.id}`);

  const slugs = getPostSlugs().map((slug) => slug.replace(/\.mdx$/, ""));
  const blogPages = slugs.map((slug) => `/blog/${slug}`);

  const allPages = [...pages, ...servicoPages, ...blogPages];

  // Páginas em português
  const ptPages = allPages.map((page) => ({
    url: `${baseUrl}/pt${page}`,
    lastModified: currentDate,
    changeFrequency: (page === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Páginas em inglês
  const enPages = allPages.map((page) => ({
    url: `${baseUrl}/en${page}`,
    lastModified: currentDate,
    changeFrequency: (page === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: page === "" ? 0.9 : 0.7,
  }));

  return [...ptPages, ...enPages];
}