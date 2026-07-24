import { useTranslations } from "@/components/i18n/TranslationsProvider";
import { generateMetadata as seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Sobre",
  description: "Conheça a história da DEV Soluções em TI",
  url: "/sobre",
});

export default function SobrePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.sobre.title}</h1>
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg mb-6">
            A <span className="text-primary">DEV Soluções em TI</span> é uma empresa dedicada a oferecer 
            soluções tecnológicas completas com foco em segurança, qualidade e inovação.
          </p>
          
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">{t.sobre.historia.title}</h2>
            <p className="text-gray-400">
              {t.sobre.historia.text}
            </p>
          </div>
          
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">{t.sobre.missao.title}</h2>
            <p className="text-gray-400">
              {t.sobre.missao.text}
            </p>
          </div>

          {/* Depoimentos - Futuro */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">⭐ Depoimentos</h2>
            <div className="bg-dark-card border border-dark-border rounded-lg p-8 text-center">
              <p className="text-gray-400">Em breve, depoimentos de clientes reais!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}