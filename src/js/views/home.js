import React from "react";
import "../../styles/home.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Jumbotron } from "../component/jumbotron";

// import { LogIn } from "./component/login";
// import { CreateAccount } from "./views/CreateAccount";
// import { Single }  "./views/single";

export const Home = () => {
	return (
		<div>
			<div className="d-flex flex-column h-100">
				<Jumbotron />
			</div>

			<div className="homeText">
				<div className="searchIcon">
					<i className="fas fa-search" role="button" />
					<h1 className>Find Lawyers Near You</h1>
					{/* <p>
						"Using our registry of attorneys you will be able to find the right counsil depending on your
						legal needs."
					</p> */}
				</div>
			</div>
		</div>
	);
};
