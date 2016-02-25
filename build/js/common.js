$(document).ready(function() {

	$('.js-show-menu').click(function(evt) {
		evt.preventDefault();
		$('.js-menu').addClass('is-active');
		$('.js-close-menu').addClass('is-active');
	});

	$('.js-close-menu').click(function(evt) {
		evt.preventDefault();
		$(this).removeClass('is-active');
		$('.js-menu').removeClass('is-active');
	});

});