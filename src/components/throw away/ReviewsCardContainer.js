import CardComponent from '../ReviewsCard';

function ReviewsCardContainer(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            {props.cards.map((card) => (
                <CardComponent
                    key={card.name}
                    img={card.img}
                    name={card.name}
                    rating={card.rating}
                    text={card.text} />
            ))}
        </div>
    );
}

export default ReviewsCardContainer;