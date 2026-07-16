# História Interativa — Landing Page

Landing page de conversão para o produto digital **História Interativa** (Sistema Aula Pronta).

> Você não está vendendo 500 PDFs.  
> Está vendendo o alívio de não precisar preparar cada aula de História do zero.

## Início rápido

```bash
npm install
npm run dev
```

## Configuração central

Edite **apenas** `src/config/offerConfig.ts` para:

- Preço e preço âncora
- Checkout
- Pixel / Analytics
- Imagens
- Flags (prova social, autor, sticky, countdown)
- Variante da página
- Forçar A/B de headline/CTA

## Como trocar o essencial

| Ação | Onde |
|---|---|
| Preço | `PRODUCT_PRICE` / `ORIGINAL_PRICE` |
| Checkout | `CHECKOUT_URL` |
| Imagens | `public/images/` + `PRODUCT_PREVIEW_IMAGES` |
| Depoimentos | `SHOW_SOCIAL_PROOF=true` + `TESTIMONIALS` |
| Autor | `SHOW_AUTHOR_SECTION=true` + `AUTHOR` |
| Dois planos | `OFFER_VARIANT='two_plans'` |
| Headline | `FORCE_HEADLINE_VARIANT` ou `?headline=A` |
| Pixel/GA | `META_PIXEL_ID` / `GA_MEASUREMENT_ID` |
| Página curta | `OFFER_VARIANT='short_page'` ou `?page_variant=short_page` |

## Documentação

- `LANDING_PAGE_AUDIT.md`
- `OFFER_STRATEGY.md`
- `COPY_STRUCTURE.md`
- `DESIGN_SYSTEM.md`
- `TRACKING_PLAN.md`
- `AB_TEST_PLAN.md`
- `QA_REPORT.md`
- `DEPLOYMENT.md`

## Rotas

- `/` — Landing
- `/termos`
- `/privacidade`
- `/contato`
