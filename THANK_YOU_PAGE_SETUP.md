# Página de obrigado — configuração

## Rotas

| Plano | URL relativa | URL absoluta (produção) |
|-------|--------------|-------------------------|
| Essencial | `/obrigado?plan=essential` | `https://historia-ashy-gamma.vercel.app/obrigado?plan=essential` |
| Premium | `/obrigado?plan=premium` | `https://historia-ashy-gamma.vercel.app/obrigado?plan=premium` |
| Genérico | `/obrigado` | `https://historia-ashy-gamma.vercel.app/obrigado` |

## No checkout externo

Configure o redirecionamento pós-pagamento:

1. Essencial → URL com `plan=essential`
2. Premium → URL com `plan=premium`

O parâmetro `plan` **apenas personaliza a interface**. Não valida pagamento.

## WhatsApp

Número: `447402867442`

Mensagem padrão em `offerConfig.WHATSAPP_MESSAGE`.

Função: `buildWhatsAppUrl()` em `src/lib/checkout.ts`.

## SEO

A página injeta `noindex,nofollow` e não deve rankear no Google.
