"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Ferramentas", href: "/ferramentas" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLocale = pathname?.split("/")[1] || "pt";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const switchLanguage = (locale: string) => {
    const path = pathname?.replace(/^\/[a-z]{2}/, "") || "/";
    window.location.href = `/${locale}${path}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-dark">
              DEV
            </div>
            <span className="text-white font-semibold hidden sm:block">
              <span className="text-primary">DEV</span> Soluções
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === `/${currentLocale}${item.href}`;
              return (
                <Link
                  key={item.name}
                  href={`/${currentLocale}${item.href}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors"
                aria-label="Switch language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm uppercase">
                  {currentLocale}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-dark-card border border-dark-border rounded-lg shadow-lg py-1 z-[60]">
                  <button
                    onClick={() => switchLanguage("pt")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-surface hover:text-primary transition-colors"
                  >
                    🇧🇷 PT
                  </button>
                  <button
                    onClick={() => switchLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-surface hover:text-primary transition-colors"
                  >
                    🇺🇸 EN
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border">
            {navigation.map((item) => {
              const isActive = pathname === `/${currentLocale}${item.href}`;
              return (
                <Link
                  key={item.name}
                  href={`/${currentLocale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}