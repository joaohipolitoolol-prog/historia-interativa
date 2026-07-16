# Resumo Final — Landing História Interativa

## 1. O que existia no projeto

Pasta vazia. Nenhum código, imagem ou integração prévia.

## 2. Problemas encontrados

Sem oferta, sem checkout, sem tracking, sem páginas legais, sem prova visual.

## 3. O que foi mantido

Nada — projeto criado do zero.

## 4. O que foi removido

Scaffold genérico do Vite (App.css, logos React/Vite).

## 5. O que foi reconstruído

Landing completa de conversão com posicionamento **Sistema Aula Pronta**, mobile-first, ética (sem prova social inventada), configuração central e documentação.

## 6. Estrutura dos componentes

```
src/
  config/offerConfig.ts          ← edite quase tudo aqui
  lib/checkout.ts                ← UTMs + buildCheckoutUrl()
  lib/tracking.ts                ← Meta/GA + trackEvent()
  lib/abTest.ts                  ← headline/CTA/página
  hooks/useABTest.ts
  hooks/useInViewTrack.ts
  components/
    layout/  OfferBar, StickyCTA, Footer, ScrollToTop
    ui/      Button, Section, Accordion, Lightbox
    sections/ Hero, Problem, Mechanism, ProductDemo,
              ActivityTypes, BNCC, WhatsIncluded, Bonuses,
              Comparison, Access, ForWhom, Offer, Guarantee,
              SocialProof, Author, FAQ, FinalCTA
  pages/ LandingPage, Termos, Privacidade, Contato
```

## 7. Como trocar o preço

`src/config/offerConfig.ts` → `PRODUCT_PRICE` e `ORIGINAL_PRICE`

## 8. Como trocar o checkout

`CHECKOUT_URL = 'https://seu-checkout.com/...'`

## 9. Como trocar imagens

1. Coloque arquivos em `public/images/`
2. Atualize `PRODUCT_PREVIEW_IMAGES` e defina `placeholder: false`
3. Troque `OG_IMAGE` por foto horizontal real

## 10. Como inserir depoimentos reais

1. `SHOW_SOCIAL_PROOF = true`
2. Preencha `TESTIMONIALS` com nome, estado, segmento, comentário autorizado

## 11. Como ativar a seção do autor

1. `SHOW_AUTHOR_SECTION = true`
2. Preencha `AUTHOR` com dados reais (nunca inventar)

## 12. Como ativar dois planos

`OFFER_VARIANT = 'two_plans'`  
e configure `PLANS[].checkoutUrl`

## 13. Como trocar a headline

- `FORCE_HEADLINE_VARIANT = 'A' | 'B' | 'C'`
- ou `?headline=A` na URL

## 14. Como configurar Pixel e Analytics

```ts
META_PIXEL_ID: '123456789'
GA_MEASUREMENT_ID: 'G-XXXXXXX'
```

Vazio = página funciona sem rastreamento.

## 15. Como selecionar uma variante

```
/?headline=A&cta=B&page_variant=short_page
```

Persistido em `localStorage` na sessão.

## 16. Como publicar

```bash
npm install
npm run build
```

Publique a pasta `dist/` (Vercel/Netlify/Cloudflare).  
Detalhes em `DEPLOYMENT.md`.

## 17. Como testar o fluxo

1. `npm run dev`
2. Abrir com UTMs: `?utm_source=facebook&utm_medium=paid&fbclid=test`
3. Clicar CTA → em DEV, alerta se checkout vazio
4. Testar `/termos` `/privacidade` `/contato`
5. Scroll → sticky → fechar sticky
6. FAQ accordion
7. `?page_variant=short_page`

## 18. Limitações atuais

- Checkout ainda não configurado
- Prévias são placeholders (honestos)
- OG image placeholder
- E-mail de suporte genérico
- Sem depoimentos/autor reais (de propósito)

---

**Ideia que comanda o projeto:**  
Você não está vendendo 500 PDFs. Está vendendo o alívio de não precisar preparar cada aula de História do zero.
