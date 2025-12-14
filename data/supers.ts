import { Super, SuperResult } from '@/types'

export const supers: Array<Super> = [
  { name: 'Millennials', slug: 'millennials', threatRating: 2.1, description: 'Social media', img: 'universal_man.png' },
  { name: 'Generation Z', slug: 'generation-z', threatRating: 2.5, description: 'Smartphone', img: 'psycwave.png' },
  { name: 'Generation Alpha', slug: 'generation-alpha', threatRating: 4.1, description: 'iPad', img: 'everseer.png' },
]

export const supersResult: Array<SuperResult> = [
  {
    name: 'Generation X',
    slug: 'generation-x',
    img: 'generation-x.png',
    description:
      'Computer',
    lastActiveRecord: '31.12.80',
    locationKnown: true,
    threatRating: '6.1 Exercise moderate caution',
  },
  {
    name: 'Baby boomers',
    slug: 'baby-boomers',
    img: 'baby-boomers.png',
    description:
      'TV ',
    lastActiveRecord: '31.12.64',
    locationKnown: true,
    threatRating: '6.7 Exercise moderate caution',
  },
  {
    name: 'Silent Generation',
    slug: 'silent-generation',
    img: 'silent-generation.png',
    description:
      'Impossible to corrupt ',
    lastActiveRecord: '31.12.45',
    locationKnown: true,
    threatRating: '6.9 Exercise moderate caution',
  },
  {
    name: 'Greatest Generation',
    slug: 'greatest-generation',
    img: 'greatest-generation.png',
    description:
      'Impossible to corrupt ',
    lastActiveRecord: '31.12.27',
    locationKnown: true,
    threatRating: '9.3 Exercise high caution',
  },
]
