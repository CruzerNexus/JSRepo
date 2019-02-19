let phantomObj = document.getElementById("phantomHax");
phantomObj.focus();
let phCursor = 0;
let hideable = document.getElementsByClassName("hideable");
let accessGif = document.getElementById("accessGif");
let deniedGif = document.getElementById("deniedGif");
let anId = ""
console.log(hideable.outerHTML);
console.log(hideable);
for (i = 0; i < hideable.length; i++) {
	hideable[i].classList.add("hidden");	
}
console.log(hideable);
console.log(accessGif);
addEventListener("keydown", function(event){
	if (event.key === "Backspace"){
		phCursor -= getRandomArbitrary(3, 5);
	} else if (event.key === "Alt"){
		anId = accessGif;
		anId.classList.toggle('hidden');
		setTimeout(reHide, 3000);
	} else if (event.key === "CapsLock"){
		anId = deniedGif;
		anId.classList.toggle('hidden');
		setTimeout(reHide, 2150);
	} else {
		phCursor += getRandomArbitrary(3, 5);
	}
	phantomObj.value = window.phantomText.substring(0, phCursor);
});
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function reHide(){
	anId.classList.toggle('hidden');
	phantomObj.focus();
}