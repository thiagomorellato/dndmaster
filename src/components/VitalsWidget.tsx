import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager, Image, Modal, TextInput, Alert } from 'react-native';
import { CombatConfig, BaseStats, EquipmentItem } from '../types/character';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import * as ImagePicker from 'expo-image-picker';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { isProficientInItem } from '../utils/dndRules';

import SwordIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/sword-brandish.svg';
import AxeIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/sharp-axe.svg';
import MaceIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/flanged-mace.svg';
import DaggerIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/sacrificial-dagger.svg';
import SpearIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/barbed-spear.svg';
import BowIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/bow-arrow.svg';
import CrossbowIcon from '../../assets/icons/ffffff/transparent/1x1/carl-olsen/crossbow.svg';
import HammerIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/thor-hammer.svg';
import ArrowIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/arrowhead.svg';

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
  equipment?: EquipmentItem[];
  characterClass: string;
  onUpdateProficiencies?: (updatedProficiencies: string[]) => Promise<void>;
  onUpdateEquipment?: (updatedEq: EquipmentItem[]) => void;
  coins?: any;
  imageUrl?: string;
  onUpdateImageUrl?: (url: string) => void;
}

export const SKILL_MAPPING: Record<keyof BaseStats, string[]> = {
  str: ['Athletics'],
  dex: ['Acrobatics', 'Sleight', 'Stealth'],
  con: [],
  int: ['Arcana', 'History', 'Investig.', 'Nature', 'Religiãon'],
  wis: ['Animal H.', 'Insight', 'Medicine', 'Perception', 'Survival'],
  cha: ['Deception', 'Intimid.', 'Perform.', 'Persuasion'],
};

export const SKILL_FULL_NAMES: Record<string, string> = {
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
  'Persuasion': 'Persuasão'
};

export const STANDARD_SKILLS_SET = new Set([
  'Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth',
  'Arcana', 'History', 'Investigation', 'Nature', 'Religiãon',
  'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival',
  'Deception', 'Intimidation', 'Performance', 'Persuasion',
  'Atletismo', 'Acrobacia', 'Furtividade', 'Prestidigitação',
  'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião',
  'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência',
  'Enganação', 'Intimidação', 'Atuação', 'Persuasão',
  'Acrobatics', 'Sleight', 'Arcana', 'History', 'Investig.', 'Nature', 'Religiãon',
  'Animal H.', 'Insight', 'Medicine', 'Perception', 'Survival',
  'Deception', 'Intimid.', 'Perform.', 'Persuasion'
]);

export const getClassProficienciesSummary = (characterClass: string) => {
  const normalized = characterClass.trim().toLowerCase();
  
  let armors = "Nenhuma";
  let weapons = "Nenhuma";
  let savingThrows = "Nenhuma";
  let tools = [] as string[];

  if (normalized.includes('paladin') || normalized.includes('paladino') ||
      normalized.includes('fighter') || normalized.includes('guerreiro')) {
    armors = "Leves, Médias, Pesadas, Escudos";
    weapons = "Armas Simples, Armas Marciais";
    savingThrows = (normalized.includes('paladin') || normalized.includes('paladino')) ? "Sabedoria, Carisma" : "Força, Constituição";
  } else if (normalized.includes('barbarian') || normalized.includes('bárbaro')) {
    armors = "Leves, Médias, Escudos";
    weapons = "Armas Simples, Armas Marciais";
    savingThrows = "Força, Constituição";
  } else if (normalized.includes('ranger') || normalized.includes('patrulheiro')) {
    armors = "Leves, Médias, Escudos";
    weapons = "Armas Simples, Armas Marciais";
    savingThrows = "Força, Destreza";
  } else if (normalized.includes('rogue') || normalized.includes('ladino')) {
    armors = "Leves";
    weapons = "Armas Simples, Besta de Mão, Rapieira, Espada Curta, Espada Longa";
    savingThrows = "Destreza, Inteligência";
    tools.push("Ferramentas de Ladrão");
  } else if (normalized.includes('bard') || normalized.includes('bardo')) {
    armors = "Leves";
    weapons = "Armas Simples, Besta de Mão, Rapieira, Espada Curta, Espada Longa";
    savingThrows = "Destreza, Carisma";
    tools.push("3 Instrumentos Musicais");
  } else if (normalized.includes('cleric') || normalized.includes('clérigo')) {
    const isWarOrLife = normalized.includes('guerra') || normalized.includes('vida') || normalized.includes('tempestade');
    armors = isWarOrLife ? "Leves, Médias, Pesadas, Escudos" : "Leves, Médias, Escudos";
    weapons = (normalized.includes('guerra') || normalized.includes('tempestade')) ? "Armas Simples, Armas Marciais" : "Armas Simples";
    savingThrows = "Sabedoria, Carisma";
    savingThrows = "Sabedoria, Carisma";
  } else if (normalized.includes('druid') || normalized.includes('druida')) {
    armors = "Leves, Médias (não-metálicas), Escudos";
    weapons = "Adaga, Dardo, Clava, Maça, Foice, Cimitarra, Lança, Funda, Bordão";
    savingThrows = "Inteligência, Sabedoria";
    tools.push("Kit de Herbalismo");
  } else if (normalized.includes('monk') || normalized.includes('monge')) {
    armors = "Nenhuma";
    weapons = "Armas Simples, Espada Curta";
    savingThrows = "Força, Destreza";
  } else if (normalized.includes('wizard') || normalized.includes('mago') ||
             normalized.includes('sorcerer') || normalized.includes('feiticeiro')) {
    armors = "Nenhuma";
    weapons = "Adaga, Dardo, Funda, Bordão, Besta Leve";
    savingThrows = (normalized.includes('sorcerer') || normalized.includes('feiticeiro')) ? "Constituição, Carisma" : "Inteligência, Sabedoria";
    savingThrows = (normalized.includes('sorcerer') || normalized.includes('feiticeiro')) ? "Constituição, Carisma" : "Inteligência, Sabedoria";
  } else if (normalized.includes('warlock') || normalized.includes('bruxo')) {
    armors = "Leves";
    weapons = "Armas Simples";
    savingThrows = "Sabedoria, Carisma";
  } else if (normalized.includes('artificer') || normalized.includes('artífice')) {
    armors = "Leves, Médias, Escudos";
    weapons = "Armas Simples";
    savingThrows = "Constituição, Inteligência";
    tools.push("Ferramentas de Ladrão", "Ferramentas de Inventor");
  }

  return { armors, weapons, savingThrows, tools };
};

const WeaponCard = ({
  item,
  atkBonusStr,
  currentDmg,
  rangeText,
  getSvgIcon,
  styles
}: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
      }}
      style={styles.weaponHudCardCompact}
    >
      <View style={styles.weaponHudHeader}>
        <View style={styles.weaponIconWrapper}>
          {getSvgIcon(item.name)}
        </View>
        <Text style={styles.weaponAtkCompact}>{atkBonusStr}</Text>
        <Text style={styles.weaponDmgCompact}>{currentDmg}</Text>
      </View>
      
      {expanded && (
        <View style={styles.weaponHudExpanded}>
          <Text style={styles.weaponNameCompact} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.weaponRangeCompact}>Alcance: {rangeText}</Text>
          {item.properties && item.properties.length > 0 && (
            <Text style={styles.weaponPropsCompact}>{item.properties.jáoin(', ')}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export const VitalsWidget: React.FC<VitalsWidgetProps> = ({
  combat,
  stats,
  proficiencies = [],
  level,
  equipment = [],
  characterClass,
  onUpdateProficiencies,
  onUpdateEquipment,
  coins,
  imageUrl,
  onUpdateImageUrl
}) => {
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [newProfText, setNewProfText] = useState('');
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState('');
  const { colors } = useTheme();
  const styles = useStyles(colors);


  let totalWeight = 0;
  equipment?.forEach(eq => {
    if (eq.weight) totalWeight += eq.weight;
  });
  const coinsWeight = coins ? ((coins.cp || 0) + (coins.sp || 0) + (coins.ep || 0) + (coins.gp || 0) + (coins.pp || 0)) / 50 : 0;
  totalWeight += coinsWeight;
  const maxWeight = stats.str * 15;
  const isOverweight = totalWeight > maxWeight;

  const classDefaults = getClassProficienciesSummary(characterClass);
  const handleToggleVitals = () => {};
  const handleShowDetail = (detail: string) => setActiveDetail(detail);

  const handleAddProficiency = () => {
    const trimmed = newProfText.trim();
    if (!trimmed) return;
    if (proficiencies.includes(trimmed)) {
      Alert.alert('Aviso', 'Esta proficiência jáá existe!');
      return;
    }
    const nextProfs = [...proficiencies, trimmed];
    onUpdateProficiencies?.(nextProfs);
    setNewProfText('');
  };

  const handleRemoveCustomProficiency = (prof: string) => {
    const nextProfs = proficiencies.filter(p => p !== prof);
    onUpdateProficiencies?.(nextProfs);
  };

  const handleToggleSkills = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSkillsExpanded(prev => !prev);
  };

  const getSvgIcon = (name: string) => {
    const n = name.toLowerCase();
    const size = 16;
    const color = colors.textMain;

    if (n.includes('machado') || n.includes('axe')) return <AxeIcon width={size} height={size} fill={color} />;
    if (n.includes('arco') || n.includes('bow')) return <BowIcon width={size} height={size} fill={color} />;
    if (n.includes('besta') || n.includes('crossbow')) return <CrossbowIcon width={size} height={size} fill={color} />;
    if (n.includes('adaga') || n.includes('dagger')) return <DaggerIcon width={size} height={size} fill={color} />;
    if (n.includes('lança') || n.includes('spear') || n.includes('pike')) return <SpearIcon width={size} height={size} fill={color} />;
    if (n.includes('maça') || n.includes('mace') || n.includes('clava')) return <MaceIcon width={size} height={size} fill={color} />;
    if (n.includes('martelo') || n.includes('hammer')) return <HammerIcon width={size} height={size} fill={color} />;
    
    return <SwordIcon width={size} height={size} fill={color} />;
  };

  const currentAC = combat.baseArmorClass + (combat.shieldOfFaithActive ? 2 : 0);
  const proficiencyBonus = Math.floor((level - 1) / 4) + 2;
  const dexMãod = Math.floor((stats.dex - 10) / 2);
  const initiativeStr = dexMãod >= 0 ? `+${dexMãod}` : `${dexMãod}`;
  const hasPerceptionProf = proficiencies.includes('Perception') || proficiencies.includes('Percepção');
  const wisMãod = Math.floor((stats.wis - 10) / 2);
  const passivePerception = 10 + wisMãod + (hasPerceptionProf ? proficiencyBonus : 0);

  const acDisplay = combat.shieldOfFaithActive 
    ? `${combat.baseArmorClass}+2` 
    : `${combat.baseArmorClass}`;

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
              <Text style={styles.attributeLabelHorizontal}>{stat === "str" ? "FOR" : stat === "dex" ? "DES" : stat === "con" ? "CON" : stat === "int" ? "INT" : stat === "wis" ? "SAB" : stat === "cha" ? "CAR" : (stat as string).toUpperCase()}</Text>
              <Text style={[styles.attributeMãodHorizontal, { color: colors.textMain }]}>{modStr}</Text>
              <Text style={styles.attributeScoreHorizontal}>{stats[stat]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 6-Column Collapsible Skills Grid directly under stats */}
      {skillsExpanded && (
        <>
          <View style={styles.skillsColumnsRow}>
            {(Object.keys(stats) as Array<keyof BaseStats>).map(stat => {
              const skills = SKILL_MAPPING[stat];

              return (
                <View key={stat} style={styles.skillsColumn}>
                  {skills.map(skill => {
                    const fullName = SKILL_FULL_NAMES[skill] || skill;
                    const isProficient = proficiencies.includes(skill) || proficiencies.includes(fullName);
                    const modVal = Math.floor((stats[stat] - 10) / 2);
                    const finalBonus = modVal + (isProficient ? proficiencyBonus : 0);
                    const finalBonusStr = finalBonus >= 0 ? `+${finalBonus}` : `${finalBonus}`;

                    return (
                      <View 
                        key={skill} 
                        style={[
                          styles.columnSkillItem,
                          isProficient && styles.columnSkillItemProficient
                        ]}
                      >
                        <View style={{ marginRight: 4, justifyContent: 'center' }}>
                          <Ionicons name="ellipse" size={4} color={isProficient ? colors.accentAmber : colors.textMuted} />
                        </View>
                        <Text 
                          style={[styles.columnSkillName, isProficient && styles.columnSkillNameProficient]}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          minimumFontScale={0.75}
                        >
                          {skill}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>

          {/* Other Proficiencies Section */}
          {(() => {
            const classDefaults = getClassProficienciesSummary(characterClass);
            const customProficiencies = proficiencies.filter(p => !STANDARD_SKILLS_SET.has(p));
            const allTools = [...classDefaults.tools, ...customProficiencies];

            return (
              <View style={styles.otherProfsContainer}>
                <View style={styles.proficienciesDivider} />
                <Text style={styles.otherProfsTitle}>Outras Proficiências & Treinamentos</Text>
                
                <View style={styles.otherProfsCard}>
                  {/* Armor row */}
                  <View style={styles.otherProfRow}>
                    <View style={styles.otherProfRowLeft}>
                      <Ionicons name="shield-half-outline" size={13} color="#60A5FA" style={{ marginRight: 6 }} />
                      <Text style={styles.otherProfLabel}>Armaduras & Escudos:</Text>
                    </View>
                    <Text style={styles.otherProfValue}>{classDefaults.armors}</Text>
                  </View>
                  
                                    {/* Weapons row */}
                  <View style={styles.otherProfRow}>
                    <View style={styles.otherProfRowLeft}>
                      <Ionicons name="cut-outline" size={13} color={colors.accentSky} style={{ marginRight: 6 }} />
                      <Text style={styles.otherProfLabel}>Armas:</Text>
                    </View>
                    <Text style={styles.otherProfValue}>{classDefaults.weapons}</Text>
                  </View>
                  
                  {/* Saving Throws row */}
                  <View style={styles.otherProfRow}>
                    <View style={styles.otherProfRowLeft}>
                      <Ionicons name="body-outline" size={13} color={colors.accentRed} style={{ marginRight: 6 }} />
                      <Text style={styles.otherProfLabel}>Salvaguardas:</Text>
                    </View>
                    <Text style={styles.otherProfValue}>{classDefaults.savingThrows}</Text>
                  </View>
                  
                  {/* Tools row */}
                  <View style={[styles.otherProfRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                    <View style={styles.otherProfRowLeft}>
                      <Ionicons name="hammer-outline" size={13} color={colors.accentEmerald} style={{ marginRight: 6 }} />
                      <Text style={styles.otherProfLabel}>Ferramentas & Idiomas:</Text>
                    </View>
                    <View style={styles.toolsBadgesContainer}>
                      {allTools.length === 0 ? (
                        <Text style={styles.otherProfValueEmpty}>Nenhum treinamento listado</Text>
                      ) : (
                        allTools.map((prof, index) => {
                          const isCustom = customProficiencies.includes(prof);
                          return (
                            <View key={prof + '-' + index} style={[styles.toolBadge, isCustom && styles.toolBadgeCustom]}>
                              <Text style={[styles.toolBadgeText, isCustom && styles.toolBadgeTextCustom]}>{prof}</Text>
                              {isCustom && onUpdateProficiencies && (
                                <TouchableOpacity 
                                  onPress={() => handleRemoveCustomProficiency(prof)}
                                  style={styles.toolBadgeDelete}
                                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                                >
                                  <Ionicons name="close-circle" size={11} color={colors.accentRed} style={{ marginLeft: 3 }} />
                                </TouchableOpacity>
                              )}
                            </View>
                          );
                        })
                      )}
                    </View>
                  </View>

                  {/* Add Custom Proficiency Input Row */}
                  {onUpdateProficiencies && (
                    <View style={styles.addProfInputRow}>
                      <TextInput
                        style={styles.addProfInput}
                        placeholder="Adicionar ferramenta, idioma ou outro..."
                        placeholderTextColor="#64748B"
                        value={newProfText}
                        onChangeText={setNewProfText}
                        onSubmitEditing={handleAddProficiency}
                      />
                      <TouchableOpacity style={styles.addProfBtn} onPress={handleAddProficiency} activeOpacity={0.7}>
                        <Ionicons name="add" size={16} color={colors.textMain} />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            );
          })()}
        </>
      )}

      {/* Central View (Mãodel placeholder taking 100% width with absolute stats overlay) */}
      <View style={styles.modelContainerFull}>
        <View style={styles.modelPlaceholder}>
          {imageUrl ? (
            <TouchableOpacity onPress={() => setAvatarModalVisible(true)} activeOpacity={0.8} style={{ width: '100%', height: '100%', borderRadius: 12, overflow: 'hidden' }}>
              <Image source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setAvatarModalVisible(true)} activeOpacity={0.8} style={{ alignItems: 'center' }}>
              <Ionicons name="body-outline" size={32} color={colors.border} />
              <Text style={styles.modelPlaceholderText}>ADICIONAR AVATAR</Text>
              <Text style={styles.modelPlaceholderSub}>Toque para inserir URL da imagem</Text>
            </TouchableOpacity>
          )}

          {/* Avatar URL Modal */}
          <Modal visible={avatarModalVisible} transparent animationType="fade">
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', padding: 20 }}>
              <View style={{ backgroundColor: colors.surface, borderRadius: 12, padding: 20 }}>
                <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: 'bold', marginBottom: 12 }}>URL do Avatar</Text>
                <TextInput
                  style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: 12, color: colors.textMain, marginBottom: 16 }}
                  placeholder="https://..."
                  placeholderTextColor={colors.textMuted}
                  value={tempImageUrl}
                  onChangeText={setTempImageUrl}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setAvatarModalVisible(false)} style={{ padding: 12, marginRight: 8 }}>
                    <Text style={{ color: colors.textMuted }}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => {
                      if (onUpdateImageUrl) onUpdateImageUrl(tempImageUrl);
                      setAvatarModalVisible(false);
                    }} 
                    style={{ padding: 12, backgroundColor: colors.accentAmber, borderRadius: 8 }}
                  >
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {/* Absolute HUD Badges Overlays */}
          <View pointerEvents="box-none" style={styles.hudBadgesRow}>
            <View pointerEvents="box-none" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                          {/* CA and Prof stacked left */}
              <TouchableOpacity onPress={() => handleShowDetail('ca')} activeOpacity={0.7} style={[styles.hudBadge, { marginBottom: 8 }]}>
                <Ionicons name="shield" size={16} color={combat.shieldOfFaithActive ? '#60A5FA' : colors.accentAmber} style={{ marginRight: 6 }} />
                <Text style={styles.hudBadgeValue}>{acDisplay}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleShowDetail('prof')} activeOpacity={0.7} style={styles.hudBadge}>
                <Ionicons name="star" size={16} color={colors.accentSky} style={{ marginRight: 6 }} />
                <Text style={styles.hudBadgeValue}>+{proficiencyBonus}</Text>
              </TouchableOpacity>

            </View>
            
            <View pointerEvents="box-none" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', flex: 1, paddingLeft: 16 }}>
              <TouchableOpacity onPress={() => handleShowDetail('init')} activeOpacity={0.7} style={[styles.hudBadge, { marginBottom: 8, marginLeft: 8 }]}>
                <Ionicons name="flash" size={16} color={colors.accentSky} style={{ marginRight: 6 }} />
                <Text style={styles.hudBadgeValue}>{initiativeStr}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleShowDetail('speed')} activeOpacity={0.7} style={[styles.hudBadge, { marginBottom: 8, marginLeft: 8 }]}>
                <Ionicons name="footsteps" size={16} color={colors.accentEmerald} style={{ marginRight: 6 }} />
                <Text style={styles.hudBadgeValue}>9m</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleShowDetail('perception')} activeOpacity={0.7} style={[styles.hudBadge, { marginBottom: 8, marginLeft: 8 }]}>
                <Ionicons name="eye" size={16} color={colors.accentViolet} style={{ marginRight: 6 }} />
                <Text style={styles.hudBadgeValue}>{passivePerception}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleShowDetail('weight')} activeOpacity={0.7} style={[styles.hudBadge, { marginLeft: 8, borderColor: isOverweight ? colors.accentRed : colors.border }]}>
                <Ionicons name="scale-outline" size={16} color={isOverweight ? colors.accentRed : colors.accentAmber} style={{ marginRight: 6 }} />
                <Text style={[styles.hudBadgeValue, { color: isOverweight ? colors.accentRed : colors.textMain }]}>{totalWeight.toFixed(1)} / {maxWeight} lb</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Vitals Expanded Breakdown */}
          
          {/* Detail Modal */}
          <Modal visible={!!activeDetail} transparent animationType="fade">
            <TouchableOpacity style={styles.modalBackdrop} activeOpacity={1} onPress={() => setActiveDetail(null)}>
              <TouchableOpacity activeOpacity={1} style={styles.detailModalContent}>
                {activeDetail === 'ca' && (
                  <>
                    <Text style={styles.detailModalTitle}>Classe de Armadura</Text>
                    <Text style={styles.detailModalText}>{combat.baseArmorClass} (Base/Equipamentos) {combat.shieldOfFaithActive ? '+ 2 (Escudo da Fé)' : ''}</Text>
                    <Text style={styles.detailModalText}>Total: {currentAC}</Text>
                  </>
                )}
                {activeDetail === 'init' && (
                  <>
                    <Text style={styles.detailModalTitle}>Iniciativa</Text>
                    <Text style={styles.detailModalText}>{dexMãod >= 0 ? `+${dexMãod}` : dexMãod} (Mãodificador de Destreza)</Text>
                  </>
                )}
                {activeDetail === 'speed' && (
                  <>
                    <Text style={styles.detailModalTitle}>Deslocamento</Text>
                    <Text style={styles.detailModalText}>9m (Base)</Text>
                  </>
                )}
                {activeDetail === 'perception' && (
                  <>
                    <Text style={styles.detailModalTitle}>Percepção Passiva</Text>
                    <Text style={styles.detailModalText}>10 + {wisMãod} (Sabedoria) = {passivePerception}</Text>
                  </>
                )}
                {activeDetail === 'weight' && (
                  <>
                    <Text style={styles.detailModalTitle}>Peso do Equipamento</Text>
                    <Text style={styles.detailModalText}>Atual: {totalWeight.toFixed(1)} lb</Text>
                    <Text style={styles.detailModalText}>Máximo: {maxWeight} lb ({stats.str} * 15)</Text>
                    {isOverweight && <Text style={[styles.detailModalText, { color: colors.accentRed, marginTop: 8 }]}>Você está sobrecarregado! Seu deslocamento cai em 3m.</Text>}
                  </>
                )}
                {activeDetail === 'prof' && (
                  <View style={{ width: '100%' }}>
                    <Text style={styles.detailModalTitle}>Proficiências e Treinamentos</Text>
                    <View style={styles.otherProfRow}>
                      <View style={styles.otherProfRowLeft}>
                        <Ionicons name="shield-half-outline" size={13} color="#60A5FA" style={{ marginRight: 6 }} />
                        <Text style={styles.otherProfLabel}>Armaduras & Escudos:</Text>
                      </View>
                      <Text style={styles.otherProfValue}>{classDefaults.armors}</Text>
                    </View>
                    <View style={styles.otherProfRow}>
                      <View style={styles.otherProfRowLeft}>
                        <Ionicons name="cut-outline" size={13} color={colors.accentSky} style={{ marginRight: 6 }} />
                        <Text style={styles.otherProfLabel}>Armas:</Text>
                      </View>
                      <Text style={styles.otherProfValue}>{classDefaults.weapons}</Text>
                    </View>
                    <View style={styles.otherProfRow}>
                      <View style={styles.otherProfRowLeft}>
                        <Ionicons name="body-outline" size={13} color={colors.accentRed} style={{ marginRight: 6 }} />
                        <Text style={styles.otherProfLabel}>Salvaguardas:</Text>
                      </View>
                      <Text style={styles.otherProfValue}>{classDefaults.savingThrows}</Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>



        </View>
      </View>

      {/* Equipped Weapons HUD (Compact, Bottom Right) */}
      <View style={styles.weaponsHudContainer}>
        {(() => {
          const equippedWeapons = equipment.filter(item => item.type === 'weapon' && item.equipped);
          if (equippedWeapons.length === 0) return null;

          return equippedWeapons.map(item => {
            const isProficient = isProficientInItem(characterClass, 'weapon', item.name);
            const properties = item.properties || [];
            const isFinesse = properties.some(p => p.toLowerCase().includes('acuidade') || p.toLowerCase().includes('finesse'));
            
            const nameLower = item.name.toLowerCase();
            const isRanged = nameLower.includes('arco') || nameLower.includes('bow') || nameLower.includes('besta') || nameLower.includes('crossbow') || nameLower.includes('honda') || nameLower.includes('sling') || nameLower.includes('dardo') || nameLower.includes('dart') || properties.some(p => p.toLowerCase().includes('distância') || p.toLowerCase().includes('munição') || p.toLowerCase().includes('ranged'));
            
            const strMãod = Math.floor((stats.str - 10) / 2);
            const dexMãod = Math.floor((stats.dex - 10) / 2);
            
            let mod = strMãod;
            if (isRanged) mod = dexMãod;
            else if (isFinesse) mod = Math.max(strMãod, dexMãod);
            
            let magicBonus = 0;
            const magicMatch = item.name.match(/\+(\d+)/);
            if (magicMatch) magicBonus = parseInt(magicMatch[1], 10);
            
            const atkBonus = mod + (isProficient ? proficiencyBonus : 0) + magicBonus;
            const atkBonusStr = atkBonus >= 0 ? `+${atkBonus}` : `${atkBonus}`;
            
            let baseDice = item.dmgDice || '1d4';
            const diceMatch = baseDice.match(/^(\d+d\d+)/);
            if (diceMatch) baseDice = diceMatch[1];
            
            const dmgMãod = mod + magicBonus;
            const dmgMãodStr = dmgMãod > 0 ? `+${dmgMãod}` : dmgMãod < 0 ? `${dmgMãod}` : '';
            const currentDmg = `${baseDice}${dmgMãodStr}`;
            
            let rangeText = '1.5m';
            const rangeProp = properties.find(p => p.toLowerCase().includes('dist.') || p.toLowerCase().includes('alcance'));
            if (rangeProp) {
              const distMatch = rangeProp.match(/dist\.\s*([^)]+)/i);
              if (distMatch) rangeText = distMatch[1];
              else if (rangeProp.toLowerCase().includes('alcance')) rangeText = '3m';
            }
            
            return (
              <WeaponCard styles={styles} 
                key={item.id}
                item={item}
                atkBonusStr={atkBonusStr}
                currentDmg={currentDmg}
                rangeText={rangeText}
                getSvgIcon={getSvgIcon}
              />
            );
          });
        })()}

        {/* Ammunition Trackers */}
        {(() => {
          const ammos = equipment?.filter(e => e.type === 'ammunition') || [];
          return ammos.map(ammo => (
            <TouchableOpacity 
              key={ammo.id} 
              style={styles.ammoCard}
              onPress={() => {
                console.log('Ammo clicked!', ammo.name, ammo.customResourceMax, !!onUpdateEquipment);
                if (ammo.customResourceMax !== undefined && ammo.customResourceMax > 0 && onUpdateEquipment) {
                  const newEq = equipment.map(e => 
                    e.id === ammo.id 
                      ? { ...e, customResourceMax: (e.customResourceMax || 0) - 1 }
                      : e
                  );
                  console.log('Calling onUpdateEquipment with new max:', (ammo.customResourceMax || 0) - 1);
                  onUpdateEquipment(newEq);
                } else {
                  console.log('Condition failed:', { val: ammo.customResourceMax, fn: !!onUpdateEquipment });
                }
              }}
            >
              <Svg width={14} height={14} viewBox="0 0 512 512"><Path fill={colors.textMain} d="m34.22 19.844-12.407.125.062 30 177.97 177.5c4.98-8.957 12.884-16.088 22.405-20.064L34.22 19.844zm205.436 202.75c-14.946 0-26.844 11.93-26.844 26.875s11.898 26.874 26.844 26.874c14.946 0 26.875-11.93 26.875-26.875 0-14.947-11.928-26.876-26.874-26.876zm150.875 15.75c-15.905 11.413-31.637 18.404-47.467 21.5 29.263 39.57 49.927 71.443 62.28 96 6.804 13.523 11.162 24.788 12.907 34.562 1.745 9.774.876 19.417-5.813 25.906-6.688 6.49-16.216 7.208-26.125 5.532-9.908-1.676-21.394-5.88-35.187-12.438-25.368-12.058-58.377-32.294-99.22-60.906-2.646 16.347-8.904 32.21-19.06 47.53 64.07 43.58 163.496 83.783 246.468 88.783 3.614-85.247-42.328-181.024-88.782-246.47zm-105.655 16.562c-2.375 19.668-17.412 35.58-36.656 39.28 3.07 11 4.776 21.816 5.093 32.44 44.728 31.797 80.314 53.785 105.812 65.905 12.888 6.127 23.263 9.684 30.313 10.876 7.05 1.193 9.577-.12 9.968-.5.392-.38 1.644-2.46.438-9.22-1.207-6.756-4.852-16.84-11.188-29.436-12.4-24.647-34.88-59.106-67.5-102.563-11.922-.288-23.968-2.61-36.28-6.78z" /></Svg>
              <Text style={styles.ammoCount}>{ammo.customResourceMax || 0}</Text>
            </TouchableOpacity>
          ));
        })()}
      </View>
    </View>
  );
};

const useStyles = (colors: ThemeColors) => StyleSheet.create({

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  detailModalContent: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.accentSkyBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  detailModalTitle: {
    color: colors.textMain,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  detailModalText: {
    color: colors.textMuted,
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },

  container: {
    width: '100%',
    marginBottom: 16,
  },
  horizontalAttributesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  attributeCardHorizontal: {
    flex: 1,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.surfaceHighlight,
    paddingVertical: 6,
    marginHorizontal: 1.5,
    alignItems: 'center',
  },
  attributeCardHorizontalActive: {
    borderColor: colors.accentAmber,
    backgroundColor: colors.accentAmberBg,
  },
  attributeLabelHorizontal: {
    color: colors.textMuted,
    fontSize: 8,
    fontWeight: '800',
  },
  attributeMãodHorizontal: {
    color: colors.textMain,
    fontSize: 14,
    fontWeight: '900',
    marginVertical: 1,
  },
  attributeScoreHorizontal: {
    color: colors.textMuted,
    fontSize: 8,
    fontWeight: '700',
    marginTop: -2,
  },
  skillsColumnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  skillsColumn: {
    flex: 1,
    marginHorizontal: 1.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnSkillItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: colors.surfaceHighlight,
    paddingVertical: 3,
    paddingHorizontal: 2,
    marginBottom: 4,
    width: '100%',
  },
  columnSkillItemProficient: {
    borderColor: colors.accentAmber,
    backgroundColor: colors.accentAmberBg,
  },
  columnSkillBonus: {
    color: colors.textMuted,
    fontSize: 9.5,
    fontWeight: '900',
  },
  columnSkillBonusProficient: {
    color: colors.accentAmber,
  },
  columnSkillName: {
    color: colors.textMuted,
    fontSize: 7.5,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 1,
    width: '100%',
    paddingHorizontal: 1,
  },
  columnSkillNameProficient: {
    color: colors.textMain,
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
    borderColor: colors.textMuted,
    borderRadius: 12,
    backgroundColor: colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    minHeight: 180,
    position: 'relative',
  },
  modelPlaceholderText: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: '800',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  modelPlaceholderSub: {
    color: colors.textMuted,
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
    justifyContent: 'center',
    backgroundColor: colors.surfaceSecondary,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: 46,
  },
  hudBadgeValue: {
    color: colors.textMain,
    fontSize: 13,
    fontWeight: '900',
  },
  vitalsExpandedPanel: {
    position: 'absolute',
    top: 48,
    left: 8,
    right: 8,
    backgroundColor: colors.surfaceSecondary,
    borderColor: colors.surfaceHighlight,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    zIndex: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  vitalsPanelTitle: {
    color: colors.textMain,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceHighlight,
    paddingBottom: 4,
  },
  vitalsPanelRow: {
    marginBottom: 6,
  },
  vitalsPanelLabel: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: '700',
  },
  vitalsPanelValue: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
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
  weaponsHudContainer: {
    position: 'absolute',
    bottom: -8,
    right: 4,
    alignItems: 'flex-end',
    zIndex: 20,
    flexDirection: 'column',
  },
  weaponHudCardCompact: {
    flexDirection: 'column',
    backgroundColor: colors.surfaceSecondary, // blending more with dark theme
    borderColor: colors.surfaceHighlight, // subtle border instead of yellow
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    minWidth: 90,
  },
  weaponHudHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weaponIconWrapper: {
    marginRight: 6,
    opacity: 0.9,
  },
  weaponHudExpanded: {
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceHighlight,
  },
  weaponNameCompact: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 2,
  },
  weaponAtkCompact: {
    color: colors.accentEmerald,
    fontSize: 12,
    fontWeight: '900',
    marginRight: 6,
  },
  weaponDmgCompact: {
    color: colors.accentAmber,
    fontSize: 12,
    fontWeight: '800',
  },
  weaponRangeCompact: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: '600',
  },
  weaponPropsCompact: {
    color: colors.textMuted,
    fontSize: 8,
    fontWeight: '500',
    marginTop: 2,
  },
  ammoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSecondary,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 2,
    alignSelf: 'flex-end',
  },
  ammoCount: {
    color: colors.textMain,
    fontSize: 10,
    fontWeight: '800',
    marginLeft: 6,
  },
  otherProfsContainer: {
    marginTop: 12,
    paddingTop: 12,
  },
  proficienciesDivider: {
    height: 1,
    backgroundColor: colors.surfaceHighlight,
    marginBottom: 8,
  },
  otherProfsTitle: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  otherProfsCard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.surfaceHighlight,
    padding: 8,
  },
  otherProfRow: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceHighlight,
    paddingBottom: 6,
    marginBottom: 6,
  },
  otherProfRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  otherProfLabel: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '700',
  },
  otherProfValue: {
    color: colors.textMuted,
    fontSize: 9,
    lineHeight: 14,
  },
  toolsBadgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  otherProfValueEmpty: {
    color: colors.textMuted,
    fontSize: 9,
    fontStyle: 'italic',
  },
  toolBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceHighlight,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
  },
  toolBadgeCustom: {
    backgroundColor: colors.accentEmeraldBg,
    borderColor: colors.accentEmeraldBg,
    borderWidth: 0.5,
  },
  toolBadgeText: {
    color: colors.textSecondary,
    fontSize: 9,
  },
  toolBadgeTextCustom: {
    color: '#34D399',
    fontWeight: '600',
  },
  toolBadgeDelete: {
    padding: 2,
  },
  addProfInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceHighlight,
  },
  addProfInput: {
    flex: 1,
    backgroundColor: colors.surfaceSecondary,
    borderColor: colors.surfaceHighlight,
    borderWidth: 1,
    borderRadius: 6,
    color: colors.textMain,
    fontSize: 10,
    paddingHorizontal: 8,
    height: 32,
  },
  addProfBtn: {
    backgroundColor: colors.accentSky,
    borderRadius: 6,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
});

