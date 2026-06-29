const fs = require('fs');

// VitalsWidget.tsx fixes
let vwPath = 'src/components/VitalsWidget.tsx';
let vw = fs.readFileSync(vwPath, 'utf8');

// Replace dark theme rgba values with colors variables
vw = vw.replace(/'rgba\(30,\s*41,\s*59,\s*[0-9.]+\)'/g, 'colors.surface');
vw = vw.replace(/'rgba\(15,\s*23,\s*42,\s*[0-9.]+\)'/g, 'colors.surfaceSecondary');
vw = vw.replace(/'rgba\(51,\s*65,\s*85,\s*[0-9.]+\)'/g, 'colors.surfaceHighlight');
vw = vw.replace(/'rgba\(245,\s*158,\s*11,\s*[0-9.]+\)'/g, 'colors.accentAmberBg');
vw = vw.replace(/'rgba\(16,\s*185,\s*129,\s*[0-9.]+\)'/g, 'colors.accentEmeraldBg');
vw = vw.replace(/'rgba\(239,\s*68,\s*68,\s*[0-9.]+\)'/g, 'colors.accentRedBg');
vw = vw.replace(/'rgba\(167,\s*139,\s*250,\s*[0-9.]+\)'/g, 'colors.accentVioletBg');
vw = vw.replace(/'rgba\(56,\s*189,\s*248,\s*[0-9.]+\)'/g, 'colors.accentSkyBg');
vw = vw.replace(/'rgba\(148,\s*163,\s*184,\s*[0-9.]+\)'/g, 'colors.textMuted');

// Translate skills mapping
const searchSkills = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Athletics'],
  dex: ['Acrobatics', 'Sleight', 'Stealth'],
  con: [],
  int: ['Arcana', 'History', 'Investig.', 'Nature', 'Religiãon'],
  wis: ['Animal H.', 'Insight', 'Medicine', 'Perception', 'Survival'],
  cha: ['Deception', 'Intimid.', 'Perform.', 'Persuasion'],
};`;

const replaceSkills = `export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Atletismo'],
  dex: ['Acrobacia', 'Furtividade', 'Prestidigitação'],
  con: [],
  int: ['Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião'],
  wis: ['Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência'],
  cha: ['Atuação', 'Enganação', 'Intimidação', 'Persuasão'],
};`;

vw = vw.replace(searchSkills, replaceSkills);

// Re-apply highlighted skill colors
vw = vw.replace(/columnSkillItemProficient: \{\s*borderColor: colors\.accentAmberBg,\s*backgroundColor: colors\.accentAmberBg,\s*\}/g, 
  `columnSkillItemProficient: {\n    borderColor: colors.accentAmber,\n    backgroundColor: colors.accentAmberBg,\n  }`);

vw = vw.replace(/columnSkillNameProficient: \{\s*color: '#E2E8F0',\s*fontWeight: '800',\s*\}/g,
  `columnSkillNameProficient: {\n    color: colors.textMain,\n    fontWeight: '800',\n  }`);

// Re-apply weight box border
vw = vw.replace(/borderColor: isOverweight \? colors\.accentRed : 'rgba\(255, 255, 255, 0\.1\)'/g, "borderColor: isOverweight ? colors.accentRed : colors.border");

// Fix getSvgIcon to use textMain for colors instead of textMuted
vw = vw.replace(/const color = colors\.textMuted;/g, "const color = colors.textMain;");

// Update ammoCount color in VitalsWidget
vw = vw.replace(/ammoCount: \{\s*color: '#E2E8F0',/g, "ammoCount: {\n    color: colors.textMain,");
vw = vw.replace(/borderColor: colors\.surfaceHighlight,\s*borderWidth: 1,\s*borderRadius: 16,\s*paddingHorizontal: 8,\s*paddingVertical: 4,\s*marginTop: 2,\s*alignSelf: 'flex-end',/g, 
  "borderColor: colors.border,\n    borderWidth: 1,\n    borderRadius: 16,\n    paddingHorizontal: 8,\n    paddingVertical: 4,\n    marginTop: 2,\n    alignSelf: 'flex-end',");

// ArrowIcon also must use textMain, wait it already uses colors.textMain (fill={colors.textMain})
// But we want it to work without fill, we will just use color={colors.textMain}
vw = vw.replace(/<ArrowIcon width=\{14\} height=\{14\} fill=\{colors.textMain\} \/>/g, "<ArrowIcon width={14} height={14} color={colors.textMain} />");

fs.writeFileSync(vwPath, vw);
console.log('Fixed VitalsWidget.tsx');
