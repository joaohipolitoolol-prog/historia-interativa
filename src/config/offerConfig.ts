/**
 * CONFIGURAÇÃO CENTRAL DA OFERTA
 * Edite este arquivo para alterar preço, checkout, pixel, variantes e textos-chave
 * sem precisar vasculhar componentes.
 */

export type OfferVariant = 'single_offer' | 'two_plans' | 'short_page' | 'long_page'
export type HeadlineVariant = 'A' | 'B' | 'C'
export type CtaVariant = 'A' | 'B' | 'C'

export const offerConfig = {
  // ——— Produto ———
  PRODUCT_NAME: 'História Interativa',
  PRODUCT_SUBTITLE: 'Sistema Aula Pronta',
  PRODUCT_PRICE: 'R$ 22,90',
  ORIGINAL_PRICE: 'R$ 97,00',
  NUMBER_OF_ACTIVITIES: '500+',
  GUARANTEE_DAYS: 7,

  // ——— URLs ———
  // Cole o link real do checkout (Hotmart, Kiwify, etc.)
  CHECKOUT_URL: '',
  SUPPORT_URL: '/contato',
  SUPPORT_EMAIL: 'suporte@historainterativa.com.br',
  TERMS_URL: '/termos',
  PRIVACY_URL: '/privacidade',
  CONTACT_URL: '/contato',

  // ——— Rastreamento (deixe vazio se ainda não tiver) ———
  META_PIXEL_ID: '',
  GA_MEASUREMENT_ID: '',

  // ——— Imagens ———
  PRODUCT_IMAGE: '/images/hero-product.webp',
  PRODUCT_PREVIEW_IMAGES: [
    {
      src: '/images/preview-01.webp',
      alt: 'Prévia de atividade sobre Brasil Colônia',
      caption: 'Atividade sobre Brasil Colônia',
      placeholder: false,
    },
    {
      src: '/images/preview-02.webp',
      alt: 'Linha do tempo histórica',
      caption: 'Linha do tempo histórica',
      placeholder: false,
    },
    {
      src: '/images/preview-03.webp',
      alt: 'Dinâmica para grupos',
      caption: 'Dinâmica para grupos',
      placeholder: false,
    },
    {
      src: '/images/preview-04.webp',
      alt: 'Atividade de interpretação',
      caption: 'Atividade de interpretação',
      placeholder: false,
    },
    {
      src: '/images/preview-05.webp',
      alt: 'Mapa para imprimir',
      caption: 'Mapa para imprimir',
      placeholder: false,
    },
    {
      src: '/images/preview-06.webp',
      alt: 'Exercício de revisão',
      caption: 'Exercício de revisão',
      placeholder: false,
    },
  ] as const,

  // Imagem horizontal para compartilhamento
  OG_IMAGE: '/images/og-image.webp',

  // ——— BNCC ———
  BNCC_ENABLED: true,
  // Use linguagem honesta: só diga "100% alinhado" se todos os materiais forem revisados
  BNCC_CLAIM: 'Organizado com base nas competências e habilidades da BNCC.',

  // ——— Flags de seção ———
  SHOW_SOCIAL_PROOF: false,
  SHOW_AUTHOR_SECTION: false,
  SHOW_COUNTDOWN: false,
  SHOW_STICKY_CTA: true,

  // ——— Variante da página ———
  // single_offer | two_plans | short_page | long_page
  OFFER_VARIANT: 'single_offer' as OfferVariant,

  // ——— A/B tests (persistidos em localStorage) ———
  // Deixe null para sorteio automático na primeira visita
  FORCE_HEADLINE_VARIANT: null as HeadlineVariant | null,
  FORCE_CTA_VARIANT: null as CtaVariant | null,

  // ——— Barra de oferta ———
  OFFER_BAR_TEXT: 'OFERTA DE LANÇAMENTO • ACESSO IMEDIATO',

  // ——— Copy de CTAs (variantes A/B/C) ———
  CTA_VARIANTS: {
    A: 'QUERO MINHAS AULAS PRONTAS',
    B: 'QUERO ACESSAR AS 500 ATIVIDADES',
    C: 'QUERO ECONOMIZAR TEMPO',
  } as const,

  HEADLINE_VARIANTS: {
    A: {
      before: 'Nunca mais prepare uma aula de História ',
      highlight: 'do zero',
      after: '',
    },
    B: {
      before: 'Mais de 500 atividades de História prontas para sua próxima aula',
      highlight: '',
      after: '',
    },
    C: {
      before: 'Escolha o tema, imprima e aplique',
      highlight: '',
      after: '',
    },
  } as const,

  // ——— Dois planos (só se OFFER_VARIANT === 'two_plans') ———
  PLANS: [
    {
      id: 'essencial',
      name: 'Essencial',
      price: 'R$ 22,90',
      originalPrice: 'R$ 97,00',
      checkoutUrl: '',
      features: [
        'Biblioteca com mais de 500 atividades',
        'Sistema Aula Pronta',
        'PDFs para imprimir ou projetar',
        'Organização por tema',
        'Apoio relacionado à BNCC',
        'Garantia de 7 dias',
      ],
      highlighted: false,
    },
    {
      id: 'completo',
      name: 'Completo',
      price: 'R$ 37,90',
      originalPrice: 'R$ 147,00',
      checkoutUrl: '',
      features: [
        'Tudo do Essencial',
        'Banco de avaliações',
        'Planos de aula',
        'Planejamento',
        'Linhas do tempo e mapas',
        'Guia de aulas participativas',
        'Garantia de 7 dias',
      ],
      highlighted: true,
    },
  ],

  // ——— Autor (só se SHOW_AUTHOR_SECTION === true) ———
  AUTHOR: {
    name: '',
    photo: '',
    experience: '',
    education: '',
    reason: '',
    profileUrl: '',
  },

  // ——— Depoimentos reais (só se SHOW_SOCIAL_PROOF === true) ———
  TESTIMONIALS: [] as Array<{
    name: string
    state: string
    segment: string
    comment: string
    photo?: string
    resultImage?: string
  }>,

  // ——— SEO ———
  SEO: {
    title: '500 Atividades de História Prontas | História Interativa',
    description:
      'Acesse mais de 500 atividades de História organizadas para imprimir ou projetar. Materiais para diferentes temas, turmas e momentos da aula.',
    ogTitle: 'Nunca mais prepare uma aula de História do zero',
    ogDescription:
      'Mais de 500 atividades organizadas e prontas para imprimir ou projetar.',
  },

  // ——— Legal ———
  COPYRIGHT_YEAR: new Date().getFullYear(),
  LEGAL_DISCLAIMER:
    'Este produto é um material educativo digital de apoio ao planejamento e à aplicação de aulas. Ele não substitui formação docente, planejamento pedagógico, orientação da escola ou análise das necessidades específicas de cada turma.',
} as const

export type OfferConfig = typeof offerConfig
