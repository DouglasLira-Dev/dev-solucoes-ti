import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DEV Soluções em TI",
  description: "Suporte Técnico, Desenvolvimento e Cybersegurança",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <head> 
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=window.location.pathname.match(/^\\/(pt|en)(\\/|$)/);document.documentElement.lang=m?m[1]:'pt';})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}