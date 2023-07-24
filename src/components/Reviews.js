import '../styles/Reviews.css';
import ReviewsCardContainer from './ReviewsCardContainer';
import Container from 'react-bootstrap/Container';

const reviews = [
    {
        img: 'ProfilePicWoman1.jpg',
        name: 'Sara Lopez',
        rating: 4,
        text: 'Such a chilled out atmosphere - love it!',
    },
    {
        img: 'ProfilePicMan1.jpg',
        name: 'John Dough',
        rating: 5,
        text: 'Best Feta Salad in town. Flawless everytime!',
    },
    {
        img: 'ProfilePicWoman2.jpg',
        name: 'Rowan Lebbis',
        rating: 5,
        text: 'Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!',
    },
    {
        img: 'ProfilePicMan2.jpg',
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
            <ReviewsCardContainer cards={reviews} />
        </Container>
    </section>
    )
}

export default Reviews;