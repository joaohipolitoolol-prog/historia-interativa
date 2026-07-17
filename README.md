# Aula Viva História — Landing Page

Landing de conversão para **Aula Viva História** (Sistema Aula Pronta).

> Mais de 500 atividades prontas para sua próxima aula.

## Início rápido

```bash
npm install
npm run dev
```

## Configuração central

Edite **apenas** `src/config/offerConfig.ts`:

| Campo | Uso |
|-------|-----|
| `ESSENTIAL_CHECKOUT_URL` | Checkout Essencial (após recusar Plus) |
| `PLUS_CHECKOUT_URL` | Checkout Plus (modal) |
| `PREMIUM_CHECKOUT_URL` | Checkout Premium (direto) |
| Preços / âncoras | `*_PRICE` / `*_REFERENCE_PRICE` |
| Pixel / GA | `META_PIXEL_ID` / `GA_MEASUREMENT_ID` |
| Flags | `SHOW_LAUNCH_BADGE`, `SHOW_DISCOUNT_PERCENTAGE`, `SHOW_COUNTDOWN` |

## Funil

```
LP (Essencial + Premium) → Modal Plus (só no Essencial) → Checkout + 1 bump → Obrigado
```

Detalhes: `OFFER_ARCHITECTURE.md`, `CHECKOUT_ORDER_BUMPS.md`, `AULA_VIVA_REPORT.md`.

## Brand assets

`public/brand/` · favicons em `public/` · OG em `public/images/og-image.png`
