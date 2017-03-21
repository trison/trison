//fade in card
window.onload = fade;

function fade(){
	var card = document.getElementById("card");
	card.style.transition = "opacity 0.6s";
	card.style.opacity = "1";

	var underCard = document.getElementById("under-card");
	underCard.style.transition = "opacity 3.5s";
	underCard.style.opacity = "1";
}
function changeValue(site){
	document.getElementById(site).value = "Details";
}
function resetValue(site){
	var s = document.getElementById(site)
	switch(site){
		case 'site1':
			s.value = "Open Space";
			break;
		case 'site2':
			s.value = "Ding Dong Delivery";
			break;
		case 'site3':
			s.value = "the fifty fifty arts collective";
			break;
		case 'site4':
			s.value = "Compost Education Centre";
			break;
		default: 
			break;
	}
}
function showContent(site){
	var portfolio = document.getElementById("contents");
	switch(site){
		case 'site1':
			portfolio.innerHTML = "<p>Updated Open Space's look and functionality.</p>";
			break;
		case "site2":
			portfolio.innerHTML = "<p>this is site 2 info</p>";
			break;
		case "site3":
			portfolio.innerHTML = "<p>this is site 3 info</p>";
			break;
		case "site4":
			portfolio.innerHTML = "<p>this is site 4 info</p>";
			break;
		default:
			break;
	}
}

var x = document.getElementById("site1");

x.addEventListener("click", function(){
	var portfolio = document.getElementById("contents");
	var active = portfolio.classList.contains("active");	
	console.log("active = "+active);
	if (active == true){
		console.log("yep");
		portfolio.setAttribute("style", "left: -999px");
		portfolio.classList.remove("active");
	}
	if(active == false){
		console.log("heh");
		portfolio.setAttribute("style", "left: 0");
		portfolio.className="active";
	}
})



/*** KONAMI CODE ***/
var allowedKeys = {
 	37: 'left',
 	38: 'up',
 	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
	var key = allowedKeys[e.keyCode];
	var requiredKey = konamiCode[konamiCodePosition];

	// compare entered  key with required key
	if (key == requiredKey) {
		konamiCodePosition++;
		if (konamiCodePosition == konamiCode.length)
			activateCheat();
	}
	else konamiCodePosition = 0;
});

function activateCheat() {
 	document.body.style.backgroundImage = "url('assets/img/homer.jpg')";
	document.body.style.height="900px";
}
