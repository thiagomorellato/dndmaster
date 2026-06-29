const fs = require('fs');

let eqContent = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

const regex = /(\{item\.properties && item\.properties\.length > 0 \? ` \| \$\{item\.properties\.join\(\', \'\)\}` : \'\'\}\s*<\/Text>)/;
const replacement = `{item.properties && item.properties.length > 0 ? \` | \${item.properties.join(', ')}\` : ''}\n                {item.weight ? \` | \${item.weight} lb\` : ''}\n              </Text>`;

eqContent = eqContent.replace(regex, replacement);

fs.writeFileSync('src/components/EquipmentTracker.tsx', eqContent);
console.log('Fixed equipment tracker weight');
