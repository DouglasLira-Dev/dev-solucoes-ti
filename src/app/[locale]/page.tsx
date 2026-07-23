export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">
          DEV Soluções em TI
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Suporte Técnico, Desenvolvimento e Cybersegurança
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/servicos"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-dark transition hover:bg-primary-dark"
          >
            Ver Serviços
          </a>
          <a
            href="/projetos"
            className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary/10"
          >
            Ver Projetos
          </a>
        </div>
      </div>
    </div>
  );
}