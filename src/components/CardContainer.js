import PropTypes from "prop-types";
import SpecialsCard from "./SpecialsCard";
import ReviewsCard from "./ReviewsCard";

function CardContainer(props) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "nowrap",
			}}
		>
			{props.cards.map(card => {
				if (props.type === "specials") {
					return (
						<SpecialsCard
							key={card.title}
							img={card.img}
							title={card.title}
							price={card.price}
							text={card.text}
							link={card.link}
						/>
					);
				} else if (props.type === "reviews") {
					return (
						<ReviewsCard
							key={card.name}
							img={card.img}
							name={card.name}
							rating={card.rating}
							text={card.text}
						/>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
}

CardContainer.propTypes = {
	cards: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
};

export default CardContainer;
