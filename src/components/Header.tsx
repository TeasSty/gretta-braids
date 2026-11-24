import { brand, media, nav } from '../data/content'

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top">
        <img src={media.logo} alt="" width={40} height={40} />
        <span>{brand.name}</span>
      </a>
      <nav className="site-header__nav" aria-label="Разделы">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="site-header__cta" href="#book">
        Запись
      </a>
    </header>
  )
}
