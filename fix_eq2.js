const fs = require('fs');
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/import \{ useTheme, ThemeColors \} from '\.\.\/context\/ThemeContext';\n/, "");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);
console.log('Fixed Eq');
