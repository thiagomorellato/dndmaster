const fs = require('fs');
const filePath = 'src/components/EquipmentTracker.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Match `const styles = ...` followed by `const { colors } = ...` and swap them
content = content.replace(
  /(const\s+styles\s*=\s*React\.useMemo\(\(\)\s*=>\s*createStyles\(colors\),\s*\[colors\]\);\s*\n\s*const\s+\{\s*colors\s*\}\s*=\s*useTheme\(\);)/,
  'const { colors } = useTheme();\n  const styles = React.useMemo(() => createStyles(colors), [colors]);'
);

fs.writeFileSync(filePath, content);
console.log('Fixed variable order in EquipmentTracker');
