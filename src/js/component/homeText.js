import React from "react";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";

const HomeText = () => {
	return (
		<div className="homeText d-flex justify-content-around">
			<Card
				style={{
					width: "15%"
				}}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "15%"
				}}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "15%"
				}}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};
export default HomeText;
