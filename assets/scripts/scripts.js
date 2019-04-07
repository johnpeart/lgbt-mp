window.onload = function() {
  checkJS();
  setTabIndices();
};

function checkJS() {
	document.body.className = document.body.className.replace("no-js","js");
}

function setTabIndices() {
	var about = document.getElementById("app-header--about");
	
	if (about.classList.contains("open")) {
		var a = about.getElementsByTagName('a');
		for (var i = 0; i < a.length; i++) {
		     a[i].tabIndex = "0";
		}
	}

	if (about.classList.contains("closed")) {
		var a = about.getElementsByClassName('a');
		for (var i = 0; i < a.length; i++) {
		    a[i].tabIndex = "-1";
		}
	} 
}

function toggleAbout() {
	var main = document.getElementById("app-main");
	var header = document.getElementById("app-header");
	var about = document.getElementById("app-header--about");
	
	main.classList.toggle("open");
	main.classList.toggle("closed");
	
	header.classList.toggle("open");
	header.classList.toggle("closed");
	
	about.classList.toggle("open");
	about.classList.toggle("closed");
	
	
	if (about.classList.contains("open")) {
		var a = about.getElementsByTagName('a');
		for (var i = 0; i < a.length; i++) {
		     a[i].tabIndex = "0";
		}
	}

	if (about.classList.contains("closed")) {
		var a = about.getElementsByClassName('a');
		for (var i = 0; i < a.length; i++) {
		    a[i].tabIndex = "-1";
		}
	} 
}