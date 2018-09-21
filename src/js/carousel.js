(function Carousel() {

	var i;

	var indicators = document.getElementsByClassName('carousel-indicators-item');

	var slides = document.getElementsByClassName('carousel-item');

	var time = document.querySelector('.carousel').dataset.time;

	var position = findActive();

	/**
	 * Add click event each indicator
	 */
	for (i = 0; i < indicators.length; i++) {
		indicators[i].onclick = function () {
			position++;
			changeSlide();
		};
	}

	/**
	 * Previous slide
	 */
	document.querySelector('.carousel-prev').onclick = function () {
		position--;

		changeSlide();
	};

	/**
	 * Next slide
	 */
	document.querySelector('.carousel-next').onclick = function () {
		position++;

		changeSlide();
	};

	/**
	 * Carousel function
	 */
	function changeSlide() {

		if (position > slides.length)
			position = 1;

		if (position < 1)
			position = slides.length;

		hideSlides();

		activeSlide();
	}

	/**
	 * Mouse over stop slideshow
	 */
	document.querySelector('.carousel').onmouseover = function () {
		window.clearTimeout(timer);
	};

	/**
	 * Mouse out start slideshow
	 */
	document.querySelector('.carousel').onmouseout = function () {
		timer = window.setTimeout(autoSlide, time);
	};

	/**
	 * Automatic slide
	 */
	var timer;
	function autoSlide() {
		if (time) {
			position++;

			changeSlide();

			timer = window.setTimeout(autoSlide, time);
		}
	}

	/**
	 * Hide slides
	 */
	function hideSlides() {
		for (i = 0; i < slides.length; i++)
			slides[i].classList.remove('active');

		for (i = 0; i < indicators.length; i++)
			indicators[i].className = indicators[i].className.replace(' active', '');
	}

	/**
	 * Active slide
	 */
	function activeSlide() {
		if (slides.length)
			slides[position - 1].classList.add('active');

		if (indicators.length)
			indicators[position - 1].className += ' active';
	}

	/**
	 * Find current active slide 
	 */
	function findActive() {
		for (i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active'))
				return i + 1;
		}
	}

	autoSlide();

})();