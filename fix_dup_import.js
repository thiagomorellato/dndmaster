const fs = require('fs');
let ct = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');

const lines = ct.split('\n');
const seen = new Set();
const newLines = [];

for (const line of lines) {
  if (line.includes("import { useTheme, ThemeColors } from '../context/ThemeContext';")) {
    if (!seen.has('theme')) {
      seen.add('theme');
      newLines.push(line);
    }
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync('src/components/CharacterTab.tsx', newLines.join('\n'));
console.log('Fixed CharacterTab duplicate import');
