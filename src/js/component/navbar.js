import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<div className="company-logo">
						<img src="https://i.imgur.com/Hkm9zHE.png" width="100%" alt="" className="pull-left" />
					</div>
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>

					<li className="nav-item">
						<Link to={"findalawyer"} className="nav-link" href="#">
							Find A Lawyer
						</Link>
					</li>

					<li className="nav-item">
						<Link to={"/askalawyer"} className="nav-link" href="#">
							Ask A Lawyer
						</Link>
					</li>
				</ul>
				<div className="ml-auto">
					<Link to={"/login"} className="log-in btn-primary btn-lg" href="#" role="button">
						Log In
					</Link>
					<Link to={"/createAccount"} className="create-account btn-primary btn-lg" href="#" role="button">
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
};
