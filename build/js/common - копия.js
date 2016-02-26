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

	//scroll

	var lastScrollTop = 0;
	$('.out').on('scroll', function(){
		$(window).trigger('scroll');
	});
	$(window).scroll(function() {
		var st = $('.out').scrollTop();
		$('.out').perfectScrollbar('destroy');
		if (st > lastScrollTop){
			console.log('DOWN');
			// disableScroll();
		} else {
			console.log('UP');
			// enableScroll();
		}
		console.log(st)
		lastScrollTop = st;
	});

	// $('body').bind('mousewheel', function(e){
 //        if(e.originalEvent.wheelDelta /120 > 0) {
 //            console.log('scrolling up !');
 //        }
 //        else{
 //            console.log('scrolling down !');
 //        }
 //    });

	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	// function preventDefault(e) {
	//   e = e || window.event;
	//   if (e.preventDefault)
	// 	  e.preventDefault();
	//   e.returnValue = false;  
	// }

	// function preventDefaultForScrollKeys(e) {
	// 	if (keys[e.keyCode]) {
	// 		preventDefault(e);
	// 		return false;
	// 	}
	// }

	// function disableScroll() {
	//   if (window.addEventListener) // older FF
	// 	  window.addEventListener('DOMMouseScroll', preventDefault, false);
	//   window.onwheel = preventDefault; // modern standard
	//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	//   window.ontouchmove  = preventDefault; // mobile
	//   document.onkeydown  = preventDefaultForScrollKeys;
	// }

	// function enableScroll() {
	// 	if (window.removeEventListener)
	// 		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	// 	window.onmousewheel = document.onmousewheel = null; 
	// 	window.onwheel = null; 
	// 	window.ontouchmove = null;  
	// 	document.onkeydown = null;  
	// }
	$('.out').perfectScrollbar();


});