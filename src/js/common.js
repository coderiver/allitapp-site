$(document).ready(function() {


	$('.js-toggle-news').click(function(evt) {
		evt.preventDefault();
		$(this).find('.news-ico').toggleClass('is-arrow').parents('.news__bl').find('.js-content').slideToggle();
	});

	$('.js-fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		},
		openEffect: 'elastic',
		padding: 0
	});


});