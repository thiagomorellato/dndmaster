const fs = require('fs');

function processEquipmentTracker() {
  const file = 'src/components/EquipmentTracker.tsx';
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Colors mapping
  content = content.replace(/'#1E293B'/g, 'colors.surfaceSecondary');
  content = content.replace(/'#334155'/g, 'colors.borderHighlight');
  content = content.replace(/'rgba\(51, 65, 85, 0\.5\)'/g, 'colors.surfaceSecondary');

  // Emerald mappings
  content = content.replace(/'rgba\(16, 185, 129, 0\.12\)'/g, 'colors.accentEmeraldBg');
  content = content.replace(/'rgba\(16, 185, 129, 0\.4\)'/g, 'colors.accentEmerald');

  // Red mappings
  content = content.replace(/'rgba\(239, 68, 68, 0\.12\)'/g, 'colors.accentRedBg');
  content = content.replace(/'rgba\(239, 68, 68, 0\.4\)'/g, 'colors.accentRed');

  // Any other hardcoded colors? Let's check detailModalContent if it exists
  content = content.replace(/'rgba\(30, 41, 59, 0\.95\)'/g, 'colors.overlayBg');
  content = content.replace(/'rgba\(56, 189, 248, 0\.3\)'/g, 'colors.borderHighlight');

  fs.writeFileSync(file, content);
  console.log('Fixed EquipmentTracker');
}

function processVitalsWidget() {
  const file = 'src/components/VitalsWidget.tsx';
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Fix columnSkillNameProficient
  content = content.replace(/columnSkillNameProficient: \{\s*color: '#E2E8F0',/g, 'columnSkillNameProficient: {\n      color: colors.textMain,');
  
  // Fix getSvgIcon color
  content = content.replace(/const color = "#94A3B8";/g, 'const color = colors.textMain;');

  fs.writeFileSync(file, content);
  console.log('Fixed VitalsWidget');
}

processEquipmentTracker();
processVitalsWidget();
