/* import '../styles/Specials.css';
import SpecialsCardContainer from './SpecialsCardContainer';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const cards = [
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

function Specials(props) {

    const styles = props.home ? {} : {backgroundColor: 'var(--primary-green)', color: 'var(--primary-yellow)', paddingTop: '50px', pColor: 'var(--highlight-lgrey)'};

    return(
        <section
            className={`specials grid`}
            style={{backgroundColor: styles.backgroundColor, paddingTop: styles.paddingTop}}>
            <div className="specials-header">
                <h2 className={`${props.home ? 'section-title' : 'not-home'}`}
                    style={{color: styles.color}}>
                    Weekly specials!
                </h2>
                <button className="desktop">Online Menu</button>
            </div>
            <Container className="specials-container">
                <SpecialsCardContainer cards={cards} />
            </Container>
            <NavLink to="/menu">
                <button className="mobile">Online Menu</button>
            </NavLink>
        </section>
    )
}

export default Specials; */

import '../styles/Specials.css';
import SpecialsCardContainer from './SpecialsCardContainer';
import Container from 'react-bootstrap/Container';

const cards = [
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
            <Container className="specials-container">
                <SpecialsCardContainer cards={cards} />
            </Container>
            <button className="mobile">Online Menu</button>
        </section>
    )
}

export default Specials;