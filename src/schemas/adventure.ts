import { z } from 'zod';
import {
  HPSchema,
  CustomResourceSchema,
  SpellSlotSchema,
  CharacterSchema,
} from './character';

/**
 * Validação Zod para o Snapshot de Status.
 * Garante integridade estrutural e tipagem estrita na fronteira de dados (Boundary 2 & 3).
 */
export const PlayerStatusSnapshotSchema = z.object({
  hp: HPSchema,
  ac: z.number().int().min(0).max(40),
  conditions: z.array(z.string()).default([]),
  customResources: z.array(CustomResourceSchema).default([]),
  spellSlots: z.record(z.string(), SpellSlotSchema).default({}),
  updatedAt: z.string().datetime(),
  lastRestAt: z.string().datetime().optional(),
  lastRestType: z.enum(['SHORT_REST', 'LONG_REST']).optional(),
});

/**
 * Validação Zod para o jogador na Aventura.
 * Inclui validação do snapshot completo do personagem (omitindo o diário).
 */
export const AdventurePlayerSchema = z.object({
  userId: z.string().min(1),
  characterId: z.string().min(1),
  characterName: z.string().min(1),
  characterClass: z.string().min(1),
  characterLevel: z.number().int().min(1).max(20),
  joinedAt: z.string().datetime(),
  lastSeen: z.string().datetime(),
  statusSnapshot: PlayerStatusSnapshotSchema,
  fullCharacterData: CharacterSchema.omit({ journal: true }),
});

/**
 * Validação Zod para os metadados da Aventura (/adventureMeta).
 */
export const AdventureSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(60),
  code: z.string().min(4).max(15),
  masterUserId: z.string().min(1),
  createdAt: z.string().datetime(),
  status: z.enum(['active', 'closed']),
  players: z.record(z.string(), AdventurePlayerSchema).optional(),
});

/**
 * Validação Zod para os registros de Event Sourcing (/adventureEvents).
 */
export const AdventureEventSchema = z.object({
  id: z.string().min(1),
  adventureId: z.string().min(1),
  userId: z.string().min(1),
  characterName: z.string().min(1),
  eventType: z.enum(['PLAYER_JOINED', 'PLAYER_LEFT', 'STATUS_UPDATE', 'ADVENTURE_CLOSED']),
  payload: z.record(z.string(), z.unknown()),
  timestamp: z.string().datetime(),
});
