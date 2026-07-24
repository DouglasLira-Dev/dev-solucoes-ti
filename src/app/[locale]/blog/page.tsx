export default function BlogPage() {
  const posts = [
    {
      titulo: "Primeiro Post do Blog",
      descricao: "Bem-vindo ao blog da DEV Soluções em TI. Aqui compartilharemos dicas e conhecimentos.",
      data: "23/07/2026",
      slug: "primeiro-post",
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Dicas, tutoriais e novidades do mundo da tecnologia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-sm text-gray-500 mb-2">{post.data}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{post.titulo}</h3>
              <p className="text-gray-400 text-sm">{post.descricao}</p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-primary hover:text-primary-dark transition-colors"
              >
                Ler mais →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>📝 Em breve mais posts!</p>
        </div>
      </div>
    </div>
  );
}