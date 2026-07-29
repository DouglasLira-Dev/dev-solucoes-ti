"use client";

import { useState } from "react";
import { useTranslations } from "@/components/i18n/TranslationsProvider";

interface Depoimento {
  id: string;
  nome: string;
  empresa: string;
  texto: string;
  data: string;
  avatar?: string;
}

const t = useTranslations();

const depoimentosFake: Depoimento[] = [
  // Depoimentos reais serão adicionados aqui conforme surgirem clientes
];

export function DepoimentosSection() {
  const [depoimentos] = useState<Depoimento[]>(depoimentosFake);

  if (depoimentos.length === 0) {
    return (
      <div className="bg-dark-card border border-dark-border rounded-lg p-8 text-center">
        <p className="text-gray-400 text-lg">{t.sobre.depoimentos.em_breve}</p>
        <p className="text-gray-500 text-sm mt-2">
          {t.sobre.depoimentos.descricao}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {depoimentos.map((depoimento) => (
        <div key={depoimento.id} className="bg-dark-card border border-dark-border rounded-lg p-6">
          <p className="text-gray-300 italic">"{depoimento.texto}"</p>
          <div className="mt-4">
            <p className="text-white font-semibold">{depoimento.nome}</p>
            <p className="text-gray-500 text-sm">{depoimento.empresa}</p>
          </div>
        </div>
      ))}
    </div>
  );
}