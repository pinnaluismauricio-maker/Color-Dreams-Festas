import { FaInstagram } from 'react-icons/fa'
import { COMPANY } from '../../data/content'
import './Instagram.css'

function Instagram() {
  return (
    <section className="section instagram">
      <div className="container instagram__card">
        <FaInstagram className="instagram__icon" aria-hidden />
        <h2>Acompanhe a Color Dreams no Instagram</h2>
        <p>{COMPANY.instagramHandle}</p>
        <a
          className="btn btn-primary"
          href={COMPANY.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram aria-hidden />
          Seguir no Instagram
        </a>
      </div>
    </section>
  )
}

export default Instagram
