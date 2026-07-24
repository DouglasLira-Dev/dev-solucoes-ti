import { NextRequest, NextResponse } from "next/server";
import { contatoSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting com Redis
    const ip = getClientIp(request);
    const rateLimitResult = await checkRateLimit(ip);

    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.reset);
      const minutosRestantes = Math.ceil((rateLimitResult.reset - Date.now()) / 60000);
      
      return NextResponse.json(
        { 
          success: false, 
          message: `Muitas tentativas. Tente novamente em ${minutosRestantes} minutos.`,
          limit: rateLimitResult.limit,
          remaining: rateLimitResult.remaining,
          reset: resetDate.toISOString(),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(rateLimitResult.limit),
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.reset),
          }
        }
      );
    }

    // 2. Parse do body
    const body = await request.json();

    // 3. Honeypot (anti-spam)
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently ignore (bot detection)
      return NextResponse.json(
        { success: true, message: "Mensagem enviada com sucesso!" },
        { status: 200 }
      );
    }

    // 4. Validação com Zod
    const result = contatoSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.errors.map((err) => ({
        campo: err.path.join("."),
        mensagem: err.message,
      }));
      return NextResponse.json(
        { success: false, message: "Erro de validação", errors },
        { status: 400 }
      );
    }

    // 5. Enviar e-mail
    const { nome, email, mensagem } = result.data;
    const emailResult = await sendContactEmail({ nome, email, mensagem });

    if (!emailResult.success) {
      console.error("Erro ao enviar e-mail:", emailResult.error);
      return NextResponse.json(
        { 
          success: false, 
          message: "Erro ao enviar mensagem. Tente novamente mais tarde." 
        },
        { status: 500 }
      );
    }

    // 6. Sucesso
    return NextResponse.json(
      { 
        success: true, 
        message: "Mensagem enviada com sucesso! Responderemos em breve.",
        limit: rateLimitResult.limit,
        remaining: rateLimitResult.remaining - 1,
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(rateLimitResult.limit),
          'X-RateLimit-Remaining': String(rateLimitResult.remaining - 1),
          'X-RateLimit-Reset': String(rateLimitResult.reset),
        }
      }
    );

  } catch (error) {
    console.error("Erro no endpoint de contato:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Erro interno do servidor. Tente novamente mais tarde." 
      },
      { status: 500 }
    );
  }
}