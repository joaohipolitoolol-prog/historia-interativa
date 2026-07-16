# Tracking Plan (atualizado — dois planos)

## Eventos novos

| Evento | Quando |
|---|---|
| PlansViewed | Seção `#planos` visível |
| EssentialPlanViewed | Card Essencial visível |
| PremiumPlanViewed | Card Premium visível |
| PlanComparisonViewed | Comparativo visível |
| PremiumBonusesViewed | Extras Premium visíveis |
| EssentialCheckoutClicked | Clique checkout Essencial |
| PremiumCheckoutClicked | Clique checkout Premium |
| StickyPlanSelectorClicked | Sticky “Escolher meu plano” |

## Params no checkout

`buildCheckoutUrl(plan, position)` adiciona:

- `selected_plan` = `essential` | `premium`
- `cta_position`
- `page_variant`
- `device_type`
- UTMs + fbclid/gclid

## Não disparar

- `Purchase` na landing
- Dados pessoais
