import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Demo } from "../views/demo";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<a className="about-button btn-primary btn-lg" href="#" role="button">
			About Us
		</a>

		<div className="ml-auto">
			<Link to="demo">
				<a className="fal-button btn-primary btn-lg" href="#" role="button">
					Find A Lawyer
				</a>
			</Link>
		</div>

		<a className="contact-us-button btn-primary btn-lg" href="#" role="button">
			Contact Us
		</a>

		<p>
			<br />
			Made with <i className="fa fa-heart text-danger" /> by E.Puermas, J.Guzman, Abel
		</p>
	</footer>
);
