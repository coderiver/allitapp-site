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

	//varNews
	var newsSlide = newsSl,
		newsTitle = newsSlide.find('.js-title'),
		newsSubtitle = newsSlide.find('.js-subtitle'),
		newsText = newsSlide.find('.js-text');

	//array
	var newsList = [newsTitle, newsSubtitle, newsText];



		var teamItem = $('.js-item');

		$('.about .section__block').each(function() {
			var about = 'about';
			var teamBlock = $('.js-team');
			$(this).scroll(function() {
				var aboutTop = $(this).scrollTop();
				var teamTop = teamBlock.position().top;
				var teamHeight = teamBlock.outerHeight();
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
				.add(navBtns),
				// .add(scrollWheel),
			//ads
			(function(){
				new TimelineMax()
					.call(showarrows, [1,1])
					.add(btnsOff)
					
					.call(changeColor, ['is-green'])
					
					// .to(logo, 0.5, {
					// 		x: '0%'
					// 	},
					// 	"-=0.2"
					// )
					
			}),
			//affiliate
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(changeColor, ['is-red is-affilates'])
					
					.add(navBtns)
					// .set([adsTitle, adsSubtitle, adsText, affiliateTitle, affiliateSubtitle, affiliateText], {clearProps: 'all'});
			}),
			//company
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(changeColor, ['is-red'])
					
					.add(navBtns)
					// .set([affiliateTitle, affiliateSubtitle, affiliateText, companyTitle, companySubtitle, companyText], {clearProps:'all'});
			}),
			//about
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(changeColor, ['is-brown'])
					
					
					.add(navBtns)
					// .set([companyTitle, companySubtitle, companyText, aboutTitle, aboutText, aboutModel], {clearProps:'all'});
			}),
			//news
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-blue'])
					// .to(logo, 0.5, {
					// 		x: '0%'
					// 	},
					// 	"-=0.2"
					// )
					
					
					.add(navBtns)
			})
		];
		
		var animationClick = [
			//main
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-first'])
					// .to(logo, 0.5, {
					// 	x: '-130%'
					// })
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
					// .add(scrollWheel)
					.set([logoGreenIn, logoBlue, logoRed, logoViolet, logoName, logo], {clearProps:'all'})
					
					.add(navBtns);
			}),
			//ads
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-green'])
					// .to(logo, 0.5, {
					// 	x: '0%'
					// })
					
					.add(navBtns);
			}),
			//affiliate
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-red is-affilates'])
					// .to(logo, 0.5, {
					// 	x: '0%'
					// })
					
					.add(navBtns);
			}),
			//company
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-red'])
					// .to(logo, 0.5, {
					// 	x: '0%'
					// })
					
					.add(navBtns);
			}),
			//about
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-brown'])
					// .to(logo, 0.5, {
					// 	x: '0%'
					// })
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
					
					.add(navBtns);
				}),
			
			//news
			(function(){
				new TimelineMax()
					.add(btnsOff)
					.call(showarrows, [1,1])
					.call(changeColor, ['is-blue'])
					// .to(logo, 0.5, {
					// 	x: '0%'
					// })
					
					.add(navBtns);
			}),
		]
		//MainSlideAnimationOnLoad!!!
		animationDown[currentIndex].play();
		
		// fastShowSlide
		function fastShowSlide(num) {
			currentIndex = + num; //change typeof
			slides.filter('.is-active').removeClass('is-active');
			slides.eq(currentIndex).addClass('is-animate');
			animationClick[currentIndex]();
		}

		

		//change color for header and footer
		function changeColor(color) {
			b.removeClass('is-first is-red is-green is-brown is-blue is-affilates').addClass(color);
			footer.removeClass('is-first is-red is-green is-brown is-blue').addClass(color);
			headerBtn.removeClass('is-first is-red is-green is-brown is-blue').addClass(color);
		}
		function showarrows(left,right){
			// console.log(left,right);
			// if(left) {$('.button-prev').show();}
			// else{$('.button-prev').hide();}

			// if(right) {$('.button-next').show();}
			// else{$('.button-next').hide();}
		}
		showarrows(1,1);

		

		function slideGoNext(id) {
			sections.slick('slickGoTo', currentIndex);
		};

		var threshold = 50;

	

		
		var btnPrevOn = true;
		var prevColors = ['is-first', 'is-green', 'is-red is-affilates', 'is-red', 'is-brown'];
		function btnPrev() {

			$('body').off('mousedown');
			// moveToPrevSlide();
			// if (currentIndex == 0) {
			// 	mouseDrag();
			// } else {
			if (btnPrevOn == true) {
				currentIndex = currentIndex - 1;
				sections.slick('slickGoTo', currentIndex);
				btnPrevOn = false;
			}
			// 	animationUp[currentIndex]();
			// };
			console.log('btnPrev ' + currentIndex);
			return false;
		};
		function btnNext() {
			$('body').off('mousedown');
			// moveToNextSlide();
			// if (currentIndex == 5) {
			// 	mouseDrag();
			// } else {
			if (btnPrevOn == true) {
				currentIndex = currentIndex + 1;
			// 	animationDown[currentIndex]();
			// };
				sections.slick('slickGoTo', currentIndex);
				btnPrevOn = false;
			}
			console.log(currentIndex);
			return false;
		};
		function btnsOff() {
			// $('body').off('mousedown');
			// $('.js-prev').off('click');
			// $('.js-next').off('click');
		};
		function navBtns() {
			$('.js-prev').on('click', function() {
				btnPrev();
			});
			$('.js-next').on('click', function() {
				btnNext();
			});
		};
		// navBtns();
	// if (window.matchMedia("(max-width: 1024px)").matches) {
	// 	$(window).scroll(function() {
	// 		if ($(window).scrollTop() >= $('#ads').offset().top) {
	// 			logo.addClass('is-active');
	// 		} else {
	// 			logo.removeClass('is-active');
	// 		}
	// 	});
	// }


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
			// mouseDrag();
			navBtns();
		} else {
			$(this).addClass('is-active');
			$('.js-menu').addClass('is-active');
		}
	});

	$('.js-link').click(function(e) {
		e.preventDefault();

		$('.js-show-menu').removeClass('is-active');
	// if (!$('.section').hasClass('is-animate')) {
		// $('.out').off('wheel');
		$('body').off('mousedown');
		var id = $(this).attr('href');
		var dataColor = 'is-' + $(this).data('color');
		fastShowSlide(id);
		changeColor(dataColor);
		slideGoNext(id);
		console.log(id);
		if (id == 0) {
			slides.filter(".is-active").removeClass('is-active');
			slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
		}
	// };
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

		var figure = $('.section.slick-active .js-images div'),
			figureItems = figure.length;

		kadr = parseInt(25*kadr/MAX);
		index = kadr;
		$('.section.slick-active .js-images div.is-active').removeClass('is-active');
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

	// var state = null;
	// function setState() {
	// 	if ($('body').width() < 1024) {
	// 		$('.out').off('wheel');
	// 		currentIndex = 0;
	// 		if (state !== "mobile") {
	// 			state = "mobile";
	// 			slides.removeClass('is-active');
	// 			slides.eq(currentIndex).addClass('is-active').removeClass('is-animate');
	// 			console.log(state, currentIndex);
	// 		}
	// 	} else {
	// 		if (state !== "desktop") {
	// 			$('.out').off('wheel');
	// 			state = "desktop";
	// 			// scrollWheel();
	// 			console.log(state, currentIndex);
	// 			initImages();
	// 		}
	// 	}
	// };

	// $(window).on('resize', function() {
	// 	setState();
	// });

	//news items
	var newsItem = $('.js-news-item'),
		newsPopup = $('.js-popup-news'),
		newsSlider = $('.js-news-slider'),
		newsSlide = $('.popup-news__slide');

	var newsOptions = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		centerPadding: '25%',
		focusOnSelect: true,
		infinite: false
	}

	newsItem.click(function() {
		$('body').off('mousedown');
		var parent = $(this).parents('.js-news-items'),
			newsItems = parent.find('.js-news-item'),
			a = [],
			i,
			currItem = $(this).index();

		newsItems.each(function() {
			a.push($(this).attr('href'));
		});


		newsPopup.addClass('is-active');

		for (i = 0; i < newsItems.length; i++) {
			var id = a[i];
			newsSlider.append($('<div class="popup-news__slide"><img src="' + id + '" alt="' + id + '"></div>'));
			console.log(a, i);
		}
		setTimeout(function() {
			newsSlider.addClass('is-active');
			newsSlider.slick(newsOptions);
			newsSlider.slick('slickGoTo', currItem);
		}, 300);
		return false;
	});

	newsPopup.click(function(event) {
		if (event.target.tagName.toLowerCase() === 'img') {
			event.stopPropagation();
		} else {
			$(this).removeClass('is-active');
			newsSlider.removeClass('is-active');
			newsSlider.slick('unslick');
			$('.popup-news__slide').remove();
			// mouseDrag();
		}
	});

	//main slider
	var sections = $('.js-sections');

	sections.slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		infinite: false,
		arrows: false,
		infinite: true
		// swipe: false
	});
	// sections.on('swipe', function(event, slick, direction){
	// 	console.log(direction);
	// 	slideDrag();
	// });
	sections.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		currentIndex = nextSlide;
		console.log(currentSlide);
		slideDrag();
		if (nextSlide >= 0 && currentSlide != 5 && nextSlide > currentSlide) {
			animationDown[currentIndex]();
			// alert(currentIndex);
		};
		if (nextSlide <= 0) {
			navBtns();
		};
		if (nextSlide > 5) {
			navBtns();
		};
		if (nextSlide < currentSlide) {
			if (nextSlide <= 0) {
				navBtns();
			} else {			
			};
			// if (currentIndex == 1 || currentIndex == 2) {
			// 	changeColor(prevColors[1]);				
			// } else {					
				
			// }
		};
		changeColor(prevColors[currentIndex]);
		console.log(currentSlide, nextSlide, currentIndex);
	});
	sections.on('afterChange', function(event, slick, currentSlide, nextSlide) {
		btnPrevOn = true;
		// toTop();
		// $('.js-prev').on('click', function() {
		// 	if (btnPrevOn = true) {
		// 		currentIndex = currentIndex - 1;
		// 		sections.slick('slickGoTo', currentIndex)			
		// 	};
		// });
	});
	var xStart,
		xNew,
		threshold = 100;
	function slideDrag() {
		// $('.section.slick-active').one('mousedown', function(e) {
		// 	var el = $(this),
		// 		elTitle = el.find('.js-title'),
		// 		elSubtitle = el.find('.js-subtitle'),
		// 		elText = el.find('.js-text'),
		// 		// elInfo = el.find('.js-title, .js-subtitle, .js-text');
		// 		elInfo = el.find('.text');
		// 		xStart = e.pageX;
		// 		console.log(elTitle.text());
		// 	if (elInfo.length) {
		// 		var elInfoTop = elInfo.offset().top;
		// 		var elInfoLeft = elInfo.offset().left;
		// 	}
		// 	var handlers = {			
		// 		mousemove: function(e) {
		// 			xNew = e.pageX;
		// 			// if (xStart < xNew) {
		// 				elInfo.css({
		// 					left: (xStart - xNew)/3
		// 				});				
		// 			// } else {				
		// 			// 	elInfo.css({
		// 			// 		left: xStart - xNew
		// 			// 	});		
		// 			// }
		// 			console.log(xStart, xNew);
		// 		},
		// 		mouseup : function(e){
		// 			$(this).off(handlers);
		// 			xEnd = e.pageX;
		// 			elInfo.removeAttr('style');
		// 			if (xStart > xEnd + threshold) {
		// 				// moveToNextSlide();
		// 				if (currentIndex == 5) {
		// 					slideDrag();
		// 				} else {
		// 					// moveToNextSlide();							
		// 				}
		// 			} else if (xStart < xEnd - threshold) {
		// 				// moveToPrevSlide();
		// 				if (currentIndex == 0) {
		// 					slideDrag();
		// 				} else {
		// 					// moveToPrevSlide();
		// 				}
		// 			} else {
		// 				slideDrag();
		// 			}
		// 		}
		// 	};
		// 	$(document).on(handlers);
		// });		
	}
	slideDrag();
	function toTop() {
		// $('.section').each(function() {
		// 	if (!$(this).hasClass('is-active')) {
		// 		var sectionBlock = $(this).find('.section__block');
		// 		var sectionNews = $(this).find('.news');
		// 		if (sectionBlock.length) {
		// 			// sectionBlock.scrollTop(0);
		// 		};
		// 		if (sectionNews.length) {
		// 			// sectionNews.scrollTop(0);
		// 		};
		// 	};
		// });
	}
	if (!window.matchMedia("(max-width: 1024px)").matches) {
		$('.section__block').perfectScrollbar();
	}
	
});