import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { buildWhatsAppUrl } from '@/lib/checkout'
import { initAnalytics, trackEvent } from '@/lib/tracking'

export function Obrigado() {
  const [params] = useSearchParams()
  const plan = params.get('plan')

  const planLabel = useMemo(() => {
    if (plan === 'essential') return `${offerConfig.PRODUCT_NAME} Essencial`
    if (plan === 'premium') return `${offerConfig.PRODUCT_NAME} Premium`
    return offerConfig.PRODUCT_NAME
  }, [plan])

  const planKey =
    plan === 'essential' || plan === 'premium' ? plan : 'unknown'

  useEffect(() => {
    initAnalytics()
    // noindex for thank-you page
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex,nofollow')

    trackEvent('ThankYouPageViewed', {
      selected_plan: planKey,
      page: 'obrigado',
    })
  }, [planKey])

  const whatsappHref = buildWhatsAppUrl()

  const openWhatsApp = () => {
    const search = new URLSearchParams(window.location.search)
    trackEvent('WhatsAppSupportClicked', {
      page: 'obrigado',
      selected_plan: planKey,
      utm_source: search.get('utm_source') || undefined,
      utm_campaign: search.get('utm_campaign') || undefined,
      timestamp: Date.now(),
    })
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-border bg-white">
        <div className="container-page flex items-center justify-between py-4">
          <BrandLogo className="h-9 w-auto" />
          <Link to="/" className="text-[14px] font-bold text-orange hover:underline">
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container-page py-10 sm:py-14 max-w-2xl">
        <div className="rounded-[28px] border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)] text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white text-[28px] font-extrabold">
            ✓
          </div>
          <h1 className="mt-4 text-[28px] sm:text-[34px] font-extrabold text-navy">
            Compra confirmada!
          </h1>
          <p className="mt-2 text-[15px] font-semibold text-navy">
            {plan === 'essential' || plan === 'premium'
              ? `Plano adquirido: ${planLabel}`
              : `Produto adquirido: ${planLabel}`}
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Agora fale com nosso suporte para receber ajuda com seu acesso ao{' '}
            {offerConfig.PRODUCT_NAME}.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Verifique também o e-mail utilizado na compra, incluindo as pastas de
            spam, promoções e lixo eletrônico.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Caso precise de ajuda para encontrar ou acessar o produto, clique no
            botão abaixo e envie a mensagem pronta pelo WhatsApp.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openWhatsApp}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-green px-5 py-3.5 text-[15px] sm:text-[16px] font-bold text-white shadow-[0_12px_28px_rgba(13,174,120,0.35)] hover:brightness-105"
          >
            FALAR COM O SUPORTE NO WHATSAPP
          </a>
          <p className="mt-2.5 text-[13px] text-muted">
            A mensagem já estará preenchida. Basta tocar em enviar.
          </p>
        </div>

        <div className="mt-6 rounded-[24px] border border-border bg-white p-5 sm:p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-[18px] font-extrabold text-navy">Próximos passos</h2>
          <ol className="mt-4 space-y-4">
            <li>
              <p className="text-[15px] font-bold text-navy">1. Confira seu e-mail</p>
              <p className="mt-1 text-[14px] text-muted">
                Procure pela confirmação da compra e pelos dados de acesso.
              </p>
            </li>
            <li>
              <p className="text-[15px] font-bold text-navy">2. Fale com o suporte</p>
              <p className="mt-1 text-[14px] text-muted">
                Caso não encontre o acesso, envie a mensagem pelo WhatsApp.
              </p>
            </li>
            <li>
              <p className="text-[15px] font-bold text-navy">
                3. Comece pelo tema da próxima aula
              </p>
              <p className="mt-1 text-[14px] text-muted">
                Assim que entrar, escolha o assunto e abra sua primeira
                atividade.
              </p>
            </li>
          </ol>
          <p className="mt-5 rounded-xl bg-cream px-4 py-3 text-[14px] text-muted">
            O atendimento pode não ser imediato. Sua mensagem será respondida
            assim que possível.
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-[13px] text-muted">
        <p>{offerConfig.LEGAL_DISCLAIMER}</p>
        <p className="mt-2">
          © {offerConfig.COPYRIGHT_YEAR} {offerConfig.BRAND_NAME}
        </p>
      </footer>
    </div>
  )
}
