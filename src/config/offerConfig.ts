/**
 * CONFIGURAÇÃO CENTRAL — Aula Viva História
 * Essencial R$10 | Premium R$22,90 | Diferença R$12,90
 */

export type PlanId = 'essential' | 'premium'
export type HeadlineVariant = 'A' | 'B' | 'C'
export type OfferVariant = 'two_plans'

export const offerConfig = {
  BRAND_NAME: 'Aula Viva',
  PRODUCT_NAME: 'Aula Viva História',
  PRODUCT_MECHANISM: 'Sistema Aula Pronta',
  PRODUCT_TAGLINE: 'Mais de 500 atividades prontas para professores de História.',
  NUMBER_OF_ACTIVITIES: '500+',
  GUARANTEE_DAYS: 30,
  BNCC_CLAIM: 'Organizado com base na BNCC',

  ESSENTIAL_PLAN_NAME: 'Essencial',
  ESSENTIAL_PRICE: 'R$ 10,00',
  ESSENTIAL_CHECKOUT_URL: 'https://pay.cakto.com.br/3choscs_965728',

  PREMIUM_PLAN_NAME: 'Premium',
  PREMIUM_PRICE: 'R$ 22,90',
  PREMIUM_CHECKOUT_URL: 'https://pay.cakto.com.br/rq2ivin',

  PRICE_DIFFERENCE: 'R$ 12,90',
  ENTRY_PRICE: 'R$ 10',
  ENTRY_PRICE_FULL: 'R$ 10,00',

  ORDER_BUMP_NAME: 'Pack de Slides de História',
  ORDER_BUMP_PRICE: 'R$ 9,90',
  ORDER_BUMP_FORMAT: 'PDF para projetar (não afirmar editável sem confirmação)',

  SITE_URL: 'https://historia-ashy-gamma.vercel.app',
  SUPPORT_URL: '/contato',
  SUPPORT_EMAIL: 'suporte@aulaviva.com.br',
  TERMS_URL: '/termos',
  PRIVACY_URL: '/privacidade',
  CONTACT_URL: '/contato',
  THANK_YOU_URL: '/obrigado',

  WHATSAPP_NUMBER: '447402867442',
  WHATSAPP_MESSAGE:
    'Oi, comprei o Aula Viva História e preciso de ajuda com meu acesso.',
  WHATSAPP_URL:
    'https://wa.me/447402867442?text=Oi%2C%20comprei%20o%20Aula%20Viva%20Hist%C3%B3ria%20e%20preciso%20de%20ajuda%20com%20meu%20acesso.',

  META_PIXEL_ID: '',
  GA_MEASUREMENT_ID: '',

  LOGO_HORIZONTAL: '/brand/logo-horizontal.svg',
  LOGO_HORIZONTAL_DARK: '/brand/logo-horizontal-dark.svg',
  BRAND_ICON: '/brand/brand-icon.svg',
  PRODUCT_IMAGE: '/images/hero-bundle.webp',
  OG_IMAGE: '/images/og-image.jpg',

  /** Quatro imagens reais da prévia (abaixo da hero) */
  PRODUCT_PREVIEW_IMAGES: [
    {
      id: 'interpretacao',
      thumb: '/images/preview-01.webp',
      full: '/images/preview-01.webp',
      alt: 'Atividade de interpretação de História',
      caption: 'Atividade de interpretação',
    },
    {
      id: 'mapa',
      thumb: '/images/preview-05.webp',
      full: '/images/preview-05.webp',
      alt: 'Mapa histórico para aula de História',
      caption: 'Mapa histórico',
    },
    {
      id: 'linha-do-tempo',
      thumb: '/images/preview-02.webp',
      full: '/images/preview-02.webp',
      alt: 'Linha do tempo histórica',
      caption: 'Linha do tempo',
    },
    {
      id: 'dinamica',
      thumb: '/images/preview-03.webp',
      full: '/images/preview-03.webp',
      alt: 'Dinâmica em grupo de História',
      caption: 'Dinâmica em grupo',
    },
  ] as const,

  SHOW_SOCIAL_PROOF: false,
  SHOW_LAUNCH_BAR: true,
  SHOW_LAUNCH_BADGE: true,
  SHOW_COUNTDOWN: false,
  SHOW_TOP_BAR: true,
  SHOW_STICKY_CTA: true,
  SHOW_DISCOUNT_PERCENTAGE: false,
  LAUNCH_END_DATE: '',

  OFFER_VARIANT: 'two_plans' as OfferVariant,
  FORCE_HEADLINE_VARIANT: null as HeadlineVariant | null,

  OFFER_BAR_TEXT: '500+ ATIVIDADES A PARTIR DE R$ 10',

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

  ESSENTIAL_SECTION_FEATURES: [
    'Mais de 500 atividades de História',
    'Materiais em PDF',
    'Atividades para imprimir',
    'Recursos para projetar',
    'Conteúdos organizados por tema',
    'Fundamental e Ensino Médio',
    'Atividades individuais e em grupo',
    'Organização com base na BNCC',
  ] as const,

  ESSENTIAL_CARD_FEATURES: [
    '500+ atividades',
    'PDFs para imprimir',
    'Recursos para projetar',
    'Organização por tema',
    'Fundamental e Médio',
    'Garantia de 30 dias',
  ] as const,

  PREMIUM_SECTION_FEATURES: [
    '100 avaliações de História',
    'Planos de aula prontos',
    'Planejamento anual',
    'Mapas e linhas do tempo extras',
    'Guia para aulas mais participativas',
  ] as const,

  PREMIUM_CARD_FEATURES: [
    'Tudo do Plano Essencial',
    '100 avaliações de História',
    'Planos de aula prontos',
    'Planejamento anual',
    'Mapas e linhas do tempo extras',
    'Guia para aulas participativas',
    'Garantia de 30 dias',
  ] as const,

  PREMIUM_FUTURE_UPDATES: true,

  COMPACT_COMPARISON: [
    { label: '500+ atividades', essential: true, premium: true },
    { label: '100 avaliações', essential: false, premium: true },
    { label: 'Planos de aula', essential: false, premium: true },
    { label: 'Planejamento anual', essential: false, premium: true },
    { label: 'Materiais Premium', essential: false, premium: true },
  ] as const,

  COPYRIGHT_YEAR: new Date().getFullYear(),
  LEGAL_DISCLAIMER:
    'Este é um produto digital de apoio ao planejamento e à aplicação de aulas. Nenhum material físico será enviado.',
} as const

export type OfferConfig = typeof offerConfig
