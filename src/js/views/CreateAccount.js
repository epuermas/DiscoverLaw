import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateAccountForm } from "../component/createAccountForm";

export const CreateAccount = () => {
	return (
		<div className="d-flex flex-column h-100">
			<CreateAccountForm />
		</div>
	);
};
