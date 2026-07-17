# Tracking — Aula Viva História

Função: `trackEvent(eventName, properties)` em `src/lib/tracking.ts`.

## Eventos

| Evento | Onde |
|--------|------|
| PageViewed | Load da LP |
| HeroCTAClicked | CTA hero / final (scroll aos planos) |
| ProductPreviewViewed | Seção prévia em view |
| ProductPreviewOpened | Clique em imagem (`preview_name`) |
| MechanismViewed | Seção sistema |
| EssentialViewed | Bloco Essencial |
| PremiumViewed | Bloco Premium |
| PlansViewed | Cards de preço |
| EssentialCheckoutClicked | Botão Essencial |
| PremiumCheckoutClicked | Botão Premium |
| GuaranteeViewed | Garantia |
| FAQOpened | Accordion FAQ |
| StickyCTAClicked | Barra fixa |
| ThankYouPageViewed | `/obrigado` |
| WhatsAppSupportClicked | Botão WhatsApp |

## Regras

- Não disparar `Purchase` na landing
- Clique no checkout ≠ venda
- Não enviar dados pessoais
- UTMs preservadas via `buildCheckoutUrl`
