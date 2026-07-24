import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Política de Cookies",
  description: "Política de Cookies da DEV Soluções em TI",
  url: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Política de Cookies
        </h1>
        <p className="text-gray-400 mb-8">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="space-y-8 text-gray-300">
          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
              quando você visita um site. Eles ajudam a melhorar sua experiência de navegação.
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Quais Cookies Usamos?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-dark-surface">
                  <tr>
                    <th className="text-left p-3 text-white">Nome</th>
                    <th className="text-left p-3 text-white">Tipo</th>
                    <th className="text-left p-3 text-white">Finalidade</th>
                    <th className="text-left p-3 text-white">Duração</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-border">
                  <tr>
                    <td className="p-3">_ga</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">Google Analytics - Identificação de usuário</td>
                    <td className="p-3">2 anos</td>
                  </tr>
                  <tr>
                    <td className="p-3">_gid</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">Google Analytics - Sessão do usuário</td>
                    <td className="p-3">24 horas</td>
                  </tr>
                  <tr>
                    <td className="p-3">cookie-consent</td>
                    <td className="p-3">Necessário</td>
                    <td className="p-3">Armazena preferência de cookies</td>
                    <td className="p-3">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Como Gerenciar Cookies?
            </h2>
            <p className="mb-4">
              Você pode gerenciar suas preferências de cookies através do banner de consentimento 
              ou nas configurações do seu navegador.
            </p>
            <div className="bg-dark-surface rounded-lg p-4">
              <p className="text-sm text-gray-400">
                🔒 Não compartilhamos seus dados com terceiros sem seu consentimento explícito.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}