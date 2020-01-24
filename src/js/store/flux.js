const getState = ({ getStore, getActions, setStore }) => {
	const myHeaders = new Headers({
		"Content-Type": "application/json",
		Authorization:
			"M_FCQDX370AIk4bzX039NDycP5w1XXqLS26vYFNC2tDExjcooqVcTEW2BuN6zClHk-rREVgZ7qKUTJqbnDMOvk75DzjBXSZPR20QmFTojp-GCVdxwu08C2h0CCr8XXYx"
	});
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			lawData: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				let url = "https://api.yelp.com/v3/businesses/search?location=33156&term=law";
				let url1 = "https://swapi.co/api/planets";
				fetch(
					url
					//     {
					// 	method: "GET",
					// 	headers: myHeaders
					// }
				)
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
