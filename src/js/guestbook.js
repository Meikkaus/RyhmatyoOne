const dt = document.getElementById("time");
const button = document.getElementById("button");

button.addEventListener("click", function (event) {
	dt.value = new Date().toUTCString().replace(/:\d{2} GMT$/, " GMT");
});
