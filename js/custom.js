$(document).ready(function() {
	
	
	// SLIDER
	$(function() {
		$( '#mi-slider' ).catslider();
	});


	// RESPONSIVE SLIDER
	$('#responsiveslide nav a').click(function() {
		var selected_id = '#' + $(this).attr('id');
		$('#responsiveslide-image div').removeClass('show')
		$('#responsiveslide-image ' + selected_id).addClass('show');
		return false;
	})

	
	// SHOW RESPONSIVE MENU
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').toggleClass('show');
	});
	
	
});