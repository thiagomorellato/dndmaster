const fs = require('fs');
let r = fs.readFileSync('src/components/ResourceTracker.tsx', 'utf8');
r = r.replace(/const \{ colors \} = useTheme\(\);\n\s*const \{\n\s*colors\n\s*\} = useTheme\(\);/, "const { colors } = useTheme();");
fs.writeFileSync('src/components/ResourceTracker.tsx', r);
console.log('Fixed ResourceTracker');
