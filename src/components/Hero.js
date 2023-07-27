import '../App.css';
import '../styles/Hero.css';
import { NavLink } from 'react-router-dom';

const shortAbout = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

function Hero() {
    return(
        <section className="hero grid">
            <div className="hero-item">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="CTA-lead-text">
                        {shortAbout}
                    </p>
                    <NavLink to="/reserve-table">
                        <button>Reserve a Table</button>
                    </NavLink>
                </div>
            </div>
            <div className="hero-item">
                <img src="heroimage.jpg" alt="Little Lemon's bruschetta assortment" />
            </div>
        </section>
    )
}

export default Hero;