const fs = require('fs');

// --- EquipmentTracker.tsx ---
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

// 1. Add const styles = useStyles(colors); right after const { colors } = useTheme();
if (!eq.includes('const styles = useStyles(colors);')) {
  eq = eq.replace(/const \{ colors \} = useTheme\(\);/, "const { colors } = useTheme();\n  const styles = useStyles(colors);");
}

// 2. Change const styles = StyleSheet.create({ to const useStyles = (colors: ThemeColors) => StyleSheet.create({
eq = eq.replace(/const styles = StyleSheet\.create\(\{/, "const useStyles = (colors: ThemeColors) => StyleSheet.create({");

// 3. Replace hardcoded colors in EquipmentTracker
eq = eq.replace(/backgroundColor: '#0F172A'/g, "backgroundColor: colors.background");
eq = eq.replace(/backgroundColor: '#1E293B'/g, "backgroundColor: colors.surface");
eq = eq.replace(/backgroundColor: '#334155'/g, "backgroundColor: colors.border");
eq = eq.replace(/borderColor: '#334155'/g, "borderColor: colors.border");
eq = eq.replace(/borderColor: '#1E293B'/g, "borderColor: colors.border");
eq = eq.replace(/color: '#F8FAFC'/g, "color: colors.textMain");
eq = eq.replace(/color: '#94A3B8'/g, "color: colors.textMuted");
eq = eq.replace(/color: '#334155'/g, "color: colors.textMuted");
eq = eq.replace(/shadowColor: '#000'/g, "shadowColor: colors.shadow");

// Remove inline styles I added earlier
eq = eq.replace(/style=\{\[styles\.weaponName, item\.isEquipped && styles\.weaponNameEquipped, \{ color: colors\.textMain \}\]\}/g, "style={[styles.weaponName, item.isEquipped && styles.weaponNameEquipped]}");
eq = eq.replace(/style=\{\[styles\.itemPropText, \{ color: colors\.textMain \}\]\}/g, "style={styles.itemPropText}");
eq = eq.replace(/style=\{\[styles\.emptyText, \{ color: colors\.textMain \}\]\}/g, "style={styles.emptyText}");

fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

// --- VitalsWidget.tsx ---
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// 1. Add const styles = useStyles(colors); inside VitalsWidget component right after const { colors } = useTheme();
if (!vw.includes('const styles = useStyles(colors);') && vw.includes('const { colors } = useTheme();')) {
  vw = vw.replace(/const \{ colors \} = useTheme\(\);/, "const { colors } = useTheme();\n  const styles = useStyles(colors);");
}

// 2. Also pass styles to WeaponCard
vw = vw.replace(/const WeaponCard = \(\{\s*item,\s*atkBonusStr,\s*currentDmg,\s*rangeText,\s*getSvgIcon\s*\}\: any\) => \{/, "const WeaponCard = ({\n  item,\n  atkBonusStr,\n  currentDmg,\n  rangeText,\n  getSvgIcon,\n  styles\n}: any) => {");

// Find all WeaponCard usages and inject styles={styles}
vw = vw.replace(/<WeaponCard/g, "<WeaponCard styles={styles}");

// 3. Change const styles = StyleSheet.create({ to const useStyles = (colors: ThemeColors) => StyleSheet.create({
vw = vw.replace(/const styles = StyleSheet\.create\(\{/, "const useStyles = (colors: ThemeColors) => StyleSheet.create({");

// 4. Replace hardcoded colors in VitalsWidget
vw = vw.replace(/backgroundColor: '#1E293B'/g, "backgroundColor: colors.surface");
vw = vw.replace(/backgroundColor: '#0F172A'/g, "backgroundColor: colors.background");
vw = vw.replace(/backgroundColor: '#334155'/g, "backgroundColor: colors.border");
vw = vw.replace(/borderColor: '#334155'/g, "borderColor: colors.border");
vw = vw.replace(/borderColor: '#1E293B'/g, "borderColor: colors.border");
vw = vw.replace(/color: '#F8FAFC'/g, "color: colors.textMain");
vw = vw.replace(/color: '#94A3B8'/g, "color: colors.textMuted");
vw = vw.replace(/shadowColor: '#000'/g, "shadowColor: colors.shadow");
vw = vw.replace(/backgroundColor: 'rgba\(30, 41, 59, 0\.85\)'/g, "backgroundColor: colors.surface");
vw = vw.replace(/backgroundColor: 'rgba\(15, 23, 42, 0\.9\)'/g, "backgroundColor: colors.background");

// 5. Fix {skill} to {fullName}
vw = vw.replace(/minimumFontScale=\{0\.75\}\n\s*>\n\s*\{skill\}\n\s*<\/Text>/g, "minimumFontScale={0.75}\n                        >\n                          {fullName}\n                        </Text>");

// Remove inline styles I added earlier
vw = vw.replace(/<Text style=\{\[styles\.attributeLabelHorizontal, \{ color: colors\.textMain \}\]\}>/g, '<Text style={styles.attributeLabelHorizontal}>');
vw = vw.replace(/<Text style=\{\[styles\.attributeMǜodHorizontal, \{ color: colors\.textMain \}\]\}>/g, '<Text style={styles.attributeMǜodHorizontal}>');
vw = vw.replace(/<Text style=\{\[styles\.attributeScoreHorizontal, \{ color: colors\.textMain \}\]\}>/g, '<Text style={styles.attributeScoreHorizontal}>');
vw = vw.replace(/<ArrowIcon width=\{14\} height=\{14\} fill=\{colors\.textMain\} \/>/g, '<ArrowIcon width={14} height={14} fill={colors.textMain} />');


fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fix styles done');
