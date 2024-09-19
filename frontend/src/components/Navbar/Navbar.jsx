import React from 'react'
import logo from '../../assets/logos/logo-no-background.png'
import './Navbar.css'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo"><Link to="/" ><img src={logo} alt="logo" className='logo' /></Link>

      </div>
      <ul className='navbar-links'>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/ml'> ML</Link></li>
        <li><Link to='/dl'> DL</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
