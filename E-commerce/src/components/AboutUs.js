import React from "react";

const AboutUs = () => {
	return (
		<div className="container-fluid mt-5">
			<div className="row align-items-center">
				{/* Image Section */}
				<div className="col-12 col-md-6 mb-4 mb-md-0">
					<img
						src="/Assets/Shoes/img14.jpg"
						alt="About Us"
						className="img-fluid"
						style={{
							height: "auto",
							maxHeight: 600,
							width: "100%",
							maxWidth: 500,
						}}
					/>
				</div>
				{/* Text Section */}
				<div className="col-12 col-md-6">
					<h4 className="text-warning fw-bolder">About Us</h4>
					<h4 className="fw-bold mt-3" style={{ fontSize: "1.5rem" }}>
						Selected materials designed for comfort and sustainability.
					</h4>
					<p className="text-muted mt-3">
						Our aim is to consistently meet the demands of our
						customers by providing high-quality products that not
						only fulfill their needs but also enhance their overall
						experience. We are committed to ensuring their comfort
						and satisfaction by delivering exceptional value and
						reliable solutions. By prioritizing customer feedback
						and continuously improving our offerings, we strive to
						build lasting relationships and maintain their trust.
						Our dedication to excellence drives us to exceed
						expectations, ensuring that every interaction leaves a
						positive and lasting impact.
					</p>
					<button className="text-primary mt-3">READ MORE</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
