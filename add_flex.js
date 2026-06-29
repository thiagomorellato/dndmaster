const fs = require('fs');

// 1. Update DashboardScreen.tsx
let dashboard = fs.readFileSync('src/screens/DashboardScreen.tsx', 'utf8');
const oldScrollContent = `  scrollContent: {
    padding: 16,
    paddingBottom: 160 // Padding for Tab Bar + Sticky Footer height
  },`;
const newScrollContent = `  scrollContent: {
    padding: 16,
    paddingBottom: 160, // Padding for Tab Bar + Sticky Footer height
    flexGrow: 1
  },`;
dashboard = dashboard.replace(oldScrollContent.replace(/\r\n/g, '\n'), newScrollContent); // Try LF
dashboard = dashboard.replace(oldScrollContent, newScrollContent); // Try CRLF directly
fs.writeFileSync('src/screens/DashboardScreen.tsx', dashboard);


// 2. Update VitalsWidget.tsx
let vitals = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');
const oldContainer = `  container: {
    width: '100%',
    marginBottom: 16,
  },`;
const newContainer = `  container: {
    width: '100%',
    marginBottom: 16,
    flex: 1,
  },`;
vitals = vitals.replace(oldContainer.replace(/\r\n/g, '\n'), newContainer);
vitals = vitals.replace(oldContainer, newContainer);
fs.writeFileSync('src/components/VitalsWidget.tsx', vitals);

console.log('Flex properties added successfully!');
