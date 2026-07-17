# Arquitetura da oferta — Aula Viva História

```
Anúncio
  ↓
Landing (Essencial R$10 + Premium R$29,90)
  ↓
Clique Essencial → Modal Plus (R$19,90)
  ├─ Aceitar → PLUS_CHECKOUT_URL
  └─ Recusar → ESSENTIAL_CHECKOUT_URL
Clique Premium → PREMIUM_CHECKOUT_URL
  ↓
Checkout + 1 order bump (Pack de Slides R$9,90)
  ↓
Página de obrigado
```

## Planos

| Plano | Preço | Onde aparece | Checkout |
|-------|-------|--------------|----------|
| Essencial | R$ 10,00 | Card na LP | Após recusar Plus |
| Plus | R$ 19,90 | Só no modal | Aceitar Plus |
| Premium | R$ 29,90 | Card na LP | Direto |

## Regras

- Não mostrar Plus como terceiro card.
- Recusa do Plus deve ser visível e livre.
- Preservar UTMs em todos os checkouts.
- Garantia: 30 dias.
- Não disparar Purchase na LP.

## Config central

`src/config/offerConfig.ts` — URLs, preços, flags e copy.
