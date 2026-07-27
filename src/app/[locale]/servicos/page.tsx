import { getAllServicos, getAllCategorias } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { ServicosClient } from '@/components/sections/ServicosClient';

export const metadata = seoMetadata({
  title: 'Serviços',
  description: 'Conheça nossos serviços de TI: Suporte Técnico, Redes, Cybersegurança, Desenvolvimento e Pacotes',
  url: '/servicos',
});

interface ServicosPageProps {
  params: {
    locale: string;
  };
}

export default function ServicosPage({ params }: ServicosPageProps) {
  const servicos = getAllServicos();
  const categorias = getAllCategorias();

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Nossos Serviços
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Soluções completas para atender suas necessidades tecnológicas
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