import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css';

function Footer() {
    return(
        <footer className="grid">
            <div className="footer-item">
                <img src="Footer logo.png" alt="Logo" className="logo"/>
            </div>
            <div className="footer-item">
                <address>
                        <h2>Contact</h2>
                        <p>+12 345 678 9900<br/>
                        info@littlelemon.com<br/>
                        5301 S Hyde Park Blvd, Chicago, IL 60615</p>
                        <a href="https://www.instagram.com/"><img src="instagram.png" className="socialicon" /></a>
                        <a href="https://www.facebook.com/"><img src="facebook.png" className="socialicon" /></a>
                </address>
            </div>
    </footer>
    )
}

export default Footer;