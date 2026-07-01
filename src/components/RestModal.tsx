import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { Character, Resources, HP } from '../types/character';
import { getHitDieType } from '../utils/dndRules';

interface RestModalProps {
  visible: boolean;
  character: Character;
  onClose: () => void;
  onShortRest: (hpGained: number, hitDiceUsed: number) => void;
  onLongRest: () => void;
}

export const RestModal: React.FC<RestModalProps> = ({
  visible,
  character,
  onClose,
  onShortRest,
  onLongRest,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const [restType, setRestType] = useState<'choose' | 'short' | 'long'>('choose');
  const [dicesToSpend, setDicesToSpend] = useState(1);

  const hitDiceAvailable = character.hitDice?.current ?? character.level;
  const hitDieType = character.hitDice?.dieType ?? getHitDieType(character.characterClass);
  const conMod = Math.floor((character.baseStats.con - 10) / 2);

  const rollShortRest = () => {
    if (hitDiceAvailable <= 0) {
      Alert.alert('Sem Dados de Vida', 'Você não tem dados de vida disponíveis para gastar.');
      return;
    }
    const actual = Math.min(dicesToSpend, hitDiceAvailable);
    const dieSize = parseInt(hitDieType.replace('d', ''), 10);
    let totalHeal = 0;
    const rolls: number[] = [];
    for (let i = 0; i < actual; i++) {
      const roll = Math.floor(Math.random() * dieSize) + 1;
      rolls.push(roll);
      totalHeal += roll + conMod;
    }
    totalHeal = Math.max(0, totalHeal);
    const maxHeal = character.hp.max - character.hp.current;
    const actualHeal = Math.min(totalHeal, maxHeal);
    Alert.alert(
      '💤 Descanso Curto',
      `Rolou ${actual}x ${hitDieType}: [${rolls.join(', ')}]\n+${conMod} CON cada\nCura total: +${actualHeal} HP`,
      [{ text: 'OK', onPress: () => { onShortRest(actualHeal, actual); onClose(); setRestType('choose'); } }]
    );
  };

  const handleLongRest = () => {
    Alert.alert(
      '🌙 Descanso Longo',
      'Tem certeza? Isso vai restaurar todo o seu HP, spell slots, dados de vida e recursos.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => { onLongRest(); onClose(); setRestType('choose'); } },
      ]
    );
  };

  const resetAndClose = () => {
    setRestType('choose');
    setDicesToSpend(1);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={resetAndClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>💤 DESCANSO</Text>
            <TouchableOpacity onPress={resetAndClose}>
              <Ionicons name="close" size={22} color={colors.textMuted} />
            </TouchableOpacity>
          </View>

          {restType === 'choose' && (
            <View style={styles.chooseContainer}>
              <TouchableOpacity style={[styles.restBtn, styles.shortRestBtn]} onPress={() => setRestType('short')}>
                <Ionicons name="partly-sunny" size={28} color={colors.accentAmber} />
                <Text style={[styles.restBtnTitle, { color: colors.accentAmber }]}>Descanso Curto</Text>
                <Text style={styles.restBtnSub}>1+ hora. Gasta dados de vida para se curar.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.restBtn, styles.longRestBtn]} onPress={() => setRestType('long')}>
                <Ionicons name="moon" size={28} color={colors.accentSky} />
                <Text style={[styles.restBtnTitle, { color: colors.accentSky }]}>Descanso Longo</Text>
                <Text style={styles.restBtnSub}>8 horas. Restaura HP, slots, dados e recursos.</Text>
              </TouchableOpacity>
            </View>
          )}

          {restType === 'short' && (
            <View style={styles.shortRestContainer}>
              <Text style={styles.label}>Dados de vida disponíveis:</Text>
              <Text style={styles.diceInfo}>
                {hitDiceAvailable}/{character.level} ({hitDieType})
              </Text>

              <Text style={[styles.label, { marginTop: 16 }]}>Quantos dados gastar?</Text>
              <View style={styles.diceSelector}>
                <TouchableOpacity
                  style={styles.diceBtn}
                  onPress={() => setDicesToSpend(Math.max(1, dicesToSpend - 1))}
                >
                  <Ionicons name="remove" size={20} color={colors.textMain} />
                </TouchableOpacity>
                <Text style={styles.diceCount}>{dicesToSpend}</Text>
                <TouchableOpacity
                  style={styles.diceBtn}
                  onPress={() => setDicesToSpend(Math.min(hitDiceAvailable, dicesToSpend + 1))}
                >
                  <Ionicons name="add" size={20} color={colors.textMain} />
                </TouchableOpacity>
              </View>

              <Text style={styles.healPreview}>
                Cura estimada: ~{Math.round(
                  dicesToSpend * (parseInt(hitDieType.replace('d', ''), 10) / 2 + 0.5 + conMod)
                )} HP
                {conMod !== 0 ? ` (${conMod > 0 ? '+' : ''}${conMod} CON por dado)` : ''}
              </Text>

              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setRestType('choose')}>
                  <Text style={styles.cancelBtnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.confirmBtn, { backgroundColor: colors.accentAmber }]}
                  onPress={rollShortRest}
                  disabled={hitDiceAvailable <= 0}
                >
                  <Ionicons name="dice" size={16} color="#FFF" style={{ marginRight: 6 }} />
                  <Text style={styles.confirmBtnText}>Rolar e Descansar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {restType === 'long' && (
            <View style={styles.longRestContainer}>
              <Text style={styles.longRestInfo}>Um descanso longo irá restaurar:</Text>
              <View style={styles.longRestList}>
                <Text style={styles.longRestItem}>❤️ HP ao máximo ({character.hp.max})</Text>
                <Text style={styles.longRestItem}>🔮 Todos os espaços de magia</Text>
                <Text style={styles.longRestItem}>🎲 Todos os dados de vida ({character.level}/{character.level})</Text>
                <Text style={styles.longRestItem}>⚡ Todos os recursos de classe</Text>
              </View>
              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setRestType('choose')}>
                  <Text style={styles.cancelBtnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.confirmBtn, { backgroundColor: colors.accentSky }]}
                  onPress={handleLongRest}
                >
                  <Ionicons name="moon" size={16} color="#FFF" style={{ marginRight: 6 }} />
                  <Text style={styles.confirmBtnText}>Confirmar Descanso</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlayBg,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: colors.textMain,
    fontSize: 18,
    fontWeight: '900',
  },
  chooseContainer: {
    gap: 12,
  },
  restBtn: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 18,
    alignItems: 'center',
    gap: 6,
  },
  shortRestBtn: {
    backgroundColor: colors.accentAmberBg,
    borderColor: colors.accentAmber + '55',
  },
  longRestBtn: {
    backgroundColor: colors.accentSkyBg,
    borderColor: colors.accentSky + '55',
  },
  restBtnTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  restBtnSub: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
  shortRestContainer: {
    gap: 4,
  },
  label: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  diceInfo: {
    color: colors.textMain,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
  },
  diceSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 8,
  },
  diceBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceHighlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceCount: {
    color: colors.textMain,
    fontSize: 28,
    fontWeight: '900',
    minWidth: 40,
    textAlign: 'center',
  },
  healPreview: {
    color: colors.accentEmerald,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
  },
  longRestContainer: {
    gap: 12,
  },
  longRestInfo: {
    color: colors.textMain,
    fontSize: 15,
    fontWeight: '700',
  },
  longRestList: {
    gap: 8,
    paddingLeft: 4,
  },
  longRestItem: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 20,
  },
  cancelBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  confirmBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
