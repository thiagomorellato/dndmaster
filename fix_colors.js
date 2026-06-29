const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = [...walkSync('src/components'), ...walkSync('src/screens')];

const replacements = [
  { search: /'#F59E0B'/gi, replace: 'colors.accentAmber' },
  { search: /'#38BDF8'/gi, replace: 'colors.accentSky' },
  { search: /'#10B981'/gi, replace: 'colors.accentEmerald' },
  { search: /'#EF4444'/gi, replace: 'colors.accentRed' },
  { search: /'#A78BFA'/gi, replace: 'colors.accentViolet' },
  { search: /'#0F172A'/gi, replace: 'colors.background' },
  { search: /'#1E293B'/gi, replace: 'colors.surface' },
  { search: /'#334155'/gi, replace: 'colors.border' },
  { search: /'#F8FAFC'/gi, replace: 'colors.textMain' },
  { search: /'#94A3B8'/gi, replace: 'colors.textMuted' },
  { search: /'#CBD5E1'/gi, replace: 'colors.textSecondary' },
  { search: /\"#F59E0B\"/gi, replace: 'colors.accentAmber' },
  { search: /\"#38BDF8\"/gi, replace: 'colors.accentSky' },
  { search: /\"#10B981\"/gi, replace: 'colors.accentEmerald' },
  { search: /\"#EF4444\"/gi, replace: 'colors.accentRed' },
  { search: /\"#A78BFA\"/gi, replace: 'colors.accentViolet' },
  { search: /\"#0F172A\"/gi, replace: 'colors.background' },
  { search: /\"#1E293B\"/gi, replace: 'colors.surface' },
  { search: /\"#334155\"/gi, replace: 'colors.border' },
  { search: /\"#F8FAFC\"/gi, replace: 'colors.textMain' },
  { search: /\"#94A3B8\"/gi, replace: 'colors.textMuted' },
  { search: /\"#CBD5E1\"/gi, replace: 'colors.textSecondary' }
];

let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  for (const { search, replace } of replacements) {
    if (search.test(content)) {
      content = content.replace(search, replace);
    }
  }

  // Handle color="colors..." -> color={colors....}
  content = content.replace(/color=\"colors\.([a-zA-Z]+)\"/g, 'color={colors.$1}');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed:', file);
    changedCount++;
  }
}

console.log('Total files fixed:', changedCount);
