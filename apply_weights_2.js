const fs = require('fs');

let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
const searchWeight = /let totalWeight = 0;\s*equipment\?\.forEach\(eq => \{\s*if \(eq\.weight\) totalWeight \+= eq\.weight;\s*\}\);/g;

const replaceWeight = `let totalWeight = 0;
  equipment?.forEach(eq => {
    if (eq.weight) {
      if (eq.type === 'ammunition' && eq.customResourceMax !== undefined) {
        totalWeight += eq.weight * eq.customResourceMax;
      } else {
        totalWeight += eq.weight;
      }
    }
  });`;

vw = vw.replace(searchWeight, replaceWeight);
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fixed weights logic');
