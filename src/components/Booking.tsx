import { brand } from '../data/content'

export function Booking() {
  return (
    <section className="section book" id="book">
      <div className="book__panel">
        <div>
          <p className="section__eyebrow">Запись</p>
          <h2>Занять день в кресле</h2>
          <hr className="section__rule" />
          <p>
            Напишите в WhatsApp или VK: стиль, длина, фото референса. Ответит{' '}
            {brand.master} — и подберём слот под длинный сеанс.
          </p>
          <div className="book__actions">
            <a className="btn btn--copper" href={brand.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn--ink" href={brand.vk} target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
            <a className="btn btn--line" href={brand.phoneHref}>
              Позвонить
            </a>
          </div>
        </div>

        <dl className="book__facts">
          <div>
            <dt>Телефон</dt>
            <dd>
              <a href={brand.phoneHref}>{brand.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Адрес</dt>
            <dd>
              {brand.address}, {brand.city}
            </dd>
          </div>
          <div>
            <dt>Часы</dt>
            <dd>{brand.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
