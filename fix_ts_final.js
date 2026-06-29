const fs = require('fs');

// --- EquipmentTracker.tsx ---
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
eq = eq.replace(/shadowColor: colors\.shadow/g, "shadowColor: '#000'");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

// --- VitalsWidget.tsx ---
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
vw = vw.replace(/import \{ useTheme \} from '\.\.\/context\/ThemeContext';/, "import { useTheme, ThemeColors } from '../context/ThemeContext';");
vw = vw.replace(/shadowColor: colors\.shadow/g, "shadowColor: '#000'");
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fixed final TS errors');
