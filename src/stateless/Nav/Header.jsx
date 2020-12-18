import React from 'react'
import Nav from './Nav'

import Logo from './Logo'

// This is a stateless design piece. This is set on the Home Page and flows through the other components from there

const Header = () => {
  return (
    <div className='center'>
      <div className="myNav">
      <Logo />
      <Nav />
      
      </div>
      <div className="line"></div>
    </div>
  )
}

export default Header
