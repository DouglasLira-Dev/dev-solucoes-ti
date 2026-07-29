import { generateMetadata as seoMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { SobreClient } from "./SobreClient";

interface SobrePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: SobrePageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.sobre.title,
    description: t.sobre.description,
    url: "/sobre",
  });
}

export default function SobrePage() {
  return <SobreClient />;
}