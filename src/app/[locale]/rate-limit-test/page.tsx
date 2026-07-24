import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export default async function RateLimitPage() {
  // Testar rate limiting
  const ip = "test-ip"; // Em produção, use getClientIp
  const result = await checkRateLimit(ip);

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          🚦 Rate Limiting
        </h1>
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Status</p>
              <p className={`font-semibold ${result.success ? 'text-cyber-green' : 'text-cyber-red'}`}>
                {result.success ? '✅ Permitido' : '❌ Bloqueado'}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Limite</p>
              <p className="text-white font-semibold">{result.limit} requisições/hora</p>
            </div>
            <div>
              <p className="text-gray-400">Restantes</p>
              <p className="text-white font-semibold">{result.remaining}</p>
            </div>
            <div>
              <p className="text-gray-400">Reset</p>
              <p className="text-white font-semibold">
                {new Date(result.reset).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-dark-card border border-dark-border rounded-lg p-4">
          <p className="text-gray-400 text-sm">
            🔒 Este é um teste do rate limiting. Em produção, o IP do usuário é usado para controle.
          </p>
        </div>
      </div>
    </div>
  );
}