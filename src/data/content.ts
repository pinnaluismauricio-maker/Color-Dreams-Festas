// Dados reais e centrais da empresa.
// Alterar aqui reflete em todo o site (fonte única de verdade).

export const COMPANY = {
  name: 'Color Dreams',
  fullName: 'Color Dreams Festas Criativas',
  tagline: 'Festas Criativas',
  whatsappNumber: '5521994937918',
  whatsappDisplay: '(21) 99493-7918',
  instagramHandle: '@colordreamsfestascriativas',
  instagramUrl: 'https://www.instagram.com/colordreamsfestascriativas/',
  address: {
    street: 'Av. Pernambucana, 1450',
    neighborhood: 'Vila Rosali',
    city: 'São João de Meriti - RJ',
    full: 'Av. Pernambucana, 1450 - Vila Rosali - São João de Meriti/RJ',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Av. Pernambucana, 1450, Vila Rosali, São João de Meriti - RJ'),
  mapsEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Av. Pernambucana, 1450, Vila Rosali, São João de Meriti - RJ') +
    '&output=embed',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${COMPANY.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export type EventService = {
  id: string
  emoji: string
  title: string
  description: string
}

export const EVENTS: EventService[] = [
  {
    id: 'aniversario',
    emoji: '🎂',
    title: 'Festas de Aniversário',
    description:
      'Decorações pensadas para tornar cada aniversário ainda mais especial, do conceito aos mínimos detalhes.',
  },
  {
    id: 'cha-revelacao',
    emoji: '🎈',
    title: 'Chá Revelação',
    description:
      'Uma decoração especial para celebrar um dos momentos mais emocionantes da família.',
  },
  {
    id: 'aniversario-casamento',
    emoji: '💍',
    title: 'Aniversário de Casamento',
    description:
      'Celebrações românticas e personalizadas para comemorar histórias de amor.',
  },
  // Espaço reservado: novos tipos de evento podem ser adicionados aqui futuramente.
]

export type Differential = {
  emoji: string
  title: string
}

export const DIFFERENTIALS: Differential[] = [
  { emoji: '✨', title: 'Decoração personalizada' },
  { emoji: '💗', title: 'Feito com carinho' },
  { emoji: '🎨', title: 'Criatividade em cada detalhe' },
  { emoji: '🎉', title: 'Momentos especiais' },
]

export type GalleryPhoto = {
  src: string
  alt: string
}

export type GalleryAlbum = {
  id: string
  title: string
  description: string
  photos: GalleryPhoto[]
  /** Como a foto de capa se encaixa no card (fotos de evento ficam melhor em "cover";
   *  artes/tabelas com texto ficam melhores em "contain", sem cortar nada). */
  coverFit?: 'cover' | 'contain'
}

// Álbuns reais da Color Dreams. Clicar na capa abre as demais fotos daquela pasta.
export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'aniversarios',
    title: 'Aniversários',
    description: 'Decorações de aniversário por tema e faixa etária',
    photos: [
      {
        src: '/images/gallery/aniversarios-tiana.jpg',
        alt: 'Decoração de aniversário tema Princesa Tiana, em verde e dourado',
      },
      {
        src: '/images/gallery/aniversarios-flamengo.jpg',
        alt: 'Decoração de aniversário tema Flamengo, em vermelho, preto e dourado',
      },
      {
        src: '/images/gallery/aniversarios-spiderman.jpg',
        alt: 'Decoração de aniversário tema Homem-Aranha, em azul e vermelho',
      },
      {
        src: '/images/gallery/aniversarios-1.jpg',
        alt: 'Decoração de aniversário tema Rapunzel, em lilás e dourado',
      },
      {
        src: '/images/gallery/aniversarios-2.jpg',
        alt: 'Decoração de aniversário de 1 aninho em tons pastel',
      },
      {
        src: '/images/gallery/aniversarios-mickey-safari.jpg',
        alt: 'Decoração de 1 aninho tema safari com Mickey, em verde',
      },
      {
        src: '/images/gallery/aniversarios-cereja.jpg',
        alt: 'Decoração de aniversário tema cereja, em rosa e vermelho',
      },
      {
        src: '/images/gallery/aniversarios-15anos.jpg',
        alt: 'Decoração de 15 anos em azul e prata',
      },
      {
        src: '/images/gallery/aniversarios-70anos.jpg',
        alt: 'Decoração de 70 anos em azul e prata',
      },
      {
        src: '/images/gallery/aniversarios-61anos.jpg',
        alt: 'Decoração de aniversário em preto e dourado',
      },
    ],
  },
  {
    id: 'casamentos',
    title: 'Casamentos',
    description: 'Decorações românticas para o grande dia',
    photos: [
      {
        src: '/images/gallery/casamentos-jardim.jpg',
        alt: 'Decoração de casamento com parede de plantas e flores brancas',
      },
    ],
  },
  {
    id: 'cha-revelacao',
    title: 'Chá Revelação',
    description: 'Momentos emocionantes de revelação em família',
    photos: [
      {
        src: '/images/gallery/cha-revelacao-1.jpg',
        alt: 'Decoração de chá revelação em azul e rosa, com ursinhos de pelúcia',
      },
    ],
  },
  {
    id: 'pegue-e-monte',
    title: 'Pegue e Monte',
    description: 'Kits de mesa decorada prontos para você montar',
    photos: [
      {
        src: '/images/gallery/pegue-e-monte-laranja-pink.jpg',
        alt: 'Kit pegue e monte em laranja e pink, com mesas de madeira',
      },
      {
        src: '/images/gallery/pegue-e-monte-azul-dourado.jpg',
        alt: 'Kit pegue e monte em azul e dourado, com mesas de madeira',
      },
      {
        src: '/images/gallery/pegue-e-monte-rustico.jpg',
        alt: 'Kit pegue e monte rústico, com bases de vime e detalhes em verde',
      },
      {
        src: '/images/gallery/kits-1.jpg',
        alt: 'Kit de mesa decorada, estilo pegue e monte, em tons rústicos',
      },
    ],
  },
  {
    id: 'valores',
    title: 'Valores',
    description: 'Preços dos serviços de estação (pipoca, lanches, açaí e sorvete)',
    coverFit: 'contain',
    photos: [
      {
        src: '/images/gallery/valores-pipoca-algodao.png',
        alt: 'Tabela de preços da estação de pipoca e algodão doce',
      },
      {
        src: '/images/gallery/valores-casinha-lanches.png',
        alt: 'Tabela de preços da casinha de lanches',
      },
      {
        src: '/images/gallery/valores-acai-sorvete.png',
        alt: 'Tabela de preços da estação de açaí e sorvete',
      },
    ],
  },
]
