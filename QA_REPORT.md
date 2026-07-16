# QA Report — História Interativa

Data: 2026-07-16  
Build: `npm run build` ✅

## Testes executados

| Item | Status | Notas |
|---|---|---|
| Oferta clara em poucos segundos | ✅ | Headline A destaca “do zero” |
| Benefício = economia de esforço | ✅ | Sistema Aula Pronta no centro |
| Sistema Aula Pronta visível | ✅ | Hero + seção de 4 passos |
| Prévias reais | ⚠️ | Placeholders “ADICIONAR PRÉVIA REAL” |
| Preço fácil de achar | ✅ | Oferta + microtexto do hero |
| Um plano na versão padrão | ✅ | `single_offer` |
| Checkout configurado | ⚠️ | `CHECKOUT_URL` vazio — alerta em DEV |
| UTMs preservadas | ✅ | `buildCheckoutUrl()` testado |
| Sem depoimentos inventados | ✅ | Flag off |
| Sem autora fictícia | ✅ | Flag off |
| Sem urgência falsa | ✅ | Barra estática |
| Links legais | ✅ | `/termos` `/privacidade` `/contato` |
| Produto digital declarado | ✅ | Acesso + rodapé |
| Garantia clara | ✅ | 7 dias + regras da plataforma |
| Accordion acessível | ✅ | `aria-expanded` + `region` |
| Sticky CTA | ✅ | Aparece após passar o hero; dismissível |
| Overflow 390px | ✅ | `overflowX: false` |
| Página sem Pixel/GA | ✅ | Não quebra |
| short_page | ✅ | `?page_variant=short_page` |
| Headline/CTA A/B | ✅ | `?headline=A&cta=A` |
| Build produção | ✅ | Vite OK (~90kb gzip JS) |

## Viewports

| Viewport | Overflow | Observação |
|---|---|---|
| 390×844 (emulado) | ✅ sem overflow | Sticky validado via scroll programático |
| Desktop | ✅ | Layout 2 colunas no hero |

## Bloqueadores antes do tráfego pago

1. Colar `CHECKOUT_URL` real em `offerConfig.ts`
2. Atualizar `SUPPORT_EMAIL`
3. Subir prévias reais em `public/images/` e marcar `placeholder: false`
4. Trocar OG image por foto horizontal real do material
5. Configurar Pixel/GA se for medir ads
