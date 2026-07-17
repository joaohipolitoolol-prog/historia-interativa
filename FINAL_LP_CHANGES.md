# Mudanças finais — Aula Viva História

## Oferta

- Essencial: **R$ 10,00**
- Premium: **R$ 22,90** (+ R$ 12,90)
- Plus removido (sem modal, sem 3º plano)
- Garantia: **30 dias**
- Sem vídeo

## Estrutura da LP

1. Barra superior (uma frase)
2. Hero
3. Prévia com 4 imagens + lightbox
4. Problema + Sistema Aula Pronta
5. Essencial
6. Premium
7. Planos (2 cards)
8. Garantia
9. FAQ
10. CTA final
11. Rodapé

## Como editar

| Ação | Arquivo / campo |
|------|-----------------|
| Preços | `offerConfig.ts` → `ESSENTIAL_PRICE`, `PREMIUM_PRICE`, `PRICE_DIFFERENCE` |
| Checkouts | `ESSENTIAL_CHECKOUT_URL`, `PREMIUM_CHECKOUT_URL` |
| 4 imagens | `PRODUCT_PREVIEW_IMAGES` |
| WhatsApp | `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE` |
| Pixel/GA | `META_PIXEL_ID`, `GA_MEASUREMENT_ID` |

## Pendências manuais

1. Colar URLs reais de checkout
2. Configurar order bump no checkout (`CHECKOUT_SETUP.md`)
3. Redirecionar pós-compra para `/obrigado?plan=...` (`THANK_YOU_PAGE_SETUP.md`)
4. (Opcional) pixels
