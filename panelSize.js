function panelSize() {
	var panel1 = document.getElementById("panel1");
	var panel2 = document.getElementById("panel2");
	var panel3 = document.getElementById("panel3");

	panel1_height = panel1.offsetHeight;
	
	if (document.documentElement.clientWidth >= 1029) {
		panel2.style.height = (panel1_height - 34) + "px";
		panel3.style.height = (panel1_height - 34) + "px";
	} else if (document.documentElement.clientWidth >= 751) {
		panel2.style.height = (panel1_height - 34) + "px";
		panel3.style.height = "auto";
	} else {
		panel2.style.height = "auto";
		panel3.style.height = "auto";
	}

	console.log(panel1_height);
	console.log(panel2.style.height);
	console.log(panel3.style.height);
	console.log(document.documentElement.clientWidth);

	window.onresize = panelSize;
}
