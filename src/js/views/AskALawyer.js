import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { QuestionBox } from "../component/questionbox";

export const AskALawyer = () => {
	const maxLength = 1000;
	const [question, setQuestion] = useState("");
	return (
		<form className="askQuestion">
			<div className="ask-form flex-column h-100">
				<p>Ask a lawyer any question!!</p>
				<textarea
					style={{ width: "400px" }}
					type="text"
					defaultValue={question}
					onChange={e => setQuestion(e.target.value)}
				/>
				{/* <TextField
					id="standard-full-width"
					style={{ margin: 6 }}
					placeholder="Write your question"
					helperText={"You have " + (maxLength - question.length) + " left"}
					fullWidth
					margin="dense"
					variant="outlined"
					multiline="true"
					defaultValue={question}
					onChange={e => setQuestion(e.target.value)}
					InputLabelProps={{
						shrink: true
					}}
                /> */}
				<p>{"You have " + (maxLength - question.length) + " left"}</p>
				<a className="send-email-button btn-primary btn-lg" href="#" role="button">
					Submit
				</a>
			</div>
			<QuestionBox />
		</form>
	);
};
