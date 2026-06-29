const fs = require('fs');

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

// Use an array to remove duplicate lines
const lines = eq.split('\n');
const seen = new Set();
const newLines = [];

for (const line of lines) {
  if (line.includes("import { useTheme, ThemeColors } from '../context/ThemeContext';")) {
    if (!seen.has('themeimport')) {
      seen.add('themeimport');
      newLines.push(line);
    }
  } else if (line.includes("const { colors } = useTheme();")) {
    if (!seen.has('themevar')) {
      seen.add('themevar');
      newLines.push(line);
    }
  } else if (line.includes("import { useTheme } from '../context/ThemeContext';")) {
     // Ignore it
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync('src/components/EquipmentTracker.tsx', newLines.join('\n'));
console.log('Fixed Eq perfectly');
