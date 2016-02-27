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
