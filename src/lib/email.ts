import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Função de escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

interface SendEmailParams {
  nome: string;
  email: string;
  mensagem: string;
}

export async function sendContactEmail({ nome, email, mensagem }: SendEmailParams) {
  try {
    // Sanitizar dados
    const nomeSanitizado = escapeHtml(nome);
    const emailSanitizado = escapeHtml(email);
    const mensagemSanitizada = escapeHtml(mensagem);

    const { data, error } = await resend.emails.send({
      from: "Contato DEV Soluções <assistenciatecnicasolucao.dev@gmail.com>",
      to: ["assistenciatecnicasolucao.dev@gmail.com"],
      subject: `Novo contato de ${nomeSanitizado}`,
      reply_to: emailSanitizado,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; background: #0A0A0A; color: #FFFFFF; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #1A1A1A; border-radius: 12px; padding: 30px; border: 1px solid #2A2A2A; }
              .header { border-bottom: 2px solid #00D4FF; padding-bottom: 20px; margin-bottom: 20px; }
              h1 { color: #00D4FF; margin: 0; }
              .field { margin-bottom: 15px; }
              .label { color: #00D4FF; font-weight: bold; }
              .value { color: #FFFFFF; margin-left: 10px; }
              .message-box { background: #0A0A0A; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 3px solid #00D4FF; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #2A2A2A; color: #666; font-size: 12px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Novo Contato</h1>
              </div>
              <div class="field">
                <span class="label">👤 Nome:</span>
                <span class="value">${nomeSanitizado}</span>
              </div>
              <div class="field">
                <span class="label">📧 E-mail:</span>
                <span class="value">${emailSanitizado}</span>
              </div>
              <div class="message-box">
                <div style="color: #00D4FF; font-weight: bold; margin-bottom: 10px;">💬 Mensagem:</div>
                <div style="color: #CCCCCC; white-space: pre-wrap;">${mensagemSanitizada}</div>
              </div>
              <div class="footer">
                <p>DEV Soluções em TI - Suporte, Desenvolvimento e Cybersegurança</p>
                <p>🔒 Esta mensagem foi enviada através do formulário de contato do site</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Novo Contato - DEV Soluções em TI
        
        Nome: ${nomeSanitizado}
        E-mail: ${emailSanitizado}
        
        Mensagem:
        ${mensagemSanitizada}
        
        ---
        DEV Soluções em TI - Suporte, Desenvolvimento e Cybersegurança
        ${new Date().toLocaleString("pt-BR")}
      `,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Erro interno ao enviar e-mail" 
    };
  }
}