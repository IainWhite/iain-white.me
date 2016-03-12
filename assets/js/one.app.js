/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {
	// We extend jQuery by method hasAttr
	$.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

	// Bootstrap
	function handleBootstrap() {
		/* Bootstrap Carousel */
		jQuery('.carousel').carousel({
			interval: 15000,
			pause: 'hover'
		});

		/* Tooltips */
		jQuery('.tooltips').tooltip();
		jQuery('.tooltips-show').tooltip('show');
		jQuery('.tooltips-hide').tooltip('hide');
		jQuery('.tooltips-toggle').tooltip('toggle');
		jQuery('.tooltips-destroy').tooltip('destroy');

		/* Popovers */
		jQuery('.popovers').popover();
		jQuery('.popovers-show').popover('show');
		jQuery('.popovers-hide').popover('hide');
		jQuery('.popovers-toggle').popover('toggle');
		jQuery('.popovers-destroy').popover('destroy');
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		var EqualHeightColumns = function () {
			$('.equal-height-columns').each(function() {
				heights = [];
				$('.equal-height-column', this).each(function() {
					$(this).removeAttr('style');
					heights.push($(this).height()); // Write column's heights to the array
				});
				$('.equal-height-column', this).height(Math.max.apply(Math, heights)); // Find and set max
			});
		}

		EqualHeightColumns();
		$(window).resize(function() {
			EqualHeightColumns();
		});
		$(window).load(function() {
			EqualHeightColumns();
		});
	}

	// Equal Height Image-Columns
	function handleEqualHeightColumns__Images() {
		var EqualHeightColumns__Images = function () {
			$('.equal-height-columns-v2').each(function() {
				var heights = [];
				$('.equal-height-column-v2', this).each(function() {
					$(this).removeAttr('style');
					heights.push($(this).height()); // Write column's heights to the array
				});
				$('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max
				$('.equal-height-column-v2', this).each(function() {
					if ($(this).hasAttr('data-image-src')) {
						$(this).css('background', 'url('+$(this).attr('data-image-src')+') no-repeat scroll 50% 0 / cover');
					}
				});
			});
		}
    $('.equal-height-columns-v2').ready(function() {
      EqualHeightColumns__Images();
      setTimeout(EqualHeightColumns__Images, 1);
			setTimeout(handleValignMiddle, 1);
    });
		$(window).resize(function() {
			EqualHeightColumns__Images();
		});

        // IW New
        $(window).load(function() {
            EqualHeightColumns__Images();
        });
	}

	// Full Screen
	var handleFullscreen = function() {
		var WindowHeight = $(window).height();
		var HeaderHeight = 0;

		if ($(document.body).hasClass('promo-padding-top')) {
			HeaderHeight = $('.header').height();
		} else {
			HeaderHeight = 0;
		}

		$('.fullheight').css('height', WindowHeight - HeaderHeight);

		$(window).resize(function() {
			var WindowHeight = $(window).height();
			$('.fullheight').css('height', WindowHeight - HeaderHeight);
		});
	}

	// Align Middle
	var handleValignMiddle = function() {
		$(document).ready(function() {
			$('.valign__middle').each(function() {
				$(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
			});
		});
		$(window).resize(function() {
			$('.valign__middle').each(function() {
				$(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
			});
		});
	}

	// Header
	function handleHeader() {
		// jQuery to collapse the navbar on scroll
		if ($('.navbar').offset().top > 150) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		}
		$(window).scroll(function() {
			if ($('.navbar').offset().top > 150) {
				$('.navbar-fixed-top').addClass('top-nav-collapse');
			} else {
				$('.navbar-fixed-top').removeClass('top-nav-collapse');
			}
		});

		var $offset = 0;
		if ($('.one-page-nav-scrolling').hasClass('one-page-nav__fixed')) {
			$offset = $(".one-page-nav-scrolling").height()+8;
		}
		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$('.page-scroll a').bind('click', function(event) {
			var $position = $($(this).attr('href')).offset().top;
			$('html, body').stop().animate({
				scrollTop: $position - $offset
			}, 600);
			event.preventDefault();
		});

		var $scrollspy = $('body').scrollspy({target: '.one-page-nav-scrolling', offset: $offset+2});

		// Collapse Navbar When It's Clickicked
		$(window).scroll(function() {
			$('.navbar-collapse.in').collapse('hide');
		});
	}

	return {
		init: function() {
			handleBootstrap();
            handleEqualHeightColumns();
            handleEqualHeightColumns__Images();
			handleFullscreen();
			handleValignMiddle();
			handleHeader();
		},

		initCounter: function() {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		initParallaxBg: function() {
			$(window).load(function() {
				jQuery('.parallaxBg').parallax('50%', 0.4);
				jQuery('.parallaxBg1').parallax('50%', 0.2);
			});
		},

		initParallaxBg2: function() {
			$(window).load(function() {
				jQuery('.parallaxBg').parallax('50%', '50%');
			});
		},
	};
}();

$(document).ready(function()
{
    $('.iw-mobile').html('<a class="tel" href="tel:0406678337">04 06 678 337</a>');
    $('.iw-email').html('<a class="email" href="mailto:iain@whiteinternet.com">iain@whiteinternet.com</a>');
});

$(function() {
	$(".fullscreen-static-image").backstretch(["assets/images/promo/img1.jpg", "assets/images/promo/img2.jpg",  "assets/images/promo/img3.jpg"],
		{duration: 5000, fade:1500});
});

paceOptions = {
    // Disable the 'elements' source
    elements: false,

    // Only show the progress on regular and ajax-y page navigation,
    // not every request
    restartOnRequestAfter: false
}


var Owl2Carouselv1 = function () {

	return {

		// Owl Carousel v1
		initOwl2Carouselv1: function () {
			$('.owl2-carousel-v1').owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				items: 1,
				singleItem:true,
				margin: 0,
				loop: true,
			})
		}

	};

}();

var Owl2Carouselv2 = function () {

	return {

		// Owl Carousel v2
		initOwl2Carouselv2: function () {
			$('.owl2-carousel-v2').owlCarousel({
				items: 2,
				margin: 10,
				loop: true,
				nav: true,
				navText: [,],
				responsive: {
					300:{
						items: 1
					},
					450:{
						items: 2
					},
				},
			})
		}

	};

}();

var Owl2Carouselv3 = function () {
	return {
		// Owl Carousel v3
		initOwl2Carouselv3: function () {
			$('.owl2-carousel-v3').owlCarousel({
				margin: 20,
				loop: true,
				responsiveClass: true,
				responsive: {
					0:{
						items: 2,
					},
					500:{
						items: 3,
					},
					650:{
						items: 4,
					},
					1000:{
						items: 5,
					},
					1200:{
						items: 6,
					}
				}
			})
		}
	};
}();

var Owl2Carouselv4 = function () {

	return {

		// Owl Carousel v4
		initOwl2Carouselv4: function () {
			$('.owl2-carousel-v4').owlCarousel({
				loop: true,
				autoplay: true,
				margin: 10,
				autoplayTimeout: 10000,
				autoplayHoverPause: true,
				responsive: {
					0:{
						items: 1,
					},
					600:{
						items: 2,
					},
					1000:{
						items: 3,
					},
					1200:{
						items: 4,
					}
				}
			})
		}

	};

}();
