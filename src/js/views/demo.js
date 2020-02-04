import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigo from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const FindALawyer = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.lawData);

	return (
		<div className="fal-view container">
			{store.lawData &&
				store.lawData.map((e, index) => (
					<li key={index} className="list-group-item rigobaby" style={{ margin: "5px" }}>
						<div className="fal-container row w-60">
							<div className="col-11 col-sm-6 col-md-3 px-0">
								<img
									src="https://i.imgur.com/5A6LNz5.jpg"
									alt="Mike Anamendolla"
									className="rounded-circle mx-auto d-block img-fluid"
								/>
							</div>
							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<label className="name head">{e.name}</label>
								<br />
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">{e.zipcode}</span>
								<br />
								<span
									className="fa fa-phone fa-fw text-muted mr-3"
									data-toggle="tooltip"
									title=""
									data-original-title="(870) 288-4149"
								/>
								<span className="text-muted small">{e.phone}</span>
								<br />
								<span
									className="fa fa-envelope fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small">{e.email}</span>
								<br />
								<span
									className="fas fa-building fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small text-truncate">{e.lawfirm}</span>
							</div>
						</div>
					</li>
				))}
			<br />
			<Link to={"/"} className="back-home btn-primary btn-lg" href="#" role="button">
				Back Home
			</Link>
		</div>
	);
};
