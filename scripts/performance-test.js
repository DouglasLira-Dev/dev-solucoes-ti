/**
 * Script para testar performance com Lighthouse
 * Execute: node scripts/performance-test.js
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
  'http://localhost:3000/pt',
  'http://localhost:3000/pt/sobre',
  'http://localhost:3000/pt/servicos',
  'http://localhost:3000/pt/projetos',
  'http://localhost:3000/pt/blog',
  'http://localhost:3000/pt/contato',
];

const resultsDir = path.join(__dirname, '../performance-results');

if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

async function runLighthouse(url, index) {
  const reportPath = path.join(resultsDir, `report-${index}.html`);
  const jsonPath = path.join(resultsDir, `report-${index}.json`);

  const command = `lighthouse ${url} --output=html,json --output-path=${reportPath},${jsonPath} --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless"`;

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao testar ${url}:`, error);
        resolve(null);
        return;
      }
      console.log(`✅ Teste concluído: ${url}`);
      resolve({ url, reportPath, jsonPath });
    });
  });
}

console.log('🚀 Iniciando testes de performance...\n');

const results = await Promise.all(urls.map((url, index) => runLighthouse(url, index)));

console.log('\n📊 Testes concluídos!');
console.log(`📁 Resultados salvos em: ${resultsDir}`);
console.log('\nAbrir os relatórios HTML para ver os resultados detalhados.');
console.log('Recomendações:');
console.log('- Performance: > 90');
console.log('- Acessibilidade: > 90');
console.log('- Melhores Práticas: > 90');
console.log('- SEO: > 90');
