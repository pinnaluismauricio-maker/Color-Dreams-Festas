import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../../data/content'
import './ContactCTA.css'

function ContactCTA() {
  return (
    <section id="contato" className="section-cta">
      <div className="container section-cta__inner">
        <h2>Vamos transformar sua ideia em uma festa inesquecível?</h2>
        <p>Entre em contato com a Color Dreams e conte para nós como você imagina o seu evento.</p>
        <a
          className="btn btn-ghost section-cta__btn"
          href={whatsappLink('Olá! Gostaria de solicitar um orçamento para o meu evento.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden />
          Solicitar orçamento pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export default ContactCTA
