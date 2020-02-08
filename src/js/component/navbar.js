import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
						<img src="https://i.imgur.com/weh324h.png" width="100%" alt="" className="pull-left" />
					</div>
					<li className="nav-item active">
						<a className="nav-link" href="/" id="navHome">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>

					<li className="nav-item">
						<Link to={"findalawyer"} className="nav-link" href="#" id="navFind">
							Find A Lawyer
						</Link>
					</li>

					<li className="nav-item">
						<Link to={"/askalawyer"} className="nav-link" href="#" id="navAsk">
							Ask A Lawyer
						</Link>
					</li>
				</ul>
				<div className="ml-auto">
					{store.token != undefined ? (
						<Link
							to="/"
							onClick={() => actions.logout()}
							className="log-in btn-primary btn-lg"
							href="#"
							role="button">
							Log Out
						</Link>
					) : (
						<Link to={"/login"} className="log-in btn-primary btn-lg" href="#" role="button">
							Log In
						</Link>
					)}
					<Link to={"/createAccount"} className="create-account btn-primary btn-lg" href="#" role="button">
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
};
