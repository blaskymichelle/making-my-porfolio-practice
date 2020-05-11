$(document).ready(function(){
	$('.menu-toggle').on('click', function() {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggle').removeClass('open');
		$('.top-nav').removeClass('open');
	});
});	
