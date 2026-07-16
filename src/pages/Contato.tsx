import { Link } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { Footer } from '@/components/layout/Footer'
import { OfferBar } from '@/components/layout/OfferBar'
import { trackEvent } from '@/lib/tracking'

export function Contato() {
  return (
    <div className="min-h-screen bg-warm">
      <OfferBar />
      <main className="container-page py-12 max-w-3xl">
        <Link
          to="/"
          className="text-[15px] font-bold text-orange hover:underline"
        >
          ← Voltar à página inicial
        </Link>
        <h1 className="mt-6 text-[32px] sm:text-[40px] font-extrabold text-navy">
          Contato e suporte
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          Precisa de ajuda com acesso, garantia ou dúvidas sobre o{' '}
          {offerConfig.PRODUCT_NAME}? Entre em contato pelos canais abaixo.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-[18px] font-extrabold text-navy">Suporte</h2>
            <p className="mt-2 text-[15px] text-muted">
              Atualize este bloco com o e-mail ou canal real de suporte antes de
              publicar.
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${offerConfig.SUPPORT_EMAIL}`}
                className="font-bold text-orange hover:underline"
                onClick={() => trackEvent('SupportClicked')}
              >
                {offerConfig.SUPPORT_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-[13px] text-muted">
              Altere SUPPORT_EMAIL em src/config/offerConfig.ts antes de
              publicar.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-[18px] font-extrabold text-navy">
              Sobre o produto
            </h2>
            <p className="mt-2 text-[15px] text-muted">
              Produto digital. Acesso liberado após confirmação do pagamento.
              Garantia de {offerConfig.GUARANTEE_DAYS} dias conforme regras da
              plataforma de pagamento.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
