import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { SPELLS_DATABASE, Spell } from '../utils/dndSpells';
import { SpellSlot } from '../types/character';
import { SCHOOL_COLORS } from '../utils/skillMapping';

interface SpellbookWidgetProps {
  preparedSpells: string[];
  spellSlots: Record<string, SpellSlot>;
}

const SpellRow: React.FC<{ spell: Spell; colors: ThemeColors }> = ({ spell, colors }) => {
  const [showDesc, setShowDesc] = useState(false);
  const schoolColor = SCHOOL_COLORS[spell.school] || '#94A3B8';

  return (
    <TouchableOpacity onPress={() => setShowDesc(!showDesc)} activeOpacity={0.8}>
      <View style={styles.spellRow}>
        <View style={[styles.schoolDot, { backgroundColor: schoolColor }]} />
        <Text style={[styles.spellName, { color: colors.textMain }]} numberOfLines={1}>
          {spell.name}
        </Text>
        <Text style={[styles.spellSchool, { color: colors.textMuted }]} numberOfLines={1}>
          {spell.school}
        </Text>
        <View style={[styles.levelBadge, { backgroundColor: schoolColor + '22', borderColor: schoolColor + '66' }]}>
          <Text style={[styles.levelText, { color: schoolColor }]}>
            {spell.level === 0 ? 'C0' : `N${spell.level}`}
          </Text>
        </View>
      </View>
      {showDesc && (
        <View style={[styles.descBox, { backgroundColor: colors.surfaceSecondary, borderColor: colors.border }]}>
          <View style={styles.metaRow}>
            <Text style={[styles.metaText, { color: colors.textMuted }]}>⏱ {spell.castingTime}</Text>
            <Text style={[styles.metaText, { color: colors.textMuted }]}>📍 {spell.range}</Text>
            <Text style={[styles.metaText, { color: colors.textMuted }]}>⏳ {spell.duration}</Text>
          </View>
          <Text style={[styles.descText, { color: colors.textSecondary }]}>{spell.description}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const SpellbookWidget: React.FC<SpellbookWidgetProps> = ({
  preparedSpells,
  spellSlots,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();

  // Resolve spell data
  const spellObjects = preparedSpells
    .map(name => SPELLS_DATABASE.find(s => s.name === name))
    .filter(Boolean) as Spell[];

  const cantrips = spellObjects.filter(s => s.level === 0);
  const levelSpells = spellObjects.filter(s => s.level > 0).sort((a, b) => a.level - b.level);

  // Don't render if no prepared spells
  if (preparedSpells.length === 0) return null;

  // Count available slots
  const totalAvailableSlots = Object.values(spellSlots).reduce((sum, s) => sum + s.current, 0);
  const totalMaxSlots = Object.values(spellSlots).reduce((sum, s) => sum + s.max, 0);

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header} activeOpacity={0.8}>
        <View style={styles.titleRow}>
          <Ionicons name="book" size={16} color="#A78BFA" style={{ marginRight: 8 }} />
          <Text style={[styles.title, { color: colors.textMuted }]}>GRIMÓRIO DO DIA</Text>
          <View style={[styles.countBadge, { backgroundColor: '#A78BFA22', borderColor: '#A78BFA55' }]}>
            <Text style={[styles.countText, { color: '#A78BFA' }]}>
              {cantrips.length > 0 ? `${cantrips.length}T + ` : ''}{levelSpells.length} magias
            </Text>
          </View>
          {totalMaxSlots > 0 && (
            <View style={[styles.slotsBadge, {
              backgroundColor: totalAvailableSlots > 0 ? colors.accentVioletBg : colors.surfaceSecondary,
              borderColor: totalAvailableSlots > 0 ? colors.accentViolet : colors.border,
            }]}>
              <Text style={[styles.slotsText, { color: totalAvailableSlots > 0 ? colors.accentViolet : colors.textMuted }]}>
                {totalAvailableSlots}/{totalMaxSlots} slots
              </Text>
            </View>
          )}
        </View>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={colors.textMuted}
        />
      </TouchableOpacity>

      {isOpen && (
        <ScrollView style={styles.body} nestedScrollEnabled>
          {cantrips.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>🕯️ TRUQUES</Text>
              {cantrips.map(spell => (
                <SpellRow key={spell.name} spell={spell} colors={colors} />
              ))}
            </View>
          )}
          {levelSpells.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>📜 MAGIAS PREPARADAS</Text>
              {levelSpells.map(spell => (
                <SpellRow key={spell.name} spell={spell} colors={colors} />
              ))}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  title: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  countBadge: {
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  countText: {
    fontSize: 10,
    fontWeight: '700',
  },
  slotsBadge: {
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  slotsText: {
    fontSize: 10,
    fontWeight: '700',
  },
  body: {
    maxHeight: 400,
  },
  section: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 6,
    marginTop: 4,
  },
  spellRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 8,
  },
  schoolDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    flexShrink: 0,
  },
  spellName: {
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  spellSchool: {
    fontSize: 11,
    fontWeight: '500',
    flexShrink: 1,
  },
  levelBadge: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 1,
    flexShrink: 0,
  },
  levelText: {
    fontSize: 10,
    fontWeight: '800',
  },
  descBox: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  metaText: {
    fontSize: 11,
  },
  descText: {
    fontSize: 12,
    lineHeight: 18,
  },
});
