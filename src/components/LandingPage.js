import React from 'react'
import TinderLogo from '../images/tinder-logo.svg'

function LandingPage() {
  return (
    <div className="landing">
      <img src={TinderLogo} alt="Tinder Logo" className="tinder-logo" />
      <h1 className="heading">
        Find Out What the Millennial Tinder User Match Rate Is
      </h1>
      <button className="btn">Enter</button>
    </div>
  )
}
export default LandingPage
