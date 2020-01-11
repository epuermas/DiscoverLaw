import { Link } from "react-router-dom";
import React, { useState } from "react";

export const CreateAccountForm = () => {
	return (
		<div className="create-account-form">
			<form>
				<div className="form-first-name">
					<label htmlFor="exampleFormControlInput1">First Name</label>
					<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" />
				</div>
				<div className="form-last-name">
					<label htmlFor="exampleFormControlInput1">Last Name</label>
					<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Doe" />
				</div>
				<div className="-form-email-name">
					<label htmlFor="exampleFormControlInput1">E-Mail</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="JohnDoe@MyMail.com"
					/>
				</div>
				<div className="form-password">
					<label htmlFor="exampleFormControlInput1">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="*******"
					/>
				</div>
				<div className="form-zip-code">
					<label htmlFor="exampleFormControlInput1">Zip Code</label>
					<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="33174" />
				</div>
				<br />
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		</div>
	);
};
