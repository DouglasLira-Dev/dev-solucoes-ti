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
      </div>
    </div>
  );
}