const fs = require('fs');
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

// I will run my fix_perfect.js script again but ensure I don't duplicate the import.
// Actually, since I restored EquipmentTracker, it doesn't have the duplicate import or my fixes right now!
// Let me just re-run fix_perfect.js but modified slightly.

if (!eq.includes('import { useTheme }')) {
  eq = eq.replace(/import \{ Ionicons \} from '@expo\/vector-icons';/, "import { Ionicons } from '@expo/vector-icons';\nimport { useTheme, ThemeColors } from '../context/ThemeContext';");
}
if (!eq.includes('const { colors } = useTheme();')) {
  eq = eq.replace(/const \[modalVisible, setModalVisible\] = useState\(false\);/, "const [modalVisible, setModalVisible] = useState(false);\n  const { colors } = useTheme();");
}
eq = eq.replace(/style=\{\[styles\.weaponName, item\.isEquipped && styles\.weaponNameEquipped\]\}/g, "style={[styles.weaponName, item.isEquipped && styles.weaponNameEquipped, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.itemPropText\}/g, "style={[styles.itemPropText, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.emptyText\}/g, "style={[styles.emptyText, { color: colors.textMain }]}");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

console.log('Fixed Eq');
