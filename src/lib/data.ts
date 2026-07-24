import servicosData from '@/data/servicos.json';
import ferramentasData from '@/data/ferramentas.json';

export interface Servico {
  id: string;
  categoria: string;
  titulo: string;
  descricao: string;
  modalidade: 'remoto' | 'presencial' | 'híbrido';
  preco: string;
  icon: string;
  destaque: boolean;
  features: string[];
  cta: string;
}

export interface Categoria {
  id: string;
  nome: string;
  icon: string;
  descricao: string;
}

export interface Ferramenta {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  status: 'usando' | 'planejando';
  icon: string;
}

// Tipagem dos dados importados
interface ServicosData {
  servicos: Servico[];
  categorias: Categoria[];
}

interface FerramentasData {
  ferramentas: Ferramenta[];
}

// Cast dos dados importados
const servicos = (servicosData as ServicosData);
const ferramentas = (ferramentasData as FerramentasData);

// Serviços
export function getAllServicos(): Servico[] {
  return servicos.servicos;
}

export function getServicosByCategoria(categoriaId: string): Servico[] {
  return servicos.servicos.filter((s: Servico) => s.categoria === categoriaId);
}

export function getServicosByModalidade(modalidade: string): Servico[] {
  return servicos.servicos.filter((s: Servico) => s.modalidade === modalidade);
}

export function getServicosDestaque(): Servico[] {
  return servicos.servicos.filter((s: Servico) => s.destaque);
}

export function getServicoById(id: string): Servico | undefined {
  return servicos.servicos.find((s: Servico) => s.id === id);
}

export function getAllCategorias(): Categoria[] {
  return servicos.categorias;
}

export function getCategoriaById(id: string): Categoria | undefined {
  return servicos.categorias.find((c: Categoria) => c.id === id);
}

// Ferramentas
export function getAllFerramentas(): Ferramenta[] {
  return ferramentas.ferramentas;
}

export function getFerramentasByStatus(status: 'usando' | 'planejando'): Ferramenta[] {
  return ferramentas.ferramentas.filter((f: Ferramenta) => f.status === status);
}

export function getFerramentasByCategoria(categoriaId: string): Ferramenta[] {
  return ferramentas.ferramentas.filter((f: Ferramenta) => f.categoria === categoriaId);
}

export function getFerramentaById(id: string): Ferramenta | undefined {
  return ferramentas.ferramentas.find((f: Ferramenta) => f.id === id);
}