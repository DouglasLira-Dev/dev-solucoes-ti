import { getAllServicos, getAllCategorias } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { ServicosClient } from '@/components/sections/ServicosClient';

interface ServicosPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: ServicosPageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.servicos.title,
    description: t.servicos.subtitle,
    url: '/servicos',
  });
}

export default function ServicosPage({ params }: ServicosPageProps) {
  const t = getDictionary(params.locale);
  const servicos = getAllServicos();
  const categorias = getAllCategorias();

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t.servicos.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {t.servicos.subtitle}
        </p>

        <ServicosClient
          servicos={servicos}
          categorias={categorias}
          locale={params.locale}
        />
        {/* Dispositivos atendidos */}
        <section className="mt-16 bg-dark-card border border-dark-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-2">
            {t.servicos.dispositivos.title}
          </h2>
          <p className="text-gray-400 mb-6">
            {t.servicos.dispositivos.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {t.servicos.dispositivos.lista.map((item: string) => (
              <span
                key={item}
                className="px-4 py-2 bg-dark-surface border border-dark-border rounded-full text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}