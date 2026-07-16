import { Link } from 'react-router-dom'
import { offerConfig } from '@/config/offerConfig'
import { Footer } from '@/components/layout/Footer'
import { OfferBar } from '@/components/layout/OfferBar'

export function Termos() {
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
          Termos de uso
        </h1>
        <p className="mt-2 text-[15px] text-muted">
          Última atualização: {offerConfig.COPYRIGHT_YEAR}
        </p>

        <div className="prose-legal mt-8 space-y-6 text-[16px] leading-relaxed text-ink">
          <section>
            <h2 className="text-[20px] font-extrabold text-navy">1. Objeto</h2>
            <p className="mt-2 text-muted">
              Estes termos regem o uso do produto digital{' '}
              {offerConfig.PRODUCT_NAME}, uma biblioteca de materiais educativos
              de História destinados a professores e educadores.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              2. Produto digital
            </h2>
            <p className="mt-2 text-muted">
              O {offerConfig.PRODUCT_NAME} é um produto digital. Nenhum material
              físico será enviado. O acesso é liberado após a confirmação do
              pagamento, conforme a plataforma utilizada.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              3. Licença de uso
            </h2>
            <p className="mt-2 text-muted">
              A compra concede ao comprador o direito de utilizar os materiais
              em suas próprias turmas e atividades educativas. É proibido
              revender, redistribuir, publicar ou disponibilizar os arquivos
              publicamente, no todo ou em parte, sem autorização.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">
              4. Responsabilidade pedagógica
            </h2>
            <p className="mt-2 text-muted">
              O material é de apoio ao planejamento e à aplicação de aulas. O
              professor permanece responsável por adaptar conteúdos à realidade
              da turma, às diretrizes da escola e ao planejamento pedagógico.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">5. Garantia</h2>
            <p className="mt-2 text-muted">
              O comprador poderá solicitar reembolso dentro do prazo de{' '}
              {offerConfig.GUARANTEE_DAYS} dias, conforme as regras da plataforma
              de pagamento utilizada na compra.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-extrabold text-navy">6. Contato</h2>
            <p className="mt-2 text-muted">
              Dúvidas sobre estes termos podem ser enviadas pela página de{' '}
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
