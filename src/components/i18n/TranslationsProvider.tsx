"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useTranslations as useTranslationsHook } from '@/hooks/useTranslations';

type Dictionary = ReturnType<typeof useTranslationsHook>;

const TranslationsContext = createContext<Dictionary | null>(null);

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
}

interface TranslationsProviderProps {
  children: ReactNode;
}

export function TranslationsProvider({ children }: TranslationsProviderProps) {
  const dict = useTranslationsHook();

  return (
    <TranslationsContext.Provider value={dict}>
      {children}
    </TranslationsContext.Provider>
  );
}