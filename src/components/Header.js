import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        if (!showNavbar) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
            setTimeout(() => setShowNavbar(false), 10);
        }
}

    return (
        <nav className="navbar grid">
            <div className="header-container">
                <div className="logo">
                    <NavLink to="/">
                        <img src="Little Lemon Logo1.png" alt="Little Lemon Logo"/>
                    </NavLink>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li><NavLink to="/" onClick={handleShowNavbar}>Home</NavLink></li>
                        <li><NavLink to="/reserve-table" onClick={handleShowNavbar}>Reserve a table</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
  }

  export default Header