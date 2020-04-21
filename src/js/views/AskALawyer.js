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
	// console.log("kind", store.kind);
	// console.log("userrrrrrrrrrrrrrrr", store.currentUser);

	return (
		<div>
			{/* askQuestion */}
			<div className="form-group">
				<div className="ask-form flex-column h-100">
					<div className="row">
						<div className="col-2 m-0 p-0" />
						<h3 className="col-6 d-flex justify-content-center" style={{ color: "#DCAA69" }}>
							Ask a lawyer any question.
						</h3>
						{/* <div className="col-4 m-0 p-0" /> */}
					</div>
					<div className="row">
						<div className="col m-0 p-0" />
						<textarea
							className="col-6 align-self-center mb-5"
							// style={{ width: "450px" }}
							type="text"
							defaultValue={question}
							onChange={e => setQuestion(e.target.value)}
						/>
						<div className="col m-0 p-0" />
					</div>
					<div className="below-ask-question">
						{/* <p>{"You have " + (maxLength - question.length) + " left"}</p> */}
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
			</div>
			<QuestionBox />
		</div>
	);
};
