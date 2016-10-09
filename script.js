var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var hasClicked = false;
var flag = 0;
function counterClick1() {
	if(flag == 0) {
		function myFunction() {
    	var x = document.createElement("IMG");
    	x.setAttribute("src", "img/meme1.jpg");
    	x.setAttribute("width", "236");
    	x.setAttribute("width", "255");
    	x.setAttribute("alt", "The Pulpit Rock");
    	document.body.appendChild(x);
}
		updateCounter1();
		flag = 1;
	}
};
function counterClick2() {
	if(flag == 0) {
		function myFunction() {
    	var x = document.createElement("IMG");
    	x.setAttribute("src", "img_pulpit.jpg");
    	x.setAttribute("width", "236");
    	x.setAttribute("width", "255");
    	x.setAttribute("alt", "The Pulpit Rock");
    	document.body.appendChild(x);
}
		updateCounter2();
		flag = 1;
	}
};
function counterClick3() {
	if(flag == 0) {
		function myFunction() {
    	var x = document.createElement("IMG");
    	x.setAttribute("src", "img_pulpit.jpg");
    	x.setAttribute("width", "304");
    	x.setAttribute("width", "228");
    	x.setAttribute("alt", "The Pulpit Rock");
    	document.body.appendChild(x);
}
		updateCounter3();
		flag = 1;
	}
};
$(document).ready(function(){
	fetchCounters();
	window.setInterval(fetchCounters, 1000);
});

function fetchCounters() {
	fetchCounter1();
	fetchCounter2();
	fetchCounter3();	
};