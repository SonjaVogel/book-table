import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import "../styles/SpecialsReviews.css";

const specials = [
	{
		img: `${process.env.PUBLIC_URL}/greek salad.jpg`,
		title: "Greek Salad",
		price: "$12.99",
		text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
		link: "/out-of-scope",
	},
	{
		img: `${process.env.PUBLIC_URL}/bruschetta.jpg`,
		title: "Bruschetta",
		price: "$5.99",
		text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
		link: "/out-of-scope",
	},
	{
		img: `${process.env.PUBLIC_URL}/lemon dessert.jpg`,
		title: "Lemon Dessert",
		price: "$5.99",
		text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		link: "/out-of-scope",
	},
];

function Specials() {
	return (
		<section className="specials grid">
			<div className="specials-header">
				<h2>
					<span className="section-title">Weekly specials!</span>
				</h2>
				<Link to="/out-of-scope" className="button-style desktop">
					Online Menu
				</Link>
			</div>
			<Container className="scrollable-cards-container">
				<CardContainer type="specials" cards={specials} />
			</Container>
			<Link to="/out-of-scope" className="button-style mobile">
				Online Menu
			</Link>
		</section>
	);
}

export default Specials;
