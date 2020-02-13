import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const CreateAccountForm = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [phone, setPhone] = useState("");
	const [kind, setKind] = useState("");
	const [lawfirm, setLawfirm] = useState("");

	return (
		<div className="create-account-form">
			<form>
				<div className="form-name">
					<label htmlFor="exampleFormControlInput1">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Full Name"
						defaultValue={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				{/* <div className="form-last-name">
					<label htmlFor="exampleFormControlInput1">Last Name</label>
					<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Doe" />
				</div> */}
				<div className="-form-email-name">
					<label htmlFor="exampleFormControlInput1">E-Mail</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="JohnDoe@MyMail.com"
						defaultValue={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-password">
					<label htmlFor="exampleFormControlInput1">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="*******"
						defaultValue={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-phone">
					<label htmlFor="exampleFormControlInput1">Phone Number</label>
					<input
						type="phone"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="(305)-555-1234"
						defaultValue={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<div className="form-zip-code">
					<label htmlFor="exampleFormControlInput1">Zip Code</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="33174"
						defaultValue={zipcode}
						onChange={e => setZipcode(e.target.value)}
					/>
				</div>
				<div className="form-law-firm">
					<label htmlFor="exampleFormControlInput1">Law Firm</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Law Firm Name"
						defaultValue={lawfirm}
						onChange={e => setLawfirm(e.target.value)}
					/>
				</div>
				<br />
				<a
					className="User-button btn-primary btn-lg"
					type="submit"
					href="#"
					role="button"
					onClick={() => {
						actions.addUser(email, name, password, zipcode, kind, phone);
						alert("User account has been created");
					}}>
					User
				</a>
				<a
					className="Lawyer-button btn-primary btn-lg"
					type="submit"
					href="#"
					role="button"
					onClick={() => {
						actions.addLawyer(email, name, password, phone, zipcode, lawfirm, kind);
						alert("Lawyer account has been created");
					}}>
					Lawyer
				</a>
			</form>
		</div>
	);
};
