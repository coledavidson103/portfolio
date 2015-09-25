// Determine the width of the window
var w = $(window).width();

// Fade in the mobile menu if the menu button is clicked
$('.mobile-nav').on('click', function(){
	$('nav').toggleClass('mobile-nav-show');
});

// If the service button in the menu is clicked,
// the screen width is less than 769 (mobile), toggle .submenu-show class
// to show the submenu.
if(w < 769) {
	$('.service-button').on('click', function () {
				$('.services-menu').toggleClass('submenu-show');
	});
};

// Animate the scroll when clicking on the scroller arrow
$('#scroller-link').on('click', function() {
	$('#description').animatescroll();
});

// Paralax scroll the heading

// Portfolio sorting
$('#client-sort').on('click', function() {
	$('#client-list').toggleClass('sort-select-show');
});

$('#vancouver-sort').on('click', function() {
	$('.work').css('display', 'none');
	$('.vancouver').css('display', 'block');
});

