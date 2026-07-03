import { useTheme, ThemeColors } from '../context/ThemeContext';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Character } from '../types/character';
import { getSubclassMinLevel } from '../utils/dndRules';

interface CharacterTabProps {
  character: Character;
  onUpdateProficiencies: (updatedProficiencies: string[]) => Promise<void>;
}

export const CharacterTab: React.FC<CharacterTabProps> = ({
  character,
  onUpdateProficiencies,
}) => {
  const { colors } = useTheme();
  const styles = useStyles(colors);

  const parts = character.characterClass.split(' (');
  const className = parts[0];
  let subclass = parts[1] ? parts[1].replace(')', '') : 'Nenhuma';
  
  const minLvl = getSubclassMinLevel(className);
  if (character.level < minLvl) {
    subclass = `Bloqueado (Libera no Nível ${minLvl})`;
  } else if (!parts[1]) {
    subclass = 'Pendente de Escolha';
  }
  
  return (
    <View style={styles.container}>
      {/* Background Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>INFORMAÇÕES GERAIS</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Raça:</Text>
          <Text style={styles.infoValue}>{character.race}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Classe:</Text>
          <Text style={styles.infoValue}>{className}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Arquétipo/Subclasse:</Text>
          <Text style={styles.infoValue}>{subclass}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Antecedente:</Text>
          <Text style={styles.infoValue}>{character.background || 'Nenhum'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tendência:</Text>
          <Text style={styles.infoValue}>{character.alignment || 'Neutro'}</Text>
        </View>
      </View>
    </View>
  );
};

const useStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.surfaceHighlight,
    padding: 12,
    marginBottom: 12,
  },
  cardTitle: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceHighlight,
    paddingBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceHighlight,
  },
  infoLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  infoValue: {
    color: colors.textMain,
    fontSize: 12,
    fontWeight: '700',
  },
});
