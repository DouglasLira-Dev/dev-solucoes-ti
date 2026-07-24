"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface GoogleAnalyticsProps {
  gaId: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const [consentGiven, setConsentGiven] = useState(false);
  const pathname = usePathname();

  // Verificar consentimento do usuário
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setConsentGiven(true);
    }
  }, []);

  // Rastrear mudanças de página
  useEffect(() => {
    if (consentGiven && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, consentGiven, gaId]);

  // Função para aceitar cookies
  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsentGiven(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      window.gtag("config", gaId);
    }
  };

  // Função para rejeitar cookies
  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsentGiven(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  return (
    <>
      {/* Google Analytics Script */}
      {consentGiven && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  analytics_storage: 'denied'
                });
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}