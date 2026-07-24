import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Configuração do Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Configuração do Rate Limiter
export const rateLimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "1h"), // 5 requisições por hora
  analytics: true, // Ativar analytics no dashboard do Upstash
  prefix: "@upstash/ratelimit",
});

// Função para verificar rate limit
export async function checkRateLimit(identifier: string) {
  try {
    // Se não tiver Redis configurado, permitir (fallback para desenvolvimento)
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      console.warn("⚠️ Redis não configurado. Rate limiting desabilitado.");
      return { 
        success: true, 
        limit: 5, 
        remaining: 5, 
        reset: Date.now() + 3600000 
      };
    }

    const { success, limit, reset, remaining } = await rateLimiter.limit(identifier);
    return { success, limit, reset, remaining };
  } catch (error) {
    console.error("Erro no rate limiting:", error);
    // Em caso de erro, permitir a requisição (fail open)
    return { 
      success: true, 
      limit: 5, 
      remaining: 5, 
      reset: Date.now() + 3600000 
    };
  }
}

// Função para obter IP do cliente
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}