import About from "./About";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Specials from "./Specials";
import { useScrollToTop } from "../hooks/useScrollToTop";

function Homepage() {
	useScrollToTop();

	return (
		<>
			<Hero />
			<Specials />
			<Reviews />
			<About />
		</>
	);
}

export default Homepage;
