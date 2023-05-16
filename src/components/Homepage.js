import Hero from './Hero';
import Specials from './Specials';
import Reviews from './Reviews';
import About from './About';

function Homepage() {
    return(
        <main>
            <Hero />
            <Specials />
            <Reviews />
            <About />
        </main>
    )
}

export default Homepage;