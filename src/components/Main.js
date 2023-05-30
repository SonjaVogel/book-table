import Homepage from './Homepage';
import BookingPage from './BookingPage';
/* import About from './About';
import Specials from './Specials'; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {

    return(
        <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/reserve-table" element={<BookingPage />} />
                </Routes>

        </main>
    )
}

export default Main;
/* 
<Route path="/about" element={<About home={false} />} />
<Route path="/menu" element={<Specials home={false} />} /> */