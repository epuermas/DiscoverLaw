import React, { useContext } from "react";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext";

const HomeText = () => {
	const { store } = useContext(Context);
	console.log("I want to se cards", store.cards);
	return (
		<div className="homeText d-flex justify-content-around">
			{store.cards.map((e, index) => {
				return (
					<Card
						key={index}
						style={{
							width: "15%"
						}}>
						<Card.Body>
							<Card.Title id="card-image">{e.image}</Card.Title>
							<Card.Title>{e.title}</Card.Title>
							<Card.Text>{e.description}</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};
export default HomeText;
