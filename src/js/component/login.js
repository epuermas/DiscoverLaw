import { Link } from "react-router-dom";
import React, { useState } from "react";

export const LogIn = () => {
	return (
		<div className="log-in-form">
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Remember Me
					</label>
				</div>
				<br />
				<button type="submit" className="btn btn-primary">
					Log In
				</button>
			</form>
		</div>
	);
};
