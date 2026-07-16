# A/B Test Plan (dois planos)

| Teste | Variante A | Variante B | Como forçar |
|---|---|---|---|
| 1 Headline | Do zero | A partir de R$ 10 | `?headline=A` / `?headline=B` |
| 2 Destaque | Premium destacado | — | `DEFAULT_PLAN_HIGHLIGHT` |
| 3 Ordem | Essencial → Premium | Premium → Essencial | `?plan_order=premium_first` |
| 4 Página | Completa | Curta | `?page_variant=short_two_plans` |

Persistência: `localStorage` (não troca na mesma sessão).

Uma variável por teste.
