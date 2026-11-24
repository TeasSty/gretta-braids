import { asset } from '../lib/asset'

export const brand = {
  name: 'GRETTA BRAIDS',
  city: 'Бузулук',
  tagline: 'Плетение, которое видно в деталях',
  support: 'Афрокосы, афрокудри и брейды — студия Катерины',
  phone: '+7 (986) 798-45-59',
  phoneHref: 'tel:+79867984559',
  whatsapp: 'https://wa.me/79867984559',
  vk: 'https://vk.ru/gretta.braids',
  address: 'ул. Ленина, 6',
  hours: 'Вт–Сб · 11:00–18:00 · по записи',
  master: 'Катерина',
} as const

export const nav = [
  { href: '#works', label: 'Работы' },
  { href: '#craft', label: 'Техника' },
  { href: '#prices', label: 'Цены' },
  { href: '#book', label: 'Запись' },
] as const

export const media = {
  logo: asset('images/logo.jpg'),
  hero: asset('images/hero.jpg'),
  heroVideo: asset('videos/hero-clip.mp4'),
  tech: asset('images/tech.jpg'),
} as const

export const works = [
  {
    id: '01',
    src: asset('images/vk-01.jpg'),
    label: 'Медные пучки',
    alt: 'Афрокосы медного каникалона с двумя пучками',
    w: 'tall' as const,
  },
  {
    id: '02',
    src: asset('images/vk-02.jpg'),
    label: 'Работа студии',
    alt: 'Работа GRETTA BRAIDS',
    w: 'mid' as const,
  },
  {
    id: '03',
    src: asset('images/vk-03.jpg'),
    label: 'Фактура',
    alt: 'Фактура плетения',
    w: 'wide' as const,
  },
  {
    id: '04',
    src: asset('images/vk-04.jpg'),
    label: 'Образ',
    alt: 'Готовый образ афроплетения',
    w: 'mid' as const,
  },
  {
    id: '05',
    src: asset('images/vk-05.jpg'),
    label: 'Детали',
    alt: 'Детали проборов и кос',
    w: 'tall' as const,
  },
  {
    id: '06',
    src: asset('images/vk-06.jpg'),
    label: 'Комплект',
    alt: 'Готовый комплект',
    w: 'mid' as const,
  },
  {
    id: '07',
    src: asset('images/vk-07.jpg'),
    label: 'Стиль',
    alt: 'Стиль афрокос',
    w: 'wide' as const,
  },
  {
    id: '08',
    src: asset('images/vk-08.jpg'),
    label: 'Студия',
    alt: 'Работа в студии',
    w: 'mid' as const,
  },
]

export const craftPoints = [
  {
    title: 'Пробор',
    text: 'Сначала рисуем карту: толщина, направление, нагрузка на краевую линию.',
  },
  {
    title: 'Материал',
    text: 'Каникалон и трессы подбираем под длину, вес и срок носки — не «побольше пачку».',
  },
  {
    title: 'Натяжение',
    text: 'Равномерное давление по скальпу: красиво и чтобы можно было носить неделями.',
  },
] as const

export const prices = [
  {
    name: 'Афрокосы / box braids',
    time: 'от 5–7 ч',
    note: 'Размер базы и длина — после разбора',
    from: 'по запросу',
  },
  {
    name: 'Knotless',
    time: 'от 6–8 ч',
    note: 'Мягкий корень, чистые треугольники',
    from: 'по запросу',
  },
  {
    name: 'Афрокудри',
    time: 'от 3–5 ч',
    note: 'Каркас или точка — обсуждаем на записи',
    from: 'по запросу',
  },
  {
    name: 'Брейды / афрозатылок',
    time: 'от 2–4 ч',
    note: 'Узоры, хвосты, комбинированные схемы',
    from: 'по запросу',
  },
] as const
