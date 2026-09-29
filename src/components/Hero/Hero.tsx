import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { whatsappLink } from '../../data/content'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <span className="blob blob--sky" />
        <span className="blob blob--rose" />
        <svg className="confetti" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="60" r="4" fill="var(--rose-deep)" opacity="0.5" />
          <circle cx="120" cy="20" r="3" fill="var(--sky-deep)" opacity="0.5" />
          <rect x="300" y="90" width="7" height="7" rx="2" fill="var(--rose-deep)" opacity="0.45" transform="rotate(20 300 90)" />
          <circle cx="360" cy="200" r="5" fill="var(--sky-deep)" opacity="0.4" />
          <rect x="60" y="250" width="6" height="6" rx="2" fill="var(--rose-deep)" opacity="0.4" transform="rotate(-15 60 250)" />
          <circle cx="220" cy="330" r="4" fill="var(--sky-deep)" opacity="0.45" />
        </svg>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Decoração &amp; eventos personalizados</span>
          <h1 className="hero__title">
            Momentos especiais merecem uma <em>decoração inesquecível.</em>
          </h1>
          <p className="hero__text">
            Na Color Dreams Festas Criativas, transformamos sonhos em celebrações cheias de cor,
            carinho e personalidade.
          </p>

          <div className="hero__actions">
            <a href="#eventos" className="btn btn-secondary">
              Conheça nossos eventos
              <FaArrowRight aria-hidden />
            </a>
            <a
              href={whatsappLink('Olá! Vim pelo site e gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp aria-hidden />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img
            className="hero__photo"
            src="/images/gallery/aniversarios-3.jpg"
            alt="Decoração de aniversário em dourado e branco"
          />
          <div className="hero__media-tag">São João de Meriti · RJ</div>
        </div>
      </div>

      <div className="ribbon-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,32 C240,80 480,0 720,24 C960,48 1200,90 1440,40 L1440,80 L0,80 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
