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

function showContent(site){
	switch(site){
		case 'site1':
			document.getElementById("portfolio-full").innerHTML = "<p>Updated Open Space's look and functionality.</p>";
			break;
		case "site2":
			document.getElementById("portfolio-full").innerHTML = "<p>this is site 2 info</p>";
			break;
		case "site3":
			document.getElementById("portfolio-full").innerHTML = "<p>this is site 3 info</p>";
			break;
		case "site4":
			document.getElementById("portfolio-full").innerHTML = "<p>this is site 4 info</p>";
			break;
		default:
			break;
	}
}

function changeValue(site){
	document.getElementById(site).value = "Read More";
}
function resetValue(site){
	switch(site){
		case 'site1':
			document.getElementById(site).value = "Open Space";
			break;
		case 'site2':
			document.getElementById(site).value = "Ding Dong Delivery";
			break;
		case 'site3':
			document.getElementById(site).value = "the fifty fifty arts collective";
			break;
		case 'site4':
			document.getElementById(site).value = "Compost Education Centre";
			break;
		default: 
			break;
	}
}

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
