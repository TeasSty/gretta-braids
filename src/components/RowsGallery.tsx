import { useEffect, useRef } from 'react'
import { works } from '../data/content'

export function RowsGallery() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let pointerId: number | null = null
    let startX = 0
    let startScroll = 0
    let moved = false

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      pointerId = event.pointerId
      startX = event.clientX
      startScroll = track.scrollLeft
      moved = false
      track.classList.add('is-dragging')
      track.setPointerCapture(event.pointerId)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return
      const dx = event.clientX - startX
      if (Math.abs(dx) > 3) moved = true
      track.scrollLeft = startScroll - dx
    }

    const endDrag = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return
      pointerId = null
      track.classList.remove('is-dragging')
      if (moved) {
        event.preventDefault()
      }
    }

    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', endDrag)
    track.addEventListener('pointercancel', endDrag)

    return () => {
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', endDrag)
      track.removeEventListener('pointercancel', endDrag)
    }
  }, [])

  return (
    <section className="section rows" id="works">
      <div className="section__head">
        <div>
          <p className="section__eyebrow">Галерея</p>
          <h2>Ряды работ</h2>
          <hr className="section__rule" />
        </div>
        <p className="section__lede">
          Фактуры, проборы, готовые комплекты. Листайте ряд — как от виска к виску.
        </p>
      </div>

      <div className="rows__track-wrap">
        <div
          className="rows__track"
          ref={trackRef}
          role="list"
          aria-label="Работы студии"
        >
          {works.map((work) => (
            <article
              key={work.id}
              className={`rows__item rows__item--${work.w}`}
              role="listitem"
            >
              <figure>
                <img src={work.src} alt={work.alt} loading="lazy" width={640} height={800} />
                <figcaption className="rows__meta">
                  <span>№{work.id}</span>
                  <span>{work.label}</span>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
        <p className="rows__hint">Тяните вбок · или свайп на телефоне</p>
      </div>
    </section>
  )
}
