import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

const Header = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(prevShowNavbar => !prevShowNavbar);
	};

	return (
		<nav className="navbar grid">
			<div className="header-container">
				<div className="logo">
					<Link to="/">
						<img
							src={`${process.env.PUBLIC_URL}/Little Lemon Logo1.png`}
							alt="Little Lemon Logo"
						/>
					</Link>
				</div>
				<div className="menu-icon" onClick={handleShowNavbar}>
					<FontAwesomeIcon icon={faBars} size="2x" />
				</div>
				<div className={`nav-elements  ${showNavbar && "active"}`}>
					<ul>
						<li>
							<Link to="/" onClick={handleShowNavbar}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/reserve-table"
								onClick={handleShowNavbar}
							>
								Reserve a table
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
