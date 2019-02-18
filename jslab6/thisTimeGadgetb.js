let clock =  new Date();
clock.setHours(0,0,0,0);
console.log(clock);
let hours = clock.getHours();
let minutes = clock.getMinutes();
let seconds = clock.getSeconds();
let milliseconds = clock.getMilliseconds();
let start = document.getElementById("start");
let clockStatus = "paused";
let startWatch;
start.addEventListener('click', function(event){
	if (clockStatus === "paused"){
		start.innerText = "Pause"
		let newStopwatch = document.createElement("p");
		newStopwatch.id = "newStopwatch";
		startWatch = setInterval(myTimer, 1000);
		function myTimer(){
			let hours = clock.getHours();
			let minutes = clock.getMinutes();
			let seconds = clock.getSeconds();
			let milliseconds = clock.getMilliseconds();
			clock.setSeconds(clock.getSeconds() + 1);
			if (minutes <= 9){
				minutes = "0" + minutes;
			}
			if (seconds <= 9){
				seconds = "0" + seconds;
			}
			if (milliseconds <= 9){
				milliseconds = "0" + milliseconds;
			}
			newStopwatch.innerText = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
			let drClock = document.getElementById("drClock");
			drClock.innerText = newStopwatch.innerText;
		}
		clockStatus = "playing";
	} else {
		clearInterval(startWatch);
		clockStatus = "paused";
		start.innerText = "Start";
	};
	let lap = document.getElementById("lap");
	let lapNum = 1;
	lap.addEventListener('click', function(event){
		let lapTime = document.createElement("li");
		let newStopwatch = document.getElementById("newStopwatch");
		lapTime.innerText = drClock.innerText;
		let newLap = "Lap " + lapNum + ": " + lapTime.innerText;
		let lapList = document.getElementById("lapList");
		lapTime.innerText = newLap;
		lapList.appendChild(lapTime);
		lapNum ++;
		console.log(newLap);
		reset();
	});
});

function reset(){
	clearInterval(startWatch);
	let newStopwatch = document.getElementById("drClock");
	clock.setHours(0,0,0,0);
	newStopwatch.innerText = hours + ":0" + minutes + ":0" + seconds + ":0" + milliseconds;
	start.innerText = "Start";
}
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', function(event){
	reset();
});