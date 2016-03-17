$(document).ready(function() {

	//header/footer
	var headerBtn = $('.js-show-menu'),
		footer = $('.js-footer'),
		b = $('body');

	//Slides vars
	var currentIndex = 0,
		slides = $('.section'),
		mainSl = slides.eq(0),
		adsSl = slides.eq(1),
		affiliateSl = slides.eq(2),
		companySl = slides.eq(3),
		aboutSl = slides.eq(4),
		// teamSl = slides.eq(5),
		newsSl = slides.eq(5);

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
	var teamSlide = $('.js-team'),
		teamItem = teamSlide.find('.js-item');

	//array
	// var teamList = [];
	// teamItem.each(function() {
	// 	teamList.push($(this));
	// });

	//varNews
	var newsSlide = newsSl,
		newsTitle = newsSlide.find('.js-title'),
		newsSubtitle = newsSlide.find('.js-subtitle'),
		newsText = newsSlide.find('.js-text');

	//array
	var newsList = [newsTitle, newsSubtitle, newsText];


	// if (!window.matchMedia("(max-width: 1024px)").matches) {
		//Animations

		// team

		// function teamDown() {
		// 	new TimelineMax()
		// 		.staggerFrom(teamList, 0.4, {
		// 				opacity: 0,
		// 				y: '60px'
		// 			},
		// 			0.3,
		// 			"-=0.4"
		// 		)
		// 		.set([teamItem, teamSlide], {clearProps:'all'});
		// };

		var teamItem = $('.js-item');

		aboutSlide.each(function() {
			var about = 'about';
			$(this).scroll(function() {
				var aboutTop = aboutSlide.scrollTop();
				var teamTop = teamSlide.position().top;
				var teamHeight = teamSlide.outerHeight();
				if (aboutTop >= teamTop) {
					if (about !== 'team') {
						about = 'team';
						teamItem.addClass('is-active');
					};
				} else {
					if (about !== 'about') {
						about = 'about';
						teamItem.removeClass('is-active');
					}
				}
				console.log(aboutTop, teamTop, about)
			});
		});
		// (function(){
		// 	new TimelineMax()
		// 		.to(aboutSlide, 0.6, {
		// 				top: '-100%'
		// 			}
		// 		)
		// 		.fromTo(teamSlide, 0.6, {
		// 				y: '100%'
		// 			}, {
		// 				y: '0%'
		// 			},
		// 			"-=0.6"
		// 		)
		// 		.staggerFrom(teamList, 0.4, {
		// 				opacity: 0,
		// 				y: '60px'
		// 			},
		// 			0.3,
		// 			"-=0.4"
		// 		)
		// 		.add(animateLeave)
		// 		.set([aboutSlide, teamItem, teamSlide], {clearProps:'all'});
		// });
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
				.add(mouseDrag),
				// .add(scrollWheel),
			//ads
			(function(){
				new TimelineMax()
					.call(showarrows, [1,1])
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
					.to(logo, 0.5, {
							x: '0%'
						},
						"-=1"
					)
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
					.set([adsSlide, adsTitle, adsSubtitle, adsText, logoGreenIn, logoBlue, logoRed, logoViolet, logoName], {clearProps:'all'});
			}),
			//affiliate
			(function(){
				new TimelineMax()
					.staggerTo(adsList, 0.5, {
						opacity: 0,
						y: '-150px'
						},
						0.3
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
					.set([adsSlide, adsTitle, adsSubtitle, adsText, affiliateSlide, affiliateList], {clearProps: 'all'});
			}),
			//company
			(function(){
				new TimelineMax()
					.staggerTo(affiliateList, 0.5, {
						opacity: 0,
						y: '-150px'
						},
						0.3
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
					.staggerFrom(companyList, 0.5, {
							opacity: 0,
							y: '50px'
						},
						0.3
					)
					.add(animateLeave)
					.set([affiliateSlide, affiliateTitle, affiliateSubtitle, affiliateText, companySlide, companyTitle, companySubtitle, companyText], {clearProps:'all'});
			}),
			//about
			(function(){
				new TimelineMax()
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
					.set([companySlide, companyTitle, companySubtitle, companyText, aboutTitle, aboutText, aboutModel, aboutSkew], {clearProps:'all'});
			}),
			//news
			(function(){
				new TimelineMax()
					// .staggerFromTo(teamList, 0.5, {
					// 		opacity: 1,
					// 		y: '0%'
					// 	}, {
					// 		opacity: 0,
					// 		y: '-150px'
					// 	},
					// 	0.3
					// )
					.call(showarrows, [1,0])
					.call(changeColor, ['is-blue'])
					.to(aboutSlide, 0.9, {
							left: '-180%'
						}
					)
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
					.set([newsSlide, newsTitle, newsSubtitle, newsText, aboutSlide], {clearProps:'all'});
			}),
		];
		var animationUp = [
			//ads
			(function(){
				new TimelineMax()
					.call(changeColor, ['is-first'])
					.call(showarrows, [0,1])
					.to(adsSlide, 0.7, {
							x: '200%'
						}
					)
					.to(logo, 0.5, {
							x: '-130%'
						},
						"-=0.7"
					)
					.set([adsSlide, logo], {clearProps: 'all'})
					.add(animateLeave);
			}),
			//affiliate
			(function(){
				new TimelineMax()
					.call(showarrows, [1,1])
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
					.set([affiliateSlide, adsSlide, adsTitle, adsSubtitle, adsText], {clearProps: 'all'})
					.add(animateLeave);
			}),
			//company
			(function(){
				new TimelineMax()
					.call(changeColor, ['is-green'])
					.call(showarrows, [1,1])
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
					.set([companySlide, affiliateSlide], {clearProps: 'all'})
					.add(animateLeave);
			}),
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
					.set([aboutSlide, aboutSkew, companySlide], {clearProps: 'all'})
					.add(animateLeave);
			}),
			//team
			// (function(){
			// 	new TimelineMax()
			// 		.to(teamSlide, 0.7, {
			// 				y: '100%'
			// 			}
			// 		)
			// 		.from(aboutSlide, 0.7, {
			// 				top: '-100%'
			// 			},
			// 			"-=0.7"
			// 		)
			// 		.set([aboutSlide, teamSlide], {clearProps: 'all'})
			// 		.add(animateLeave);
			// }),
			//news
			(function(){
				new TimelineMax()
					.call(changeColor, ['is-brown'])
					.call(showarrows, [1,1])
					.to(newsSlide, 0.7, {
							x: '180%'
						}
					)
					.from(aboutSlide, 0.7, {
							left: '-180%'
						},
						"-=0.7"
					)
					// .staggerFromTo(teamList, 0.4, {
					// 		opacity: 0,
					// 		y: '60px'
					// 	}, {
					// 		opacity: 1,
					// 		y: '0%'
					// 	},
					// 	0.3
					// )
					.set([aboutSlide, newsSlide, teamItem], {clearProps: 'all'})
					.add(animateLeave);
			}),
		];
		var animationClick = [
			//main
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '-130%'
					})
					.from(logoGreen, 0.5, {
						scale: 0.5,
						opacity: 0,
						left: "20%"
						},
						"-=0.5"
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
					.add(scrollWheel)
					.set([logoGreenIn, logoBlue, logoRed, logoViolet, logoName, logo], {clearProps:'all'});
			}),
			//ads
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '0%'
					})
					.staggerFrom(adsList, 0.5, {
							opacity: 0,
							y: '50px'
						},
						0.3,
						"-=0.5"
					)
					.add(animateLeave)
					.set([adsTitle, adsSubtitle, adsText], {clearProps:'all'});
			}),
			//affiliate
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '0%'
					})
					.staggerFrom(affiliateList, 0.5, {
							opacity: 0,
							y: '50px'
						},
						0.3,
						"-=0.5"
					)
					.add(animateLeave)
					.set([affiliateTitle, affiliateSubtitle, affiliateText], {clearProps: 'all'});
			}),
			//company
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '0%'
					})
					.staggerFrom(companyList, 0.5, {
							opacity: 0,
							y: '50px'
						},
						0.3,
						"-=0.5"
					)
					.add(animateLeave)
					.set([companyText, companyTitle, companySubtitle], {clearProps:'all'});
			}),
			//about
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '0%'
					})
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
					.set([aboutModel, aboutTitle, aboutText], {clearProps:'all'});
				}),
			//team
			// (function(){
			// 	new TimelineMax()
			// 		.to(logo, 0.5, {
			// 			x: '0%'
			// 		})
			// 		.staggerFrom(teamList, 0.4, {
			// 				opacity: 0,
			// 				y: '60px'
			// 			},
			// 			0.3,
			// 			"-=0.5"
			// 		)
			// 		.add(animateLeave)
			// 		.set([teamItem, logo], {clearProps:'all'});
			// 	}),
			//news
			(function(){
				new TimelineMax()
					.to(logo, 0.5, {
						x: '0%'
					})
					.staggerFrom(newsList, 0.5, {
							opacity: 0,
							y: '50px'
						},
					0.3,
						"-=0.5"
					)
					.add(animateLeave)
					.set([newsTitle, newsText, newsSubtitle], {clearProps:'all'});
			}),
		]
		//MainSlideAnimationOnLoad!!!
		animationDown[currentIndex].play();
		//Move to next slide
		function moveToNextSlide() {
			$('.js-prev').off('click');
			$('.js-next').off('click');
			currentIndex = currentIndex + 1;
			slides.eq(currentIndex).addClass('is-animate');
			console.log(currentIndex);
			if (typeof animationDown[currentIndex] == 'function') {
				animationDown[currentIndex]();
			} else {
				animationDown[currentIndex].play(0);
			}
		}

		//Move to prev slide
		function moveToPrevSlide() {
			$('.js-prev').off('click');
			$('.js-next').off('click');
			currentIndex = currentIndex - 1;
			slides.eq(currentIndex).addClass('is-animate');
			console.log(currentIndex);
			if (typeof animationUp[currentIndex] == 'function') {
				animationUp[currentIndex]();
			} else {
				animationUp[currentIndex].play(0);
			}
		}
		//fastShowSlide
		function fastShowSlide(num) {
			currentIndex = + num; //change typeof
			slides.filter('.is-active').removeClass('is-active');
			slides.eq(currentIndex).addClass('is-animate');
			animationClick[currentIndex]();
		}

		//Animate leave Slide
		function animateLeave() {
			slides.filter(".is-active").removeClass('is-active');
			slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
			navBtns();
			if ($(window).width() > 1024) {
				// scrollWheel();
				mouseDrag();
			};
			$(window).on('resize', function() {
				setState();
			});
		}

		//change color for header and footer
		function changeColor(color) {
			b.removeClass(b.attr('class').split(' ').pop()).addClass(color);
			footer.removeClass(footer.attr('class').split(' ').pop()).addClass(color);
			headerBtn.removeClass(headerBtn.attr('class').split(' ').pop()).addClass(color);
		}
		function showarrows(left,right){
			console.log(left,right);
			if(left) {$('.button-prev').show();}
			else{$('.button-prev').hide();}

			if(right) {$('.button-next').show();}
			else{$('.button-next').hide();}
		}
		showarrows(0,1);

		//wheelToggle
		var prevDeltaY = null;
		var direction  = null;
		// function scrollWheel() {
		// 	if (!window.matchMedia("(max-width: 1024px)").matches) {
		// 		$('.out').one('wheel', function(e) {
		// 			if (!$('.js-menu').hasClass('is-active')) {
		// 				//mousewheel direction
		// 				var deltaY = e.originalEvent.deltaY;
		// 				if (deltaY / 50 < 0) {
		// 					direction = 'up';
		// 					if (currentIndex == 0) {
		// 						scrollWheel();
		// 					} else {
		// 						moveToPrevSlide();
		// 					}
		// 				} else if (deltaY > 0) {
		// 					direction = 'down';
		// 					if (currentIndex == 6) {
		// 						scrollWheel();
		// 					} else {
		// 						moveToNextSlide();
		// 					}
		// 				} else {
		// 					direction = (prevDeltaY < 0) ? 'up' : 'down'; //for touchpad
		// 				}
		// 				prevDeltaY = deltaY;
		// 			};
		// 			$(window).off('resize');
		// 		});
		// 	}
		// }

		var threshold = 50;

		function mouseDrag() {
			$('body').one('mousedown', function(e){
				var node = $(this);
				var position = node.offset();
				var xStart = e.pageX;
				// console.log(xStart);
				var handlers = {
					mousemove : function(e){
						var xEnd = e.pageX;
						// console.log(xStart, xEnd);
						// $(this).off(handlers);
					},
					mouseup : function(e){
						$(this).off(handlers);
						xEnd = e.pageX;
						if (xStart > xEnd + threshold) {
							// moveToNextSlide();
							if (currentIndex == 5) {
								mouseDrag();
							} else {
								moveToNextSlide();
							}
						} else if (xStart < xEnd - threshold) {
							// moveToPrevSlide();
							if (currentIndex == 0) {
								mouseDrag();
							} else {
								moveToPrevSlide();
							}
						} else {
							mouseDrag();
						}
					}
				};
				$(document).on(handlers);
			});
		}

		// $('body').on("keydown", function(e){
		// 	if (!$('.js-menu').hasClass('is-active')) {
		// 		if (!$('.section').hasClass('is-animate')) {
		// 			$('.out').off('wheel'); //remove double call for scroll
		// 			if(e.keyCode === 38 || e.keyCode === 37) {
		// 				// up
		// 				if (currentIndex == 0) {
		// 					// scrollWheel();
		// 				} else {
		// 					moveToPrevSlide();
		// 				}
		// 			}
		// 			else if(e.keyCode === 40 || e.keyCode === 39) {
		// 				// down
		// 				if (currentIndex == 6) {
		// 					// scrollWheel();
		// 				} else {
		// 					moveToNextSlide();
		// 				}
		// 			}
		// 		}
		// 	};
		// });
		function btnPrev() {
			$('body').off('mousedown');
			// moveToPrevSlide();
			if (currentIndex == 0) {
				mouseDrag();
			} else {
				moveToPrevSlide();
			}
			return false;
		}
		function btnNext() {
			$('body').off('mousedown');
			// moveToNextSlide();
			if (currentIndex == 5) {
				mouseDrag();
			} else {
				moveToNextSlide();
			}
			return false;
		}
		function navBtns() {
			$('.js-prev').one('click', function() {
				btnPrev();
			});
			$('.js-next').one('click', function() {
				btnNext();
			});
		}
		navBtns();
	if (window.matchMedia("(max-width: 1024px)").matches) {
		$(window).scroll(function() {
			if ($(window).scrollTop() >= $('#ads').offset().top) {
				logo.addClass('is-active');
			} else {
				logo.removeClass('is-active');
			}
		});
	}


	//showMenu
	$('.js-show-menu').click(function(evt) {
		evt.preventDefault();
		// $('.out').off('wheel'); //remove double call for scroll
		$('body').off('mousedown');
		$('.js-prev').off('click');
		$('.js-next').off('click');

		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.js-menu').removeClass('is-active');
			// scrollWheel();
			mouseDrag();
			navBtns();
		} else {
			$(this).addClass('is-active');
			$('.js-menu').addClass('is-active');
		}
	});

	$('.js-link').click(function(e) {
		e.preventDefault();

		$('.js-show-menu').removeClass('is-active');
		if (!window.matchMedia("(max-width: 1024px)").matches) {
			if (!$('.section').hasClass('is-animate')) {
				// $('.out').off('wheel');
				$('body').off('mousedown');
				var id = $(this).attr('href');
				var dataColor = 'is-' + $(this).data('color');
				fastShowSlide(id);
				changeColor(dataColor);
				if (id == 0) {
					slides.filter(".is-active").removeClass('is-active');
					slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
				}
			};
		} else {
			$('html, body').animate({
				scrollTop: $($(this).data('id')).offset().top
			}, 500);
		}
		$('.js-menu').removeClass('is-active');
	});

	//animation models
	var mrefreshinterval = 50; // update display every 100ms
	var dists = [];
	var dist = 0;
	var mousex = 0;
	var current = 0;
	var prev = 0;
	var togo = 0;
	var prevtogo = 0;
	var velo = 0;
	var stopped = 1;
	var velo_set = 0;
	var MAX = $(window).width();
	var index; //current slide

	function setkadr(kadr){

		var figure = $('.section.is-active .js-images div'),
			figureItems = figure.length;

		kadr = parseInt(25*kadr/MAX);
		index = kadr;
		$('.section.is-active .js-images div.is-active').removeClass('is-active');
		if (index <= 0) {
			figure.eq(0).addClass('is-active');
		} else if (index >= figureItems - 1) {
			figure.eq(figureItems - 1).addClass('is-active');
		} else {
			figure.eq(index - 1).addClass('is-active');
		}
	}

	$('html').mousemove(function(e) {
		velo_set = 0;
		mousex = e.pageX;
	});

	var mdraw = function() {

		prev = current;
		current = mousex;

		// ====================
		// begin inertia algo
		// ====================
		if(velo_set){
			velo = velo*0.8;
			if(Math.abs(velo)<3){velo = 0;}
		}
		else{
			if(current==prev) {
				velo = dists[dists.length-1];
				// velo = 20*Math.sign(dists[dists.length-1]);
				velo_set = 1;
			}
			else{
				velo = 0;
				velo_set = 0;
			}
		}
		// ====================
		// end inertia algorithm
		// ====================

		// mouse path
		dist =  (current - prev)*2;
		if(dist>200) dist = 200;

		// add non zero path to array
		if(Math.abs(dist)>1) dists.push(dist);
		if(dists.length>10) dists.splice(0,1);

		//get last pos
		curcur = prevtogo;

		togo = curcur + dist + velo;
		if(!togo) togo = 0;
		// console.log(togo);


		//safe bounds
		if(curcur+dist>MAX){
			togo = MAX;
		}
		if(curcur+dist<0){
			togo = 0;
		}

		// SETTING POSITION
		setkadr(togo);
		prevtogo = togo;
		setTimeout(mdraw, mrefreshinterval);
	}

	setTimeout(mdraw, mrefreshinterval);

	// var win = $('.section');
	// win.each(function() {
	// 	if ($(this).find('.js-images').length) {
	// 		var figure = $(this).find('.js-images div'),
	// 			figureItems = figure.length;
	// 		$(this).mousemove(function(event) {
	// 			var itemWidth = $('.inner').outerWidth(); //hover zone
	// 			var winWidth = $(window).width();
	// 			var currWidth = (winWidth - itemWidth)/2; //side margin
	// 			var x = event.pageX; //mouse position X
	// 			var xZone = event.pageX - (currWidth + itemWidth/4); //mouse start
	// 			var active = $(this).find('.js-images div.is-active');
	// 			var step = Math.round(100 / figureItems);
	// 			if (x >= currWidth + itemWidth/4) {
	// 				var halfItem = itemWidth/2;
	// 				var mouseX = Math.round(xZone/(halfItem/100)); //mouse position inside hover zone from 0 to 100
	// 				var index = Math.round(mouseX / step);
	// 				active.removeClass('is-active');
	// 				if (index <= 0) {
	// 					figure.eq(0).addClass('is-active');
	// 				} else if (index >= figureItems - 1) {
	// 					figure.eq(figureItems - 1).addClass('is-active');
	// 				} else {
	// 					figure.eq(index - 1).addClass('is-active');
	// 				}
	// 			};
	// 		});
	// 	}
	// });

	function initImages() {
		$('.js-images').each(function() {
			if (!window.matchMedia("(max-width: 1024px)").matches) {
				$(this).find('div').each(function() {
					var path = $(this).data('src');
					$(this).attr('style', 'background-image: url('+ path +');');
				});
			};
		});
	}
	initImages();

	var state = null;
	function setState() {
		if ($('body').width() < 1024) {
			$('.out').off('wheel');
			currentIndex = 0;
			if (state !== "mobile") {
				state = "mobile";
				slides.removeClass('is-active');
				slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
				console.log(state, currentIndex);
			}
		} else {
			if (state !== "desktop") {
				$('.out').off('wheel');
				state = "desktop";
				// scrollWheel();
				console.log(state, currentIndex);
				initImages();
			}
		}
	};

	$(window).on('resize', function() {
		setState();
	});



});