import { Mail, Phone, MessageCircle, Shield } from "lucide-react";
import { ContatoForm } from "@/components/forms/ContatoForm";
import { generateMetadata as seoMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";

interface ContatoPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: ContatoPageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.contato.title,
    description: t.contato.subtitle,
    url: "/contato",
  });
}

export default function ContatoPage({ params }: ContatoPageProps) {
  const t = getDictionary(params.locale);

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">{t.contato.title}</h1>
            <p className="text-gray-300 text-lg">
              {t.contato.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-white font-semibold">{t.contato.email}</h3>
              <a
                href="mailto:assistenciatecnicasolucao.dev@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
              assistenciatecnicasolucao.dev@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/assistenciatecnica-dev"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors">
                  Discord
                </a>
              </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <h3 className="text-white font-semibold">{t.contato.whatsapp}</h3>
              <a             
                href="https://wa.me/5581912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                (11) 99999-9999
              </a>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <Shield className="w-8 h-8 text-cyber-green mx-auto mb-3" />
              <h3 className="text-white font-semibold">{t.contato.seguranca}</h3>
              <p className="text-gray-400 text-sm">
                {t.contato.seguranca_texto}
              </p>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {t.contato.form.title}
            </h2>
            <ContatoForm />
          </div>
        </div>
      </div>
    </div>
  );
}