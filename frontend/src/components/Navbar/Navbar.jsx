import React from 'react'
import logo from '../../assets/logos/logo-no-background.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="logo" className='logo' />
        </div>
        <ul className='navbar-links'>
            <li>Home</li>
            <li>About</li>
            <li>ML</li>
            <li>DL</li>
        </ul>
    </nav>
  )
}

export default Navbar
