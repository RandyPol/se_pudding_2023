import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">&copy; {currentYear} Tinder Data Pudding</p>
        <a
          href="https://github.com/RandyPol/se_pudding_2023"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
    </footer>
  )
}

export default Footer
