$(document).ready(function () {	

	// Load Fancybox
	$(".fancybox").fancybox({
    helpers : {
        overlay : {
	      	css : {
              'background' : 'rgba(0, 0, 0, 0.75)'
	          },
          locked : false
        }
    }
	});

	// Determine the width of the window
	var w = $(window).width();

	// Determine the height of the window
	var h = $(window).height();

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
	$(window).on('scroll', function() {
		var px = $(window).scrollTop();
		$('.page-title-container').css('top', -px);

		var o = px / h ;
		
		if(px > 0) {
			$('.page-title-container').css('opacity', 1 - o);
		};
	});

	// Isotope
	$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});

	// Show client sorting options
	$('#client-sort').on('click', function() {
		$('#client-list').toggleClass('sort-select-show');
	});

	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	// Title changes
	$('#ylc').on('click', function () {
		$('.workspace h2').text('Client: Young Liberals of Canada');
	});

	$('#vancouver').on('click', function () {
		$('.workspace h2').text('Client: City of Vancouver');
	});

});