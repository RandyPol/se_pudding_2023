import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/tinder-flame.png'

const Header = () => {
  return (
    <header className="header page__headerchild">
      <Link to="/" className="header__logo-container">
        <img className="header__logo" src={logo} alt="Data icon" />
        <p className="header__logo-text">Tinder Data Pudding</p>
      </Link>
      <div>
        <Link to="/dataSlide" className="header__project-link">
          <button className="header__button header__button-research">Research</button>
        </Link>
        <Link to="/team" className="header__profile-link">
          <button className="header__button header__button-team">Team</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
