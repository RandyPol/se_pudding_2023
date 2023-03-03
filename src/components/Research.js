import React from 'react'
import ExpandedGraph from './ExpandedGraph'
import ResearchPaper from './ResearchPaper'
import { slides } from '../constants'

const SlidesShow = () => {
  // state for the currently selected slide
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [expanded, setExpanded] = React.useState(false)

  // Functionality for slide click
  function handleSlideClick(slideIndex) {
    setCurrentSlide(slideIndex)
    setExpanded(true)
  }

  return (
    <div className="slideshow page__slideshow">
      {expanded ? (
        <ExpandedGraph
          slides={slides}
          expanded={expanded}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setExpanded={setExpanded}
        />
      ) : (
        <ResearchPaper slides={slides} handleSlideClick={handleSlideClick} />
      )}
    </div>
  )
}

export default SlidesShow
