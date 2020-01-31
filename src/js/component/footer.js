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
			bottom: "0"
		}}>
		<div
			style={{
				position: "absolute",
				width: "25%",
				height: "100%",
				backgroundColor: "green",
				left: "75%"
			}}>
			<SocialIcon
				style={{ margin: "5px", position: "absolute", right: "0", color: "black" }}
				url="http://twitter.com/jaketrent"
			/>
		</div>
	</footer>
);
/* <Link to={""} className="about-button" href="#">
			About Us
		</Link>

		<Link to={"findalawyer"} className="fal-button" href="#">
			Find A Lawyer
		</Link>

		<Link to={"/askalawyer"} className="aal-button" href="#">
			Ask A Lawyer
		</Link>

		{/* <p>
			<br />
			Made with <i className="fa fa-heart text-danger text-center" /> by E.Puermas, J.Guzman, Abel
        </p> */

// <p>
// 	<br />
// 	<SocialIcon url="http://twitter.com/jaketrent" />
// </p>
