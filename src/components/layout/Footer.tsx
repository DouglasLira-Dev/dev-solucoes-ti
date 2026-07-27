import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";

interface FooterProps {
  locale: string;
}

const quickLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
  { name: "Política de Privacidade", href: "/privacidade" },
];

const serviceLinks = [
  { name: "Suporte Técnico", href: "/servicos/suporte-remoto" },
  { name: "Redes e Periféricos", href: "/servicos/redes-perifericos" },
  { name: "Cybersegurança", href: "/servicos/cyberseguranca" },
  { name: "Desenvolvimento", href: "/servicos/desenvolvimento-web" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/DouglasLira-Dev" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dev_solucao_ti" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591904985195" },
];

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "5511999999999";

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">DEV</span> Soluções
            </h3>
            <p className="text-gray-400 text-sm">
              Suporte Técnico, Desenvolvimento e Cybersegurança com excelência.
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
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
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
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
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
            <h4 className="text-white font-semibold mb-4">Contato</h4>
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
                <span className="text-primary">🔒</span> Segurança em primeiro lugar
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DEV Soluções em TI. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href={`/${locale}/privacidade`} className="text-gray-500 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/.well-known/security.txt" className="text-gray-500 hover:text-primary transition-colors">
              🔒 security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}