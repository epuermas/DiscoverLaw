import React from "react";
import "../../styles/home.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Jumbotron } from "../component/jumbotron";
import HomeText from "../component/homeText";

// import { LogIn } from "./component/login";
// import { CreateAccount } from "./views/CreateAccount";
// import { Single }  "./views/single";

export const Home = () => {
	return (
		<div className="content">
			<div className="d-flex flex-column h-100">
				<Jumbotron />
				<HomeText />
			</div>
		</div>
	);
};
