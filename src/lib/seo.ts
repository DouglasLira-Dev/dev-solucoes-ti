import { Metadata } from "next";

const siteName = "DEV Soluções em TI";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://assistenciatecnicasolucao.dev";
const defaultDescription = "Suporte Técnico, Desenvolvimento e Cybersegurança com excelência. Soluções em TI para empresas e pessoas físicas.";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords = [],
  image = "/images/og-image.png",
  url = "",
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `${siteUrl}${url}`;
  const fullImage = `${siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "TI",
      "Suporte Técnico",
      "Desenvolvimento",
      "Cybersegurança",
      "Redes",
      "Programação",
      ...keywords,
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
      languages: {
        pt: `/pt${url}`,
        en: `/en${url}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: "@devsolucoes",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    },
  };
}