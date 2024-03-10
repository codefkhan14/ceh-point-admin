import React from 'react'
import "./Header.css"
import Logo from "../../Assets/logo.png"

const Header = () => {
  return (
    <div className='header'>
      <div className='left'>
        <img className='logo' src={Logo} alt="Logo" />
      </div>
      <div className="right">
        <button className='Log'>Logout</button>
      </div>
    </div>
  )
}

export default Header