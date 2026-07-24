export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Sistema de Gerenciamento",
      descricao: "Sistema completo para gestão de empresas com Java Spring Boot",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      categoria: "Desenvolvimento",
    },
    {
      titulo: "Ferramenta de CTF",
      descricao: "Plataforma para desafios de Cybersegurança (Capture The Flag)",
      tech: ["Python", "Docker", "Flask"],
      categoria: "Cybersegurança",
    },
    {
      titulo: "API de Integração",
      descricao: "API REST para integração de sistemas com autenticação JWT",
      tech: ["Node.js", "Express", "MongoDB"],
      categoria: "Desenvolvimento",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Projetos</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Conheça alguns dos nossos projetos e trabalhos realizados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {projeto.categoria}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{projeto.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {projeto.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-dark-surface text-gray-300 px-2 py-1 rounded-full border border-dark-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-card border border-dark-border rounded-lg p-6 text-center">
          <p className="text-gray-400">
            🚀 Em breve mais projetos serão adicionados. Acompanhe nosso GitHub!
          </p>
        </div>
      </div>
    </div>
  );
}