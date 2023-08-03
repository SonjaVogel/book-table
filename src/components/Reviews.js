import '../styles/SpecialsReviews.css';
import CardContainer from './CardContainer';
import Container from 'react-bootstrap/Container';

const reviews = [
    {
        img: `${process.env.PUBLIC_URL}/ProfilePicWoman1.jpg`,
        name: 'Sara Lopez',
        rating: 4,
        text: 'Such a chilled out atmosphere - love it!',
    },
    {
        img: `${process.env.PUBLIC_URL}/ProfilePicMan1.jpg`,
        name: 'John Dough',
        rating: 5,
        text: 'Best Feta Salad in town. Flawless everytime!',
    },
    {
        img: `${process.env.PUBLIC_URL}/ProfilePicWoman2.jpg`,
        name: 'Rowan Lebbis',
        rating: 5,
        text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!',
    },
    {
        img: `${process.env.PUBLIC_URL}/ProfilePicMan2.jpg`,
        name: 'Paul E.',
        rating: 4,
        text: 'We had such a great time celebrating my grandmothers birthday!',
    }
];

function Reviews() {
    return(
        <section className="reviews grid">
            <h2 className="reviews-title">What our customers say</h2>
                <Container className="scrollable-cards-container">
                    <CardContainer type="reviews" cards={reviews} />
                </Container>
        </section>
    )
}

export default Reviews;