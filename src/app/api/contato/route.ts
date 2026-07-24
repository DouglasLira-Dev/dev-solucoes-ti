import { NextRequest, NextResponse } from "next/server";
import { contatoSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

// Rate limiting simples (em memória)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // 5 requisições
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  rateLimit.set(ip, record);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Muitas tentativas. Tente novamente em 1 hora." 
        },
        { status: 429 }
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
        message: "Mensagem enviada com sucesso! Responderemos em breve." 
      },
      { status: 200 }
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