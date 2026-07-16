# Arquitetura da Oferta — História Interativa

## Modelo comercial

```
Anúncio (R$ 10)
  → Landing com 2 planos
  → Checkout do plano escolhido
  → 4 order bumps (no checkout)
  → Página de obrigado
```

## Planos

| | Essencial | Premium |
|---|---|---|
| Preço | R$ 10,00 | R$ 22,90 |
| Âncora | R$ 47,00 | R$ 147,00 |
| Diferença | — | + R$ 12,90 |
| Entrega | 500+ atividades | Essencial + extras |

## Lógica

- R$ 10 conquista a compra impulsiva
- Premium aumenta ticket com clareza (+ R$ 12,90)
- Order bumps ficam **só no checkout** (não na LP)

## Variáveis-chave (`offerConfig.ts`)

- `ESSENTIAL_PRICE` / `PREMIUM_PRICE`
- `ESSENTIAL_CHECKOUT_URL` / `PREMIUM_CHECKOUT_URL`
- `PREMIUM_LIFETIME_ACCESS`
- `PREMIUM_FUTURE_UPDATES`
- `DEFAULT_PLAN_HIGHLIGHT`
- `PLAN_ORDER` (`essential_first` | `premium_first`)
- `OFFER_VARIANT` (padrão: `two_plans`)

## Como editar

1. **Preços** → `ESSENTIAL_PRICE`, `PREMIUM_PRICE`, `PREMIUM_PRICE_DIFFERENCE`
2. **Checkouts** → `ESSENTIAL_CHECKOUT_URL`, `PREMIUM_CHECKOUT_URL`
3. **Atualizações futuras** → `PREMIUM_FUTURE_UPDATES = true/false`
4. **Acesso vitalício** → `PREMIUM_LIFETIME_ACCESS = true/false`
5. **Itens dos planos** → `ESSENTIAL_FEATURES`, `PREMIUM_EXTRA_FEATURES`, `PREMIUM_BONUSES`
6. **Ordem dos cards** → `PLAN_ORDER` ou `?plan_order=premium_first`
7. **Prova social** → `SHOW_SOCIAL_PROOF = true` + `TESTIMONIALS`
8. **Order bumps** → configurar na Cakto; ver `CHECKOUT_ORDER_BUMPS.md`
9. **UTMs** → teste `?utm_source=facebook&utm_medium=paid&fbclid=test`
10. **Variante** → `?page_variant=short_two_plans&headline=B`
11. **Publicar** → `npm run build` → `dist/`
