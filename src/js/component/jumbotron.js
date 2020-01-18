import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="jumbotron-fluid">
			<center className="jumtext">
				<h1 className="display-4">Welcome to DiscoverLaw</h1>
				<p className="lead">Legal help is just a few clicks away.</p>
				<br />
				<div className="ml-auto">
					<Link to="login">
						<button className="log-in btn-primary btn-lg">Log In</button>
					</Link>
					<Link to="/createAccountForm">
						<button className="create-account btn-primary btn-lg">Sing Up</button>
					</Link>
				</div>
			</center>
		</div>
	);
};
