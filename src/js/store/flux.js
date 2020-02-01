import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			lawData: [],
			cards: [
				{
					image: <i className="fas fa-search" />,
					title: "Find Lawyers Near You",
					description:
						"Using our registry of attorneys you will be able to find the right counsil depending on your legal needs."
				},
				{
					image: <i className="fas fa-question-circle" />,
					title: "Ask Lawyers",
					description:
						"With our intuative 'Ask A Lawyer' service you'll be able to submit legal questions and receive answers from certified attorneys."
				},
				{
					image: <i className="far fa-newspaper" />,
					title: "Get Informed",
					description: "Constant flow of news pertaining to legality, legislation, and current events."
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				// let url = "https://newsapi.org/v2/top-headlines?country=US&apiKey=ac3b6745f35049228bbf45bb264b948c";
				let url1 = "https://discoverlaw.herokuapp.com/lawyer";
				fetch(url1)
					//     {
					// 	method: "GET",
					// 	headers: myHeaders
					// })
					.then(res => res.json())
					.then(data => {
						console.log("dataaaa", data), setStore({ lawData: data });
					});
				// .catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
