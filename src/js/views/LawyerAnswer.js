import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LawyerAnswer = props => {
	const { store, actions } = useContext(Context);
	const [answer, setAnswer] = useState("");
	return (
		<div>
			<div className="row m-3 mt-5">
				<div className="col" />

				<div className="col-6 pt-2 questionBox">
					<p>{store.questions[props.match.params.questionID].question}</p>
				</div>
				<div className="col" />
			</div>
			<div className="row mt-5">
				<div className="col m-0 p-0" />
				<textarea
					className="col-5"
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
					{/* col-md-1 offset-md-1 mt-2 */}
					<a
						className="answer-submit btn-primary btn-lg"
						onClick={() => {
							actions.addAnswer(answer);
						}}
						role="button">
						Submit
					</a>
				</Link>
				<div className="col" />
				<div className="col" />
			</div>
		</div>
	);
};

LawyerAnswer.propTypes = {
	match: PropTypes.object
};
