import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const LawyerAnswer = () => {
	const { actions } = useContext(Context);
	const [answer, setAnswer] = useState("");
	return (
		<div>
			<div className="row m-3 mt-5">
				<div className="col" />
				<div className="col-6 pt-2 questionBox">
					<p>question</p>
				</div>
				<div className="col" />
			</div>
			<div className="row mt-5">
				<div className="col m-0 p-0" />
				<textarea
					className="col-5 align-self-center"
					// style={{ width: "450px" }}
					type="text"
					defaultValue={answer}
					onChange={e => setAnswer(e.target.value)}
				/>
				<div className="col m-0 p-0" />
			</div>
			<div className="row">
				<div className="col" />
				<div className="col" />
				<Link to="askalawyer">
					<button
						className="col-md-1 offset-md-1 mt-2 btn btn-secondary"
						onClick={() => {
							actions.addAnswer(answer);
						}}>
						Submit
					</button>
				</Link>
				<div className="col" />
			</div>
		</div>
	);
};
