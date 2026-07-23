# 🔒 DEV Soluções em TI

![Status do Build](https://img.shields.io/badge/build-passing-brightgreen)
![Segurança](https://img.shields.io/badge/security-hardened-blue)
![Versão](https://img.shields.io/badge/version-1.0.0-blue)

> Site profissional da DEV Soluções em TI - Especialistas em Suporte Técnico, Desenvolvimento e Cybersegurança

---
## 🛡️ Sobre o Projeto

Site institucional desenvolvido com foco em **segurança, performance e SEO**. Representa a identidade digital da DEV Soluções em TI, usa empresa de tecnologia com olhar de cybersegurança.

---
### Características Técnicas

- **Next.js 14** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** com tema dark/tech
- **i18n** (Português/Inglês)
- **MDX** para blog técnico
- **Segurança avançada** (CSP, HSTS, headers)
- **Google Analytics** com consentimento LGPD
- **Formulário seguro** com honeypot e rate limiting
- **Deploy contínuo** na Vercel

---
## 🔐 Headers de Segurança Implementados

```
| Header | Valor |
|--------|-------|
| HSTS | `max-age=63072000; includeSubDomains; preload` |
| CSP | Política restritiva com allowlist específica |
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | Geolocalização, microfone, câmera bloqueados |
```
---
## 🚀 Tecnologias

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000)

---
## 📁 Estrutura do Projeto

```
dev-solucoes-ti/
├── src/
│ ├── app/ # Rotas e páginas (App Router)
│ ├── components/ # Componentes reutilizáveis
│ ├── content/ # Posts do Blog (MDX)
│ ├── data/ # Dados estruturados (JSON/TS)
│ ├── lib/ # Utilitários e integrações
│ └── styles/ # Estilos globais
├── public/
│ ├── .well-known/ # security.txt
│ └── images/ # Imagens otimizadas
└── [arquivos de configuração]
```
---
## 🔧 Variáveis de Ambiente

```env
RESEND_API_KEY=          # API Key do Resend para email
GITHUB_TOKEN=            # Token do GitHub (opcional)
NEXT_PUBLIC_GA_ID=       # ID do Google Analytics
NEXT_PUBLIC_SITE_URL=    # URL do site
```
---
## 📦 Instalação e Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/dev-solucoes-ti.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Inicie em produção
npm start
```
---
## 🔄 CI/CD com Dependabot

O repositório possui configuração de Dependabot para monitoramento automático de vulnerabilidades em dependências:

```
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    labels:
      - "security"
      - "dependencies"

```
---
## 📝 Licença
Este projeto é proprietário e de uso exclusivo da DEV Soluções em TI.

---
## 📬 Contato

- Site: assistenciatecnicasolucao.dev

- Email: contato@assistenciatecnicasolucao.dev

- Discord: assistenciatecnica-dev
---

⚠️ Aviso de Segurança: Este site segue as melhores práticas de segurança. Vulnerabilidades devem ser reportadas através do canal indicado no /.well-known/security.txt.

Desenvolvido com ❤️ pela equipe DEV Soluções em TI

---
