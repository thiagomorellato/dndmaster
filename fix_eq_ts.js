const fs = require('fs');

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/const styles = React\.useMemo\(\(\) => createStyles\(colors\), \[colors\]\);\n\s*const \{ colors \} = useTheme\(\);\n\s*const styles = createStyles\(colors\);/, 'const { colors } = useTheme();\n  const styles = React.useMemo(() => createStyles(colors), [colors]);');
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
// Fix WeaponCard missing styles by making it accept styles prop
vw = vw.replace(/const WeaponCard = \(\{\s*item,\s*atkBonusStr,\s*currentDmg,\s*rangeText,\s*getSvgIcon\n\}\: any\) => \{/, "const WeaponCard = ({\n  item,\n  atkBonusStr,\n  currentDmg,\n  rangeText,\n  getSvgIcon,\n  styles\n}: any) => {");

// Add styles={styles} to WeaponCard calls
vw = vw.replace(/getSvgIcon=\{getSvgIcon\}\n\s*\/>/g, "getSvgIcon={getSvgIcon}\n                              styles={styles}\n                            />");

// Fix getSvgIcon expecting colors
// Let's see if getSvgIcon is still outside or inside
// If WeaponCard is outside, it needs styles.
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fixed Eq and Vitals TS');
