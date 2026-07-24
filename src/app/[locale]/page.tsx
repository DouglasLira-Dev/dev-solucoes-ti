import { useTranslations } from "@/hooks/useTranslations";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 border border-primary/30 rounded-full text-primary text-sm font-mono mb-6">
              🔒 Segurança em primeiro lugar
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">DEV</span> Soluções em TI
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t.home.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/servicos"
                className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                {t.home.cta_servicos}
              </a>
              <a
                href="/projetos"
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                {t.home.cta_projetos}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="py-16 bg-dark-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.home.pillars.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.home.pillars.suporte.title}</h3>
              <p className="text-gray-400">{t.home.pillars.suporte.description}</p>
            </div>

            <div className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.home.pillars.desenvolvimento.title}</h3>
              <p className="text-gray-400">{t.home.pillars.desenvolvimento.description}</p>
            </div>

            <div className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.home.pillars.cyberseguranca.title}</h3>
              <p className="text-gray-400">{t.home.pillars.cyberseguranca.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}