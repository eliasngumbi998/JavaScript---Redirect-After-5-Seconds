var timer = 5; 
var counter;
 
function startTimer() {
	counter = setInterval(countDown, 1000);
}
 
function countDown() {
	var display = document.getElementById("timer");
	display.innerHTML = timer;
 
 
	timer--;
 
	if (timer < 0) {
		clearInterval(counter);
 
		window.location.href = "<a href="https://sourcecodester.com";
" rel="nofollow">https://sourcecodester.com";
</a>	}
}		
 
function tickTime(btn){
	btn.style.display='none';
	document.getElementById('display').style.display="inline";
	startTimer();
}
