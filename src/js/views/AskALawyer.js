import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Context } from "../store/appContext";
import { QuestionBox } from "../component/questionbox";

export const AskALawyer = () => {
	const { store, actions } = useContext(Context);
	const maxLength = 1000;
	const [question, setQuestion] = useState("");
	return (
		<div>
			<div className="askQuestion">
				<div className="ask-form flex-column h-100">
					<p>Ask a lawyer any question!!</p>
					<textarea
						style={{ width: "400px" }}
						type="text"
						defaultValue={question}
						onChange={e => setQuestion(e.target.value)}
					/>
					<p>{"You have " + (maxLength - question.length) + " left"}</p>
					<button
						className="send-email-button btn-primary btn-lg"
						href="#"
						onClick={() => {
							actions.createQuestion(question);
						}}
						role="button">
						Submit
					</button>
				</div>
				<QuestionBox />
			</div>
		</div>
	);
};
