import { BaseStats } from '../types/character';

// Mapa centralizado de perícias por atributo (PT-BR)
export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Atletismo'],
  dex: ['Acrobacia', 'Furtividade', 'Prestidigitação'],
  con: [],
  int: ['Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião'],
  wis: ['Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência'],
  cha: ['Atuação', 'Enganação', 'Intimidação', 'Persuasão'],
};

// Nomes abreviados → nome completo PT-BR
export const SKILL_FULL_NAMES: Record<string, string> = {
  'Sleight': 'Prestidigitação',
  'Sleight of Hand': 'Prestidigitação',
  'Investig.': 'Investigação',
  'Investigation': 'Investigação',
  'Animal H.': 'Adestrar Animais',
  'Animal Handling': 'Adestrar Animais',
  'Intimid.': 'Intimidação',
  'Intimidation': 'Intimidação',
  'Perform.': 'Atuação',
   'Performance': 'Atuação',
   'Religion': 'Religião',
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
};

// Todos os nomes válidos de perícias (inglês e PT-BR)
export const STANDARD_SKILLS_SET = new Set([
  // PT-BR
  'Atletismo', 'Acrobacia', 'Furtividade', 'Prestidigitação',
  'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião',
  'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência',
  'Enganação', 'Intimidação', 'Atuação', 'Persuasão',
  // Inglês (para compatibilidade)
  'Athletics', 'Acrobatics', 'Stealth', 'Sleight of Hand',
  'Arcana', 'History', 'Investigation', 'Nature', 'Religion',
  'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival',
  'Deception', 'Intimidation', 'Performance', 'Persuasion',
  // Abreviados legados
   'Sleight', 'Investig.', 'Animal H.', 'Intimid.', 'Perform.', 'Religion',

]);

// Lista de perícias para uso em UI (PT-BR)
export const SKILLS_LIST = [
  'Atletismo',
  'Acrobacia', 'Prestidigitação', 'Furtividade',
  'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião',
  'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência',
  'Enganação', 'Intimidação', 'Atuação', 'Persuasão'
];

// Cores por escola de magia
export const SCHOOL_COLORS: Record<string, string> = {
  'Evocação': '#F59E0B',
  'Abjuração': '#38BDF8',
  'Conjuração': '#10B981',
  'Encantamento': '#EC4899',
  'Ilusão': '#A78BFA',
  'Necromancia': '#64748B',
  'Adivinhação': '#60A5FA',
  'Transmutação': '#F97316',
};

// Normaliza nome de perícia para PT-BR
export const normalizeProficiencyName = (name: string): string => {
  return SKILL_FULL_NAMES[name] || name;
};
