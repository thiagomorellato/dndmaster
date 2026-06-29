const fs = require('fs');

const path = 'src/components/VitalsWidget.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add Resources import if not there
if (!content.includes('Resources')) {
  content = content.replace(
    /import \{ CombatConfig, BaseStats, EquipmentItem \} from '\.\.\/types\/character';/,
    "import { CombatConfig, BaseStats, EquipmentItem, Resources } from '../types/character';"
  );
}

// Update VitalsWidgetProps
content = content.replace(
  /onUpdateImageUrl\?: \(url: string\) => void;\n\s*\}/,
  "onUpdateImageUrl?: (url: string) => void;\n  resources?: Resources;\n}"
);

// Update destructuring
content = content.replace(
  /imageUrl,\n\s*onUpdateImageUrl\n\}\) => \{/,
  "imageUrl,\n  onUpdateImageUrl,\n  resources\n}) => {"
);

// Update weight logic
const oldWeightLogic = `  let totalWeight = 0;
  equipment?.forEach(eq => {
    if (eq.weight) totalWeight += eq.weight;
  });`;

const newWeightLogic = `  let totalWeight = 0;
  equipment?.forEach(eq => {
    if (eq.weight) {
      if (eq.customResourceName && resources?.customResources) {
        const res = resources.customResources.find(r => r.name === eq.customResourceName);
        if (res) {
          totalWeight += eq.weight * res.current;
        } else {
          totalWeight += eq.weight * (eq.customResourceMax || 0);
        }
      } else {
        totalWeight += eq.weight;
      }
    }
  });`;

content = content.replace(oldWeightLogic, newWeightLogic);

fs.writeFileSync(path, content);
console.log('VitalsWidget weight logic fixed.');
