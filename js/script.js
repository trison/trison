


window.onload = fade;
function fade(){
	var card = document.getElementById("card");
	card.style.transition = "opacity 0.6s";
	card.style.opacity = "1";
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

// Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length)
      activateCheat();
  } else
    konamiCodePosition = 0;
});

function activateCheat() {
 	document.body.style.backgroundImage = "url('img/homer.jpg')";
	document.body.style.height="900px";
}
