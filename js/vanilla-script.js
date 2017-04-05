//fade in card
window.onload = fade;

var activeSite = [];
for(var i=0; i<4; i++){
	activeSite.push(false);
}

var activeFlag = false;

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
	var s = document.getElementById(site);
	var currSite = null;
	var oldSite = null;

	switch(site){
		case 'site1': currSite = 0; break;
		case 'site2': currSite = 1; break;
		case 'site3': currSite = 2; break;
		case 'site4': currSite = 3; break;
		default: break;
	}

	if(activeFlag == false){
		activeFlag = true;
		activeSite[currSite] = true;
	}
	else{
		for(var activeIndex=0; activeIndex<activeSite.length; activeIndex++){
			if (activeSite[activeIndex] == true){
				oldSite = activeIndex;
				break;
			}
		}

		activeSite[oldSite] = false;
		activeSite[currSite] = true;

		if (currSite == oldSite){
			return;
		}
	}
	
	var portfolio = document.getElementById("contents");
	if (oldSite != null){
		console.log("oldSite = "+oldSite);
		portfolio.setAttribute("style", "opacity: 0");	
	}

	switch(site){
		case 'site1':
			setTimeout(function(){
				portfolio.innerHTML = "<p>Updated Open Space's look and functionality.</p>";
				portfolio.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site2":
			setTimeout(function(){
				portfolio.innerHTML = "<p>this is site 2 info</p>";
				portfolio.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site3":
			setTimeout(function(){
				portfolio.innerHTML = "<p>this is site 3 info</p>";
				portfolio.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site4":
			setTimeout(function(){
				portfolio.innerHTML = "<p>this is site 4 info</p>";
				portfolio.setAttribute("style", "opacity: 1");
			}, 200);
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
