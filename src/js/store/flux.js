const url1 = "https://discoverlaw.herokuapp.com/";
import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			lawData: [],
			token: null,
			user: [],
			questions: [],
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
			logout: () => {
				setStore({ token: null });
			},
			login: (bubu, tutu) => {
				fetch("https://discoverlaw.herokuapp.com/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: bubu,
						password: tutu
					})
				})
					.then(response => response.json())
					.then(token => setStore({ token: token.jwt }));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				// let url = "https://newsapi.org/v2/top-headlines?country=US&apiKey=ac3b6745f35049228bbf45bb264b948c";
				fetch(url1 + "lawyer/")
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
			getUser: () => {
				fetch(url1 + "user/")
					.then(res => res.json())
					.then(result => {
						console.log("resultyttttttttttt", result);
						setStore({ user: result });
					});
			},
			getQuestion: () => {
				fetch(url1 + "question")
					.then(res => res.json())
					.then(result => {
						console.log("getting question", result), setStore({ questions: result });
					});
			},
			addUser: (email, name, password, zipcode) => {
				fetch(url1 + "user/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						name: name,
						password: password,
						zipcode: zipcode
					})
				}).then(() => {
					getActions().getUser();
				});
			},
			createQuestion: question => {
				fetch(url1 + "/question", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						question: question
					})
				}).then(() => {
					getActions().getQuestion();
				});
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
