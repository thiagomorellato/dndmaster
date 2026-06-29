const fs = require('fs');

let eqContent = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

const regex = /\{item\.weight \? ` \| \$\{item\.weight\} lb` : \'\'\}/;
const replacement = `{item.weight ? \` | \${item.type === 'ammunition' && item.customResourceMax !== undefined ? (item.weight * item.customResourceMax).toFixed(1) : item.weight} lb\` : ''}`;

eqContent = eqContent.replace(regex, replacement);

fs.writeFileSync('src/components/EquipmentTracker.tsx', eqContent);
console.log('Fixed ammunition weight display');
