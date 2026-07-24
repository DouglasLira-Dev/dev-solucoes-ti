import { getAllFerramentas, getFerramentasByStatus } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { useTranslations } from "@/components/i18n/TranslationsProvider";

export const metadata = seoMetadata({
  title: 'Ferramentas',
  description: 'Ferramentas usadas no dia a dia e em desenvolvimento pela DEV Soluções em TI',
  url: '/ferramentas',
});

export default function FerramentasPage() {
  const t = useTranslations();
  const todasFerramentas = getAllFerramentas();
  const ferramentasUsando = getFerramentasByStatus('usando');
  const ferramentasPlanejando = getFerramentasByStatus('planejando');

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t.ferramentas.title}
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          {t.ferramentas.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ferramentas em Uso */}
          <div>
            <h2 className="text-2xl font-semibold text-cyber-green mb-6 flex items-center gap-2">
              <span className="text-2xl">🛠️</span> {t.ferramentas.usando}
              <span className="text-sm text-gray-500 font-normal ml-2">
                ({ferramentasUsando.length})
              </span>
            </h2>
            <div className="space-y-4">
              {ferramentasUsando.map((ferramenta) => (
                <div
                  key={ferramenta.id}
                  className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{ferramenta.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold">{ferramenta.nome}</h3>
                      <p className="text-gray-400 text-sm">{ferramenta.descricao}</p>
                      <span className="inline-block mt-2 text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded-full">
                        ✓ Em uso
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ferramentas em Desenvolvimento */}
          <div>
            <h2 className="text-2xl font-semibold text-cyber-purple mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span> {t.ferramentas.planejando}
              <span className="text-sm text-gray-500 font-normal ml-2">
                ({ferramentasPlanejando.length})
              </span>
            </h2>
            <div className="space-y-4">
              {ferramentasPlanejando.map((ferramenta) => (
                <div
                  key={ferramenta.id}
                  className="bg-dark-card border border-cyber-purple/30 rounded-lg p-4 hover:border-cyber-purple transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{ferramenta.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold">{ferramenta.nome}</h3>
                      <p className="text-gray-400 text-sm">{ferramenta.descricao}</p>
                      <span className="inline-block mt-2 text-xs bg-cyber-purple/10 text-cyber-purple px-2 py-1 rounded-full">
                        ⚡ Em desenvolvimento
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-dark-card border border-dark-border rounded-lg p-6 text-center">
          <p className="text-gray-400">
            <span className="text-primary font-semibold">{todasFerramentas.length}</span> {t.ferramentas.total}
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-cyber-green font-semibold">{ferramentasUsando.length}</span> {t.ferramentas.em_uso}
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-cyber-purple font-semibold">{ferramentasPlanejando.length}</span> {t.ferramentas.em_desenvolvimento}
          </p>
        </div>
      </div>
    </div>
  );
}