# Plano de Testes A/B — História Interativa

## Persistência

Variantes ficam em `localStorage` e **não mudam durante a sessão**.

## Headline

| Variante | Texto |
|---|---|
| A | Nunca mais prepare uma aula de História do zero |
| B | Mais de 500 atividades de História prontas para sua próxima aula |
| C | Escolha o tema, imprima e aplique |

Forçar: `FORCE_HEADLINE_VARIANT` em `offerConfig.ts` ou `?headline=A`

## CTA

| Variante | Texto |
|---|---|
| A | QUERO MINHAS AULAS PRONTAS |
| B | QUERO ACESSAR AS 500 ATIVIDADES |
| C | QUERO ECONOMIZAR TEMPO |

Forçar: `FORCE_CTA_VARIANT` ou `?cta=B`

## Página

| Variante | Uso |
|---|---|
| single_offer | Padrão — uma oferta |
| two_plans | Dois planos (só se ativado) |
| short_page | Funil curto |
| long_page | Narrativa completa |

Forçar: `OFFER_VARIANT` ou `?page_variant=short_page`

## Exemplos de URL

```
/?headline=A&cta=A&page_variant=long_page
/?headline=B&cta=C&page_variant=short_page
/?page_variant=two_plans
```

## Métricas sugeridas

- CTR do CTA (PrimaryCTAClicked / PageViewed)
- Scroll 75% e conclusão
- Clique no sticky
- Conversão no checkout (fora da landing)
