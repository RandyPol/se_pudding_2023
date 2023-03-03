import React from 'react'
import TinderLogo from '../images/tinder-logo.svg'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__containter">
        <img src={TinderLogo} alt="Tinder Logo" className="landing__logo" />
        <h1 className="landing__heading">Will You Find Love Swiping Right?</h1>
        <Link to="/dataSlide">
          <button className="landing__button-enter">Find Out</button>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage
