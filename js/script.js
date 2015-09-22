// Determine the width of the window
var w = $(window).width();

// Show the menu button only if the screen is smaller than 769px
if(w < 769) {
	$('.mobile-nav').fadeIn();
}

// Fade in the mobile menu if the menu button is clicked
$('.mobile-nav').on('click', function(){
	$('nav').fadeIn();
});

// Set the service submenu hidden status to true by default
var ssmh = true;

// If the service button in the menu is clicked,
// the screen width is less than 769, and the service 
// submenu is hidden, fade in the service submenu.
$('.service-button').on('click', function () {
	if(w < 769) {
		if(ssmh == true) {
			$('.services-menu').fadeIn();
		};

		// if the service submenu is not hidden (visible)
		// hide it when the service button is clicked.
		// This doesn't work because I need to set the ssmh variable
		// to false.
		if(ssmh == false) {
			$('.services-menu').fadeOut();
		};
	};	
});

// Check if the screen width is greater than 768, then fade in the
// the services submenu when the service button is clicked
if(w > 768) {
	$('.service-button').on('click', function() {
		// The following also works but doesn't look as nice:
		// $('.services-menu').css('display', 'inline-block');
		$('.services-menu').fadeIn();
	});
}

