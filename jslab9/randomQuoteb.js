let landing = document.getElementById('landing'); //references the div where the quote will go
let getQuoteButton = document.getElementById("quote-button");
let quoteField = document.getElementById("quote-field");
let param = document.getElementsByName("param");
console.log(param);

function getQuote(e){
	let req = new XMLHttpRequest(); //initializes the XML request for the API
	req.addEventListener("progress", function(e){ //condition one for while it's loading
		console.log(e.loaded);
		landing.innerText = "Loading some wisdom..."
	});
	req.addEventListener("error", function(e){ //condition two for if it fails to load
		console.log(e.status);
		landing.innerText = "Alas the wisdom well has dried up... (try again)"
	});
	req.addEventListener("load", function(e){ //condition three for successful load
		console.log(req.responseText);
		let response = JSON.parse(req.responseText); //preps JSON string into js value
		console.log(response);

		landing.innerHTML = "";
		response.quotes.forEach(function(quote){
			let resultHTML = `
				<p>${quote.body}</p>
				<p><i><a href="${quote.url}">${quote.author}</a></i></p>
				` // shows the quote and the url as the author's name
			let newdiv = document.createElement("div");
			newdiv.className = "item";
			newdiv.innerHTML = resultHTML; // rewrites the "landing" to match the quote
			landing.appendChild(newdiv);
		});
	});
	let cheq = 0;
	for (i = 0; i<param.length; i++){
		if (param[i].checked === true){
			cheq = i;
			console.log(param[i]);
		};
	};
	if (cheq === 0){
		let url = `https://favqs.com/api/quotes/?filter=${encodeURIComponent(quoteField.value)}` // the url for getting a random quote
		req.open("GET", url); // asks the api for a random quote
		req.setRequestHeader("Authorization", 'Token token="e8e96c7b368748b9f0b6a014a1f52804"'); // is authorization (only necessary for custom searches)
	  	req.send() // sends the request to the API
	} else if (cheq === 1) {
		let url = `https://favqs.com/api/quotes/?filter=${encodeURIComponent(quoteField.value)}&type=author`
		req.open("GET", url); // asks the api for a random quote
		req.setRequestHeader("Authorization", 'Token token="e8e96c7b368748b9f0b6a014a1f52804"'); // is authorization (only necessary for custom searches)
	  	req.send() // sends the request to the API
	} else if (cheq === 2){
		let url = `https://favqs.com/api/quotes/?filter=${encodeURIComponent(quoteField.value)}&type=tag`
		req.open("GET", url); // asks the api for a random quote
		req.setRequestHeader("Authorization", 'Token token="e8e96c7b368748b9f0b6a014a1f52804"'); // is authorization (only necessary for custom searches)
	  	req.send() // sends the request to the API
	} else {
		let url = `https://favqs.com/api/quotes/?filter=${encodeURIComponent(quoteField.value)}&type=user`
		req.open("GET", url); // asks the api for a random quote
		req.setRequestHeader("Authorization", 'Token token="e8e96c7b368748b9f0b6a014a1f52804"'); // is authorization (only necessary for custom searches)
	  	req.send() // sends the request to the API
	}

}

quoteField.addEventListener("keydown", function(e){
	if (e.keyCode === 13){
		getQuote(e);
	};
});

getQuoteButton.addEventListener("click", getQuote);
