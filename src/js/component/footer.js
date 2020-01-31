import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Demo } from "../views/demo";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<Link to={""} className="about-button" href="#">
			About Us
		</Link>

		<Link to={"findalawyer"} className="fal-button" href="#">
			Find A Lawyer
		</Link>

		<Link to={"/askalawyer"} className="aal-button" href="#">
			Ask A Lawyer
		</Link>

		<p>
			<br />
			Made with <i className="fa fa-heart text-danger text-center" /> by E.Puermas, J.Guzman, Abel
		</p>
	</footer>
);
