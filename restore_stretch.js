const fs = require('fs');
let v = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

v = v.replace(
  /container: \{\s*width: '100%',\s*marginBottom: 16,\s*\}/,
  "container: {\n      width: '100%',\n      marginBottom: 16,\n      flex: 1,\n    }"
);

v = v.replace(
  /modelContainerFull: \{\s*width: '100%',\s*marginTop: 2,\s*marginBottom: 6,\s*\}/,
  "modelContainerFull: {\n      width: '100%',\n      marginTop: 2,\n      marginBottom: 6,\n      flex: 1,\n    }"
);

v = v.replace(
  /modelPlaceholder: \{\s*borderWidth: 1,\s*borderStyle: 'dashed',\s*borderColor: 'rgba\(148, 163, 184, 0\.15\)',\s*borderRadius: 12,\s*backgroundColor: colors\.surfaceSecondary,\s*alignItems: 'center',\s*justifyContent: 'center',\s*padding: 8,\s*minHeight: 180,\s*position: 'relative',\s*\}/,
  "modelPlaceholder: {\n      borderWidth: 1,\n      borderStyle: 'dashed',\n      borderColor: 'rgba(148, 163, 184, 0.15)',\n      borderRadius: 12,\n      backgroundColor: colors.surfaceSecondary,\n      alignItems: 'center',\n      justifyContent: 'center',\n      padding: 8,\n      minHeight: 180,\n      flex: 1,\n      position: 'relative',\n    }"
);

fs.writeFileSync('src/components/VitalsWidget.tsx', v);
console.log('Avatar stretch restored');
