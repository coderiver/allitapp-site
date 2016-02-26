$(document).ready(function() {

	//scroll
	var lastScrollTop = 0;

	$('.out').on('scroll', function(){
		$(window).trigger('scroll');
	});

	$(window).scroll(function() {
		scrollMove();
	});

	//Move to next slide
	function moveToNextSlide() {
		var current = $('.section.is-active').index(),
			active  = 'is-active',
			animate  = 'is-active is-animate';
		$('.section').removeClass(animate).eq(current + 1).addClass(active);
		if (!$('.section').last().hasClass('is-active')) {
			$('.scroll').height($('.scroll').height() + 20);
			$('.out').perfectScrollbar('update');
		}
	}

	//Move to prev slide
	function moveToPrevSlide() {
		var current = $('.section.is-active').index(),
			active  = 'is-active',
			animate  = 'is-active is-animate';

		$('.section').removeClass(animate).eq(current - 1).addClass(active);

		if (!$('.section').first().hasClass('is-active')) {
			$('.scroll').height($('.scroll').height() - 20);
			$('.out').perfectScrollbar('update');
		}
	}
	//Animate leave Slide
	function animateLeave() {
		var current = $('.section.is-active').index(),
			active  = 'is-animate';

		$('.section').removeClass(active).eq(current + 1).addClass(active);
	}

	function scrollMove() {
		var st = $('.out').scrollTop();
		//scroll detection
		if (st > lastScrollTop){
			console.log('DOWN');
			
			if (!$('.js-ads').hasClass('animation-finish')) {
				adsAnimation();
			}
			// affiliateAnimation();

		} else {
			console.log('UP');
			moveToPrevSlide();
			if ($('.js-ads').hasClass('animation-finish')) {
				$('.js-ads').removeClass('animation-finish')
			}
		}
		lastScrollTop = st;
	}

	//scrollToggle
	function disableScroll() {
		$('.out').perfectScrollbar('destroy');
	}
	function enableScroll() {
		$('.out').perfectScrollbar();
	}
	function firstCallForScroll() {
		$('.out').perfectScrollbar();
	}
	//varMain
	var slideMain = $('.js-main'),
		//BigLogo
		logoRed = $('.js-red-square'),
		logoGreen = $('.js-green-square'),
		logoGreenIn = $('.js-green-square div'),
		logoViolet = $('.js-violet-square'),
		logoBlue = $('.js-blue-square'),
		logoName = $('.js-logo-name'),
		//mainBgBlocks
		mainLeft = $('.js-main-left'),
		mainRight = $('.js-main-right'),
		mainText = $('.js-main-text');

	//header/footer
	var headerBtn = $('.js-show-menu'),
		footer = $('.js-footer');

	function main() {
		slideMain.addClass('is-active');
	}
	//tween Main
	var mainTm = new TimelineMax({ pause: true });

	mainTm
		.add(main)
		.from(logoGreen, 0.5, {
			scale: 0.5, 
			opacity: 0,
			left: "20%"
			}
		)
		.from(logoViolet, 0.5, {
			opacity: 0
			},
			"-=0.25"
		)
		.from(logoBlue, 0.5, {
			opacity: 0,
			left: "30px"
			},
			"-=0.6"
		)
		.from(logoRed, 0.5, {
			opacity: 0,
			right: "30px"
			},
			"-=0.6"
		)
		.from(logoName, 0.7, {
			opacity: 0,
			left: '20%'
			},
			"-=0.6"
		)
		.from(mainLeft, 1.2, {
			left: '-100%',
			bottom: '-45%'
			},
			"-=1.2"
		)
		.from(mainRight, 1.2, {
			right: '-100%',
			top: '-15%'
			},
			"-=1.2"
		)
		.from(mainText, 0.4, {
			y: '70px',
			opacity: 0
			},
			"-=0.25"
		)
		.from(headerBtn, 0.5, {
			x: '60px'
			}
		)
		.from(footer, 0.5, {
			bottom: '-70px'
			},
			"-=0.5"
		)
		.add(firstCallForScroll);

	//tween Ads
	var ads = new TimelineMax({ pause: true });

	var adsSlide = $('.js-ads'),
		adsTitle = adsSlide.find('.js-title'),
		adsSubtitle = adsSlide.find('.js-subtitle'),
		adsText = adsSlide.find('.js-text');

	//array
	var adsList = [adsTitle, adsSubtitle, adsText];

	function footerAds() {
		footer.addClass('is-ads');
	}

	function animatedFinish() {
		adsSlide.addClass('animation-finish');
	}

	function adsAnimation() {
		ads
			.add(animatedFinish)
			.add(disableScroll)
			.add(animateLeave)
			.to(logoBlue, 0.5, {
					x: '-40%',
					opacity: 0
				}
			)
			.to(logoRed, 0.5, {
					x: '40%',
					opacity: 0
				},
				"-=0.5"
			)
			.to(logoViolet, 0.5, {
					x: '-20%',
					opacity: 0
				},
				"-=0.5"
			)
			.to(logoName, 0.5, {
					left: '61%',
					opacity: 0
				},
				"-=0.5"
			)
			.fromTo(logoGreenIn, 1, {
					x: '-50%',
					y: '-50%',					
				}, {
					rotation: '-60deg',
					x: '-50%',
					y: '-50%',
					scale: '15'
				},
				"-=0.05"
			)
			.add(moveToNextSlide)
			.add(footerAds, "-=1")
			.from(adsSlide, 0.7, {
					x: '200%'
				},
				"-=1"
			)
			.staggerFrom(adsList, 0.5, {
					opacity: 0,
					y: '50px'
				}, 
				0.3,
				"-=0.4"
			)
			.add(enableScroll);

		if (adsSlide.hasClass('is-animate')) {
			ads.play();
		}

	}

	//tween Affiliate
	var affiliate = new TimelineMax({ pause: true });

	var affiliateSlide = $('.js-affiliate'),
		affiliateTitle = affiliateSlide.find('.js-title'),
		affiliateSubtitle = affiliateSlide.find('.js-subtitle'),
		affiliateText = affiliateSlide.find('.js-text');

	//array
	var affiliateList = [affiliateTitle, affiliateSubtitle, affiliateText];

	function affiliateAnimation() {
		affiliate
			.add(disableScroll)
			.add(moveToNextSlide)
			.add(animateLeave)
			.staggerTo(adsList, 0.5, {
				opacity: 0,
				y: '-150px'
				}, 
				0.3,
				"-=0.4"
			)			
			.from(affiliateSlide, 0.7, {
					x: '200%'
				}
			)
			.add(enableScroll);

		if (affiliateSlide.hasClass('is-animate')) {
			affiliate.play();
		}

	}



});