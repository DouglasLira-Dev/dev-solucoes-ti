import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieBanner } from "@/components/analytics/CookieBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { TranslationsProvider } from "@/components/i18n/TranslationsProvider";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "DEV Soluções em TI",
  description: "Suporte Técnico, Desenvolvimento e Cybersegurança com excelência",
  keywords: ["TI", "Suporte Técnico", "Desenvolvimento", "Cybersegurança"],
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <TranslationsProvider>
      <GoogleAnalytics gaId={gaId} />
      <Header />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer locale={params.locale} />
      <WhatsAppButton />
      <CookieBanner />
    </TranslationsProvider>
  );
}