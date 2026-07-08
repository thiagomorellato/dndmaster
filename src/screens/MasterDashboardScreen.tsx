import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  LayoutAnimation,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { useAdventure } from '../context/AdventureContext';
import { AdventureService } from '../services/adventureService';
import { AdventurePlayer } from '../types/adventure';
import { Alert } from '../utils/alert';
import { getCharacterBackground } from './DashboardScreen';
import Svg, { Path } from 'react-native-svg';
import SwordIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/sword-brandish.svg';
import AxeIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/sharp-axe.svg';
import MaceIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/flanged-mace.svg';
import DaggerIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/sacrificial-dagger.svg';
import SpearIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/barbed-spear.svg';
import BowIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/bow-arrow.svg';
import CrossbowIcon from '../../assets/icons/ffffff/transparent/1x1/carl-olsen/crossbow.svg';
import HammerIcon from '../../assets/icons/ffffff/transparent/1x1/delapouite/thor-hammer.svg';
import WizardStaffIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/wizard-staff.svg';
import ArrowIcon from '../../assets/icons/ffffff/transparent/1x1/lorc/arrowhead.svg';

interface MasterDashboardScreenProps {
  onBack: () => void;
}

const getSvgIcon = (name: string, color: string) => {
  const n = name.toLowerCase();
  const size = 12;

  if (n.includes('machado') || n.includes('axe')) return <AxeIcon width={size} height={size} fill={color} />;
  if (n.includes('arco') || n.includes('bow')) return <BowIcon width={size} height={size} fill={color} />;
  if (n.includes('besta') || n.includes('crossbow')) return <CrossbowIcon width={size} height={size} fill={color} />;
  if (n.includes('adaga') || n.includes('dagger')) return <DaggerIcon width={size} height={size} fill={color} />;
  if (n.includes('lança') || n.includes('spear') || n.includes('pike')) return <SpearIcon width={size} height={size} fill={color} />;
  if (n.includes('maça') || n.includes('mace') || n.includes('clava')) return <MaceIcon width={size} height={size} fill={color} />;
  if (n.includes('bastão') || n.includes('staff')) return <WizardStaffIcon width={size} height={size} fill={color} />;
  if (n.includes('martelo') || n.includes('hammer')) return <HammerIcon width={size} height={size} fill={color} />;
  
  return <SwordIcon width={size} height={size} fill={color} />;
};

const renderAmmunitionIcon = (name: string, color: string) => {
  const n = name.toLowerCase();
  const size = 12;
  if (n.includes('agulha') || n.includes('needle')) {
    return (
      <Svg width={size} height={size} viewBox="0 0 64 64">
        <Path fill={color} d=" M 10.22 8.29 C 11.74 7.61 13.03 9.00 14.03 9.94 C 17.67 13.65 21.42 17.24 25.01 20.99 C 26.17 21.92 25.62 23.43 26.10 24.64 C 35.86 34.34 45.59 44.06 55.28 53.83 C 56.85 54.64 54.73 56.85 53.86 55.32 C 44.13 45.59 34.37 35.89 24.67 26.13 C 20.92 26.29 18.97 22.74 16.46 20.53 C 13.88 17.83 11.03 15.38 8.64 12.51 C 7.40 11.03 8.61 8.85 10.22 8.29 M 10.28 10.32 L 10.41 11.63 C 14.63 15.73 18.64 20.04 22.97 24.03 C 23.21 23.80 23.71 23.34 23.96 23.11 C 20.25 18.57 15.65 14.70 11.62 10.39 L 10.28 10.32 Z" />
      </Svg>
    );
  }
  if (n.includes('virote') || n.includes('bolt')) {
    return (
      <Svg width={size} height={size} viewBox="0 0 512 512">
        <Path fill={color} d=" M 45.08 34.13 C 53.38 30.37 63.80 32.28 70.22 38.74 C 95.31 63.81 120.40 88.87 145.46 113.97 C 134.97 124.46 124.50 134.97 113.98 145.43 C 88.90 120.38 63.84 95.31 38.77 70.24 C 33.41 65.08 30.93 57.18 32.44 49.89 C 33.73 42.97 38.62 36.90 45.08 34.13 Z" />
        <Path fill={color} d=" M 125.27 156.75 C 135.77 146.28 146.25 135.79 156.73 125.30 C 163.42 131.95 170.08 138.64 176.76 145.31 C 166.30 155.83 155.81 166.32 145.29 176.79 C 138.63 170.10 131.94 163.43 125.27 156.75 Z" />
        <Path fill={color} d=" M 156.67 188.12 C 167.14 177.62 177.63 167.14 188.13 156.65 C 254.74 223.20 321.31 289.80 387.88 356.39 C 377.43 366.92 366.92 377.40 356.41 387.87 C 289.87 321.25 223.23 254.72 156.67 188.12 Z" />
        <Path fill={color} d=" M 338.07 283.94 C 365.79 283.87 393.50 283.85 421.22 283.69 C 437.15 299.40 452.90 315.29 468.70 331.12 C 440.98 331.24 413.26 331.24 385.54 331.36 C 369.66 315.62 353.89 299.76 338.07 283.94 Z" />
        <Path fill={color} d=" M 283.97 338.07 C 299.78 353.90 315.69 369.64 331.39 385.59 C 331.20 413.29 331.25 440.99 331.13 468.69 C 315.33 452.86 299.46 437.09 283.70 421.22 C 283.86 393.50 283.84 365.79 283.97 338.07 Z" />
      </Svg>
    );
  }
  if (n.includes('funda') || n.includes('bullet') || n.includes('bala') || n.includes('slingshot')) {
    return (
      <Svg width={size} height={size} viewBox="0 0 512 512">
        <Path fill={color} d=" M 234.91 173.85 C 247.87 168.52 262.79 168.31 275.94 173.07 C 293.09 179.15 306.90 193.68 312.12 211.10 C 288.51 214.43 267.12 229.85 256.45 251.17 C 245.76 229.89 224.43 214.37 200.80 211.10 C 205.79 194.39 218.68 180.27 234.91 173.85 Z" />
        <Path fill={color} d=" M 185.36 226.48 C 199.88 225.26 214.83 229.71 226.21 238.83 C 237.46 247.65 245.27 260.75 247.59 274.87 C 250.18 289.50 246.69 305.05 238.30 317.29 C 229.76 329.88 216.14 338.96 201.15 341.73 C 186.59 344.67 170.98 341.51 158.55 333.41 C 145.23 324.83 135.63 310.62 132.89 294.99 C 129.97 279.74 133.69 263.40 142.74 250.81 C 152.48 236.97 168.50 227.85 185.36 226.48 Z" />
        <Path fill={color} d=" M 318.36 226.44 C 332.39 225.38 346.79 229.60 357.94 238.20 C 369.60 247.02 377.75 260.37 380.13 274.80 C 383.03 290.98 378.44 308.26 368.09 321.00 C 359.43 331.83 346.80 339.45 333.12 341.84 C 318.12 344.71 302.07 341.12 289.58 332.38 C 276.78 323.57 267.75 309.47 265.28 294.11 C 262.67 279.21 266.36 263.38 275.11 251.06 C 284.94 236.98 301.23 227.69 318.36 226.44 Z" />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 50 50">
      <Path fill={color} d=" M 38.10 5.24 C 41.06 4.36 44.01 3.35 47.10 3.01 C 46.55 6.03 45.66 8.97 44.76 11.89 C 42.95 11.90 41.15 12.06 39.34 12.06 C 32.85 18.60 26.36 25.13 19.78 31.59 C 19.55 31.17 19.09 30.32 18.86 29.90 C 25.04 23.32 31.61 17.09 37.95 10.66 C 37.94 8.85 38.10 7.05 38.10 5.24 Z" />
      <Path fill={color} d=" M 9.74 31.80 C 11.79 28.92 15.65 30.26 18.62 30.00 C 15.19 33.36 11.85 36.80 8.41 40.13 C 8.91 40.38 9.91 40.87 10.42 41.12 C 13.51 37.82 16.77 34.68 19.98 31.50 C 19.77 34.42 21.04 38.20 18.23 40.24 C 15.52 42.55 13.52 45.87 10.13 47.26 C 10.08 45.29 10.03 43.32 10.05 41.34 C 9.08 42.28 8.16 43.28 7.09 44.09 C 4.42 43.17 7.66 41.18 8.43 40.02 C 6.52 40.02 4.62 39.87 2.71 39.80 C 4.26 36.52 7.40 34.47 9.74 31.80 Z" />
    </Svg>
  );
};

export const MasterDashboardScreen: React.FC<MasterDashboardScreenProps> = ({ onBack }) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { activeAdventure, playersList, closeAdventure } = useAdventure();

  const [selectedPlayer, setSelectedPlayer] = useState<AdventurePlayer | null>(null);
  const [modalTab, setModalTab] = useState<'stats' | 'equipment' | 'spells'>('stats');
  const [gridColumns, setGridColumns] = useState<number>(2);
  const [expandedBadge, setExpandedBadge] = useState<string | null>(null);
  const [restModalVisible, setRestModalVisible] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);

  const handleToggleBadge = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedBadge(prev => prev === id ? null : id);
  };

  const handleMasterLongRest = async () => {
    if (!activeAdventure || playersList.length === 0) {
      Alert.alert('Mesa Vazia', 'Nenhum jogador conectado no momento para receber descanso.');
      return;
    }

    Alert.alert(
      '🌙 Descanso Longo (Mesa Completa)',
      `Deseja conceder um Descanso Longo para todos os ${playersList.length} jogadores? HP, espaços de magia e recursos serão 100% restaurados.`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Aplicar Descanso',
          onPress: async () => {
            setIsResting(true);
            try {
              const now = new Date().toISOString();
              for (const p of playersList) {
                const char = p.fullCharacterData;
                if (!char) continue;

                const restoredHp = { ...char.hp, current: char.hp.max, temp: 0 };
                const restoredSlots = Object.fromEntries(
                  Object.entries(char.resources.spellSlots || {}).map(([k, v]) => [k, { ...v, current: v.max }])
                );
                const restoredResources = (char.resources.customResources || []).map(r => ({ ...r, current: r.max }));

                const updatedFullChar = {
                  ...char,
                  hp: restoredHp,
                  resources: { spellSlots: restoredSlots, customResources: restoredResources },
                };

                const updatedPlayer: AdventurePlayer = {
                  ...p,
                  statusSnapshot: {
                    ...p.statusSnapshot,
                    hp: restoredHp,
                    spellSlots: restoredSlots,
                    customResources: restoredResources,
                    updatedAt: now,
                    lastRestAt: now,
                    lastRestType: 'LONG_REST',
                  },
                  fullCharacterData: updatedFullChar,
                };

                await AdventureService.publishPlayerData(activeAdventure.id, updatedPlayer);
              }
              setRestModalVisible(false);
              Alert.alert('🌙 Descanso Longo Concedido!', `Todos os ${playersList.length} jogadores tiveram seus PVs, magias e recursos restaurados ao máximo.`);
            } catch (err) {
              console.error('Erro ao aplicar Descanso Longo:', err);
              Alert.alert('Erro', 'Ocorreu um erro ao aplicar o descanso.');
            } finally {
              setIsResting(false);
            }
          },
        },
      ]
    );
  };

  const handleMasterShortRest = async () => {
    if (!activeAdventure || playersList.length === 0) {
      Alert.alert('Mesa Vazia', 'Nenhum jogador conectado no momento para receber descanso.');
      return;
    }

    Alert.alert(
      '💤 Descanso Curto (Mesa Completa)',
      `Deseja iniciar um Descanso Curto para todos os ${playersList.length} jogadores? Uma tela aparecerá para cada jogador escolher quantos Dados de Vida deseja rolar ou informar o HP recuperado nos dados físicos.`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Iniciar Descanso Curto',
          onPress: async () => {
            setIsResting(true);
            try {
              const now = new Date().toISOString();
              for (const p of playersList) {
                const char = p.fullCharacterData;
                if (!char) continue;

                const restoredResources = (char.resources.customResources || []).map(r =>
                  r.resetOn === 'short' || r.resetOn === 'shortRest' ? { ...r, current: r.max } : r
                );

                const updatedFullChar = {
                  ...char,
                  resources: { ...char.resources, customResources: restoredResources },
                };

                const updatedPlayer: AdventurePlayer = {
                  ...p,
                  statusSnapshot: {
                    ...p.statusSnapshot,
                    customResources: restoredResources,
                    updatedAt: now,
                    lastRestAt: now,
                    lastRestType: 'SHORT_REST',
                  },
                  fullCharacterData: updatedFullChar,
                };

                await AdventureService.publishPlayerData(activeAdventure.id, updatedPlayer);
              }
              setRestModalVisible(false);
              Alert.alert('💤 Descanso Curto Iniciado!', `Os jogadores foram notificados para rolar ou informar seus Dados de Vida na tela do app.`);
            } catch (err) {
              console.error('Erro ao aplicar Descanso Curto:', err);
              Alert.alert('Erro', 'Ocorreu um erro ao aplicar o descanso curto.');
            } finally {
              setIsResting(false);
            }
          },
        },
      ]
    );
  };

  if (!activeAdventure) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="alert-circle" size={48} color={colors.accentRed} />
        <Text style={styles.emptyTitle}>Sessão Não Encontrada</Text>
        <Text style={styles.emptySub}>Nenhuma aventura ativa conectada no momento.</Text>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backBtnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCloseAdventure = () => {
    Alert.alert(
      'Encerrar Aventura',
      'Tem certeza que deseja encerrar a sessão? Todos os jogadores conectados serão desconectados da sala.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Encerrar',
          style: 'destructive',
          onPress: async () => {
            await closeAdventure();
            onBack();
          },
        },
      ]
    );
  };

  const renderPlayerCard = ({ item }: { item: AdventurePlayer }) => {
    const { hp, ac, conditions, customResources, spellSlots } = item.statusSnapshot;
    const hpPercent = Math.min(100, Math.max(0, (hp.current / (hp.max || 1)) * 100));
    const hpColor = hpPercent > 50 ? colors.accentEmerald : hpPercent > 20 ? colors.accentAmber : colors.accentRed;

    const spellSlotsEntries = Object.entries(spellSlots || {});

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setSelectedPlayer(item);
          setModalTab('stats');
        }}
        style={[
          styles.playerCard,
          gridColumns === 2 && { flex: 1, marginHorizontal: 4, padding: 12, marginBottom: 12 },
          gridColumns === 3 && { flex: 1, marginHorizontal: 2, padding: 8, marginBottom: 8 }
        ]}
      >
        <View style={[StyleSheet.absoluteFill, { borderRadius: 16, overflow: 'hidden' }]} pointerEvents="none">
          <Image
            source={getCharacterBackground(item.characterClass || '', false)}
            style={{ width: '100%', height: '100%', opacity: 0.18 }}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          {(() => {
            const rawClass = item.characterClass || '';
            const cleanClass = rawClass.includes('(') ? rawClass.split('(')[0].trim() : rawClass;
            const subclassStr = item.fullCharacterData?.subclass || (rawClass.includes('(') ? rawClass.split('(')[1].replace(')', '').trim() : '');
            const combatData = item.fullCharacterData?.combat || {};
            const baseAC = combatData.baseArmorClass || ac;
            const hasShieldOfFaith = !!combatData.shieldOfFaithActive;
            const acId = `${item.userId || item.characterId}-ac`;
            const isAcExp = expandedBadge === acId;
            const profBonus = Math.floor(((item.characterLevel || 1) - 1) / 4) + 2;
            const profId = `${item.userId || item.characterId}-prof`;
            const isProfExp = expandedBadge === profId;

            return (
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={[styles.playerName, gridColumns === 3 ? { fontSize: 13 } : gridColumns === 2 ? { fontSize: 15 } : undefined]} numberOfLines={1}>
                    {item.characterName}
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.acBadge,
                      gridColumns === 3 ? { paddingHorizontal: 4, paddingVertical: 1 } : gridColumns === 2 ? { paddingHorizontal: 6, paddingVertical: 2 } : undefined,
                      isAcExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }
                    ]}
                    onPress={() => handleToggleBadge(acId)}
                  >
                    <Ionicons name="shield" size={gridColumns === 3 ? 10 : 12} color={colors.textMain} style={{ marginRight: 2 }} />
                    <Text style={[styles.acText, gridColumns === 3 ? { fontSize: 10 } : gridColumns === 2 ? { fontSize: 11 } : undefined]}>
                      {isAcExp
                        ? (hasShieldOfFaith ? `CA: ${baseAC}+2 (Escudo da Fé)` : ac > baseAC ? `CA: ${baseAC}+${ac - baseAC}` : `CA: ${ac}`)
                        : (hasShieldOfFaith ? `${baseAC}+2` : ac)}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                  <Text style={[styles.playerClass, gridColumns === 3 ? { fontSize: 10 } : gridColumns === 2 ? { fontSize: 11 } : undefined]} numberOfLines={1}>
                    Lvl {item.characterLevel} {cleanClass}
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.acBadge,
                      gridColumns === 3 ? { paddingHorizontal: 4, paddingVertical: 1 } : gridColumns === 2 ? { paddingHorizontal: 6, paddingVertical: 2 } : undefined,
                      isProfExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }
                    ]}
                    onPress={() => handleToggleBadge(profId)}
                  >
                    <Ionicons name="ribbon" size={gridColumns === 3 ? 9 : 11} color={colors.textMain} style={{ marginRight: 2 }} />
                    <Text style={[styles.acText, gridColumns === 3 ? { fontSize: 9 } : gridColumns === 2 ? { fontSize: 10 } : undefined]}>
                      {isProfExp ? `Proficiência: +${profBonus}` : `+${profBonus}`}
                    </Text>
                  </TouchableOpacity>
                </View>
                {!!subclassStr && (
                  <View style={{ marginTop: 2 }}>
                    <Text style={[styles.playerClass, gridColumns === 3 ? { fontSize: 10 } : gridColumns === 2 ? { fontSize: 11 } : undefined]} numberOfLines={1}>
                      {subclassStr}
                    </Text>
                  </View>
                )}
              </>
            );
          })()}
        </View>

        <View style={{ marginBottom: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="heart" size={12} color={hpColor} style={{ marginRight: 4 }} />
              <Text style={{ fontSize: 11, fontWeight: '700', color: colors.textMuted }}>PV</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: '800', color: hpColor }}>
              {(hp.temp ?? 0) > 0 ? hp.current + (hp.temp ?? 0) : hp.current} / {hp.max} {(hp.temp ?? 0) > 0 ? `(+${hp.temp})` : ''}
            </Text>
          </View>
          <View style={[styles.hpBarBg, { height: 6 }]}>
            <View style={[styles.hpBarFill, { width: `${hpPercent}%`, backgroundColor: hpColor, height: 6 }]} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {conditions && conditions.map((cond: string, idx: number) => {
            const bId = `${item.userId || item.characterId}-cond-${idx}`;
            const isExp = expandedBadge === bId;
            return (
              <TouchableOpacity
                key={`c-${idx}`}
                style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                onPress={() => handleToggleBadge(bId)}
              >
                <Ionicons name="flash" size={10} color={colors.textMain} style={{ marginRight: 3 }} />
                <Text style={[styles.conditionText, { color: colors.textMain, fontSize: 11 }]}>{isExp ? `Condição: ${cond}` : cond}</Text>
              </TouchableOpacity>
            );
          })}

          {(() => {
            const combat = item.fullCharacterData?.combat || {};
            const concSpells: string[] = [];
            if (combat.shieldOfFaithActive) concSpells.push('Escudo da Fé');
            if (combat.barkskinActive) concSpells.push('Pele de Árvore');
            if ((combat as any).concentratingSpell) concSpells.push((combat as any).concentratingSpell);
            return concSpells.map((sp: string, idx: number) => {
              const bId = `${item.userId || item.characterId}-conc-${idx}`;
              const isExp = expandedBadge === bId;
              return (
                <TouchableOpacity
                  key={`conc-${idx}`}
                  style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                  onPress={() => handleToggleBadge(bId)}
                >
                  <Ionicons name="eye" size={12} color={colors.textMain} style={isExp ? { marginRight: 4 } : undefined} />
                  {isExp && (
                    <Text style={[styles.conditionText, { color: colors.textMain, fontSize: 11 }]}>
                      Concentrando: {sp}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            });
          })()}

          {(() => {
            const equipment = item.fullCharacterData?.equipment || [];
            const stats = item.fullCharacterData?.baseStats || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
            const equippedWeapons = equipment.filter((i: any) => i.type === 'weapon' && i.equipped);
            const ammunitions = equipment.filter((i: any) => i.type === 'ammunition');

            return (
              <>
                {equippedWeapons.map((w: any, idx: number) => {
                  const props = w.properties || [];
                  const isFinesse = props.some((p: string) => p.toLowerCase().includes('acuidade') || p.toLowerCase().includes('finesse'));
                  const nLow = w.name.toLowerCase();
                  const isRanged = nLow.includes('arco') || nLow.includes('bow') || nLow.includes('besta') || nLow.includes('crossbow') || props.some((p: string) => p.toLowerCase().includes('distância') || p.toLowerCase().includes('ranged'));
                  const strMod = Math.floor((stats.str - 10) / 2);
                  const dexMod = Math.floor((stats.dex - 10) / 2);
                  const mod = isRanged ? dexMod : isFinesse ? Math.max(strMod, dexMod) : strMod;
                  const magicMatch = w.name.match(/\+(\d+)/);
                  const magicBonus = w.magicBonus !== undefined ? Number(w.magicBonus) : (magicMatch ? parseInt(magicMatch[1], 10) : 0);
                  const baseDice = (w.dmgDice || '1d4').replace(/^(\d+d\d+).*/, '$1');
                  const dmgMod = mod + magicBonus;
                  const dmgModStr = dmgMod > 0 ? `+${dmgMod}` : dmgMod < 0 ? `${dmgMod}` : '';
                  const dmgText = `${baseDice}${dmgModStr}`;
                  const bId = `${item.userId || item.characterId}-w-${idx}`;
                  const isExp = expandedBadge === bId;

                  return (
                    <TouchableOpacity
                      key={`w-${idx}`}
                      style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                      onPress={() => handleToggleBadge(bId)}
                    >
                      <View style={{ marginRight: 4 }}>
                        {getSvgIcon(w.name, colors.textMain)}
                      </View>
                      <Text style={[styles.conditionText, { color: colors.textMain, fontWeight: '800', fontSize: 11 }]}>
                        {isExp ? `${w.name}: ${dmgText} ${w.dmgType || ''}`.trim() : dmgText}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
                {ammunitions.map((ammo: any, idx: number) => {
                  const bId = `${item.userId || item.characterId}-a-${idx}`;
                  const isExp = expandedBadge === bId;
                  return (
                    <TouchableOpacity
                      key={`a-${idx}`}
                      style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                      onPress={() => handleToggleBadge(bId)}
                    >
                      <View style={{ marginRight: 4 }}>
                        {renderAmmunitionIcon(ammo.name, colors.textMain)}
                      </View>
                      <Text style={[styles.conditionText, { color: colors.textMain, fontWeight: '800', fontSize: 11 }]}>
                        {isExp ? `${ammo.name}: ${ammo.customResourceMax || 0}` : (ammo.customResourceMax || 0)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            );
          })()}

          {customResources && customResources.map((res: any, idx: number) => {
            const rName = (res.name || '').toLowerCase();
            let iconName: any = 'star';
            if (rName.includes('inspiração') || rName.includes('inspiration') || rName.includes('bardo') || rName.includes('bard')) iconName = 'musical-notes';
            else if (rName.includes('divindade') || rName.includes('divinity') || rName.includes('clérigo') || rName.includes('paladino')) iconName = 'sunny';
            else if (rName.includes('ki') || rName.includes('monge')) iconName = 'flash';
            else if (rName.includes('fúria') || rName.includes('rage') || rName.includes('bárbaro')) iconName = 'bonfire';
            else if (rName.includes('sorcery') || rName.includes('feitiçaria')) iconName = 'sparkles';
            else if (rName.includes('superiority') || rName.includes('superioridade')) iconName = 'shield-checkmark';
            const bId = `${item.userId || item.characterId}-res-${idx}`;
            const isExp = expandedBadge === bId;

            return (
              <TouchableOpacity
                key={`res-${idx}`}
                style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                onPress={() => handleToggleBadge(bId)}
              >
                <Ionicons name={iconName} size={11} color={colors.textMain} style={{ marginRight: 4 }} />
                <Text style={[styles.conditionText, { color: colors.textMain, fontWeight: '800', fontSize: 11 }]}>
                  {isExp ? `${res.name}: ${res.current}/${res.max}` : `${res.current}/${res.max}`}
                </Text>
              </TouchableOpacity>
            );
          })}

          {spellSlotsEntries.map(([lvl, slot]: [string, any], idx: number) => {
            const bId = `${item.userId || item.characterId}-sp-${idx}`;
            const isExp = expandedBadge === bId;
            return (
              <TouchableOpacity
                key={`sp-${idx}`}
                style={[styles.conditionPill, { paddingVertical: 3, paddingHorizontal: 6 }, isExp && { backgroundColor: colors.surfaceHighlight, borderColor: colors.accentAmber }]}
                onPress={() => handleToggleBadge(bId)}
              >
                <Ionicons name="flame" size={10} color={colors.textMain} style={{ marginRight: 3 }} />
                <Text style={[styles.conditionText, { color: colors.textMain, fontWeight: '800', fontSize: 11 }]}>
                  {isExp ? `Magia ${lvl}: ${slot?.current ?? 0}/${slot?.max ?? 0}` : `${slot?.current ?? 0}/${slot?.max ?? 0}`}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, paddingTop: 6, borderTopWidth: 1, borderTopColor: colors.borderHighlight }}>
          <Text style={{ fontSize: 10, color: colors.textMuted }}>
            ⏱️ {new Date(item.statusSnapshot.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="search" size={12} color={colors.textMuted} style={{ marginRight: 3 }} />
            <Text style={{ fontSize: 10, fontWeight: '700', color: colors.textMuted }}>Ficha</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header do Mestre */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backCircle} onPress={onBack}>
          <Ionicons name="arrow-back" size={22} color={colors.textMain} />
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {activeAdventure.name}
          </Text>
          <Text style={styles.headerSub}>Painel de Controle Tático (Mestre)</Text>
        </View>
        <TouchableOpacity style={styles.closeAdvBtn} onPress={handleCloseAdventure}>
          <Ionicons name="power" size={18} color={colors.accentRed} />
        </TouchableOpacity>
      </View>

      {/* Barra de Código da Sala e Ações */}
      <View style={styles.codeBar}>
        <View style={styles.codeBox}>
          <Ionicons name="key" size={14} color={colors.textMain} style={{ marginRight: 6 }} />
          <Text style={styles.codeValue}>{activeAdventure.code}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity
            style={styles.playerCountBadge}
            onPress={() => setRestModalVisible(true)}
          >
            <Ionicons name="moon" size={14} color={colors.textMain} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playerCountBadge}
            onPress={() => setGridColumns(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)}
          >
            <Ionicons name={gridColumns === 3 ? "apps" : gridColumns === 2 ? "grid" : "list"} size={14} color={colors.textMain} style={{ marginRight: 4 }} />
            <Text style={styles.playerCountText}>{gridColumns === 3 ? '3x' : gridColumns === 2 ? '2x' : '1x'}</Text>
          </TouchableOpacity>
          <View style={styles.playerCountBadge}>
            <Ionicons name="people" size={14} color={colors.textMain} style={{ marginRight: 4 }} />
            <Text style={styles.playerCountText}>{playersList.length}</Text>
          </View>
        </View>
      </View>

      {/* Lista de Jogadores via CQRS Read Side */}
      {playersList.length === 0 ? (
        <View style={styles.emptyList}>
          <Ionicons name="radio" size={56} color={colors.textMuted} style={{ marginBottom: 16 }} />
          <Text style={styles.emptyListTitle}>Aguardando Conexões...</Text>
          <Text style={styles.emptyListDesc}>
            Forneça o código <Text style={{ color: colors.accentAmber, fontWeight: '800' }}>{activeAdventure.code}</Text> aos seus jogadores. Quando eles entrarem pelo Lobby, seus cards táticos aparecerão aqui instantaneamente em tempo real.
          </Text>
        </View>
      ) : (
        <FlatList
          key={`grid-${gridColumns}`}
          data={playersList}
          keyExtractor={item => item.userId}
          numColumns={gridColumns}
          renderItem={renderPlayerCard}
          contentContainerStyle={styles.listContent}
        />
      )}

      {/* Modal de Inspeção Completa (Read-Only Snapshot) */}
      <Modal
        visible={!!selectedPlayer}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedPlayer(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedPlayer && (
              <>
                <View style={[StyleSheet.absoluteFill, { borderTopLeftRadius: 24, borderTopRightRadius: 24, overflow: 'hidden' }]} pointerEvents="none">
                  <Image
                    source={getCharacterBackground(selectedPlayer.characterClass || '', false)}
                    style={{ width: '100%', height: '100%', opacity: 0.18 }}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.modalHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.modalTitle}>{selectedPlayer.characterName}</Text>
                    <Text style={styles.modalSub}>
                      Lvl {selectedPlayer.characterLevel} | {selectedPlayer.characterClass}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setSelectedPlayer(null)}>
                    <Ionicons name="close-circle" size={28} color={colors.textMuted} />
                  </TouchableOpacity>
                </View>

                <View style={styles.cqrsNotice}>
                  <Ionicons name="information-circle" size={16} color={colors.accentAmber} style={{ marginRight: 6 }} />
                  <Text style={styles.cqrsText}>
                    Visão Somente Leitura (Snapshot Completo CQRS - Camada 3)
                  </Text>
                </View>

                {/* Tabs do Modal */}
                <View style={styles.modalTabs}>
                  <TouchableOpacity
                    style={[styles.mTab, modalTab === 'stats' && styles.mTabActive]}
                    onPress={() => setModalTab('stats')}
                  >
                    <Text style={[styles.mTabText, modalTab === 'stats' && styles.mTabActiveText]}>Atributos & CA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.mTab, modalTab === 'equipment' && styles.mTabActive]}
                    onPress={() => setModalTab('equipment')}
                  >
                    <Text style={[styles.mTabText, modalTab === 'equipment' && styles.mTabActiveText]}>Equipamento</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.mTab, modalTab === 'spells' && styles.mTabActive]}
                    onPress={() => setModalTab('spells')}
                  >
                    <Text style={[styles.mTabText, modalTab === 'spells' && styles.mTabActiveText]}>Magias</Text>
                  </TouchableOpacity>
                </View>

                {/* Conteúdo do Modal */}
                <ScrollView style={styles.modalBody} contentContainerStyle={{ paddingBottom: 24 }}>
                  {modalTab === 'stats' && (
                    <View>
                      <View style={styles.statsGrid}>
                        {Object.entries(selectedPlayer.fullCharacterData.baseStats).map(([stat, val]: [string, any]) => {
                          const mod = Math.floor((val - 10) / 2);
                          return (
                            <View key={stat} style={styles.statCard}>
                              <Text style={styles.statName}>{stat.toUpperCase()}</Text>
                              <Text style={styles.statVal}>{val}</Text>
                              <Text style={styles.statMod}>{mod >= 0 ? `+${mod}` : mod}</Text>
                            </View>
                          );
                        })}
                      </View>

                      <Text style={[styles.sectionLabel, { marginTop: 16 }]}>Perícias com Proficiência:</Text>
                      <View style={styles.pillsRow}>
                        {selectedPlayer.fullCharacterData.proficiencies.map((prof: string, idx: number) => (
                          <View key={idx} style={styles.profPill}>
                            <Ionicons name="checkmark" size={12} color={colors.accentEmerald} style={{ marginRight: 4 }} />
                            <Text style={styles.profText}>{prof}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}

                  {modalTab === 'equipment' && (
                    <View>
                      <Text style={styles.sectionLabel}>Itens Equipados / Portados:</Text>
                      {selectedPlayer.fullCharacterData.equipment.length === 0 ? (
                        <Text style={styles.emptyText}>Nenhum equipamento listado.</Text>
                      ) : (
                        selectedPlayer.fullCharacterData.equipment.map((item: any, idx: number) => (
                          <View key={idx} style={styles.equipRow}>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.equipName}>
                                {item.name} {item.equipped ? ' (Equipado)' : ''}
                              </Text>
                              <Text style={styles.equipSub}>{item.type.toUpperCase()} | Raro: {item.rarity || 'Comum'}</Text>
                            </View>
                            {item.acBonus ? (
                              <Text style={styles.equipBonus}>+{item.acBonus} CA</Text>
                            ) : item.dmgDice ? (
                              <Text style={styles.equipBonus}>{item.dmgDice}</Text>
                            ) : null}
                          </View>
                        ))
                      )}

                      <Text style={[styles.sectionLabel, { marginTop: 16 }]}>Tesouro / Moedas:</Text>
                      <View style={styles.coinsRow}>
                        <Text style={styles.coinText}>PC: {selectedPlayer.fullCharacterData.coins?.cp || 0}</Text>
                        <Text style={styles.coinText}>PP: {selectedPlayer.fullCharacterData.coins?.sp || 0}</Text>
                        <Text style={styles.coinText}>PO: {selectedPlayer.fullCharacterData.coins?.gp || 0}</Text>
                        <Text style={styles.coinText}>PL: {selectedPlayer.fullCharacterData.coins?.pp || 0}</Text>
                      </View>
                    </View>
                  )}

                  {modalTab === 'spells' && (
                    <View>
                      <Text style={styles.sectionLabel}>Magias Preparadas / Conhecidas:</Text>
                      {selectedPlayer.fullCharacterData.preparedSpells.length === 0 ? (
                        <Text style={styles.emptyText}>Nenhuma magia listada.</Text>
                      ) : (
                        <View style={styles.pillsRow}>
                          {selectedPlayer.fullCharacterData.preparedSpells.map((spell: string, idx: number) => (
                            <View key={idx} style={styles.spellModalPill}>
                              <Ionicons name="sparkles" size={12} color={colors.accentAmber} style={{ marginRight: 6 }} />
                              <Text style={styles.spellModalText}>{spell}</Text>
                            </View>
                          ))}
                        </View>
                      )}
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Modal de Descanso da Mesa (Mestre) */}
      <Modal
        visible={restModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setRestModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: 'auto', maxHeight: 420, padding: 24 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="moon" size={24} color={colors.accentSky} style={{ marginRight: 8 }} />
                <Text style={{ fontSize: 20, fontWeight: '800', color: colors.textMain }}>Descansos da Mesa</Text>
              </View>
              <TouchableOpacity onPress={() => setRestModalVisible(false)}>
                <Ionicons name="close" size={24} color={colors.textMuted} />
              </TouchableOpacity>
            </View>

            <Text style={{ color: colors.textSecondary, fontSize: 13.5, lineHeight: 20, marginBottom: 20 }}>
              Conceda um descanso instantâneo para todos os {playersList.length} jogadores conectados à sala. Os pontos de vida e recursos serão atualizados em tempo real.
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: colors.surfaceSecondary,
                borderWidth: 1,
                borderColor: colors.accentAmber,
                borderRadius: 14,
                padding: 16,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={handleMasterShortRest}
              disabled={isResting}
            >
              <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: colors.accentAmber + '20', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
                <Ionicons name="flash" size={22} color={colors.accentAmber} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: '700' }}>Descanso Curto / Rápido</Text>
                <Text style={{ color: colors.textSecondary, fontSize: 12, marginTop: 2 }}>Abre tela nos jogadores para rolar Dados de Vida ou digitar cura</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: colors.surfaceSecondary,
                borderWidth: 1,
                borderColor: colors.accentSky,
                borderRadius: 14,
                padding: 16,
                marginBottom: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={handleMasterLongRest}
              disabled={isResting}
            >
              <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: colors.accentSky + '20', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
                <Ionicons name="moon" size={22} color={colors.accentSky} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: '700' }}>Descanso Longo</Text>
                <Text style={{ color: colors.textSecondary, fontSize: 12, marginTop: 2 }}>Restaura 100% de PVs, magias e todos os recursos</Text>
              </View>
            </TouchableOpacity>

            {isResting && (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
                <ActivityIndicator color={colors.accentSky} style={{ marginRight: 8 }} />
                <Text style={{ color: colors.textSecondary, fontSize: 13 }}>Sincronizando descanso com a mesa...</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 48,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 16,
    },
    backCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    headerTitle: {
      color: colors.textMain,
      fontSize: 20,
      fontWeight: '900',
    },
    headerSub: {
      color: colors.textMuted,
      fontSize: 12,
      fontWeight: '600',
    },
    closeAdvBtn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.surfaceSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.accentRed,
    },
    codeBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.surface,
      marginHorizontal: 20,
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
      marginBottom: 16,
    },
    codeLabel: {
      color: colors.textSecondary,
      fontSize: 13,
      fontWeight: '700',
      marginRight: 6,
    },
    codeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    codeValue: {
      color: colors.textMain,
      fontWeight: '800',
      fontSize: 13,
      letterSpacing: 1,
    },
    playerCountBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    playerCountText: {
      color: colors.textMain,
      fontSize: 12,
      fontWeight: '800',
    },
    listContent: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    playerCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    avatar: {
      width: 46,
      height: 46,
      borderRadius: 23,
      marginRight: 12,
      borderWidth: 2,
      borderColor: colors.accentAmber,
    },
    avatarPlaceholder: {
      backgroundColor: colors.surfaceSecondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    playerName: {
      color: colors.textMain,
      fontSize: 18,
      fontWeight: '800',
    },
    playerClass: {
      color: colors.textMuted,
      fontSize: 13,
      fontWeight: '600',
    },
    acBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    acText: {
      color: colors.textMain,
      fontSize: 12,
      fontWeight: '800',
    },
    hpSection: {
      marginBottom: 12,
    },
    hpLabel: {
      color: colors.textSecondary,
      fontSize: 12,
      fontWeight: '700',
    },
    hpValue: {
      fontSize: 13,
      fontWeight: '900',
    },
    hpBarBg: {
      height: 10,
      backgroundColor: colors.surfaceSecondary,
      borderRadius: 5,
      overflow: 'hidden',
    },
    hpBarFill: {
      height: '100%',
      borderRadius: 5,
    },
    conditionsSection: {
      marginBottom: 12,
    },
    sectionLabel: {
      color: colors.textSecondary,
      fontSize: 11,
      fontWeight: '700',
      marginBottom: 6,
      textTransform: 'uppercase',
    },
    pillsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    conditionPill: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      borderColor: colors.borderHighlight,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
    },
    conditionText: {
      color: colors.textMain,
      fontSize: 11,
      fontWeight: '700',
    },
    resourcesSection: {
      marginBottom: 12,
    },
    resourcesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    resourceBox: {
      flex: 1,
      minWidth: '45%',
      backgroundColor: colors.surfaceSecondary,
      padding: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    resourceName: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '600',
    },
    resourceVal: {
      color: colors.textMain,
      fontSize: 13,
      fontWeight: '800',
      marginTop: 2,
    },
    spellsSection: {
      marginBottom: 12,
    },
    spellPill: {
      flexDirection: 'row',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: colors.border,
    },
    spellLvl: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '700',
    },
    spellVal: {
      color: colors.accentAmber,
      fontSize: 11,
      fontWeight: '800',
    },
    cardFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 12,
      marginTop: 4,
    },
    timestamp: {
      color: colors.textMuted,
      fontSize: 11,
    },
    inspectBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    inspectText: {
      color: colors.accentAmber,
      fontSize: 12,
      fontWeight: '700',
    },
    emptyList: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      marginTop: 40,
    },
    emptyListTitle: {
      color: colors.textMain,
      fontSize: 18,
      fontWeight: '800',
      marginBottom: 8,
    },
    emptyListDesc: {
      color: colors.textMuted,
      fontSize: 13,
      textAlign: 'center',
      lineHeight: 20,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
    },
    emptyTitle: {
      color: colors.textMain,
      fontSize: 20,
      fontWeight: '800',
      marginTop: 12,
    },
    emptySub: {
      color: colors.textMuted,
      fontSize: 14,
      textAlign: 'center',
      marginVertical: 12,
    },
    backBtn: {
      backgroundColor: colors.surface,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    backBtnText: {
      color: colors.textMain,
      fontWeight: '700',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: colors.overlayBg,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: colors.surface,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      overflow: 'hidden',
      padding: 20,
      maxHeight: '85%',
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    modalTitle: {
      color: colors.textMain,
      fontSize: 22,
      fontWeight: '900',
    },
    modalSub: {
      color: colors.accentAmber,
      fontSize: 14,
      fontWeight: '700',
    },
    cqrsNotice: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 16,
    },
    cqrsText: {
      color: colors.textSecondary,
      fontSize: 12,
      fontWeight: '600',
    },
    modalTabs: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginBottom: 16,
    },
    mTab: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
    },
    mTabActive: {
      borderBottomWidth: 2,
      borderBottomColor: colors.accentAmber,
    },
    mTabText: {
      color: colors.textMuted,
      fontSize: 13,
      fontWeight: '700',
    },
    mTabActiveText: {
      color: colors.accentAmber,
    },
    modalBody: {
      maxHeight: 400,
    },
    statsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    statCard: {
      width: '30%',
      backgroundColor: colors.surfaceSecondary,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    statName: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '800',
    },
    statVal: {
      color: colors.textMain,
      fontSize: 18,
      fontWeight: '900',
      marginVertical: 2,
    },
    statMod: {
      color: colors.accentAmber,
      fontSize: 12,
      fontWeight: '700',
    },
    profPill: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    profText: {
      color: colors.textMain,
      fontSize: 12,
      fontWeight: '600',
    },
    equipRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.surfaceSecondary,
      padding: 12,
      borderRadius: 10,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    equipName: {
      color: colors.textMain,
      fontSize: 14,
      fontWeight: '700',
    },
    equipSub: {
      color: colors.textMuted,
      fontSize: 11,
      marginTop: 2,
    },
    equipBonus: {
      color: colors.accentAmber,
      fontWeight: '800',
      fontSize: 13,
    },
    coinsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.surfaceSecondary,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    coinText: {
      color: colors.accentAmber,
      fontWeight: '800',
      fontSize: 14,
    },
    emptyText: {
      color: colors.textMuted,
      fontSize: 13,
      fontStyle: 'italic',
    },
    spellModalPill: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    spellModalText: {
      color: colors.textMain,
      fontSize: 13,
      fontWeight: '700',
    },
  });
