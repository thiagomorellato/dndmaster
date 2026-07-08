const fs = require('fs');
const content = fs.readFileSync('src/utils/dndSpells.ts', 'utf8');

const regex = /"name":\s*"([^"]+)"/g;
let match;
const names = [];
while ((match = regex.exec(content)) !== null) {
  names.push(match[1]);
}

const golpes = names.filter(n => n.toLowerCase().includes('golpe'));
console.log('Found Golpe spells:', golpes);
