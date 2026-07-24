import { generateMetadata as seoMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';

interface TermosPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: TermosPageProps) {
  const dict = getDictionary(params.locale);
  const title = params.locale === 'pt' ? 'Termos de Uso' : 'Terms of Use';
  
  return seoMetadata({
    title,
    description: params.locale === 'pt' 
      ? 'Termos de Uso da DEV Soluções em TI'
      : 'DEV Solutions in IT Terms of Use',
    url: '/termos',
  });
}

export default async function TermosPage({ params }: TermosPageProps) {
  const dict = getDictionary(params.locale);
  const isPt = params.locale === 'pt';

  return (
    <div className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {isPt ? 'Termos de Uso' : 'Terms of Use'}
        </h1>
        <p className="text-gray-400 mb-8">
          {isPt ? 'Última atualização:' : 'Last updated:'} {new Date().toLocaleDateString(isPt ? 'pt-BR' : 'en-US')}
        </p>

        <div className="space-y-8 text-gray-300">
          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '1. Aceitação dos Termos' : '1. Acceptance of Terms'}
            </h2>
            <p>
              {isPt 
                ? 'Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize este site.'
                : 'By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, do not use this website.'}
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '2. Propriedade Intelectual' : '2. Intellectual Property'}
            </h2>
            <p className="mb-4">
              {isPt 
                ? 'Todo o conteúdo deste site, incluindo textos, imagens, logotipos e código, é propriedade da DEV Soluções em TI e está protegido por leis de direitos autorais.'
                : 'All content on this website, including text, images, logos and code, is the property of DEV Solutions in IT and is protected by copyright laws.'}
            </p>
            <p className="text-gray-400 text-sm">
              {isPt 
                ? '🔒 É proibida a reprodução total ou parcial sem autorização prévia por escrito.'
                : '🔒 Total or partial reproduction is prohibited without prior written authorization.'}
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '3. Isenção de Responsabilidade' : '3. Disclaimer'}
            </h2>
            <p>
              {isPt 
                ? 'As informações fornecidas neste site são apenas para fins informativos. A DEV Soluções em TI não se responsabiliza por decisões tomadas com base nestas informações.'
                : 'The information provided on this website is for informational purposes only. DEV Solutions in IT is not responsible for decisions made based on this information.'}
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '4. Links Externos' : '4. External Links'}
            </h2>
            <p>
              {isPt 
                ? 'Este site pode conter links para sites externos. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.'
                : 'This website may contain links to external sites. We are not responsible for the content or privacy practices of these sites.'}
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '5. Alterações nos Termos' : '5. Changes to Terms'}
            </h2>
            <p>
              {isPt 
                ? 'Reservamos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site.'
                : 'We reserve the right to modify these terms at any time. Changes take effect immediately upon posting on the website.'}
            </p>
          </section>

          <section className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isPt ? '6. Contato' : '6. Contact'}
            </h2>
            <p className="mb-4">
              {isPt 
                ? 'Para dúvidas sobre estes Termos de Uso, entre em contato:'
                : 'For questions about these Terms of Use, contact us:'}
            </p>
            <div className="space-y-2">
              <p>
                📧 <a href="mailto:contato@assistenciatecnicasolucao.dev" className="text-primary hover:text-primary-dark transition-colors">
                  contato@assistenciatecnicasolucao.dev
                </a>
              </p>
            </div>
          </section>

          <div className="bg-dark-card border border-cyber-green/30 rounded-lg p-4 text-center text-cyber-green">
            <p className="text-sm">
              {isPt 
                ? '🔒 Ao usar nosso site, você concorda com estes termos. Transparência e confiança são fundamentais para nós.'
                : '🔒 By using our website, you agree to these terms. Transparency and trust are fundamental to us.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}