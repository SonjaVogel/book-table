import { Link } from "react-router-dom";
import "../styles/Hero.css";

const shortAbout =
	"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

function Hero() {
	return (
		<section className="hero grid">
			<div className="hero-item">
				<div>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p className="CTA-lead-text">{shortAbout}</p>
					<Link to="/reserve-table" className="button-style">
						Reserve a Table
					</Link>
				</div>
			</div>
			<div className="hero-item">
				<img
					src={`${process.env.PUBLIC_URL}/heroimage.jpg`}
					alt="Little Lemon's bruschetta assortment"
				/>
			</div>
		</section>
	);
}

export default Hero;
