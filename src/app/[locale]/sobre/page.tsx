import { generateMetadata as seoMetadata } from "@/lib/seo";
import { SobreClient } from "./SobreClient";

export const metadata = seoMetadata({
  title: "Sobre",
  description: "Conheça a história da DEV Soluções em TI",
  url: "/sobre",
});

export default function SobrePage() {
  return <SobreClient />;
}
