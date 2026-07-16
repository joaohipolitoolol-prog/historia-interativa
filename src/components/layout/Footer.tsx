import { Link } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { trackEvent } from '@/lib/tracking'

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[20px] font-extrabold font-[family-name:var(--font-display)]">
              {offerConfig.PRODUCT_NAME}
            </p>
            <p className="mt-2 text-[15px] text-white/70">
              {offerConfig.PRODUCT_SUBTITLE} — material educativo digital para
              professores de História.
            </p>
            <p className="mt-4 text-[14px] text-white/55 max-w-xl leading-relaxed">
              {offerConfig.LEGAL_DISCLAIMER}
            </p>
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/50">
              Links
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-[15px]">
              <Link className="text-white/80 hover:text-white" to="/termos">
                Termos de uso
              </Link>
              <Link className="text-white/80 hover:text-white" to="/privacidade">
                Política de privacidade
              </Link>
              <Link
                className="text-white/80 hover:text-white"
                to="/contato"
                onClick={() => trackEvent('SupportClicked')}
              >
                Contato e suporte
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-[13px] text-white/50 space-y-2">
          <p>Produto digital. Nenhum material físico será enviado.</p>
          <p>
            © {offerConfig.COPYRIGHT_YEAR} {offerConfig.PRODUCT_NAME}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
