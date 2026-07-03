# Plano de Implementação - D&D App

## Objetivo
Unificar o motor de regras através do `characterService.ts` e expandir as funcionalidades de combate.

## Fases do Projeto

### Fase 1: Unificação de Regras (Em andamento)
- **Refatoração da `CharacterCreationScreen.tsx`:**
  - Mover `getClassSkillRules` para `src/utils/dndRules.ts`.
  - Centralizar cálculos de `getMaxSpellLevel`, `calculateHP` e `calculateBaseAC` usando `CharacterService` ou `dndRules`.
  - Remover lógicas de cálculo manuais de todas as telas.
- **Consolidação de Perícias:** Garantir que a lógica de proficiência seja baseada puramente em `dndRules.ts`.

### Fase 2: Testes e Validação (Pausada)
- Implementar testes para garantir a precisão dos cálculos matemáticos.

### Fase 3: Expansão de Combate e Itens (Próxima)
- Implementar propriedades de itens mágicos avançados.

## Progresso Atual

### ✅ Concluído
- **Unificação de Regras (Parte 1):**
  - `characterService.ts` estabelecido como autoridade central para Modificadores de Atributo, Bônus de Proficiência e HP.
  - Implementação de `calculateBaseAC` e `calculateTotalAC`.
  - Refatoração da gestão de equipamentos em `DashboardScreen.tsx` para usar o cálculo centralizado de AC.
- **Correções de Bugs:**
  - Resolução de erros de compilação em `DashboardScreen.tsx`.
  - Correção de erros de sintaxe e tipagem.

### ⏳ Em Andamento
- **Fase 1 (Unificação de Regras):**
  - Refatoração completa da `CharacterCreationScreen.tsx` para usar o motor de regras centralizado.

## Decisões Importantes
- **Foco Atual:** Finalizar a Fase 1 para garantir que a criação de personagens seja consistente com o resto do app.
