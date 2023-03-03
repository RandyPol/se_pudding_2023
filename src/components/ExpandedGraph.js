import React from 'react'
import Popup from './Popup'
import PieChart from './PieChart'
import BarGraph from './BarGraph'
import BoxPlot from './BoxPlot'
import TinderLogo from '../images/tinder-logo.svg'

// Icons
import { AiFillHeart } from 'react-icons/ai'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'

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

        <div className="card__button--container">
          <button
            className="card__button card__button--prev"
            disabled={currentSlide === 0 ? true : false}
            onClick={handlePrevClick}
          >
            <RiArrowGoBackFill size={30} color="#FFC107" />
          </button>
          <button
            className="card__button card__button--close"
            onClick={handleCloseClick}
          >
            <ImCross size={30} color="#FD5068" />
          </button>
          <button
            className="card__button card__button--next"
            disabled={currentSlide + 1 === slides.length ? true : false}
            onClick={handleNextClick}
          >
            <AiFillHeart size={30} color="#4CAF50" />
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default ExpandedGraph
