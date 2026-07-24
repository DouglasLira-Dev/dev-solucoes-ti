import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Política de Privacidade",
  description: "Política de Privacidade da DEV Soluções em TI - LGPD - Proteção de Dados",
  url: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Política de Privacidade
        </h1>
        <p className="text-gray-400 mb-8">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="space-y-8 text-gray-300">
          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Dados Coletados
            </h2>
            <p className="mb-4">
              A DEV Soluções em TI coleta os seguintes dados através do formulário de contato:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Mensagem enviada</li>
            </ul>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Cookies e Analytics
            </h2>
            <p className="mb-4">
              Utilizamos cookies para melhorar sua experiência. O Google Analytics é usado 
              para entender como os visitantes interagem com nosso site.
            </p>
            <p className="text-gray-400 text-sm">
              🔒 Você pode gerenciar suas preferências de cookies através do banner de consentimento.
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Finalidade do Tratamento
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Responder às mensagens enviadas através do formulário de contato</li>
              <li>Melhorar nossos serviços com base em análises</li>
              <li>Enviar informações solicitadas</li>
            </ul>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Direitos do Titular (LGPD)
            </h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Contato
            </h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas, entre em contato:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                📧 <a href="mailto:contato@assistenciatecnicasolucao.dev" className="text-primary hover:text-primary-dark transition-colors">
                  contato@assistenciatecnicasolucao.dev
                </a>
              </p>
              <p>
                📱 <a href="https://wa.me/5511999999999" className="text-primary hover:text-primary-dark transition-colors">
                  WhatsApp
                </a>
              </p>
            </div>
          </section>

          <div className="bg-dark-card border border-cyber-green/30 rounded-lg p-4 text-center text-cyber-green">
            <p className="text-sm">
              🔒 Seus dados são protegidos com transparência e compromisso com a sua privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}