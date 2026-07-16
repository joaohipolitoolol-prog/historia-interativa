# QA Report — Oferta dois planos

Data: 2026-07-16

## Critérios

| Critério | Status |
|---|---|
| Hero comunica a partir de R$ 10 | ✅ |
| Essencial = 500+ atividades (não amostra) | ✅ |
| Premium diferenciado (+ R$ 12,90) | ✅ |
| Sem plano intermediário | ✅ |
| Checkouts separados | ✅ (URLs a configurar) |
| UTMs preservadas | ✅ |
| Premium não obrigatório | ✅ |
| Extras Premium identificados | ✅ |
| Order bumps só documentados (fora da LP) | ✅ |
| Sem prova social inventada | ✅ |
| Sem contador/urgência falsa | ✅ |
| Build OK | ✅ |

## Bloqueadores para tráfego

1. `ESSENTIAL_CHECKOUT_URL`
2. `PREMIUM_CHECKOUT_URL`
3. Configurar 4 order bumps na Cakto
4. Pixel Meta (recomendado)
