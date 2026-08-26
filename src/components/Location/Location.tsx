import { FaMapMarkerAlt } from 'react-icons/fa'
import { COMPANY } from '../../data/content'
import './Location.css'

function Location() {
  return (
    <section className="section location">
      <div className="container location__grid">
        <div className="location__info">
          <span className="eyebrow">Onde estamos</span>
          <h2>Venha nos conhecer</h2>
          <p className="location__address">
            <FaMapMarkerAlt aria-hidden />
            <span>
              {COMPANY.address.street}
              <br />
              {COMPANY.address.neighborhood}
              <br />
              {COMPANY.address.city}
            </span>
          </p>
          <a
            className="btn btn-secondary"
            href={COMPANY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="location__map">
          <iframe
            title="Localização da Color Dreams Festas Criativas no Google Maps"
            src={COMPANY.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Location
