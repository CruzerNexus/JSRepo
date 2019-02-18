let update = setInterval(myTimer, 1000);
function myTimer() {
	let d = new Date();
	document.getElementById("drClock").innerHTML = d.toLocaleTimeString();
}