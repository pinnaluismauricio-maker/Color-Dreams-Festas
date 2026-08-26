import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { COMPANY, NAV_LINKS, whatsappLink } from '../../data/content'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__name">Color Dreams</span>
          <span className="site-footer__tagline">Festas Criativas</span>
          <p className="site-footer__motto">"Transformando celebrações em memórias."</p>
        </div>

        <div className="site-footer__col">
          <h3>Links rápidos</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Contato</h3>
          <ul>
            <li>
              <a
                href={whatsappLink('Olá! Vim pelo site da Color Dreams Festas Criativas.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden /> {COMPANY.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram aria-hidden /> {COMPANY.instagramHandle}
              </a>
            </li>
            <li>
              <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt aria-hidden /> {COMPANY.address.full}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            © {year} Color Dreams Festas Criativas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
