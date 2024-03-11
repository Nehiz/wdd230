// this the scripting for the mode
const modeButton = document.querySelector("#mode");
const Body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		Body.style.background = "#000";
		Body.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		Body.style.background = "#fff";
		Body.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});