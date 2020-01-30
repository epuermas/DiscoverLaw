import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const AskALawyer = () => {
	return (
		<form>
			<div className="ask-form flex-column h-100">
				<TextField
					id="standard-full-width"
					style={{ margin: 6 }}
					placeholder="Write your question"
					helperText="Normally an attorney will respond within 24 hours"
					fullWidth
					margin="dense"
					variant="outlined"
					multiline="true"
					InputLabelProps={{
						shrink: true
					}}
				/>
			</div>
		</form>
	);
};
