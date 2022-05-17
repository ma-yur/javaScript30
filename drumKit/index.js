function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`);
	const key = document.querySelector(`div[data-key="${e.key}"]`);
	if (!audio) return;
	key.classList.add("playing");
	setTimeout(() => {
		key.classList.remove("playing");
	}, 200);

	audio.currentTime = 0;
	audio.play();
}

function removeTransition(e) {
  console.log(e);
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => addEventListener("transitionend", removeTransition));
window.addEventListener("keypress", playSound);
