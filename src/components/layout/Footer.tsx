import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { getDictionary } from "@/lib/i18n";

interface FooterProps {
  locale: string;
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/DouglasLira-Dev" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/dev-douglas-lira" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dev_solucao_ti" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591904985195" },
];

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "5511999999999";

export function Footer({ locale }: FooterProps) {
  const t = getDictionary(locale);

  const quickLinks = [
    { name: t.nav.sobre, href: "/sobre" },
    { name: t.nav.servicos, href: "/servicos" },
    { name: t.nav.projetos, href: "/projetos" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contato, href: "/contato" },
    { name: t.privacidade.title, href: "/privacidade" },
  ];

  const serviceLinks = [
    { name: t.footer.suporte_tecnico, href: "/servicos/suporte-remoto" },
    { name: t.footer.redes, href: "/servicos/redes-perifericos" },
    { name: t.footer.cyberseguranca, href: "/servicos/cyberseguranca" },
    { name: t.footer.desenvolvimento, href: "/servicos/desenvolvimento-web" },
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">DEV</span> {t.footer.brand.replace('DEV ', '')}
            </h3>
            <p className="text-gray-400 text-sm">
              {t.footer.brand_desc}
            </p>
            <div className="mt-4 flex gap-3">
               {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links_rapidos}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.servicos}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contato}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:assistenciatecnicasolucao.dev@gmail.com" className="hover:text-primary transition-colors">
                  assistenciatecnicasolucao.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:+${phoneNumber}`} className="hover:text-primary transition-colors">
                  {(phoneNumber).replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '($1) $2 $3-$4')}
                </a>
              </li>
              <li className="text-gray-400 text-sm mt-2">
                <span className="text-primary">🔒</span> {t.footer.seguranca_texto}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DEV Soluções em TI. {t.footer.direitos}
          </p>
          <div className="flex gap-4 text-sm">
            <Link href={`/${locale}/privacidade`} className="text-gray-500 hover:text-primary transition-colors">
              {t.privacidade.title}
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/.well-known/security.txt" className="text-gray-500 hover:text-primary transition-colors">
              {t.footer.seguranca}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}