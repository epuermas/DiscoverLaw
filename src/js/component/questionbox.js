import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const QuestionBox = () => {
	const { store } = useContext(Context);
	return (
		<div
			className="questionBox"
			style={{
				position: "absolute",
				width: "400px",
				height: "auto",
				left: "10%",
				top: "200px",
				backgroundColor: "#Dad7d7",
				padding: "10px"
			}}>
			{store.questions.map((e, index) => (
				<p key={index}>{e.question}</p>
			))}
		</div>
	);
};
