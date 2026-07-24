import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Contato</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Entre em contato conosco. Estamos prontos para ajudar!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:contato@assistenciatecnicasolucao.dev" className="hover:text-primary transition-colors">
                    contato@assistenciatecnicasolucao.dev
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Redes Sociais</h2>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Discord</a>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}