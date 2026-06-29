const fs = require('fs');

const files = [
  'src/components/VitalsWidget.tsx',
  'src/components/EquipmentTracker.tsx',
  'src/components/CharacterTab.tsx',
  'src/components/ResourceTracker.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Fix hardcoded #F8FAFC to colors.textMain for text elements
  content = content.replace(/color:\s*'#F8FAFC'/g, 'color: colors.textMain');
  // Fix inline styles with #F8FAFC
  content = content.replace(/'#F8FAFC'/g, 'colors.textMain');
  
  // Replace hardcoded amber bg and border
  content = content.replace(/'rgba\(245, 158, 11, 0.12\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.05\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.03\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.1\)'/g, 'colors.accentAmberBg');
  content = content.replace(/'rgba\(245, 158, 11, 0.4\)'/g, 'colors.accentAmber');
  content = content.replace(/'rgba\(245, 158, 11, 0.2\)'/g, 'colors.accentAmberBg');

  // Translate stat.toUpperCase() in VitalsWidget.tsx
  if (file.includes('VitalsWidget.tsx')) {
    content = content.replace(
      />\{stat\.toUpperCase\(\)\}<\/Text>/g,
      '>{stat === "str" ? "FOR" : stat === "dex" ? "DES" : stat === "con" ? "CON" : stat === "int" ? "INT" : stat === "wis" ? "SAB" : stat === "cha" ? "CAR" : stat.toUpperCase()}</Text>'
    );
    
    // Fix gray text in columnSkillName
    content = content.replace(/color:\s*'#64748B'/g, 'color: colors.textMuted');
    content = content.replace(/color:\s*'#94A3B8'/g, 'color: colors.textMuted');
    
    // Fix skills mapping which was English -> PT
    const searchSkills = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Athletics'],
  dex: ['Acrobatics', 'Sleight of Hand', 'Stealth'],
  con: [],
  int: ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'],
  wis: ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
  cha: ['Deception', 'Intimidation', 'Performance', 'Persuasion']
};`;
    const replaceSkills = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Atletismo'],
  dex: ['Acrobacia', 'Furtividade', 'Prestidigitação'],
  con: [],
  int: ['Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião'],
  wis: ['Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência'],
  cha: ['Atuação', 'Enganação', 'Intimidação', 'Persuasão']
};`;
    content = content.replace(searchSkills, replaceSkills);
  }

  // Same for CharacterTab.tsx just in case
  content = content.replace(/color:\s*'#64748B'/g, 'color: colors.textMuted');
  content = content.replace(/color:\s*'#94A3B8'/g, 'color: colors.textMuted');

  fs.writeFileSync(file, content);
  console.log('Processed', file);
}
