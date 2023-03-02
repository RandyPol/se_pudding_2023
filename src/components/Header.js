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

      <button
        className="header__button-add"
        onClick={() => console.log('popupform')}
      >
        Check How You Match
      </button>

      <Link to="/team" className="header__profile-link">
        <button
          className="header__button-add"
          onClick={() => console.log('popupform')}
        >
          Team
        </button>
      </Link>
    </header>
  )
}

export default Header
