import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="jumbotron-fluid">
			<center className="jumtext">
				<h1 className="display-4">Welcome to DiscoverLaw</h1>
				<p className="lead">Legal help is just a few clicks away.</p>
				<br />
				<a className="log-in btn-primary btn-lg" href="#" role="button">
					Log In
				</a>
				<a className="create-account btn-primary btn-lg" href="#" role="button">
					Create Account
				</a>
			</center>
		</div>
	);
};
