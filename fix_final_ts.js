const fs = require('fs');

// VitalsWidget.tsx
let v = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

if (!v.includes('ThemeColors')) {
  v = v.replace(
    /import \{ useTheme \} from '\.\.\/context\/ThemeContext';/,
    "import { useTheme, ThemeColors } from '../context/ThemeContext';"
  );
}

// Pass styles to WeaponCard
v = v.replace(
  /const WeaponCard = \(\{ \n\s*item, \n\s*atkBonusStr, \n\s*currentDmg, \n\s*rangeText,\n\s*getSvgIcon \n\}\: any\) => \{/,
  "const WeaponCard = ({ \n  item, \n  atkBonusStr, \n  currentDmg, \n  rangeText,\n  getSvgIcon,\n  styles \n}: any) => {"
);

v = v.replace(
  /<WeaponCard \n\s*key=\{i\}\n\s*item=\{item\}\n\s*atkBonusStr=\{atkBonusStr\}\n\s*currentDmg=\{currentDmg\}\n\s*rangeText=\{rangeText\}\n\s*getSvgIcon=\{getSvgIcon\}\n\s*\/>/g,
  "<WeaponCard \n                              key={i}\n                              item={item}\n                              atkBonusStr={atkBonusStr}\n                              currentDmg={currentDmg}\n                              rangeText={rangeText}\n                              getSvgIcon={getSvgIcon}\n                              styles={styles}\n                            />"
);

// We need to fix the colors being used before assignment or from global scope?
v = v.replace(
  /const getSvgIcon = \(name: string\) => \{([^}]+)const color = "#94A3B8";/g,
  "const getSvgIcon = (name: string, colors: ThemeColors) => {$1const color = colors.textMuted || \"#94A3B8\";"
);
v = v.replace(/getSvgIcon\(item\.name\)/g, "getSvgIcon(item.name, styles ? (styles as any).colors : {} as any)");

// ResourceTracker.tsx
let r = fs.readFileSync('src/components/ResourceTracker.tsx', 'utf8');
// Fix redeclaring colors: if it's redeclared, we just remove the global one or something
// If it was already converted, `refactor_theme_robust.js` might have run twice?
r = r.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{ colors \} = useTheme\(\);/g, "const { colors } = useTheme();");
r = r.replace(/const styles = createStyles\(colors\);\n\s*const styles = createStyles\(colors\);/g, "const styles = createStyles(colors);");

fs.writeFileSync('src/components/VitalsWidget.tsx', v);
fs.writeFileSync('src/components/ResourceTracker.tsx', r);

console.log('Fixed TS errors in VitalsWidget and ResourceTracker');
