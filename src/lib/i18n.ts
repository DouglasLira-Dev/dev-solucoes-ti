import { useParams } from 'next/navigation';
import pt from '@/data/dictionaries/pt.json';
import en from '@/data/dictionaries/en.json';

const dictionaries = { pt, en };

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';
  
  // Garantir que o locale é válido
  const validLocale = locale === 'pt' || locale === 'en' ? locale : 'pt';
  
  return {
    t: dictionaries[validLocale],
    locale: validLocale,
  };
}

export function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.pt;
}