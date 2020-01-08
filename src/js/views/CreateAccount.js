import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CreateAccount = () => {
	const { store, actions } = useContext(Context);

	return <div className="create-account" />;
};
