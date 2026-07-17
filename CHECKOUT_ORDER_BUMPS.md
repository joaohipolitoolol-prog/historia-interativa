# Order bump — Aula Viva História

Configure **apenas um** order bump no checkout externo.

## Produto

| Campo | Valor |
|-------|-------|
| Nome | Pack de Slides de História |
| Preço | R$ 9,90 |
| Formato | PDF para projetar |
| Editável | Não (não afirmar editabilidade sem comprovação) |

## Texto do checkbox

> Sim, quero adicionar o Pack de Slides de História por R$ 9,90 e receber apresentações prontas para minhas aulas.

## Descrição

Apresentações prontas para projetar e utilizar como apoio nas explicações, sem montar cada slide do zero.

## Regras

- Não informar quantidade de slides sem confirmação.
- Se forem 150 slides confirmados, atualizar o nome para: **Pack com 150 Slides de História**.
- Não criar segundo order bump nesta oferta.
- O bump não aparece na landing page — só no checkout.

## Config

Valores em `src/config/offerConfig.ts`:

- `ORDER_BUMP_NAME`
- `ORDER_BUMP_PRICE`
- `ORDER_BUMP_FORMAT`
