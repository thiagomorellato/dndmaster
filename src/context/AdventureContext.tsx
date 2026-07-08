import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Adventure, AdventurePlayer } from '../types/adventure';
import { Character } from '../types/character';
import { AdventureService } from '../services/adventureService';
import { StorageService } from '../services/storage';
import { Alert } from '../utils/alert';

interface AdventureContextData {
  activeAdventure: Adventure | null;
  role: 'master' | 'player' | null;
  userId: string;
  activeCharacterId: string | null;
  playersList: AdventurePlayer[];
  isLoading: boolean;
  createAdventure: (name: string) => Promise<Adventure>;
  joinAdventure: (code: string, character: Character) => Promise<Adventure>;
  rejoinAsMaster: (code: string) => Promise<Adventure>;
  leaveAdventure: () => Promise<void>;
  closeAdventure: () => Promise<void>;
}

const AdventureContext = createContext<AdventureContextData>({} as AdventureContextData);

export const AdventureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeAdventure, setActiveAdventure] = useState<Adventure | null>(null);
  const [role, setRole] = useState<'master' | 'player' | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Lista reativa derivada dos jogadores conectados
  const playersList = activeAdventure?.players
    ? Object.values(activeAdventure.players)
    : [];

  // Inicializa o userId e tenta restaurar sessão salva na Camada 2 (Local NoSQL)
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const uid = await AdventureService.getOrCreateUserId();
        if (mounted) setUserId(uid);

        const session = await StorageService.getActiveAdventure();
        if (session && session.adventureId) {
          if (mounted) {
            setRole(session.role);
            setActiveCharacterId(session.characterId || null);
          }
          subscribeToSession(session.adventureId, session.role);
        }
      } catch (error) {
        console.error('Error initializing AdventureContext:', error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    init();

    return () => {
      mounted = false;
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
  }, []);

  const subscribeToSession = (adventureId: string, currentRole: 'master' | 'player') => {
    if (unsubscribeRef.current) unsubscribeRef.current();

    unsubscribeRef.current = AdventureService.subscribeToAdventure(adventureId, async (adv) => {
      // Se a aventura foi fechada pelo Mestre ou não existe mais
      if (!adv || adv.status === 'closed') {
        if (currentRole === 'player') {
          Alert.alert('Aventura Encerrada', 'O Mestre encerrou esta aventura ou ela não está mais ativa.');
        }
        await StorageService.clearActiveAdventure();
        setActiveAdventure(null);
        setRole(null);
        setActiveCharacterId(null);
        if (unsubscribeRef.current) {
          unsubscribeRef.current();
          unsubscribeRef.current = null;
        }
      } else {
        setActiveAdventure(adv);
      }
    });
  };

  const createAdventure = async (name: string): Promise<Adventure> => {
    setIsLoading(true);
    try {
      const adv = await AdventureService.createAdventure(name, userId);
      await StorageService.saveActiveAdventure(adv.id, 'master');
      
      setActiveAdventure(adv);
      setRole('master');
      setActiveCharacterId(null);
      
      subscribeToSession(adv.id, 'master');
      return adv;
    } finally {
      setIsLoading(false);
    }
  };

  const joinAdventure = async (code: string, character: Character): Promise<Adventure> => {
    setIsLoading(true);
    try {
      const now = new Date().toISOString();
      const acBonus = character.combat.shieldOfFaithActive ? 2 : 0;
      const totalAc = character.combat.baseArmorClass + acBonus;

      const player: AdventurePlayer = {
        userId,
        characterId: character.id,
        characterName: character.name,
        characterClass: character.characterClass,
        characterLevel: character.level,
        joinedAt: now,
        lastSeen: now,
        statusSnapshot: {
          hp: character.hp,
          ac: totalAc,
          conditions: character.conditions || [],
          customResources: character.resources.customResources || [],
          spellSlots: character.resources.spellSlots || {},
          updatedAt: now,
        },
        fullCharacterData: {
          id: character.id,
          name: character.name,
          characterClass: character.characterClass,
          subclass: character.subclass,
          level: character.level,
          baseStats: character.baseStats,
          spellcastingAbility: character.spellcastingAbility,
          hp: character.hp,
          combat: character.combat,
          resources: character.resources,
          proficiencies: character.proficiencies,
          skills: character.skills,
          savingThrows: character.savingThrows,
          preparedSpells: character.preparedSpells,
          equipment: character.equipment,
          background: character.background,
          coins: character.coins,
          hitDice: character.hitDice,
          imageUrl: character.imageUrl,
          race: character.race,
          alignment: character.alignment,
          xp: character.xp,
          conditions: character.conditions,
        },
      };

      const adv = await AdventureService.joinAdventure(code, player);
      await StorageService.saveActiveAdventure(adv.id, 'player', character.id);

      setActiveAdventure(adv);
      setRole('player');
      setActiveCharacterId(character.id);

      subscribeToSession(adv.id, 'player');
      return adv;
    } finally {
      setIsLoading(false);
    }
  };

  const rejoinAsMaster = async (code: string): Promise<Adventure> => {
    setIsLoading(true);
    try {
      const adv = await AdventureService.rejoinAsMaster(code);
      await StorageService.saveActiveAdventure(adv.id, 'master');

      setActiveAdventure(adv);
      setRole('master');
      setActiveCharacterId(null);

      subscribeToSession(adv.id, 'master');
      return adv;
    } finally {
      setIsLoading(false);
    }
  };

  const leaveAdventure = async (): Promise<void> => {
    if (!activeAdventure) return;
    setIsLoading(true);
    try {
      const charName = playersList.find(p => p.userId === userId)?.characterName || 'Jogador';
      await AdventureService.leaveAdventure(activeAdventure.id, userId, charName);
      await StorageService.clearActiveAdventure();
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      setActiveAdventure(null);
      setRole(null);
      setActiveCharacterId(null);
    } finally {
      setIsLoading(false);
    }
  };

  const closeAdventure = async (): Promise<void> => {
    if (!activeAdventure) return;
    setIsLoading(true);
    try {
      await AdventureService.closeAdventure(activeAdventure.id, 'Mestre');
      await StorageService.clearActiveAdventure();
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      setActiveAdventure(null);
      setRole(null);
      setActiveCharacterId(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdventureContext.Provider
      value={{
        activeAdventure,
        role,
        userId,
        activeCharacterId,
        playersList,
        isLoading,
        createAdventure,
        joinAdventure,
        rejoinAsMaster,
        leaveAdventure,
        closeAdventure,
      }}
    >
      {children}
    </AdventureContext.Provider>
  );
};

export const useAdventure = () => useContext(AdventureContext);
