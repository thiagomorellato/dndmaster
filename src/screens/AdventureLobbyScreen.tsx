import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ThemeColors } from '../context/ThemeContext';
import { useAdventure } from '../context/AdventureContext';
import { StorageService } from '../services/storage';
import { Character } from '../types/character';
import { Alert } from '../utils/alert';

interface AdventureLobbyScreenProps {
  onBack: () => void;
  onNavigateToMaster: () => void;
  onNavigateToDashboard: (characterId: string) => void;
}

export const AdventureLobbyScreen: React.FC<AdventureLobbyScreenProps> = ({
  onBack,
  onNavigateToMaster,
  onNavigateToDashboard,
}) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { createAdventure, joinAdventure, rejoinAsMaster, activeAdventure, role, activeCharacterId, leaveAdventure, closeAdventure } = useAdventure();

  const [mode, setMode] = useState<'create' | 'join'>('create');
  const [adventureName, setAdventureName] = useState('');
  const [adventureCode, setAdventureCode] = useState('');
  const [masterRejoinCode, setMasterRejoinCode] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRejoinAsMaster = async () => {
    if (!masterRejoinCode.trim()) {
      Alert.alert('Atenção', 'Digite o código da sala (ex: DND-482) para retornar como Mestre.');
      return;
    }
    setLoading(true);
    try {
      await rejoinAsMaster(masterRejoinCode.trim());
      onNavigateToMaster();
    } catch (e: any) {
      Alert.alert('Erro ao Retornar', e.message || 'Não foi possível reabrir a sala como Mestre.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadChars = async () => {
      const list = await StorageService.getAllCharacters();
      setCharacters(list);
      if (list.length > 0 && !selectedCharId) {
        setSelectedCharId(list[0].id);
      }
    };
    loadChars();
  }, []);

  // Se já há uma aventura ativa na sessão, exibe card para reconectar ou sair
  if (activeAdventure && role) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack}>
            <Ionicons name="arrow-back" size={24} color={colors.textMain} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sessão Ativa</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.activeCard}>
          <Ionicons
            name={role === 'master' ? 'shield-checkmark' : 'people'}
            size={48}
            color={colors.accentAmber}
            style={{ marginBottom: 16 }}
          />
          <Text style={styles.activeTitle}>{activeAdventure.name}</Text>
          <View style={styles.codeBadge}>
            <Text style={styles.codeText}>Código: {activeAdventure.code}</Text>
          </View>
          <Text style={styles.activeSubtext}>
            Você está conectado a esta aventura como{' '}
            <Text style={{ fontWeight: '800', color: colors.textMain }}>
              {role === 'master' ? 'Mestre (GM)' : 'Jogador'}
            </Text>.
          </Text>

          {/* Botão Principal: Voltar para a Sala */}
          <TouchableOpacity
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.surfaceSecondary,
              borderWidth: 1.5,
              borderColor: colors.accentAmber,
              padding: 16,
              borderRadius: 14,
              marginBottom: 12,
              shadowColor: colors.accentAmber,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 4,
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (role === 'master') {
                onNavigateToMaster();
              } else if (activeCharacterId) {
                onNavigateToDashboard(activeCharacterId);
              } else {
                Alert.alert('Erro', 'Personagem ativo não encontrado.');
              }
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: colors.accentAmber + '20',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
                borderWidth: 1,
                borderColor: colors.accentAmber,
              }}>
                <Ionicons name="enter" size={22} color={colors.accentAmber} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: '800' }}>
                  Voltar para a Sala
                </Text>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginTop: 2 }}>
                  {role === 'master' ? 'Painel de Controle do Mestre' : 'Acessar ficha sincronizada'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.accentAmber} />
          </TouchableOpacity>

          {/* Botão Intermediário do Mestre: Sair Temporariamente */}
          {role === 'master' && (
            <TouchableOpacity
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: colors.surfaceSecondary,
                borderWidth: 1.5,
                borderColor: colors.borderHighlight,
                padding: 16,
                borderRadius: 14,
                marginBottom: 12,
                shadowColor: colors.borderHighlight,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 6,
                elevation: 3,
              }}
              activeOpacity={0.8}
              onPress={async () => {
                await leaveAdventure();
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: colors.surface,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                  borderWidth: 1,
                  borderColor: colors.borderHighlight,
                }}>
                  <Ionicons name="pause" size={20} color={colors.textMain} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: '800' }}>
                    Sair Temporariamente
                  </Text>
                  <Text style={{ color: colors.textMuted, fontSize: 12, marginTop: 2 }}>
                    Manter sala aberta em segundo plano
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          )}

          {/* Botão de Sair da Sala no mesmo estilo do Voltar para a Sala */}
          <TouchableOpacity
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.surfaceSecondary,
              borderWidth: 1.5,
              borderColor: colors.accentRed,
              padding: 16,
              borderRadius: 14,
              shadowColor: colors.accentRed,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 4,
            }}
            activeOpacity={0.8}
            onPress={() => {
              Alert.alert(
                role === 'master' ? 'Encerrar Sala' : 'Sair da Sala',
                role === 'master'
                  ? 'Tem certeza? Isso fechará a sala definitivamente para todos os jogadores.'
                  : 'Deseja desconectar seu personagem desta aventura?',
                [
                  { text: 'Cancelar', style: 'cancel' },
                  {
                    text: role === 'master' ? 'Encerrar Sala' : 'Sair',
                    style: 'destructive',
                    onPress: async () => {
                      if (role === 'master') await closeAdventure();
                      else await leaveAdventure();
                    },
                  },
                ]
              );
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: colors.accentRed + '20',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
                borderWidth: 1,
                borderColor: colors.accentRed,
              }}>
                <Ionicons name="log-out" size={22} color={colors.accentRed} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.textMain, fontSize: 16, fontWeight: '800' }}>
                  {role === 'master' ? 'Encerrar Sala' : 'Sair da Sala'}
                </Text>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginTop: 2 }}>
                  {role === 'master' ? 'Fechar sala para todos' : 'Desconectar personagem desta sala'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.accentRed} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleCreate = async () => {
    if (!adventureName.trim()) {
      Alert.alert('Atenção', 'Digite o nome da campanha ou aventura.');
      return;
    }
    setLoading(true);
    try {
      await createAdventure(adventureName.trim());
      onNavigateToMaster();
    } catch (e: any) {
      Alert.alert('Erro ao Criar', e.message || 'Não foi possível criar a aventura.');
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    if (!adventureCode.trim()) {
      Alert.alert('Atenção', 'Digite o código da aventura fornecido pelo Mestre.');
      return;
    }
    if (!selectedCharId) {
      Alert.alert('Atenção', 'Selecione ou crie um personagem para entrar na aventura.');
      return;
    }
    const char = characters.find(c => c.id === selectedCharId);
    if (!char) return;

    setLoading(true);
    try {
      await joinAdventure(adventureCode.trim(), char);
      onNavigateToDashboard(char.id);
    } catch (e: any) {
      Alert.alert('Erro ao Entrar', e.message || 'Não foi possível conectar com este código.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={colors.textMain} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lobby Multijogador (NoSQL)</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabBtn, mode === 'create' && styles.activeTabBtn]}
          onPress={() => setMode('create')}
        >
          <Ionicons
            name="shield"
            size={18}
            color={mode === 'create' ? colors.accentAmber : colors.textMuted}
            style={{ marginRight: 6 }}
          />
          <Text style={[styles.tabText, mode === 'create' && styles.activeTabText]}>
            Sou o Mestre (GM)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, mode === 'join' && styles.activeTabBtn]}
          onPress={() => setMode('join')}
        >
          <Ionicons
            name="people"
            size={18}
            color={mode === 'join' ? colors.accentAmber : colors.textMuted}
            style={{ marginRight: 6 }}
          />
          <Text style={[styles.tabText, mode === 'join' && styles.activeTabText]}>
            Sou Jogador
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {mode === 'create' ? (
          <>
            <View style={styles.formCard}>
              <Ionicons name="map" size={40} color={colors.accentAmber} style={{ alignSelf: 'center', marginBottom: 12 }} />
              <Text style={styles.cardTitle}>Criar Nova Campanha</Text>
              <Text style={styles.cardDesc}>
                Como Mestre, você abrirá uma sala em tempo real (Firebase RTDB).
                Os jogadores enviarão seus snapshots de status para você monitorar HP, CA e condições sem overhead.
              </Text>

              <Text style={styles.label}>Nome da Aventura / Campanha</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: A Mina Perdida de Phandelver"
                placeholderTextColor={colors.textMuted}
                value={adventureName}
                onChangeText={setAdventureName}
              />

              <TouchableOpacity style={styles.primaryBtn} onPress={handleCreate} disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#000000" />
                ) : (
                  <>
                    <Ionicons name="flash" size={18} color="#000000" style={{ marginRight: 8 }} />
                    <Text style={styles.primaryBtnText}>Gerar Código e Abrir Sala</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>

            <View style={[styles.formCard, { marginTop: 16 }]}>
              <Ionicons name="sync-circle" size={38} color={colors.textMain} style={{ alignSelf: 'center', marginBottom: 10 }} />
              <Text style={styles.cardTitle}>Retornar à Sala Existente</Text>
              <Text style={styles.cardDesc}>
                Pausou a sessão temporariamente? Digite o código da sua sala anterior para reabrir o painel tático como Mestre.
              </Text>

              <Text style={styles.label}>Código da Sala</Text>
              <TextInput
                style={[styles.input, { textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', fontSize: 18, fontWeight: '800' }]}
                placeholder="DND-482"
                placeholderTextColor={colors.textMuted}
                maxLength={15}
                value={masterRejoinCode}
                onChangeText={setMasterRejoinCode}
              />

              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  backgroundColor: colors.surfaceSecondary,
                  height: 56,
                  borderRadius: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1.5,
                  borderColor: colors.accentAmber,
                }}
                onPress={handleRejoinAsMaster}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color={colors.accentAmber} />
                ) : (
                  <>
                    <Ionicons name="enter" size={18} color={colors.accentAmber} style={{ marginRight: 8 }} />
                    <Text style={{ color: colors.accentAmber, fontSize: 16, fontWeight: '800' }}>Reabrir Sala como Mestre</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={styles.formCard}>
            <Ionicons name="enter" size={40} color={colors.accentAmber} style={{ alignSelf: 'center', marginBottom: 12 }} />
            <Text style={styles.cardTitle}>Conectar à Sala do Mestre</Text>
            <Text style={styles.cardDesc}>
              Digite o código fornecido pelo seu Mestre e escolha qual personagem do seu portfólio entrará no combate.
            </Text>

            <Text style={styles.label}>Código da Aventura</Text>
            <TextInput
              style={[styles.input, { textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', fontSize: 18, fontWeight: '800' }]}
              placeholder="DND-482"
              placeholderTextColor={colors.textMuted}
              maxLength={15}
              value={adventureCode}
              onChangeText={setAdventureCode}
            />

            <Text style={[styles.label, { marginTop: 16 }]}>Selecione seu Personagem</Text>
            {characters.length === 0 ? (
              <Text style={styles.emptyChars}>
                Você não possui personagens locais na Camada 2. Volte à tela inicial e crie ou importe um primeiro!
              </Text>
            ) : (
              <View style={styles.charList}>
                {characters.map(char => {
                  const isSelected = char.id === selectedCharId;
                  return (
                    <TouchableOpacity
                      key={char.id}
                      style={[styles.charOption, isSelected && styles.charOptionSelected]}
                      onPress={() => setSelectedCharId(char.id)}
                    >
                      {char.imageUrl && (
                        <Image source={{ uri: char.imageUrl }} style={styles.charAvatar} />
                      )}
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.charName, isSelected && { color: colors.accentAmber }]}>
                          {char.name}
                        </Text>
                        <Text style={styles.charSub}>
                          Lvl {char.level} | {char.characterClass}
                        </Text>
                      </View>
                      {isSelected && (
                        <Ionicons name="checkmark-circle" size={22} color={colors.accentAmber} />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            <TouchableOpacity
              style={[styles.primaryBtn, characters.length === 0 && { opacity: 0.5 }]}
              onPress={handleJoin}
              disabled={loading || characters.length === 0}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="shield-checkmark" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
                  <Text style={styles.primaryBtnText}>Sincronizar Personagem (Join)</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginBottom: 16,
    },
    backBtn: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.surface,
    },
    headerTitle: {
      color: colors.textMain,
      fontSize: 18,
      fontWeight: '800',
    },
    tabContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 4,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    tabBtn: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    activeTabBtn: {
      backgroundColor: colors.surfaceSecondary,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    tabText: {
      color: colors.textMuted,
      fontSize: 13,
      fontWeight: '700',
    },
    activeTabText: {
      color: colors.textMain,
      fontWeight: '800',
    },
    content: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    formCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
    cardTitle: {
      color: colors.textMain,
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: 8,
    },
    cardDesc: {
      color: colors.textMuted,
      fontSize: 13,
      textAlign: 'center',
      lineHeight: 18,
      marginBottom: 20,
    },
    label: {
      color: colors.textSecondary,
      fontSize: 13,
      fontWeight: '700',
      marginBottom: 8,
    },
    input: {
      backgroundColor: colors.surfaceSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      color: colors.textMain,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 14,
      marginBottom: 20,
    },
    primaryBtn: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: colors.accentAmber,
      height: 56,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.accentAmber,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 6,
      marginTop: 8,
    },
    primaryBtnText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '800',
    },
    secondaryBtn: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryBtnText: {
      color: colors.textMain,
      fontSize: 14,
      fontWeight: '700',
    },
    charList: {
      marginBottom: 20,
    },
    charOption: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      padding: 12,
      marginBottom: 8,
    },
    charOptionSelected: {
      borderColor: colors.accentAmber,
      backgroundColor: colors.surface,
    },
    charAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 12,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
    },
    charName: {
      color: colors.textMain,
      fontSize: 15,
      fontWeight: '700',
    },
    charSub: {
      color: colors.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    emptyChars: {
      color: colors.accentRed,
      fontSize: 13,
      textAlign: 'center',
      marginVertical: 16,
      lineHeight: 18,
    },
    activeCard: {
      marginHorizontal: 20,
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: colors.borderHighlight,
      alignItems: 'center',
    },
    activeTitle: {
      color: colors.textMain,
      fontSize: 22,
      fontWeight: '900',
      marginBottom: 8,
    },
    codeBadge: {
      backgroundColor: colors.surfaceSecondary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.accentAmber,
      marginBottom: 16,
    },
    codeText: {
      color: colors.accentAmber,
      fontWeight: '800',
      fontSize: 14,
    },
    activeSubtext: {
      color: colors.textMuted,
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 24,
      lineHeight: 20,
    },
  });
