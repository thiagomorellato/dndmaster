/**
 * translate_spells_fix.js
 * Lê dndSpells.ts, traduz as descrições ainda em inglês para PT-BR,
 * e salva o arquivo atualizado.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SPELLS_FILE = path.join(__dirname, 'src', 'utils', 'dndSpells.ts');

// Palavras em inglês que indicam que a descrição ainda não foi traduzida
const ENGLISH_INDICATORS = [
  /\byou\b/i, /\bthe\b/i, /\bthis\b/i, /\bwhen\b/i, /\bif\b/i,
  /\beach\b/i, /\buntil\b/i, /\bwhile\b/i, /\bone\b/i, /\bthat\b/i,
];

function hasEnglish(text) {
  return ENGLISH_INDICATORS.some(re => re.test(text));
}

async function translateText(text) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(text);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encoded}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          // A resposta é um array aninhado; juntamos todos os segmentos
          const translated = json[0].map(seg => seg[0]).join('');
          resolve(translated);
        } catch (e) {
          reject(new Error('Falha ao parsear resposta: ' + e.message));
        }
      });
    }).on('error', reject);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('📖 Lendo arquivo de spells...');
  const content = fs.readFileSync(SPELLS_FILE, 'utf8');
  
  // Extrai todas as spells do array usando regex
  // Captura o JSON de cada spell individualmente
  const spellRegex = /\{[\s\S]*?"name"[\s\S]*?"description":\s*"((?:[^"\\]|\\[\s\S])*)"[\s\S]*?\}/g;
  
  // Parse o conteúdo do arquivo para extrair o array de spells
  // Vamos usar uma abordagem mais simples: substituir cada campo "description"
  const descRegex = /"description":\s*"((?:[^"\\]|\\.)*)"/g;
  
  let match;
  const translations = [];
  const positions = [];
  
  // Primeiro passo: coletar todas as descrições e suas posições
  while ((match = descRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const description = match[1];
    positions.push({
      start: match.index,
      end: match.index + fullMatch.length,
      original: description,
      fullMatch: fullMatch,
    });
  }
  
  console.log(`📊 Total de spells encontradas: ${positions.length}`);
  
  const needsTranslation = positions.filter(p => hasEnglish(p.original));
  console.log(`🔄 Spells que precisam de tradução: ${needsTranslation.length}`);
  
  if (needsTranslation.length === 0) {
    console.log('✅ Todas as descrições já estão traduzidas!');
    return;
  }
  
  // Segundo passo: traduzir cada descrição
  for (let i = 0; i < needsTranslation.length; i++) {
    const item = needsTranslation[i];
    // Decodifica escapes de string JS para texto real
    let rawText;
    try {
      rawText = JSON.parse(`"${item.original}"`);
    } catch {
      rawText = item.original;
    }
    
    console.log(`[${i + 1}/${needsTranslation.length}] Traduzindo: ${rawText.substring(0, 60).replace(/\n/g, ' ')}...`);
    
    try {
      const translated = await translateText(rawText);
      // Re-encoda para formato de string JSON (escapa aspas e quebras de linha)
      const encoded = translated
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
      item.translated = encoded;
      console.log(`   ✅ OK`);
    } catch (e) {
      console.error(`   ❌ Erro: ${e.message}`);
      item.translated = item.original; // mantém original se falhar
    }
    
    // Rate limit: espera 300ms entre requisições
    if (i < needsTranslation.length - 1) {
      await sleep(300);
    }
  }
  
  // Terceiro passo: reconstruir o arquivo com as traduções
  console.log('\n📝 Aplicando traduções ao arquivo...');
  let newContent = content;
  let offset = 0;
  
  // Reprocessa as posições ordenadas para aplicar substituições
  // (precisamos reprocessar porque o offset muda com cada substituição)
  for (const item of needsTranslation) {
    if (item.translated === undefined) continue;
    
    const searchStr = `"description": "${item.original}"`;
    const replaceStr = `"description": "${item.translated}"`;
    
    // Substitui apenas a primeira ocorrência exata
    const idx = newContent.indexOf(searchStr);
    if (idx !== -1) {
      newContent = newContent.substring(0, idx) + replaceStr + newContent.substring(idx + searchStr.length);
    }
  }
  
  // Backup do original
  const backupPath = SPELLS_FILE + '.bak';
  fs.writeFileSync(backupPath, content, 'utf8');
  console.log(`💾 Backup salvo em: ${backupPath}`);
  
  // Salva o arquivo traduzido
  fs.writeFileSync(SPELLS_FILE, newContent, 'utf8');
  console.log(`✅ Arquivo atualizado: ${SPELLS_FILE}`);
  console.log(`\n🎉 Tradução concluída! ${needsTranslation.length} spells traduzidas.`);
}

main().catch(err => {
  console.error('Erro fatal:', err);
  process.exit(1);
});
