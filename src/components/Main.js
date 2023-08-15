import { Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Homepage from "./Homepage";
import PageOutOfScope from "./PageOutOfScope";

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/reserve-table" element={<BookingPage />} />
				<Route
					path="/reservation-confirmation"
					element={<ConfirmedBooking />}
				/>
				<Route path="/out-of-scope" element={<PageOutOfScope />} />
			</Routes>
		</main>
	);
}

export default Main;
