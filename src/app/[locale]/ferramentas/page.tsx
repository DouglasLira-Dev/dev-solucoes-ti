import { getAllFerramentas, getFerramentasByStatus } from '@/lib/data';
import { generateMetadata as seoMetadata } from '@/lib/seo';
import { FerramentasClient } from './FerramentasClient';

export const metadata = seoMetadata({
  title: 'Ferramentas',
  description: 'Ferramentas usadas no dia a dia e em desenvolvimento pela DEV Soluções em TI',
  url: '/ferramentas',
});

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
