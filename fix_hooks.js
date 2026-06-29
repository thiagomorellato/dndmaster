const fs = require('fs');

// CharacterTab.tsx
let ct = fs.readFileSync('src/components/CharacterTab.tsx', 'utf8');
if (!ct.includes('import { useTheme }')) {
  ct = "import { useTheme } from '../context/ThemeContext';\n" + ct;
}
if (!ct.includes('const { colors } = useTheme();')) {
  ct = ct.replace(/const \[newProfText, setNewProfText\] = useState\(''\);/, "const [newProfText, setNewProfText] = useState('');\n    const { colors } = useTheme();");
}
fs.writeFileSync('src/components/CharacterTab.tsx', ct);

// DashboardScreen.tsx
let ds = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');
ds = ds.replace(/const \{\n\s*colors,\n\s*toggleTheme\n\s*\} = useTheme\(\);/, "const {\n      colors,\n      toggleTheme,\n      theme\n    } = useTheme();");
fs.writeFileSync('src/screens/DashboardScreen.tsx', ds);

console.log('Fixed CharacterTab and DashboardScreen');
