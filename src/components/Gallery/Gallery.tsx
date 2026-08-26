import { useState } from 'react'
import { FaImages } from 'react-icons/fa'
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from '../../data/content'
import './Gallery.css'

function Gallery() {
  const [active, setActive] = useState<GalleryCategory>('Todos')

  const items =
    active === 'Todos' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === active)

  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Galeria</span>
          <h2>Momentos que ganham cor</h2>
          <p>
            Fotos reais de alguns dos nossos trabalhos. Em breve, completaremos as demais
            categorias com novos registros.
          </p>
        </div>

        <div className="gallery__filters" role="tablist" aria-label="Categorias da galeria">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={active === category}
              className={`gallery__filter ${active === category ? 'is-active' : ''}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {items.length > 0 ? (
          <div className="gallery__grid">
            {items.map((item) => (
              <figure key={item.id} className="gallery__photo">
                <img src={item.image} alt={item.alt ?? item.category} loading="lazy" />
                <figcaption>{item.category}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="gallery__empty">
            <FaImages className="ph-icon" aria-hidden />
            <span>Ainda não temos fotos de {active} para mostrar aqui.</span>
            <small>Em breve, adicionaremos registros reais desta categoria.</small>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
