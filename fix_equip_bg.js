const fs = require('fs');
const file = 'src/components/EquipmentTracker.tsx';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/backgroundColor:\s*colors\.textMain/g, 'backgroundColor: colors.surfaceSecondary');
  fs.writeFileSync(file, content);
  console.log('Fixed inverted background in EquipmentTracker');
}
