"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Shield, Check } from "lucide-react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";
import { useTranslations } from "@/components/i18n/TranslationsProvider";

export function CookieBanner() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "pt";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookieConsent('accepted');
    setIsVisible(false);
    window.location.reload();
  };

  const rejectCookies = () => {
    setCookieConsent('rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-dark-card border-t border-dark-border p-4 md:p-6 shadow-2xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="text-sm text-gray-300">
              <h3 className="text-white font-semibold mb-1">
                {t.cookies_banner.title}
              </h3>
              <p className="text-gray-400 max-w-2xl">
                {t.cookies_banner.text}
              </p>
              <div className="flex gap-4 mt-2 text-xs">
                <a
                  href={`/${locale}/privacidade`}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  {t.cookies_banner.politica}
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href={`/${locale}/cookies`}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  {t.cookies_banner.cookies}
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-4 py-2 text-sm text-gray-400 hover:text-white border border-dark-border rounded-lg hover:border-gray-600 transition-colors"
            >
              {t.cookies_banner.recusar}
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2 text-sm bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              {t.cookies_banner.aceitar}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}