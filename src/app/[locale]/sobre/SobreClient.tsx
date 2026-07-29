"use client";

import { useTranslations } from "@/components/i18n/TranslationsProvider";
import { DepoimentosSection } from "@/components/sections/DepoimentosSection";

export function SobreClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.sobre.title}</h1>
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg mb-6">
            {t.sobre.description}
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
              <h2 className="text-2xl font-semibold text-white mb-6">{t.sobre.depoimentos.title}</h2>
              <DepoimentosSection />
          </div>
        </div>
      </div>
    </div>
  );
}
