import React from 'react'
import { slides } from '../constants'

const SlidesShow = () => {
  // state for the currently selected slide
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [expanded, setExpanded] = React.useState(false)

  const slide = slides[currentSlide]

  // Functionality for slide click
  function handleSlideClick(slideIndex) {
    setCurrentSlide(slideIndex)
    setExpanded(true)
  }
  // Functionality for next slide
  function handleNextClick() {
    setCurrentSlide((currentSlide + 1) % slides.length)
  }
  // Functionality for previous slide
  function handlePrevClick() {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  // Functionality for close expanded slide
  function handleCloseClick() {
    setExpanded(false)
  }
  return (
    <div className="slideshow page__slideshow">
      {expanded ? (
        <div className="slideshow__expanded">
          <div className="slideshow__image-container">
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
          <div className="slideshow__content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <div className="slideshow__navigation">
              <button
                disabled={currentSlide === 0 ? true : false}
                onClick={handlePrevClick}
              >
                Prev
              </button>
              <button onClick={handleCloseClick}>Close</button>
              <button
                disabled={currentSlide + 1 === slides.length ? true : false}
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>What Millennial Users Should Expect When They Swipe?</h1>
          <p>
            Data Scientist: Jacques Diambra Odi, Stephanie | Software Engineers:
            Randy Polanco, and Eddie Mendez
          </p>
          <h2>ABSTRACT</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <h2>Introductions</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
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
          <h2>CONCLUSION</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </>
      )}
    </div>
  )
}

export default SlidesShow
