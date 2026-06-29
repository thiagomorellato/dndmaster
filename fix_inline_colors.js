const fs = require('fs');

// VitalsWidget.tsx
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
vw = vw.replace(/backgroundColor: '#1c1c1e'/g, "backgroundColor: colors.surface");
vw = vw.replace(/color: '#F8FAFC'/g, "color: colors.textMain");
vw = vw.replace(/borderColor: '#334155'/g, "borderColor: colors.border");
vw = vw.replace(/placeholderTextColor="#94A3B8"/g, "placeholderTextColor={colors.textMuted}");
vw = vw.replace(/color="#0F172A"/g, "color={colors.textMain}");
vw = vw.replace(/color: isOverweight \? '#EF4444' : '#F8FAFC'/g, "color: isOverweight ? colors.accentRed : colors.textMain");
vw = vw.replace(/color="rgba\(148, 163, 184, 0\.25\)"/g, "color={colors.border}");
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

// EquipmentTracker.tsx
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/color="#0F172A"/g, "color={colors.textMain}");
eq = eq.replace(/color: '#0F172A'/g, "color: colors.textMain");
eq = eq.replace(/borderTopColor: '#334155'/g, "borderTopColor: colors.border");
eq = eq.replace(/color="#94A3B8"/g, "color={colors.textMuted}");
eq = eq.replace(/color=\{creationMode === 'custom' \? '#0F172A' : '#94A3B8'\}/g, "color={creationMode === 'custom' ? colors.textMain : colors.textMuted}");
eq = eq.replace(/color=\{creationMode === 'magic' \? '#0F172A' : '#94A3B8'\}/g, "color={creationMode === 'magic' ? colors.textMain : colors.textMuted}");
eq = eq.replace(/borderTopColor: '#1E293B'/g, "borderTopColor: colors.border");
eq = eq.replace(/borderBottomColor: '#1E293B'/g, "borderBottomColor: colors.border");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

// CharacterTab.tsx
let ct = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');
if (!ct.includes('const { colors } = useTheme();')) {
  ct = ct.replace(/export const CharacterTab: React\.FC<CharacterTabProps> = \(\{.*?\}\) => \{/, (m) => m + "\n  const { colors } = useTheme();");
}
ct = ct.replace(/color="#0F172A"/g, "color={colors.textMain}");
ct = ct.replace(/color: '#0F172A'/g, "color: colors.textMain");
ct = ct.replace(/color: '#94A3B8'/g, "color: colors.textMuted");
ct = ct.replace(/color: '#F8FAFC'/g, "color: colors.textMain");
ct = ct.replace(/backgroundColor: '#E2E8F0'/g, "backgroundColor: colors.border");
fs.writeFileSync('src/components/CharacterTab.tsx', ct);

// HomeScreen.tsx
let hs = fs.readFileSync('src/screens/HomeScreen.tsx', 'utf8');
hs = hs.replace(/color=\{theme === 'dark' \? '#0F172A' : '#FFFFFF'\}/g, "color={colors.background}");
hs = hs.replace(/color: '#0F172A'/g, "color: colors.background"); // usually button text where button is colors.textMain
hs = hs.replace(/backgroundColor: '#334155'/g, "backgroundColor: colors.border");
fs.writeFileSync('src/screens/HomeScreen.tsx', hs);

// DashboardScreen.tsx
let ds = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');
// The modals in DashboardScreen already use styles.modalContent which uses colors.surface
// But let's check for any hardcoded '#0F172A'
ds = ds.replace(/colors\.background === '#0F172A'/g, "theme === 'dark'");
fs.writeFileSync('src/screens/DashboardScreen.tsx', ds);

console.log('Fixed inline colors');
