import React from 'react'
import { slides } from '../constants'

const SlidesShow = () => {
  // state for the currently selected slide
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [expanded, setExpanded] = React.useState(false)

  const slide = slides[currentSlide]

  function handleSlideClick(slideIndex) {
    setCurrentSlide(slideIndex)
    setExpanded(true)
  }

  function handleCloseClick() {
    setExpanded(false)
  }

  return (
    <div className="slideshow">
      {expanded ? (
        <div className="slideshow__expanded">
          <div className="slideshow__image-container">
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
          <div className="slideshow__content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      ) : (
        <>
          <h2>Slideshow</h2>
          <div className="slideshow__slides">
            {slides.map((slide, index) => (
              <div
                className="slideshow__slide"
                key={slide.id}
                onClick={() => handleSlideClick(index)}
              >
                <img src={slide.imageUrl} alt={slide.title} />
                <h3>{slide.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SlidesShow
