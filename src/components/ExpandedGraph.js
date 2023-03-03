import React from 'react'
import Popup from './Popup'
import CardButtons from './CardButtons'
import PieChart from './PieChart'
import BarGraph from './BarGraph'
import BoxPlot from './BoxPlot'
import TinderLogo from '../images/tinder-logo.svg'

const ExpandedGraph = ({
  slides,
  expanded,
  currentSlide,
  setCurrentSlide,
  setExpanded,
}) => {
  const slide = slides[currentSlide]
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
    <Popup isOpen={expanded} onClose={handleCloseClick}>
      <div class="card">
        <div className="card__logo--container">
          <img
            src={TinderLogo}
            alt="Tinder Logo"
            className="card__tinder--logo"
          />
          <p className="card__logo--text">: Data Pudding</p>
        </div>
        <div className="card__top--container">
          {slide.type === 'pie' && (
            <PieChart data={slide.data} layout={slide.layout} />
          )}
          {slide.type === 'bar' && (
            <BarGraph data={slide.data} layout={slide.layout} />
          )}
          {slide.type === 'box' && (
            <BoxPlot data={slide.data} layout={slide.layout} />
          )}

          <h2 class="card__title">{slide.title}</h2>
          <p class="card__description">{slide.description}</p>
        </div>
        <CardButtons
          currentSlide={currentSlide}
          handlePrevClick={handlePrevClick}
          handleCloseClick={handleCloseClick}
          slides={slides}
          handleNextClick={handleNextClick}
        />
      </div>
    </Popup>
  )
}

export default ExpandedGraph
