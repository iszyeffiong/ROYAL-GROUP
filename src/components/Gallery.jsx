import React, { useState } from 'react'
import meetingImg from '../assets/images/gallery/meeting.jpg'
import designImg from '../assets/images/gallery/design.jpg'
import project1Img from '../assets/images/gallery/project1.jpg'
import blueprintImg from '../assets/images/construction/blueprint.jpg'
import installationImg from '../assets/images/construction/installation.jpg'
import managementImg from '../assets/images/construction/management.jpg'
import engineerImg from '../assets/images/construction/engineer.jpg'
import preplanningImg from '../assets/images/construction/preplanning.jpg'
import vintageNeonImg from '../assets/images/signage/vintage-neon.jpg'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: meetingImg, alt: 'Business Meeting & Planning', category: 'Planning' },
    { src: designImg, alt: 'Design Creation', category: 'Design' },
    { src: blueprintImg, alt: 'Blueprint & Technical Plans', category: 'Planning' },
    { src: installationImg, alt: 'Professional Installation', category: 'Installation' },
    { src: managementImg, alt: 'Construction Management', category: 'Management' },
    { src: project1Img, alt: 'Completed Project', category: 'Projects' },
    { src: engineerImg, alt: 'Professional Engineering', category: 'Design' },
    { src: preplanningImg, alt: 'Pre-Planning & Site Analysis', category: 'Planning' },
    { src: vintageNeonImg, alt: 'Custom Signage Work', category: 'Installation' },
    { src: 'https://via.placeholder.com/400x300?text=Construction+Site', alt: 'Active Construction Site', category: 'Projects' },
    { src: 'https://via.placeholder.com/400x300?text=Heavy+Equipment', alt: 'Heavy Equipment & Machinery', category: 'Equipment' },
    { src: 'https://via.placeholder.com/400x300?text=Structural+Work', alt: 'Structural Steel Installation', category: 'Construction' },
    { src: 'https://via.placeholder.com/400x300?text=Welding+Services', alt: 'Professional Welding Services', category: 'Metalwork' },
    { src: 'https://via.placeholder.com/400x300?text=Quality+Inspection', alt: 'Quality Control & Inspection', category: 'Management' },
    { src: 'https://via.placeholder.com/400x300?text=Safety+Standards', alt: 'Safety Standards Implementation', category: 'Projects' }
  ]

  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Our Work in Action</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <span className="lightbox-close">&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
