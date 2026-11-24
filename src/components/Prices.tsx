import { prices } from '../data/content'

export function Prices() {
  return (
    <section className="section prices" id="prices">
      <div className="section__head">
        <div>
          <p className="section__eyebrow">Прайс</p>
          <h2>Стили и время</h2>
          <hr className="section__rule" />
        </div>
        <p className="section__lede">
          Точная сумма зависит от длины, густоты и материала. На записи разберём
          референс и скажем вилку.
        </p>
      </div>

      <ul className="prices__list">
        {prices.map((item) => (
          <li className="prices__row" key={item.name}>
            <div>
              <div className="prices__name">{item.name}</div>
              <p className="prices__note">{item.note}</p>
            </div>
            <div className="prices__time">{item.time}</div>
            <div className="prices__from">{item.from}</div>
          </li>
        ))}
      </ul>
      <p className="prices__foot">
        Материал и украшения — отдельно, если нужен новый комплект. Повторный
        вплет своего — обсуждаем на связи.
      </p>
    </section>
  )
}
