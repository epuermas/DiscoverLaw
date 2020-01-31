import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Demo } from "../views/demo";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import "../../styles/index.scss";

export const Footer = () => (
	<footer
		className="footer mt-auto py-3"
		style={{
			position: "absolute",
			width: "100%",
			height: "200px",
			bottom: "0",
			backgroundColor: "#F9E4C5"
		}}>
		<Link to={"/askalawyer"} className="aal-button">
			Ask A Lawyer
		</Link>
		<Link to={"findalawyer"} className="fal-button">
			Find A Lawyer
		</Link>
		<Link to={"/"} className="home-button">
			Home
		</Link>
		<SocialIcon url="https://www.instagram.com/eddy_prms/" id="instagram" />
		<SocialIcon url="https://github.com/epuermas" id="github" />
		<SocialIcon url="https://twitter.com/home" id="twitter" />
	</footer>
);

/* <Link to={""} className="about-button" href="#">
			About Us
		</Link>

		



		{/* <p>
			<br />
			Made with <i className="fa fa-heart text-danger text-center" /> by E.Puermas, J.Guzman, Abel
        </p> */

// <p>
// 	<br />
// 	<SocialIcon url="http://twitter.com/jaketrent" />
// </p>
