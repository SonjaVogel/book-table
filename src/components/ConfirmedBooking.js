import { useLocation, useNavigate } from "react-router-dom";
import { useBackListener } from "../hooks/useBackListener";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { formatDate } from "../utils/utils";
import "../styles/BookingPage.css";

function ConfirmedBooking() {
	useScrollToTop();

	const navigate = useNavigate();
	useBackListener(() => navigate("/reserve-table", { replace: true }));
	const location = useLocation();
	const { date, time } = location.state || {};

	if (!date || !time) {
		return null;
	}

	const dateObject = new Date(date);
	const dateString = formatDate(dateObject);

	return (
		<section className="confirmed booking-page grid">
			<div className="confirmed booking-header">
				<h1 className="confirmed booking-title">
					Thank you for your reservation!
				</h1>
				<div>
					<h2>
						See you {dateString} at {time}!
					</h2>
					<img
						className="confirmed"
						src={`${process.env.PUBLIC_URL}/little lemon restaurant chef.jpg`}
						alt="Little Lemon Restaurant chef"
						width="393px"
						height="395px"
					/>
				</div>
			</div>
		</section>
	);
}

export default ConfirmedBooking;
