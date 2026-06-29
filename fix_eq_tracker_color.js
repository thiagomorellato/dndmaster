const fs = require('fs');

let eqContent = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

const regex = /templateBtnText: \{\s*color: '#E2E8F0',/;
const replacement = `templateBtnText: {\n    color: colors.textMain,`;

eqContent = eqContent.replace(regex, replacement);

fs.writeFileSync('src/components/EquipmentTracker.tsx', eqContent);
console.log('Fixed templateBtnText color');
