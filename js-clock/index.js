const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
	const now = new Date();
	let seconds = now.getSeconds();
	let minutes = now.getMinutes();
	let hours = now.getHours();
	let secondHandDeg = (seconds / 60) * 360 + 90;
	let minuteHandDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	let hourHandDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

	secondHand.style.transform = `rotate(${secondHandDeg}deg)`;
	minuteHand.style.transform = `rotate(${minuteHandDeg}deg)`;
	hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
	console.log(now);
}
setInterval(setTime, 1000);
setTime();
