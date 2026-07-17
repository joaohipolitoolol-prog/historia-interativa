import { useEffect } from 'react'
import { offerConfig } from '@/config/offerConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { buildWhatsAppUrl } from '@/lib/checkout'
import { initAnalytics, trackEvent } from '@/lib/tracking'

export function Obrigado() {
  useEffect(() => {
    initAnalytics()

    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex,nofollow')

    trackEvent('ThankYouPageViewed', { page: 'obrigado' })
  }, [])

  const whatsappHref = buildWhatsAppUrl()

  const openWhatsApp = () => {
    const search = new URLSearchParams(window.location.search)
    trackEvent('WhatsAppSupportClicked', {
      page: 'obrigado',
      utm_source: search.get('utm_source') || undefined,
      utm_campaign: search.get('utm_campaign') || undefined,
      timestamp: Date.now(),
    })
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <header className="border-b border-border bg-white">
        <div className="container-page flex justify-center py-5">
          <BrandLogo className="h-10 w-auto" />
        </div>
      </header>

      <main className="flex-1 container-page flex items-center justify-center py-10 sm:py-14">
        <div className="w-full max-w-md rounded-[28px] border border-border bg-white p-6 sm:p-8 shadow-[var(--shadow-lift)] text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white text-[28px] font-extrabold">
            ✓
          </div>

          <h1 className="mt-5 text-[28px] sm:text-[32px] font-extrabold text-navy">
            Compra confirmada!
          </h1>

          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Para receber as orientações do{' '}
            <span className="font-semibold text-navy">
              {offerConfig.PRODUCT_NAME}
            </span>
            , fale comigo no WhatsApp agora.
          </p>

          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            É por lá que eu te aviso sobre o acesso e os próximos passos.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openWhatsApp}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green px-5 py-4 text-[16px] font-bold text-white shadow-[0_12px_28px_rgba(13,174,120,0.35)] hover:brightness-105"
          >
            CONTINUAR NO WHATSAPP
          </a>

          <p className="mt-3 text-[14px] text-muted">
            A mensagem já vem pronta — é só tocar em enviar.
          </p>

          <p className="mt-6 rounded-xl bg-cream px-4 py-3 text-[14px] text-muted">
            Se não responderem na hora, aguarda um pouco. Sua mensagem será
            atendida assim que possível.
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-5 text-center text-[13px] text-muted">
        <p>
          © {offerConfig.COPYRIGHT_YEAR} {offerConfig.BRAND_NAME}
        </p>
      </footer>
    </div>
  )
}
