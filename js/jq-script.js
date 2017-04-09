$(document).ready(function(){
	$("#card").draggable({ 
		scroll: false, 
		snap: "#card-container", 
		snapMode: "inner",
		start: function(){
			$("#laugh").animate({volume: 1}, 1000);
			$("#laugh")[0].play();
		}
	});

	$("#card-container").droppable({
		drop: function(){
			$("#laugh").animate({volume: 0}, 500);
			$("#laugh")[0].pause();
		}
	});	

	$("#scroll-down").click(function() {
	   	$('html, body').animate({
       		 	scrollTop: $("#portfolio").offset().top
		}, 1000);
	});
});
