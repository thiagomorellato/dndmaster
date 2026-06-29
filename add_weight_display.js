const fs = require('fs');

let eqContent = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

const searchProperties = `                {item.properties && item.properties.length > 0 ? \` | \${item.properties.join(', ')}\` : ''}
              </Text>`;

const replaceProperties = `                {item.properties && item.properties.length > 0 ? \` | \${item.properties.join(', ')}\` : ''}
                {item.weight ? \` | \${item.weight} lb\` : ''}
              </Text>`;

eqContent = eqContent.replace(searchProperties, replaceProperties);
fs.writeFileSync('src/components/EquipmentTracker.tsx', eqContent);
console.log('Added weight to EquipmentTracker');
