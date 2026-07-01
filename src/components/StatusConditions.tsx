import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';

interface Condition {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

const CONDITIONS: Condition[] = [
  { id: 'blinded', name: 'Cego', icon: 'eye-off-outline', color: '#6B7280', description: 'Não pode ver. Falha em checks de Percepção (visão). Tem desvantagem em ataques.' },
  { id: 'charmed', name: 'Enfeitiçado', icon: 'heart-outline', color: '#EC4899', description: 'Não pode atacar o encantador. O encantador tem vantagem em interações sociais.' },
  { id: 'deafened', name: 'Ensurdecido', icon: 'ear-outline', color: '#94A3B8', description: 'Não pode ouvir. Falha automática em checks que dependem de som.' },
  { id: 'exhausted', name: 'Exausto', icon: 'battery-dead-outline', color: '#F97316', description: 'Acumulativo: desvantagem em checks → velocidade reduzida → desvantagem em ataques → HP máx. reduzido → velocidade 0 → morte.' },
  { id: 'frightened', name: 'Amedrontado', icon: 'alert-circle-outline', color: '#F59E0B', description: 'Desvantagem em checks e ataques enquanto puder ver a fonte do medo. Não pode se aproximar dela voluntariamente.' },
  { id: 'grappled', name: 'Agarrado', icon: 'hand-right-outline', color: '#8B5CF6', description: 'Velocidade 0. Encerrado se o agarrador ficar incapacitado ou você sair do alcance.' },
  { id: 'incapacitated', name: 'Incapacitado', icon: 'ban-outline', color: '#EF4444', description: 'Não pode fazer ações ou reações.' },
  { id: 'invisible', name: 'Invisível', icon: 'glasses-outline', color: '#60A5FA', description: 'Impossível de ver sem magia. Vantagem em ataques, inimigos têm desvantagem contra você.' },
  { id: 'paralyzed', name: 'Paralisado', icon: 'lock-closed-outline', color: '#DC2626', description: 'Incapacitado e não pode se mover ou falar. Ataques adjacentes são automaticamente acertos críticos.' },
  { id: 'petrified', name: 'Petrificado', icon: 'cube-outline', color: '#78716C', description: 'Transformado em pedra. Incapacitado, peso 10x, resistência a todos os danos, imune a veneno/doenças.' },
  { id: 'poisoned', name: 'Envenenado', icon: 'flask-outline', color: '#10B981', description: 'Desvantagem em ataques e checks de habilidade.' },
  { id: 'prone', name: 'Caído', icon: 'arrow-down-outline', color: '#6366F1', description: 'Desvantagem em ataques. Ataques adjacentes têm vantagem; ataques à distância têm desvantagem.' },
  { id: 'restrained', name: 'Contido', icon: 'lock-open-outline', color: '#D97706', description: 'Velocidade 0. Desvantagem em ataques. Ataques contra você têm vantagem.' },
  { id: 'stunned', name: 'Atordoado', icon: 'flash-outline', color: '#7C3AED', description: 'Incapacitado, não pode se mover, fala apenas incoerente. Desvantagem em saves de FOR e DES.' },
  { id: 'unconscious', name: 'Inconsciente', icon: 'moon-outline', color: '#4B5563', description: 'Caído e incapacitado. Ataques adjacentes são automaticamente acertos críticos. Falha em saves de FOR e DES.' },
];

interface StatusConditionsProps {
  conditions: string[];
  onUpdateConditions: (conditions: string[]) => void;
}

export const StatusConditions: React.FC<StatusConditionsProps> = ({
  conditions,
  onUpdateConditions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState<string | null>(null);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const activeConditions = CONDITIONS.filter(c => conditions.includes(c.id));
  const hasActive = activeConditions.length > 0;

  const toggleCondition = (id: string) => {
    if (conditions.includes(id)) {
      onUpdateConditions(conditions.filter(c => c !== id));
    } else {
      onUpdateConditions([...conditions, id]);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.header} activeOpacity={0.8}>
        <View style={styles.titleRow}>
          <Ionicons name="medical-outline" size={14} color={hasActive ? '#EF4444' : colors.textMuted} style={{ marginRight: 8 }} />
          <Text style={[styles.title, { color: hasActive ? colors.textMain : colors.textMuted }]}>
            CONDIÇÕES
          </Text>
          {hasActive && (
            <View style={styles.activeBadgeRow}>
              {activeConditions.slice(0, 4).map(c => (
                <View key={c.id} style={[styles.activeDot, { backgroundColor: c.color }]} />
              ))}
              {activeConditions.length > 4 && (
                <Text style={[styles.moreText, { color: colors.textMuted }]}>+{activeConditions.length - 4}</Text>
              )}
            </View>
          )}
          {!hasActive && (
            <Text style={[styles.noneText, { color: colors.textMuted }]}>Nenhuma ativa</Text>
          )}
        </View>
        <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={14} color={colors.textMuted} />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.grid}>
          {CONDITIONS.map(condition => {
            const isActive = conditions.includes(condition.id);
            return (
              <View key={condition.id}>
                <TouchableOpacity
                  style={[
                    styles.conditionBtn,
                    { borderColor: isActive ? condition.color : colors.border },
                    isActive && { backgroundColor: condition.color + '22' },
                  ]}
                  onPress={() => toggleCondition(condition.id)}
                  onLongPress={() => setExpandedDesc(expandedDesc === condition.id ? null : condition.id)}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name={condition.icon as any}
                    size={14}
                    color={isActive ? condition.color : colors.textMuted}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={[
                    styles.conditionName,
                    { color: isActive ? condition.color : colors.textMuted },
                    isActive && { fontWeight: '800' },
                  ]}>
                    {condition.name}
                  </Text>
                </TouchableOpacity>
                {expandedDesc === condition.id && (
                  <View style={[styles.descBox, { backgroundColor: condition.color + '15', borderColor: condition.color + '44' }]}>
                    <Text style={[styles.descText, { color: colors.textSecondary }]}>{condition.description}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
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
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  activeBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  moreText: {
    fontSize: 10,
    fontWeight: '700',
  },
  noneText: {
    fontSize: 10,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    padding: 10,
  },
  conditionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  conditionName: {
    fontSize: 12,
    fontWeight: '600',
  },
  descBox: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    marginTop: 2,
    marginBottom: 4,
    marginHorizontal: 2,
  },
  descText: {
    fontSize: 12,
    lineHeight: 17,
  },
});
