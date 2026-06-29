const fs = require('fs');
const file = 'src/components/VitalsWidget.tsx';
let content = fs.readFileSync(file, 'utf8');

const fullNamesObj = `
export const SKILL_FULL_NAMES: Record<string, string> = {
  'Sleight': 'Prestigidigitação',
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
  'Persuasion': 'Persuasão'
};
`;

if (!content.includes('SKILL_FULL_NAMES')) {
  content = content.replace(
    /export const SKILL_MAPPING:[^}]+\};\n/m,
    match => match + fullNamesObj
  );
}

// Replace skill rendering logic
content = content.replace(
  /const isProficient = proficiencies\.includes\(skill\);/g,
  `const fullName = SKILL_FULL_NAMES[skill] || skill;
                    const isProficient = proficiencies.includes(skill) || proficiencies.includes(fullName);`
);

content = content.replace(
  /<Text style=\{\[\n\s*styles\.columnSkillText,\n\s*isProficient && styles\.columnSkillTextProficient\n\s*\]\}>\{skill\}<\/Text>/g,
  `<Text style={[
                            styles.columnSkillText,
                            isProficient && styles.columnSkillTextProficient
                          ]}>{fullName || skill}</Text>`
);

content = content.replace(
  /<Text style=\{\[\s*styles\.columnSkillText,\s*isProficient && styles\.columnSkillTextProficient\s*\]\}>\{skill\}<\/Text>/g,
  `<Text style={[styles.columnSkillText, isProficient && styles.columnSkillTextProficient]}>{fullName || skill}</Text>`
);

fs.writeFileSync(file, content);
console.log('Skill translations restored');
