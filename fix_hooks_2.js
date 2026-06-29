const fs = require('fs');

// CharacterTab.tsx
let ct = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');

// Remove duplicate useTheme imports (keep one)
ct = ct.replace(/import \{ useTheme \} from '\.\.\/context\/ThemeContext';\r?\n/g, "");
ct = "import { useTheme, ThemeColors } from '../context/ThemeContext';\n" + ct;

// Convert StyleSheet.create to useStyles
ct = ct.replace(/const styles = StyleSheet\.create\(\{/, "const useStyles = (colors: ThemeColors) => StyleSheet.create({");

// Add const styles = useStyles(colors); to CharacterTab
if (!ct.includes('const styles = useStyles(colors);')) {
  ct = ct.replace(/const \{ colors \} = useTheme\(\);/, "const { colors } = useTheme();\n  const styles = useStyles(colors);");
}

fs.writeFileSync('src/components/CharacterTab.tsx', ct);

// DashboardScreen.tsx
let ds = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');
ds = ds.replace(/toggleTheme/, "toggleTheme,\n      theme");
fs.writeFileSync('src/screens/DashboardScreen.tsx', ds);

console.log('Fixed final hooks');
