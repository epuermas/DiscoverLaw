import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigo from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const FindALawyer = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.lawData);

	return (
		<div className="container">
			{store.lawData &&
				store.lawData.map((e, index) => (
					<li key={index} className="list-group-item rigobaby" style={{ margin: "5px" }}>
						<div className="row w-100">
							<div className="col-12 col-sm-6 col-md-3 px-0">
								<img
									src={rigo}
									alt="Mike Anamendolla"
									className="rounded-circle mx-auto d-block img-fluid"
								/>
							</div>
							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<div className=" float-right">
									{/* <Link to={"/edit/" + e.id + "/" + index}> */}
									<button className="btn">
										<i className="fas fa-pencil-alt mr-3" />
									</button>
									{/* </Link> */}
									{/* <button className="btn">
                                        <i className="fas fa-trash-alt" onClick={() => actions.deleteContact(e.id)} />
                                    </button> */}
									{/* <Modale id={e.id} /> */}
								</div>
								<label className="name lead">{e.name}</label>
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
								<span className="text-muted small">{e.password}</span>
								<br />
								<span
									className="fa fa-envelope fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small text-truncate">{e.email}</span>
							</div>
						</div>
					</li>
				))}

			<Link to="/">
				<button className="btn btn-primary">Bhome</button>
			</Link>
		</div>
	);
};
