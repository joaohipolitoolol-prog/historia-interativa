import { Link } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { Footer } from '@/components/layout/Footer'
import { OfferBar } from '@/components/layout/OfferBar'

export function Privacidade() {
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
          Política de privacidade
        </h1>
        <p className="mt-2 text-[15px] text-muted">
          Última atualização: {offerConfig.COPYRIGHT_YEAR}
        </p>

        <div className="mt-8 space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              1. Quais dados podem ser coletados
            </h2>
            <p className="mt-2 text-muted">
              Ao visitar esta página ou concluir uma compra, podem ser
              coletados dados como informações de navegação, parâmetros de
              campanha (UTM), identificadores de anúncios e dados fornecidos no
              checkout da plataforma de pagamento.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              2. Como usamos os dados
            </h2>
            <p className="mt-2 text-muted">
              Os dados são utilizados para operar a oferta, liberar acesso ao
              produto, prestar suporte, medir desempenho de campanhas e melhorar
              a experiência da página — sem venda de dados pessoais a terceiros
              para fins não relacionados à oferta.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              3. Cookies e rastreamento
            </h2>
            <p className="mt-2 text-muted">
              Esta página pode utilizar cookies e pixels de medição (como Meta
              Pixel e Google Analytics) quando configurados, para entender
              visitas e conversões. Você pode gerenciar cookies nas configurações
              do navegador.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              4. Plataformas de pagamento
            </h2>
            <p className="mt-2 text-muted">
              O processamento de pagamento e o armazenamento de dados de compra
              ocorrem na plataforma de checkout utilizada. Consulte também a
              política de privacidade dessa plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">5. Contato</h2>
            <p className="mt-2 text-muted">
              Para solicitações relacionadas a privacidade, utilize a página de{' '}
              <Link to="/contato" className="font-bold text-orange hover:underline">
                contato
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
