import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { ActionType } from '../types/character';

interface DiceRollerWidgetProps {
  onLogAction: (actionType: ActionType, detail: string, stateSummary: string) => void;
}

export const DiceRollerWidget: React.FC<DiceRollerWidgetProps> = ({ onLogAction }) => {
  const { colors } = useTheme();
  
  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    // Log the roll
    onLogAction('DICE_ROLL' as ActionType, `Rolou um D${sides}`, `Resultado: ${result}`);
  };

  const dice = [4, 6, 8, 10, 12, 20];

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <Ionicons name="dice" size={16} color={colors.accentSky} style={{ marginRight: 6 }} />
        <Text style={[styles.title, { color: colors.textMuted }]}>ROLAGEM RÁPIDA</Text>
      </View>
      <View style={styles.diceRow}>
        {dice.map(d => (
          <TouchableOpacity 
            key={d} 
            style={[styles.diceBtn, { backgroundColor: colors.surfaceHighlight, borderColor: colors.borderHighlight }]}
            onPress={() => rollDice(d)}
            activeOpacity={0.7}
          >
            <Text style={[styles.diceText, { color: colors.textMain }]}>D{d}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  diceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  diceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minWidth: '28%',
    justifyContent: 'center'
  },
  diceText: {
    fontSize: 16,
    fontWeight: '800'
  }
});
