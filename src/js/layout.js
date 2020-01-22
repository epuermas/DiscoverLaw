import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { CreateAccount } from "./views/CreateAccount";
import { UserProfile } from "./views/UserProfile";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LogIn } from "./component/login";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/login" component={LogIn} />
						<Route path="/CreateAccount" component={CreateAccount} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					{/* <div className="log-in-form-landing">
						<CreateAccountForm />
					</div>
					<br /> */}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
