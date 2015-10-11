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


	// TESTIMONIALS
	$("#cslide-slides").cslide();


	// LIGHTBOX
	var $lightbox = $('#lightbox');
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 800);
		return false;
	});
	
	
});