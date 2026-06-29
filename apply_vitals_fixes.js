const fs = require('fs');
let content = fs.readFileSync('src/components/VitalsWidget.tsx', 'utf8');

// 1. Fix SKILL_FULL_NAMES
const skillFullNamesRegex = /export const SKILL_FULL_NAMES: Record<string, string> = \{[\s\S]*?'History': 'História',\s*'Nature': 'Natureza',\s*\};/;
const newSkillFullNames = `export const SKILL_FULL_NAMES: Record<string, string> = {
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
content = content.replace(skillFullNamesRegex, newSkillFullNames);

// 2. Fix quick access view (change {skill} to {SKILL_FULL_NAMES[skill] || skill})
const quickAccessRegex = /<Text\s+style=\{\[styles\.columnSkillName,\s*isProficient\s*&&\s*styles\.columnSkillNameProficient\]\}\s+numberOfLines=\{1\}\s+adjustsFontSizeToFit\s+minimumFontScale=\{0\.75\}\s*>\s*\{skill\}\s*<\/Text>/g;
content = content.replace(quickAccessRegex, `<Text 
                          style={[styles.columnSkillName, isProficient && styles.columnSkillNameProficient]}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          minimumFontScale={0.75}
                        >
                          {SKILL_FULL_NAMES[skill] || skill}
                        </Text>`);

// 3. Add Salvaguarda row
const skillsMapRegex = /\{skills\.map\(skill => \{/g;
const hasSavingThrowCode = `
                  <View 
                    style={[
                      styles.columnSkillItem,
                      classDefaults.savingThrows.includes({str:'Força',dex:'Destreza',con:'Constituição',int:'Inteligência',wis:'Sabedoria',cha:'Carisma'}[stat] || '') && styles.columnSkillItemProficient,
                      { marginBottom: 4 }
                    ]}
                  >
                    <View style={{ marginRight: 4, justifyContent: 'center' }}>
                      <Ionicons name="ellipse" size={4} color={classDefaults.savingThrows.includes({str:'Força',dex:'Destreza',con:'Constituição',int:'Inteligência',wis:'Sabedoria',cha:'Carisma'}[stat] || '') ? colors.accentAmber : colors.textMuted} />
                    </View>
                    <Text 
                      style={[styles.columnSkillName, classDefaults.savingThrows.includes({str:'Força',dex:'Destreza',con:'Constituição',int:'Inteligência',wis:'Sabedoria',cha:'Carisma'}[stat] || '') && styles.columnSkillNameProficient]}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      minimumFontScale={0.75}
                    >
                      Salvaguarda
                    </Text>
                  </View>
                  {skills.map(skill => {`;

content = content.replace(skillsMapRegex, hasSavingThrowCode);

fs.writeFileSync('src/components/VitalsWidget.tsx', content);
console.log('Fixed exactly using regex');
