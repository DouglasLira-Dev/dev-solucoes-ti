import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  
  email: z.string()
    .email("E-mail inválido")
    .max(100, "E-mail muito longo"),
  
  mensagem: z.string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa (máximo 1000 caracteres)"),
  
  honeypot: z.string().optional(),
});

export type ContatoData = z.infer<typeof contatoSchema>;

export const contatoResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContatoResponse = z.infer<typeof contatoResponseSchema>;