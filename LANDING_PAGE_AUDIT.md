# Landing Page Audit — História Interativa

## 1. O que existia no projeto

O diretório `historia` estava **vazio**. Não havia código, imagens, integrações nem landing prévia.

## 2. Problemas encontrados (antes da reconstrução)

| Problema | Impacto |
|---|---|
| Sem projeto | Impossível publicar tráfego |
| Sem oferta centralizada | Risco de inconsistência de preço/copy |
| Sem checkout | Sem conversão |
| Sem tracking | Sem medição de anúncios |
| Sem páginas legais | Risco de confiança e compliance |
| Sem prova visual do produto | Oferta parece genérica |

## 3. O que foi mantido

Nada — o projeto foi criado do zero sobre Vite + React + TypeScript + Tailwind.

## 4. O que foi removido

Arquivos padrão do scaffold Vite que não serviam à oferta (`App.css`, assets genéricos do React).

## 5. O que foi reconstruído

Landing completa com:

- Posicionamento **Sistema Aula Pronta**
- Sequência narrativa completa (barra → hero → problema → mecanismo → prévias → tipos → BNCC → incluso → bônus → comparação → acesso → para quem → oferta → garantia → prova → FAQ → CTA → rodapé)
- Configuração central (`offerConfig.ts`)
- Checkout com UTMs
- Tracking Meta/GA seguro (não quebra sem IDs)
- A/B de headline e CTA
- Versões `single_offer`, `two_plans`, `short_page`, `long_page`
- Páginas `/termos`, `/privacidade`, `/contato`
- Sticky CTA dismissível após a primeira dobra
- Sem depoimentos inventados, sem autora fictícia, sem urgência falsa

## 6. Limitações atuais

1. **CHECKOUT_URL vazio** — configurar antes de anunciar.
2. **Prévias do produto são placeholders** — adicionar imagens reais em `public/images/`.
3. **OG image** — usar foto horizontal real do material (`og-image.webp`).
4. **E-mail de suporte** — atualizar `SUPPORT_EMAIL`.
5. **Sem prova social real** — seção de depoimentos desligada por padrão.
6. **Sem seção de autor** — desligada até existir pessoa real.
