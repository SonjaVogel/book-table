import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return(
        <footer>
        <img src="Footer logo.png" alt="Logo" />
        <Nav />
        <address>
                +12 345 678 9900<br/>
                info@littlelemon.com<br/>
                5301 S Hyde Park Blvd, Chicago, IL 60615
        </address>
        <a href="https://www.instagram.com/"><img src="instagram.svg"></img></a>
        <a href="https://www.facebook.com/"><img src="facebook.svg"></img></a>
      </footer>
    )
}

export default Footer;