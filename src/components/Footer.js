import "../styles/Footer.css";

function Footer() {
	return (
		<footer className="grid">
			<div className="footer-item">
				<img
					src={`${process.env.PUBLIC_URL}/Footer logo.png`}
					alt="Little Lemon Logo"
					className="logo"
				/>
			</div>
			<div className="footer-item">
				<address>
					<h2>Contact</h2>
					<p>
						+12 345 678 9900
						<br />
						info@littlelemon.com
						<br />
						5301 S Hyde Park Blvd, Chicago, IL 60615
					</p>
					<span>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={`${process.env.PUBLIC_URL}/instagram.png`}
								className="socialicon"
								alt="Little Lemon Instagram icon"
							/>
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={`${process.env.PUBLIC_URL}/facebook.png`}
								className="socialicon"
								alt="Little Lemon Facebook icon"
							/>
						</a>
					</span>
				</address>
			</div>
		</footer>
	);
}

export default Footer;
