const fs = require('fs');

// CharacterTab.tsx
let charTab = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');
if (!charTab.includes('useTheme')) {
  charTab = charTab.replace(
    /import React, \{ useState, useEffect \} from 'react';/,
    "import React, { useState, useEffect } from 'react';\nimport { useTheme, ThemeColors } from '../context/ThemeContext';"
  );
}
fs.writeFileSync('src/components/CharacterTab.tsx', charTab);

// EquipmentTracker.tsx
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/const createStyles = \(colors: ThemeColors\) => StyleSheet.create\(\{/, "import { ThemeColors } from '../context/ThemeContext';\nconst createStyles = (colors: ThemeColors) => StyleSheet.create({");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

// ResourceTracker.tsx
let rt = fs.readFileSync('src/components/ResourceTracker.tsx', 'utf8');
rt = rt.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{ colors \} = useTheme\(\);/g, "const { colors } = useTheme();");
fs.writeFileSync('src/components/ResourceTracker.tsx', rt);

// VitalsWidget.tsx
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
if (!vw.includes('import { useTheme')) {
  vw = vw.replace(
    /import \{ Ionicons \} from '@expo\/vector-icons';/,
    "import { Ionicons } from '@expo/vector-icons';\nimport { useTheme, ThemeColors } from '../context/ThemeContext';"
  );
}

const weaponCardRegex = /const WeaponCard = \(\{[\s\S]*?\}\) => \{[\s\S]*?\}\;\n/m;
const match = vw.match(weaponCardRegex);
if (match) {
  vw = vw.replace(weaponCardRegex, '');
  vw = vw.replace(/export const VitalsWidget\: React\.FC<VitalsWidgetProps> = \(\{[\s\S]*?\}\) => \{/, (m) => m + '\n' + match[0]);
}

vw = vw.replace(/styles=\{styles\}/g, '');
vw = vw.replace(/const WeaponCard = \(\{\s*item,\s*atkBonusStr,\s*currentDmg,\s*rangeText,\s*getSvgIcon,\s*styles\s*\}\: any\) => \{/, "const WeaponCard = ({\n  item,\n  atkBonusStr,\n  currentDmg,\n  rangeText,\n  getSvgIcon\n}: any) => {");

fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fixed TS errors in files');
