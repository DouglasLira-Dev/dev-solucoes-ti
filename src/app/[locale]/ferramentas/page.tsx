export default function FerramentasPage() {
  const ferramentas = {
    usadas: [
      { nome: "AnyDesk", descricao: "Acesso remoto para suporte técnico" },
      { nome: "Wireshark", descricao: "Análise de tráfego de rede" },
      { nome: "VMware", descricao: "Virtualização para testes e laboratórios" },
      { nome: "Metasploit", descricao: "Framework para testes de penetração" },
    ],
    planejadas: [
      { nome: "Scanner de Vulnerabilidades", descricao: "Ferramenta automatizada para análise de segurança" },
      { nome: "Dashboard de Monitoramento", descricao: "Painel para monitoramento de sistemas em tempo real" },
    ]
  };

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Ferramentas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">🛠️ Ferramentas em Uso</h2>
            <div className="space-y-4">
              {ferramentas.usadas.map((ferramenta) => (
                <div key={ferramenta.nome} className="bg-dark-card border border-dark-border rounded-lg p-4">
                  <h3 className="text-white font-medium">{ferramenta.nome}</h3>
                  <p className="text-gray-400 text-sm">{ferramenta.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">🚀 Ferramentas em Desenvolvimento</h2>
            <div className="space-y-4">
              {ferramentas.planejadas.map((ferramenta) => (
                <div key={ferramenta.nome} className="bg-dark-card border border-cyber-purple/30 rounded-lg p-4">
                  <h3 className="text-white font-medium">{ferramenta.nome}</h3>
                  <p className="text-gray-400 text-sm">{ferramenta.descricao}</p>
                  <span className="inline-block mt-2 text-xs bg-cyber-purple/10 text-cyber-purple px-2 py-1 rounded-full">
                    Em desenvolvimento
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}