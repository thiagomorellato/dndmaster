const fs = require('fs');

let content = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// Complete SKILL_FULL_NAMES dictionary
const searchFullNames = `export const SKILL_FULL_NAMES: Record<string, string> = {
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
};`;

const completeFullNames = `export const SKILL_FULL_NAMES: Record<string, string> = {
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
  'Persuasion': 'Persuasão',
};`;

content = content.replace(searchFullNames, completeFullNames);

// In the quick access view, replace {skill} with {SKILL_FULL_NAMES[skill] || skill}
// Look for this block:
/*
<Text style={[styles.columnSkillName, isProficient && styles.columnSkillNameProficient]} numberOfLines={1}>
  {skill}
</Text>
*/
content = content.replace(/<Text style=\{\[styles\.columnSkillName, isProficient && styles\.columnSkillNameProficient\]\} numberOfLines=\{1\}>\s*\{skill\}\s*<\/Text>/g, 
  `<Text style={[styles.columnSkillName, isProficient && styles.columnSkillNameProficient]} numberOfLines={1}>
    {SKILL_FULL_NAMES[skill] || skill}
  </Text>`);

fs.writeFileSync('src/components/VitalsWidget.tsx', content);
console.log('Fixed translations and quick access view');
