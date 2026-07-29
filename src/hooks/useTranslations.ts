"use client";

import { useParams } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';
  return getDictionary(locale);
}

const useTranslationsDefault = useTranslations;
export default useTranslationsDefault;