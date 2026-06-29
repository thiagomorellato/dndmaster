const fs = require('fs');

const fixFile = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/color=colors\.([a-zA-Z]+)/g, 'color={colors.$1}');
  fs.writeFileSync(path, content);
};

fixFile('src/components/VitalsWidget.tsx');
fixFile('src/components/CharacterTab.tsx');

console.log('Fixed syntax errors');
