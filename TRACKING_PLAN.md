# Plano de Tracking — História Interativa

## Função central

`trackEvent(eventName, properties)` em `src/lib/tracking.ts`

## Eventos

| Evento | Quando |
|---|---|
| PageViewed | Carregamento da landing |
| HeroViewed | Hero montado |
| PrimaryCTAViewed | CTA hero visível |
| PrimaryCTAClicked | Clique em qualquer CTA principal |
| MechanismViewed | Seção Sistema Aula Pronta |
| ProductPreviewViewed | Galeria de prévias |
| BonusViewed | Seção de bônus |
| OfferViewed | Bloco de oferta |
| CheckoutClicked | Clique para checkout |
| FAQOpened | Abertura de pergunta |
| GuaranteeViewed | Seção garantia |
| StickyCTAViewed | Sticky aparece |
| StickyCTAClicked | Clique no sticky |
| SupportClicked | Contato/suporte |
| Page75Viewed | 75% de scroll |
| PageCompleted | ~95% de scroll |

## Regras

- **Nunca** disparar `Purchase` na landing
- Meta Pixel e GA só carregam se IDs estiverem preenchidos
- Página funciona sem pixel/analytics
- Checkout recebe: UTMs + `page_variant` + `cta_position` + `device_type`

## Configuração

Em `src/config/offerConfig.ts`:

```ts
META_PIXEL_ID: 'SEU_PIXEL'
GA_MEASUREMENT_ID: 'G-XXXX'
```
