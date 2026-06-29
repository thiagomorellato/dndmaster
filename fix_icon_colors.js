const fs = require('fs');
const filePath = 'src/components/VitalsWidget.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('const color = "#94A3B8";', 'const color = colors.textMain;');
content = content.replace('<ArrowIcon width={14} height={14} fill="#64748B" />', '<ArrowIcon width={14} height={14} fill={colors.textMain} />');

fs.writeFileSync(filePath, content);
console.log('Fixed icon colors');
