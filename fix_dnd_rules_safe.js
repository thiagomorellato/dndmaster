const fs = require('fs');
const file = 'src/utils/dndRules.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"name": "Light Crossbow"/g, '"name": "Besta Leve"');
content = content.replace(/"name": "Hand Crossbow"/g, '"name": "Besta de Mão"');
content = content.replace(/"name": "Heavy Crossbow"/g, '"name": "Besta Pesada"');

const arrows = `  {
    "name": "Arrows (20)",
    "dmgDice": "1d4",
    "handedness": "1 Mão",
    "dmgType": "Cortante",
    "properties": [],
    "category": "Simples",
    "rangeType": "Corpo-a-corpo"
  },
`;

const bolts = `  {
    "name": "Crossbow Bolts (20)",
    "dmgDice": "1d4",
    "handedness": "1 Mão",
    "dmgType": "Cortante",
    "properties": [],
    "category": "Simples",
    "rangeType": "Corpo-a-corpo"
  },
`;

const bullets = `  {
    "name": "Sling Bullets (20)",
    "dmgDice": "1d4",
    "handedness": "1 Mão",
    "dmgType": "Cortante",
    "properties": [],
    "category": "Simples",
    "rangeType": "Corpo-a-corpo"
  }
`;

// Try to remove them
if (content.includes('"name": "Arrows (20)"')) {
    // We will just find their positions and remove them by indexing
    const arrIdx = content.indexOf('{"name": "Arrows (20)"');
    // It's formatted differently!
}

// Safer approach: 
// Remove the objects using JSON parsing!
const weaponStart = content.indexOf('export const WEAPON_TEMPLATES: WeaponTemplate[] = [');
const weaponEndStr = '];\\n\\nexport const ARMOR_TEMPLATES';
const weaponEnd = content.indexOf('];', weaponStart);

// Let's just do a regex that matches strictly within curly braces and name
content = content.replace(/\{\s*"name": "Arrows \(20\)"[^}]+\},\s*/g, '');
content = content.replace(/\{\s*"name": "Crossbow Bolts \(20\)"[^}]+\},\s*/g, '');
// For the last one, it might not have a comma
content = content.replace(/\{\s*"name": "Sling Bullets \(20\)"[^}]+\}\s*/g, '');

fs.writeFileSync(file, content);
console.log('Fixed dndRules safely');
