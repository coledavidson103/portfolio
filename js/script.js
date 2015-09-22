var w = $(window).width();
var ssmh = true;

$('.service-button').on('click', function () {
	if(w <= 768) {
		if(ssmh == true) {
			$('.services-menu').fadeIn();
		};
		if(ssmh == false) {
			$('.services-menu').fadeOut();
		};
	};	
});