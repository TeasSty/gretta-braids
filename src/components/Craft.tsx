import { craftPoints, media } from '../data/content'

export function Craft() {
  return (
    <section className="section craft" id="craft">
      <div className="section__head">
        <div>
          <p className="section__eyebrow">Техника</p>
          <h2>Как собирается комплект</h2>
          <hr className="section__rule" />
        </div>
        <p className="section__lede">
          Не шаблон «как на фото». Сначала лицо, рост волос и сколько часов вы
          готовы сидеть в кресле.
        </p>
      </div>

      <div className="craft__grid">
        <figure className="craft__photo">
          <img
            src={media.tech}
            alt="Фактура каникалона GRETTA BRAIDS"
            loading="lazy"
            width={1920}
            height={768}
          />
        </figure>
        <ol className="craft__list">
          {craftPoints.map((point) => (
            <li key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
