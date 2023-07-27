import Hero from './Hero';
import Specials from './Specials';
import Reviews from './Reviews';
import About from './About';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Homepage() {

    useScrollToTop();

    return(
        <>
            <Hero />
            <Specials />
            <Reviews />
            <About />
        </>
    )
}

export default Homepage;