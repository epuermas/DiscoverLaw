const url1 = "https://discoverlaw.herokuapp.com/";
import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			kind: "lawyer",
			lawData: [],
			token: null,
			currentUser: null,
			users: [],
			email: [],
			questions: [],
			cards: [
				{
					image: <i className="fas fa-search" />,
					title: "Find Lawyers",
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
					image: <i className="far fa-handshake" />,
					title: "Build A Relationship",
					description:
						"Consult with attorneys online prior to meeting to see if they are the right fit for you."
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
					.then(data => setStore({ token: data.jwt, currentUser: data.user }));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getLawyer: () => {
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
						console.log("get usersssss", result);
						setStore({ user: result });
					});
			},
			getEmail: () => {
				fetch(url1 + "test_email/")
					.then(res => res.json())
					.then(result => {
						console.log("emailllll", result);
						setStore({ email: result });
					});
			},
			getQuestion: () => {
				fetch(url1 + "question")
					.then(res => res.json())
					.then(result => {
						console.log("getting question", result), setStore({ questions: result });
					});
			},
			getAnswer: () => {
				fetch(url1 + "answers")
					.then(res => res.json())
					.then(result => {
						console.log("getting answer", result), setStore({ questions: result });
					});
			},
			addUser: (email, name, password, zipcode, kind, phone) => {
				fetch(url1 + "user/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						name: name,
						password: password,
						zipcode: zipcode,
						kind: kind,
						phone: phone
					})
				}).then(() => {
					getActions().getUser();
				});
			},
			addLawyer: (email, name, password, phone, zipcode, lawfirm, kind) => {
				fetch(url1 + "lawyer/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						name: name,
						password: password,
						phone: phone,
						zipcode: zipcode,
						lawfirm: lawfirm,
						kind: kind
					})
				}).then(() => {
					getActions().getLawyer();
				});
			},
			addAnswer: answer => {
				fetch(url1 + "answers", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						answers: answer
					})
				}).then(() => {
					getActions().getAnswer();
				});
			},
			createQuestion: question => {
				const store = getStore();
				const actions = getActions();
				if (store.currentUser === null) {
					alert("You are not logged in");
					return;
				}
				fetch(url1 + "question", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						question: question,
						user_id: store.currentUser.id
					})
				})
					.then(resp => {
						if (resp.status === 200) {
							getActions().getQuestion();
							actions.getEmail();
						} else alert("There was an error sumbiting the question");
					})
					.catch(error => {
						alert("There was an error sumbiting the question");
						console.log(error);
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
