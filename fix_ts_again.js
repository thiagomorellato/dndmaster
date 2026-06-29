const fs = require('fs');

let v = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
v = v.replace(/import \{ useTheme, ThemeColors \} from '\.\.\/context\/ThemeContext';\nimport \{ useTheme, ThemeColors \} from '\.\.\/context\/ThemeContext';/g, "import { useTheme, ThemeColors } from '../context/ThemeContext';");

// Move WeaponCard inside VitalsWidget so it has access to styles
const weaponCardRegex = /const WeaponCard = \(\{\s*item,\s*atkBonusStr,\s*currentDmg,\s*rangeText,\s*getSvgIcon,\s*styles\s*\}\: any\) => \{[\s\S]*?\}\;\n/m;
const weaponCardMatch = v.match(weaponCardRegex);
if (weaponCardMatch) {
  v = v.replace(weaponCardRegex, '');
  v = v.replace(/export const VitalsWidget\: React\.FC<VitalsWidgetProps> = \(\{[\s\S]*?\}\) => \{/, match => match + '\n' + weaponCardMatch[0]);
}

// Remove styles parameter from WeaponCard now that it's inside VitalsWidget
v = v.replace(/const WeaponCard = \(\{\s*item,\s*atkBonusStr,\s*currentDmg,\s*rangeText,\s*getSvgIcon,\s*styles\s*\}\: any\) => \{/, "const WeaponCard = ({ \n  item, \n  atkBonusStr, \n  currentDmg, \n  rangeText,\n  getSvgIcon\n}: any) => {");

// Remove styles from WeaponCard calls
v = v.replace(/styles=\{styles\}\s*\/>/g, "/>");

fs.writeFileSync('src/components/VitalsWidget.tsx', v);

let r = fs.readFileSync('src/components/ResourceTracker.tsx', 'utf8');
r = r.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{ colors \} = useTheme\(\);/g, "const { colors } = useTheme();");
fs.writeFileSync('src/components/ResourceTracker.tsx', r);
console.log('Fixed TS errors finally');
