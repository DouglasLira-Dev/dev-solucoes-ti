import pt from '@/data/dictionaries/pt.json';
import en from '@/data/dictionaries/en.json';

const dictionaries = { pt, en };

export function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.pt;
}