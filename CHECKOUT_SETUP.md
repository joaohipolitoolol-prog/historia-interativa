# Configuração do Order Bump — Checkout

O order bump **não aparece na landing page**. Configure apenas **um** bump no checkout externo.

## Produto

| Campo | Valor |
|-------|-------|
| Nome | Pack de Slides de História |
| Preço | R$ 9,90 |
| Formato | PDF para projetar |
| Editável | Não afirmar sem confirmação |
| Quantidade de slides | Não citar sem confirmação |

## Descrição

Apresentações prontas para projetar e utilizar como apoio nas explicações, sem montar cada slide do zero.

## Texto do checkbox

> Sim, quero adicionar o Pack de Slides de História por R$ 9,90 e receber apresentações prontas para minhas aulas.

## Compatibilidade

- Compatível com Essencial e Premium
- Opcional (nunca obrigatório)

## Config no código

`src/config/offerConfig.ts`:

- `ORDER_BUMP_NAME`
- `ORDER_BUMP_PRICE`
- `ORDER_BUMP_FORMAT`
