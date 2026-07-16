/**
 * CONFIGURAÇÃO CENTRAL DA OFERTA — DOIS PLANOS
 * Edite este arquivo para preço, checkout, pixel e flags sem vasculhar componentes.
 */

export type OfferVariant =
  | 'two_plans'
  | 'single_essential'
  | 'single_premium'
  | 'short_two_plans'
  | 'long_two_plans'

export type PlanId = 'essential' | 'premium'
export type HeadlineVariant = 'A' | 'B' | 'C'
export type PlanOrder = 'essential_first' | 'premium_first'
export type DefaultPlanHighlight = 'essential' | 'premium'

export const offerConfig = {
  // ——— Produto ———
  PRODUCT_NAME: 'História Interativa',
  PRODUCT_MECHANISM: 'Sistema Aula Pronta',
  PRODUCT_SUBTITLE: 'Sistema Aula Pronta',
  NUMBER_OF_ACTIVITIES: '500+',
  GUARANTEE_DAYS: 7,

  // ——— Plano Essencial ———
  ESSENTIAL_PLAN_NAME: 'Essencial',
  ESSENTIAL_PRICE: 'R$ 10,00',
  ESSENTIAL_ORIGINAL_PRICE: 'R$ 47,00',
  ESSENTIAL_CHECKOUT_URL: '',

  // ——— Plano Premium ———
  PREMIUM_PLAN_NAME: 'Premium',
  PREMIUM_PRICE: 'R$ 22,90',
  PREMIUM_ORIGINAL_PRICE: 'R$ 147,00',
  PREMIUM_CHECKOUT_URL: '',
  PREMIUM_PRICE_DIFFERENCE: 'R$ 12,90',
  PREMIUM_LIFETIME_ACCESS: true,
  PREMIUM_FUTURE_UPDATES: true,

  // ——— Compatibilidade (preço de entrada da oferta) ———
  ENTRY_PRICE: 'R$ 10',
  ENTRY_PRICE_FULL: 'R$ 10,00',

  // ——— URLs ———
  SUPPORT_URL: '/contato',
  SUPPORT_EMAIL: 'suporte@historainterativa.com.br',
  TERMS_URL: '/termos',
  PRIVACY_URL: '/privacidade',
  CONTACT_URL: '/contato',

  // ——— Rastreamento ———
  META_PIXEL_ID: '',
  GA_MEASUREMENT_ID: '',

  // ——— Imagens ———
  PRODUCT_IMAGE: '/images/hero-bundle.webp',
  PREMIUM_IMAGE: '/images/premium-bundle.webp',
  PREVIEWS_GRID_IMAGE: '/images/previews-grid.webp',
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

  OG_IMAGE: '/images/og-image.webp',

  // ——— BNCC ———
  BNCC_ENABLED: true,
  BNCC_CLAIM: 'Organizado com base na BNCC',

  // ——— Flags ———
  SHOW_SOCIAL_PROOF: false,
  SHOW_AUTHOR_SECTION: false,
  SHOW_COUNTDOWN: false,
  SHOW_TOP_BAR: true,
  SHOW_STICKY_CTA: true,

  // ——— Variante ———
  OFFER_VARIANT: 'two_plans' as OfferVariant,
  DEFAULT_PLAN_HIGHLIGHT: 'premium' as DefaultPlanHighlight,
  PLAN_ORDER: 'essential_first' as PlanOrder,

  // ——— A/B ———
  FORCE_HEADLINE_VARIANT: null as HeadlineVariant | null,
  // null = usa headline A (do zero). B = preço no hero
  FORCE_HERO_PRICE_HEADLINE: null as boolean | null,

  OFFER_BAR_TEXT:
    'OFERTA DE LANÇAMENTO • MAIS DE 500 ATIVIDADES A PARTIR DE R$ 10',

  HEADLINE_VARIANTS: {
    A: {
      before: 'Nunca mais prepare uma aula de História ',
      highlight: 'do zero',
      after: '',
    },
    B: {
      before: 'Mais de 500 atividades a partir de ',
      highlight: 'R$ 10',
      after: '',
    },
    C: {
      before: 'Escolha o tema, imprima e aplique',
      highlight: '',
      after: '',
    },
  } as const,

  ESSENTIAL_FEATURES: [
    'Mais de 500 atividades',
    'PDFs para imprimir',
    'Recursos para projetar',
    'Organização por tema',
    'Organização com base na BNCC',
    'Acesso digital',
    'Garantia de 7 dias',
  ] as const,

  PREMIUM_EXTRA_FEATURES: [
    'Tudo do Plano Essencial',
    '100 avaliações adicionais',
    'Planos de aula prontos',
    'Planejamento anual',
    'Coleção Premium de mapas e linhas do tempo',
    'Guia de aulas participativas',
  ] as const,

  PREMIUM_BONUSES: [
    {
      name: '100 Avaliações de História',
      description:
        'Avaliações, exercícios diagnósticos, atividades avaliativas e materiais de revisão.',
    },
    {
      name: 'Planos de Aula Prontos',
      description:
        'Modelos para organizar objetivos, conteúdo, aplicação e fechamento da aula.',
    },
    {
      name: 'Planejamento Anual',
      description:
        'Uma estrutura para distribuir temas e conteúdos ao longo do período letivo.',
    },
    {
      name: 'Linhas do Tempo e Mapas Premium',
      description:
        'Uma coleção adicional de recursos visuais para imprimir ou projetar.',
    },
    {
      name: 'Guia para Aulas Mais Participativas',
      description:
        'Sugestões práticas para utilizar perguntas, grupos, jogos e atividades durante as aulas.',
    },
  ] as const,

  AUTHOR: {
    name: '',
    photo: '',
    experience: '',
    education: '',
    reason: '',
    profileUrl: '',
  },

  TESTIMONIALS: [] as Array<{
    name: string
    state: string
    segment: string
    comment: string
    photo?: string
    resultImage?: string
  }>,

  SEO: {
    title: '500 Atividades de História a partir de R$ 10 | História Interativa',
    description:
      'Mais de 500 atividades de História prontas para imprimir ou projetar. Plano Essencial a partir de R$ 10 ou Premium completo por R$ 22,90.',
    ogTitle: 'Nunca mais prepare uma aula de História do zero',
    ogDescription:
      'Mais de 500 atividades organizadas a partir de R$ 10. Escolha o Essencial ou o Premium.',
  },

  COPYRIGHT_YEAR: new Date().getFullYear(),
  LEGAL_DISCLAIMER:
    'Este produto é um material educativo digital de apoio ao planejamento e à aplicação de aulas. Ele não substitui formação docente, planejamento pedagógico, orientação da escola ou análise das necessidades específicas de cada turma.',
} as const

export type OfferConfig = typeof offerConfig
