const button = document.getElementById("button");

/*
* Get datetime string from browser, remove seconds part from string 
* and store string to a hidden input's value
*/
button.addEventListener("click", function (event) {
	const dt = document.getElementById("time");
	dt.value = new Date().toUTCString().replace(/:\d{2} GMT$/, " GMT");
});
