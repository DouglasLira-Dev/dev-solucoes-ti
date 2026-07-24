export default function ServicosPage() {
  const servicos = [
    {
      categoria: "Suporte Técnico",
      itens: [
        { nome: "Suporte Remoto", descricao: "Atendimento rápido e eficiente via acesso remoto", modalidade: "Remoto" },
        { nome: "Suporte Presencial", descricao: "Atendimento no local para resolução de problemas", modalidade: "Presencial" },
      ]
    },
    {
      categoria: "Redes e Periféricos",
      itens: [
        { nome: "Configuração de Redes", descricao: "Instalação e configuração de redes cabeadas e wi-fi", modalidade: "Presencial" },
        { nome: "Manutenção de Periféricos", descricao: "Reparo e manutenção de impressoras, scanners e outros", modalidade: "Presencial" },
      ]
    },
    {
      categoria: "Cybersegurança",
      itens: [
        { nome: "Análise de Vulnerabilidades", descricao: "Identificação de falhas de segurança em sistemas", modalidade: "Remoto" },
        { nome: "Consultoria em Segurança", descricao: "Orientação e implementação de boas práticas", modalidade: "Remoto" },
      ]
    },
    {
      categoria: "Desenvolvimento",
      itens: [
        { nome: "Desenvolvimento Web", descricao: "Sites e aplicações web com tecnologias modernas", modalidade: "Remoto" },
        { nome: "APIs e Integrações", descricao: "Desenvolvimento de APIs REST e integrações", modalidade: "Remoto" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Nossos Serviços</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Soluções completas para atender suas necessidades tecnológicas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicos.map((categoria) => (
            <div key={categoria.categoria} className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">{categoria.categoria}</h2>
              <div className="space-y-4">
                {categoria.itens.map((item) => (
                  <div key={item.nome} className="border-b border-dark-border pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-medium">{item.nome}</h3>
                        <p className="text-gray-400 text-sm">{item.descricao}</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {item.modalidade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}