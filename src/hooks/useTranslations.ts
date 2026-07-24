"use client";

import { useParams } from 'next/navigation';
import pt from '@/data/dictionaries/pt.json';
import en from '@/data/dictionaries/en.json';

const dictionaries = { pt, en };

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';
  const validLocale = locale === 'pt' || locale === 'en' ? locale : 'pt';
  return dictionaries[validLocale as keyof typeof dictionaries] || pt;
}

// Também exportar como padrão para compatibilidade
const useTranslationsDefault = useTranslations;
export default useTranslationsDefault;