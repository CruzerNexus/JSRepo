let manyDoors = [
	"https://i.pinimg.com/originals/59/07/83/590783c250d7821dab13644a9d5fb385.png",
	"https://i.pinimg.com/originals/0c/18/64/0c18647b122cb2e2901a5d8ee868397d.png",
	"https://i.imgur.com/4gb6rfc.jpg",
	"https://i.imgur.com/7QwmrOz.gif",
	"https://i.imgur.com/bi0jD49.jpg",
	"https://i.pinimg.com/originals/ce/75/06/ce7506a202865cafd0837a14744a07c4.png",
	"https://i.imgur.com/WQfPZRf.jpg",
	"https://i.imgflip.com/kklgq.jpg",
	"https://i.imgur.com/L7aCeWE.jpg",
	"https://78.media.tumblr.com/492479c36bb865065cde1952912d9676/tumblr_nj0ma8qr191tzqospo2_400.gif"
];
// let prepare = document.createElement("button");
// prepare.innerText = "Open Door";
// let finalTime = 6;
// let now = 0;
// let x = setInterval(function() {
// 	now ++;
// 	let distance = finalTime - now;
// 	document.getElementById("countdown").innerHTML = distance;
// 	console.log(distance);
// }, 1000);
// let y = setInterval(function() {
	let doorNumber = Math.floor(Math.random() * 10);
	let openTheDoor = location.assign(manyDoors[doorNumber]);
// }, 6000);
