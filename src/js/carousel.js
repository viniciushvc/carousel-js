var slideIndex = 1;

var indicators = document.getElementsByClassName('carousel-indicators-item');

var slides = document.getElementsByClassName('carousel-item');

for (var i = 0; i < indicators.length; i++) {
	indicators[i].onclick = function () {
		showSlides(slideIndex = i + 1);
	};
}

document.querySelector('.carousel-prev').onclick = function () {
	showSlides(slideIndex -= 1);
};

document.querySelector('.carousel-next').onclick = function () {
	showSlides(slideIndex += 1);
};

function showSlides(n) {

	if (n > slides.length)
		slideIndex = 1;

	if (n < 1)
		slideIndex = slides.length;

	for (var i = 0; i < slides.length; i++)
		slides[i].classList.remove('active');

	for (i = 0; i < indicators.length; i++)
		indicators[i].className = indicators[i].className.replace(' active', '');

	slides[slideIndex - 1].classList.add('active');

	indicators[slideIndex - 1].className += ' active';
}

showSlides(slideIndex);