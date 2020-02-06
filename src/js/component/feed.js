import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Feed = () => {
    const { store, actions } = useContext(Context);
    console.log("question", store.lawData);

    return (
        <div>
            {store.lawData &&
				store.lawData.map((e, index) => (
                <label key={index} className="question">{e.questions}</label>
                ))
            }
        </div>
        
    );
};