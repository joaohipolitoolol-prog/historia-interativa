import { useState } from 'react'
import { Link } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { KeywordsModal } from '@/components/ui/KeywordsModal'
import { SEO_KEYWORDS } from '@/data/seoKeywords'
import { trackEvent } from '@/lib/tracking'

export function Footer() {
  const [keywordsOpen, setKeywordsOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-border bg-navy text-white">
        <div className="container-page py-9">
          <div className="grid gap-7 md:grid-cols-[1.4fr_1fr]">
            <div>
              <BrandLogo variant="dark" className="h-9 w-auto" />
              <p className="mt-3 text-[16px] text-white/80">
                {offerConfig.PRODUCT_TAGLINE}
              </p>
              <p className="mt-3 text-[15px] text-white/50 max-w-xl leading-relaxed">
                {offerConfig.LEGAL_DISCLAIMER}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/50">
                Links
              </p>
              <nav className="mt-3 flex flex-col gap-2.5 text-[16px]">
                <Link className="text-white/85 hover:text-white" to="/termos">
                  Termos de uso
                </Link>
                <Link className="text-white/85 hover:text-white" to="/privacidade">
                  Política de privacidade
                </Link>
                <Link
                  className="text-white/85 hover:text-white"
                  to="/contato"
                  onClick={() => trackEvent('SupportClicked')}
                >
                  Suporte
                </Link>
                <Link className="text-white/85 hover:text-white" to="/contato">
                  Contato
                </Link>
                <button
                  type="button"
                  className="text-left text-white/85 hover:text-white"
                  onClick={() => {
                    setKeywordsOpen(true)
                    trackEvent('KeywordsModalOpened')
                  }}
                >
                  Palavras-chave ({SEO_KEYWORDS.length})
                </button>
              </nav>
            </div>
          </div>
          <div className="mt-7 border-t border-white/10 pt-4 text-[14px] text-white/45">
            <p>
              © {offerConfig.COPYRIGHT_YEAR} {offerConfig.BRAND_NAME}. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <KeywordsModal open={keywordsOpen} onClose={() => setKeywordsOpen(false)} />
    </>
  )
}
