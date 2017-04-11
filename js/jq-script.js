$(document).ready(function(){
	var scroll_pos = 0;

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
		$("#scroll-down").css({"opacity": "0"});
	   	$('html, body').animate({
       		 	scrollTop: $("#portfolio").offset().top
		}, 1000);
	});

	$('body').on('mousewheel', function(){
	    	scroll_pos = $(this).scrollTop();
	    	console.log(scroll_pos);

		if(scroll_pos > 200){
			$("#scroll-down").css({"opacity": "0"});
		}
		else{
			$("#scroll-down").css({"opacity": "1"});
		}
	});
});
