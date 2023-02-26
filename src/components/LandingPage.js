import React from 'react'
import TinderLogo from '../images/tinder-logo.svg'

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__containter">
        <img src={TinderLogo} alt="Tinder Logo" className="landing__logo" />
        <h1 className="landing__heading">
          What Millennial Users Should Expect When They Swipe?
        </h1>
        <button className="landing__button-enter">Find Out</button>
      </div>
    </div>
  )
}
export default LandingPage
