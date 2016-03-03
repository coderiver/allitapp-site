$(document).ready(function() {

	//header/footer
	var headerBtn = $('.js-show-menu'),
		footer = $('.js-footer');

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
		logo = $('.js-small-logo'),
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
			.add(scrollWheel),
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
			.call(changeColor, ['is-green'])
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
			.from(logo, 0.5, {
					x: '-130%'
				},
				"-=1"
			)
			.from(adsSlide, 0.7, {
					x: '200%'
				},
				"-=1"
			)
			.addLabel('label')
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
				0.3
				// "-=0.4"
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
			.addLabel('label')
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
				0.3
				// "-=0.4"
			)
			.call(changeColor, ['is-red'])
			.to(affiliateSlide, 0.7, {
					x: '-145%'
				}
			)
			.from(companySlide, 0.9, {
					x: '250%'
				},
				"-=0.7"
			)
			.addLabel('label')
			.staggerFrom(companyList, 0.5, {
					opacity: 0,
					y: '50px'
				},
				0.3
			)
			.add(animateLeave)
			.set([aboutSlide, affiliateSlide, affiliateTitle, affiliateSubtitle, affiliateText], {clearProps:'all'}),
		//about
		new TimelineMax({paused: true})
			.staggerTo(companyList, 0.5, {
				opacity: 0,
				y: '-150px'
				},
				0.3
			)
			.to(companySlide, 0.7, {
					x: '-145%'
				}
			)
			.call(changeColor, ['is-brown'])
			.fromTo(aboutSlide, 0.7, {
					x: '300%'
				}, {
					x: '0%'
				},
				"-=0.7"
			)
			.from(aboutSkew, 0.9, {
					x: '100%',
					y: '50%'
				},
				"-=0.7"
			)
			.addLabel('label')
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
					top: '-100%'
				}
			)
			.fromTo(teamSlide, 0.6, {
					y: '100%'
				}, {
					y: '0%'
				},
				"-=0.6"
			)
			.addLabel('label')
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
			.staggerFromTo(teamList, 0.5, {
					opacity: 1,
					y: '0%'
				}, {
					opacity: 0,
					y: '-150px'
				},
				0.3
			)
			.call(changeColor, ['is-blue'])
			.to(teamSlide, 0.7, {
					left: '-180%'
				}
			)
			.addLabel('label')
			.from(newsSlide, 0.7, {
					x: '180%'
				},
				"-=0.9"
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
			.call(changeColor, ['is-first'])
			.to(adsSlide, 0.7, {
					x: '200%'
				}
			)
			.to(logo, 0.5, {
					x: '-130%'
				},
				"-=0.7"
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
			.call(changeColor, ['is-green'])
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
		(function(){
			new TimelineMax()
				.call(changeColor, ['is-red'])
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
				.add(animateLeave);
		}),
		//team
		(function(){
			new TimelineMax()
				.to(teamSlide, 0.7, {
						y: '100%'
					}
				)
				.from(aboutSlide, 0.7, {
						top: '-100%'
					},
					"-=0.7"
				)
				.set([aboutSlide, teamSlide], {clearProps: 'all'})
				.add(animateLeave);
		}),
		//news
		new TimelineMax({paused: true})
			.call(changeColor, ['is-brown'])
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
			.set([teamSlide, newsSlide], {clearProps: 'all'})
			.add(animateLeave),
	];

	//MainSlideAnimationOnLoad!!!
	animationDown[currentIndex].play();

	//Move to next slide
	function moveToNextSlide() {
		currentIndex = currentIndex + 1;
		slides.eq(currentIndex).addClass('is-animate');
		animationDown[currentIndex].play(0);
	}

	//Move to prev slide
	function moveToPrevSlide() {
		currentIndex = currentIndex - 1;
		slides.eq(currentIndex).addClass('is-animate');

		if (typeof animationUp[currentIndex] == 'function') {
			animationUp[currentIndex]();
		} else {
			animationUp[currentIndex].play(0);
		}
	}
	//fastShowSlide
	function fastShowSlide(num) {
		console.log(typeof currentIndex);
		currentIndex = + num;
		console.log(typeof currentIndex);

		// slides.filter('.is-active').removeClass('is-active');

		slides.eq(currentIndex).addClass('is-animate');

		animationDown[currentIndex].play('label');

		console.log(currentIndex);
	}
	//Animate leave Slide
	function animateLeave() {
		slides.filter(".is-active").removeClass('is-active');
		slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
		scrollWheel();
	}

	//scrollToggle

	function changeColor(color) {
		footer.removeClass(footer.attr('class').split(' ').pop()).addClass(color);
		headerBtn.removeClass(headerBtn.attr('class').split(' ').pop()).addClass(color);
	}

	var prevDeltaY = null;
	var direction  = null;
	function scrollWheel() {
		$('.out').one('wheel', function(e) {
			if (!$('.js-menu').hasClass('is-active')) {
				var deltaY = e.originalEvent.deltaY;
				if (deltaY < 0) {
					direction = 'up';
					if (currentIndex == 0) {
						scrollWheel();
					} else {
						moveToPrevSlide();
					}
				} else if (deltaY > 0) {
					direction = 'down';
					if (currentIndex == 6) {
						scrollWheel();
					} else {
						moveToNextSlide();
					}
				} else {
					direction = (prevDeltaY < 0) ? 'up' : 'down';
				}
				prevDeltaY = deltaY;
				console.log(currentIndex);
			};
		});
		console.log('bla');
	}


	$('.js-show-menu').click(function(evt) {
		evt.preventDefault();
		$('.out').off('wheel');
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.js-menu').removeClass('is-active');
			scrollWheel();
		} else {
			$(this).addClass('is-active');
			$('.js-menu').addClass('is-active');
		}
	});

	$('.js-link').click(function(e) {
		e.preventDefault();
		$('.out').off('wheel');
		var id = $(this).attr('href');
		var dataColor = 'is-' + $(this).data('color');
		fastShowSlide(id);
		changeColor(dataColor);
		$('.js-show-menu').removeClass('is-active');
		$('.js-menu').removeClass('is-active');
	});

});