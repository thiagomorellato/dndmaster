import { useEffect, useRef, useState, useCallback } from 'react';
import { Character } from '../types/character';
import { AdventurePlayer } from '../types/adventure';
import { AdventurePlayerSchema } from '../schemas/adventure';
import { useAdventure } from '../context/AdventureContext';
import { AdventureService } from '../services/adventureService';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

/**
 * Hook de Sincronização (CQRS Write-Side & Optimistic Updates).
 * Monitora o estado local do personagem no DashboardScreen e envia o snapshot
 * para o Firebase com debounce de 1500ms para evitar gargalos de rede.
 */
export const useAdventureSync = (
  character: Character | null,
  onRemoteCharacterUpdate?: (updatedChar: Character, restType: 'SHORT_REST' | 'LONG_REST') => void
) => {
  const { activeAdventure, role, userId, activeCharacterId } = useAdventure();
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSeenRestAtRef = useRef<string | undefined>(undefined);

  const isConnected = !!(
    activeAdventure &&
    role === 'player' &&
    character &&
    activeCharacterId === character.id
  );

  // Escuta se o Mestre concedeu um descanso na sala para este jogador
  useEffect(() => {
    if (!isConnected || !activeAdventure || !userId || !character) return;
    const advPlayer = activeAdventure.players?.[userId];
    if (!advPlayer) return;

    const currentRestAt = advPlayer.statusSnapshot?.lastRestAt;
    if (!currentRestAt) return;

    // Se o personagem local ainda não processou esse descanso (mesmo que o app estivesse fechado na hora!)
    const hasUnprocessedRest = currentRestAt !== character.lastProcessedRestAt && currentRestAt !== lastSeenRestAtRef.current;

    if (hasUnprocessedRest) {
      lastSeenRestAtRef.current = currentRestAt;
      if (onRemoteCharacterUpdate && advPlayer.fullCharacterData) {
        const updatedWithProcessedRest: Character = {
          ...(advPlayer.fullCharacterData as Character),
          lastProcessedRestAt: currentRestAt,
        };
        onRemoteCharacterUpdate(
          updatedWithProcessedRest,
          advPlayer.statusSnapshot?.lastRestType || 'SHORT_REST'
        );
      }
    }
  }, [activeAdventure, isConnected, userId, character, onRemoteCharacterUpdate]);

  const publishSnapshot = useCallback(async (charToSync: Character) => {
    if (!activeAdventure || !userId) return;

    setSyncStatus('syncing');
    try {
      const now = new Date().toISOString();
      const acBonus = charToSync.combat.shieldOfFaithActive ? 2 : 0;
      const totalAc = charToSync.combat.baseArmorClass + acBonus;
      const existingSnapshot = activeAdventure.players?.[userId]?.statusSnapshot;

      const playerPayload: AdventurePlayer = {
        userId,
        characterId: charToSync.id,
        characterName: charToSync.name,
        characterClass: charToSync.characterClass,
        characterLevel: charToSync.level,
        joinedAt: now,
        lastSeen: now,
        statusSnapshot: {
          hp: charToSync.hp,
          ac: totalAc,
          conditions: charToSync.conditions || [],
          customResources: charToSync.resources.customResources || [],
          spellSlots: charToSync.resources.spellSlots || {},
          updatedAt: now,
          lastRestAt: existingSnapshot?.lastRestAt,
          lastRestType: existingSnapshot?.lastRestType,
        },
        fullCharacterData: {
          id: charToSync.id,
          name: charToSync.name,
          characterClass: charToSync.characterClass,
          subclass: charToSync.subclass,
          level: charToSync.level,
          baseStats: charToSync.baseStats,
          spellcastingAbility: charToSync.spellcastingAbility,
          hp: charToSync.hp,
          combat: charToSync.combat,
          resources: charToSync.resources,
          proficiencies: charToSync.proficiencies,
          skills: charToSync.skills,
          savingThrows: charToSync.savingThrows,
          preparedSpells: charToSync.preparedSpells,
          equipment: charToSync.equipment,
          background: charToSync.background,
          coins: charToSync.coins,
          hitDice: charToSync.hitDice,
          imageUrl: charToSync.imageUrl,
          race: charToSync.race,
          alignment: charToSync.alignment,
          xp: charToSync.xp,
          conditions: charToSync.conditions,
        },
      };

      AdventurePlayerSchema.parse(playerPayload);

      await AdventureService.publishPlayerData(activeAdventure.id, playerPayload);
      setSyncStatus('synced');
    } catch (err) {
      console.error('Erro ao sincronizar snapshot com a Aventura:', err);
      setSyncStatus('error');
    }
  }, [activeAdventure, userId]);

  // Efeito reativo com Debounce de 1.5s
  useEffect(() => {
    if (!isConnected || !character) {
      setSyncStatus('idle');
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    setSyncStatus('syncing');
    timerRef.current = setTimeout(() => {
      publishSnapshot(character);
    }, 1500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isConnected, character, publishSnapshot]);

  return {
    isConnected,
    syncStatus,
    adventureName: activeAdventure?.name || '',
    adventureCode: activeAdventure?.code || '',
    forceSyncNow: () => character && publishSnapshot(character),
  };
};
