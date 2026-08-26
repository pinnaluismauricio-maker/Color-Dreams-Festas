import { EVENTS } from '../../data/content'
import './Services.css'

function Services() {
  return (
    <section id="eventos" className="section services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Nossos eventos</span>
          <h2>Cada celebração, uma decoração sob medida</h2>
          <p>
            Conheça os tipos de evento que preparamos com cuidado e criatividade — e fique de
            olho, pois novos serviços poderão ser adicionados em breve.
          </p>
        </div>

        <div className="services__grid">
          {EVENTS.map((event) => (
            <article key={event.id} className="service-card">
              <span className="service-card__emoji" aria-hidden="true">
                {event.emoji}
              </span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}

          <article className="service-card service-card--soon">
            <span className="service-card__emoji" aria-hidden="true">
              ➕
            </span>
            <h3>Em breve, novidades</h3>
            <p>Novos tipos de evento e decorações especiais serão adicionados a este espaço.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
