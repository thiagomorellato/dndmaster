const fs = require('fs');

let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Use legacy API to satisfy TS
vitals = vitals.replace("import * as FileSystem from 'expo-file-system';", "import * as FileSystem from 'expo-file-system/legacy';");

fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);
console.log('Switched to legacy FileSystem import!');
