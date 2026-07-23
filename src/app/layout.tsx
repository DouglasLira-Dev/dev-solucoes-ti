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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}