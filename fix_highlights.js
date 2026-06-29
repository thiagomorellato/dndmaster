const fs = require('fs');

const files = [
  'src/components/VitalsWidget.tsx', 
  'src/components/EquipmentTracker.tsx',
  'src/components/ResourceTracker.tsx',
  'src/components/CharacterTab.tsx',
  'src/screens/DashboardScreen.tsx',
  'src/screens/HomeScreen.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Clean up all remaining slate gray backgrounds/borders to use ThemeContext
  content = content.replace(/backgroundColor: '#E2E8F0'/g, "backgroundColor: colors.border");
  content = content.replace(/borderColor: '#CBD5E1'/g, "borderColor: colors.border");
  content = content.replace(/color: '#64748B'/g, "color: colors.textMuted");
  content = content.replace(/color="#64748B"/g, "color={colors.textMuted}");
  content = content.replace(/color: '#94A3B8'/g, "color: colors.textMuted");
  content = content.replace(/color="#94A3B8"/g, "color={colors.textMuted}");
  content = content.replace(/color="#475569"/g, "color={colors.textMuted}");
  content = content.replace(/color: '#475569'/g, "color: colors.textMuted");
  
  // Ensure blue highlights for primary buttons/icons instead of dark gray/orange
  content = content.replace(/color=\{creationMode === 'custom' \? colors\.textMain : colors\.textMuted\}/g, "color={creationMode === 'custom' ? colors.accentSky : colors.textMuted}");
  content = content.replace(/color=\{creationMode === 'magic' \? colors\.textMain : colors\.textMuted\}/g, "color={creationMode === 'magic' ? colors.accentSky : colors.textMuted}");
  
  // Dashboard highlights
  content = content.replace(/backgroundColor: colors\.accentAmber/g, "backgroundColor: colors.accentSky");
  content = content.replace(/color=\{colors\.accentAmber\}/g, "color={colors.accentSky}");
  content = content.replace(/color="\#F59E0B"/g, "color={colors.accentSky}"); // Amber to Sky
  
  fs.writeFileSync(file, content);
}

console.log('Fixed highlights and backgrounds');
