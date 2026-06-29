const fs = require('fs');
const filePath = 'src/components/EquipmentTracker.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// find the exact block and replace
const search = '}) => {\n  const styles = React.useMemo(() => createStyles(colors), [colors]);\n  const { colors } = useTheme();';
const replace = '}) => {\n  const { colors } = useTheme();\n  const styles = React.useMemo(() => createStyles(colors), [colors]);';

content = content.replace(search, replace);
fs.writeFileSync(filePath, content);
console.log('Fixed variable order');
