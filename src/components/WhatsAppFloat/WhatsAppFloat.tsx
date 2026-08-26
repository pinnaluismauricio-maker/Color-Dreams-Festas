import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../../data/content'
import './WhatsAppFloat.css'

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink('Olá! Vim pelo site e gostaria de falar com a Color Dreams Festas Criativas.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Color Dreams pelo WhatsApp"
    >
      <FaWhatsapp aria-hidden />
    </a>
  )
}

export default WhatsAppFloat
