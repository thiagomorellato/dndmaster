import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref, set, get, onValue, remove, update, push, child } from 'firebase/database';
import { db, IS_DUMMY_KEY } from './firebaseConfig';
import {
  Adventure,
  AdventurePlayer,
  AdventureEvent,
  AdventureEventType,
} from '../types/adventure';
import {
  AdventureSchema,
  AdventurePlayerSchema,
  AdventureEventSchema,
} from '../schemas/adventure';

const USER_ID_STORAGE_KEY = 'DND_DEVICE_USER_ID';
const MOCK_ADVENTURES_KEY = 'DND_MOCK_ADVENTURES_MAP';
const MOCK_CODES_KEY = 'DND_MOCK_CODES_MAP';

/**
 * Interface do Adapter para a camada de aventura.
 * Garante o desacoplamento total entre a UI/Domínio e o serviço de banco de dados NoSQL.
 */
export interface IAdventureService {
  getOrCreateUserId(): Promise<string>;
  createAdventure(name: string, masterUserId: string): Promise<Adventure>;
  joinAdventure(code: string, player: AdventurePlayer): Promise<Adventure>;
  rejoinAsMaster(code: string): Promise<Adventure>;
  publishPlayerData(adventureId: string, player: AdventurePlayer): Promise<void>;
  subscribeToAdventure(adventureId: string, onUpdate: (adventure: Adventure) => void): () => void;
  leaveAdventure(adventureId: string, userId: string, characterName: string): Promise<void>;
  closeAdventure(adventureId: string, characterName?: string): Promise<void>;
}

/**
 * Helper para higienizar objetos antes de persistir no Firebase RTDB.
 * O Realtime Database da Google recusa chaves com valores `undefined` (ex: subclass não preenchida).
 * Serializar e desserializar com JSON remove automaticamente todas as propriedades `undefined`.
 */
function sanitizeForFirebase<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

/**
 * Implementação Concreta 1: Firebase Realtime Database (Remoto, tempo real via WebSocket).
 * Segue as regras de dados flat e segregação de comandos (CQRS Write Side / Event Sourcing).
 */
export class FirebaseAdventureService implements IAdventureService {
  async getOrCreateUserId(): Promise<string> {
    try {
      let uid = await AsyncStorage.getItem(USER_ID_STORAGE_KEY);
      if (!uid) {
        uid = crypto.randomUUID();
        await AsyncStorage.setItem(USER_ID_STORAGE_KEY, uid);
      }
      return uid;
    } catch {
      return 'anonymous-device-id';
    }
  }

  private generateCode(): string {
    return 'DND-' + Math.floor(100 + Math.random() * 899);
  }

  async createAdventure(name: string, masterUserId: string): Promise<Adventure> {
    const id = crypto.randomUUID();
    const code = this.generateCode();
    const now = new Date().toISOString();

    const newAdventure: Adventure = {
      id,
      name,
      code,
      masterUserId,
      createdAt: now,
      status: 'active',
      players: {},
    };

    // Validação de fronteira Zod
    AdventureSchema.parse(newAdventure);

    // Escrita flat no NoSQL (higienizada para remover chaves undefined)
    await set(ref(db, `adventureMeta/${id}`), sanitizeForFirebase({
      id,
      name,
      code,
      masterUserId,
      createdAt: now,
      status: 'active',
    }));

    // Índice secundário manual para lookup rápido (O(1)) por código
    await set(ref(db, `adventureCodes/${code}`), id);

    // Event Sourcing
    await this.logEvent(id, masterUserId, 'Mestre', 'STATUS_UPDATE', { action: 'ADVENTURE_CREATED', name });

    return newAdventure;
  }

  async joinAdventure(code: string, player: AdventurePlayer): Promise<Adventure> {
    const cleanCode = code.trim().toUpperCase();
    
    // 1. Lookup via índice secundário
    const codeSnap = await get(ref(db, `adventureCodes/${cleanCode}`));
    if (!codeSnap.exists()) {
      throw new Error(`Código de aventura "${cleanCode}" não encontrado.`);
    }

    const adventureId = codeSnap.val();

    // 2. Busca metadados da aventura
    const metaSnap = await get(ref(db, `adventureMeta/${adventureId}`));
    if (!metaSnap.exists()) {
      throw new Error('Aventura encontrada no índice mas o documento não existe.');
    }

    const advMeta = metaSnap.val() as Adventure;
    if (advMeta.status === 'closed') {
      throw new Error('Esta aventura já foi encerrada pelo Mestre.');
    }

    // 3. Valida jogador e salva no path de players (flat data structure, higienizado contra undefined)
    AdventurePlayerSchema.parse(player);
    await set(ref(db, `adventurePlayers/${adventureId}/${player.userId}`), sanitizeForFirebase(player));

    // 4. Log Event Sourcing
    await this.logEvent(adventureId, player.userId, player.characterName, 'PLAYER_JOINED', {
      characterId: player.characterId,
      class: player.characterClass,
      level: player.characterLevel,
    });

    // Busca todos os players para retornar objeto completo
    const playersSnap = await get(ref(db, `adventurePlayers/${adventureId}`));
    const players = playersSnap.exists() ? playersSnap.val() : {};

    return {
      ...advMeta,
      players,
    };
  }

  async rejoinAsMaster(code: string): Promise<Adventure> {
    const cleanCode = code.trim().toUpperCase();
    const codeSnap = await get(ref(db, `adventureCodes/${cleanCode}`));
    if (!codeSnap.exists()) {
      throw new Error(`Código de aventura "${cleanCode}" não encontrado.`);
    }

    const adventureId = codeSnap.val();
    const metaSnap = await get(ref(db, `adventureMeta/${adventureId}`));
    if (!metaSnap.exists()) {
      throw new Error('Aventura encontrada no índice mas o documento não existe.');
    }

    const advMeta = metaSnap.val() as Adventure;
    if (advMeta.status === 'closed') {
      throw new Error('Esta aventura já foi encerrada.');
    }

    const playersSnap = await get(ref(db, `adventurePlayers/${adventureId}`));
    const players = playersSnap.exists() ? playersSnap.val() : {};

    return {
      ...advMeta,
      players,
    };
  }

  async publishPlayerData(adventureId: string, player: AdventurePlayer): Promise<void> {
    AdventurePlayerSchema.parse(player);

    // Atualiza apenas o jogador específico (hot-path para RTDB sem sobrescrever outros)
    await set(ref(db, `adventurePlayers/${adventureId}/${player.userId}`), sanitizeForFirebase(player));

    // Log Event Sourcing no cold-path
    await this.logEvent(adventureId, player.userId, player.characterName, 'STATUS_UPDATE', {
      hp: `${player.statusSnapshot.hp.current}/${player.statusSnapshot.hp.max}`,
      ac: player.statusSnapshot.ac,
      conditions: player.statusSnapshot.conditions,
    });
  }

  subscribeToAdventure(adventureId: string, onUpdate: (adventure: Adventure) => void): () => void {
    const metaRef = ref(db, `adventureMeta/${adventureId}`);
    const playersRef = ref(db, `adventurePlayers/${adventureId}`);

    let currentMeta: Adventure | null = null;
    let currentPlayers: Record<string, AdventurePlayer> = {};

    const emitUpdate = () => {
      if (currentMeta) {
        const fullAdv = {
          ...currentMeta,
          players: currentPlayers,
        };
        // Validação Zod na fronteira de leitura (Read-Side CQRS)
        const parsed = AdventureSchema.safeParse(fullAdv);
        if (parsed.success) {
          onUpdate(parsed.data);
        } else {
          console.warn('[Zod Read-Side Validation Error]:', parsed.error);
          onUpdate(fullAdv);
        }
      }
    };

    const unsubMeta = onValue(metaRef, (snap) => {
      if (snap.exists()) {
        currentMeta = snap.val();
        emitUpdate();
      }
    });

    const unsubPlayers = onValue(playersRef, (snap) => {
      if (snap.exists()) {
        currentPlayers = snap.val();
      } else {
        currentPlayers = {};
      }
      emitUpdate();
    });

    return () => {
      unsubMeta();
      unsubPlayers();
    };
  }

  async leaveAdventure(adventureId: string, userId: string, characterName: string): Promise<void> {
    await remove(ref(db, `adventurePlayers/${adventureId}/${userId}`));
    await this.logEvent(adventureId, userId, characterName, 'PLAYER_LEFT', {});
  }

  async closeAdventure(adventureId: string, characterName: string = 'Mestre'): Promise<void> {
    await update(ref(db, `adventureMeta/${adventureId}`), { status: 'closed' });
    await this.logEvent(adventureId, 'master', characterName, 'ADVENTURE_CLOSED', {});
  }

  private async logEvent(
    adventureId: string,
    userId: string,
    characterName: string,
    eventType: AdventureEventType,
    payload: Record<string, unknown>
  ): Promise<void> {
    const eventId = crypto.randomUUID();
    const event: AdventureEvent = {
      id: eventId,
      adventureId,
      userId,
      characterName,
      eventType,
      payload,
      timestamp: new Date().toISOString(),
    };
    // Validação Zod para o Event Sourcing Log
    AdventureEventSchema.parse(event);
    await set(ref(db, `adventureEvents/${adventureId}/${eventId}`), sanitizeForFirebase(event));
  }
}

/**
 * Implementação Concreta 2: Mock Local / Simulação no AsyncStorage.
 * Usada quando as credenciais do Firebase ainda não foram configuradas ou para testes offline.
 * Demonstra a força da arquitetura em camadas e do padrão Adapter.
 */
export class MockAdventureService implements IAdventureService {
  private listeners: Record<string, ((adv: Adventure) => void)[]> = {};

  async getOrCreateUserId(): Promise<string> {
    let uid = await AsyncStorage.getItem(USER_ID_STORAGE_KEY);
    if (!uid) {
      uid = crypto.randomUUID();
      await AsyncStorage.setItem(USER_ID_STORAGE_KEY, uid);
    }
    return uid;
  }

  private async getMockAdventures(): Promise<Record<string, Adventure>> {
    const str = await AsyncStorage.getItem(MOCK_ADVENTURES_KEY);
    return str ? JSON.parse(str) : {};
  }

  private async saveMockAdventures(map: Record<string, Adventure>): Promise<void> {
    await AsyncStorage.setItem(MOCK_ADVENTURES_KEY, JSON.stringify(map));
  }

  private async getMockCodes(): Promise<Record<string, string>> {
    const str = await AsyncStorage.getItem(MOCK_CODES_KEY);
    return str ? JSON.parse(str) : {};
  }

  private async saveMockCodes(map: Record<string, string>): Promise<void> {
    await AsyncStorage.setItem(MOCK_CODES_KEY, JSON.stringify(map));
  }

  private notifyListeners(adventureId: string, adv: Adventure) {
    const cbs = this.listeners[adventureId] || [];
    cbs.forEach(cb => cb(adv));
  }

  async createAdventure(name: string, masterUserId: string): Promise<Adventure> {
    const id = crypto.randomUUID();
    const code = 'DND-' + Math.floor(100 + Math.random() * 899);
    const now = new Date().toISOString();

    const newAdventure: Adventure = {
      id,
      name: `${name} (Simulação Local)`,
      code,
      masterUserId,
      createdAt: now,
      status: 'active',
      players: {},
    };

    // Validação de fronteira Zod no MockService
    AdventureSchema.parse(newAdventure);

    const advMap = await this.getMockAdventures();
    advMap[id] = newAdventure;
    await this.saveMockAdventures(advMap);

    const codesMap = await this.getMockCodes();
    codesMap[code] = id;
    await this.saveMockCodes(codesMap);

    this.notifyListeners(id, newAdventure);
    return newAdventure;
  }

  async joinAdventure(code: string, player: AdventurePlayer): Promise<Adventure> {
    // Validação de fronteira Zod ao entrar
    AdventurePlayerSchema.parse(player);

    const cleanCode = code.trim().toUpperCase();
    const codesMap = await this.getMockCodes();
    let advId = codesMap[cleanCode];

    if (!advId) {
      // Em modo de simulação local sem Firebase, se o usuário testar em outro aparelho ou aba
      // que não possui o código no seu AsyncStorage local, nós auto-criamos a sala na memória
      // para permitir que o teste do fluxo de UI e CQRS aconteça sem bloqueios!
      advId = crypto.randomUUID();
      codesMap[cleanCode] = advId;
      await this.saveMockCodes(codesMap);

      const now = new Date().toISOString();
      const newAdv: Adventure = {
        id: advId,
        name: `Campanha Mestre (${cleanCode})`,
        code: cleanCode,
        masterUserId: 'simulated-master-id',
        createdAt: now,
        status: 'active',
        players: {},
      };
      AdventureSchema.parse(newAdv);
      const advMap = await this.getMockAdventures();
      advMap[advId] = newAdv;
      await this.saveMockAdventures(advMap);
    }

    const advMap = await this.getMockAdventures();
    const adv = advMap[advId];
    if (!adv || adv.status === 'closed') {
      throw new Error('Aventura não disponível ou encerrada.');
    }

    if (!adv.players) adv.players = {};
    adv.players[player.userId] = player;

    await this.saveMockAdventures(advMap);
    this.notifyListeners(advId, adv);

    return adv;
  }

  async rejoinAsMaster(code: string): Promise<Adventure> {
    const cleanCode = code.trim().toUpperCase();
    const codesMap = await this.getMockCodes();
    let advId = codesMap[cleanCode];

    const advMap = await this.getMockAdventures();
    if (!advId || !advMap[advId] || advMap[advId].status === 'closed') {
      throw new Error(`Sala de simulação com código "${cleanCode}" não encontrada ou encerrada.`);
    }

    return advMap[advId];
  }

  async publishPlayerData(adventureId: string, player: AdventurePlayer): Promise<void> {
    // Validação de fronteira Zod para Write-Side CQRS
    AdventurePlayerSchema.parse(player);

    const advMap = await this.getMockAdventures();
    const adv = advMap[adventureId];
    if (adv) {
      if (!adv.players) adv.players = {};
      adv.players[player.userId] = player;
      await this.saveMockAdventures(advMap);
      this.notifyListeners(adventureId, adv);
    }
  }

  subscribeToAdventure(adventureId: string, onUpdate: (adventure: Adventure) => void): () => void {
    if (!this.listeners[adventureId]) this.listeners[adventureId] = [];
    this.listeners[adventureId].push(onUpdate);

    // Emite estado atual imediatamente
    this.getMockAdventures().then(map => {
      if (map[adventureId]) onUpdate(map[adventureId]);
    });

    return () => {
      this.listeners[adventureId] = (this.listeners[adventureId] || []).filter(cb => cb !== onUpdate);
    };
  }

  async leaveAdventure(adventureId: string, userId: string, _characterName: string): Promise<void> {
    const advMap = await this.getMockAdventures();
    const adv = advMap[adventureId];
    if (adv && adv.players && adv.players[userId]) {
      delete adv.players[userId];
      await this.saveMockAdventures(advMap);
      this.notifyListeners(adventureId, adv);
    }
  }

  async closeAdventure(adventureId: string, _characterName?: string): Promise<void> {
    const advMap = await this.getMockAdventures();
    const adv = advMap[adventureId];
    if (adv) {
      adv.status = 'closed';
      await this.saveMockAdventures(advMap);
      this.notifyListeners(adventureId, adv);
    }
  }
}

/**
 * Instância exportada do serviço de Aventura.
 * Seleciona automaticamente o Mock caso a API Key seja o placeholder de demonstração,
 * ou o Firebase real se as credenciais tiverem sido configuradas.
 */
export const AdventureService: IAdventureService = IS_DUMMY_KEY
  ? new MockAdventureService()
  : new FirebaseAdventureService();
