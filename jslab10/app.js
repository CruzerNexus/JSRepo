let drinkIndex = document.getElementById("drinkIndex");
let catListBtn = document.getElementById("catListBtn");
let glassListBtn = document.getElementById("glassListBtn");
let ingrListBtn = document.getElementById("ingrListBtn");
let drinkSearch = document.getElementById("drinkSearch");
let drinkBtn = document.getElementById("drinkButton");
let param = document.getElementsByName("param");
let cheq = 0;
for (i = 0; i<param.length; i++){
	if (param[i].checked === true){
		cheq = i;
		console.log(param[i]);
	};
};

function getDrinks(e){
	cheq = 0;
	for (i = 0; i<param.length; i++){
		if (param[i].checked === true){
			cheq = i;
			console.log(param[i]);
		};
	};
	let req = new XMLHttpRequest();
	req.addEventListener("progress", function(e){
		console.log(e.loaded);
		drinkIndex.innerText = "Opening the cooler..."
	});
	req.addEventListener("error", function(e){
		console.log(e.status);
		drinkIndex.innerText = "Sorry, we ran dry on that one. Another...?"
	});
	req.addEventListener("load", function(e){
		console.log(req.responseText);
		let response = JSON.parse(req.responseText);
		console.log(response);

		if (cheq < 2){
			drinkIndex.innerHTML = "";
			response.drinks.forEach(function(drink){
				let resultHTML = `
				<h2>${drink.strDrink}</h2>
				<h3>Container: ${drink.strGlass}</h3>
				<p>Instructions: ${drink.strInstructions}</p>
				<img src="${drink.strDrinkThumb}"/>
				`
				let newdiv = document.createElement("div");
				newdiv.className = "item";
				newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
				drinkIndex.appendChild(newdiv);
				let ingredientList = document.createElement("p")
				for (i = 1; i < 16; i++){
					if (drink["strIngredient" + i] === "" || drink["strIngredient" + i] === null){
						break;
					} else {
						ingredientList.innerHTML += `${drink['strIngredient' + i]}, ${drink['strMeasure' + i]}<br>`;
						drinkIndex.appendChild(ingredientList);
					};
				}
			});
		} else {
			drinkIndex.innerHTML = "";
			let newHeading = document.createElement("div");
			newHeading.innerHTML = `<h3>Here are some suggestions. Like the looks of one? Copy the name and search it specifically for more details.</h3>`
			drinkIndex.appendChild(newHeading);
			response.drinks.forEach(function(drink){
				let resultHTML = `
				<h2>${drink.strDrink}</h2>
				<img src="${drink.strDrinkThumb}"/>
				<h2>**********<h2>
				`
				let newdiv = document.createElement("div");
				newdiv.className = "item";
				newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
				drinkIndex.appendChild(newdiv);
			});
		};
	});
	if (cheq === 0){
		let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
		req.open("GET", url);
		req.send();
	} else if (cheq === 1){
		let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(drinkSearch.value)}`
		req.open("GET", url);
		req.send();
	} else if (cheq === 2){
		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(drinkSearch.value)}`
		console.log(url)
		req.open("GET", url);
		req.send();
	} else if (cheq === 3){
		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${encodeURIComponent(drinkSearch.value)}`
		req.open("GET", url);
		req.send();
	} else if (cheq === 4){
		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(drinkSearch.value)}`
		req.open("GET", url);
		req.send();
	}
}

function getCats(e){
	let req = new XMLHttpRequest();
	req.addEventListener("progress", function(e){
		console.log(e.loaded);
		drinkIndex.innerText = "Opening the cooler..."
	});
	req.addEventListener("error", function(e){
		console.log(e.status);
		drinkIndex.innerText = "Sorry, we ran dry on that one. Another...?"
	});
	req.addEventListener("load", function(e){
		console.log(req.responseText);
		let response = JSON.parse(req.responseText);
		console.log(response);

		drinkIndex.innerHTML = "";
		let newHeading = document.createElement("div");
		newHeading.innerHTML = `<h3>And your categories are:</h3>`
		drinkIndex.appendChild(newHeading);
		response.drinks.forEach(function(drink){
			let resultHTML = `
			<p>**${drink.strCategory}**</p>
			`
			let newdiv = document.createElement("div");
			newdiv.className = "item";
			newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
			drinkIndex.appendChild(newdiv);
		});
	});
	let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
	req.open("GET", url);
	req.send();
}

function getGlasses(e){
	let req = new XMLHttpRequest();
	req.addEventListener("progress", function(e){
		console.log(e.loaded);
		drinkIndex.innerText = "Opening the cooler..."
	});
	req.addEventListener("error", function(e){
		console.log(e.status);
		drinkIndex.innerText = "Sorry, we ran dry on that one. Another...?"
	});
	req.addEventListener("load", function(e){
		console.log(req.responseText);
		let response = JSON.parse(req.responseText);
		console.log(response);

		drinkIndex.innerHTML = "";
		let newHeading = document.createElement("div");
		newHeading.innerHTML = `<h3>The glasswear we feature: </h3>`
		drinkIndex.appendChild(newHeading);
		response.drinks.forEach(function(drink){
			let resultHTML = `
			<p>**${drink.strGlass}**</p>
			`
			let newdiv = document.createElement("div");
			newdiv.className = "item";
			newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
			drinkIndex.appendChild(newdiv);
		});
	});
	let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
	req.open("GET", url);
	req.send();
}

function getIngredients(e){
	let req = new XMLHttpRequest();
	req.addEventListener("progress", function(e){
		console.log(e.loaded);
		drinkIndex.innerText = "Opening the cooler..."
	});
	req.addEventListener("error", function(e){
		console.log(e.status);
		drinkIndex.innerText = "Sorry, we ran dry on that one. Another...?"
	});
	req.addEventListener("load", function(e){
		console.log(req.responseText);
		let response = JSON.parse(req.responseText);
		console.log(response);

		drinkIndex.innerHTML = "";
		let newHeading = document.createElement("div");
		newHeading.innerHTML = `<h3>All the fixin's: </h3>`
		drinkIndex.appendChild(newHeading);
		response.drinks.forEach(function(drink){
			let resultHTML = `
			<p>**${drink.strIngredient1}**</p>
			`
			let newdiv = document.createElement("div");
			newdiv.className = "item";
			newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
			drinkIndex.appendChild(newdiv);
		});
	});
	let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
	req.open("GET", url);
	req.send();
}
// function getFilters(e){
// 	cheq = 0;
// 	for (i = 0; i<param.length; i++){
// 		if (param[i].checked === true){
// 			cheq = i;
// 			console.log(param[i]);
// 		};
// 	};
// 	let req = new XMLHttpRequest();
// 	req.addEventListener("progress", function(e){
// 		console.log(e.loaded);
// 		drinkIndex.innerText = "Let me make some suggestions..."
// 	});
// 	req.addEventListener("error", function(e){
// 		console.log(e.status);
// 		drinkIndex.innerText = "Sorry, can't think of any drinks with that. Any other requests...?"
// 	});
// 	req.addEventListener("load", function(e){
// 		console.log(req.responseText);
// 		let response = JSON.parse(req.responseText);
// 		console.log(response);

// 		drinkIndex.innerHTML = "";
// 		response.drinks.forEach(function(drink){
// 			let resultHTML = `
// 			<h2>${drink.strDrink}</h2>
// 			<img src="${drink.strDrinkThumb}"/>
// 			`
// 			let newdiv = document.createElement("div");
// 			newdiv.className = "item";
// 			newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
// 			drinkIndex.appendChild(newdiv);
// 		});
// 	});
// 	if (cheq === 2){
// 		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(drinkSearch.value)}`
// 		console.log(url)
// 		req.open("GET", url);
// 		req.send();
// 	} else if (cheq === 3){
// 		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${encodeURIComponent(drinkSearch.value)}`
// 		req.open("GET", url);
// 		req.send();
// 	} else if (cheq === 4){
// 		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(drinkSearch.value)}`
// 		req.open("GET", url);
// 		req.send();
// 	}
// }
drinkSearch.addEventListener("keydown", function(e){
	if (e.keyCode === 13){
		getDrinks(e);
	};
});
	
drinkBtn.addEventListener("click", getDrinks);
catListBtn.addEventListener("click", getCats);
ingrListBtn.addEventListener("click", getIngredients);
glassListBtn.addEventListener("click", getGlasses);
