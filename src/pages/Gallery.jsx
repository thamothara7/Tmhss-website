import { useState } from 'react'

const sampleImages = [
  { id: 1, src: '/Images/IMG_1.jpg', alt: 'Gallery image 1' },
  { id: 2, src: '/Images/IMG_2.jpg', alt: 'Gallery image 2' },
  { id: 3, src: '/Images/IMG_3.jpg', alt: 'Gallery image 3' },
  { id: 4, src: '/Images/IMG_4.jpg', alt: 'Gallery image 4' },
  { id: 5, src: '/Images/IMG_5.jpg', alt: 'Gallery image 5' },
  { id: 6, src: '/Images/IMG_6.jpg', alt: 'Gallery image 6' },
  { id: 7, src: '/Images/IMG_7.jpg', alt: 'Gallery image 7' },
  { id: 8, src: '/Images/IMG_8.jpg', alt: 'Gallery image 8' }
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <div className="container-wide py-12 md:py-16">
      <h2 className="section-title">Gallery</h2>
      <p className="mt-4 leading-relaxed">Browse school moments. For more, visit our social listings below.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleImages.map((img) => (
          <figure key={img.id} className="overflow-hidden rounded-lg border border-[var(--surface-border)] surface">
            <button aria-label="Open image" onClick={() => setLightbox(img)} className="block w-full">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover hover:scale-105 transition-transform" />
            </button>
          </figure>
        ))}
      </div>
      {lightbox && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain rounded" />
            <button className="absolute top-2 right-2 btn-primary" onClick={() => setLightbox(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}



