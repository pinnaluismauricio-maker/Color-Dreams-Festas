import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes } from 'react-icons/fa'
import { GALLERY_ALBUMS } from '../../data/content'
import './Gallery.css'

function Gallery() {
  const [openAlbum, setOpenAlbum] = useState<number | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const album = openAlbum !== null ? GALLERY_ALBUMS[openAlbum] : null

  function openAlbumAt(albumIndex: number) {
    setOpenAlbum(albumIndex)
    setPhotoIndex(0)
  }

  function closeLightbox() {
    setOpenAlbum(null)
  }

  function showPrev() {
    if (!album) return
    setPhotoIndex((i) => (i - 1 + album.photos.length) % album.photos.length)
  }

  function showNext() {
    if (!album) return
    setPhotoIndex((i) => (i + 1) % album.photos.length)
  }

  // Fecha com Esc e navega com as setas do teclado enquanto o lightbox está aberto
  useEffect(() => {
    if (!album) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [album])

  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Galeria</span>
          <h2>Momentos que ganham cor</h2>
          <p>
            Fotos reais dos nossos trabalhos, organizadas por pasta. Clique em uma capa para ver
            todas as fotos daquele álbum.
          </p>
        </div>

        <div className="gallery__albums">
          {GALLERY_ALBUMS.map((a, index) => (
            <button key={a.id} className="album-card" onClick={() => openAlbumAt(index)}>
              <div className="album-card__cover">
                <img
                  src={a.photos[0].src}
                  alt={a.photos[0].alt}
                  loading="lazy"
                  style={{ objectFit: a.coverFit ?? 'cover' }}
                />
                <span className="album-card__count">
                  <FaImages aria-hidden /> {a.photos.length}
                </span>
              </div>
              <div className="album-card__label">
                <strong>{a.title}</strong>
                <small>{a.description}</small>
              </div>
            </button>
          ))}
        </div>
      </div>

      {album && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={album.title}>
          <div className="lightbox__backdrop" onClick={closeLightbox} />

          <button className="lightbox__close" onClick={closeLightbox} aria-label="Fechar">
            <FaTimes />
          </button>

          <div className="lightbox__body">
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={showPrev}
              aria-label="Foto anterior"
            >
              <FaChevronLeft />
            </button>

            <figure className="lightbox__figure">
              <img src={album.photos[photoIndex].src} alt={album.photos[photoIndex].alt} />
              <figcaption>
                {album.title} · {photoIndex + 1}/{album.photos.length}
              </figcaption>
            </figure>

            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={showNext}
              aria-label="Próxima foto"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
