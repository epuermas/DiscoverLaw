import React from "react";
import { Link } from "react-router-dom";
import { Demo } from "../views/demo";
import { login } from "./login";

export const Jumbotron = () => {
	return (
		<div className="jumbotron-fluid">
			<center className="jumtext">
				<h1 className="display-4">Welcome to DiscoverLaw</h1>
				<p className="lead">Legal help is just a few clicks away.</p>
				<br />
				<div className="log-in-sign-up ml-auto">
					{/* <!-- Trigger the modal with a button --> */}
					{/* <button className="log-in btn-primary btn-lg" href="#" data-toggle="modal" data-target="#myModal">
						Log In
					</button> */}
					<Link to={"/login"} className="log-in btn-primary btn-lg" href="#" role="button">
						Log In
					</Link>
					<Link to={"/createAccount"} className="create-account btn-primary btn-lg" href="#" role="button">
						Sign Up
					</Link>
				</div>
			</center>
		</div>
	);
};

// < !--Button trigger modal-- >
//     <Link to={"/login"} className="log-in btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalLong">
//         Launch demo modal
// </Link>
