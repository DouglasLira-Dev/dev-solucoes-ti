import { getAllFerramentas, getFerramentasByStatus } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { FerramentasClient } from './FerramentasClient';
import { getDictionary } from '@/lib/i18n';

interface FerramentasPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: FerramentasPageProps) {
  const t = getDictionary(params.locale);
  return seoMetadata({
    title: t.ferramentas.title,
    description: t.ferramentas.subtitle,
    url: '/ferramentas',
  });
}

export default function FerramentasPage() {
  const todasFerramentas = getAllFerramentas();
  const ferramentasUsando = getFerramentasByStatus('usando');
  const ferramentasPlanejando = getFerramentasByStatus('planejando');

  return (
    <FerramentasClient
      todasFerramentas={todasFerramentas}
      ferramentasUsando={ferramentasUsando}
      ferramentasPlanejando={ferramentasPlanejando}
    />
  );
}
