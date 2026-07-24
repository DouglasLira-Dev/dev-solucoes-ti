/**
 * Script para testar acessibilidade com axe-core
 * Execute: node scripts/accessibility-test.js
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
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

const resultsDir = path.join(__dirname, '../accessibility-results');

async function testAccessibility(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Injetar axe-core
    await page.addScriptTag({
      url: 'https://cdn.jsdelivr.net/npm/axe-core@4.7.2/axe.min.js',
    });

    // Executar teste
    const results = await page.evaluate(() => {
      return new Promise((resolve) => {
        window.axe.run((err, results) => {
          if (err) {
            resolve({ error: err.message });
          } else {
            resolve(results);
          }
        });
      });
    });

    await browser.close();
    return { url, results };
  } catch (error) {
    await browser.close();
    return { url, error: error.message };
  }
}

console.log('♿ Iniciando testes de acessibilidade...\n');

const allResults = [];
for (const url of urls) {
  const result = await testAccessibility(url);
  allResults.push(result);
  
  if (result.error) {
    console.error(`❌ Erro ao testar ${url}:`, result.error);
  } else {
    const { violations } = result.results;
    console.log(`✅ ${url}: ${violations.length} violações encontradas`);
    if (violations.length > 0) {
      violations.forEach((v) => {
        console.log(`   - ${v.id}: ${v.help}`);
      });
    }
  }
}

// Salvar relatório
const reportPath = path.join(resultsDir, 'accessibility-report.json');
writeFileSync(reportPath, JSON.stringify(allResults, null, 2));

console.log(`\n📊 Relatório salvo em: ${reportPath}`);
console.log('\n✅ Testes de acessibilidade concluídos!');