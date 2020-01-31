import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const AskALawyer = () => {
	const maxLength = 1000;
	const [question, setQuestion] = useState("");
	return (
		<form>
			<div className="ask-form flex-column h-100">
				<TextField
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
				/>
			</div>
			<a className="send-email-button btn-primary btn-lg" href="#" role="button">
				About Us
			</a>
		</form>
	);
};
