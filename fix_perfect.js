const fs = require('fs');

// --- 1. VitalsWidget.tsx ---
let vw = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Add imports
if (!vw.includes('import * as ImagePicker')) {
  vw = vw.replace(/import \{ Ionicons \} from '@expo\/vector-icons';/, "import { Ionicons } from '@expo/vector-icons';\nimport * as ImagePicker from 'expo-image-picker';\nimport { useTheme } from '../context/ThemeContext';");
}

// Inject useTheme inside VitalsWidget component body
vw = vw.replace(/const \[tempImageUrl, setTempImageUrl\] = useState\(''\);/, "const [tempImageUrl, setTempImageUrl] = useState('');\n  const { colors } = useTheme();");

// Fix Image Picker
vw = vw.replace(/const handlePickImage = \(\) => \{[\s\S]*?console\.log\('Pick image clicked'\);\n\s*\};/, `const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        if (asset.base64) {
          onUpdateImageUrl?.(\`data:image/jpeg;base64,\${asset.base64}\`);
        } else {
          onUpdateImageUrl?.(asset.uri);
        }
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };`);

// Fix avatar stretch
vw = vw.replace(/style=\{\[styles\.avatarImage\]\}/, "style={[{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 8 }]}");

// Translate Stats
vw = vw.replace(
  />\{stat\.toUpperCase\(\)\}<\/Text>/g,
  '>{stat === "str" ? "FOR" : stat === "dex" ? "DES" : stat === "con" ? "CON" : stat === "int" ? "INT" : stat === "wis" ? "SAB" : stat === "cha" ? "CAR" : (stat as string).toUpperCase()}</Text>'
);

// Translate Skills Dictionary
vw = vw.replace(/export const SKILL_FULL_NAMES: Record<string, string> = \{[\s\S]*?\};/, `export const SKILL_FULL_NAMES: Record<string, string> = {
  'Sleight': 'Prestidigitação',
  'Investig.': 'Investigação',
  'Animal H.': 'Adestrar Animais',
  'Intimid.': 'Intimidação',
  'Perform.': 'Atuação',
  'Religiãon': 'Religião',
  'Acrobatics': 'Acrobacia',
  'Athletics': 'Atletismo',
  'Stealth': 'Furtividade',
  'Arcana': 'Arcanismo',
  'History': 'História',
  'Nature': 'Natureza',
  'Insight': 'Intuição',
  'Medicine': 'Medicina',
  'Perception': 'Percepção',
  'Survival': 'Sobrevivência',
  'Deception': 'Enganação',
  'Persuasion': 'Persuasão'
};`);

// Render Full Name for skills
vw = vw.replace(/<Text \n\s*style=\{\[styles\.columnSkillName, isProficient && styles\.columnSkillNameProficient\]\}\n\s*numberOfLines=\{1\}\n\s*adjustsFontSizeToFit\n\s*minimumFontScale=\{0\.75\}\n\s*>\n\s*\{skill\}\n\s*<\/Text>/, `<Text 
                          style={[styles.columnSkillName, isProficient && styles.columnSkillNameProficient]}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          minimumFontScale={0.75}
                        >
                          {fullName || skill}
                        </Text>`);

// Fix total weight with quantities
vw = vw.replace(/let totalWeight = 0;\n\s*equipment\?\.forEach\(eq => \{\n\s*if \(eq\.weight\) totalWeight \+= eq\.weight;\n\s*\}\);/, `let totalWeight = 0;
  equipment?.forEach(eq => {
    if (eq.weight) totalWeight += eq.weight * (eq.quantity || 1);
  });`);

// Light Theme inline text colors for VitalsWidget
vw = vw.replace(/<Text style=\{styles\.attributeLabelHorizontal\}>/g, '<Text style={[styles.attributeLabelHorizontal, { color: colors.textMain }]}>');
vw = vw.replace(/<Text style=\{styles\.attributeMãodHorizontal\}>/g, '<Text style={[styles.attributeMãodHorizontal, { color: colors.textMain }]}>');
vw = vw.replace(/<Text style=\{styles\.attributeScoreHorizontal\}>/g, '<Text style={[styles.attributeScoreHorizontal, { color: colors.textMain }]}>');
vw = vw.replace(/<ArrowIcon width=\{14\} height=\{14\} fill="#64748B" \/>/, '<ArrowIcon width={14} height={14} fill={colors.textMain} />');
vw = vw.replace(/<Ionicons name="ellipse" size=\{4\} color=\{isProficient \? '#F59E0B' \: 'rgba\(51, 65, 85, 0\.6\)'\} \/>/g, "<Ionicons name=\"ellipse\" size={4} color={isProficient ? '#F59E0B' : colors.textMuted} />");

fs.writeFileSync('src/components/VitalsWidget.tsx', vw);

// --- 2. DashboardScreen.tsx (Coin Weight fix) ---
let ds = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');
if (!ds.includes('const coinWeight =')) {
  ds = ds.replace(/const totalWeight = \(\n\s*character\.equipment\?\.reduce\(\(sum, item\) => sum \+ \(\(item\.weight \|\| 0\) \* \(item\.quantity \|\| 1\)\), 0\) \|\| 0\n\s*\);/, `const totalWeightBase = (
      character.equipment?.reduce((sum, item) => sum + ((item.weight || 0) * (item.quantity || 1)), 0) || 0
    );
    const coinWeight = ((character.coins?.cp || 0) + (character.coins?.sp || 0) + (character.coins?.ep || 0) + (character.coins?.gp || 0) + (character.coins?.pp || 0)) * 0.02;
    const totalWeight = totalWeightBase + coinWeight;`);
}
fs.writeFileSync('src/screens/DashboardScreen.tsx', ds);

// --- 3. EquipmentTracker.tsx (Light Theme inline styles) ---
let eq = fs.readFileSync('src/components/EquipmentTracker.tsx', 'utf8');
if (!eq.includes('import { useTheme }')) {
  eq = eq.replace(/import \{ Ionicons \} from '@expo\/vector-icons';/, "import { Ionicons } from '@expo/vector-icons';\nimport { useTheme } from '../context/ThemeContext';");
}
if (!eq.includes('const { colors } = useTheme();')) {
  eq = eq.replace(/const \[modalVisible, setModalVisible\] = useState\(false\);/, "const [modalVisible, setModalVisible] = useState(false);\n  const { colors } = useTheme();");
}
// Fix readable white text in Light Theme (replace hardcoded inline styles where applicable)
eq = eq.replace(/style=\{\[styles\.weaponName, item\.isEquipped && styles\.weaponNameEquipped\]\}/g, "style={[styles.weaponName, item.isEquipped && styles.weaponNameEquipped, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.itemPropText\}/g, "style={[styles.itemPropText, { color: colors.textMain }]}");
eq = eq.replace(/style=\{styles\.emptyText\}/g, "style={[styles.emptyText, { color: colors.textMain }]}");
fs.writeFileSync('src/components/EquipmentTracker.tsx', eq);

console.log('Fix script complete');
