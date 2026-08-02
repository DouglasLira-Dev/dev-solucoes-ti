import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllServicos, getServicoById } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';

interface ServicoDetalhePageProps {
  params: {
    locale: string;
    id: string;
  };
}

export async function generateMetadata({ params }: ServicoDetalhePageProps) {
  const servico = getServicoById(params.id);
  if (!servico) return {};

  return seoMetadata({
    title: servico.titulo,
    description: servico.descricao,
    url: `/servicos/${servico.id}`,
  });
}

export async function generateStaticParams() {
  const servicos = getAllServicos();
  return servicos.map((servico) => ({
    id: servico.id,
  }));
}

export default function ServicoDetalhePage({ params }: ServicoDetalhePageProps) {
  const servico = getServicoById(params.id);
  const t = getDictionary(params.locale);

  if (!servico) {
    notFound();
  }

  const modalidadeLabels: Record<string, string> = {
    remoto: t.servicos.modalidades.remoto,
    presencial: t.servicos.modalidades.presencial,
    'híbrido': t.servicos.modalidades.hibrido,
  };

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href={`/${params.locale}/servicos`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.servicos.voltar_servicos}
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{servico.icon}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {modalidadeLabels[servico.modalidade]}
          </span>
          {servico.destaque && (
            <span className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded-full">
              {t.servicos.destaque}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {servico.titulo}
        </h1>
        <p className="text-xl text-gray-400 mb-6">{servico.descricao}</p>

        <p className="text-lg text-cyber-green font-semibold mb-10">
          {servico.preco}
        </p>

        {servico.itens && servico.itens.length > 0 && (
          <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-dark-border">
              <h2 className="text-lg font-semibold text-white">
                {t.servicos.itens_incluidos}
              </h2>
            </div>
            <ul className="divide-y divide-dark-border">
              {servico.itens.map((item) => (
                <li
                  key={item.nome}
                  className="flex flex-wrap items-center justify-between gap-2 px-6 py-4"
                >
                  <div>
                    <p className="text-gray-200">{item.nome}</p>
                    {item.obs && (
                      <p className="text-xs text-gray-500 mt-1">{item.obs}</p>
                    )}
                  </div>
                  <span className="text-cyber-green font-semibold whitespace-nowrap">
                    {item.preco}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {servico.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">
              {t.servicos.por_que_escolher}
            </h2>
            <ul className="space-y-2">
              {servico.features.map((feature) => (
                <li
                  key={feature}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <span className="text-primary">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/${params.locale}/contato`}
          className="block w-full text-center bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {servico.cta}
        </Link>

        <p className="text-xs text-gray-500 text-center mt-4">
          {t.servicos.valores_referencia}
        </p>
      </div>
    </div>
  );
}