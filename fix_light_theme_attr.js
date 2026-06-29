const fs = require('fs');
const files = ['src/components/AttributesGrid.tsx'];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/color:\s*'#F8FAFC'/g, 'color: colors.textMain');
  content = content.replace(/'#F8FAFC'/g, 'colors.textMain');
  
  content = content.replace(/'rgba\(245, 158, 11, 0.12\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.05\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.03\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.1\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.4\)'/g, 'colors.accentAmber');
  content = content.replace(/'rgba\(245, 158, 11, 0.2\)'/g, 'colors.accentAmberBg');

  content = content.replace(/color:\s*'#64748B'/g, 'color: colors.textMuted');
  content = content.replace(/color:\s*'#94A3B8'/g, 'color: colors.textMuted');

  fs.writeFileSync(file, content);
  console.log('Processed', file);
}
