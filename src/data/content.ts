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

export type GalleryCategory = 'Todos' | 'Aniversários' | 'Chá Revelação' | 'Casamentos' | 'Decorações' | 'Kits'

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Aniversários',
  'Chá Revelação',
  'Casamentos',
  'Decorações',
  'Kits',
]

export type GalleryItem = {
  id: string
  category: Exclude<GalleryCategory, 'Todos'>
  image?: string
  alt?: string
}

// Itens com "image" preenchido são fotos reais da Color Dreams.
// Itens sem "image" ainda usam um placeholder elegante, para categorias
// que ainda não têm foto real disponível.
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Aniversários',
    image: '/images/gallery/aniversarios-1.jpg',
    alt: 'Decoração de aniversário em tons de lilás e dourado, com tema de princesa',
  },
  {
    id: 'g2',
    category: 'Aniversários',
    image: '/images/gallery/aniversarios-2.jpg',
    alt: 'Decoração de aniversário de 1 aninho em tons pastel',
  },
  {
    id: 'g4',
    category: 'Chá Revelação',
    image: '/images/gallery/cha-revelacao-1.jpg',
    alt: 'Decoração de chá revelação em azul e rosa, com ursinhos de pelúcia',
  },
  {
    id: 'g5',
    category: 'Kits',
    image: '/images/gallery/kits-1.jpg',
    alt: 'Kit de mesa decorada, estilo pegue e monte, em tons rústicos',
  },
]
