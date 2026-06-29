const fs = require('fs');

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

// Remove import { useTheme, ThemeColors } from '../context/ThemeContext';
// Keep exactly one at the top.
eq = eq.replace(/import \{ useTheme, ThemeColors \} from '\.\.\/context\/ThemeContext';\n/g, "");
eq = eq.replace(/import \{ useTheme \} from '\.\.\/context\/ThemeContext';\n/g, "");
eq = "import { useTheme, ThemeColors } from '../context/ThemeContext';\n" + eq;

// Replace multiple const { colors } = useTheme(); with exactly one inside the component.
// First remove all of them.
eq = eq.replace(/const \{ colors \} = useTheme\(\);\n\s*/g, "");

// Then add it back right after the component declaration
eq = eq.replace(/export const EquipmentTracker: React\.FC<EquipmentTrackerProps> = \(\{[\s\S]*?\}\) => \{/, (match) => match + "\n  const { colors } = useTheme();");

fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);
console.log('Fixed Eq dups perfectly via script');
