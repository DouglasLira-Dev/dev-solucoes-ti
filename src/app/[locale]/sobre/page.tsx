export default function SobrePage() {
  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Sobre Nós</h1>
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg mb-6">
            A <span className="text-primary">DEV Soluções em TI</span> é uma empresa dedicada a oferecer 
            soluções tecnológicas completas com foco em segurança, qualidade e inovação.
          </p>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">📚 Nossa História</h2>
            <p className="text-gray-400">
              Fundada com o propósito de unir excelência técnica e compromisso com a segurança, 
              a DEV Soluções em TI nasceu da paixão por tecnologia e da visão de um futuro digital mais seguro.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">🎯 Nossa Missão</h2>
            <p className="text-gray-400">
              Oferecer serviços de TI com qualidade, ética e transparência, sempre priorizando 
              a segurança e a satisfação dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}