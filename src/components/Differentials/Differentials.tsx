import { DIFFERENTIALS } from '../../data/content'
import './Differentials.css'

function Differentials() {
  return (
    <section className="section differentials">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Por que a Color Dreams</span>
          <h2>Diferenciais que fazem sentido para o seu evento</h2>
        </div>

        <div className="differentials__grid">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title} className="differential-item">
              <span aria-hidden="true">{item.emoji}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
