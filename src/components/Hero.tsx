import { useEffect, useRef } from 'react'
import { brand, media } from '../data/content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frame = requestAnimationFrame(() => node.classList.add('is-in'))

    const layer = mediaRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const video = layer?.querySelector('video')

    if (reduce && video) {
      video.pause()
      video.removeAttribute('autoplay')
    }

    const onScroll = () => {
      if (!layer || reduce) return
      const y = Math.min(window.scrollY, window.innerHeight)
      layer.style.transform = `translate3d(0, ${y * 0.14}px, 0)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={ref} aria-label="Главный экран">
      <div className="hero__media" ref={mediaRef} aria-hidden="true">
        <video
          className="hero__video"
          src={media.heroVideo}
          poster={media.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__copy">
        <img
          className="hero__logo"
          src={media.logo}
          alt=""
          width={88}
          height={88}
        />
        <p className="hero__city">{brand.city}</p>
        <h1>
          <span className="hero__brand-line">Gretta</span>
          <span className="hero__brand-line">Braids</span>
        </h1>
        <p className="hero__script">афроплетение</p>
        <p className="hero__support">{brand.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--copper" href="#book">
            Записаться
          </a>
          <a className="btn btn--ghost" href="#works">
            Работы
          </a>
        </div>
      </div>
    </section>
  )
}
