# Relatório final — Aula Viva História

## Status

Landing rebranded e funil Essencial → Modal Plus → Premium implementados.

## Marca

- Nome: **Aula Viva** / produto **Aula Viva História**
- Mecanismo: Sistema Aula Pronta
- Assets: `public/brand/*`, favicons, `og-image.png`, `product-thumbnail.png`

## Oferta

- Essencial R$ 10 → abre modal Plus
- Plus R$ 19,90 → só no modal (+ R$ 9,90)
- Premium R$ 29,90 → checkout direto
- Garantia 30 dias
- 1 order bump documentado (Pack de Slides R$ 9,90)

## Estrutura da página

1. Barra superior  
2. Hero  
3. Problema + Sistema Aula Pronta  
4. Prévia visual  
5. Acervo Essencial  
6. Extras Premium  
7. Pricing (2 cards + comparação compacta)  
8. Garantia  
9. FAQ  
10. CTA final  

Removidos: tabela comparativa gigante, seções Problem/Mechanism/PlanComparison separadas.

## Pendências do operador

1. Preencher em `offerConfig.ts`:
   - `ESSENTIAL_CHECKOUT_URL`
   - `PLUS_CHECKOUT_URL`
   - `PREMIUM_CHECKOUT_URL`
2. Configurar o order bump único no checkout
3. (Opcional) `META_PIXEL_ID` / `GA_MEASUREMENT_ID`
4. Trocar e-mail de suporte se necessário

## Como testar local

```bash
npm run dev
```

Fluxos: Essencial → modal → aceitar/recusar; Premium → checkout; UTMs na URL.
