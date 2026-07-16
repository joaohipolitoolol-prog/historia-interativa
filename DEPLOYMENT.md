# Deploy — História Interativa

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

Saída em `dist/`.

## Publicação sugerida

### Vercel / Netlify / Cloudflare Pages

1. Conecte o repositório ou faça upload da pasta
2. Build command: `npm run build`
3. Output directory: `dist`
4. SPA fallback: redirecionar todas as rotas para `index.html`

#### Netlify (`public/_redirects`)

```
/*    /index.html   200
```

#### Vercel (`vercel.json`)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Configuração mínima antes do tráfego pago

1. `CHECKOUT_URL` em `src/config/offerConfig.ts`
2. `SUPPORT_EMAIL`
3. Imagens reais em `public/images/`
4. `META_PIXEL_ID` e/ou `GA_MEASUREMENT_ID`
5. Testar checkout com UTMs:

```
/?utm_source=facebook&utm_medium=paid&utm_campaign=aula_pronta&fbclid=test123
```

## Domínio

Aponte o domínio da campanha para o host estático. Use HTTPS.

## Checklist pós-publish

- [ ] Hero carrega rápido em 4G
- [ ] CTAs abrem checkout com UTMs
- [ ] /termos /privacidade /contato funcionam
- [ ] Sticky aparece após scroll
- [ ] Console sem erros
- [ ] OG preview no Facebook Sharing Debugger
