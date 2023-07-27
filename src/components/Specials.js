import '../styles/SpecialsReviews.css';
import React from 'react';
import CardContainer from './CardContainer';
import Container from 'react-bootstrap/Container';

const specials = [
    {
        img: 'greek salad.jpg',
        title: 'Greek Salad',
        price: '$12.99',
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        link: '#'
    },
    {
        img: 'bruschetta.jpg',
        title: 'Bruschetta',
        price: '$5.99',
        text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        link: '#'
    },
    {
        img: 'lemon dessert.jpg',
        title: 'Lemon Dessert',
        price: '$5.99',
        text: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        link: '#'
    }
];

function Specials() {

    return(
        <section className="specials grid">
            <div className="specials-header">
                <h2>
                    <span className="section-title">
                        Weekly specials!
                    </span>
                </h2>
                <button className="desktop">Online Menu</button>
            </div>
            <Container className="scrollable-cards-container">
                <CardContainer type="specials" cards={specials} />
            </Container>
            <button className="mobile">Online Menu</button>
        </section>
    )
}

export default Specials;