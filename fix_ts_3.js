const fs = require('fs');

let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
const createStylesMatch = vw.match(/const styles = createStyles\(colors\);/);
if (createStylesMatch) {
  // move createStyles(colors) right before WeaponCard
  vw = vw.replace(/const styles = createStyles\(colors\);\n/, '');
  vw = vw.replace(/const WeaponCard = /, 'const styles = createStyles(colors);\n  const WeaponCard = ');
  fs.writeFileSync('src/components/VitalsWidget.tsx', vw);
}

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/const styles = createStyles\(colors\);/g, '');
eq = eq.replace(/const \{ colors \} = useTheme\(\);/g, 'const { colors } = useTheme();\n  const styles = createStyles(colors);');
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

let rt = fs.readFileSync('src/components/ResourceTracker.tsx', 'utf8');
rt = rt.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{ colors \} = useTheme\(\);/g, 'const { colors } = useTheme();');
fs.writeFileSync('src/components/ResourceTracker.tsx', rt);

console.log('Fixed more TS errors');
