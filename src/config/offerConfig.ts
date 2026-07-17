/**
 * CONFIGURAÇÃO CENTRAL — Aula Viva História
 * Essencial R$10 | Plus R$19,90 (modal) | Premium R$29,90
 */

export type PlanId = 'essential' | 'plus' | 'premium'
export type HeadlineVariant = 'A' | 'B' | 'C'
export type OfferVariant = 'two_plans' | 'short_two_plans'

export const offerConfig = {
  // ——— Marca ———
  BRAND_NAME: 'Aula Viva',
  PRODUCT_NAME: 'Aula Viva História',
  PRODUCT_MECHANISM: 'Sistema Aula Pronta',
  PRODUCT_TAGLINE: 'Mais de 500 atividades prontas para sua próxima aula.',
  NUMBER_OF_ACTIVITIES: '500+',
  GUARANTEE_DAYS: 30,

  // ——— Essencial ———
  ESSENTIAL_PLAN_NAME: 'Essencial',
  ESSENTIAL_PRICE: 'R$ 10,00',
  ESSENTIAL_REFERENCE_PRICE: 'R$ 37,00',
  ESSENTIAL_CHECKOUT_URL: '',

  // ——— Plus (só no modal) ———
  PLUS_PLAN_NAME: 'Plus',
  PLUS_PRICE: 'R$ 19,90',
  PLUS_REFERENCE_PRICE: 'R$ 67,00',
  PLUS_CHECKOUT_URL: '',
  PLUS_PRICE_DIFFERENCE: 'R$ 9,90',

  // ——— Premium ———
  PREMIUM_PLAN_NAME: 'Premium',
  PREMIUM_PRICE: 'R$ 29,90',
  PREMIUM_REFERENCE_PRICE: 'R$ 97,00',
  PREMIUM_CHECKOUT_URL: '',
  PREMIUM_VS_ESSENTIAL_DIFF: 'R$ 19,90',
  PREMIUM_LIFETIME_ACCESS: true,
  PREMIUM_FUTURE_UPDATES: true,

  // ——— Entry ———
  ENTRY_PRICE: 'R$ 10',
  ENTRY_PRICE_FULL: 'R$ 10,00',

  // ——— Order bump (checkout externo) ———
  ORDER_BUMP_NAME: 'Pack de Slides de História',
  ORDER_BUMP_PRICE: 'R$ 9,90',
  ORDER_BUMP_FORMAT: 'PDF para projetar (não editável)',

  // ——— URLs ———
  SUPPORT_URL: '/contato',
  SUPPORT_EMAIL: 'suporte@aulaviva.com.br',
  TERMS_URL: '/termos',
  PRIVACY_URL: '/privacidade',
  CONTACT_URL: '/contato',

  // ——— Tracking ———
  META_PIXEL_ID: '',
  GA_MEASUREMENT_ID: '',

  // ——— Brand assets ———
  LOGO_HORIZONTAL: '/brand/logo-horizontal.svg',
  LOGO_HORIZONTAL_DARK: '/brand/logo-horizontal-dark.svg',
  BRAND_ICON: '/brand/brand-icon.svg',
  PRODUCT_IMAGE: '/images/hero-bundle.webp',
  PREMIUM_IMAGE: '/images/premium-bundle.webp',
  PREVIEWS_GRID_IMAGE: '/images/previews-grid.webp',
  OG_IMAGE: '/images/og-image.png',
  PRODUCT_THUMBNAIL: '/images/product-thumbnail.png',

  PRODUCT_PREVIEW_IMAGES: [
    {
      src: '/images/preview-01.webp',
      alt: 'Atividade de interpretação',
      caption: 'Atividade de interpretação',
      placeholder: false,
    },
    {
      src: '/images/preview-06.webp',
      alt: 'Exercício de revisão',
      caption: 'Exercício de revisão',
      placeholder: false,
    },
    {
      src: '/images/preview-02.webp',
      alt: 'Linha do tempo',
      caption: 'Linha do tempo',
      placeholder: false,
    },
    {
      src: '/images/preview-05.webp',
      alt: 'Mapa histórico',
      caption: 'Mapa histórico',
      placeholder: false,
    },
    {
      src: '/images/preview-03.webp',
      alt: 'Dinâmica em grupo',
      caption: 'Dinâmica em grupo',
      placeholder: false,
    },
    {
      src: '/images/preview-04.webp',
      alt: 'Material para projetar',
      caption: 'Material para projetar',
      placeholder: false,
    },
  ] as const,

  // ——— BNCC ———
  BNCC_ENABLED: true,
  BNCC_CLAIM: 'Organizado com base na BNCC',

  // ——— Flags ———
  SHOW_SOCIAL_PROOF: false,
  SHOW_AUTHOR_SECTION: false,
  SHOW_LAUNCH_BADGE: true,
  SHOW_DISCOUNT_PERCENTAGE: false,
  SHOW_COUNTDOWN: false,
  SHOW_TOP_BAR: true,
  SHOW_STICKY_CTA: true,
  LAUNCH_END_DATE: '',

  OFFER_VARIANT: 'two_plans' as OfferVariant,
  FORCE_HEADLINE_VARIANT: null as HeadlineVariant | null,

  OFFER_BAR_TEXT:
    'OFERTA DE LANÇAMENTO • MAIS DE 500 ATIVIDADES A PARTIR DE R$ 10',
  OFFER_BAR_TEXT_DISCOUNT:
    'OFERTA DE LANÇAMENTO • ATÉ 73% DE DESCONTO',

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
    'Mais de 500 atividades de História',
    'Materiais em PDF',
    'Atividades para imprimir',
    'Recursos para projetar',
    'Organização por tema e etapa',
    'Referências relacionadas à BNCC',
    'Acesso pelo celular ou computador',
    'Garantia de 30 dias',
  ] as const,

  PLUS_FEATURES: [
    'Tudo do Essencial',
    '100 avaliações de História',
    'Coleção de planos de aula prontos',
    'Planejamento anual',
  ] as const,

  PREMIUM_FEATURES: [
    'Tudo do Essencial',
    '100 avaliações de História',
    'Planos de aula prontos',
    'Planejamento anual',
    'Coleção Premium de linhas do tempo',
    'Coleção Premium de mapas históricos',
    'Guia para aulas mais participativas',
  ] as const,

  PREMIUM_BONUSES: [
    { name: '100 avaliações', description: 'Avaliações e revisões prontas.' },
    { name: 'Planos de aula', description: 'Modelos para organizar a aula.' },
    { name: 'Planejamento anual', description: 'Distribuição dos temas no ano.' },
    { name: 'Mapas e linhas do tempo', description: 'Coleção visual Premium.' },
    {
      name: 'Guia de aulas participativas',
      description: 'Sugestões práticas para a turma.',
    },
  ] as const,

  COMPACT_COMPARISON: [
    { label: '500+ atividades', essential: true, premium: true },
    { label: 'Imprimir e projetar', essential: true, premium: true },
    { label: '100 avaliações', essential: false, premium: true },
    { label: 'Planos de aula + planejamento', essential: false, premium: true },
    { label: 'Mapas e linhas do tempo Premium', essential: false, premium: true },
    { label: 'Guia de aulas participativas', essential: false, premium: true },
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
  }>,

  SEO: {
    title: 'Aula Viva História | Mais de 500 Atividades Prontas',
    description:
      'Acesse mais de 500 atividades de História prontas para imprimir ou projetar. Escolha o tema, abra o material e aplique.',
    ogTitle: 'Nunca mais prepare uma aula de História do zero',
    ogDescription: 'Mais de 500 atividades prontas, a partir de R$ 10.',
  },

  COPYRIGHT_YEAR: new Date().getFullYear(),
  LEGAL_DISCLAIMER:
    'Este produto é um material educativo digital de apoio ao planejamento e à aplicação de aulas. Ele não substitui formação docente, planejamento pedagógico, orientação da escola ou análise das necessidades específicas de cada turma.',
} as const

export type OfferConfig = typeof offerConfig
