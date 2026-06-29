const fs = require('fs');
const file = 'src/components/VitalsWidget.tsx';

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');

  // Fix detailModalContent background
  content = content.replace(/'rgba\(30, 41, 59, 0\.95\)'/g, 'colors.overlayBg');
  content = content.replace(/'rgba\(56, 189, 248, 0\.3\)'/g, 'colors.borderHighlight');

  // Fix columnSkillItem background
  content = content.replace(/'rgba\(30, 41, 59, 0\.5\)'/g, 'colors.surfaceSecondary');
  content = content.replace(/'rgba\(51, 65, 85, 0\.3\)'/g, 'colors.border');

  // Fix weight border
  content = content.replace(/'rgba\(255, 255, 255, 0\.1\)'/g, 'colors.borderHighlight');

  // Fix text contrast
  content = content.replace(/columnSkillName: \{\s*color: colors\.textMuted/g, 'columnSkillName: {\n    color: colors.textMain');
  content = content.replace(/columnSkillBonus: \{\s*color: colors\.textMuted/g, 'columnSkillBonus: {\n    color: colors.textMain');
  content = content.replace(/columnSkillNameProficient: \{\s*color: colors\.textMain/g, 'columnSkillNameProficient: {\n    color: colors.textMain');

  // Translate SKILL_MAPPING
  const searchMap = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
    str: ['Athletics'],
    dex: ['Acrobatics', 'Sleight', 'Stealth'],
    con: [],
    int: ['Arcana', 'History', 'Investig.', 'Nature', 'Religiǜon'],
    wis: ['Animal H.', 'Insight', 'Medicine', 'Perception', 'Survival'],
    cha: ['Deception', 'Intimid.', 'Perform.', 'Persuasion'],
  };`;
  const replaceMap = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
    str: ['Atletismo'],
    dex: ['Acrobacia', 'Furtividade', 'Prestidigitação'],
    con: [],
    int: ['Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião'],
    wis: ['Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência'],
    cha: ['Atuação', 'Enganação', 'Intimidação', 'Persuasão'],
  };`;
  content = content.replace(searchMap, replaceMap);

  // Translate SKILL_FULL_NAMES
  const searchFull = `export const SKILL_FULL_NAMES: Record<string, string> = {
    'Sleight': 'Sleight of Hand',
    'Investig.': 'Investigation',
    'Religiǜon': 'Religion',
    'Animal H.': 'Animal Handling',
    'Intimid.': 'Intimidation',
    'Perform.': 'Performance',
  };`;
  const replaceFull = `export const SKILL_FULL_NAMES: Record<string, string> = {
    'Acrobacia': 'Acrobacia',
    'Furtividade': 'Furtividade',
    'Prestidigitação': 'Prestidigitação',
    'Arcanismo': 'Arcanismo',
    'História': 'História',
    'Investigação': 'Investigação',
    'Natureza': 'Natureza',
    'Religião': 'Religião',
    'Adestrar Animais': 'Adestrar Animais',
    'Intuição': 'Intuição',
    'Medicina': 'Medicina',
    'Percepção': 'Percepção',
    'Sobrevivência': 'Sobrevivência',
    'Atuação': 'Atuação',
    'Enganação': 'Enganação',
    'Intimidação': 'Intimidação',
    'Persuasão': 'Persuasão',
    'Atletismo': 'Atletismo',
  };`;
  content = content.replace(searchFull, replaceFull);

  // Additionally check if there is an avatar modal in CharacterCreation or Vitals
  content = content.replace(/'#1c1c1e'/g, 'colors.surfaceSecondary');
  content = content.replace(/'#334155'/g, 'colors.borderHighlight');

  fs.writeFileSync(file, content);
  console.log('Fixed dashboard elements');
}
