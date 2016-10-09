var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var hasClicked = false;
var flag = 0;
function counterClick1() {
	if(flag == 0) {
		updateCounter1();
		flag = 1;
	}
};
function counterClick2() {
	if(flag == 0) {
		updateCounter2();
		flag = 1;
	}
};
function counterClick3() {
	if(flag == 0) {
		updateCounter3();
		flag = 1;
	}
};
$(document).ready(function(){
	if (fetchCounter1 > fetchCounter2) {
		$('#car2').addClass('big');
	}
	else if () {

	}
	$('btn1').mouseenter(function(){

	});
	$('btn1').mouseleave(function(){

	});
	$('btn2').mouseenter(function(){

	});
	$('btn2').mouseleave(function(){
		
	});
	$('btn3').mouseenter(function(){

	});
	$('btn3').mouseleave(function(){
		
	});
	fetchCounters();
	window.setInterval(fetchCounters, 1000);
});

function fetchCounters() {
	fetchCounter1();
	fetchCounter2();
	fetchCounter3();	
};