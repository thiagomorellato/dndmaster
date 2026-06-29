const fs = require('fs');

let rules = fs.readFileSync('src/utils/dndRules.ts', 'utf8');

// Regex to find from the comma before Arrows (20) up to the closing brace of Sling Bullets (20)
// The preceding object is "Rede".
const removeRegex = /,\s*\{\s*"name":\s*"Arrows \(20\)"[\s\S]*?"name":\s*"Sling Bullets \(20\)"[\s\S]*?\}\s*\];/;
const replacement = `\n];`;

rules = rules.replace(removeRegex, replacement);

fs.writeFileSync('src/utils/dndRules.ts', rules);
console.log('Removed ammo from weapons');
