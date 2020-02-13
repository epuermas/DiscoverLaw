import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const QuestionBox = () => {
	const { store } = useContext(Context);
	console.log("testingg", store.quetions);
	return (
		<div>
			{store.questions.map((e, index) => {
				return (
					<div key={index} className="row m-3">
						<div className="col" />
						<div className="col-6 pt-2 questionBox">
							<p>{e.question}</p>
						</div>
						<Link to="/lawyeranswer">
							<button className="btn btn-secondary">Answer</button>
						</Link>
						<div className="col" />
					</div>
				);
			})}
		</div>
	);
};

// <div key={index}>
// 	<div className="row">
// 		<div className="col- m-0 p-0" />
// 		<div
// 			className="questionBox col-6 m-0 align-self-center"
// 			// style={{
// 			// 	width: "400px",

// 			// 	height: "auto",
// 			// 	left: "10%",
// 			// 	backgroundColor: "#FFFFFF",
// 			// 	padding: "10px"
// 			// }}
// 		>
// 			<p>{e.question}</p>
// 		</div>
// 		<div className="col m-0 p-0" />
// 	</div>
// 	<div className="row">
// 		<div className="col m-0 p-0" />
// 		<textares
// 			className="col-6 align-self-center"
// 			// style={{ width: "450px" }}
// 			type="text"
// 			// defaultValue={question}
// 			// onChange={e => setQuestion(e.target.value)
// 			// }
// 		/>
// 		<div className="col m-0 p-0" />
// 	</div>
// </div>
