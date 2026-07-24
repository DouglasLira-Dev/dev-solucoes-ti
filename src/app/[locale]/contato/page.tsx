import { Mail, Phone, MessageCircle, Shield } from "lucide-react";
import { ContatoForm } from "@/components/forms/ContatoForm";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Entre em Contato</h1>
            <p className="text-gray-300 text-lg">
              Estamos prontos para ajudar você com suas necessidades tecnológicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-white font-semibold">E-mail</h3>
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
              <h3 className="text-white font-semibold">WhatsApp</h3>
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
              <h3 className="text-white font-semibold">Segurança</h3>
              <p className="text-gray-400 text-sm">
                Suas informações estão protegidas
              </p>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Envie sua Mensagem
            </h2>
            <ContatoForm />
          </div>
        </div>
      </div>
    </div>
  );
}