import CardComponent from '../SpecialsCard';

function SpecialsCardContainer(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
            {props.cards.map((card) => (
                <CardComponent
                    key={card.title}
                    img={card.img}
                    title={card.title}
                    price={card.price}
                    text={card.text}
                    link={card.link} />
            ))}
        </div>
    );
}

export default SpecialsCardContainer; 