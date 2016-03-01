$(document).ready(function() {

	//header/footer
	var headerBtn = $('.js-show-menu'),
		footer = $('.js-footer');

	function footerAds() {
		footer.addClass('is-ads');
	}

	//Slides vars
	var currentIndex = 0,
		slides = $('.section'),
		mainSl = slides.eq(0),
		adsSl = slides.eq(1),
		affiliateSl = slides.eq(2),
		companySl = slides.eq(3),
		aboutSl = slides.eq(4),
		teamSl = slides.eq(5),
		newsSl = slides.eq(6);

	//varMain
	var slideMain = slides.eq(0),
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

	//varAds
	var adsSlide = adsSl,
		adsTitle = adsSlide.find('.js-title'),
		adsSubtitle = adsSlide.find('.js-subtitle'),
		adsText = adsSlide.find('.js-text');

	//array
	var adsList = [adsTitle, adsSubtitle, adsText];

	//varAffiliate
	var affiliateSlide = affiliateSl,
		affiliateTitle = affiliateSlide.find('.js-title'),
		affiliateSubtitle = affiliateSlide.find('.js-subtitle'),
		affiliateText = affiliateSlide.find('.js-text');

	//array
	var affiliateList = [affiliateTitle, affiliateSubtitle, affiliateText];

	//varCompany
	var companySlide = companySl,
		companyTitle = companySlide.find('.js-title'),
		companySubtitle = companySlide.find('.js-subtitle'),
		companyText = companySlide.find('.js-text');

	//array
	var companyList = [companyTitle, companySubtitle, companyText];

	//varAbout
	var aboutSlide = aboutSl,
		aboutTitle = aboutSlide.find('.js-title'),
		aboutText = aboutSlide.find('.js-text'),
		aboutSkew = aboutSlide.find('.js-skew div'),
		aboutModel = aboutSlide.find('.js-model');

	//array
	var aboutList = [aboutTitle, aboutText];

	//varTeam
	var teamSlide = teamSl,
		teamItem = teamSlide.find('.js-item');

	//array
	var teamList = [];
	teamItem.each(function() {
		teamList.push($(this));
	});

	//varNews
	var newsSlide = newsSl,
		newsTitle = newsSlide.find('.js-title'),
		newsSubtitle = newsSlide.find('.js-subtitle'),
		newsText = newsSlide.find('.js-text');

	//array
	var newsList = [newsTitle, newsSubtitle, newsText];

	//Animations
	var animationDown = [
		//main
		new TimelineMax({paused: true})
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
			.add(firstCallForScroll),
		//ads
		new TimelineMax({paused: true})
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
			.add(animateLeave)
			.set([logoGreenIn, logoBlue, logoRed, logoViolet, logoName], {clearProps:'all'}),
		//affiliate
		new TimelineMax({paused: true})
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
			.add(animateLeave)
			.set([adsSlide, adsTitle, adsSubtitle, adsText], {clearProps: 'all'}),
		//company
		new TimelineMax({paused: true})
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
			.add(animateLeave)
			.set([affiliateSlide, affiliateTitle, affiliateSubtitle, affiliateText], {clearProps:'all'}),
		//about
		new TimelineMax({paused: true})
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
			.from(aboutSlide, 0.7, {
					x: '300%'
				},
				"-=0.7"
			)
			.from(aboutSkew, 0.9, {
					x: '100%',
					y: '50%'
				},
				"-=0.7"
			)
			.fromTo(aboutModel, 0.5, {
					y: '-50%',
					x: '100%',
					ease:Power2.easeOut
				}, {
					y: '-50%',
					x: '0%',
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
			.add(animateLeave)
			.set([companySlide, companyTitle, companySubtitle, companyText], {clearProps:'all'}),
		//team
		new TimelineMax({paused: true})
			.to(aboutSlide, 0.6, {
					y: '-100%'
				}
			)
			.fromTo(teamSlide, 0.6, {
					y: '100%'
				}, {
					y: '0%'
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
			.add(animateLeave)
			.set([aboutSlide, aboutTitle, aboutSkew, aboutText, teamList], {clearProps:'all'}),
		//news
		new TimelineMax({paused: true})
			.staggerTo(teamList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3,
				"-=0.4"
			)
			.to(teamSlide, 0.7, {
					x: '0%'
				}
			)
			.from(newsSlide, 0.7, {
					x: '180%'
				},
				"-=0.7"
			)
			.staggerFrom(newsList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave)
			.set([teamSlide, teamList], {clearProps:'all'}),
	];
	var animationUp = [
		//ads
		new TimelineMax({paused: true})
			.to(adsSlide, 0.7, {
					x: '200%'
				}
			)
			.set(adsSlide, {clearProps: 'all'})
			.add(animateLeave),
		//affiliate
		new TimelineMax({paused: true})
			.to(affiliateSlide, 0.7, {
					x: '250%'
				}
			)
			.fromTo(adsSlide, 0.7, {
					x: '-145%'
				}, {
					x: '0%'
				},
				"-=0.7"
			)
			.set(affiliateSlide, {clearProps: 'all'})
			.add(animateLeave),
		//company
		new TimelineMax({paused: true})
			.to(companySlide, 0.7, {
					x: '250%'
				}
			)
			.fromTo(affiliateSlide, 0.7, {
					x: '-145%'
				}, {
					x: '0%'
				},
				"-=0.7"
			)
			.set(companySlide, {clearProps: 'all'})
			.add(animateLeave),
		//about
		new TimelineMax({paused: true})
			.to(aboutSkew, 0.9, {
					x: '100%',
					y: '50%'
				}
			)
			.to(aboutSlide, 0.7, {
					x: '300%'
				},
				"-=0.9"
			)
			.fromTo(companySlide, 0.7, {
					x: '-145%'
				}, {
					x: '0%'
				},
				"-=0.9"
			)
			.set(aboutSlide, {clearProps: 'all'})
			.add(animateLeave),
		//team
		new TimelineMax({paused: true})
			.fromTo(teamSlide, 0.7, {
					y: '0%'
				}, {
					y: '100%'
				}
			)
			.set(teamSlide, {clearProps: 'all'})
			.add(animateLeave),
		//news
		new TimelineMax({paused: true})
			.to(newsSlide, 0.7, {
					x: '180%' 
				},
				"-=0.9"
			)
			.to(teamSlide, 0.7, {
					x: '0%'
				},
				"-=0.9"
			)
			.staggerFromTo(teamList, 0.4, {
					opacity: 0,
					y: '60px'
				}, {
					opacity: 1,
					y: '0%'
				},
				0.3,
				"-=0.4"
			)
			.set([newsSlide], {clearProps: 'all'})
			.add(animateLeave),
	];

	//scroll
	var lastScrollTop = 0;

	$('.out').on('scroll', function(){
		$(window).trigger('scroll');
	});

	$(window).scroll(function() {
		scrollMove();
	});

	//MainSlideAnimationOnLoad!!!
	animationDown[currentIndex].play();


	//Move to next slide
	function moveToNextSlide() {
		disableScroll();
		currentIndex = currentIndex + 1;
		slides.eq(currentIndex).addClass('is-animate');
		animationDown[currentIndex].play(0);

		if (currentIndex != 6) {
			$('.scroll').height($('.scroll').height() + 20);
			$('.out').perfectScrollbar('update');
		}
	}

	//Move to prev slide
	function moveToPrevSlide() {
		disableScroll();
		currentIndex = currentIndex - 1;
		slides.eq(currentIndex).addClass('is-animate');
		animationUp[currentIndex].play(0);
		console.log(currentIndex)
		if (currentIndex != 0) {
			$('.scroll').height($('.scroll').height() + 20);
			$('.out').perfectScrollbar('update');
		}
	}
	//Animate leave Slide
	function animateLeave() {
		slides.filter(".is-active").removeClass('is-active');
		slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
		enableScroll();
		console.log('animated');
	}

	function scrollMove() {
		var st = $('.out').scrollTop();
		//scroll detection
		if (st > lastScrollTop){
			console.log('DOWN');
			moveToNextSlide();

		} else {
			console.log('UP');
			moveToPrevSlide();
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
});