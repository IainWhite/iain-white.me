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
