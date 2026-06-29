const fs = require('fs');

let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');

// I will just use a robust regex to clean up all ThemeContext imports and replace them with exactly one at the top.
eq = eq.replace(/import \{.*?\} from '\.\.\/context\/ThemeContext';\n/g, "");
eq = "import { useTheme, ThemeColors } from '../context/ThemeContext';\n" + eq;

// Re-apply the light theme fixes that I lost when I ran git restore
eq = eq.replace(/const \[modalVisible, setModalVisible\] = useState\(false\);/, "const [modalVisible, setModalVisible] = useState(false);\n  const { colors } = useTheme();");
eq = eq.replace(/style=\{\[styles\.weaponName, item\.isEquipped && styles\.weaponNameEquipped\]\}/g, "style={[styles.weaponName, item.isEquipped && styles.weaponNameEquipped, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.itemPropText\}/g, "style={[styles.itemPropText, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.emptyText\}/g, "style={[styles.emptyText, { color: colors.textMain }]}");

fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
vw = vw.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{ colors \} = useTheme\(\);/, 'const { colors } = useTheme();');
fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

console.log('Fixed final dups');
