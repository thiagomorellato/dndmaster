import { Character, HP, CustomResource, SpellSlot } from './character';

/**
 * Snapshot do estado mutável do personagem na aventura.
 * Representa uma visão materializada desnormalizada para consumo rápido do Mestre via CQRS Read-Side.
 */
export interface PlayerStatusSnapshot {
  hp: HP;
  ac: number;
  conditions: string[];
  customResources: CustomResource[];
  spellSlots: Record<string, SpellSlot>;
  updatedAt: string; // ISO 8601 timestamp
  lastRestAt?: string; // ISO 8601 timestamp do último descanso acionado pelo Mestre
  lastRestType?: 'SHORT_REST' | 'LONG_REST';
}

/**
 * Representação completa do jogador conectado a uma Aventura.
 * Combina metadados da sessão, o hot-path snapshot para renderização em tempo real
 * e o cold-path de dados completos para quando o Mestre inspeciona o personagem.
 */
export interface AdventurePlayer {
  userId: string; // Identificador do dispositivo/usuário (UUID)
  characterId: string;
  characterName: string;
  characterClass: string;
  characterLevel: number;
  joinedAt: string; // ISO 8601 timestamp
  lastSeen: string; // ISO 8601 timestamp
  statusSnapshot: PlayerStatusSnapshot;
  fullCharacterData: Omit<Character, 'journal'>; // Exclui o diário por privacidade/otimização
}

/**
 * Entidade raiz da Aventura (Documento NoSQL).
 * Gerenciada de forma flat no Firebase Realtime Database sob /adventureMeta/{id}
 * e /adventurePlayers/{id}/{userId}.
 */
export interface Adventure {
  id: string; // UUID
  name: string;
  code: string; // Código de lookup rápido (ex: DRG-42)
  masterUserId: string; // ID do criador/mestre
  createdAt: string; // ISO 8601 timestamp
  status: 'active' | 'closed';
  players?: Record<string, AdventurePlayer>; // Mapa de jogadores (opcional na leitura rasa)
}

/**
 * Tipos de eventos para o padrão Event Sourcing da camada de aventura.
 */
export type AdventureEventType =
  | 'PLAYER_JOINED'
  | 'PLAYER_LEFT'
  | 'STATUS_UPDATE'
  | 'ADVENTURE_CLOSED';

/**
 * Registro imutável de evento na Aventura (Append-Only Log).
 * Persistido em /adventureEvents/{adventureId}/{eventId}.
 */
export interface AdventureEvent {
  id: string; // UUID do evento
  adventureId: string;
  userId: string;
  characterName: string;
  eventType: AdventureEventType;
  payload: Record<string, unknown>; // Payload arbitrário tipado conforme o evento
  timestamp: string; // ISO 8601 timestamp
}
