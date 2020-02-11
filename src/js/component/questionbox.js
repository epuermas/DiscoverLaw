import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const QuestionBox = () => {
	const { store } = useContext(Context);
	return (
		<div>
			{store.questions.map((e, index) => (
				<p key={index}>{e.question}</p>
			))}
		</div>
	);
};
