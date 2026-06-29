const fs = require('fs');

let charTab = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');
if (!charTab.includes('useTheme')) {
  charTab = charTab.replace(
    /import React, \{ useState \} from 'react';/,
    "import React, { useState } from 'react';\nimport { useTheme, ThemeColors } from '../context/ThemeContext';"
  );
}
fs.writeFileSync('src/components/CharacterTab.tsx', charTab);

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
if (!eq.includes('import { ThemeColors }')) {
  eq = eq.replace(/import \{ useTheme \} from '\.\.\/context\/ThemeContext';/, "import { useTheme, ThemeColors } from '../context/ThemeContext';");
}
// Remove duplicate ThemeColors if exists
eq = eq.replace(/import \{ ThemeColors \} from '\.\.\/context\/ThemeContext';\n/, "");
eq = eq.replace(/const createStyles = \(colors: ThemeColors\) => StyleSheet\.create\(\{/, "const createStyles = (colors: ThemeColors) => StyleSheet.create({");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

console.log('Fixed imports');
