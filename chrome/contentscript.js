
$(document).ready(function() {
	console.log('running')
	var url = document.URL;
	if ((url).indexOf('quora') != -1){
		$('.modal_signup_dialog').remove();
		$('.modal_signup_background').remove();
		$('.modal_signup_facepile').remove();
	}
	else if ((url).indexOf('pinterest') != -1){
		$('.modalScroller').remove();
		$('.modalContainer').remove();
		$('.modalMask').remove();
		
		setTimeout(function(){ 
			console.log("timeout3 triggered");
			$('.modalScroller').remove();
			$('.modalContainer').remove();
			$('.modalMask').remove();
		}, 2000);
	}
})

