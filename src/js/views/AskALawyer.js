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
					<p>Ask a lawyer any question.</p>
					<textarea
						style={{ width: "450px" }}
						type="text"
						defaultValue={question}
						onChange={e => setQuestion(e.target.value)}
					/>
					<div className="below-ask-question">
						<p>{"You have " + (maxLength - question.length) + " left"}</p>
						<a
							className="send-email-button btn-primary btn-lg"
							href="#"
							onClick={() => {
								actions.createQuestion(question);
							}}
							role="button">
							Submit
						</a>
					</div>
				</div>
				<div className="question-box">
					<QuestionBox />
				</div>
			</div>
		</div>
	);
};
