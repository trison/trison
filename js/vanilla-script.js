window.onload = fade;

var activeFlag = false;
var activeSite = [];

var openSpaceDesc = "<p>Open Space Arts Society is an artist-run centre in Victoria BC that has been supporting contemporary art practices since 1972. <br><br>I helped develop and launch a website using Drupal. The site received a fresh look with updated functionality that allowed Open Space staff to manage and update their own content. <br><br><a href='http://openspace.ca/' target='_blank'>openspace.ca</a></p>";
var dingDongDesc = "<p>Ding Dong Delivery was a self-directed, entreprenurial co-op project with one other team member. We set out to create a food ordering and delivery system served through a web app and iOS app. <br><br>My focus was on developing the web app that would allow restaurant owners to manage their online restaurant profiles and incoming orders from the iOS app. I created the API, and developed the backend and frontend using MongoDB, ExpressJS, AngularJS and NodeJS <br><br><a href='http://www.dingdongdelivery.ca/' target='_blank'>www.dingdongdelivery.ca</a></p>";
var fiftyDesc = "the fifty fifty arts collective is a volunteer-run centre that has focused on emerging art since 2003. <br><br>I worked with the collective to refresh the frontend of the website, while keeping it functional with the original backend system and boilerplate that also supports <a href='https://livevictoria.com/' target='_blank'>livevictoria.com</a> and <a href='https://artsvictoria.ca/' target='_blank'>artsvictoria.ca.</a> <br><br><a href='http://thefiftyfifty.net/' target='_blank'>thefiftyfifty.net</a>";
var compostDesc = "The Compost Education Centre is a non-profit that provides composting and ecological gardening education in Victoria BC. <br><br>I updated their frontend and added content management features to help staff manage their WordPress site. <br><br><a href='https://www.compost.bc.ca/' target='_blank'>compost.bc.ca</a>";

var scroll = document.getElementById("scroll-down")
var windowHeight = window.innerHeight;

if(windowHeight<555){
	scroll.style.visibility = "hidden";	
}

for(var i=0; i<4; i++){ activeSite.push(false); }

setTimeout(function(){
	scroll.style.transition = "opacity 1.5s";
	scroll.style.opacity="1";
}, 4000);

function fade(){
	var card = document.getElementById("card");
	card.style.transition = "opacity 0.6s";
	card.style.opacity = "1";

	var underCard = document.getElementById("under-card");

	var num = Math.floor(Math.random()*10+1);
	if (num > 5){
		underCard.style.backgroundImage = "url('assets/img/home.jpg')";
	}
	else{
		underCard.style.backgroundImage = "url('assets/img/jeff.jpg')";
	}

	underCard.style.transition = "opacity 3.5s";
	underCard.style.opacity = "1";
}

function changeValue(site){
	document.getElementById(site).value = "See details";
}

function resetValue(site){
	var s = document.getElementById(site)
	switch(site){
		case 'site1': s.value = "Open Space"; break;
		case 'site2': s.value = "Ding Dong Delivery"; break;
		case 'site3': s.value = "the fifty fifty arts collective"; break;
		case 'site4': s.value = "Compost Education Centre"; break;
		default: break;
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
		for(var i=0; i<activeSite.length; i++){
			if (activeSite[i] == true){
				oldSite = i;
				break;
			}
		}

		activeSite[oldSite] = false;
		activeSite[currSite] = true;

		if (currSite == oldSite){ return; }
	}
	
	var portfolio = document.getElementById("contents-text");
	var siteImg = document.getElementById("contents-img");
	
	if (oldSite != null){
		portfolio.setAttribute("style", "opacity: 0");	
		siteImg.setAttribute("style", "opacity: 0");
	}

	switch(site){
		case 'site1':
			setTimeout(function(){
				portfolio.innerHTML = openSpaceDesc;
				portfolio.setAttribute("style", "opacity: 1");
				siteImg.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site2":
			setTimeout(function(){
				portfolio.innerHTML = dingDongDesc;
				portfolio.setAttribute("style", "opacity: 1");
				siteImg.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site3":
			setTimeout(function(){
				portfolio.innerHTML = fiftyDesc;
				portfolio.setAttribute("style", "opacity: 1");
				siteImg.setAttribute("style", "opacity: 1");
			}, 200);
			break;
		case "site4":
			setTimeout(function(){
				portfolio.innerHTML = compostDesc;
				portfolio.setAttribute("style", "opacity: 1");
				siteImg.setAttribute("style", "opacity: 1");
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

	// compare entered key with required key
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
