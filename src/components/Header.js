import '../styles/Header.css';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
      <nav className="navbar">
        <div className="header-container">
            <div className="logo">
                <img src="Little Lemon Logo1.png" alt="Little Lemon Logo" width="200px"/>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reserve-table">Reservations</NavLink></li>
                <li><NavLink to="/order-online">Order&nbsp;Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            </div>
        </div>
      </nav>
    )
  }

  export default Header