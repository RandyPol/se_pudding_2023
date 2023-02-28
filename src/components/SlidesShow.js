import React from 'react'
import { slides } from '../constants'

const Slidesshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

  const handleSwipeLeft = () => {
    setCurrentSlideIndex(currentSlideIndex - 1)
  }

  const handleSwipeRight = () => {
    setCurrentSlideIndex(currentSlideIndex + 1)
  }

  return (
    <div>
      <h1>Slideshow Component</h1>
    </div>
  )
}

export default Slidesshow
