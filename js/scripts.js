function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!audio) return; // to ignore non-audio keys
	audio.currentTime = 0; // always starts sound at beginning, for repeat presses
	audio.play();
	key.classList.add("play");
}

function removeTransition(event) {
	if (event.propertyName !== "transform") return; // ignore all non-relevant transitions
	this.classList.remove("play");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);