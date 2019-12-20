import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<img src="https://image.freepik.com/free-photo/judge-holding-pen-checking-document-wooden-desk_23-2147898393.jpg" />
			<center>
				<h1 className="display-4">Welcome to DiscoverLaw</h1>
				<p className="lead">Legal help is just a few clicks away.</p>
				<br />
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Get started
				</a>
			</center>
		</div>
	);
};
