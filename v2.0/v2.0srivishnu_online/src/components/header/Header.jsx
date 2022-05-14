import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
const Header = () => {
  return (
    <header>
      <div className="container header__cointainer">
        <h5>Hello I'm</h5>
        <h1>Sri Vishnu</h1>
        <h5 className="text-light">Fullstack Develloper</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="a beautiful handsome bald gentleman" />
        </div>

        <a href="#contact" className="scroll__down">Go to the botom of Page</a>

      </div>
    </header>
  )
}

export default Header