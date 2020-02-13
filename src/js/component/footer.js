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
			position: "relative",
			width: "100%",
			height: "230px",
			bottom: "0%",
			top: "33%",
			backgroundColor: "#F9E4C5"
		}}>
		<div className="copyright-info">
			<p>DiscoverLaw Copyright © 2020</p>
		</div>
		<div className="footerMenu">
			<Link to={"/askalawyer"}>
				<div className="askL">Ask A Lawyer</div>
			</Link>
			<Link to={"/"}>
				<div className="homeL">Home</div>
			</Link>
			<Link to={"findalawyer"}>
				<div className="findL">Find A Lawyer</div>
			</Link>
		</div>
		<div className="socialMedia">
			<a
				className="fab fa-instagram insta"
				style={{
					color: "black"
				}}
				href="https://www.instagram.com/eddy_prms/"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className="fab fa-twitter-square twitter"
				style={{
					color: "black"
				}}
				href="https://twitter.com/eddy_prms"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<a
				className="fab fa-github-square github"
				style={{
					color: "black"
				}}
				href="https://github.com/epuermas"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</footer>
);
