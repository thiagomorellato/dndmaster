import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { CombatConfig, BaseStats } from '../types/character';
import { Ionicons } from '@expo/vector-icons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface VitalsWidgetProps {
  combat: CombatConfig;
  stats: BaseStats;
  proficiencies: string[];
  level: number;
}

const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Athletics'],
  dex: ['Acrobatics', 'Sleight', 'Stealth'],
  con: [],
  int: ['Arcana', 'History', 'Investig.', 'Nature', 'Religion'],
  wis: ['Animal H.', 'Insight', 'Medicine', 'Perception', 'Survival'],
  cha: ['Deception', 'Intimid.', 'Perform.', 'Persuasion'],
};

const SKILL_FULL_NAMES: Record<string, string> = {
  'Sleight': 'Sleight of Hand',
  'Investig.': 'Investigation',
  'Animal H.': 'Animal Handling',
  'Intimid.': 'Intimidation',
  'Perform.': 'Performance',
};

export const VitalsWidget: React.FC<VitalsWidgetProps> = ({
  combat,
  stats,
  proficiencies = [],
  level,
}) => {
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const handleToggleSkills = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSkillsExpanded(prev => !prev);
  };

  const currentAC = combat.baseArmorClass + (combat.shieldOfFaithActive ? 2 : 0);
  const proficiencyBonus = Math.floor((level - 1) / 4) + 2;
  const dexMod = Math.floor((stats.dex - 10) / 2);
  const initiativeStr = dexMod >= 0 ? `+${dexMod}` : `${dexMod}`;
  const hasPerceptionProf = proficiencies.includes('Perception') || proficiencies.includes('Percepção');
  const wisMod = Math.floor((stats.wis - 10) / 2);
  const passivePerception = 10 + wisMod + (hasPerceptionProf ? proficiencyBonus : 0);

  return (
    <View style={styles.container}>
      {/* Horizontal Attributes Grid */}
      <View style={styles.horizontalAttributesRow}>
        {(Object.keys(stats) as Array<keyof BaseStats>).map(stat => {
          const modVal = Math.floor((stats[stat] - 10) / 2);
          const modStr = modVal >= 0 ? `+${modVal}` : `${modVal}`;

          return (
            <TouchableOpacity
              key={stat}
              style={[
                styles.attributeCardHorizontal,
                skillsExpanded && styles.attributeCardHorizontalActive
              ]}
              onPress={handleToggleSkills}
              activeOpacity={0.7}
            >
              <Text style={styles.attributeLabelHorizontal}>{stat.toUpperCase()}</Text>
              <Text style={styles.attributeModHorizontal}>{modStr}</Text>
              <Text style={styles.attributeScoreHorizontal}>{stats[stat]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Interactive Skills Panel (Collapsible drawer displaying all skills grouped by attribute) */}
      {skillsExpanded && (
        <View style={styles.skillsDrawer}>
          <View style={styles.skillsDrawerHeader}>
            <Text style={styles.skillsDrawerTitle}>
              PERÍCIAS POR ATRIBUTO
            </Text>
            <TouchableOpacity onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setSkillsExpanded(false);
            }}>
              <Ionicons name="close-circle" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          <View style={styles.skillsDrawerContent}>
            {(Object.keys(SKILL_MAPPING) as Array<keyof BaseStats>).map(stat => {
              const skills = SKILL_MAPPING[stat];
              if (skills.length === 0) return null;

              return (
                <View key={stat} style={styles.skillGroupContainer}>
                  <Text style={styles.skillGroupTitle}>{stat.toUpperCase()}</Text>
                  <View style={styles.skillsDrawerGrid}>
                    {skills.map(skill => {
                      const fullName = SKILL_FULL_NAMES[skill] || skill;
                      const isProficient = proficiencies.includes(skill) || proficiencies.includes(fullName);
                      const modVal = Math.floor((stats[stat] - 10) / 2);
                      const finalBonus = modVal + (isProficient ? proficiencyBonus : 0);
                      const finalBonusStr = finalBonus >= 0 ? `+${finalBonus}` : `${finalBonus}`;

                      return (
                        <View key={skill} style={styles.drawerSkillItem}>
                          <Ionicons
                            name="ellipse"
                            size={5}
                            color={isProficient ? '#F59E0B' : '#475569'}
                            style={{ marginRight: 4 }}
                          />
                          <Text style={[styles.drawerSkillBonus, isProficient && styles.drawerSkillBonusProficient]}>
                            {finalBonusStr}
                          </Text>
                          <Text style={[styles.drawerSkillName, isProficient && styles.drawerSkillNameProficient]}>
                            {fullName}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}

      {/* Central View (Model placeholder taking 100% width with absolute stats overlay) */}
      <View style={styles.modelContainerFull}>
        <View style={styles.modelPlaceholder}>
          {/* Absolute HUD Badges Overlays */}
          <View style={styles.hudBadgesRow}>
            {/* C.A. */}
            <View style={styles.hudBadge}>
              <Ionicons name="shield" size={12} color={combat.shieldOfFaithActive ? '#60A5FA' : '#94A3B8'} style={{ marginRight: 3 }} />
              <Text style={styles.hudBadgeValue}>{currentAC}</Text>
              <Text style={styles.hudBadgeLabel}>C.A.</Text>
            </View>

            {/* INICIA. */}
            <View style={styles.hudBadge}>
              <Ionicons name="flash" size={12} color="#F59E0B" style={{ marginRight: 3 }} />
              <Text style={styles.hudBadgeValue}>{initiativeStr}</Text>
              <Text style={styles.hudBadgeLabel}>INIC.</Text>
            </View>

            {/* DESLOC. */}
            <View style={styles.hudBadge}>
              <Ionicons name="footsteps" size={12} color="#10B981" style={{ marginRight: 3 }} />
              <Text style={styles.hudBadgeValue}>9m</Text>
              <Text style={styles.hudBadgeLabel}>DESL.</Text>
            </View>

            {/* PERC. PASSIVA */}
            <View style={styles.hudBadge}>
              <Ionicons name="eye" size={12} color="#60A5FA" style={{ marginRight: 3 }} />
              <Text style={styles.hudBadgeValue}>{passivePerception}</Text>
              <Text style={styles.hudBadgeLabel}>PERC. P.</Text>
            </View>

            {/* PROF. */}
            <View style={styles.hudBadge}>
              <Ionicons name="star" size={12} color="#A78BFA" style={{ marginRight: 3 }} />
              <Text style={styles.hudBadgeValue}>+{proficiencyBonus}</Text>
              <Text style={styles.hudBadgeLabel}>PROF.</Text>
            </View>
          </View>

          {combat.shieldOfFaithActive && (
            <View style={styles.buffBadgeFloating}>
              <Ionicons name="sparkles" size={8} color="#60A5FA" style={{ marginRight: 3 }} />
              <Text style={styles.buffTextFloating}>SHIELD OF FAITH</Text>
            </View>
          )}

          {/* Skeleton Placeholder */}
          <Ionicons name="body-outline" size={32} color="rgba(148, 163, 184, 0.25)" />
          <Text style={styles.modelPlaceholderText}>MODELO DE BONECO</Text>
          <Text style={styles.modelPlaceholderSub}>Espaço reservado para visualização do personagem</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  horizontalAttributesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  attributeCardHorizontal: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(51, 65, 85, 0.4)',
    paddingVertical: 6,
    marginHorizontal: 1.5,
    alignItems: 'center',
  },
  attributeCardHorizontalActive: {
    borderColor: '#F59E0B',
    backgroundColor: 'rgba(245, 158, 11, 0.12)',
  },
  attributeLabelHorizontal: {
    color: '#64748B',
    fontSize: 8,
    fontWeight: '800',
  },
  attributeModHorizontal: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '900',
    marginVertical: 1,
  },
  attributeScoreHorizontal: {
    color: '#475569',
    fontSize: 8,
    fontWeight: '700',
    marginTop: -2,
  },
  skillsDrawer: {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(51, 65, 85, 0.5)',
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  skillsDrawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(148, 163, 184, 0.2)',
    paddingBottom: 6,
    marginBottom: 8,
  },
  skillsDrawerTitle: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  skillsDrawerContent: {
    width: '100%',
  },
  skillGroupContainer: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(148, 163, 184, 0.1)',
    paddingBottom: 6,
  },
  skillGroupTitle: {
    color: '#F59E0B',
    fontSize: 9,
    fontWeight: '900',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  skillsDrawerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  drawerSkillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 6,
  },
  drawerSkillBonus: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '800',
    marginRight: 6,
    minWidth: 16,
  },
  drawerSkillBonusProficient: {
    color: '#F59E0B',
  },
  drawerSkillName: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '600',
    flex: 1,
  },
  drawerSkillNameProficient: {
    color: '#E2E8F0',
    fontWeight: '800',
  },
  modelContainerFull: {
    width: '100%',
    marginTop: 2,
    marginBottom: 6,
  },
  modelPlaceholder: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(148, 163, 184, 0.15)',
    borderRadius: 12,
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    minHeight: 180,
    position: 'relative',
  },
  modelPlaceholderText: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  modelPlaceholderSub: {
    color: '#475569',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 4,
  },
  hudBadgesRow: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  hudBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  hudBadgeValue: {
    color: '#F8FAFC',
    fontSize: 10,
    fontWeight: '900',
    marginRight: 2,
  },
  hudBadgeLabel: {
    color: '#94A3B8',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  buffBadgeFloating: {
    position: 'absolute',
    top: 36,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 99, 235, 0.25)',
    borderColor: '#3b82f6',
    borderWidth: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 10,
  },
  buffTextFloating: {
    color: '#60A5FA',
    fontSize: 8,
    fontWeight: '800',
  },
});
