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

export const works = [
  {
    id: '01',
    src: '/images/vk-work-01.jpg',
    label: 'Медные пучки',
    alt: 'Афрокосы медного каникалона с двумя пучками',
    w: 'tall',
  },
  {
    id: '02',
    src: '/images/row-07.jpg',
    label: 'Афрокудри',
    alt: 'Афрокудри с мягкими кончиками',
    w: 'mid',
  },
  {
    id: '03',
    src: '/images/row-06.jpg',
    label: 'Knotless',
    alt: 'Knotless-косы с чистыми треугольными проборами',
    w: 'wide',
  },
  {
    id: '04',
    src: '/images/row-01.jpg',
    label: 'Брейды',
    alt: 'Студийный портрет с брейдами',
    w: 'mid',
  },
  {
    id: '05',
    src: '/images/row-02.jpg',
    label: 'Афрокосы',
    alt: 'Портрет с афрокосами',
    w: 'tall',
  },
  {
    id: '06',
    src: '/images/row-03.jpg',
    label: 'Бокс-брейды',
    alt: 'Стильные афрокосы крупным планом',
    w: 'mid',
  },
  {
    id: '07',
    src: '/images/row-04.jpg',
    label: 'Фактура',
    alt: 'Фактура кос при естественном свете',
    w: 'wide',
  },
  {
    id: '08',
    src: '/images/row-05.jpg',
    label: 'Процесс',
    alt: 'Плетение в студии',
    w: 'mid',
  },
] as const

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
