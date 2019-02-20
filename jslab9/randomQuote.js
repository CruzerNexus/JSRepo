let landing = document.getElementById('landing'); //references the div where the quote will go

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
		let resultHTML = `
			<p>${response.quote.body}</p>
			<p><i><a href="${response.quote.url}">${response.quote.author}</a></i></p>
			`
		landing.innerHTML = resultHTML;
	});

	let url = `https://favqs.com/api/qotd`

	req.open("GET", url);
	req.setRequestHeader("Authorization", 'Token token="e8e96c7b368748b9f0b6a014a1f52804"');
  	req.send()
}

getQuote();