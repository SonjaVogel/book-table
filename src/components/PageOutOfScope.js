import { useScrollToTop } from "../hooks/useScrollToTop";

function PageOutOfScope() {
	useScrollToTop();

	return (
		<section className="out-scope confirmed booking-page grid">
			<div className="confirmed booking-header">
				<h1 className="confirmed booking-title">
					This page is out of scope for this portfolio project.
				</h1>
				<div>
					<h2>
						Please visit the <a href="/">homepage</a> or{" "}
						<a href="/reserve-table">reserve a table page</a>{" "}
						instead.
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

export default PageOutOfScope;
