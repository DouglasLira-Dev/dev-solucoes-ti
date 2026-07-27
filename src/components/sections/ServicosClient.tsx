"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Servico, Categoria } from '@/lib/data';

interface ServicosClientProps {
  servicos: Servico[];
  categorias: Categoria[];
  locale: string;
}

export function ServicosClient({ servicos, categorias, locale }: ServicosClientProps) {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todos');
  const [modalidadeFiltro, setModalidadeFiltro] = useState<string>('todas');

  // Filtrar serviços
  let servicosFiltrados = servicos;

  if (categoriaFiltro !== 'todos') {
    servicosFiltrados = servicosFiltrados.filter(
      (s) => s.categoria === categoriaFiltro
    );
  }

  if (modalidadeFiltro !== 'todas') {
    servicosFiltrados = servicosFiltrados.filter(
      (s) => s.modalidade === modalidadeFiltro
    );
  }

  const modalidades = [
    { id: 'todas', label: 'Todas' },
    { id: 'remoto', label: '🌐 Remoto' },
    { id: 'presencial', label: '📍 Presencial' },
    { id: 'híbrido', label: '🔄 Híbrido' },
  ];

  const modalidadeLabels = {
    remoto: '🌐 Remoto',
    presencial: '📍 Presencial',
    'híbrido': '🔄 Híbrido',
  };

  return (
    <div>
      {/* Filtros */}
      <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-8">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Categoria</label>
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
            >
              <option value="todos">Todas as categorias</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.nome}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Modalidade</label>
            <select
              value={modalidadeFiltro}
              onChange={(e) => setModalidadeFiltro(e.target.value)}
              className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
            >
              {modalidades.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setCategoriaFiltro('todos');
                setModalidadeFiltro('todas');
              }}
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Limpar filtros ✕
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          {servicosFiltrados.length} serviço(s) encontrado(s)
        </div>
      </div>

      {/* Grid de Serviços */}
      {servicosFiltrados.length === 0 ? (
        <div className="bg-dark-card border border-dark-border rounded-lg p-12 text-center">
          <p className="text-gray-400">Nenhum serviço encontrado com os filtros selecionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicosFiltrados.map((servico) => (
            <div
              key={servico.id}
              className={`bg-dark-card border ${
                servico.destaque
                  ? 'border-primary shadow-lg shadow-primary/10'
                  : 'border-dark-border'
              } rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{servico.icon}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {modalidadeLabels[servico.modalidade as keyof typeof modalidadeLabels]}
                </span>
                {servico.destaque && (
                  <span className="text-xs bg-cyber-green/10 text-cyber-green px-2 py-1 rounded-full">
                    ★ Destaque
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {servico.titulo}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{servico.descricao}</p>

              <div className="mb-4">
                <p className="text-sm text-cyber-green font-semibold">
                  {servico.preco}
                </p>
              </div>

              <ul className="space-y-1 mb-4">
                {servico.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/${locale}/servicos/${servico.id}`}
                className="block w-full text-center border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary/10 transition-colors mb-2"
              >
                Ver detalhes e preços
              </Link>

              <a
                href="/contato"
                className="block w-full text-center bg-primary text-dark font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                {servico.cta}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}