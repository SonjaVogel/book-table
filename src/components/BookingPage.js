import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { useScrollToTop } from "../hooks/useScrollToTop";
import "../styles/BookingPage.css";

function BookingPage(props) {
	useScrollToTop();
	const navigate = useNavigate();

	return (
		<section className="booking-page grid form">
			<div className="booking-header">
				<h1 className="booking-title">Reserve a Table</h1>
				<img
					src={`${process.env.PUBLIC_URL}/restaurant-interior.jpg`}
					alt="Little Lemon restaurant interior"
					width="337px"
					height="225px"
					style={{ marginTop: "48px" }}
				/>
			</div>
			<div className="booking-form">
				<ChakraProvider disableGlobalStyle>
					<BookingForm
						availableTimes={props.availableTimes}
						dispatch={props.dispatch}
						date={props.date}
						setDate={props.setDate}
						navigate={navigate}
					/>
				</ChakraProvider>
			</div>
		</section>
	);
}

export default BookingPage;
