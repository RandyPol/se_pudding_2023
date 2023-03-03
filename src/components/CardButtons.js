import React from 'react'
// Icons
import { AiFillHeart } from 'react-icons/ai'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'

const CardButtons = ({
  currentSlide,
  handlePrevClick,
  handleCloseClick,
  slides,
  handleNextClick,
}) => {
  return (
    <div className="card__button--container">
      <button
        className="card__button card__button--prev"
        disabled={currentSlide === 0 ? true : false}
        onClick={handlePrevClick}
      >
        <RiArrowGoBackFill size={30} />
      </button>
      <button
        className="card__button card__button--close"
        onClick={handleCloseClick}
      >
        <ImCross size={30} />
      </button>
      <button
        className="card__button card__button--next"
        disabled={currentSlide + 1 === slides.length ? true : false}
        onClick={handleNextClick}
      >
        <AiFillHeart size={30} />
      </button>
    </div>
  )
}

export default CardButtons
