import { brand } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <span>
        {brand.name} · {brand.city}
      </span>
      <a href={brand.vk} target="_blank" rel="noreferrer">
        vk.ru/gretta.braids
      </a>
    </footer>
  )
}
