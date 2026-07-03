import { Character, BaseStats, EquipmentItem, HP } from '../types/character';
import { getArmorCategory, getRaceStatBonuses } from '../utils/dndRules';

export class CharacterService {
  /**
   * Calculates the ability modifier for a given score.
   * Formula: floor((score - 10) / 2)
   */
  static getAbilityModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  /**
   * Calculates the proficiency bonus based on character level.
   * Formula: level 1-4: +2, 5-8: +3, 9-12: +4, 13-16: +5, 17-20: +6
   */
  static getProficiencyBonus(level: number): number {
    if (level < 5) return 2;
    if (level < 9) return 3;
    if (level < 13) return 4;
    if (level < 17) return 5;
    return 6;
  }

  /**
   * Applies racial stat bonuses to base stats.
   */
  static calculateFinalStats(baseStats: BaseStats, race: string): BaseStats {
    const racialBonuses = getRaceStatBonuses(race);
    const finalStats = { ...baseStats };
    (Object.keys(racialBonuses) as Array<keyof BaseStats>).forEach(stat => {
      if (racialBonuses[stat]) {
        finalStats[stat] = (finalStats[stat] || 0) + (racialBonuses[stat] || 0);
      }
    });
    return finalStats;
  }

  /**
   * Calculates the base Armor Class (AC) considering equipped items.
   */
  static calculateBaseAC(baseStats: BaseStats, equipment: EquipmentItem[]): number {
    const dexMod = this.getAbilityModifier(baseStats.dex);

    // Find equipped armor
    const equippedArmor = equipment.find(item => item.type === 'armor' && item.equipped);
    let ac = 10 + dexMod;
    if (equippedArmor) {
      const category = getArmorCategory(equippedArmor.name);
      const baseAC = equippedArmor.acBonus || 10;
      if (category === 'heavy') {
        ac = baseAC;
      } else if (category === 'medium') {
        ac = baseAC + Math.min(2, dexMod);
      } else {
        ac = baseAC + dexMod;
      }
    }

    // Add bonuses from other equipped items (shields, rings, etc.)
    equipment.forEach(item => {
      if (item.equipped && item.type !== 'armor' && item.acBonus) {
        ac += item.acBonus;
      }
    });

    return ac;
  }

  /**
   * Calculates the total Armor Class including active effects like Shield of Faith.
   */
  static calculateTotalAC(character: Character): number {
    const baseAC = this.calculateBaseAC(character.baseStats, character.equipment);
    const shieldBonus = character.combat.shieldOfFaithActive ? 2 : 0;
    return baseAC + shieldBonus;
  }

  /**
   * Calculates the Spell Save DC.
   * Formula: 8 + Proficiency Bonus + Spellcasting Ability Modifier
   * Note: This assumes the character has a primary spellcasting ability.
   * For simplicity, we'll use Wisdom as a default if not specified, 
   * but a more robust implementation would check the class.
   */
  static calculateSpellSaveDC(character: Character, spellcastingAbility: keyof BaseStats = 'wis'): number {
    const proficiencyBonus = this.getProficiencyBonus(character.level);
    const abilityMod = this.getAbilityModifier(character.baseStats[spellcastingAbility]);
    return 8 + proficiencyBonus + abilityMod;
  }

  /**
   * Calculates the Spell Attack Bonus.
   * Formula: Proficiency Bonus + Spellcasting Ability Modifier
   */
  static calculateSpellAttackBonus(character: Character, spellcastingAbility: keyof BaseStats = 'wis'): number {
    const proficiencyBonus = this.getProficiencyBonus(character.level);
    const abilityMod = this.getAbilityModifier(character.baseStats[spellcastingAbility]);
    return proficiencyBonus + abilityMod;
  }

  /**
   * Calculates the HP object for a character.
   */
  static calculateHP(hitDie: number, conMod: number, level: number): HP {
    const lvl1Hp = hitDie + conMod;
    const avgHpPerLevel = Math.floor(hitDie / 2) + 1 + conMod;
    const totalMax = lvl1Hp + avgHpPerLevel * (level - 1);
    return {
      current: totalMax,
      max: totalMax,
      temp: 0
    };
  }

  /**
   * Formats a summary of HP and AC.
   */
  static getHpSummary(hpState: HP, acVal: number): string {
    return `HP: ${hpState.current}/${hpState.max}, AC: ${acVal}`;
  }
}
