import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import "../../styles/demo.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const LogIn = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	return (
		<div className="log-in-form">
			<div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Remember Me
					</label>
				</div>
				<br />
				<a
					to={"/findalawyer"}
					onClick={() => actions.login(email, password, props.history)}
					className="log-in-bt btn-primary btn-lg">
					Log In
				</a>
			</div>
		</div>
		// <div
		// 	className="modal fade"
		// 	id="myModal"
		// 	tabIndex="-1"
		// 	role="dialog"
		// 	aria-labelledby="exampleModalLongTitle"
		// 	aria-hidden="true">
		// 	<div className="modal-dialog" role="document">
		// 		<div className="modal-content">
		// 			<div className="modal-header">
		// 				<h5 className="modal-title" id="exampleModalLongTitle">
		// 					Modal title
		// 				</h5>
		// 				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
		// 					<span aria-hidden="true">&times;</span>
		// 				</button>
		// 			</div>
		// 			<div className="modal-body">
		// 				{/* Modal contents go here */}
		// 				<div className="log-in-form">
		// 					<form>
		// 						<div className="form-group">
		// 							<label htmlFor="exampleInputEmail1">Email address</label>
		// 							<input
		// 								type="email"
		// 								className="form-control"
		// 								id="exampleInputEmail1"
		// 								aria-describedby="emailHelp"
		// 							/>
		// 						</div>
		// 						<div className="form-group">
		// 							<label htmlFor="exampleInputPassword1">Password</label>
		// 							<input type="password" className="form-control" id="exampleInputPassword1" />
		// 						</div>
		// 						<div className="form-group form-check">
		// 							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
		// 							<label className="form-check-label" htmlFor="exampleCheck1">
		// 								Remember Me
		// 							</label>
		// 						</div>
		// 						<br />
		// 						<button type="submit" className="btn btn-primary">
		// 							Log In
		// 						</button>
		// 					</form>
		// 				</div>
		// 				{/* End of modal contents */}
		// 			</div>
		// 			<div className="modal-footer">
		// 				<button type="button" className="btn btn-secondary" data-dismiss="modal">
		// 					Close
		// 				</button>
		// 				<button type="button" className="btn btn-primary">
		// 					Save changes
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};
LogIn.propTypes = {
	history: PropTypes.object
};
