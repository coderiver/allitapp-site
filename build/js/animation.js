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
		var current = $('.section.is-active'),
			currentIndex = current.index(),
			animate = 'is-animate';

		disableScroll();
		$('.section').eq(currentIndex + 1).addClass(animate);

		console.log(currentIndex);

		if (!$('.section').last().hasClass('is-active')) {
			$('.scroll').height($('.scroll').height() + 20);
			$('.out').perfectScrollbar('update');
		}
	}

	//Move to prev slide
	function moveToPrevSlide() {
		var current = $('.section.is-active'),
			currentIndex = current.index(),
			animate  = 'is-animate';
		disableScroll();
		current.siblings('.section').eq(currentIndex - 1).addClass(animate);
		console.log(currentIndex);
		if (!$('.section').first().hasClass('is-active')) {
			$('.scroll').height($('.scroll').height() - 20);
			$('.out').perfectScrollbar('update');
		}
	}
	//Animate leave Slide
	function animateLeave() {
		var current = $('.section.is-active'),
			currentIndex = current.index(),
			active  = 'is-active',
			animated = $('.section.is-animate');

		current.removeClass(active);
		animated.addClass(active).removeClass('is-animate');
		enableScroll();
		console.log('animated');
	}

	function scrollMove() {
		var st = $('.out').scrollTop();
		//scroll detection
		if (st > lastScrollTop){
			console.log('DOWN');
			moveToNextSlide();
			if ($('.js-ads').hasClass('is-animate')) {
				adsAnimation();
			}
			if ($('.js-affiliate').hasClass('is-animate')) {
				affiliateAnimation();
			}
			if ($('.js-company').hasClass('is-animate')) {
				companyAnimation();
			}
			if ($('.js-news').hasClass('is-animate')) {
				newsAnimation();
			}
			if ($('.js-about').hasClass('is-animate')) {
				aboutAnimation();
			}
			if ($('.js-team').hasClass('is-animate')) {
				teamAnimation();
			}

		} else {
			console.log('UP');
			moveToPrevSlide();
			if ($('.js-main').hasClass('is-animate')) {
				adsAnimationUp();
			}
			// if ($('.js-affiliate').hasClass('is-animate')) {
			// 	affiliateAnimation();
			// }
			// if ($('.js-company').hasClass('is-animate')) {
			// 	companyAnimation();
			// }
			// if ($('.js-news').hasClass('is-animate')) {
			// 	newsAnimation();
			// }
			// if ($('.js-about').hasClass('is-animate')) {
			// 	aboutAnimation();
			// }
			// if ($('.js-team').hasClass('is-animate')) {
			// 	teamAnimation();
			// }
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

	//remove styles after tween ending
	// function allRemover() {
	// 	var a = [$(logoRed), $(logoGreenIn), $(logoGreen), $(logoViolet), $(logoBlue), $(logoName)];
	// 	for (var i = 0; i < a.length; i++) {
	// 		a[i].removeAttr('style');
	// 	};
	// }

	// function removeAds() {
	// 	$('.js-ads').removeAttr('style');
	// }
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
			.add(animateLeave);
	}

	function adsAnimationUp() {
		ads
			//.add(allRemover)
			.set([logoGreenIn, logoBlue, logoRed, logoViolet, logoName], {clearProps:'all'})
			.to(adsSlide, 0.7, {
					x: '200%'
				}
			)
			.set(adsSlide, {clearProps: 'all'})
			.add(animateLeave);
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
			.staggerTo(adsList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3,
				"-=0.4"
			)
			.to(adsSlide, 0.7, {
					x: '-145%'
				}
			)
			.from(affiliateSlide, 0.7, {
					x: '250%'
				},
				"-=0.7"
			)
			.staggerFrom(affiliateList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave);
	}

	//tween Company
	var company = new TimelineMax({ pause: true });

	var companySlide = $('.js-company'),
		companyTitle = companySlide.find('.js-title'),
		companySubtitle = companySlide.find('.js-subtitle'),
		companyText = companySlide.find('.js-text');

	//array
	var companyList = [companyTitle, companySubtitle, companyText];

	function companyAnimation() {
		company
			.staggerTo(affiliateList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3,
				"-=0.4"
			)
			.to(affiliateSlide, 0.7, {
					x: '-145%'
				}
			)
			.from(companySlide, 0.9, {
					x: '250%'
				},
				"-=0.7"
			)
			.staggerFrom(companyList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave);
	}

	//tween News
	var news = new TimelineMax({ pause: true });

	var newsSlide = $('.js-news'),
		newsTitle = newsSlide.find('.js-title'),
		newsSubtitle = newsSlide.find('.js-subtitle'),
		newsText = newsSlide.find('.js-text');

	//array
	var newsList = [newsTitle, newsSubtitle, newsText];

	function newsAnimation() {
		news
			.staggerTo(companyList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3,
				"-=0.4"
			)
			.to(companySlide, 0.7, {
					x: '-145%'
				}
			)
			.from(newsSlide, 0.9, {
					x: '200%'
				},
				"-=0.7"
			)
			.staggerFrom(newsList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave);
	}

	//tween News
	var about = new TimelineMax({ pause: true });

	var aboutSlide = $('.js-about'),
		aboutTitle = aboutSlide.find('.js-title'),
		aboutText = aboutSlide.find('.js-text'),
		aboutSkew = aboutSlide.find('.js-skew'),
		aboutModel = aboutSlide.find('.js-model');

	//array
	var aboutList = [aboutTitle, aboutText];

	function aboutAnimation() {
		about
			.staggerTo(newsList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3,
				"-=0.4"
			)
			.to(newsSlide, 0.6, {
					y: '-165%'
				}
			)
			.from(aboutSlide, 0.4, {
					y: '155%'
				},
				"-=0.9"
			)
			.from(aboutSkew, 0.7, {
					y: '130%',
					ease:Power2.easeOut
				},
				"-=0.3"
			)
			.from(aboutModel, 0.5, {
					x: '100%',
					ease:Power2.easeOut
				},
				"-=0.5"
			)
			.staggerFrom(aboutList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave);
	}

	//tween Team
	var team = new TimelineMax({ pause: true });

	var teamSlide = $('.js-team'),
		teamItem = teamSlide.find('.js-item');

	//array
	var teamList = [];
	teamItem.each(function() {
		teamList.push($(this));
	});

	function teamAnimation() {
		team
			.to(aboutSlide, 0.6, {
					y: '-100%'
				}
			)
			.from(teamSlide, 0.6, {
					y: '100%'
				},
				"-=0.6"
			)
			.staggerFrom(teamList, 0.4, {
					opacity: 0,
					y: '60px'
				},
				0.3,
				"-=0.4"
			)
			.add(animateLeave);
	}

});