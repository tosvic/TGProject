const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

// Store number of passports and text to be displayed
const slideCount = slides.length;
let activeSlide = 0;

// To change the slides every 3 secs
setInterval(() => {
slides[activeSlide].classList.remove('active');
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
}, 3000);