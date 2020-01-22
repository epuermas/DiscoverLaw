import React from "react";
import "../../styles/home.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Jumbotron } from "../component/jumbotron";

// import { LogIn } from "./component/login";
// import { CreateAccount } from "./views/CreateAccount";
// import { Single } from "./views/single";

export const Home = () => {
	return (
		<div className="d-flex flex-column h-100">
			<Jumbotron />
		</div>
	);
};
