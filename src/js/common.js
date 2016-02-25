$(document).ready(function() {

	$('.js-show-menu').click(function(evt) {
		evt.preventDefault();
		$(this).addClass('is-hidden');
		$('.js-menu').addClass('is-active');
		$('.js-close-menu').addClass('is-active');
	});

	$('.js-close-menu').click(function(evt) {
		evt.preventDefault();
		$(this).removeClass('is-active');
		$('.js-menu').removeClass('is-active');
		$('.js-show-menu').removeClass('is-hidden');
	});

	$('.js-toggle-news').click(function(evt) {
		evt.preventDefault();
		$(this).toggleClass('is-arrow').parent().find('.js-content').slideToggle();
	});

	$('.js-fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});