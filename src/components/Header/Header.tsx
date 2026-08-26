import { useEffect, useState } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { NAV_LINKS, whatsappLink } from '../../data/content'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__row">
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__name">Color Dreams</span>
          <span className="brand__tagline">Festas Criativas</span>
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn-primary header-cta"
          href={whatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre a Color Dreams Festas Criativas.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden />
          Falar pelo WhatsApp
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn-primary mobile-menu__cta"
          href={whatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre a Color Dreams Festas Criativas.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <FaWhatsapp aria-hidden />
          Falar pelo WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
